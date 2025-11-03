'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function QuizQuest() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/gaming-studio?view=games"
            className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Games</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Game Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
              <Image 
                src="/games/quiz-quest.jpg"
                alt="Quiz Quest"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Game Details */}
          <div className="order-1 lg:order-2 space-y-8">
            
            {/* Game Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Quiz Quest
            </h1>

            {/* 1. Game Description */}
            <div>
              <p className="text-lg text-purple-100 leading-relaxed">
                Embark on the ultimate trivia adventure! Test your knowledge across multiple categories, unlock achievements, and compete with friends in this engaging quiz game.
              </p>
            </div>

            {/* 2. Available on Android */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-white font-semibold">Available on:</span>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-400/20">
                  <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zM20.5 8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                  </svg>
                  <span className="text-white font-medium">Android</span>
                </div>
              </div>
              <a 
                href="https://play.google.com/store/apps/details?id=com.alphacodelabs.quizquest"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-all duration-300 hover:scale-105"
              >
                Download Now
              </a>
            </div>

            {/* 3. Coming Soon on iOS */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-white font-semibold">Coming Soon on:</span>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-400/20 opacity-70">
                  <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-gray-300 font-medium">iOS</span>
                </div>
              </div>
              <button 
                disabled
                className="bg-gray-600 text-gray-300 font-bold py-2 px-6 rounded-lg text-sm cursor-not-allowed opacity-70"
              >
                Coming Soon
              </button>
            </div>

            {/* 4. Total Downloads */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">1K+</div>
                <div className="text-purple-200 text-sm">Total Downloads</div>
              </div>
            </div>

            {/* 5. Download Now Button - REMOVED (now next to platforms) */}

            {/* 6. Privacy Policy Link */}
            <div className="text-center">
              <Link 
                href="/gaming-studio/quiz-quest/privacy-policy" 
                className="text-purple-300 hover:text-purple-200 text-sm underline transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}