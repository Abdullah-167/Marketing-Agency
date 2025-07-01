"use client";

import { motion } from "framer-motion";

const AboutStory = () => {
  return (
    <section className=" py-24 px-6 border-t border-gray-800 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
              Built for Brands
            </span>{" "}
            with Purpose
          </h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Our journey began with one goal to help businesses stand out in a noisy digital world.
            What started as a small creative team is now a full-service agency helping ambitious brands
            grow through design, strategy, and smart execution.
          </p>
          <p className="text-gray-500 text-base">
            We believe in partnerships, not transactions. Every pixel, post, and project is crafted
            with intention to tell your story, connect with your audience, and drive real results.
          </p>
        </motion.div>

        {/* Video Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/process.mp4" // replace with your actual video path
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;
