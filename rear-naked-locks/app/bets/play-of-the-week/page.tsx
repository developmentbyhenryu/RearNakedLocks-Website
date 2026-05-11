import Image from "next/image";
import Link from "next/link";

import { playOfTheWeekHistory } from "@/data/playOfTheWeek";

/* CHANNEL RECORD */

const wins = playOfTheWeekHistory.filter(
  (pick) => pick.parlayResult === "win"
).length;

const losses = playOfTheWeekHistory.filter(
  (pick) => pick.parlayResult === "loss"
).length;

const totalUnits = playOfTheWeekHistory.reduce(
  (acc, pick) => acc + pick.units,
  0
);

const accuracy = (
  (wins / playOfTheWeekHistory.length) *
  100
).toFixed(0);

const totalRisked = playOfTheWeekHistory.length;

const roi = (
  (totalUnits / totalRisked) *
  100
).toFixed(0);

/* HENRY TRACKER */

const henryTracker: Record<
  string,
  { wins: number; losses: number }
> = {};

playOfTheWeekHistory.forEach((pick) => {
  const fighter = pick.henryPick;

  if (!henryTracker[fighter]) {
    henryTracker[fighter] = {
      wins: 0,
      losses: 0,
    };
  }

  if (pick.henryResult === "win") {
    henryTracker[fighter].wins += 1;
  } else {
    henryTracker[fighter].losses += 1;
  }
});

const henryFighters = Object.entries(
  henryTracker
).map(([fighter, record]) => ({
  fighter,
  ...record,
}));

/* CHATO TRACKER */

const chatoTracker: Record<
  string,
  { wins: number; losses: number }
> = {};

playOfTheWeekHistory.forEach((pick) => {
  const fighter = pick.chatoPick;

  if (!chatoTracker[fighter]) {
    chatoTracker[fighter] = {
      wins: 0,
      losses: 0,
    };
  }

  if (pick.chatoResult === "win") {
    chatoTracker[fighter].wins += 1;
  } else {
    chatoTracker[fighter].losses += 1;
  }
});

const chatoFighters = Object.entries(
  chatoTracker
).map(([fighter, record]) => ({
  fighter,
  ...record,
}));

/* CONSENSUS TRACKER */ 
const consensusTracker: Record< 
string, 
{ wins: number; losses: number } 
> = {}; 
playOfTheWeekHistory.forEach((pick) => { 
    if (!pick.consensusPick) return;

    const fighter = pick.consensusPick; 
    
    if (!consensusTracker[fighter]) { 
        consensusTracker[fighter] = { 
            wins: 0, 
            losses: 0,
         }; 
        } 
        if (pick.consensusResult === "win") { 
            consensusTracker[fighter].wins += 1;
         } else { 
            consensusTracker[fighter].losses += 1;
         }
         }); 
         
         const consensusFighters = Object.entries( 
            consensusTracker 
        ).map(([fighter, record]) => ({ 
            fighter,
             ...record,
             }));

/* BEST & WORST PERFORMERS */

const bestHenryFighters = [...henryFighters]
  .filter((fighter) => fighter.wins > fighter.losses)
  .sort((a, b) => {
    const aRate =
      a.wins / (a.wins + a.losses);

    const bRate =
      b.wins / (b.wins + b.losses);

    return bRate - aRate;
  })
  .slice(0, 5);

const worstHenryFighters = [...henryFighters]
  .filter((fighter) => fighter.losses > fighter.wins)
  .sort((a, b) => {
    const aRate =
      a.wins / (a.wins + a.losses);

    const bRate =
      b.wins / (b.wins + b.losses);

    return aRate - bRate;
  })
  .slice(0, 5);

const bestChatoFighters = [...chatoFighters]
  .filter((fighter) => fighter.wins > fighter.losses)
  .sort((a, b) => {
    const aRate =
      a.wins / (a.wins + a.losses);

    const bRate =
      b.wins / (b.wins + b.losses);

    return bRate - aRate;
  })
  .slice(0, 5);

const worstChatoFighters = [...chatoFighters]
  .filter((fighter) => fighter.losses > fighter.wins)
  .sort((a, b) => {
    const aRate =
      a.wins / (a.wins + a.losses);

    const bRate =
      b.wins / (b.wins + b.losses);

    return aRate - bRate;
  })
  .slice(0, 5);

