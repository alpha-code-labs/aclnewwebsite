'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [currentWord, setCurrentWord] = useState('Experiment');
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // First fade out
      setIsVisible(false);
      
      // After fade out completes, change word and fade in
      setTimeout(() => {
        setCurrentWord(prev => prev === 'Experiment' ? 'Product' : 'Experiment');
        setIsVisible(true);
      }, 300); // Wait for fade out to complete
      
    }, 2500); // Change every 2.5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col py-8 md:py-0">
      {/* Hero Content - Top */}
      <div className="pt-4 md:pt-8 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight px-2">
            Building Tomorrow, One{' '}
            <span 
              className={`inline-block transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {currentWord}
            </span>
            {' '}at a Time
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4">
            A collective of engineers, designers, and visionaries who turn ambitious ideas into reality. We craft experiences that matter and solve problems that count.
          </p>
        </div>
      </div>

      {/* Middle Section - Three Cards */}
      <div className="flex-1 flex items-center justify-center py-4 md:py-8 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Gaming Studio Card */}
            <Link href="/cricket-heroes">
              <div className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="mb-6 overflow-hidden rounded-xl relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Image 
                    src="/images/gaming-studio.png"
                    alt="Gaming Studio"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    Gaming Studio
                  </h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Immersive experiences that captivate and engage players worldwide
                  </p>
                </div>
              </div>
            </Link>

            {/* AI Agents Card */}
            <Link href="/ai-agents">
              <div className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="mb-6 overflow-hidden rounded-xl relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Image 
                    src="/images/ai-agents.png"
                    alt="AI Agents"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    AI Agents
                  </h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Intelligent automation that transforms how individuals or businesses operate
                  </p>
                </div>
              </div>
            </Link>

            {/* Enterprise Co-Build Card */}
            <Link href="/enterprise-cobuild">
              <div className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="mb-6 overflow-hidden rounded-xl relative h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                  <Image 
                    src="/images/cobuild.png"
                    alt="Enterprise Co-Build"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    Enterprise Co-Build
                  </h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    Strategic partnerships that accelerate innovation and growth
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}