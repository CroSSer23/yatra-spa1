import { Location } from "@/data/locations";
import LocationCard from "./LocationCard";

interface HeroDesktopProps {
  locations: Location[];
}

export default function HeroDesktop({ locations }: HeroDesktopProps) {
  return (
    <section className="hidden md:flex w-full h-screen relative overflow-hidden">
      {/* Floating logo pill — absolute, overlaps all 3 panels */}
      <div className="logo-reveal absolute top-6 left-1/2 z-50">
        <div
          className="
            bg-white/92 backdrop-blur-sm
            border border-stone-200/80
            shadow-[0_4px_32px_rgba(0,0,0,0.12)]
            rounded-2xl
            px-7 py-4
            flex flex-col items-center
          "
        >
          <span className="font-cormorant text-stone-900 uppercase tracking-[0.35em] text-[18px] leading-none font-light">
            YĀTRĀ
          </span>
          <span className="font-cormorant text-stone-900 uppercase tracking-[0.6em] text-[10px] leading-none font-light mt-1">
            SPA
          </span>
        </div>
      </div>

      {/* Thin vertical dividers */}
      <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/8 z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white/8 z-10 pointer-events-none" />

      {/* Three panels */}
      {locations.map((location, index) => (
        <div key={location.id} className="panel-reveal flex-1 relative">
          <LocationCard location={location} priority={index === 0} />
        </div>
      ))}
    </section>
  );
}
