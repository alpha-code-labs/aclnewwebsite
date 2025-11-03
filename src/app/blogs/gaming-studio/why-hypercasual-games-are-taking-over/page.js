'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Smartphone, Zap, DollarSign } from 'lucide-react';

export default function WhyHypercasualTakeover() {
  return (
    <>
      {/* Back Link */}
      <div className="pt-8 pb-4">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/blogs/gaming-studio"
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
          >
            <ArrowLeft size={20} />
            Back to Gaming Studio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Why Hypercasual Games Are Taking Over the Mobile Gaming Industry
            </h1>
            
            {/* Meta Information */}
            <div className="flex items-center justify-center gap-6 text-purple-100 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Gaming Studio</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>4 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 overflow-hidden rounded-2xl relative h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=800&h=400&fit=crop&ixlib=rb-4.0.3"
                alt="Mobile gaming revolution"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/10">
            <div className="prose prose-lg max-w-none text-white">
              
              {/* Introduction */}
              <div className="mb-10">
                <p className="text-lg md:text-xl text-purple-100 leading-relaxed mb-6">
                  In the last few years, hypercasual games have taken the mobile gaming industry by storm—and for good reason. These games are easy to play, hard to master, and incredibly addictive. At our studio, we&apos;ve been building and testing hypercasual experiences that aim to keep players entertained in short, satisfying bursts.
                </p>
                <p className="text-lg text-purple-100 leading-relaxed font-medium">
                  So what exactly is driving the popularity of hypercasual games?
                </p>
              </div>

              {/* Key Factors */}
              <div className="space-y-8">
                
                {/* Simplicity */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-400/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-lg">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        First, it&apos;s <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">simplicity</span>
                      </h3>
                      <p className="text-purple-100 leading-relaxed">
                        You don&apos;t need a tutorial. Players intuitively understand what to do—whether it&apos;s tapping to dodge, swiping to shoot, or holding to glide. The learning curve is practically zero, which means anyone—from a 7-year-old to a 70-year-old—can start playing within seconds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instant Gratification */}
                <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl p-6 border border-orange-400/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-3 rounded-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        Second, it&apos;s <span className="bg-gradient-to-r from-orange-200 to-pink-200 bg-clip-text text-transparent">instant gratification</span>
                      </h3>
                      <p className="text-purple-100 leading-relaxed">
                        Hypercasual games are designed to offer feedback right away. Fail? Try again instantly. Succeed? Get a new challenge. That constant loop of reward and retry creates a powerful hook.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Smart Monetization */}
                <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl p-6 border border-green-400/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-green-400 to-teal-400 p-3 rounded-lg">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        And finally, from a business perspective
                      </h3>
                      <p className="text-purple-100 leading-relaxed">
                        Hypercasual games are backed by smart monetization. With short session lengths and wide appeal, they&apos;re perfectly suited for <span className="font-semibold text-white">ad-based revenue models</span>—such as rewarded videos, interstitials, and banners.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Our Approach */}
              <div className="mt-12 p-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
                <p className="text-lg text-purple-100 leading-relaxed mb-4">
                  At our studio, we&apos;re not just riding the trend—we&apos;re shaping it. Every week, we explore new mechanics, new art styles, and new ways to surprise and delight players.
                </p>
                <p className="text-xl font-semibold text-white">
                  Hypercasual is more than a genre—it&apos;s a culture of <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">rapid experimentation, fun-first design, and lightning-fast execution</span>.
                </p>
              </div>

              {/* Stats Section */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-xl border border-purple-400/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    85%
                  </div>
                  <div className="text-purple-100 text-sm">
                    of mobile game downloads
                  </div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl border border-purple-400/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    30 sec
                  </div>
                  <div className="text-purple-100 text-sm">
                    average session length
                  </div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl border border-purple-400/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    $2B+
                  </div>
                  <div className="text-purple-100 text-sm">
                    market value in 2024
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link 
              href="/blogs/gaming-studio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <ArrowLeft size={20} />
              Back to Gaming Studio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}