'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const phrases = ["Build Fast", "Build At Scale", "Build Together"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      // First fade out
      setIsVisible(false);
      
      // After fade out completes, change phrase and fade in
      setTimeout(() => {
        setCurrentPhrase(prev => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 300); // Wait for fade out to complete
      
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20 relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Slogan */}
          <Link href="/" className="flex items-center gap-3 md:gap-4">
            {/* Logo Container - Always transparent background */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-sm border border-purple-400/30">
              <Image 
                src="/logo.jpg" 
                alt="Studio Logo" 
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                onError={(e) => {
                  // Hide image and show fallback
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <span className="text-white font-bold text-xl hidden">S</span>
            </div>
            
            {/* Animated Slogan */}
            <div className="flex items-center gap-2">
              <span 
                className={`text-base md:text-lg font-semibold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent transition-opacity duration-300 whitespace-nowrap ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {phrases[currentPhrase]}
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/angel-investors" 
              className="text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
            >
              Our Angel Investors
            </Link>
            <Link 
              href="/team" 
              className="text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
            >
              Team
            </Link>
            <Link 
              href="/blogs" 
              className="text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
            >
              Blogs
            </Link>
            <Link 
              href="/contact" 
              className="text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white z-50 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-purple-500/20 z-40">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/angel-investors" 
              className="text-purple-100 hover:text-white transition-colors duration-300 font-medium py-2 px-4 hover:bg-white/10 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Angel Investors
            </Link>
            <Link 
              href="/team" 
              className="text-purple-100 hover:text-white transition-colors duration-300 font-medium py-2 px-4 hover:bg-white/10 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              href="/blogs" 
              className="text-purple-100 hover:text-white transition-colors duration-300 font-medium py-2 px-4 hover:bg-white/10 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link 
              href="/contact" 
              className="text-purple-100 hover:text-white transition-colors duration-300 font-medium py-2 px-4 hover:bg-white/10 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}