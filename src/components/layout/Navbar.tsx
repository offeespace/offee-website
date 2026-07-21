"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isPartnerPage = pathname === '/for-partners';
  // Pages that start with a dark hero section
  const startsWithDarkHero = pathname === '/for-partners';
  
  // Use dark assets (dark text, dark logo, light glass) if the page starts light OR we scrolled past the dark hero
  const useDarkAssets = !startsWithDarkHero || isScrolledPastHero;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setIsScrolledPastHero(window.scrollY > (window.innerHeight * 0.75));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <motion.header
        className={`fixed top-4 md:top-6 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[90%] md:max-w-5xl z-50 transition-all duration-500 rounded-full py-2 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${
          useDarkAssets 
            ? "bg-white/50 border border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]" 
            : "bg-black/20 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="w-full px-2 pr-4 md:px-4 md:pr-6 flex items-center justify-between relative">
          <Link href="/" className="flex items-center relative z-50 shrink-0">
            <div className="flex items-center ml-2 md:ml-0">
              <Image 
                src={useDarkAssets ? "/brand/logo-dark.png" : "/brand/logo-light.png"}
                alt="OFFEE"
                width={100}
                height={32}
                className="w-auto h-5 md:h-6 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 whitespace-nowrap">
            <Link 
              href="/" 
              onClick={() => window.scrollTo(0, 0)}
              className={`text-sm font-medium transition-colors ${useDarkAssets ? 'text-brand-black hover:text-brand-green' : 'text-white hover:text-brand-gold'}`}>
              Home
            </Link>
            <Link 
              href="/for-partners" 
              onClick={() => window.scrollTo(0, 0)}
              className={`text-sm font-medium transition-colors ${useDarkAssets ? 'text-brand-black hover:text-brand-green' : 'text-white hover:text-brand-gold'}`}>
              For Partners
            </Link>
            <Link 
              href="/insights" 
              onClick={() => window.scrollTo(0, 0)}
              className={`text-sm font-medium transition-colors ${useDarkAssets ? 'text-brand-black hover:text-brand-green' : 'text-white hover:text-brand-gold'}`}>
              Insights
            </Link>
          </nav>

          <div className="hidden md:flex items-center relative z-50 shrink-0">
            {isPartnerPage ? (
              <Link 
                href="#partner-form"
                className="bg-brand-green text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-brand-green/90 transition-colors shadow-sm"
              >
                List your space
              </Link>
            ) : (
              <a 
                href={process.env.NEXT_PUBLIC_APP_URL || "#"}
                className="bg-gradient-to-r from-[#5c6e46] to-[#2A3324] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-sm"
              >
                Book Now
              </a>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 z-50 relative ${useDarkAssets ? 'text-brand-black' : 'text-white'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className={useDarkAssets ? 'text-brand-black' : 'text-white'} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-center mt-10">
              <Link 
                href="/" 
                className="text-2xl font-display font-medium text-brand-black"
                onClick={() => {
                  window.scrollTo(0, 0);
                  toggleMenu();
                }}
              >
                Home
              </Link>
              <Link 
                href="/for-partners" 
                className="text-2xl font-display font-medium text-brand-black"
                onClick={() => {
                  window.scrollTo(0, 0);
                  toggleMenu();
                }}
              >
                For Partners
              </Link>
              <Link 
                href="/insights" 
                className="text-2xl font-display font-medium text-brand-black"
                onClick={() => {
                  window.scrollTo(0, 0);
                  toggleMenu();
                }}
              >
                Insights
              </Link>
              <div className="mt-8">
                {isPartnerPage ? (
                  <Link 
                    href="#partner-form"
                    className="bg-brand-green text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest inline-block w-full text-center shadow-md"
                    onClick={toggleMenu}
                  >
                    List your space
                  </Link>
                ) : (
                  <a 
                    href={process.env.NEXT_PUBLIC_APP_URL || "#"}
                    className="bg-gradient-to-r from-[#5c6e46] to-[#2A3324] text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest inline-block w-full text-center shadow-md hover:opacity-90 transition-opacity"
                    onClick={toggleMenu}
                  >
                    Book Now
                  </a>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
