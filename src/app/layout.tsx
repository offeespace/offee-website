import type { Metadata, Viewport } from "next";
import { Sora, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F9F7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://offee.space"),
  title: {
    template: "%s | OFFEE",
    default: "OFFEE — Discover & Book Verified Workspaces & Cafés",
  },
  description: "OFFEE is a premium workspace platform that allows professionals to discover, book, and access verified work-ready cafés, on-demand meeting rooms, and coworking spaces across India.",
  keywords: ["workspace booking", "coworking spaces", "work from cafe", "on demand meeting rooms", "flexible workspace India", "private offices", "remote work spaces", "OFFEE"],
  authors: [{ name: "OFFEE" }],
  openGraph: {
    type: "website",
    url: "https://offee.space",
    title: "OFFEE — Discover & Book Verified Workspaces",
    description: "Work from the best verified cafes, coworking spaces, and meeting rooms. Instant booking, guaranteed seating, and reliable Wi-Fi.",
    siteName: "OFFEE",
  },
  twitter: {
    card: "summary_large_image",
    title: "OFFEE — Premium Workspace Booking",
    description: "Work from the best verified cafes, coworking spaces, and meeting rooms. Instant booking, guaranteed seating, and reliable Wi-Fi.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://offee.space",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://offee.space/#organization",
        "name": "OFFEE",
        "url": "https://offee.space",
        "logo": "https://offee.space/brand/logo-dark.png",
        "foundingDate": "2026",
      },
      {
        "@type": "WebSite",
        "@id": "https://offee.space/#website",
        "url": "https://offee.space",
        "name": "OFFEE",
        "publisher": {
          "@id": "https://offee.space/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://offee.space/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${sora.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative bg-bg-primary text-brand-black">
        {children}
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
