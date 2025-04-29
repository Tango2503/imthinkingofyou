"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function SharePage() {
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [startFade, setStartFade] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const router = useRouter();

  const id = searchParams.get('id'); // <-- correct way to get ID in App Router!

  useEffect(() => {
    if (id) {
      setShareUrl(`https://imthinkingofyou.vercel.app/receiver?id=${id}`);
      console.log('Setting shareUrl:', `https://imthinkingofyou.vercel.app/receiver?id=${id}`);
    }
  }, [id]);


  const handleCopyLink = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Start fade after 3s
    setTimeout(() => {
      setStartFade(true);
    }, 3000);

    // Redirect after 5s
    setTimeout(() => {
      setIsCompleted(true);
      router.push('/thank-you');
    }, 5000);
  };

  const handleShareLink = async () => {
    if (!shareUrl) return;
    try {
      await navigator.share({
        title: 'someone is thinking of you 🌸',
        text: 'open this to receive a small thought — no reply needed, no pressure 🌿',
        url: shareUrl,
      });

      // Start fade after 5s
      setTimeout(() => {
        setStartFade(true);
      }, 5000);

      // Redirect after 7s
      setTimeout(() => {
        setIsCompleted(true);
        router.push('/thank-you');
      }, 7000);

    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">

      {/* Soft Header */}
      <p className="text-sm opacity-70">
        🌸 imthinkingofyou.io
      </p>

      {startFade ? (
        // Fade-Out View (Planting Complete)
        <div className="flex flex-col items-center justify-center space-y-4 mt-12">
          <div className="text-3xl animate-pulse">...</div> {/* pulsing dots */}
          <p className="text-lg"> planting complete  🌱</p>
        </div>
      ) : (
        // Normal Link and Button View
        <>
          {/* Page Heading */}
          <h1 className="text-xl font-semibold opacity-80 mb-6">
            your thought is ready 🌱
          </h1>

          {/* Link Display */}
          <div className="border p-4 rounded-lg bg-gray-100 w-full max-w-md">
            <p className="text-sm break-all">
              {shareUrl || "loading..."}
            </p>
          </div>

          {/* Dynamic Main Action Button */}
          {isMobile ? (
            <button
              onClick={handleShareLink}
              className="bg-pink-200 hover:bg-pink-300 text-lg font-medium py-3 px-8 rounded-full transition-all"
            >
              share link
            </button>
          ) : (
            <button
              onClick={handleCopyLink}
              className="bg-pink-200 hover:bg-pink-300 text-lg font-medium py-3 px-8 rounded-full transition-all"
            >
              {copied ? "copied!" : "copy link"}
            </button>
          )}

          {/* Coaching Text */}
          <p className="text-sm opacity-70 max-w-md">
            send this gently — a message, a text, or an email — however feels right
            <br />
            no need for a reply
            <br />
            your care has already been felt 🌸
          </p>

        </>
      )}

      {/* Tiny Footer */}
      <div className="mt-16 text-xs opacity-40">
        a quiet space for small kindnesses
      </div>

    </main>
  );
}
