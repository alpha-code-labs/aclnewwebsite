'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function CEOThoughts() {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Socialism or Capitalism",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=500&h=300&fit=crop&ixlib=rb-4.0.3",
      url: "https://medium.com/@sandeepnair0410/im-confused-a1b556ce62bf"
    },
    {
      id: 2,
      title: "The Poison Ivy - Social Media",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=500&h=300&fit=crop&ixlib=rb-4.0.3",
      url: "https://medium.com/@sandeepnair0410/the-poison-ivy-32ba506d8c20"
    },
    {
      id: 3,
      title: "Damn these Movies!",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=500&h=300&fit=crop&ixlib=rb-4.0.3",
      url: "https://medium.com/@sandeepnair0410/damn-these-movies-bc5b0f64e22e"
    },
    {
      id: 4,
      title: "Disrupted My Life",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&h=300&fit=crop&ixlib=rb-4.0.3",
      url: "https://medium.com/@sandeepnair0410/disrupting-my-life-2f00a967e904"
    }
  ];

  return (
    <>
      {/* Back Link */}
      <div className="pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Our CEOs Thoughts
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Unfiltered perspectives on life, business, and the world around us.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}