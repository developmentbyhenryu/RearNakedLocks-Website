import Hero from "@/components/hero/Hero";
import StatsBar from "@/components/stats/StatsBar";
import WeeklyBets from "@/components/bets/WeeklyBets";
import FeaturedEvent from "@/components/events/FeaturedEvent";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Hero />

        <StatsBar />

        <WeeklyBets />

        <FeaturedEvent />
      </div>
    </main>
  );
}