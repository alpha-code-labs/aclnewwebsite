import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function GamingStudioBlogs() {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Why Hypercasual Games Are Taking Over the Mobile Gaming Industry",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=500&h=300&fit=crop&ixlib=rb-4.0.3",
      href: "/blogs/gaming-studio/why-hypercasual-games-are-taking-over"
    },
    {
      id: 2,
      title: "How We Build a Hypercasual Game in Just 7 Days",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=500&h=300&fit=crop&ixlib=rb-4.0.3",
      href: "/blogs/gaming-studio/how-we-build-hypercasual-game-in-7-days"
    },
    {
      id: 3,
      title: "Lessons We've Learned from Building Hypercasual Mobile Games",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=500&h=300&fit=crop&ixlib=rb-4.0.3",
      href: "/blogs/gaming-studio/lessons-learned-building-hypercasual-games"
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
            Gaming Studio Insights
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Behind the scenes of hypercasual game development, industry trends, and our journey in creating addictive gaming experiences.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const Component = post.href === "#" ? 'div' : Link;
              const componentProps = post.href === "#" ? {} : { href: post.href };

              return (
                <Component
                  key={post.id}
                  {...componentProps}
                  className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="mb-6 overflow-hidden rounded-xl relative h-48">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors leading-tight">
                      {post.title}
                    </h3>
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