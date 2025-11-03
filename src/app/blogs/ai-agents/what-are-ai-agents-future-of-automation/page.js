'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Brain, Zap, Users, Bot, TrendingUp } from 'lucide-react';

export default function WhatAreAIAgents() {
  return (
    <>
      {/* Back Link */}
      <div className="pt-8 pb-4">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/blogs/ai-agents"
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
          >
            <ArrowLeft size={20} />
            Back to AI Agents
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              What Are AI Agents and Why They&apos;re the Future of Automation
            </h1>
            
            {/* Meta Information */}
            <div className="flex items-center justify-center gap-6 text-purple-100 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>AI Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>5 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 overflow-hidden rounded-2xl relative h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&h=400&fit=crop&ixlib=rb-4.0.3"
                alt="AI agents and automation future"
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
                  In a world where speed and personalization are key, <span className="font-semibold text-white">AI agents</span> are revolutionizing how we work, learn, and live. Whether it&apos;s booking a meeting, solving a coding problem, or guiding students through complex tasks, these intelligent, autonomous systems are driving a new wave of productivity and efficiency.
                </p>
                <p className="text-lg text-purple-100 leading-relaxed font-medium">
                  But what exactly are AI agents?
                </p>
              </div>

              {/* Definition Section */}
              <div className="mb-12 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-400/30">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-lg flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Core Definition</h3>
                    <p className="text-lg text-purple-100 leading-relaxed mb-6">
                      At their core, AI agents are <span className="font-semibold text-white">autonomous software programs</span> powered by <span className="font-semibold text-white">machine learning</span>, <span className="font-semibold text-white">natural language processing (NLP)</span>, and <span className="font-semibold text-white">large language models (LLMs)</span> like <span className="font-semibold text-white">GPT-4</span>.
                    </p>
                    <p className="text-lg text-purple-100 leading-relaxed">
                      Unlike traditional software that needs direct input for every action, AI agents can:
                    </p>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain size={24} className="text-green-400" />
                    <h4 className="text-lg font-bold text-white">Understand user intent</h4>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-400/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap size={24} className="text-orange-400" />
                    <h4 className="text-lg font-bold text-white">Make decisions in real time</h4>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-400/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Bot size={24} className="text-blue-400" />
                    <h4 className="text-lg font-bold text-white">Take actions across tools and platforms</h4>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp size={24} className="text-purple-400" />
                    <h4 className="text-lg font-bold text-white">Learn and adapt from user interactions</h4>
                  </div>
                </div>
              </div>

              {/* Real-World Applications */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🚀</span>
                  <h3 className="text-2xl font-bold text-white">Real-World Applications of AI Agents</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-400/20">
                    <div className="flex items-start gap-4">
                      <Users className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Customer Support Agents</h4>
                        <p className="text-purple-100">AI agents that resolve tickets, escalate cases, and respond 24/7.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-xl p-6 border border-teal-400/20">
                    <div className="flex items-start gap-4">
                      <Brain className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">EdTech Assistants</h4>
                        <p className="text-purple-100">Like virtual tutors guiding students through IELTS, GRE, or coding concepts.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-400/20">
                    <div className="flex items-start gap-4">
                      <Zap className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Productivity Bots</h4>
                        <p className="text-purple-100">Agents that summarize meetings, draft emails, or automate repetitive workflows.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Impact */}
              <div className="mb-12 p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-400/20">
                <p className="text-lg text-purple-100 leading-relaxed">
                  As more companies integrate <span className="font-semibold text-white">AI agent platforms</span> into their daily operations, we&apos;re seeing massive gains in efficiency, personalization, and customer satisfaction.
                </p>
              </div>

              {/* Future Section */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🌍</span>
                  <h3 className="text-2xl font-bold text-white">Why AI Agents Are the Future</h3>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/30">
                  <p className="text-lg text-purple-100 leading-relaxed mb-6">
                    With the rise of tools like <span className="font-semibold text-white">AutoGPT</span>, <span className="font-semibold text-white">LangChain</span>, and <span className="font-semibold text-white">OpenAI Functions</span>, AI agents are now able to <span className="font-semibold text-white">chain tasks</span>, perform <span className="font-semibold text-white">reasoning</span>, and handle <span className="font-semibold text-white">multi-step workflows</span>—something once thought impossible.
                  </p>
                  <p className="text-xl font-semibold text-white">
                    Whether you&apos;re a startup founder, educator, or enterprise leader, understanding and leveraging AI agents will be critical to staying competitive in the next decade.
                  </p>
                </div>
              </div>

              {/* Key Technologies */}
              <div className="mt-10">
                <h4 className="text-xl font-bold text-white mb-6 text-center">Key Technologies Powering AI Agents</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-purple-400/20">
                    <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      GPT-4
                    </div>
                    <div className="text-purple-100 text-xs">
                      Large Language Models
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-purple-400/20">
                    <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      NLP
                    </div>
                    <div className="text-purple-100 text-xs">
                      Natural Language Processing
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-purple-400/20">
                    <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      AutoGPT
                    </div>
                    <div className="text-purple-100 text-xs">
                      Autonomous Task Chaining
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-purple-400/20">
                    <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      LangChain
                    </div>
                    <div className="text-purple-100 text-xs">
                      Agent Frameworks
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link 
              href="/blogs/ai-agents"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <ArrowLeft size={20} />
              Back to AI Agents
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}