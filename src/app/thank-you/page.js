"use client";

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">

      {/* Soft Header */}
      <p className="text-sm opacity-70">
        🌸 imthinkingofyou.io
      </p>

      {/* Thank You Message */}
      <h1 className="text-xl font-semibold opacity-80">
        your thought was planted 🌱
      </h1>

      <p className="text-lg max-w-md">
        thank you for sending a little care into the world
      </p>

      {/* Optional Button to Send Another Thought */}
      <Link href="/" passHref>
        <button className="bg-pink-200 hover:bg-pink-300 text-lg font-medium font-style: italic py-3 px-8 rounded-full transition-all">
          send another thought
        </button>
      </Link>

      {/* Tiny Soft Footer */}
      <div className="mt-16 text-xs opacity-40">
        a quiet space for small kindnesses
      </div>

    </main>
  );
}
