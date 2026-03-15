'use client';

import Link from 'next/link';
import { ArrowLeft, MessageCircle, TrendingUp, Lock, Eye } from 'lucide-react';

export default function InvestScan() {
  return (
    <>
      {/* Back Link */}
      <div className="pt-8 pb-4">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/ai-agents"
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
          >
            <ArrowLeft size={20} />
            Back to AI Agents
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-8 pb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-full mb-6">
            <Lock className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Stealth Mode</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent">
            InvestScan
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            AI-powered equity research and portfolio monitoring agent for the Indian stock market.
          </p>
        </div>
      </div>

      {/* Stealth Content */}
      <div className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Confidential Notice */}
          <div className="bg-amber-500/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/20 mb-10 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                <Eye className="w-8 h-8 text-amber-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">This Project is in Stealth Mode</h2>
            <p className="text-purple-100 text-lg leading-relaxed max-w-2xl mx-auto mb-2">
              InvestScan is currently under active development. We&apos;re building an intelligent stock screening, signal detection, and portfolio monitoring system powered by AI.
            </p>
            <p className="text-purple-300 text-sm">
              Full details are confidential. Reach out to learn more under NDA.
            </p>
          </div>

          {/* What We Can Share */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">What We Can Share</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <TrendingUp className="w-6 h-6 text-amber-300" />,
                  title: "Smart Signal Detection",
                  description: "Automated volume-price-delivery screening across Indian equities with proprietary scoring"
                },
                {
                  icon: <Eye className="w-6 h-6 text-blue-300" />,
                  title: "Portfolio Monitoring",
                  description: "Real-time exit signal tracking and portfolio health assessment for active investors"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-purple-100 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Request Access
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
