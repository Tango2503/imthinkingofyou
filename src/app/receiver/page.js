"use client";

import Link from 'next/link';

export default function Receiver() {
  const thoughtMessage = "🌸 Someone wanted you to know: You are quietly loved today.";
  const senderName = "— from Tina"; // Simulate optional sender name for now

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">

      {/* Soft Header */}
      <p className="text-sm opacity-70">
        🌸 imthinkingofyou.io
      </p>

      {/* Thought Box */}
      <div className="border p-6 rounded-lg bg-gray-100 w-full max-w-md space-y-4">
        <p className="text-lg leading-relaxed">
          {thoughtMessage}
        </p>
        <p className="text-sm opacity-60 italic">
          {senderName}
        </p>
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
