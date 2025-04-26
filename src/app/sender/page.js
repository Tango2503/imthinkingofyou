import Link from 'next/link';

export default function Sender() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Compose Your Thought 🌸</h1>
      <p className="text-md mb-8">Write a small message you'd like to share with someone special.</p>

      <Link href="/receiver" className="text-blue-500 underline">Share It</Link>
    </main>
  );
}
