import type { Metadata } from "next";
import { Gotu, Nunito } from "next/font/google";
import "./globals.css";

// YĀTRĀ Brand Book — Primary: Gotu (echoes the organic Ayurvedic aesthetic of the logo)
const gotu = Gotu({
  subsets: ["latin", "latin-ext"],   // latin-ext includes Ā macron characters
  weight: "400",
  variable: "--font-gotu",
  display: "swap",
});

// YĀTRĀ Brand Book — Secondary: Avenir equivalent → Nunito (geometric, humanist sans)
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-nunito",
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
    <html lang="en" className={`${gotu.variable} ${nunito.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
