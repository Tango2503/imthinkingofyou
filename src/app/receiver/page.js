"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Receiver() {
  const [thought, setThought] = useState(null);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    const fetchThought = async () => {
      if (!id) return;

      try {
        const response = await fetch(`/api/getThought?id=${id}`);
        if (!response.ok) {
          throw new Error('Thought not found.');
        }
        const data = await response.json();
        setThought(data);
      } catch (err) {
        console.error(err);
        setError('hmm, we couldn’t find that thought. maybe it floated away? 🌬️');
      }
    };

    fetchThought();
  }, [id]);

  if (error) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <p className="text-lg opacity-80">{error}</p>
      </main>
    );
  }

  if (!thought) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <p className="text-lg opacity-60">gently retrieving your thought... 🌿</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">

      {/* Soft Header */}
      <p className="text-sm opacity-70">
        🌸 imthinkingofyou.io
      </p>

      {/* Thought Box */}
      <div className="border p-6 rounded-lg bg-gray-100 w-full max-w-md space-y-4">
        <p className="text-lg leading-relaxed">
          {thought.message}
        </p>
        {thought.name && !thought.is_anonymous && (
          <p className="text-sm opacity-60 italic">
            — from {thought.name}
          </p>
        )}
      </div>

      {/* Soft Divider */}
      <hr className="w-1/2 border-t border-gray-300 opacity-50" />

      {/* Reassurance Message */}
      <p className="text-sm opacity-70 max-w-md">
        no need to reply 🌱
        <br />
        feel free to return whenever you like — your thought will always be here
      </p>

      {/* Tiny Soft Footer */}
      <div className="mt-16 text-xs opacity-40">
        a quiet space for small kindnesses
      </div>

    </main>
  );
}
