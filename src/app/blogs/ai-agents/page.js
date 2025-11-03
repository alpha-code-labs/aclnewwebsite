import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function AIAgentsBlogs() {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "What Are AI Agents and Why They're the Future of Automation",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&h=300&fit=crop&ixlib=rb-4.0.3",
      href: "/blogs/ai-agents/what-are-ai-agents-future-of-automation"
    },
    {
      id: 2,
      title: "How AI Agents Are Transforming the Education Industry",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500&h=300&fit=crop&ixlib=rb-4.0.3",
      href: "/blogs/ai-agents/how-ai-agents-transforming-education-industry"
    },
    {
      id: 3,
      title: "Building Your Own AI Agent: Tools, Architecture, and Use Cases",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=500&h=300&fit=crop&ixlib=rb-4.0.3",
      href: "/blogs/ai-agents/building-your-own-ai-agent-tools-architecture"
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
            AI Agents Insights
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Exploring the future of artificial intelligence, automation trends, and how AI agents are transforming industries from education to enterprise automation.
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