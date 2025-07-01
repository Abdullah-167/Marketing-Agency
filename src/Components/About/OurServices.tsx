"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brush,
  PenTool,
  MousePointerClick,
  Video,
  Shapes,
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    title: "Web Development",
    desc: "Responsive, fast, and scalable websites built for real business performance.",
    points: [
      "Custom Frontend (Next.js)",
      "Shopify & CMS Setup",
      "SEO-optimized code",
      "Speed-focused builds",
    ],
  },
  {
    icon: <PenTool className="w-6 h-6 text-pink-500" />,
    title: "UI/UX Design",
    desc: "Human-centered design for apps, websites, and dashboards — intuitive and beautiful.",
    points: [
      "Wireframes & Prototypes",
      "Mobile-first approach",
      "User Journey Optimization",
      "Dev-ready design systems",
    ],
  },
  {
    icon: <Brush className="w-6 h-6 text-yellow-500" />,
    title: "Graphic Design",
    desc: "Visuals that tell your brand story with clarity and consistency across all channels.",
    points: [
      "Brand Identity & Logos",
      "Social Media Posts",
      "Marketing Creatives",
      "Print & Packaging",
    ],
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-green-500" />,
    title: "Digital Marketing",
    desc: "Strategies that attract, convert, and retain — with performance you can measure.",
    points: [
      "SEO & PPC",
      "Social Media Ads",
      "Email Campaigns",
      "Analytics & Reporting",
    ],
  },
  {
    icon: <Video className="w-6 h-6 text-purple-500" />,
    title: "Video Editing",
    desc: "Engaging video content for ads, reels, YouTube, and storytelling across platforms.",
    points: [
      "Social Media Reels",
      "Product Videos",
      "Promo & Explainers",
      "Motion Graphics",
    ],
  },
  {
    icon: <Shapes className="w-6 h-6 text-indigo-500" />,
    title: "3D & Animation",
    desc: "Bring products and ideas to life through immersive 3D visuals and motion.",
    points: [
      "3D Mockups",
      "Logo Animations",
      "Product Renders",
      "Lottie or Web Animations",
    ],
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-28 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
           {` Here's How We Help You With`}
          </span>
        </motion.h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          We partner with you to plan, build, and grow your brand using proven
          strategies and a tailored approach.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[#141414] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gray-800 rounded-xl">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
              {service.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
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
    </section>
  );
};

export default OurServices;
