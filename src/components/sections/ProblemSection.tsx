"use client";

import { motion } from "motion/react";
import { SearchX, WifiOff, Clock } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <SearchX className="w-6 h-6 text-brand-cream" />,
      title: "Unpredictable",
      desc: "Google shows reviews, not real-time seat availability or Wi-Fi speeds. You're always guessing."
    },
    {
      icon: <WifiOff className="w-6 h-6 text-brand-cream" />,
      title: "Unreliable",
      desc: "You arrive. Every seat is full, the power outlet is broken, or the Wi-Fi drops mid-call."
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-cream" />,
      title: "Inefficient",
      desc: "You waste hours every week just finding a decent place to focus and do meaningful work."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#2A3324] to-brand-green text-brand-cream">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 text-white">
            Work has changed.<br />
            <span className="text-brand-gold">Workspace discovery hasn't.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problems.map((problem, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-dark p-8 rounded-[32px] flex flex-col"
            >
              <div className="mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-white">
                {problem.title}
              </h3>
              <p className="text-brand-cream/80 text-sm md:text-base leading-relaxed">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-brand-cream/60 text-sm font-medium italic">
            "Millions of professionals work remotely. Finding a reliable space shouldn't be the hardest part of the job."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
