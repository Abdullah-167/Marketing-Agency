"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface DataItem {
  type: string;
  btn: string;
  img: string;
  link: string;
}

const data: DataItem[] = [
  {
    type: "Web Development",
    btn: "Explore",
    img: "/Webdevelopment_Image_2.png",
    link: "/services/website-development",
  },
  {
    type: "UI/UX Design",
    btn: "Explore",
    img: "/Ui_Ux_Image.png",
    link: "services/ui-ux",
  },
  {
    type: "Digital Marketing",
    btn: "Explore",
    img: "/Digital_Marketing_Image-nexomarkagency.png",
    link: "/services/digital-marketing",
  },
  {
    type: "Graphics Designing",
    btn: "Explore",
    img: "/Graphics_Designing_Image-nexomarkagency.png",
    link: "/services/graphics-designing",
  },
  {
    type: "Video Editing",
    btn: "Explore",
    img: "/Video_Editing_Image-nexomarkagency.png",
    link: "/services/video-editing",
  },
  {
    type: "3D Services",
    btn: "Explore",
    img: "/3d_service_Image-nexomarkagency.png",
    link: "/services/3d",
  },
];

const Services = () => {
  const [activeType, setActiveType] = useState<string>(data[0].type);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const section = sectionRef.current;
    const headings = section?.querySelectorAll(".heading-item");

    headings?.forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      if (rect.top >= 100 && rect.bottom <= window.innerHeight - 200) {
        setActiveType(heading.getAttribute("data-type") || "");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:pb-20">
        <motion.h2
          className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90 text-5xl sm:text-6xl pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className={`heading-item border-b border-gray-800 pb-6 cursor-pointer ${
                  activeType === item.type
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-80"
                }`}
                data-type={item.type}
                onMouseEnter={() => setActiveType(item.type)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={item.link}>
                  <h3
                    className={`text-3xl md:text-4xl font-medium transition-all duration-300 ${
                      activeType === item.type ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {item.type}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="sticky top-20 hidden md:block">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeType}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={
                      data.find((item) => item.type === activeType)?.img ||
                      data[0].img
                    }
                    alt={activeType}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
