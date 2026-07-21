"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 bg-brand-black text-brand-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6">
            Your seat is waiting.
          </h2>
          <p className="text-xl md:text-2xl text-brand-cream/80 mb-12 max-w-2xl mx-auto">
            Join professionals who've stopped guessing and started working.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6">
            <a 
              href={process.env.NEXT_PUBLIC_APP_URL || "#"}
              className="w-full sm:w-auto bg-brand-gold text-brand-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-[1.02] hover:-translate-y-1 transition-all shadow-xl"
            >
              Book Now
            </a>
            <Link 
              href="/for-partners" 
              className="text-brand-cream/70 hover:text-brand-gold text-sm font-medium transition-colors group"
            >
              Are you a café or coworking space? <span className="underline underline-offset-4 group-hover:no-underline">Partner with us &rarr;</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
