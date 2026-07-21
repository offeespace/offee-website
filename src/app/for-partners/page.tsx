"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, TrendingUp, Eye, BarChart3, Wallet } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PartnerCarousel from "@/components/sections/PartnerCarousel";

export default function ForPartnersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const registerUrl = process.env.NEXT_PUBLIC_PARTNER_REGISTER_URL;
  const ctaHref = registerUrl || "#partner-form";
  const ctaIsExternal = !!registerUrl;

  const benefits = [
    { icon: <TrendingUp className="text-brand-green" />, title: "Incremental Revenue", desc: "Monetize your empty seats during non-peak hours without changing your operations." },
    { icon: <Eye className="text-brand-green" />, title: "Targeted Visibility", desc: "Reach a curated audience of professionals, freelancers, and remote workers." },
    { icon: <BarChart3 className="text-brand-green" />, title: "Operational Insights", desc: "Access data on peak working hours, popular seat types, and customer retention." },
    { icon: <Wallet className="text-brand-green" />, title: "Zero Upfront Cost", desc: "No listing fees. We operate on a pure revenue-share model for successful bookings." }
  ];

  const faqs = [
    { q: "How much does it cost to join?", a: "Joining OFFEE is completely free. There are no setup fees or monthly subscriptions. We only take a small commission on successful bookings." },
    { q: "Do I need to change my cafe layout?", a: "Not at all. You tell us which seats or zones are available for work, and we manage the capacity digitally. We work with your existing setup." },
    { q: "How do I verify a customer's booking?", a: "Customers receive a digital QR keycard on their phone. Your staff simply scans it using our lightweight partner web app to verify the session." },
    { q: "Can I limit the hours OFFEE users can book?", a: "Yes. You have full control over your inventory. You can block out peak dining hours, weekends, or specific tables." },
    { q: "When do I get paid?", a: "Payouts are processed automatically every week. You can track all earnings in real-time through your partner dashboard." }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-bg-primary">
        
        <PartnerCarousel key="for-partners-hero" variant="hero" />

        {/* Benefits Section */}
        <section className="py-24 bg-surface-2">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-green mb-4">Why partner with us?</h2>
              <p className="text-brand-black/70 max-w-2xl mx-auto">We bring the demand, you provide the space. It's a partnership designed to be completely frictionless for your operations.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card bg-white/70 p-8 flex flex-col"
                >
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-black mb-3">{benefit.title}</h3>
                  <p className="text-sm text-brand-black/70 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 bg-bg-primary border-t border-brand-green/10">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-green mb-16 text-center">How it works</h2>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-green/20 before:to-transparent">
              {[
                { step: "01", title: "Apply", desc: "Submit your venue details. We review to ensure it meets our baseline quality standards for professionals." },
                { step: "02", title: "Configure", desc: "Set your available hours, allocate specific seats or zones, and decide on your pricing." },
                { step: "03", title: "Verification", desc: "Our team reviews your setup and verifies your venue to officially activate your account." },
                { step: "04", title: "Welcome", desc: "Go live on the network. Start accepting bookings and verifying passes via our web scanner." }
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-primary bg-brand-green text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {item.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card bg-white/50 p-6 rounded-[32px]">
                    <h3 className="font-display font-bold text-lg text-brand-black mb-2">{item.title}</h3>
                    <p className="text-brand-black/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form and FAQ Section */}
        <section id="partner-form" className="py-24 bg-surface-2 border-t border-brand-green/10">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Register CTA */}
              <div className="w-full lg:w-1/2">
                <div className="bg-brand-green p-10 md:p-14 rounded-3xl relative overflow-hidden h-full flex flex-col justify-center">
                  <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-brand-gold/20 blur-3xl rounded-full pointer-events-none" />
                  <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-brand-cream/10 blur-2xl rounded-full pointer-events-none" />
                  
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 relative z-10">
                    Ready to maximize your space?
                  </h2>
                  <p className="text-white/80 text-base md:text-lg mb-10 max-w-md relative z-10">
                    Join the OFFEE network today and start turning your empty seats into consistent, passive revenue.
                  </p>
                  
                  <div className="relative z-10">
                    {ctaIsExternal ? (
                      <a
                        href={ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors shadow-lg shadow-brand-gold/20"
                      >
                        List your space
                      </a>
                    ) : (
                      <a
                        href={ctaHref}
                        className="inline-block bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors shadow-lg shadow-brand-gold/20"
                      >
                        List your space
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-display font-bold text-brand-green mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className={`glass border border-brand-green/10 rounded-[2rem] overflow-hidden transition-colors ${openFaq === idx ? 'bg-white/80' : 'bg-white/40 hover:bg-white/60'}`}
                    >
                      <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                      >
                        <span className="font-semibold text-brand-black pr-4">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-brand-green transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openFaq === idx && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-5 pb-5 text-sm text-brand-black/70 leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


