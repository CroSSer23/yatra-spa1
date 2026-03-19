import Image from "next/image";
import { Location } from "@/data/locations";

interface LocationCardProps {
  location: Location;
  priority?: boolean;
}

export default function LocationCard({
  location,
  priority = false,
}: LocationCardProps) {
  return (
    <div className="relative w-full h-full group overflow-hidden cursor-pointer">
      {/* Background image with slow Ken Burns on hover */}
      <Image
        src={location.imageUrl}
        alt={`${location.name} — YĀTRĀ SPA`}
        fill
        priority={priority}
        className="object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-black/50 transition-colors duration-700 group-hover:bg-black/62" />

      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.4)_100%)]" />

      {/* Content card — frosted glass */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div
          className="
            relative
            bg-black/35 backdrop-blur-xl
            border border-white/10
            rounded-2xl
            px-8 py-8
            flex flex-col items-center gap-6
            text-center
            w-full max-w-[280px]
            transition-all duration-500
            group-hover:bg-black/45 group-hover:border-white/15
            group-hover:shadow-[0_8px_48px_rgba(0,0,0,0.5)]
          "
        >
          {/* Logo text — two lines */}
          <div className="flex flex-col items-center gap-0.5">
            <p className="font-cormorant text-white uppercase tracking-[0.3em] text-[26px] leading-none font-light">
              YĀTRĀ
            </p>
            <p className="font-cormorant text-white uppercase tracking-[0.55em] text-[13px] leading-none font-light">
              SPA
            </p>
          </div>

          {/* Thin gold rule */}
          <div className="w-10 h-px bg-[#C9A84C]/60" />

          {/* Location */}
          <p className="font-inter text-white/75 font-light text-[12px] tracking-[0.22em] uppercase -mt-2">
            {location.name}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href={location.bookUrl}
              className="
                px-5 py-2 rounded-xl text-[13px] font-medium font-inter
                bg-[#C9A84C] text-black/90
                hover:bg-[#debb63] hover:shadow-[0_0_24px_rgba(201,168,76,0.4)]
                transition-all duration-300
                whitespace-nowrap tracking-wide
              "
            >
              Book Now
            </a>
            <a
              href={location.contactUrl}
              className="
                px-5 py-2 rounded-xl text-[13px] font-medium font-inter
                border border-white/50 text-white/90
                hover:bg-white hover:text-black hover:border-white
                transition-all duration-300
                whitespace-nowrap tracking-wide
              "
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
