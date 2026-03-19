export const dynamic = "force-dynamic";

import locations from "@/data/locations";
import HeroDesktop from "@/components/HeroDesktop";
import HeroMobile from "@/components/HeroMobile";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroDesktop locations={locations} />
      <HeroMobile locations={locations} />
      <AboutSection locations={locations} />
    </main>
  );
}
