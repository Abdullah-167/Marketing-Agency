"use client";

import { motion } from "framer-motion";
import {
  SiFigma,
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiSketch,
  SiInkscape,
  SiAffinitydesigner,
} from "react-icons/si";

const uiuxStacks = [
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Adobe XD", icon: <SiAdobexd />, color: "#FF61F6" },
  { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
  { name: "Framer", icon: <SiFramer />, color: "#ffffff" },
  { name: "Sketch", icon: <SiSketch />, color: "#F7B500" },
  { name: "Inkscape", icon: <SiInkscape />, color: "#ffffff" },
  { name: "Affinity", icon: <SiAffinitydesigner />, color: "#1B72BE" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const UiUxStacks = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tools We Use to Craft Beautiful Interfaces
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {uiuxStacks.map((stack, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center bg-[#1f1f1f] border border-gray-800 hover:border-blue-500 rounded-xl p-4 w-[100px] h-[110px] justify-center shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div
                className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: stack.color }}
              >
                {stack.icon}
              </div>
              <p className="text-sm text-center text-gray-300">{stack.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UiUxStacks;
