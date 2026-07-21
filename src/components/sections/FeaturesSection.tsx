"use client";

import { motion } from "motion/react";
import { Users, Wifi, VolumeX, Zap, MonitorSpeaker } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-surface-2 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Feature 1: Real-time availability */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-2 lg:order-1 relative"
          >
            {/* CSS UI Mockup */}
            <div className="glass-card bg-white/70 p-6 md:p-8 max-w-md mx-auto transform -rotate-2 drop-shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-black">The Artisan Roastery</h4>
                  <p className="text-xs text-brand-black/60 uppercase tracking-wider font-semibold">Calicut</p>
                </div>
                <div className="bg-brand-green/10 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                  <span className="text-xs font-bold text-brand-green">Open</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-bg-primary rounded-2xl p-4 border border-brand-green/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-green/5 flex items-center justify-center">
                      <Users size={16} className="text-brand-green" />
                    </div>
                    <span className="text-sm font-medium text-brand-black">Focus Zone</span>
                  </div>
                  <span className="text-sm font-bold text-brand-green">4 / 16 seats</span>
                </div>
                
                <div className="bg-bg-primary rounded-2xl p-4 border border-brand-green/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-green/5 flex items-center justify-center">
                      <MonitorSpeaker size={16} className="text-brand-green" />
                    </div>
                    <span className="text-sm font-medium text-brand-black">Collab Area</span>
                  </div>
                  <span className="text-sm font-bold text-amber-600">10 / 12 seats</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-1.5 bg-brand-green/10 rounded-full mb-6">
              <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Real-time Data</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-green mb-6 leading-tight">
              See exactly what's <br />available before you leave.
            </h2>
            <p className="text-lg text-brand-black/70 leading-relaxed">
              No more guessing if there's space. Check real-time seating capacity across focus zones and collaboration areas before you even step out the door.
            </p>
          </motion.div>
        </div>

        {/* Feature 2: Verified amenities */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 bg-brand-green/10 rounded-full mb-6">
              <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Standardized Quality</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-green mb-6 leading-tight">
              Every space is vetted <br />for deep focus.
            </h2>
            <p className="text-lg text-brand-black/70 leading-relaxed">
              We verify the Wi-Fi speed, power outlet availability, seating ergonomics, and ambient noise levels so you don't have to. If it's on OFFEE, it's work-ready.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: <VolumeX className="text-brand-green mb-3" size={24} />, title: "Quiet Focus", desc: "Low ambient noise" },
                { icon: <MonitorSpeaker className="text-brand-green mb-3" size={24} />, title: "Calls Friendly", desc: "Acoustic alcoves" },
                { icon: <Wifi className="text-brand-green mb-3" size={24} />, title: "Dedicated Wi-Fi", desc: "High-speed network" },
                { icon: <Zap className="text-brand-green mb-3" size={24} />, title: "Power-Ready", desc: "Desks with outlets" }
              ].map((badge, i) => (
                <div key={i} className="glass-card bg-white/70 p-8 flex flex-col items-start hover:bg-white/90 transition-colors">
                  {badge.icon}
                  <h4 className="font-display font-bold text-brand-black mb-1">{badge.title}</h4>
                  <p className="text-xs text-brand-black/60">{badge.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
