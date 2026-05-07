import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import WeeklyBets from "@/components/bets/WeeklyBets";
import TrackerStats from "@/components/tracker/TrackerStats";
import FeaturedEvent from "@/components/events/FeaturedEvent";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrackerStats />
      <WeeklyBets />
      <FeaturedEvent />
    </main>
  );
}