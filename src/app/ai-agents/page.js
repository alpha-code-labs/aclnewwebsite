'use client';

import Link from 'next/link';
import { ArrowLeft, Sprout, Palette, TrendingUp, Factory, Lock } from 'lucide-react';

export default function AIAgents() {
  const agents = [
    {
      id: 1,
      title: "KCC Agri Sevak",
      slug: "/ai-agents/agrisevak",
      icon: <Sprout className="w-10 h-10 text-green-400" />,
      description: "Autonomous WhatsApp AI agent delivering real-time crop advisory to 50,000+ farmers across Haryana — multilingual, voice-enabled, with safety-critical pesticide filters.",
      tags: ["WhatsApp", "LangGraph", "Gemini", "ChromaDB"],
      color: "green",
      stealth: false
    },
    {
      id: 2,
      title: "Drape AI",
      slug: "/ai-agents/drapeai",
      icon: <Palette className="w-10 h-10 text-pink-400" />,
      description: "WhatsApp-first AI design assistant that turns sketches and reference images into production-ready outfit designs through a guided conversational journey.",
      tags: ["WhatsApp", "Gemini", "FastAPI"],
      color: "pink",
      stealth: false
    },
    {
      id: 3,
      title: "InvestScan",
      slug: "/ai-agents/investscan",
      icon: <TrendingUp className="w-10 h-10 text-amber-400" />,
      description: "AI-powered equity research and portfolio monitoring agent for the Indian stock market. Smart signal detection and real-time exit tracking.",
      tags: ["AI", "Fintech"],
      color: "amber",
      stealth: true
    },
    {
      id: 4,
      title: "Tattva Twins",
      slug: "/ai-agents/digital-twins",
      icon: <Factory className="w-10 h-10 text-cyan-400" />,
      description: "Industrial Digital Twin platform with AI-powered anomaly detection and predictive maintenance for manufacturing floors.",
      tags: ["IoT", "Azure", "Digital Twins"],
      color: "cyan",
      stealth: true
    }
  ];

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
      <div className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            AI Agents That Work For You
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Production-grade AI agents built on WhatsApp — solving real problems for farmers, designers, investors, and manufacturers.
          </p>
        </div>
      </div>

      {/* AI Agents Grid */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agents.map((agent) => (
              <Link key={agent.id} href={agent.slug}>
                <div className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 w-16 h-16 rounded-xl bg-white/10 border border-purple-400/20 flex items-center justify-center">
                      {agent.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                          {agent.title}
                        </h3>
                        {agent.stealth && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 border border-amber-400/30 rounded-full">
                            <Lock className="w-3 h-3 text-amber-400" />
                            <span className="text-amber-300 text-xs font-medium">Stealth</span>
                          </span>
                        )}
                      </div>
                      <p className="text-purple-100 text-sm leading-relaxed">
                        {agent.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {agent.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-500/20 border border-purple-400/20 rounded-full text-purple-200 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
