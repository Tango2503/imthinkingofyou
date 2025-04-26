import Link from 'next/link';

export default function Receiver() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      {/*<h1 className="text-3xl font-bold mb-4">You Received a Thought 🌼</h1> */}
      <p className="text-md mb-8"> Someone wanted you to know: You are quietly loved today. 🌸 </p>

      <Link href="/" className="text-blue-500 underline">Send Your Thought</Link>
    </main>
  );
}
