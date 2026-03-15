'use client';

import Link from 'next/link';
import { ArrowLeft, MessageCircle, Sprout, Shield, Brain, Globe, BarChart3, Mic, Camera } from 'lucide-react';

export default function AgriSevak() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full mb-6">
            <Sprout className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">WhatsApp AI Agent</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-200 via-emerald-200 to-green-200 bg-clip-text text-transparent">
            KCC Agri Sevak
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            An autonomous WhatsApp AI agent that delivers real-time crop advisory to 50,000+ farmers across Haryana — in Hindi and English.
          </p>
        </div>
      </div>

      {/* What It Does */}
      <div className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">What It Does</h2>
            <p className="text-purple-100 text-lg leading-relaxed">
              Farmers send a text message, voice note, or photo on WhatsApp. The agent autonomously decides which tools to invoke — crop detection, knowledge retrieval, weather lookup, image analysis, or safety scanning — and responds with actionable, context-aware advisory in the farmer&apos;s language.
            </p>
          </div>

          {/* Capabilities Grid */}
          <h2 className="text-2xl font-bold text-white mb-6">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Brain className="w-6 h-6 text-purple-300" />,
                title: "Agentic Tool Calling",
                description: "LangGraph-powered agent with 5 registered tools — autonomously decides which to invoke per query"
              },
              {
                icon: <Sprout className="w-6 h-6 text-green-300" />,
                title: "Crop Detection",
                description: "Fine-tuned classifier trained on 125 crops, handling Hindi and English crop names"
              },
              {
                icon: <Shield className="w-6 h-6 text-red-300" />,
                title: "Safety Filter",
                description: "Dual-layer banned pesticide detection covering 96 CIB&RC chemicals — RAG warning + auditor prompt injection"
              },
              {
                icon: <Globe className="w-6 h-6 text-blue-300" />,
                title: "Multilingual",
                description: "Full Hindi and English support — farmers interact in whatever language is natural to them"
              },
              {
                icon: <Mic className="w-6 h-6 text-yellow-300" />,
                title: "Voice & Image Input",
                description: "Accepts voice notes and photos — processes speech-to-text and image analysis natively"
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-cyan-300" />,
                title: "4,750+ Knowledge Docs",
                description: "RAG-indexed agricultural knowledge base with ChromaDB vector storage"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-purple-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {["FastAPI", "LangGraph", "Gemini 2.5 Flash", "ChromaDB", "Pinecone", "Redis Cluster", "Kafka", "Azure AKS", "WhatsApp Cloud API"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Farmer sends a message", desc: "Text, voice note, or photo via WhatsApp — no app download needed" },
                { step: "02", title: "Agent processes & routes", desc: "LangGraph agent analyzes intent and autonomously selects tools — crop detector, RAG retriever, weather API, image analyzer, or safety scanner" },
                { step: "03", title: "Knowledge retrieval", desc: "Pulls relevant advisory from 4,750+ indexed documents using vector similarity search" },
                { step: "04", title: "Safety check", desc: "Every response passes through a dual-layer filter for banned pesticide references before delivery" },
                { step: "05", title: "Response delivered", desc: "Farmer receives actionable, contextual advice in their language — within seconds" }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span className="text-2xl font-bold text-purple-400/50 font-mono shrink-0">{item.step}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-purple-100 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
