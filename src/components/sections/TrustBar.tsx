"use client";

import { motion } from "motion/react";
import { Coffee, Zap, Wifi, Armchair, QrCode } from "lucide-react";

const brandSignals = [
  {
    icon: <Coffee className="w-5 h-5 text-brand-gold shrink-0" />,
    title: "Work-Ready Spaces",
  },
  {
    icon: <Zap className="w-5 h-5 text-brand-gold shrink-0" />,
    title: "Book in 30 Seconds",
  },
  {
    icon: <Wifi className="w-5 h-5 text-brand-gold shrink-0" />,
    title: "Verified Wi-Fi",
  },
  {
    icon: <Armchair className="w-5 h-5 text-brand-gold shrink-0" />,
    title: "Guaranteed Seating",
  },
  {
    icon: <QrCode className="w-5 h-5 text-brand-gold shrink-0" />,
    title: "QR Check-in",
  }
];

export default function TrustBar() {
  const renderSignals = () => (
    <>
      {brandSignals.map((signal, idx) => (
        <div key={idx} className="flex items-center gap-2.5 shrink-0 px-4 md:px-0">
          {signal.icon}
          <span className="text-sm font-bold text-white tracking-wide">{signal.title}</span>
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full bg-gradient-to-b from-brand-black to-[#2A3324] py-6 overflow-hidden flex items-center">
      <div className="container mx-auto px-4 w-full">
        {/* Desktop view */}
        <div className="hidden md:flex justify-between items-center w-full max-w-7xl mx-auto">
          {renderSignals()}
        </div>

        {/* Mobile marquee view */}
        <div className="flex md:hidden relative w-full overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-4 pr-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {/* Double the array for seamless looping */}
            {renderSignals()}
            {renderSignals()}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
