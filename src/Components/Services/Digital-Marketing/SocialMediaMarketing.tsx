"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  MessageCircle,
} from "lucide-react";

const socialMediaFeatures = [
  {
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
    title: "Instagram Marketing",
    desc: "Engaging reels, carousels, and stories that drive organic growth and brand authority.",
  },
  {
    icon: <Facebook className="w-6 h-6 text-blue-600" />,
    title: "Facebook Campaigns",
    desc: "Result-oriented content and ad strategies to build communities and drive leads.",
  },
  {
    icon: <Linkedin className="w-6 h-6 text-blue-400" />,
    title: "LinkedIn Growth",
    desc: "B2B strategies, C-level outreach, and thought leadership for brand credibility.",
  },
  {
    icon: <Youtube className="w-6 h-6 text-red-500" />,
    title: "YouTube Strategy",
    desc: "Scriptwriting, editing, and publishing for educational and conversion-driven content.",
  },
  {
    icon: <Twitter className="w-6 h-6 text-sky-400" />,
    title: "X (Twitter) Presence",
    desc: "Smart tweets, threads, and interaction to position your brand as a voice of authority.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-green-400" />,
    title: "DMs & Inbox Management",
    desc: "We handle customer queries, convert leads, and maintain brand voice 24/7.",
  },
];

const SocialMediaMarketing = () => {
  return (
    <section className="relative bg-[#0b0b0b] py-28 px-6 text-white border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold leading-tight text-4xl sm:text-5xl block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90"
        >
          Social Media Marketing (SMM)
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
          From daily content to platform strategy we help you grow fast and
          engage real audiences across Meta, Instagram, TikTok, LinkedIn and
          more.
        </motion.p>

        {/* Feature Grid */}
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
          {socialMediaFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-[#121212] border border-gray-700 hover:border-blue-500 rounded-2xl p-6 text-left shadow-md hover:shadow-blue-500/10 transition-all duration-300"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaMarketing;
