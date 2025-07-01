"use client";
import { motion, Variants } from "framer-motion";
import {
  RiSearchEyeLine,
  RiLightbulbFlashLine,
  RiMagicLine,
  RiBarChartBoxLine,
} from "react-icons/ri";

const ServiceProcess = () => {
  const steps = [
    {
      icon: <RiSearchEyeLine className="text-3xl" />,
      title: "Step 01",
      heading: "Deep Discovery",
      description:
        "We immerse ourselves in your brand, goals, and audience to identify key opportunities.",
    },
    {
      icon: <RiLightbulbFlashLine className="text-3xl" />,
      title: "Step 02",
      heading: "Strategic Planning",
      description:
        "Custom roadmap creation with measurable KPIs tailored to your business objectives.",
    },
    {
      icon: <RiMagicLine className="text-3xl" />,
      title: "Step 03",
      heading: "Creative Execution",
      description:
        "Our experts bring the strategy to life with cutting-edge design and technology.",
    },
    {
      icon: <RiBarChartBoxLine className="text-3xl" />,
      title: "Step 04",
      heading: "Performance Growth",
      description:
        "Continuous optimization based on data analytics to maximize your ROI.",
    },
  ];

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
    },
  };


  const iconHover: Variants = {
    hover: { scale: 1.05 },
  };
  const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // triggers children animations with a delay
    },
  },
};

  return (
    <section className="pb-16 sm:pb-40 pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gray-800 rounded-full mb-4"
            whileHover="hover"
            variants={iconHover}
          >
            Our Methodology
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Nexo Mark Difference
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            A proven framework that delivers exceptional results across all our
            services
          </motion.p>
        </motion.div>

        {/* Process Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <motion.div
                className="flex items-center mb-4"
                variants={iconHover}
                whileHover="hover"
              >
                <div className="mr-4 p-2 bg-gray-800 rounded-lg text-white">
                  {step.icon}
                </div>
                <span className="text-sm font-medium text-gray-400">
                  {step.title}
                </span>
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.heading}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;
