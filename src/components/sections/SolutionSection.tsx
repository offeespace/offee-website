"use client";

import { motion } from "motion/react";
import { Compass, CalendarCheck, Coffee } from "lucide-react";

export default function SolutionSection() {
  const steps = [
    {
      icon: <Compass className="w-8 h-8 text-brand-green" />,
      title: "Discover",
      desc: "Browse verified spaces filtered by noise level, amenity, and real-time capacity."
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-brand-green" />,
      title: "Book",
      desc: "Reserve a 2h, 4h, or Full Day pass in under a minute with a digital pass."
    },
    {
      icon: <Coffee className="w-8 h-8 text-brand-green" />,
      title: "Work",
      desc: "Walk in. Scan your QR keycard. Your welcome beverage is already on its way."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    }
  };

  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-green"
          >
            One platform. Every workspace.
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-px bg-brand-green/10 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="relative z-10 glass-card bg-surface-1/80 p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-brand-black">
                {step.title}
              </h3>
              <p className="text-brand-black/70 leading-relaxed text-sm md:text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
