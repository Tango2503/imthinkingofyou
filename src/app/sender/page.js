import Link from 'next/link';

export default function Sender() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-3xl font-bold mb-4"> Send Your Thought 🌸</h1>
      <p className="text-md mb-8"> Hey. No pressure to respond. Just know you're on someone's mind. </p>

      <Link href="/receiver" className="text-blue-500 underline">Share It</Link>
    </main>
  );
}
