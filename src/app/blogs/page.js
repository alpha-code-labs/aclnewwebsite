'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function Blogs() {
  // Blog categories
  const blogCategories = [
    {
      id: 1,
      title: "Our CEO's Thoughts",
      image: "/team/founder.jpg",
      description: "Strategic insights, leadership perspectives, and the journey of building a startup studio. Get inside the mind of our founder.",
      href: "/blogs/ceo-thoughts"
    },
    {
      id: 2,
      title: "Gaming Studio",
      image: "/images/gaming-studio.png", 
      description: "Behind the scenes of hypercasual game development, industry trends, and what it takes to create addictive gaming experiences.",
      href: "/blogs/gaming-studio"
    },
    {
      id: 3,
      title: "AI Agents",
      image: "/images/ai-agents.png",
      description: "Deep dives into artificial intelligence, automation trends, and how AI agents are transforming the way we learn and work.",
      href: "/blogs/ai-agents"
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
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Insights, stories, and learnings from our journey of building tomorrow&apos;s innovations. 
            Explore our thoughts on technology, entrepreneurship, and the future we&apos;re creating together.
          </p>
        </div>
      </div>

      {/* Blog Categories Section */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogCategories.map((category) => {
              const Component = category.href.startsWith('#') ? 'div' : Link;
              const componentProps = category.href.startsWith('#') 
                ? {} 
                : { href: category.href };

              return (
                <Component 
                  key={category.id} 
                  {...componentProps}
                  className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="mb-6 overflow-hidden rounded-xl relative h-48">
                    <Image 
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-purple-100 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Component>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}