"use client";

import Link from "next/link";
import Image from "next/image";

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 flex flex-col items-start">
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/brand/logo-light.png" 
                alt="OFFEE"
                width={120}
                height={40}
                className="w-auto h-8 object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Building the infrastructure for distributed work. Verified workspaces, anywhere you need them.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="col-span-1">
            <h4 className="font-display font-semibold text-white mb-6 text-sm uppercase tracking-widest">
              Product
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-brand-gold text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/for-partners" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-white/60 hover:text-brand-gold text-sm transition-colors">
                  For Partners
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-white/60 hover:text-brand-gold text-sm transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <a href={process.env.NEXT_PUBLIC_APP_URL || "#"} className="text-white/60 hover:text-brand-gold text-sm transition-colors">
                  Open App
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="col-span-1">
            <h4 className="font-display font-semibold text-white mb-6 text-sm uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <a 
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-gold transition-colors" 
                aria-label="Instagram"
              >
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {currentYear} OFFEE Space System. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
