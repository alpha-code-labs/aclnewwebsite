'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function AIAgents() {
  // AI Agent data with local images and URL slugs
  const agents = [
    {
      id: 1,
      title: "Get MATCH.AI",
      slug: "https://www.getmatchai.com/",
      image: "/agents/getmatchai.png",
      description: "Your personal match maker. Skip the mindless swiping and let AI find your true soul mate using in depth personality analysis."
    },
    { 
      id: 2, 
      title: "IELTS Maestro", 
      slug: "https://www.ieltsmaestroai.com/", 
      image: "/agents/ieltsmaestro.jpg",
      description: "Your personal IELTS preparation coach that provides targeted practice, real-time feedback, and adaptive learning paths to achieve your dream score."
    },
    { 
      id: 3, 
      title: "CodeGuide", 
      slug: "https://www.codeguideai.com/", 
      image: "/agents/codeguide.jpg",
      description: "Interactive programming mentor that guides you through coding challenges, explains concepts clearly, and accelerates your development skills."
    },
    { 
      id: 4, 
      title: "AstoVedas", 
      slug: "https://astroveda.alphacodelabs.com/", 
      image: "/agents/astovedas.jpg",
      description: "Ancient wisdom meets modern AI. Get personalized astrological insights, Vedic guidance, and spiritual growth recommendations tailored just for you."
    },
    { 
      id: 5, 
      title: "JEE Masters", 
      slug: "https://jeemasters.alphacodelabs.com/", 
      image: "/agents/jeemasters.jpg",
      description: "Comprehensive JEE preparation assistant that creates personalized study plans, tracks your progress, and helps you master India&apos;s toughest engineering entrance exam."
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
            From acing your IELTS exam to mastering competitive programming, our AI agents are your personal mentors and study companions. 
            Smart solutions that adapt to your learning style and accelerate your success journey.
          </p>
        </div>
      </div>

      {/* AI Agents Portfolio Grid */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <a 
                key={agent.id}
                href={agent.slug}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="mb-4 overflow-hidden rounded-xl relative h-32">
                    <Image 
                      src={agent.image}
                      alt={agent.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                      {agent.title}
                    </h3>
                    <p className="text-purple-100 text-sm leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}