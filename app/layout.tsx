import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

// Distinctive display serif — luxury character
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

// Refined geometric sans — clean, contemporary, not generic
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YĀTRĀ SPA — London's Luxury Spa",
  description:
    "Experience YĀTRĀ SPA across three iconic London locations: Montcalm East, Royal London House, and Mayfair.",
  openGraph: {
    title: "YĀTRĀ SPA — London's Luxury Spa",
    description:
      "Experience YĀTRĀ SPA across three iconic London locations: Montcalm East, Royal London House, and Mayfair.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased bg-black grain">{children}</body>
    </html>
  );
}
