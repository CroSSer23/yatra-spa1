import locations from "@/data/locations";
import HeroDesktop from "@/components/HeroDesktop";
import HeroMobile from "@/components/HeroMobile";
import AboutSection from "@/components/AboutSection";
import MobileHeader from "@/components/MobileHeader";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Fixed mobile logo — always visible, scroll-aware background */}
      <MobileHeader />
      {/* Sticky hero — About section slides over it */}
      <div className="sticky top-0 z-0">
        <HeroDesktop locations={locations} />
        <HeroMobile locations={locations} />
      </div>
      <AboutSection locations={locations} />
    </main>
  );
}
