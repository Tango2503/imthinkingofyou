import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">imthinkingofyou.io 🌱</h1>
      <p className="text-lg mb-8">A gentle space to send a thought to someone you care about.</p>

      <Link href="/sender" className="text-blue-500 underline">Send a Thought</Link>
      <br />
      <Link href="/receiver" className="text-blue-500 underline mt-2">Receive a Thought</Link>
    </main>
  );
}
