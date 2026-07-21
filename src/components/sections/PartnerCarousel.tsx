"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const partnerTypes = [
  {
    id: "cafe",
    label: "Café & Coffee Shop",
    character: "/brand/character-barista.png",
    headline: "Your café, on the",
    headlineAccent: "OFFEE network.",
    tagline: "Turn quiet hours into a verified workspace for professionals. No layout changes needed.",
    glowColor: "bg-[#D4AF37]/20",
    bgGradient: "bg-gradient-to-br from-[#5c6e46] to-[#2A3324]",
    ctaText: "List your café",
  },
  {
    id: "coworking",
    label: "Co-working Space",
    character: "/brand/character-coworking-manager.png",
    headline: "Your desks,",
    headlineAccent: "always earning.",
    tagline: "Fill every seat every day. OFFEE brings a curated professional audience directly to you.",
    glowColor: "bg-[#D2B48C]/20",
    bgGradient: "bg-gradient-to-br from-[#4A3C31] to-[#241D17]",
    ctaText: "List your space",
  },
  {
    id: "office",
    label: "Unused Office Space",
    character: "/brand/character-office-owner.png",
    headline: "Empty office.",
    headlineAccent: "Perfect workday.",
    tagline: "List your unused rooms or floors. Earn passively from space that's already paid for.",
    glowColor: "bg-[#4682B4]/20",
    bgGradient: "bg-gradient-to-br from-[#2C3E50] to-[#1a252f]",
    ctaText: "List your office",
  },
  {
    id: "hotel",
    label: "Hotel & Hospitality",
    character: "/brand/character-hotel-concierge.png",
    headline: "Your lobby,",
    headlineAccent: "reimagined.",
    tagline: "Attract digital nomads. Boost F&B revenue while professionals work from your venue.",
    glowColor: "bg-[#8B0000]/20",
    bgGradient: "bg-gradient-to-br from-[#4A2323] to-[#2b1212]",
    ctaText: "List your venue",
  },
  {
    id: "workation",
    label: "Workation Retreats",
    character: "/brand/character-workation-host.png",
    headline: "Your retreat,",
    headlineAccent: "their remote office.",
    tagline: "Turn your resort or villa into a premium workation destination for remote teams and digital nomads.",
    glowColor: "bg-[#20B2AA]/20",
    bgGradient: "bg-gradient-to-br from-[#0F5E5C] to-[#072F2E]",
    ctaText: "List your retreat",
  },
];

interface PartnerCarouselProps {
  variant?: "hero" | "teaser";
}

export default function PartnerCarousel({ variant = "hero" }: PartnerCarouselProps) {
  const [activePartner, setActivePartner] = useState(0);
  const [userInteractedWithPartner, setUserInteractedWithPartner] = useState(false);

  // Handle swipe gestures
  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -100 || offset.x < -100) {
      // Swipe left -> Next
      setActivePartner((prev) => (prev + 1) % partnerTypes.length);
      setUserInteractedWithPartner(true);
    } else if (swipe > 100 || offset.x > 100) {
      // Swipe right -> Prev
      setActivePartner((prev) => (prev - 1 + partnerTypes.length) % partnerTypes.length);
      setUserInteractedWithPartner(true);
    }
  };

  // Auto-advance partner carousel
  useEffect(() => {
    if (userInteractedWithPartner) return;
    const timer = setInterval(() => {
      setActivePartner((prev) => (prev + 1) % partnerTypes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [userInteractedWithPartner]);

  const handlePartnerSelect = (idx: number) => {
    setActivePartner(idx);
    setUserInteractedWithPartner(true);
  };

  const current = partnerTypes[activePartner];

  const registerUrl = process.env.NEXT_PUBLIC_PARTNER_REGISTER_URL;
  const ctaHrefHero = registerUrl || "#partner-form";
  const ctaIsExternalHero = !!registerUrl;

  const renderCTA = () => {
    if (variant === "teaser") {
      return (
        <Link
          href="/for-partners"
          onClick={(e) => {
            window.scrollTo(0, 0);
          }}
          onPointerDown={(e) => e.stopPropagation()}
          className="group inline-flex items-center gap-2 bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors relative z-20 cursor-pointer shadow-lg hover:shadow-xl"
        >
          Learn how it works
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      );
    }

    if (ctaIsExternalHero) {
      return (
        <a
          href={ctaHrefHero}
          target="_blank"
          rel="noopener noreferrer"
          onPointerDown={(e) => e.stopPropagation()}
          className="bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors relative z-20 cursor-pointer inline-block"
        >
          {current.ctaText}
        </a>
      );
    }

    return (
      <a
        href={ctaHrefHero}
        onPointerDown={(e) => e.stopPropagation()}
        className="bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors relative z-20 cursor-pointer inline-block"
      >
        {current.ctaText}
      </a>
    );
  };

  return (
    <section className="bg-[#1A202C] text-brand-cream pt-32 md:pt-40 pb-12 md:pb-32 relative overflow-hidden min-h-[100svh] md:min-h-[700px] lg:min-h-[800px] flex items-center">
      {/* Dynamic Background Gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id + "-bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute inset-0 ${current.bgGradient}`}
        />
      </AnimatePresence>

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 right-[-5%] -translate-y-1/2 w-[600px] h-[600px] blur-[120px] rounded-full transition-colors duration-1000 ease-in-out ${current.glowColor}`} />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-12 md:gap-8 cursor-grab active:cursor-grabbing mt-4 md:mt-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {/* Text content */}
          <div className="w-full md:w-1/2 pb-0 md:pb-16 flex flex-col items-center text-center md:items-start md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {variant === "teaser" && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-4 py-1.5 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest rounded-full border border-brand-gold/20 backdrop-blur-sm">
                      For Partners
                    </span>
                  </div>
                )}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
                  {current.headline}{" "}
                  <span className="text-brand-gold">{current.headlineAccent}</span>
                </h1>
                <p className="text-lg md:text-xl text-brand-cream/75 max-w-md mb-8 leading-relaxed">
                  {current.tagline}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Desktop CTA & Dots (Hidden on mobile) */}
            <div className="hidden md:flex flex-col w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                {renderCTA()}
              </motion.div>

              {/* Progress dots */}
              <div className="flex items-center gap-2 mt-8">
                {partnerTypes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePartnerSelect(idx)}
                    onPointerDown={(e) => e.stopPropagation()}
                    aria-label={`View ${partnerTypes[idx].label}`}
                    className={`rounded-full transition-all duration-500 relative z-20 cursor-pointer ${
                      activePartner === idx
                        ? "w-6 h-2 bg-brand-gold"
                        : "w-2 h-2 bg-brand-cream/30 hover:bg-brand-cream/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Character image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-img"}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative w-full max-w-[320px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[640px] aspect-square"
              >
                <Image
                  src={current.character}
                  alt={current.label}
                  fill
                  sizes="(max-width: 768px) 280px, 460px"
                  className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile CTA & Dots (Hidden on desktop) */}
          <div className="w-full md:hidden flex flex-col items-center mt-2 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              {renderCTA()}
            </motion.div>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-8">
              {partnerTypes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePartnerSelect(idx)}
                  onPointerDown={(e) => e.stopPropagation()}
                  aria-label={`View ${partnerTypes[idx].label}`}
                  className={`rounded-full transition-all duration-500 relative z-20 cursor-pointer ${
                    activePartner === idx
                      ? "w-6 h-2 bg-brand-gold"
                      : "w-2 h-2 bg-brand-cream/30 hover:bg-brand-cream/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
