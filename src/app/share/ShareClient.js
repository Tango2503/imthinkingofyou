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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(userAgent);
      setIsMobile(isMobileDevice && typeof navigator.share === 'function');
    }
  }, []);

  const handleCopyLink = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
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
    <main className="bg-orange-100 flex flex-col items-center justify-center min-h-screen p-8 text-center space-y-6">

      {/* Soft Header */}
      <p className="text-gray-700 text-sm opacity-70 mb-8 border-b-3 border-orange-300 pb-0.3">
      imthinkingofyou.io
      </p>

      {startFade ? (
        // Fade-Out View (Planting Complete)
        <div className="bg-orange-100 flex flex-col items-center justify-center space-y-4 mt-12">
          <div className="text-3xl text-orange-500 bg-orange-100 rounded px-2 animate-pulse">...</div> {/* pulsing dots */}
          <p className="text-gray-700 text-lg opacity-80">planting complete 🌱</p>
        </div>
      ) : (
        // Normal Link and Button View
        <>
          {/* Page Heading */}
          <h1 className="text-xl font-semibold opacity-80 mb-6">
            your thought is ready 🌱
          </h1>

          {/* Link Display */}
          <div className="p-4 rounded-lg bg-orange-200 w-full max-w-lg">
            <p className="text-gray-700 font-semibold opacity-80 break-all">
              {shareUrl || "loading..."}
            </p>
          </div>

          {/* Dynamic Main Action Button */}
          {isMobile ? (
            <button
              onClick={handleShareLink}
              className="bg-orange-200 hover:shadow-md hover:scale-[1.02] hover:bg-rose-300 text-gray-700 font-medium font-style: italic py-3 px-8 rounded-full mb-4 transition-transform"
            >
              share link
            </button>
          ) : (
            <button
              onClick={handleCopyLink}
              className={`bg-orange-200 text-gray-700 font-medium font-style: italic py-3 px-8 rounded-full mb-4 transition-transform
                ${copied ? 'bg-rose-300 shadow-md scale-[1.02]' : 'hover:shadow-md hover:scale-[1.02] hover:bg-rose-300'}`}>
              
              {copied ? "copied!" : "copy link"}
              
            </button>
          )
          
          
          }

          {/* Coaching Text */}
          <p className="text-sm opacity-60 max-w-md mt-8 font-style: italic">
            send this without obligations
            <br />
            however feels right
            <br/>
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
