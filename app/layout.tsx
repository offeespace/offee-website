import type { Metadata } from "next";
import { Sora, Poppins } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "OFFEE — A hospitality-powered productivity environment",
  description: "A warm workspace outside home. People are not paying for coffee — they are paying for the legitimacy to stay and an atmosphere that makes focused work feel intentional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
