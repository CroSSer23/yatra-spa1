import { Location } from "@/data/locations";
import LocationCard from "./LocationCard";

interface HeroDesktopProps {
  locations: Location[];
}

export default function HeroDesktop({ locations }: HeroDesktopProps) {
  return (
    <section className="hidden md:flex w-full h-screen relative overflow-hidden">
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
