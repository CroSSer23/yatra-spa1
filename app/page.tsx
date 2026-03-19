export const dynamic = "force-dynamic";

import locations from "@/data/locations";
import HeroDesktop from "@/components/HeroDesktop";
import HeroMobile from "@/components/HeroMobile";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Sticky hero — About section slides over it */}
      <div className="sticky top-0 z-0">
        <HeroDesktop locations={locations} />
        <HeroMobile locations={locations} />
      </div>
      <AboutSection locations={locations} />
    </main>
  );
}
