"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const LOGO_URL =
  "https://images.giftpro.co.uk/original/750x200/76c02d79-54e2-4e2a-a61c-9ae2b4ff49ae.png";

export default function MobileHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-center items-center"
      style={{
        height: "56px",
        background: scrolled ? "rgba(239,240,241,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 1px 18px rgba(50,67,84,0.08)" : "none",
        transition: "background 0.45s ease, box-shadow 0.45s ease, backdrop-filter 0.45s ease",
      }}
    >
      <Image
        src={LOGO_URL}
        alt="YĀTRĀ SPA"
        width={130}
        height={35}
        priority
        style={{
          objectFit: "contain",
          filter: scrolled ? "brightness(0)" : "brightness(0) invert(1)",
          transition: "filter 0.45s ease",
        }}
      />
    </header>
  );
}
