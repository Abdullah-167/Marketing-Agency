"use client";
import { motion } from "framer-motion";
import { Star, ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function Clienttrust() {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-indigo-400" />,
      title: "5-Star Client Satisfaction",
      desc: "Our clients consistently rate us 5-stars for our dedication and results.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-400" />,
      title: "100+ Projects Delivered",
      desc: "Helping brands scale their digital presence with tailor-made solutions.",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "Global Clientele",
      desc: "Serving clients across 10+ countries with strategic expertise.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
      title: "Trusted Partnerships",
      desc: "Building long-term collaborations with transparency and trust.",
    },
  ];

  return (
    <section
      className="relative bg-black py-8 sm:pt-14 sm:pb-40 overflow-hidden"
      id="trust"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              We partner with visionaries to build what matters.
            </h2>
            <p className="text-neutral-400 text-lg font-light max-w-lg">
              Partner with a team that believes in elevating brands through
              creativity, technology, and data-driven strategies.
            </p>
          </motion.div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 hover:scale-[1.03] hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-sm font-light">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
