'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function EnterpriseCoBuild() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Slide data - 8 PNG files
  const slides = [
    '/cobuild/slide1.png',
    '/cobuild/slide2.png',
    '/cobuild/slide3.png',
    '/cobuild/slide4.png',
    '/cobuild/slide5.png',
    '/cobuild/slide6.png',
    '/cobuild/slide7.png',
    '/cobuild/slide8.png'
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 4000); // Change slide every 4 seconds
      
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Back Link */}
      <div className="pt-8 pb-4">
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

      {/* Hero Section */}
      <div className="pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Let&apos;s Build Something Extraordinary Together
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Partner with us to co-create innovative solutions that transform your business. 
            From concept to launch, we bring technical expertise, creative vision, and startup agility to enterprise innovation.
          </p>
        </div>
      </div>

      {/* Call to Action - Moved to Top */}
      <div className="pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Co-Build Journey?
          </h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how we can collaborate to bring your innovative ideas to life. 
            Schedule a consultation to explore partnership opportunities.
          </p>
          <Link 
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      {/* Slideshow Section */}
      <div className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Slideshow Container */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20">
            
            {/* Controls Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Co-Build Partnership Overview</h2>
              
              {/* Play/Pause and Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleAutoPlay}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <span className="text-white font-medium px-3">
                    {currentSlide + 1} / {slides.length}
                  </span>
                  
                  <button
                    onClick={nextSlide}
                    className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Main Slide Display */}
            <div className="relative overflow-hidden rounded-xl bg-white h-[600px]">
              <Image
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Slide Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-purple-400 scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mt-6">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 h-12 ${
                    index === currentSlide 
                      ? 'border-purple-400 scale-105' 
                      : 'border-transparent hover:border-purple-400/50'
                  }`}
                >
                  <Image
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}