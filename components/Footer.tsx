import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image src="/logo-word-light.png" alt="OFFEE" width={150} height={42} />
            <p className={styles.tagline}>A hospitality-powered productivity environment.</p>
          </div>
          <div className={styles.nav}>
            <div className={styles.column}>
              <h4>Explore</h4>
              <Link href="#problem">The Problem</Link>
              <Link href="#atmosphere">Atmosphere</Link>
              <Link href="#zones">Zones</Link>
            </div>
            <div className={styles.column}>
              <h4>Partner</h4>
              <Link href="#partner">Track B Hubs</Link>
              <Link href="#partner">Cafe Owners</Link>
              <Link href="mailto:hello@offee.space">Contact Us</Link>
            </div>
            <div className={styles.column}>
              <h4>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} OFFEE SPACE SYSTEM. ALL RIGHTS RESERVED.</p>
          <div className={styles.socials}>
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
