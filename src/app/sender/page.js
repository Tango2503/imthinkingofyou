"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Sender() {
  const [vibe, setVibe] = useState('Soft');
  const [name, setName] = useState('');
  const [isSending, setIsSending] = useState(false);

  const router = useRouter();

  const vibeMessages = {
    Soft: "🌸 someone wanted you to know. you're quietly loved today.",
    Passionate: "🔥 someone wanted you to feel. you inspire something powerful.",
    Reflective: "☁️ someone wanted you to ponder. you matter in more ways than you realise.",
    Calm: "🌊 someone wanted you to breathe easy. you're doing just fine."
  };

  const handleSendThought = () => {
    setIsSending(true);
    setTimeout(() => {
      router.push('/share');
    }, 1000); // 1 seconds delay
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
              <option value="soft">🌸 soft</option>
              <option value="passionate">🔥 passionate</option>
              <option value="reflective">☁️ reflective</option>
              <option value="calm">🌊 calm</option>
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
