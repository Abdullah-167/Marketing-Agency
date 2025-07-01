"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Wand2,
  Shapes,
  PenTool,
  Move,
  CircleDashed,
} from "lucide-react";

const motionGraphics = [
  {
    icon: <Wand2 className="w-6 h-6 text-yellow-400" />,
    title: "Animated Intros & Outros",
    desc: "Branded intros and outros with slick motion effects that instantly elevate production value.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-500" />,
    title: "Logo Animations",
    desc: "We animate your logo with polish and punch for use across videos, reels, and ads.",
  },
  {
    icon: <Shapes className="w-6 h-6 text-pink-500" />,
    title: "Explainer Graphics",
    desc: "We break down complex ideas into animated sequences using icons, shapes, and flows.",
  },
  {
    icon: <Move className="w-6 h-6 text-green-500" />,
    title: "Kinetic Typography",
    desc: "We animate text with bounce, rotation, and flow to match speech or music rhythm.",
  },
  {
    icon: <CircleDashed className="w-6 h-6 text-purple-500" />,
    title: "Lower Thirds & Labels",
    desc: "Custom animated tags, names, and overlays that enhance professionalism and clarity.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-orange-400" />,
    title: "Custom Animations",
    desc: "We bring your brand elements, products, or data to life with fully custom motion.",
  },
];

const MotionGraphics = () => {
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
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            Motion Graphics
          </span>{" "}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
        {`  Whether it's subtle logo movement or full-scale explainers we add
          smart motion to your message and make your content pop.`}
        </motion.p>

        {/* Grid */}
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
          {motionGraphics.map((service, i) => (
            <motion.div
              key={i}
              className="bg-[#121212] border border-gray-700 hover:border-blue-500 rounded-2xl p-6 text-left shadow-md hover:shadow-yellow-400/10 transition-all duration-300"
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

export default MotionGraphics;
