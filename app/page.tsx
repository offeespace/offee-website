import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="OFFEE Atmosphere" 
            fill 
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: '20px' }}>A Hospitality-Powered Productivity Environment</div>
            <h1 className={styles.title}>
              <Image src="/logo-light.png" alt="OFFEE" width={120} height={120} priority className={styles.heroLogo} />
            </h1>
            <div className={styles.divider}></div>
            <p className={styles.subtitle}>Warmth is the Infrastructure. Focus is the Product.</p>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>40+</span>
                <span className={styles.statLbl}>Premium Seats</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLbl}>Focused Atmosphere</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>&le; 45dB</span>
                <span className={styles.statLbl}>Focus Zones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section id="summary" className={styles.summary}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="eyebrow">01 — The Vision</div>
            <h2 className={styles.sectionTitle}>Hospitality that takes productivity seriously.</h2>
            <p className={styles.lead}>
              OFFEE is not a coworking company. We are a hospitality brand. 
              People are not paying for coffee — they are paying for the legitimacy to stay, 
              the psychological separation from home, and an atmosphere that makes focused work feel intentional.
            </p>
          </div>
          <div className={styles.mockupFull}>
            <Image 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" 
              alt="OFFEE Interior Mockup" 
              width={1200} 
              height={600} 
              className={styles.mockupImage}
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className={styles.problem}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="eyebrow">02 — The Context</div>
            <h2 className={styles.sectionTitle}>Three broken options for modern workers</h2>
          </div>
          <div className={styles.grid}>
            <div className={`${styles.card} glass`}>
              <div className={styles.cardNum}>01</div>
              <h3>Home</h3>
              <p>Distracting, isolating, and psychologically ambiguous. When your bedroom is also your office, neither rest nor work feels complete.</p>
            </div>
            <div className={`${styles.card} glass`}>
              <div className={styles.cardNum}>02</div>
              <h3>Corporate Co-working</h3>
              <p>Cold, sterile, and designed for companies. The infrastructure exists but the atmosphere does not. Long lock-ins and corporate vibes.</p>
            </div>
            <div className={`${styles.card} glass`}>
              <div className={styles.cardNum}>03</div>
              <h3>Cafés</h3>
              <p>Unreliable connectivity, no power access, and the quiet guilt of "café squatting" when the bill is just one coffee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ATMOSPHERE */}
      <section id="atmosphere" className={styles.atmosphere}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="eyebrow">03 — The Infrastructure</div>
            <h2 className={styles.sectionTitle}>Atmosphere is the Mechanism</h2>
            <p className={styles.lead}>
              Lighting, seating density, sound profile, and spatial flow are not aesthetic choices — 
              they are levers that directly influence dwell time and productivity.
            </p>
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>💡</div>
              <h4>Lighting</h4>
              <p>Warm Edison-style pendants signal psychological safety and reduce cognitive fatigue. Like late afternoon — always.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎵</div>
              <h4>Soundscape</h4>
              <p>Curated background layers (&le; 50dB) that support individual work without demanding absolute silence.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🌿</div>
              <h4>Materials</h4>
              <p>Natural wood tones, upholstered seating, and plants as dividers. Textures that feel organic and welcoming.</p>
            </div>
          </div>
          <div className={styles.mockupGrid}>
            <div className={styles.mockupHalf}>
              <Image 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
                alt="OFFEE Detail Mockup" 
                width={600} 
                height={800} 
                className={styles.mockupImage}
              />
            </div>
            <div className={styles.mockupHalf}>
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="OFFEE Collaboration Mockup" 
                width={600} 
                height={800} 
                className={styles.mockupImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className={styles.zones}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="eyebrow">04 — The Layout</div>
            <h2 className={styles.sectionTitle}>Designed for Productive Dwell</h2>
          </div>
          <div className={styles.zoneGrid}>
            <div className={`${styles.zoneCard} glass`}>
              <div className={styles.zoneIcon}>🎯</div>
              <h4>Focus Area</h4>
              <p>Heads-down work. Visual barriers and acoustic shielding. No calls.</p>
            </div>
            <div className={`${styles.zoneCard} glass`}>
              <div className={styles.zoneIcon}>💬</div>
              <h4>Collaboration</h4>
              <p>Shared tables for reviews and team meetings. Quiet conversation welcome.</p>
            </div>
            <div className={`${styles.zoneCard} glass`}>
              <div className={styles.zoneIcon}>🛋️</div>
              <h4>Lounge Area</h4>
              <p>Plush seating for conceptual thinking and casual work.</p>
            </div>
            <div className={`${styles.zoneCard} glass`}>
              <div className={styles.zoneIcon}>📞</div>
              <h4>Call Corner</h4>
              <p>Acoustically soundproofed booths for secure video presentations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section id="partner" className={styles.partner}>
        <div className="container">
          <div className={styles.mockupFull} style={{ marginBottom: '60px' }}>
            <Image 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
              alt="OFFEE Workspace Mockup" 
              width={1200} 
              height={600} 
              className={styles.mockupImage}
            />
          </div>
          <div className={`${styles.partnerCard} glass`}>
            <div className="eyebrow">Cafe Owners</div>
            <h2>Turn Empty Tables into Structured Revenue</h2>
            <p>Join the Track B Distributed Network. Host an OFFEE Zone in your cafe and monetize productive dwell time without the management headache.</p>
            <Link href="mailto:partners@offee.space" className={styles.partnerCta}>Apply as Partner</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
