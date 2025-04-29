import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-orange-100 flex flex-col items-center justify-center min-h-screen p-8 text-center">
      
      {/* Soft Header */}
      <p className="text-gray-700 text-sm opacity-70 mb-8 border-b-3 border-orange-300 pb-0.3">
        imthinkingofyou.io
      </p>

      {/* Gentle Welcome Message */}
      <h1 className="text-xl text-orange-600 dark:text-pink-300 font-semibold opacity-50 mb-6">
        sometimes you just want someone to know you&apos;re thinking of them 
      </h1>
      {/* <h1 className = "text-xl font-semibold opacity-80 mb-6">
        no pressure, no reply needed
      </h1> */}

      {/* Big Centered Button */}
      <Link href="/sender" passHref>
        <button className="bg-orange-200 hover:shadow-md hover:scale-[1.02] hover:bg-rose-300 text-gray-700 font-medium font-style: italic py-3 px-8 rounded-full mb-4 transition-transform">
          send a thought
        </button>
      </Link>

      {/* Tiny Footer Whisper */}
      <footer className="mt-16 text-xs opacity-40">
          a quiet space for small kindnesses
      </footer>

    </main>
  );
}
