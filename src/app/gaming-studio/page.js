'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function GamingStudio() {
  // Game data with local images and URL slugs
  const games = [
    { id: 1, title: "Cricket Stack Smash", slug: "cbdss", image: "/games/cricket-stack-smash.jpg" },
    { id: 2, title: "Cricket Ball Sort", slug: "cricket-ball-sort", image: "/games/cricket-ball-sort.jpg" },
    { id: 3, title: "Journey Of A Cricketer", slug: "journey-of-a-cricketer", image: "/games/journey-of-a-cricketer.jpg" },
    { id: 4, title: "Mochi The Blob", slug: "mochi-the-blob", image: "/games/mochi-the-blob.jpg" },
    { id: 5, title: "Chess Cricket", slug: "chess-cricket", image: "/games/chess-cricket.jpeg" },
    { id: 6, title: "Cricket Match 3", slug: "cricket-match-3", image: "/games/cricket-match-3.png" },
    { id: 7, title: "Cricket Rush", slug: "cricket-rush", image: "/games/cricket-rush.png" },
    // { id: 8, title: "Maid Caffe Run", slug: "maid-caffe-run", image: "/games/maid-caffe-run.jpg" },
    { id: 8, title: "Insta Famous", slug: "insta-famous", image: "/games/insta-famous.png" },
    { id: 9, title: "Anime Stack Smash", slug: "general", image: "/games/anime-stack-smash.jpg" },
    { id: 10, title: "Football Stack Smash", slug: "football-stack-smash", image: "/games/football-stack-smash.jpg" },
    { id: 11, title: "Quiz Quest", slug: "quiz-quest", image: "/games/quiz-quest.jpg" },
    { id: 12, title: "Space Runner", slug: "space-runner", image: "/games/space-runner.jpg" },
    // { id: 14, title: "Neon Valkyrie", slug: "neon-valkryie", image: "/games/neon-valkyrie.jpg" },
    { id: 13, title: "Boost Protocol", slug: "boost-protocol", image: "/games/boost-protocol.jpg" },
    { id: 14, title: "Bubble Tapper", slug: "bubble-tapper", image: "/games/bubble-tapper.jpg" },
    { id: 15, title: "Perfect Drop", slug: "perfect-drop", image: "/games/perfect-drop.jpg" },
    // { id: 18, title: "Divine Quest", slug: "divine-quest", image: "/games/divine-quest.jpg" },
    { id: 16, title: "Flappy Quickball", slug: "flappy-quickball", image: "/games/flappy-quickball.png" }
  ];

  return (
    <>
      {/* Back Link */}
      <div className="pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/cricket-heroes"
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white transition-colors duration-300 font-medium hover:underline decoration-purple-400 underline-offset-4"
          >
            <ArrowLeft size={20} />
            Back to Cricket Heroes
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Hypercasual Gaming Masters
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            We create addictive, simple, and engaging hypercasual games that captivate millions of players worldwide.
          </p>
        </div>
      </div>

      {/* Games Portfolio Grid */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {games.map((game) => (
              <Link 
                key={game.id}
                href={`/gaming-studio/${game.slug}`}
              >
                <div className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/20 hover:border-purple-400/40 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="mb-4 overflow-hidden rounded-xl relative h-32">
                    <Image 
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                      {game.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}