'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function HypercasualGameIn7Days() {
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
              How We Build a Hypercasual Game in Just 7 Days
            </h1>
            
            {/* Meta Information */}
            <div className="flex items-center justify-center gap-6 text-purple-100 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Gaming Studio</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>5 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 overflow-hidden rounded-2xl relative h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=800&h=400&fit=crop&ixlib=rb-4.0.3"
                alt="Game development in 7 days"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/10">
            <div className="prose prose-lg max-w-none text-white">
              
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-lg md:text-xl text-purple-100 leading-relaxed mb-6">
                  In the world of hypercasual gaming, speed is everything. Trends shift fast, and what&apos;s popular today could be gone tomorrow. That&apos;s why at our studio, we&apos;ve built a development process that lets us go from idea to launch in just <strong className="text-white">7 days</strong>.
                </p>
                <p className="text-lg text-purple-100 leading-relaxed">
                  Here&apos;s a look at how we do it:
                </p>
              </div>

              {/* Day-by-day breakdown */}
              <div className="space-y-6">
                
                {/* Day 1 */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Day 1</span>
                    Ideation & Mechanics
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    We start with brainstorming. What&apos;s trending? What&apos;s simple? What could go viral? We focus on one-tap mechanics and concepts that can be understood instantly.
                  </p>
                </div>

                {/* Day 2 */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Day 2</span>
                    Prototyping the Core Loop
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    Our developers build the basic gameplay loop—something that players can start interacting with right away. It&apos;s rough, but it helps test the &quot;fun factor.&quot;
                  </p>
                </div>

                {/* Day 3 */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Day 3</span>
                    Art & Animation
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    We add placeholder visuals or quick custom art—enough to give the game some polish while keeping things modular and easy to change.
                  </p>
                </div>

                {/* Day 4 */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Day 4</span>
                    Monetization Setup
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    Ad SDKs (rewarded, interstitial, banners) are integrated and tested for smooth user experience. The game now has its basic structure.
                  </p>
                </div>

                {/* Day 5 */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Day 5</span>
                    Soft Launch
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    We test the game in select geographies (like Tier 2 countries) to collect CPI, CTR, and retention data. The goal is to validate market appeal.
                  </p>
                </div>

                {/* Day 6 */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Day 6</span>
                    Analytics & Iteration
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    Based on initial feedback, we tweak mechanics, fix bugs, and polish visuals. If metrics are promising, we push forward.
                  </p>
                </div>

                {/* Day 7 */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Day 7</span>
                    Decision Day
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    If CPI is low and retention is solid—we scale. If not, we either iterate further or shelf the project.
                  </p>
                </div>

              </div>

              {/* Conclusion */}
              <div className="mt-10 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-400/30">
                <p className="text-lg text-purple-100 leading-relaxed mb-4">
                  This 7-day sprint helps us stay lean, fast, and flexible. Some games never make it past soft launch. But when one hits the sweet spot—it scales fast and far.
                </p>
                <p className="text-xl font-semibold text-white">
                  That&apos;s the nature of hypercasual: <strong className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">fail fast, learn faster, and double down when it works</strong>.
                </p>
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