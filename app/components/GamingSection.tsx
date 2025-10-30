"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const GamingSection = () => {
  const favoriteGames = [
    { name: "Call of Duty: Modern Warfare", year: "2019", platform: "PS5" },
    { name: "God of War", year: "2018", platform: "PS5" },
    { name: "The Last of Us", year: "2013", platform: "PS4" },
    { name: "Spider-Man", year: "2018", platform: "PS5" },
    { name: "Ghost of Tsushima", year: "2020", platform: "PS5" },
    { name: "Uncharted 4", year: "2016", platform: "PS4" },
  ];

  const gamingInterests = [
    { icon: "🎮", text: "Action & Adventure", color: "electric-green" },
    { icon: "🎯", text: "FPS Games", color: "accent-cyan" },
    { icon: "🏆", text: "Competitive Gaming", color: "neon-green" },
    { icon: "🎪", text: "Story-Driven", color: "electric-blue" },
  ];

  return (
    <AnimatedSection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* PlayStation Style Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center gap-2"
          >
            <div className="w-3 h-3 rounded-full bg-electric-blue"></div>
            <div className="w-3 h-3 rounded-full bg-electric-green"></div>
            <div className="w-3 h-3 rounded-full bg-accent-magenta"></div>
            <div className="w-3 h-3 rounded-full bg-accent-cyan"></div>
          </motion.div>
          <h2 className="text-2xl font-light tracking-wide mb-6 text-primary-text">
            Gaming
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gaming Passion */}
          <motion.div
            className="p-6 rounded-xl border border-electric-blue/30 bg-black/30 backdrop-blur-sm hover:border-electric-blue/60 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* PS Controller Background Pattern */}
            <div className="absolute top-0 right-0 text-8xl opacity-5 select-none">
              🎮
            </div>

            <h3 className="text-xl font-normal text-electric-blue mb-4 tracking-wide flex items-center gap-2">
              <span className="text-2xl">🎮</span>
              PlayStation Gamer
            </h3>

            <p className="text-secondary-text font-light leading-relaxed mb-4">
              When I'm not coding, I'm immersed in the world of gaming. PlayStation has been
              my platform of choice, from the iconic MW 2019 to story-rich exclusives.
              Gaming teaches problem-solving, quick thinking, and strategic planning.
            </p>

            <div className="flex flex-wrap gap-2">
              {gamingInterests.map((interest, index) => (
                <motion.span
                  key={interest.text}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-3 py-1 bg-${interest.color}/10 border border-${interest.color}/30 rounded-full text-${interest.color} text-xs font-light flex items-center gap-2`}
                >
                  <span>{interest.icon}</span>
                  {interest.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Favorite Games */}
          <motion.div
            className="p-6 rounded-xl border border-accent-cyan/30 bg-black/30 backdrop-blur-sm hover:border-accent-cyan/60 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-normal text-accent-cyan mb-4 tracking-wide flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              Favorite Games
            </h3>

            <div className="space-y-3">
              {favoriteGames.map((game, index) => (
                <motion.div
                  key={game.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: "rgba(0, 255, 65, 0.05)" }}
                  className="flex items-center justify-between p-3 rounded-lg border border-border-color hover:border-electric-green/50 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <p className="text-sm text-primary-text font-light">{game.name}</p>
                    <p className="text-xs text-secondary-text">{game.year}</p>
                  </div>
                  <div className="px-2 py-1 bg-electric-blue/20 border border-electric-blue/40 rounded text-electric-blue text-xs font-light">
                    {game.platform}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gaming Stats / Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 p-6 rounded-xl border border-electric-green/30 bg-black/20 backdrop-blur-sm"
        >
          <h3 className="text-lg font-normal text-electric-green mb-3 tracking-wide">
            🎯 Gaming = Problem Solving
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-secondary-text font-light">
            <div>
              <span className="text-electric-green">▹</span> <strong className="text-electric-green">Strategy:</strong> Planning raid routes like system architecture
            </div>
            <div>
              <span className="text-electric-green">▹</span> <strong className="text-electric-green">Teamwork:</strong> Squad coordination mirrors agile development
            </div>
            <div>
              <span className="text-electric-green">▹</span> <strong className="text-electric-green">Persistence:</strong> Boss fights teach debugging patience
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};

export default GamingSection;