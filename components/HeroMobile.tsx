"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { Location } from "@/data/locations";

interface HeroMobileProps {
  locations: Location[];
}

const CARD_W = 72;
const STEP = 54;
const CARD_H = "76vh";

function getTransform(offset: number) {
  const tx = `calc(-50% + ${offset * STEP}vw)`;
  const scale = offset === 0 ? 1 : 0.82;
  return `translateX(${tx}) scale(${scale})`;
}

export default function HeroMobile({ locations }: HeroMobileProps) {
  const [active, setActive] = useState(1);
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
    delta: 12,
  });

  return (
    <section
      className="flex md:hidden flex-col w-full select-none relative"
      style={{ minHeight: "100svh", justifyContent: "center", paddingTop: "24px", paddingBottom: "16px", overflow: "hidden" }}
    >
      {/* Blurred background — active card image */}
      {locations.map((location, index) => (
        <div
          key={location.id}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            transition: "opacity 0.7s ease",
            opacity: index === active ? 1 : 0,
          }}
        >
          <Image
            src={location.imageUrl}
            alt=""
            fill
            priority={index === 1}
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden
          />
          {/* Dark + blur overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              background: "rgba(0,0,0,0.55)",
            }}
          />
        </div>
      ))}

      {/* White logo at top */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Image
          src="https://images.giftpro.co.uk/original/750x200/76c02d79-54e2-4e2a-a61c-9ae2b4ff49ae.png"
          alt="YĀTRĀ SPA"
          width={160}
          height={42}
          priority
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Carousel */}
      <div
        {...handlers}
        style={{ position: "relative", zIndex: 10, width: "100%", height: CARD_H, overflow: "hidden" }}
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
                position: "absolute",
                top: 0,
                left: "50%",
                width: `${CARD_W}vw`,
                height: CARD_H,
                borderRadius: "24px",
                overflow: "hidden",
                cursor: isCenter ? "default" : "pointer",
                zIndex: isCenter ? 10 : 5,
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "auto" : "none",
                transition: isDragging
                  ? "none"
                  : "transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease, filter 0.4s ease",
                transform: getTransform(offset),
                filter: isCenter ? "brightness(1)" : "brightness(0.5)",
                willChange: "transform",
              }}
            >
              <Image
                src={location.imageUrl}
                alt={`${location.name} — YĀTRĀ SPA`}
                fill
                priority={index === 1}
                className="object-cover object-center"
                sizes="72vw"
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.82) 100%)",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingBottom: "36px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textAlign: "center",
                }}
              >
                <p
                  className="font-cormorant text-white uppercase font-light"
                  style={{ fontSize: "36px", letterSpacing: "0.25em", lineHeight: 1 }}
                >
                  YĀTRĀ
                </p>
                <p
                  className="font-cormorant text-white uppercase font-light"
                  style={{ fontSize: "12px", letterSpacing: "0.55em", lineHeight: 1, marginTop: "4px" }}
                >
                  SPA
                </p>

                <div style={{ width: "26px", height: "1px", background: "rgba(201,168,76,0.75)", margin: "12px 0" }} />

                <p
                  className="font-inter text-white/65 font-light uppercase"
                  style={{ fontSize: "10px", letterSpacing: "0.25em", marginBottom: "22px" }}
                >
                  {location.name}
                </p>

                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href={location.bookUrl}
                    className="font-inter font-medium"
                    style={{
                      padding: "9px 20px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      letterSpacing: "0.04em",
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
                      padding: "9px 20px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      letterSpacing: "0.04em",
                      border: "1px solid rgba(255,255,255,0.5)",
                      color: "rgba(255,255,255,0.88)",
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

      {/* Dot indicators */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {locations.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={locations[index].name}
            style={{
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              background: index === active ? "#C9A84C" : "rgba(255,255,255,0.3)",
              width: index === active ? "22px" : "8px",
              height: "8px",
            }}
          />
        ))}
      </div>
    </section>
  );
}
