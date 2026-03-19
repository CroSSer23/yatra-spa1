"use client";

import Image from "next/image";
import { Location } from "@/data/locations";
import { TERRA, BEIGE, CREAM, getCarouselTransform } from "@/lib/carousel";
import { useCarousel } from "@/hooks/useCarousel";

const CARD_W   = 38;  // vw
const STEP     = 40;  // vw
const LOGO_URL = "https://images.giftpro.co.uk/original/750x200/76c02d79-54e2-4e2a-a61c-9ae2b4ff49ae.png";

// Brand Book: deep blue overlay instead of pure black
const BG_OVERLAY = "rgba(50,67,84,0.62)";
const CARD_GRAD  = "linear-gradient(to bottom, rgba(50,67,84,0.0) 0%, rgba(50,67,84,0.18) 45%, rgba(30,41,52,0.92) 100%)";

export default function HeroDesktop({ locations }: { locations: Location[] }) {
  const { active, isDragging, goTo, handlers } = useCarousel(locations.length);

  return (
    <section
      {...handlers}
      className="hidden md:flex flex-col w-full relative overflow-hidden select-none"
      style={{
        height: "100svh",
        paddingTop: "32px",
        paddingBottom: "24px",
        cursor: isDragging ? "grabbing" : "grab",
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
              backdropFilter: "blur(44px)", WebkitBackdropFilter: "blur(44px)",
              background: BG_OVERLAY,
            }} />
          </div>
        );
      })}

      {/* Logo */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", marginBottom: "28px", flexShrink: 0 }}>
        <Image src={LOGO_URL} alt="YĀTRĀ SPA" width={200} height={54} priority
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
      </div>

      {/* Carousel */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", flex: 1, overflow: "hidden" }}>
        {locations.map((location, index) => {
          const offset   = index - active;
          const isCenter = offset === 0;
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
                filter: isCenter ? "brightness(1)" : "brightness(0.4)",
                willChange: isVisible ? "transform" : "auto",
              }}
            >
              <Image src={location.imageUrl} alt={`${location.name} — YĀTRĀ SPA`}
                fill priority={index === 1} className="object-cover object-center pointer-events-none"
                sizes="38vw" draggable={false} />

              {/* Brand-tinted gradient overlay */}
              <div style={{ position: "absolute", inset: 0, background: CARD_GRAD }} />

              {/* Card content */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "flex-end",
                paddingBottom: "44px", paddingLeft: "24px", paddingRight: "24px",
                textAlign: "center",
              }}>
                {/* YĀTRĀ wordmark on card */}
                <p className="font-gotu text-white uppercase"
                  style={{ fontSize: "30px", letterSpacing: "0.3em", lineHeight: 1 }}>
                  YĀTRĀ
                </p>
                {/* Spa type per Brand Book: "URBAN SPA" or "SIGNATURE SPA" */}
                <p className="font-nunito text-white/70 uppercase"
                  style={{ fontSize: "10px", letterSpacing: "0.55em", lineHeight: 1, marginTop: "6px", fontWeight: 300 }}>
                  {location.spaType}
                </p>

                {/* Brand beige divider */}
                <div style={{ width: "28px", height: "1px", background: BEIGE, margin: "14px 0", opacity: 0.75 }} />

                {/* Location name */}
                <p className="font-nunito text-white/75 uppercase"
                  style={{ fontSize: "11px", letterSpacing: "0.28em", marginBottom: "26px", fontWeight: 300 }}>
                  {location.name}
                </p>

                <div style={{ display: "flex", gap: "12px" }}>
                  {/* Book Now — Brand Book terracotta accent */}
                  <a href={location.bookUrl} className="font-nunito"
                    style={{
                      padding: "10px 26px", borderRadius: "10px",
                      fontSize: "12px", letterSpacing: "0.1em", fontWeight: 500,
                      background: TERRA, color: "#EFF0F1",
                      whiteSpace: "nowrap", textDecoration: "none",
                      textTransform: "uppercase",
                    }}>
                    Book Now
                  </a>
                  {/* Contact Us — ghost */}
                  <button
                    onClick={() => document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" })}
                    className="font-nunito"
                    style={{
                      padding: "10px 26px", borderRadius: "10px",
                      fontSize: "12px", letterSpacing: "0.1em", fontWeight: 500,
                      border: `1px solid rgba(225,225,223,0.55)`,
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

      {/* Dots — brand blue active */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "20px", flexShrink: 0 }}>
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

      {/* Bottom fade → About section */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "140px", zIndex: 20,
        background: `linear-gradient(to bottom, transparent 0%, ${CREAM} 100%)`,
        pointerEvents: "none",
      }} />
    </section>
  );
}
