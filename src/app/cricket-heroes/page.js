'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function CricketHeroes() {
  return (
    <>
      {/* Back Link */}
      <div className="pt-8 pb-1">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Header Section - Centered */}
      <div className="pt-1 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-5">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Gully Champ
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-purple-100 mb-4 leading-relaxed max-w-3xl mx-auto px-4">
              Chapter 1: Follow Raju&apos;s incredible journey from the gully cricket of Mumbai&apos;s slums to a nearby academy, where dreams begin to take shape.
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-3 lg:gap-4 max-w-7xl mx-auto px-4">
              <a 
                href="https://store.steampowered.com/app/4099640/Gully_Champ/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <ExternalLink size={18} className="flex-shrink-0" />
                <span className="whitespace-nowrap">Play on Steam</span>
              </a>

              <a 
                href="https://play.google.com/store/apps/details?id=com.alphacodelabs.GullyChamp&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zM20.5 8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                </svg>
                <span className="whitespace-nowrap">Google Play</span>
              </a>

              <button 
                disabled
                className="inline-flex items-center justify-center gap-2 bg-gray-600 text-gray-300 px-4 sm:px-6 py-3 rounded-xl font-bold text-sm sm:text-base cursor-not-allowed opacity-70"
              >
                <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="whitespace-nowrap">iOS Coming Soon</span>
              </button>
              
              <Link 
                href="/gaming-studio"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-purple-400/40 hover:bg-white/20 text-purple-100 hover:text-white px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105"
              >
                <span className="whitespace-nowrap">More Games by Alpha Code Labs</span>
              </Link>
            </div>
          </div>

          {/* Image and Trailer Section - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-5">
            {/* Game Image - Left */}
            <div className="relative rounded-2xl bg-white/5 p-3 sm:p-4">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                <Image 
                  src="/games/cricket-heroes.png"
                  alt="Cricket Heroes Gameplay"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Trailer - Right */}
            <div className="relative rounded-2xl bg-white/5 p-3 sm:p-4">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                <video
                  className="w-full h-full rounded-xl object-contain"
                  controls
                  preload="metadata"
                >
                  <source src="/videos/gully-champ-trailer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Game Features - Below Image and Trailer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-400/20">
              <h3 className="text-purple-200 font-semibold mb-2 text-base sm:text-lg">Visual Novel Storytelling</h3>
              <p className="text-purple-100 text-sm">Immersive cutscenes.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-400/20">
              <h3 className="text-purple-200 font-semibold mb-2 text-base sm:text-lg">Card-Based Strategy</h3>
              <p className="text-purple-100 text-sm">Strategic cricket gameplay.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-400/20">
              <h3 className="text-purple-200 font-semibold mb-2 text-base sm:text-lg">Multi-Story Map System</h3>
              <p className="text-purple-100 text-sm">Explore other characters&apos; arcs for rewards and bonuses</p>
            </div>
          </div>

          {/* Privacy Policy Link */}
          <div className="text-center py-6">
            <Link 
              href="/cricket-heroes/privacy-policy" 
              className="text-purple-300 hover:text-purple-200 text-sm underline transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
