import { Location } from "@/data/locations";
import LocationCard from "./LocationCard";

interface HeroDesktopProps {
  locations: Location[];
}

export default function HeroDesktop({ locations }: HeroDesktopProps) {
  return (
    <section className="hidden md:flex w-full h-screen relative">
      {/* Floating logo pill — overlaps all 3 panels */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/95 border border-stone-200 shadow-lg rounded-full px-8 py-3">
          <span className="font-cormorant text-black uppercase tracking-[0.3em] text-xl font-semibold select-none">
            YĀTRĀ SPA
          </span>
        </div>
      </div>

      {/* Three panels */}
      {locations.map((location, index) => (
        <div key={location.id} className="flex-1 relative">
          <LocationCard location={location} priority={index === 0} />
        </div>
      ))}
    </section>
  );
}
