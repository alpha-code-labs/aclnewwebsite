'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Target, Zap, BarChart3, Lightbulb } from 'lucide-react';

export default function LessonsLearnedHypercasual() {
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
              Lessons We&apos;ve Learned from Building Hypercasual Mobile Games
            </h1>
            
            {/* Meta Information */}
            <div className="flex items-center justify-center gap-6 text-purple-100 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Gaming Studio</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>6 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 overflow-hidden rounded-2xl relative h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=800&h=400&fit=crop&ixlib=rb-4.0.3"
                alt="Game development lessons learned"
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
                  Building hypercasual games isn&apos;t just about quick development—it&apos;s about understanding player psychology, behavior, and how to turn a simple mechanic into an engaging loop.
                </p>
                <p className="text-lg text-purple-100 leading-relaxed">
                  At our studio, we&apos;ve built, tested, and launched numerous titles. Along the way, we&apos;ve learned a lot about what works—and what doesn&apos;t. Here are some of our biggest takeaways:
                </p>
              </div>

              {/* Key Lessons */}
              <div className="space-y-8">
                
                {/* Lesson 1 */}
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-400/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-red-400 to-orange-400 p-3 rounded-lg flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">1</span>
                        <h3 className="text-xl font-bold text-white">
                          The First 5 Seconds Are Everything
                        </h3>
                      </div>
                      <p className="text-purple-100 leading-relaxed">
                        If your game doesn&apos;t grab the player&apos;s attention in the first 3–5 seconds, you&apos;ve already lost them. We design our games with <span className="font-semibold text-white">instant playability</span> and clear feedback. No tutorials. No waiting. Just jump in and start playing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lesson 2 */}
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-400/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-3 rounded-lg flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-3 py-1 rounded-full text-sm font-semibold">2</span>
                        <h3 className="text-xl font-bold text-white">
                          Keep It Stupid Simple
                        </h3>
                      </div>
                      <p className="text-purple-100 leading-relaxed">
                        The best-performing games are usually the ones with the <span className="font-semibold text-white">fewest rules</span>. One mechanic. One objective. No distractions. The simpler the loop, the more likely players are to stick around. And that&apos;s what boosts retention.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lesson 3 */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-3 rounded-lg flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-white px-3 py-1 rounded-full text-sm font-semibold">3</span>
                        <h3 className="text-xl font-bold text-white">
                          Testing Wins Every Time
                        </h3>
                      </div>
                      <p className="text-purple-100 leading-relaxed">
                        There&apos;s no such thing as a guaranteed hit. That&apos;s why we test everything: ad creatives, difficulty curves, UI layouts, even color palettes. We measure CPI, D1/D3/D7 retention, and ARPU before we make any decision to scale a game.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Philosophy Section */}
              <div className="mt-12 p-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-400/30">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-3 rounded-lg flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Philosophy</h3>
                    <p className="text-lg text-purple-100 leading-relaxed mb-4">
                      Hypercasual isn&apos;t about perfection—it&apos;s about <span className="font-semibold text-white">experimentation, iteration, and intuition</span>. The beauty of the genre is that even a tiny tweak in bounce physics or level design can change everything.
                    </p>
                    <p className="text-xl font-semibold text-white">
                      As we continue building more titles, we stay grounded in this core philosophy: <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">test early, fail fast, and never stop learning</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Metrics Section */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Metrics We Track</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-purple-400/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      CPI
                    </div>
                    <div className="text-purple-100 text-xs">
                      Cost Per Install
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-purple-400/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      D1-D7
                    </div>
                    <div className="text-purple-100 text-xs">
                      Retention Rates
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-purple-400/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      ARPU
                    </div>
                    <div className="text-purple-100 text-xs">
                      Avg Revenue Per User
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-purple-400/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      CTR
                    </div>
                    <div className="text-purple-100 text-xs">
                      Click Through Rate
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="mt-10 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-400/20">
                <h4 className="text-lg font-bold text-white mb-4">Quick Tips for Success:</h4>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    Hook players in the first 3 seconds
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    One mechanic, infinite possibilities
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    Test everything, assume nothing
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    Fail fast, iterate faster
                  </li>
                </ul>
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