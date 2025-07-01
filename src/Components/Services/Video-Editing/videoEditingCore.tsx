"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Film,
  Sparkles,
  Music,
  Captions,
  SquareStack,
} from "lucide-react";

const videoEditingCore = [
  {
    icon: <Scissors className="w-6 h-6 text-pink-500" />,
    title: "Cinematic Cuts",
    desc: "Smooth, story-driven editing with perfect timing, transitions, and flow.",
  },
  {
    icon: <Film className="w-6 h-6 text-yellow-400" />,
    title: "Shorts & Reels",
    desc: "We create scroll-stopping short videos for Instagram, TikTok, and YouTube Shorts.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-500" />,
    title: "Motion Graphics",
    desc: "Add energy, character, and polish with transitions, intros, and animated overlays.",
  },
  {
    icon: <Music className="w-6 h-6 text-green-500" />,
    title: "Sound Design",
    desc: "Impactful sound effects, syncs, music, and voice everything flows with clarity.",
  },
  {
    icon: <Captions className="w-6 h-6 text-purple-500" />,
    title: "Captions & Subtitles",
    desc: "Perfectly timed captions that increase retention and accessibility.",
  },
  {
    icon: <SquareStack className="w-6 h-6 text-sky-500" />,
    title: "YouTube Editing",
    desc: "We edit high-retention content with hooks, b-roll, zooms, cuts, and pacing that keeps viewers watching.",
  },
];

const VideoEditingServices = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 text-white border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-neutral-200">
              Video Editing
            </span>{" "}
            That Tells Stories
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
          From fast-paced reels to cinematic YouTube edits we make sure your visuals not only look good but feel powerful.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {videoEditingCore.map((service, i) => (
            <motion.div
              key={i}
              className="bg-[#121212] border border-gray-700 hover:border-blue-500 rounded-2xl p-6 text-left shadow-md hover:shadow-blue-500/10 transition-all duration-300"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoEditingServices;
