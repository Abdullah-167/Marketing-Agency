"use client";

import { motion } from "framer-motion";
import { Users2, Sparkles } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative bg-[#0c0c0c] text-white pt-40 pb-26 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90">
              Who We Are
            </span>
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/80">
            And What We Stand For
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mt-6 mx-auto"
        >
          We’re not just an agency we’re a collective of creators, strategists,
          and problem solvers building brands that matter.
        </motion.p>

        {/* CTA Button */}
         <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.9, duration: 0.5 }}
               className="flex justify-center mt-10"
             >
               <motion.a
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 href="#our-story"
                 className="group relative flex justify-between max-w-[210px] sm:max-w-full w-full sm:w-auto items-center px-8 py-4 text-sm font-semibold text-white hover:text-black rounded-full overflow-hidden transition-all duration-500 bg-transparent border border-white hover:bg-white"
               >
                 <span className="relative z-10 mr-8">Work WIth Us</span>
                 <svg
                   width="20"
                   height="20"
                   viewBox="0 0 16 16"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   className="relative left-[10px] z-10 transition-all duration-500 group-hover:rotate-45 group-hover:translate-x-1"
                 >
                   <path
                     d="M4.66669 11.3334L11.3334 4.66669"
                     stroke="black"
                     strokeWidth="1.33333"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   />
                   <path
                     d="M4.66669 4.66669H11.3334V11.3334"
                     stroke="black"
                     strokeWidth="1.33333"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   />
                 </svg>
                 <span className="absolute right-4 w-8 h-8 bg-[white] rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0"></span>
               </motion.a>
             </motion.div>

        {/* Floating Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 left-14 text-neutral-500 animate-pulse">
            <Users2 size={60} />
          </div>
          <div className="absolute bottom-16 right-14 text-blue-700 opacity-10">
            <Sparkles size={100} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
