import locations from "@/data/locations";
import HeroDesktop from "@/components/HeroDesktop";
import HeroMobile from "@/components/HeroMobile";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroDesktop locations={locations} />
      <HeroMobile locations={locations} />
    </main>
  );
}
