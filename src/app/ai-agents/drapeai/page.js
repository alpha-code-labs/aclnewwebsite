'use client';

import Link from 'next/link';
import { ArrowLeft, MessageCircle, Palette, Sparkles, Image as ImageIcon, Layers, Shirt, Wand2 } from 'lucide-react';

export default function DrapeAI() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 border border-pink-400/30 rounded-full mb-6">
            <Palette className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 text-sm font-medium">WhatsApp AI Agent</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 bg-clip-text text-transparent">
            Drape AI
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            A WhatsApp-first AI design assistant that lets users create custom outfit designs — from a simple sketch or reference image to production-ready garment specs.
          </p>
        </div>
      </div>

      {/* What It Does */}
      <div className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">What It Does</h2>
            <p className="text-purple-100 text-lg leading-relaxed">
              Users send a reference image, sketch, or description on WhatsApp. The agent guides them through a conversational design journey — asking about fabric, silhouette, occasion, and style preferences — then generates multiple AI-powered outfit variants ready for production.
            </p>
          </div>

          {/* Capabilities Grid */}
          <h2 className="text-2xl font-bold text-white mb-6">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Wand2 className="w-6 h-6 text-pink-300" />,
                title: "AI Design Generation",
                description: "Generates multiple outfit variants from user inputs — reference images, sketches, or text descriptions"
              },
              {
                icon: <Sparkles className="w-6 h-6 text-yellow-300" />,
                title: "Guided Design Journey",
                description: "Conversational Q&A flow that captures fabric, silhouette, occasion, and style preferences step by step"
              },
              {
                icon: <Shirt className="w-6 h-6 text-purple-300" />,
                title: "Structured Garment Specs",
                description: "Outputs production-ready garment specifications with schema-driven product objects"
              },
              {
                icon: <Layers className="w-6 h-6 text-blue-300" />,
                title: "Print Library",
                description: "Built-in catalog of print patterns and fabric textures for design customization"
              },
              {
                icon: <ImageIcon className="w-6 h-6 text-green-300" />,
                title: "Multi-Variant Output",
                description: "Generates multiple design options per session so users can pick, refine, and iterate"
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-cyan-300" />,
                title: "WhatsApp Native",
                description: "Entire experience lives inside WhatsApp — no app downloads, no sign-ups, just chat and design"
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
              {["FastAPI", "Gemini", "WhatsApp Cloud API", "Python", "Azure"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-pink-500/20 border border-pink-400/30 rounded-full text-pink-200 text-sm font-medium">
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
                { step: "01", title: "User sends inspiration", desc: "Upload a reference image, sketch, or describe the outfit you have in mind — all via WhatsApp" },
                { step: "02", title: "Guided design brief", desc: "The agent asks targeted questions — occasion, fabric preference, silhouette, color palette — to build a complete design spec" },
                { step: "03", title: "AI generates designs", desc: "Multiple outfit variants are generated based on the design brief, using generative AI trained on fashion data" },
                { step: "04", title: "Refine and iterate", desc: "Pick your favorite variant, request modifications, or explore different directions until you love it" },
                { step: "05", title: "Production-ready output", desc: "Final design comes with structured garment specifications ready for manufacturing" }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span className="text-2xl font-bold text-pink-400/50 font-mono shrink-0">{item.step}</span>
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
