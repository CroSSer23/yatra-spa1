"use client";

import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { Location } from "@/data/locations";

interface HeroMobileProps {
  locations: Location[];
}

export default function HeroMobile({ locations }: HeroMobileProps) {
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    setActive(Math.max(0, Math.min(locations.length - 1, index)));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goTo(active + 1),
    onSwipedRight: () => goTo(active - 1),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  return (
    <section className="flex md:hidden flex-col items-center w-full min-h-screen bg-black">
      {/* Carousel */}
      <div
        {...handlers}
        className="relative w-full overflow-hidden"
        style={{ height: "80vh" }}
      >
        {/* Track */}
        <div
          className="flex h-full transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${active * 100}%)`, width: `${locations.length * 100}%` }}
        >
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="relative h-full flex-shrink-0"
              style={{ width: `${100 / locations.length}%` }}
            >
              {/* Image */}
              <Image
                src={location.imageUrl}
                alt={`${location.name} spa`}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />

              {/* Bottom-heavy gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

              {/* Content — bottom quarter */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 text-center">
                <p className="font-cormorant text-white uppercase tracking-[0.25em] text-4xl font-semibold leading-tight">
                  YĀTRĀ SPA
                </p>
                <p className="font-inter text-white/80 font-light text-[12px] tracking-[0.25em] uppercase mt-2 mb-6">
                  {location.name}
                </p>

                <div className="flex gap-3">
                  <a
                    href={location.bookUrl}
                    className="
                      px-6 py-2 rounded-full text-sm font-medium font-inter
                      bg-[#C9A84C] text-black
                      hover:bg-[#e0bc5a] active:bg-[#e0bc5a] transition-colors duration-200
                      whitespace-nowrap
                    "
                  >
                    Book Now
                  </a>
                  <a
                    href={location.contactUrl}
                    className="
                      px-6 py-2 rounded-full text-sm font-medium font-inter
                      border border-white text-white
                      hover:bg-white hover:text-black active:bg-white active:text-black
                      transition-colors duration-200
                      whitespace-nowrap
                    "
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-3 py-6">
        {locations.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to ${locations[index].name}`}
            className={`rounded-full transition-all duration-300 ${
              index === active
                ? "bg-[#C9A84C] w-6 h-2.5"
                : "bg-white/30 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
