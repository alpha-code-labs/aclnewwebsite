'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function AngelInvestors() {
  // Lead Investors - 4 cards
  const leadInvestors = [
    { 
      id: 1, 
      name: "Neeraj Gupta", 
      image: "/investors/neeraj.jpg",
      description: "As CEO and Managing Director of Harsoria Healthcare, Neeraj brings in years of industry experience in Healthcare. His firm Harsoria are leaders in manufacturing medical equipments. Harsoria also exports its products to many countries."
    },
    { 
      id: 2, 
      name: "Rahul Keswani", 
      image: "/investors/rahul.jpg",
      description: "As CEO and Managing Director of MHK Exports, Rahul beings in years of industry experience in Textile and garments. MHK is one of the leading garment exporter of the country with operations in many countries globally."
    },
    { 
      id: 3, 
      name: "Rohit Dalal", 
      image: "/investors/rohit.jpg",
      description: "As Chairman and CEO of the Spiti Group, Rohit also runs and operates the Suncity school in Gurgaon. Rohit is also a diverse investor with interests in various companies and businesses. His school boasts of one of the premium sports facilities in the country."
    },
    { 
      id: 4, 
      name: "Pankaj Chaddah", 
      image: "/investors/pankaj.jpg",
      description: "Known lovingly as PC, Pankaj was the co-founder of Zomato, before spinning off and co-founding his own baby called Shyft. Shyft is a personalized, lifestyle driven health care platform. PC is a serial entrepreneur and investor."
    }
  ];

  // Other Investors - 11 cards (15 total - 4 lead = 11 other)
  const otherInvestors = [
    { 
      id: 5, 
      name: "Tejasvi Bhargava", 
      image: "/investors/tejaswi.jpg",
      description: "As CEO and Managing Director of Quality Group, Tejasvi brings in years of industry experience in manufacturing. Tejasvi&apos;s manufacturing unit produces steel parts for many industries."
    },
    { 
      id: 6, 
      name: "Samir Dewan", 
      image: "/investors/samir.jpg",
      description: "Samy heads Affluent banking over at Indusind Bank. As the job profile suggests, he is our resident expert in Finance. Samy also has a fund that helps small companies grow at a quick pace."
    },
    { 
      id: 7, 
      name: "Gaurav Verma", 
      image: "/investors/gaurav.jpg",
      description: "This Chief Marketing Officer of PharmEasy is an industry expert in Marketing. Previously with Zomato, Gaurav is well known in the industry as a marketing guru."
    },
    { 
      id: 8, 
      name: "Viraj Sinh", 
      image: "/investors/viraj.jpg",
      description: "This Managing Partner at Affle is an industry expert in Adtech. A serial entrepreneur, Viraj took his first company all the way to IPO. A rare achievement."
    },
    { 
      id: 9, 
      name: "Mrigank Tripathi", 
      image: "/investors/mrigank.jpg",
      description: "This Chief Growth Office of PeopleStrong is an industry expert in B2B Saas. An entrepreneur by heart, Mrigank is also a mentor to countless B2B saas products both Indian and abroad."
    },
    { 
      id: 10, 
      name: "Arjun Mehta", 
      image: "/investors/arjun.jpg",
      description: "Arjun Mehta is a partner at BDO India. Arjun is a Risk Advisory specialist and has over 25 years of expertise in identifying, predicting and mitigating business threats."
    },
    { 
      id: 11, 
      name: "Saurabh Mehta", 
      image: "/investors/saurabh.jpg",
      description: "Saurabh Gupta is Head of Operations at GLG. His core strength is in operations, in strategic planning and in driving large teams."
    },
    { 
      id: 12, 
      name: "Ravi Sharma", 
      image: "/investors/ravi.jpg",
      description: "This hardcore sales man has vast experience in B2C sales. Growing internet businesses is his strength and he has done it for over 25 years."
    },
    { 
      id: 13, 
      name: "Chirag Galundia", 
      image: "/investors/chirag.jpg",
      description: "This National Director at Wavemaker is widely respected in the Digital Marketing space as one of the leaders. His area of expertise is in E-Commerce."
    },
    { 
      id: 14, 
      name: "Sumeet Mittal", 
      image: "/investors/sumeet.jpg",
      description: "Sumeet Mittal works for the Louis Dreyfus company. He has been in the cotton trading industry since 2008 and is an expert in the Agritech space."
    },
    { 
      id: 15, 
      name: "Rachit Bahri", 
      image: "/investors/rachit.jpg",
      description: "As Managing Director of Pravin Papers Ltd, Rachit brings in years of industry experience in Distribution. Rachit is a distributor/trader in petroleum coke."
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
            Our Investors
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Meet the men who showed faith and took a risk with us.
          </p>
        </div>
      </div>

      {/* Lead Investors Section */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Lead Investors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadInvestors.map((investor) => (
              <div key={investor.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/20">
                <div className="mb-4 overflow-hidden rounded-xl relative h-32">
                  <Image 
                    src={investor.image}
                    alt={investor.name}
                    fill
                    className="object-contain transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-3 transition-colors">
                    {investor.name}
                  </h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    {investor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Investors Section */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Other Investors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherInvestors.map((investor) => (
              <div key={investor.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/20">
                <div className="mb-4 overflow-hidden rounded-xl relative h-32">
                  <Image 
                    src={investor.image}
                    alt={investor.name}
                    fill
                    className="object-contain transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-3 transition-colors">
                    {investor.name}
                  </h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    {investor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}