const bestConsensusFighters = [...consensusFighters]
  .filter((fighter) => fighter.wins > fighter.losses)
  .sort((a, b) => {
    const aRate =
      a.wins / (a.wins + a.losses);

    const bRate =
      b.wins / (b.wins + b.losses);

    return bRate - aRate;
  })
  .slice(0, 5);

const worstConsensusFighters = [...consensusFighters]
  .filter((fighter) => fighter.losses > fighter.wins)
  .sort((a, b) => {
    const aRate =
      a.wins / (a.wins + a.losses);

    const bRate =
      b.wins / (b.wins + b.losses);

    return aRate - bRate;
  })
  .slice(0, 5);


/* RECENT PICKS */

const recentPicks =
  playOfTheWeekHistory.slice(0, 5);

export default function PlayOfTheWeekPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* TOP NAV */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 md:px-10">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-black
              uppercase
              tracking-wide
              text-gray-300
              transition-all
              duration-300
              hover:text-red-500
            "
          >
            ← Back Home
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-red-500">
              Weekly Main Event Parlay
            </p>

            <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl md:text-7xl">
              Play Of
              <br />
              The Week
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Henry and Chato each select one fighter every week.
              Together the picks become the official Rear Naked Locks
              Play of the Week parlay.
            </p>

            {/* MOBILE QUICK ACCESS */}
