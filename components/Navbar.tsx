'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo-light.png" alt="OFFEE" width={40} height={40} priority />
        </Link>
      </div>

      <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
        <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}></div>
      </button>

      <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
        <Link href="/#problem" onClick={() => setIsOpen(false)}>Problem</Link>
        <Link href="/#atmosphere" onClick={() => setIsOpen(false)}>Atmosphere</Link>
        <Link href="/#zones" onClick={() => setIsOpen(false)}>Zones</Link>
        <Link href="/#partner" className={styles.partnerBtn} onClick={() => setIsOpen(false)}>Partner</Link>
      </div>
    </nav>
  );
};

export default Navbar;
