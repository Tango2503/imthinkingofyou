import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      
      {/* Soft Header */}
      <p className="text-sm opacity-70 mb-8">
        🌸 imthinkingofyou.io
      </p>

      {/* Gentle Welcome Message */}
      <h1 className="text-2xl font-semibold mb-6">
        Sometimes you just want someone to know you&apos;re thinking of them. no pressure, no reply needed.
      </h1>

      {/* Big Centered Button */}
      <Link href="/sender" passHref>
        <button className="bg-pink-200 hover:bg-pink-300 text-lg font-medium py-3 px-8 rounded-full mb-4 transition-all">
          SEND A THOUGHT
        </button>
      </Link>

      {/* Tiny Footer Whisper */}
      <div className="mt-16 text-xs opacity-40">
        A quiet space for small kindnesses.
      </div>

    </main>
  );
}
