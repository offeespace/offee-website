"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin } from "lucide-react";

const LOCATIONS = ["Kozhikode", "Calicut Beach", "Cyberpark", "Kochi"];

const characters = [
  {
    id: "founder",
    name: "Priya",
    role: "Startup Founder",
    problem: `"Arrived at my usual spot. Full house. Lost 2 hours hunting for a desk."`,
    resolution: "Book in 30 seconds. Walk in. Start working.",
    image: "/brand/character-founder-female.png",
  },
  {
    id: "designer",
    name: "Marcus",
    role: "Freelance Designer",
    problem: `"Wi-Fi dropped mid-client presentation. Embarrassing silence."`,
    resolution: "Every OFFEE space has verified, dedicated connectivity.",
    image: "/brand/character-designer-02.png",
  },
  {
    id: "developer",
    name: "Kabir",
    role: "Remote Engineer",
    problem: `"Reserved a meeting room. Already occupied when I arrived."`,
    resolution: "Real-time availability. Your seat is yours, guaranteed.",
    image: "/brand/character-developer.png",
  },
  {
    id: "architect",
    name: "Aisha",
    role: "Independent Consultant",
    problem: `"Needed a quiet corner for site-plan review. Ended up in a food court."`,
    resolution: "Filter by sound level. Find your focus zone instantly.",
    image: "/brand/character-architect-female.png",
  },
  {
    id: "student",
    name: "Leo",
    role: "Research Student",
    problem: `"Three hours searching for a power outlet that actually worked."`,
    resolution: "Power-ready desks. Every time. Everywhere.",
    image: "/brand/character-student.png",
  },
  {
    id: "podcaster",
    name: "Shahana",
    role: "Content Creator",
    problem: `"Coffee shop was too loud to record. Had to cancel an interview."`,
    resolution: "Acoustic-treated private rooms. Professional grade silence.",
    image: "/brand/character-podcaster.png",
  },
  {
    id: "sales",
    name: "Rohan",
    role: "Remote Sales Rep",
    problem: `"Wi-Fi dropped on a demo call. Lost a 5-figure deal."`,
    resolution: "Enterprise-grade connectivity. Seamless calls, zero lag.",
    image: "/brand/character-sales.png",
  },
  {
    id: "writer",
    name: "Elena",
    role: "Novelist",
    problem: `"Sat at a wobbly table next to the kitchen. Zero words written."`,
    resolution: "Dedicated quiet zones. Focus unbroken.",
    image: "/brand/character-writer.png",
  },
  {
    id: "tutor",
    name: "Dev",
    role: "Private Tutor",
    problem: `"Met a student in a crowded lobby. No privacy for a deep dive."`,
    resolution: "Spacious meeting rooms. Perfect for 1-on-1 sessions.",
    image: "/brand/character-tutor.png",
  },
  {
    id: "nomad",
    name: "Chloe",
    role: "Digital Nomad",
    problem: `"Arrived in a new city. Spent half the day looking for a decent desk."`,
    resolution: "Verified workspaces everywhere. Land and start working.",
    image: "/brand/character-nomad.png",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [activeSearchTab, setActiveSearchTab] = useState<"hot-seat" | "meeting-room" | "private-space">("hot-seat");
  const [userInteractedWithTab, setUserInteractedWithTab] = useState(false);

  // Auto-advance tabs
  useEffect(() => {
    if (userInteractedWithTab) return;
    
    const tabs = ["hot-seat", "meeting-room", "private-space"] as const;
    const timer = setInterval(() => {
      setActiveSearchTab((prev) => {
        const currentIndex = tabs.indexOf(prev);
        return tabs[(currentIndex + 1) % tabs.length];
      });
    }, 4000); // 4 seconds per tab
    return () => clearInterval(timer);
  }, [userInteractedWithTab]);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000); // 10 seconds per slide
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTyping(false); // Reset typing state
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === characters.length - 1 ? 0 : prev + 1));
      setIsTyping(true);
    }, 50); // tiny delay to allow re-render
  };

  const handlePrev = () => {
    setIsTyping(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? characters.length - 1 : prev - 1));
      setIsTyping(true);
    }, 50);
  };

  const activeChar = characters[currentIndex];

  // Character Typewriter logic for problem statement
  const problemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // speed of typing
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  const renderCharacterStory = (className: string) => (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeChar.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <h3 className="font-display font-semibold text-xl text-white">
              {activeChar.name}
            </h3>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              {activeChar.role}
            </span>
          </div>

          {/* Dialogue Text (MOBILE ONLY) */}
          <div className="mb-4 min-h-[60px] block lg:hidden">
            {isTyping && (
              <motion.p
                variants={problemVariants}
                initial="hidden"
                animate="visible"
                className="text-lg text-white/90 italic font-medium leading-relaxed drop-shadow-sm"
              >
                "{activeChar.problem.split("").map((char, index) => (
                  <motion.span key={`${index}-${char}`} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}"
              </motion.p>
            )}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="text-brand-gold font-bold flex items-center gap-2"
          >
            <span className="w-5 h-px bg-brand-gold inline-block"></span>
            {activeChar.resolution}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );



  const renderCharacterScene = (className: string) => (
    <div className={className}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeChar.id}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x < -50 || velocity.x < -500) handleNext();
            else if (offset.x > 50 || velocity.x > 500) handlePrev();
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="relative z-10 w-full max-w-[650px] aspect-square flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing"
        >
          {/* Glass Speech Bubble (DESKTOP ONLY) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="hidden lg:block absolute -top-16 -left-12 xl:-left-24 z-30 w-fit min-w-[280px] max-w-[320px] bg-white/10 backdrop-blur-md ring-1 ring-white/20 p-6 rounded-3xl rounded-br-sm shadow-2xl pointer-events-none"
          >
            {isTyping && (
              <motion.p
                variants={problemVariants}
                initial="hidden"
                animate="visible"
                className="text-sm md:text-base text-white/90 font-medium italic leading-relaxed"
              >
                {activeChar.problem.split("").map((char, index) => (
                  <motion.span key={`${index}-${char}`} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            )}
          </motion.div>

          <div className="absolute inset-0 flex items-end justify-center pointer-events-none pb-0">
            <Image
              src={activeChar.image}
              alt={activeChar.name}
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl z-10"
              sizes="(max-width: 768px) 100vw, 650px"
            />
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2/3 h-12 bg-black/50 blur-2xl rounded-full z-0 opacity-70"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot Navigation (DESKTOP ONLY) */}
      <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 items-center gap-2 z-40 mb-4">
        {characters.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsTyping(false);
              setTimeout(() => {
                setCurrentIndex(idx);
                setIsTyping(true);
              }, 50);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? "w-6 bg-brand-gold" 
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative bg-gradient-to-b from-[#3a4431] via-brand-green to-brand-black overflow-hidden">
      {/* Ambient Radial Depth Glow */}
      <div className="absolute top-1/2 right-[-10%] md:right-[5%] -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-brand-gold/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none z-0"></div>

      {/* 
        MAIN HERO SECTION (Desktop: Full Layout | Mobile: Text & CTAs only) 
      */}
      <section className="relative pt-40 md:pt-48 lg:pt-32 pb-8 lg:min-h-[100svh] lg:pb-0 flex items-center z-10">

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 gap-x-12 lg:gap-x-16 items-center">
            
            {/* 1. Title & Subtitle (Always visible) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:col-start-1 lg:row-start-1 text-left z-20 pt-6 lg:pt-0 lg:mb-10"
            >
              <h1 className="flex flex-col gap-2 mb-4 lg:mb-6">
                <span className="text-2xl md:text-4xl lg:text-5xl font-semibold font-display text-white/80 tracking-tight">Your next space.</span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight tracking-tighter drop-shadow-sm">Already waiting for you.</span>
              </h1>
              <p className="text-base md:text-xl text-white/90 max-w-lg">
                Book hot seats, meeting rooms, and private spaces in verified cafés and coworking venues — in seconds.
              </p>
            </motion.div>

            {/* 3. Character Story Area (DESKTOP ONLY) */}
            {renderCharacterStory("hidden lg:flex order-3 lg:col-start-1 lg:row-start-2 min-h-[220px] sm:min-h-[160px] flex-col justify-center z-20 text-left pt-4 lg:pt-0")}

            {/* 4. Tabbed Search Bar + CTAs */}
            <div className="order-2 lg:order-4 lg:col-start-1 lg:row-start-3 mt-2 lg:mt-4 flex flex-col items-start gap-8 z-20 pb-12 lg:pb-0 w-full">

              {/* Prominent Tabbed Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-full max-w-lg flex flex-col gap-3"
              >
                {/* Tabs */}
                <div className="flex items-center gap-2 px-2">
                  <button 
                    onClick={() => {
                      setActiveSearchTab("hot-seat");
                      setUserInteractedWithTab(true);
                    }}
                    className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                      activeSearchTab === "hot-seat" ? "bg-white/20 text-white shadow-sm" : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Hot Seat
                  </button>
                  <button 
                    onClick={() => {
                      setActiveSearchTab("meeting-room");
                      setUserInteractedWithTab(true);
                    }}
                    className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                      activeSearchTab === "meeting-room" ? "bg-white/20 text-white shadow-sm" : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Meeting Room
                  </button>
                  <button 
                    onClick={() => {
                      setActiveSearchTab("private-space");
                      setUserInteractedWithTab(true);
                    }}
                    className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                      activeSearchTab === "private-space" ? "bg-white/20 text-white shadow-sm" : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Private Space
                  </button>
                </div>

                {/* Pill Bar */}
                <a
                  href={process.env.NEXT_PUBLIC_APP_URL || "#"}
                  className="w-full flex items-center gap-3 bg-white/10 backdrop-blur-md ring-1 ring-white/25 hover:ring-white/50 hover:bg-white/15 pl-6 pr-2 py-2 md:py-3 rounded-full transition-all duration-200 group cursor-pointer shadow-lg"
                >
                  <Search size={20} className="text-white/50 group-hover:text-brand-gold shrink-0 transition-colors" />
                  <span className="flex-1 text-sm md:text-base text-white/50 group-hover:text-white/70 font-medium transition-colors">
                    {activeSearchTab === "hot-seat" && "Find a hot seat near you..."}
                    {activeSearchTab === "meeting-room" && "Find a meeting room..."}
                    {activeSearchTab === "private-space" && "Find a private space..."}
                  </span>

                </a>
                
                {/* Location Quick-Select Pills */}
                <div className="w-full mt-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {LOCATIONS.map((city) => (
                      <a
                        key={city}
                        href={`${process.env.NEXT_PUBLIC_APP_URL || "#"}?type=${activeSearchTab}&location=${encodeURIComponent(city)}`}
                        className="flex items-center gap-1.5 pr-4 py-1 text-white/60 hover:text-brand-gold text-xs font-medium transition-colors"
                      >
                        <MapPin size={14} className="text-brand-gold/70" />
                        {city}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 2. Character Scene (DESKTOP ONLY) */}
            {renderCharacterScene("hidden lg:flex order-2 lg:col-start-2 lg:row-start-1 lg:row-span-3 relative h-[360px] sm:h-[450px] lg:h-[600px] w-full items-center justify-center z-10 my-4 lg:my-0 lg:ml-auto lg:-mr-12")}
            
          </div>
        </div>
      </section>

      {/* 
        MOBILE EXTENSION SECTION (Mobile Only: Character, Story) 
      */}
      <section className="relative block lg:hidden pb-20 pt-4 z-10">
        <div className="container mx-auto px-4 relative z-10">
          {/* Character Scene (MOBILE ONLY) */}
          {renderCharacterScene("relative mt-8 h-[320px] sm:h-[400px] w-full flex items-center justify-center z-10 mb-2")}
          
          {/* Character Story Area (MOBILE ONLY) */}
          {renderCharacterStory("min-h-[180px] flex flex-col justify-center z-20 text-left")}
        </div>
      </section>
    </div>
  );
}
