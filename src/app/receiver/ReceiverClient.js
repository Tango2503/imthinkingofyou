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
      <main className="bg-orange-100 flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <div className="text-3xl text-orange-500 bg-orange-100 rounded px-2 animate-soft-pulse-slow">...</div> {/* pulsing dots */}
          <p className="text-gray-700 text-lg opacity-80">something just for you 🌱</p>
      </main>
    );
  }

  return (
    <main className="bg-orange-100 flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">

      {/* Soft Header */}
      <p className="text-gray-700 text-sm opacity-70 mb-8 border-b-3 border-orange-300 pb-0.3">
        imthinkingofyou.io
      </p>

      {/* Thought Box */}
      <div className="p-10 rounded-lg bg-orange-200 w-full max-w-md">
        <p className="whitespace-pre-line text-gray-700 font-semibold opacity-80">
          {thought.message}
        </p>
        {thought.name && !thought.is_anonymous && (
          <p className="text-sm opacity-60 italic">
            — from {thought.name}
          </p>
        )}
      </div>

      {/* Soft Divider */}
      {/* <hr className="w-1/2 border-t border-gray-300 opacity-50" /> */}

      {/* Reassurance Message */}
      <p className="text-sm opacity-60 max-w-md mt-8">
        no need to reply
        <br />
        feel free to return whenever you like
        <br />
        your thought will always be here 
      </p>

      {/* Tiny Soft Footer */}
      <div className="mt-16 text-xs opacity-40">
        a quiet space for small kindnesses
      </div>

    </main>
  );
}
