"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import { vibesToThoughts } from '../../../../lib/storage/vibesToThoughts';

export default function Sender() {
  const [vibe, setVibe] = useState('Soft');
  const [name, setName] = useState('');
  const [isSending, setIsSending] = useState(false);

  const router = useRouter();

  const vibeMessages = vibesToThoughts

  const handleSendThought = async () => {
    setIsSending(true);
    if (!vibe) {
      alert("Please select a vibe first! 🌸");
      return;
    }
  
    try {
      const response = await fetch('/api/sendThought', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vibe, name }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send thought.');
      }
  
      const { id } = await response.json();
  
      // Redirect to Share page with id
      setTimeout(() => {
        router.push(`/share?id=${id}`);
      }, 1000); // 1 second
    }  catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
      setIsSending(False);
    }
  };
  

  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">

      {/* Soft Header */}
      <p className="text-sm opacity-70">
        🌸 imthinkingofyou.io
      </p>

      {isSending ? (
        // SENDING STATE VIEW
        <div className="flex flex-col items-center justify-center space-y-4 mt-12">
          <div className="text-3xl animate-pulse">...</div> {/* pulsing dots */}
          <p className="text-lg">planting your thought 🌱</p>
        </div>
      ) : (
        // NORMAL FORM VIEW
        <>
          {/* Page Heading */}
          <h1 className="text-xl font-semibold opacity-80 mb-6">
            convey your feelings
          </h1>

          {/* Thought Preview */}
          <div className="border p-4 rounded-lg bg-gray-100 w-full max-w-md">
            <p className="text-lg">{vibeMessages[vibe]}</p>
          </div>

          {/* Vibe Selector */}
          <div className="flex flex-col items-start w-full max-w-md">
            <label className="text-sm mb-1">
              prefer a different feeling? you can change it (optional) 🌸
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
            >
              <option value="Soft">🌸 soft</option>
              <option value="Passionate">🔥 passionate</option>
              <option value="Reflective">☁️ reflective</option>
              <option value="Calm">🌊 calm</option>
            </select>
          </div>

          {/* Name Field */}
          <div className="flex flex-col items-start w-full max-w-md">
            <label className="text-sm mb-1 mt-4">
              your name (optional):
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              placeholder="Your name here..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Send Button */}
          <button
            onClick={handleSendThought}
            className="bg-pink-200 hover:bg-pink-300 text-lg font-medium font-style: italic py-3 px-8 rounded-full transition-all mt-6"
          >
            send your thought
          </button>
        </>
      )}

      {/* Soft Footer */}
      <div className="mt-16 text-xs opacity-40">
        your care will be delivered quietly 🌸
      </div>

    </main>
  );
}
