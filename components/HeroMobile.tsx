"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { Location } from "@/data/locations";

interface HeroMobileProps {
  locations: Location[];
}

// Card is 82vw wide → 9vw peeks on each side
// Step per card = 82vw + 12px gap
// Initial offset = 9vw (centers first card)
const CARD_VW = 82;
const GAP_PX = 12;
const PEEK_VW = (100 - CARD_VW) / 2; // 9vw

export default function HeroMobile({ locations }: HeroMobileProps) {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActive(Math.max(0, Math.min(locations.length - 1, index)));
    },
    [locations.length]
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => goTo(active + 1),
    onSwipedRight: () => goTo(active - 1),
    onSwiping: () => setIsDragging(true),
    onSwiped: () => setIsDragging(false),
    trackMouse: true,
    preventScrollOnSwipe: true,
    delta: 10,
  });

  // translateX = peek offset - (active card index × card step)
  const trackTranslate = `calc(${PEEK_VW}vw - ${active} * (${CARD_VW}vw + ${GAP_PX}px))`;

  return (
    <section className="flex md:hidden flex-col w-full bg-black select-none pt-8 pb-4 min-h-screen justify-center">
      {/* Carousel viewport */}
      <div
        {...handlers}
        className="w-full overflow-hidden"
        style={{ height: "76vh" }}
      >
        {/* Sliding track */}
        <div
          className={isDragging ? "" : "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"}
          style={{
            display: "flex",
            gap: `${GAP_PX}px`,
            height: "76vh",
            transform: `translateX(${trackTranslate})`,
            willChange: "transform",
          }}
        >
          {locations.map((location, index) => {
            const isActive = index === active;
            return (
              <div
                key={location.id}
                onClick={() => !isActive && goTo(index)}
                style={{
                  position: "relative",
                  width: `${CARD_VW}vw`,
                  height: "76vh",
                  flexShrink: 0,
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: isActive ? "default" : "pointer",
                  transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), filter 0.5s ease",
                  transform: isActive ? "scale(1)" : "scale(0.95)",
                  filter: isActive ? "brightness(1)" : "brightness(0.55)",
                }}
              >
                {/* Spa image */}
                <Image
                  src={location.imageUrl}
                  alt={`${location.name} — YĀTRĀ SPA`}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="82vw"
                />

                {/* Bottom-heavy gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.78) 100%)",
                  }}
                />

                {/* Content — bottom section */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingBottom: "40px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    textAlign: "center",
                  }}
                >
                  {/* Brand name */}
                  <p className="font-cormorant text-white uppercase font-light leading-none"
                     style={{ fontSize: "38px", letterSpacing: "0.25em" }}>
                    YĀTRĀ
                  </p>
                  <p className="font-cormorant text-white uppercase font-light leading-none mt-1"
                     style={{ fontSize: "13px", letterSpacing: "0.55em" }}>
                    SPA
                  </p>

                  {/* Gold rule */}
                  <div style={{ width: "28px", height: "1px", background: "rgba(201,168,76,0.75)", margin: "14px 0" }} />

                  {/* Location */}
                  <p className="font-inter text-white/70 font-light uppercase"
                     style={{ fontSize: "10px", letterSpacing: "0.26em", marginBottom: "24px" }}>
                    {location.name}
                  </p>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: "10px" }}>
                    <a
                      href={location.bookUrl}
                      className="font-inter font-medium"
                      style={{
                        padding: "10px 24px",
                        borderRadius: "12px",
                        fontSize: "13px",
                        letterSpacing: "0.05em",
                        background: "#C9A84C",
                        color: "rgba(0,0,0,0.88)",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                      }}
                    >
                      Book Now
                    </a>
                    <a
                      href={location.contactUrl}
                      className="font-inter font-medium"
                      style={{
                        padding: "10px 24px",
                        borderRadius: "12px",
                        fontSize: "13px",
                        letterSpacing: "0.05em",
                        border: "1px solid rgba(255,255,255,0.55)",
                        color: "rgba(255,255,255,0.9)",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                      }}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {locations.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={locations[index].name}
            style={{
              borderRadius: "999px",
              transition: "all 0.3s ease",
              background: index === active ? "#C9A84C" : "rgba(255,255,255,0.25)",
              width: index === active ? "20px" : "8px",
              height: "8px",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
