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
    <div className="relative w-full h-full group overflow-hidden">
      {/* Background image */}
      <Image
        src={location.imageUrl}
        alt={`${location.name} spa`}
        fill
        priority={priority}
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Dark overlay — darkens on hover */}
      <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/65" />

      {/* Content card */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 px-8 py-8 flex flex-col items-center gap-4 text-center max-w-xs w-full">
          <div>
            <p className="font-cormorant text-white uppercase tracking-[0.25em] text-[28px] leading-tight font-semibold">
              YĀTRĀ SPA
            </p>
            <p className="font-inter text-white/80 font-light text-[13px] tracking-[0.2em] uppercase mt-1">
              {location.name}
            </p>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href={location.bookUrl}
              className="
                px-6 py-2 rounded-full text-sm font-medium font-inter
                bg-[#C9A84C] text-black
                hover:bg-[#e0bc5a] transition-colors duration-200
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
                hover:bg-white hover:text-black transition-colors duration-200
                whitespace-nowrap
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
