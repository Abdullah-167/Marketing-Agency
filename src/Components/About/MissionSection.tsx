"use client";

import { motion } from "framer-motion";
import { Sparkles, Handshake, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: <Sparkles className="w-6 h-6 text-blue-500" />,
    title: "Creativity with Purpose",
    desc: "Every design and strategy we build is aligned with business outcomes no fluff, just focused impact.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-pink-500" />,
    title: "True Collaboration",
    desc: "We work *with* our clients, not just for them. Transparency, feedback, and real partnerships lead our process.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-purple-500" />,
    title: "Long-Term Thinking",
    desc: "We’re not here for quick wins. We build systems, brands, and results that last far beyond the launch.",
  },
];

const MissionSection = () => {
  return (
    <section className="bg-[#0c0c0c] py-24 px-6 border-t border-gray-800 text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            What Drives Us
          </span>
        </motion.h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          More than just pixels and posts our mission is to empower brands with
          strategy, story, and systems that scale.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {values.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className="bg-[#121212] rounded-2xl p-6 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
