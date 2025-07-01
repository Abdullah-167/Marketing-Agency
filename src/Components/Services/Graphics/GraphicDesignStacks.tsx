"use client";

import { motion } from "framer-motion";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeillustrator,
  SiFigma,
  SiCanva,
  SiSketch,
} from "react-icons/si";

const tools = [
  { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
  { name: "Illustrator", icon: <SiAdobeillustrator />, color: "#FF9A00" },
  { name: "Adobe XD", icon: <SiAdobexd />, color: "#FF61F6" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
  { name: "Sketch", icon: <SiSketch />, color: "#F7B500" },
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

const GraphicDesignStacks = () => {
  return (
    <section className="py-24 px-6 bg-[#0c0c0c] border-t border-gray-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tools That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-neutral-200">
            Power Our Designs
          </span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center bg-[#121212] border border-gray-800 hover:border-blue-500 rounded-xl p-5 w-[100px] h-[110px] justify-center transition-all duration-300 hover:scale-105 group"
            >
              <div
                className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: tool.color }}
              >
                {tool.icon}
              </div>
              <p className="text-sm text-gray-300">{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicDesignStacks;
