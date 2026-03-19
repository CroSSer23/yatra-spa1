"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { Location } from "@/data/locations";

interface HeroMobileProps {
  locations: Location[];
}

export default function HeroMobile({ locations }: HeroMobileProps) {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      setActive(Math.max(0, Math.min(locations.length - 1, index)));
    },
    [locations.length]
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => goTo(active + 1),
    onSwipedRight: () => goTo(active - 1),
    onSwiping: () => setDragging(true),
    onSwiped: () => setDragging(false),
    trackMouse: true,
    preventScrollOnSwipe: true,
    delta: 10,
  });

  return (
    <section className="flex md:hidden flex-col w-full min-h-screen bg-black select-none">
      {/* Carousel viewport */}
      <div
        {...handlers}
        className="relative w-full overflow-hidden flex-1"
        style={{ minHeight: "88vh" }}
      >
        {/* Sliding track */}
        <div
          className={`flex h-full ${dragging ? "" : "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"}`}
          style={{
            transform: `translateX(-${active * 100}%)`,
            width: `${locations.length * 100}%`,
            willChange: "transform",
          }}
        >
          {locations.map((location, index) => {
            const isActive = index === active;
            return (
              <div
                key={location.id}
                className="relative h-full flex-shrink-0"
                style={{ width: `${100 / locations.length}%` }}
              >
                {/* Spa image */}
                <Image
                  src={location.imageUrl}
                  alt={`${location.name} — YĀTRĀ SPA`}
                  fill
                  priority={index === 0}
                  className={`object-cover object-center transition-all duration-700 ${
                    isActive ? "scale-100 brightness-100" : "scale-105 brightness-75"
                  }`}
                  sizes="100vw"
                />

                {/* Bottom-heavy gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/75" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.3)_100%)]" />

                {/* Content — lower third */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 px-8 text-center">
                  {/* Brand name — two lines */}
                  <div className="flex flex-col items-center gap-1 mb-3">
                    <p className="font-cormorant text-white uppercase tracking-[0.3em] text-[42px] leading-none font-light">
                      YĀTRĀ
                    </p>
                    <p className="font-cormorant text-white uppercase tracking-[0.6em] text-[16px] leading-none font-light">
                      SPA
                    </p>
                  </div>

                  {/* Gold rule */}
                  <div className="w-8 h-px bg-[#C9A84C]/70 mb-4" />

                  {/* Location */}
                  <p className="font-inter text-white/70 font-light text-[11px] tracking-[0.28em] uppercase mb-7">
                    {location.name.toUpperCase()}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={location.bookUrl}
                      className="
                        px-7 py-2.5 rounded-xl text-[13px] font-medium font-inter
                        bg-[#C9A84C] text-black/90
                        hover:bg-[#debb63] active:bg-[#debb63]
                        hover:shadow-[0_0_24px_rgba(201,168,76,0.45)]
                        transition-all duration-300
                        whitespace-nowrap tracking-wide
                      "
                    >
                      Book Now
                    </a>
                    <a
                      href={location.contactUrl}
                      className="
                        px-7 py-2.5 rounded-xl text-[13px] font-medium font-inter
                        border border-white/60 text-white/90
                        hover:bg-white hover:text-black hover:border-white
                        active:bg-white active:text-black
                        transition-all duration-300
                        whitespace-nowrap tracking-wide
                      "
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
      <div className="flex items-center justify-center gap-2.5 py-5 bg-black">
        {locations.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`${locations[index].name}`}
            className={`rounded-full transition-all duration-400 ease-out ${
              index === active
                ? "bg-[#C9A84C] w-5 h-2"
                : "bg-white/25 w-2 h-2 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
