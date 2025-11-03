'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Code, Database, Wrench, GitBranch, Zap, Star, Rocket } from 'lucide-react';

export default function BuildingYourOwnAIAgent() {
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
              Building Your Own AI Agent: Tools, Architecture, and Use Cases
            </h1>
            
            {/* Meta Information */}
            <div className="flex items-center justify-center gap-6 text-purple-100 text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>AI Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>8 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 overflow-hidden rounded-2xl relative h-64 md:h-80">
              <Image 
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&h=400&fit=crop&ixlib=rb-4.0.3"
                alt="Building AI agents - development workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/10">
            <div className="prose prose-lg max-w-none text-white">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
                  With open-source tools and powerful APIs at our fingertips, building your own <span className="font-semibold text-white">AI agent</span> has never been more accessible. Whether you&apos;re a developer, startup founder, or enterprise innovator, understanding how AI agents are built is the first step toward creating <span className="font-semibold text-white">smart autonomous tools</span> that can execute tasks, answer questions, or handle operations.
                </p>
              </div>

              {/* Core Components */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🛠️</span>
                  <h3 className="text-2xl font-bold text-white">Core Components of an AI Agent</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Language Model */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-400/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-400 to-indigo-400 p-3 rounded-lg flex-shrink-0">
                        <div className="w-6 h-6 bg-white rounded text-blue-600 flex items-center justify-center text-sm font-bold">1</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">Language Model</h4>
                        <p className="text-purple-100">
                          Most modern agents are powered by models like <span className="font-semibold text-white">OpenAI&apos;s GPT-4</span>, <span className="font-semibold text-white">Claude</span>, or <span className="font-semibold text-white">LLaMA 3</span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Memory and Context */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-400/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-400 p-3 rounded-lg flex-shrink-0">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">Memory and Context</h4>
                        <p className="text-purple-100">
                          Frameworks like <span className="font-semibold text-white">LangChain</span>, <span className="font-semibold text-white">LlamaIndex</span>, or <span className="font-semibold text-white">Vector Databases (e.g., Pinecone)</span> allow agents to remember previous interactions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tools/Functions Integration */}
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-400/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-orange-400 to-red-400 p-3 rounded-lg flex-shrink-0">
                        <Wrench className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">Tools/Functions Integration</h4>
                        <p className="text-purple-100">
                          Agents can be connected to real-world tools (e.g., calendars, APIs, search engines) through <span className="font-semibold text-white">OpenAI Functions</span> or <span className="font-semibold text-white">Toolformer</span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Agent Framework */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-3 rounded-lg flex-shrink-0">
                        <GitBranch className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">Agent Framework</h4>
                        <p className="text-purple-100">
                          Popular options include <span className="font-semibold text-white">LangGraph</span>, <span className="font-semibold text-white">AutoGen</span>, and <span className="font-semibold text-white">CrewAI</span>—used for orchestrating multi-agent workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Use Cases */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🌟</span>
                  <h3 className="text-2xl font-bold text-white">Real Use Cases of AI Agents</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* CodeGuide.AI */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/20">
                    <div className="flex items-start gap-3">
                      <Code className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">CodeGuide.AI</h4>
                        <p className="text-purple-100 text-sm">A coding assistant for kids that helps debug, teach, and explain programming in simple language.</p>
                      </div>
                    </div>
                  </div>

                  {/* IELTSMaestro */}
                  <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-400/20">
                    <div className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">IELTSMaestro</h4>
                        <p className="text-purple-100 text-sm">A speaking & writing evaluator that mimics human feedback using LLMs.</p>
                      </div>
                    </div>
                  </div>

                  {/* Sales Agents */}
                  <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl p-6 border border-violet-400/20">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-violet-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Sales Agents</h4>
                        <p className="text-purple-100 text-sm">Tools that write emails, conduct lead scoring, and follow up with customers automatically.</p>
                      </div>
                    </div>
                  </div>

                  {/* Research Agents */}
                  <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-xl p-6 border border-pink-400/20">
                    <div className="flex items-start gap-3">
                      <Database className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Research Agents</h4>
                        <p className="text-purple-100 text-sm">Bots that summarize papers, track trends, or even write blog drafts like this one.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Started Section */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🚀</span>
                  <h3 className="text-2xl font-bold text-white">Get Started with Your First Agent</h3>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl p-8 border border-indigo-400/30">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-indigo-400 to-purple-400 p-3 rounded-lg flex-shrink-0">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-purple-100 leading-relaxed">
                        You can launch a basic AI agent using <span className="font-semibold text-white">LangChain + OpenAI</span> in just a few hours. Whether it&apos;s a Telegram bot, Slack assistant, or web widget, the building blocks are freely available—and documentation has never been better.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="mb-12">
                <h4 className="text-xl font-bold text-white mb-6 text-center">AI Agent Architecture Stack</h4>
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-400/20">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
                      <div className="text-blue-300 font-semibold mb-2">Frontend</div>
                      <div className="text-sm text-purple-100">Web UI, Mobile App, Chat Interface</div>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                      <div className="text-green-300 font-semibold mb-2">Agent Layer</div>
                      <div className="text-sm text-purple-100">LangChain, AutoGen, CrewAI</div>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/30">
                      <div className="text-purple-300 font-semibold mb-2">LLM APIs</div>
                      <div className="text-sm text-purple-100">GPT-4, Claude, LLaMA</div>
                    </div>
                    <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-400/30">
                      <div className="text-orange-300 font-semibold mb-2">Tools & Data</div>
                      <div className="text-sm text-purple-100">APIs, Databases, Functions</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Keywords Section */}
              <div className="mb-10 p-6 bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-xl border border-slate-400/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">🔍</span>
                  <h4 className="text-lg font-bold text-white">AI Agent Development Tools</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <span className="text-purple-100 text-sm">LangChain AI</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <span className="text-purple-100 text-sm">GPT-4 Agents</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <span className="text-purple-100 text-sm">AI Agent Architecture</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <span className="text-purple-100 text-sm">OpenAI Functions</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <span className="text-purple-100 text-sm">Vector Databases</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <span className="text-purple-100 text-sm">Multi-Agent Systems</span>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mt-12 p-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-400/30">
                <p className="text-xl text-purple-100 leading-relaxed text-center">
                  AI agents are no longer just a research topic—they&apos;re the next phase of intelligent software. <span className="font-semibold text-white bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">Start small, test fast, and scale smart.</span>
                </p>
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