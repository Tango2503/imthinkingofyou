"use client";

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="bg-orange-100 flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">

      {/* Soft Header */}
      <p className="text-gray-700 text-sm opacity-70 mb-8 border-b-3 border-orange-300 pb-0.3">
        imthinkingofyou.io
      </p>

      {/* Thank You Message */}
      <h1 className="text-gray-700 font-semibold opacity-80 mb-6">
        your thought was planted 🌱
      </h1>

      <p className="text-base text-orange-600 dark: text-pink-300 font-semibold opacity-50 mb-6">
        thank you for sending a little care into the world
      </p>

      {/* Optional Button to Send Another Thought */}
      <Link href="/" passHref>
        <button className="bg-orange-200 hover:shadow-md hover:scale-[1.02] hover:bg-rose-300 text-gray-700 font-medium font-style: italic py-3 px-8 rounded-full mb-4 transition-transform">
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
