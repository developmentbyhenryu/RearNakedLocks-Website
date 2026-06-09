import Hero from "@/components/hero/Hero";
import StatsBar from "@/components/stats/StatsBar";
import WeeklyBets from "@/components/bets/WeeklyBets";
import FeaturedEvent from "@/components/events/FeaturedEvent";
import BreakdownVideo from "@/components/home/BreakdownVideo";
import Footer from "@/components/layout/Footer";
import RecentResults from "@/components/home/RecentResults";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <div className="rnl-container">
        <Hero />
        
        <StatsBar />

        <FeaturedEvent />

        <WeeklyBets />

        <RecentResults />

        <BreakdownVideo />

        <Footer />
      </div>
    </main>
  );
}