<div className="mt-10 space-y-6 lg:hidden">
  {/* CURRENT PLAY */}
  <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-[#0d1117]">
    <div className="relative h-[220px]">
      <Image
        src="/bets/play-of-week.jpg"
        alt="Play Of The Week"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </div>

    <div className="p-6">
      <p className="text-xs uppercase tracking-[0.35em] text-red-500">
        Current Official Parlay
      </p>

      <h2 className="mt-3 text-3xl font-black uppercase">
        UFC 328
      </h2>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-red-400">
            Henry's Pick
          </p>

          <h3 className="mt-2 text-2xl font-black uppercase">
            Grant Dawson
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-red-400">
            Chato's Pick
          </p>

          <h3 className="mt-2 text-2xl font-black uppercase">
            Jared Gordon
          </h3>
        </div>
      </div>

      <a
        href="#video-breakdown"
        className="
          mt-6
          inline-flex
          w-full
          items-center
          justify-center
          rounded-full
          bg-red-600
          px-5
          py-4
          text-sm
          font-black
          uppercase
          tracking-wide
          text-white
        "
      >
        Watch Breakdown
      </a>
    </div>
  </div>
</div>
          </div>

          {/* HEAD TO HEAD */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* HENRY */}
            <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-[#0d1117]">
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src="/team/henry.jpg"
                  alt="Henry"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                    Rear Naked Locks
                  </p>

                  <h2 className="mt-3 text-5xl font-black uppercase leading-none">
                    Henry
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-white/10">
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Correct Picks
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    {henryFighters.reduce(
                      (acc, fighter) => acc + fighter.wins,
                      0
                    )}
                  </h3>
                </div>

                <div className="border-l border-r border-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Wrong Picks
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    {henryFighters.reduce(
                      (acc, fighter) => acc + fighter.losses,
                      0
                    )}
                  </h3>
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Accuracy
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-green-400">
                    {(
                      (henryFighters.reduce(
                        (acc, fighter) => acc + fighter.wins,
                        0
                      ) /
                        playOfTheWeekHistory.length) *
                      100
                    ).toFixed(0)}
                    %
                  </h3>
                </div>
              </div>
            </div>

            {/* CHATO */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src="/team/chato.jpg"
                  alt="Chato"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                    Rear Naked Locks
                  </p>

                  <h2 className="mt-3 text-5xl font-black uppercase leading-none">
                    Chato
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-white/10">
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Correct Picks
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    {chatoFighters.reduce(
                      (acc, fighter) => acc + fighter.wins,
                      0
                    )}
                  </h3>
                </div>

                <div className="border-l border-r border-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Wrong Picks
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    {chatoFighters.reduce(
                      (acc, fighter) => acc + fighter.losses,
                      0
                    )}
                  </h3>
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Accuracy
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-green-400">
                    {(
                      (chatoFighters.reduce(
                        (acc, fighter) => acc + fighter.wins,
                        0
                      ) /
                        playOfTheWeekHistory.length) *
                      100
                    ).toFixed(0)}
                    %
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* CURRENT PLAY OF THE WEEK */}
<section className="hidden lg:block mx-auto max-w-7xl px-6 pb-16 md:px-10">
  <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-[#0d1117]">
    <div className="grid lg:grid-cols-2">
      {/* LEFT IMAGE */}
      <div className="relative min-h-[420px]">
        <Image
          src="/bets/play-of-week.jpg"
          alt="Play Of The Week"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col justify-center p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-red-500">
          Current Official Parlay
        </p>

        <h2 className="mt-4 text-4xl font-black uppercase leading-none md:text-6xl">
          UFC 328
        </h2>

        <div className="mt-8 space-y-6">
          {/* HENRY PICK */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-red-400">
              Henry's Pick
            </p>

            <h3 className="mt-2 text-3xl font-black uppercase">
              Grant Dawson
            </h3>
          </div>

          {/* CHATO PICK */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-red-400">
              Chato's Pick
            </p>

            <h3 className="mt-2 text-3xl font-black uppercase">
              Jared Gordon
            </h3>
          </div>

          {/* CONSENSUS
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-400">
              Consensus Pick
            </p>

            <h3 className="mt-2 text-3xl font-black uppercase">
              Michael Chiesa
            </h3>
          </div> */}
        </div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
  href="#video-breakdown"
  className="
    rounded-full
    bg-red-600
    px-6
    py-3
    text-sm
    font-black
    uppercase
    tracking-wide
    text-white
    transition-all
    duration-300
    hover:bg-red-500
  "
>
  Watch Breakdown
</a>

          <button
            className="
              rounded-full
              border
              border-white/10
              bg-black/40
              px-6
              py-3
              text-sm
              font-black
              uppercase
              tracking-wide
              text-white
              transition-all
              duration-300
              hover:border-red-500/40
            "
          >
            View Full Card
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* VIDEO BREAKDOWN */}
<section
  id="video-breakdown"
  className="mx-auto max-w-7xl px-6 pb-16 md:px-10"
>
  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
    <div className="border-b border-white/10 p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-red-500">
        Official Breakdown
      </p>

      <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
        Watch The Breakdown
      </h2>

      <p className="mt-4 max-w-2xl text-gray-300">
        Full betting breakdown for this week’s Play of the Week
        parlay including matchup analysis, betting logic,
        confidence level, and final prediction.
      </p>
    </div>

    {/* VIDEO */}
    <div className="aspect-video w-full">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/5B3-wKlUCCk?si=hdkedqFSeEkW3R6M"
        title="Rear Naked Locks Breakdown"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</section>

      {/* CHANNEL RECORD */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div
            className={`rounded-3xl p-8 text-center border ${
                totalUnits >= 0
                    ? "border-green-500/20 bg-green-500/10"
                    : "border-red-500/20 bg-red-500/10"
            }`}
        >
        <p
            className={`text-xs uppercase tracking-[0.35em] ${
                totalUnits >= 0
                    ? "text-green-400"
                    : "text-red-400"
            }`}
        >
            Current Channel Record
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase">
            {wins}-{losses}
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <div>
              <p
  className={`text-sm ${
    totalUnits >= 0
      ? "text-green-300"
      : "text-red-300"
  }`}
>
                Units Won
              </p>

              <p className="text-2xl font-black text-white">
                {totalUnits.toFixed(1)}
              </p>
            </div>

            <div>
              <p
  className={`text-sm ${
    totalUnits >= 0
      ? "text-green-300"
      : "text-red-300"
  }`}
>
                ROI
              </p>

              <p className="text-2xl font-black text-white">
                {roi}%
              </p>
            </div>

            <div>
              <p
  className={`text-sm ${
    totalUnits >= 0
      ? "text-green-300"
      : "text-red-300"
  }`}
>
                Hit Rate
              </p>

              <p className="text-2xl font-black text-white">
                {accuracy}%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED ANALYTICS */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Advanced Analytics
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Fighter Trends
            </h2>
          </div>

          <div className="hidden gap-8 lg:grid lg:grid-cols-2">
            {/* BEST HENRY */}
            <div className="rounded-3xl border border-green-500/20 bg-[#0d1117] p-6">
              <h3 className="text-2xl font-black uppercase text-green-400">
                Henry's Best Fighters
              </h3>

              <div className="mt-6 space-y-4">
                {bestHenryFighters.map((fighter) => (
                  <div
                    key={fighter.fighter}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-4"
                  >
                    <span className="font-bold text-white">
                      {fighter.fighter}
                    </span>

                    <span className="font-black text-green-400">
                      {fighter.wins}-{fighter.losses}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* WORST HENRY */}
            <div className="rounded-3xl border border-red-500/20 bg-[#0d1117] p-6">
              <h3 className="text-2xl font-black uppercase text-red-400">
                Henry's Weakest Fighters
              </h3>

              <div className="mt-6 space-y-4">
                {worstHenryFighters.map((fighter) => (
                  <div
                    key={fighter.fighter}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-4"
                  >
                    <span className="font-bold text-white">
                      {fighter.fighter}
                    </span>

                    <span className="font-black text-red-400">
                      {fighter.wins}-{fighter.losses}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BEST CHATO */}
            <div className="rounded-3xl border border-green-500/20 bg-[#0d1117] p-6">
              <h3 className="text-2xl font-black uppercase text-green-400">
                Chato's Best Fighters
              </h3>

              <div className="mt-6 space-y-4">
                {bestChatoFighters.map((fighter) => (
                  <div
                    key={fighter.fighter}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-4"
                  >
                    <span className="font-bold text-white">
                      {fighter.fighter}
                    </span>

                    <span className="font-black text-green-400">
                      {fighter.wins}-{fighter.losses}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* WORST CHATO */}
            <div className="rounded-3xl border border-red-500/20 bg-[#0d1117] p-6">
              <h3 className="text-2xl font-black uppercase text-red-400">
                Chato's Weakest Fighters
              </h3>

              <div className="mt-6 space-y-4">
                {worstChatoFighters.map((fighter) => (
                  <div
                    key={fighter.fighter}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-4"
                  >
                    <span className="font-bold text-white">
                      {fighter.fighter}
                    </span>

                    <span className="font-black text-red-400">
                      {fighter.wins}-{fighter.losses}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>


{/* CONSENSUS */}
{consensusFighters.length > 0 && (
  <div className="mt-12 grid gap-8 lg:grid-cols-2">
    {/* BEST CONSENSUS */}
    <div className="rounded-3xl border border-yellow-500/20 bg-[#0d1117] p-6">
      <h3 className="text-2xl font-black uppercase text-yellow-400">
        Consensus Winners
      </h3>

      <div className="mt-6 space-y-4">
        {bestConsensusFighters.map((fighter) => (
          <div
            key={fighter.fighter}
            className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-4"
          >
            <span className="font-bold text-white">
              {fighter.fighter}
            </span>

            <span className="font-black text-yellow-400">
              {fighter.wins}-{fighter.losses}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* WORST CONSENSUS */}
    <div className="rounded-3xl border border-yellow-500/20 bg-[#0d1117] p-6">
      <h3 className="text-2xl font-black uppercase text-yellow-400">
        Consensus Misses
      </h3>

      <div className="mt-6 space-y-4">
        {worstConsensusFighters.map((fighter) => (
          <div
            key={fighter.fighter}
            className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-4"
          >
            <span className="font-bold text-white">
              {fighter.fighter}
            </span>

            <span className="font-black text-yellow-400">
              {fighter.wins}-{fighter.losses}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

          {/* RECENT PICKS */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-[#0d1117] p-6">
            <h3 className="text-2xl font-black uppercase text-white">
              Most Recent Picks
            </h3>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Event
                    </th>

                    <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Henry
                    </th>

                    <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Chato
                    </th>

                    <th className="px-4 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Result
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recentPicks.map((pick) => (
                    <tr
                      key={pick.event}
                      className="border-b border-white/5"
                    >
                      <td className="px-4 py-5 font-bold text-white">
                        {pick.event}
                      </td>

                      <td className="px-4 py-5 text-white">
                        {pick.henryPick}
                      </td>

                      <td className="px-4 py-5 text-white">
                        {pick.chatoPick}
                      </td>

                      <td
                        className={`px-4 py-5 font-black ${
                          pick.parlayResult === "win"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {pick.parlayResult.toUpperCase()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}