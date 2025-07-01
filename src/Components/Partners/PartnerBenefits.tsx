"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ShieldCheck, Zap, Clock, BarChart2, Users, Code } from "lucide-react";
import { ReactElement, useEffect, useRef, useState } from 'react';

interface BenefitItem {
  icon: ReactElement;
  title: string;
  desc: string;
}

interface CounterItemProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

interface CountUpProps {
  end: number;
  duration: number;
  suffix: string;
}

const benefits: BenefitItem[] = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: "White Label Excellence",
    desc: "Deliver work under your brand with full confidentiality. We stay invisible while you take all the credit."
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "Rapid Turnaround",
    desc: "Our specialized teams work efficiently to meet tight deadlines without compromising quality."
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    title: "Time Zone Aligned",
    desc: "Global team working in your timezone for seamless communication and faster iterations."
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-blue-500" />,
    title: "Scalable Capacity",
    desc: "Instantly scale your team up or down based on project demands with no hiring headaches."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "Dedicated Teams",
    desc: "Get consistent quality with the same experts assigned to your projects long-term."
  },
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    title: "Tech Agnostic",
    desc: "We adapt to your preferred tech stack, tools, and workflows for perfect integration."
  }
];

const CounterItem = ({ value, label, suffix = "+", duration = 2 }: CounterItemProps) => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 }
      });
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, controls]);

  return (
    <motion.div 
      className="text-center"
      ref={ref}
      animate={controls}
    >
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 mb-2">
        {isInView ? (
          <CountUp end={value} duration={duration} suffix={suffix} />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  );
};

const CountUp = ({ end, duration, suffix }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps
    let animationFrameId: number;

    const updateCounter = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const PartnerBenefits = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
              Why Partner With Us?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We become an invisible extension of your team, helping you deliver more projects, 
            win more clients, and grow your business without the overhead.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mr-4 group-hover:bg-blue-900/30 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-400 pl-16 -mt-2">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section with Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-gray-800"
        >
          <CounterItem value={100} label="Happy Partners" />
          <CounterItem value={500} label="Projects Delivered" />
          <CounterItem value={24} label="Support Availability" suffix="/7" />
          <CounterItem value={48} label="Avg. First Delivery" suffix="h" />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerBenefits;