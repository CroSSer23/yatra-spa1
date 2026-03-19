"use client";

import Image from "next/image";
import { Location } from "@/data/locations";
import { BLUE, BEIGE, OFF_WHITE, getCarouselTransform } from "@/lib/carousel";
import { useCarousel } from "@/hooks/useCarousel";

const CARD_W   = 72;  // vw
const STEP     = 54;  // vw
const LOGO_URL = "https://images.giftpro.co.uk/original/750x200/76c02d79-54e2-4e2a-a61c-9ae2b4ff49ae.png";

const BG_OVERLAY = "rgba(50,67,84,0.58)";
const CARD_GRAD  = "linear-gradient(to bottom, rgba(50,67,84,0.0) 0%, rgba(50,67,84,0.18) 45%, rgba(30,41,52,0.9) 100%)";

export default function HeroMobile({ locations }: { locations: Location[] }) {
  const { active, isDragging, goTo, handlers } = useCarousel(locations.length);

  return (
    <section
      {...handlers}
      className="flex md:hidden flex-col w-full relative overflow-hidden select-none"
      style={{
        height: "100svh",
        paddingTop: "24px",
        paddingBottom: "16px",
        touchAction: "pan-y",
        userSelect: "none",
      }}
    >
      {/* Blurred brand-tinted background */}
      {locations.map((location, index) => {
        if (Math.abs(index - active) > 1) return null;
        return (
          <div key={location.id} style={{
            position: "absolute", inset: 0, zIndex: 0,
            transition: "opacity 0.7s ease",
            opacity: index === active ? 1 : 0,
          }}>
            <Image src={location.imageUrl} alt="" fill priority={index === 1}
              className="object-cover object-center" sizes="100vw" aria-hidden />
            <div style={{
              position: "absolute", inset: 0,
              backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
              background: BG_OVERLAY,
            }} />
          </div>
        );
      })}

      {/* Logo */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", marginBottom: "20px", flexShrink: 0 }}>
        <Image src={LOGO_URL} alt="YĀTRĀ SPA" width={160} height={42} priority
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
      </div>

      {/* Carousel */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", flex: 1, overflow: "hidden" }}>
        {locations.map((location, index) => {
          const offset    = index - active;
          const isCenter  = offset === 0;
          const isVisible = Math.abs(offset) <= 1;

          return (
            <div
              key={location.id}
              onClick={() => !isCenter && goTo(index)}
              style={{
                position: "absolute", top: 0, left: "50%",
                width: `${CARD_W}vw`, height: "100%",
                borderRadius: "24px", overflow: "hidden",
                cursor: isCenter ? "default" : "pointer",
                zIndex: isCenter ? 10 : 5,
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "auto" : "none",
                transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease, filter 0.4s ease",
                transform: getCarouselTransform(offset, STEP),
                filter: isCenter ? "brightness(1)" : "brightness(0.45)",
                willChange: isVisible ? "transform" : "auto",
              }}
            >
              <Image src={location.imageUrl} alt={`${location.name} — YĀTRĀ SPA`}
                fill priority={index === 1} className="object-cover object-center pointer-events-none"
                sizes="72vw" draggable={false} />

              <div style={{ position: "absolute", inset: 0, background: CARD_GRAD }} />

              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "flex-end",
                paddingBottom: "36px", paddingLeft: "20px", paddingRight: "20px",
                textAlign: "center",
              }}>
                <p className="font-gotu text-white uppercase"
                  style={{ fontSize: "34px", letterSpacing: "0.28em", lineHeight: 1 }}>
                  YATRA
                </p>
                <p className="font-nunito text-white/70 uppercase"
                  style={{ fontSize: "9px", letterSpacing: "0.55em", lineHeight: 1, marginTop: "5px", fontWeight: 300 }}>
                  {location.spaType}
                </p>

                <div style={{ width: "26px", height: "1px", background: BEIGE, margin: "12px 0", opacity: 0.75 }} />

                <p className="font-nunito text-white/70 uppercase"
                  style={{ fontSize: "10px", letterSpacing: "0.25em", marginBottom: "22px", fontWeight: 300 }}>
                  {location.name}
                </p>

                <div style={{ display: "flex", gap: "10px" }}>
                  <a href={location.bookUrl} className="font-nunito"
                    style={{
                      padding: "9px 20px", borderRadius: "10px",
                      fontSize: "11px", letterSpacing: "0.1em", fontWeight: 500,
                      background: BLUE, color: "#EFF0F1",
                      whiteSpace: "nowrap", textDecoration: "none",
                      textTransform: "uppercase",
                    }}>
                    Book Now
                  </a>
                  <button
                    onClick={() => document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" })}
                    className="font-nunito"
                    style={{
                      padding: "9px 20px", borderRadius: "10px",
                      fontSize: "11px", letterSpacing: "0.1em", fontWeight: 500,
                      border: "1px solid rgba(225,225,223,0.55)",
                      color: "#EFF0F1", whiteSpace: "nowrap",
                      background: "transparent", cursor: "pointer",
                      textTransform: "uppercase",
                    }}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "18px", flexShrink: 0 }}>
        {locations.map((loc, index) => (
          <button key={index} onClick={() => goTo(index)} aria-label={loc.name}
            style={{
              borderRadius: "999px", border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              background: index === active ? BEIGE : "rgba(209,199,191,0.3)",
              width: index === active ? "22px" : "8px", height: "8px",
            }} />
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to locations"
        className="scroll-indicator"
        style={{
          position: "absolute", bottom: "20px", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 15, background: "none", border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "3px",
          padding: "8px",
        }}
      >
        <span className="font-nunito" style={{ fontSize: "8px", letterSpacing: "0.35em", color: "rgba(239,240,241,0.5)", textTransform: "uppercase" }}>
          Scroll
        </span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(239,240,241,0.5)" strokeWidth="1.5" strokeLinecap="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Bottom fade → about section */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", zIndex: 2,
        background: `linear-gradient(to bottom, transparent 0%, ${OFF_WHITE} 100%)`,
        pointerEvents: "none",
      }} />
    </section>
  );
}
