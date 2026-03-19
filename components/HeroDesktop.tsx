"use client";

import Image from "next/image";
import { Location } from "@/data/locations";
import { GOLD, getCarouselTransform } from "@/lib/carousel";
import { useCarousel } from "@/hooks/useCarousel";

const CARD_W = 38;  // vw
const STEP   = 40;  // vw
const LOGO_URL = "https://images.giftpro.co.uk/original/750x200/76c02d79-54e2-4e2a-a61c-9ae2b4ff49ae.png";

export default function HeroDesktop({ locations }: { locations: Location[] }) {
  const { active, isDragging, goTo, handlers } = useCarousel(locations.length);

  return (
    <section
      {...handlers}
      className="hidden md:flex flex-col w-full relative overflow-hidden"
      style={{ height: "100svh", paddingTop: "32px", paddingBottom: "24px", cursor: isDragging ? "grabbing" : "grab" }}
    >
      {/* Blurred background — only render active + adjacent to limit GPU work */}
      {locations.map((location, index) => {
        const dist = Math.abs(index - active);
        if (dist > 1) return null;
        return (
          <div
            key={location.id}
            style={{
              position: "absolute", inset: 0, zIndex: 0,
              transition: "opacity 0.7s ease",
              opacity: index === active ? 1 : 0,
            }}
          >
            <Image src={location.imageUrl} alt="" fill priority={index === 1}
              className="object-cover object-center" sizes="100vw" aria-hidden />
            <div style={{
              position: "absolute", inset: 0,
              backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)",
              background: "rgba(0,0,0,0.6)",
            }} />
          </div>
        );
      })}

      {/* Logo */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", marginBottom: "28px", flexShrink: 0 }}>
        <Image src={LOGO_URL} alt="YĀTRĀ SPA" width={200} height={54} priority
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
      </div>

      {/* Carousel — flex:1 fills remaining height so dots always stay in view */}
      <div
        style={{ position: "relative", zIndex: 10, width: "100%", flex: 1, overflow: "hidden" }}
      >
        {locations.map((location, index) => {
          const offset = index - active;
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
                filter: isCenter ? "brightness(1)" : "brightness(0.45)",
                willChange: isVisible ? "transform" : "auto",
              }}
            >
              <Image src={location.imageUrl} alt={`${location.name} — YĀTRĀ SPA`}
                fill priority={index === 1} className="object-cover object-center" sizes="38vw" />

              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.82) 100%)" }} />

              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: "44px", paddingLeft: "24px", paddingRight: "24px", textAlign: "center" }}>
                <p className="font-cormorant text-white uppercase font-light" style={{ fontSize: "32px", letterSpacing: "0.28em", lineHeight: 1 }}>YĀTRĀ</p>
                <p className="font-cormorant text-white uppercase font-light" style={{ fontSize: "11px", letterSpacing: "0.6em", lineHeight: 1, marginTop: "5px" }}>SPA</p>
                <div style={{ width: "28px", height: "1px", background: `${GOLD}BF`, margin: "14px 0" }} />
                <p className="font-inter text-white/65 font-light uppercase" style={{ fontSize: "11px", letterSpacing: "0.26em", marginBottom: "24px" }}>{location.name}</p>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a href={location.bookUrl} className="font-inter font-medium"
                    style={{ padding: "10px 26px", borderRadius: "12px", fontSize: "13px", letterSpacing: "0.04em", background: GOLD, color: "rgba(0,0,0,0.88)", whiteSpace: "nowrap", textDecoration: "none" }}>
                    Book Now
                  </a>
                  <a href={location.contactUrl} className="font-inter font-medium"
                    style={{ padding: "10px 26px", borderRadius: "12px", fontSize: "13px", letterSpacing: "0.04em", border: "1px solid rgba(255,255,255,0.5)", color: "rgba(255,255,255,0.88)", whiteSpace: "nowrap", textDecoration: "none" }}>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "20px", flexShrink: 0 }}>
        {locations.map((loc, index) => (
          <button key={index} onClick={() => goTo(index)} aria-label={loc.name}
            style={{ borderRadius: "999px", border: "none", cursor: "pointer", padding: 0, transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", background: index === active ? GOLD : "rgba(255,255,255,0.3)", width: index === active ? "22px" : "8px", height: "8px" }} />
        ))}
      </div>

      {/* Bottom fade — blends hero into About section (#0d0d0d) */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "140px", zIndex: 20,
        background: "linear-gradient(to bottom, transparent 0%, #0d0d0d 100%)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
