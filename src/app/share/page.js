"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SharePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [startFade, setStartFade] = useState(false);

  const router = useRouter();
  const shareUrl = 'https://imthinkingofyou.io/thought/abc123'; // Placeholder

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
          navigator.userAgent
        )
      );
    }
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Start fade after 5s
    setTimeout(() => {
      setStartFade(true);
    }, 3000);

    // Redirect after 7s
    setTimeout(() => {
      setIsCompleted(true);
      router.push('/thank-you');
    }, 5000);
  };

  const handleShareLink = async () => {
    try {
      await navigator.share({
        title: 'A Thought for You',
        text: 'Someone is thinking of you.',
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
          <p className="text-lg">Planting complete... 🌱</p>
        </div>
      ) : (
        // Normal Link and Button View
        <>
          {/* Page Heading */}
          <h1 className="text-2xl font-semibold">
            Your Thought is Ready! 🌱
          </h1>

          {/* Link Display */}
          <div className="border p-4 rounded-lg bg-gray-100 w-full max-w-md">
            <p className="text-sm break-all">
              {shareUrl}
            </p>
          </div>

          {/* Dynamic Main Action Button */}
          {isMobile ? (
            <button
              onClick={handleShareLink}
              className="bg-pink-200 hover:bg-pink-300 text-lg font-medium py-3 px-8 rounded-full transition-all"
            >
              SHARE
            </button>
          ) : (
            <button
              onClick={handleCopyLink}
              className="bg-pink-200 hover:bg-pink-300 text-lg font-medium py-3 px-8 rounded-full transition-all"
            >
              {copied ? "COPIED!" : "COPY LINK"}
            </button>
          )}

          {/* Coaching Text */}
          <p className="text-sm opacity-70 max-w-md">
            Send this quietly — through a message, a text, or an email — however feels right.  
            No need for a reply. Your care has already been felt. 🌸
          </p>
        </>
      )}

      {/* Tiny Footer */}
      <div className="mt-16 text-xs opacity-40">
        A quiet space for small kindnesses.
      </div>

    </main>
  );
}
