"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import { vibesToThoughts } from '../../../lib/storage/vibesToThoughts';

export default function Sender() {
  const [vibe, setVibe] = useState('Soft');
  const [name, setName] = useState('');
  const [isSending, setIsSending] = useState(false);

  const router = useRouter();

  const vibeMessages = vibesToThoughts

  const handleSendThought = async () => {
    setIsSending(true);
    if (!vibe) {
      alert("Please select a vibe first! ");
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
      }, 2000); // 2 seconds
    }  catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
      setIsSending(False);
    }
  };
  

  

  return (
    <main className="bg-orange-100 flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">

      {/* Soft Header */}
      <p className="text-gray-700 text-sm opacity-70 mb-8 border-b-3 border-orange-300 pb-0.3">
        imthinkingofyou.io
      </p>

      {isSending ? (
        // SENDING STATE VIEW
        <div className="bg-orange-100 flex flex-col items-center justify-center space-y-4 mt-12">
          <div className="text-3xl text-orange-500 bg-orange-100 rounded px-2 animate-pulse">...</div> {/* pulsing dots */}
          <p className="text-gray-700 text-lg opacity-80">planting your thought 🌱</p>
        </div>
      ) : (
        // NORMAL FORM VIEW
        <>
          {/* Page Heading */}
          <h1 className="text-xl text-orange-600 dark:text-pink-300 font-semibold opacity-50 mb-6">
          let them know they crossed your mind
          </h1>

          {/* Thought Preview */}
          <div className="p-10 rounded-lg bg-orange-200 w-full max-w-md">
            <p className="whitespace-pre-line text-gray-700 font-semibold opacity-80">{vibeMessages[vibe]}</p>
          </div>

          {/* Vibe Selector */}
          <div className="flex flex-col items-start w-full max-w-md">
            <label className="text-gray-700 text-sm mb-1">
              prefer a different feeling? you can change it (optional)
            </label>
            <select
              className="text-gray-700 w-full p-2 border border-gray-400 rounded-md"
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
            >
              <option value="Soft">🌸 soft</option>
              <option value="Passionate">🔥 passionate</option>
              <option value="Reflective">☁️ reflective</option>
              <option value="Calm">🌊 calm</option>
              <option value="Reassurance">🫂 reassurance</option>
              <option value="Gratitude">🙏 gratitude</option>
            </select>
          </div>

          {/* Name Field */}
          <div className="flex flex-col items-start w-full max-w-md">
            <label className="text-gray-700 text-sm mb-1 mt-4">
              your name (optional):
            </label>
            <input
              className="text-gray-700 w-full p-2 border border-gray-400 rounded-md"
              type="text"
              placeholder="Your name here..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Send Button */}
          <button
            onClick={handleSendThought}
            className="bg-orange-200 hover:shadow-md hover:scale-[1.02] hover:bg-rose-300 text-gray-700 font-medium font-style: italic py-3 px-8 rounded-full mb-4 transition-transform"
          >
            send your thought
          </button>
        </>
      )}

      {/* Soft Footer */}
      <div className="mt-16 text-xs opacity-40">
      a quiet space for small kindnesses
      </div>

    </main>
  );
}
