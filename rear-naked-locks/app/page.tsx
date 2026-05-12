import Hero from "@/components/hero/Hero";
import StatsBar from "@/components/stats/StatsBar";
import WeeklyBets from "@/components/bets/WeeklyBets";
import FeaturedEvent from "@/components/events/FeaturedEvent";
import BreakdownVideo from "@/components/home/BreakdownVideo";


export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <div className="rnl-container">
        <Hero />
        
        <StatsBar />

        <WeeklyBets />

        <FeaturedEvent />

        <BreakdownVideo />
      </div>
    </main>
  );
}