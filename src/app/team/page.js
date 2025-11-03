'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function Team() {
  // CEO/Founder
  const founder = {
    id: 1,
    name: "Sandeep Nair",
    designation: "CEO & Founder",
    image: "/team/founder.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sandeep-nair-80b377146/"
  };

  // Team Members - 3 cards
  const teamMembers = [
    {
      id: 2,
      name: "Ajay Singh",
      designation: "Tech Lead",
      image: "/team/member1.jpg",
      linkedinUrl: "https://www.linkedin.com/in/ajay-singh-ab25821b1/"
    },
    {
      id: 3,
      name: "Manav Sakle", 
      designation: "Senior Developer",
      image: "/team/member2.jpg",
      linkedinUrl: "https://www.linkedin.com/in/manav-sakle-3b8a57193/"
    },
    {
      id: 4,
      name: "Mukesh Joshi",
      designation: "Junior Developer",
      image: "/team/member3.jpg", 
      linkedinUrl: "https://www.linkedin.com/in/mukesh-joshi987/"
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
            Meet the Team
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            We are a lean, passionate team that believes in building and doing rather than just talking. 
            Our philosophy is simple: ship fast, iterate quickly, and let our work speak for itself. 
            Every team member is a maker at heart, committed to turning ambitious ideas into reality.
          </p>
        </div>
      </div>

      {/* CEO/Founder Section */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <a
              href={founder.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 max-w-sm w-full"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl h-80">
                <Image 
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {founder.name}
                </h3>
                <p className="text-purple-100 text-base font-medium">
                  {founder.designation}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <a
                key={member.id}
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl h-64">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-100 text-sm font-medium">
                    {member.designation}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}