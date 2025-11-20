"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const FootballSection = () => {
  return (
    <AnimatedSection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-light tracking-wide mb-6 text-primary-text">
          Football
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="p-6 rounded-xl border border-electric-blue/30 bg-black/20 backdrop-blur-sm hover:border-electric-blue/60 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-normal text-electric-blue mb-3 tracking-wide">
              Football Passion
            </h3>

            <p className="text-secondary-text font-light leading-relaxed mb-4">
              When I'm not coding, you'll find me on the pitch or watching matches.
              Football teaches me teamwork, strategy, and perseverance – skills that
              translate directly into software development.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Playing", "Watching", "Premier League", "Team Sports"].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-xs font-light"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-6 rounded-xl border border-accent-cyan/30 bg-black/20 backdrop-blur-sm hover:border-accent-cyan/60 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-normal text-accent-cyan mb-3 tracking-wide">
              Code & Play Philosophy
            </h3>

            <div className="space-y-2 text-secondary-text font-light leading-relaxed">
              <p>
                <span className="text-electric-blue">▹</span> <strong className="text-electric-blue">Teamwork:</strong> Collaboration is key
              </p>
              <p>
                <span className="text-electric-blue">▹</span> <strong className="text-electric-blue">Strategy:</strong> Planning plays like planning architecture
              </p>
              <p>
                <span className="text-electric-blue">▹</span> <strong className="text-electric-blue">Resilience:</strong> Never give up on debugging
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default FootballSection;