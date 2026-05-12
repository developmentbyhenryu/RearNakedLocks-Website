"use client";

import Image from "next/image";
import Link from "next/link";

import { allActionHistory } from "@/data/allActionParlay";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

/* OVERALL RECORD */

const wins = allActionHistory.filter(
  (bet) => bet.parlayResult === "win"
).length;

const losses = allActionHistory.filter(
  (bet) => bet.parlayResult === "loss"
).length;

const totalUnits = allActionHistory.reduce(
  (acc, bet) => acc + bet.units,
  0
);

const roi = (
  (totalUnits / allActionHistory.length) *
  100
).toFixed(0);

/* AVG ODDS */

const averageOdds = Math.round(
  allActionHistory.reduce((acc, bet) => {
    return (
      acc +
      Number(
        bet.odds.replace("+", "").replace("-", "")
      )
    );
  }, 0) / allActionHistory.length
);

/* VIOLENCE ANALYTICS */

let totalLegs = 0;
let totalFinishes = 0;

const methodTracker = {
  knockout: 0,
  submission: 0,
  decision: 0,
};

let totalFinishRounds = 0;

allActionHistory.forEach((bet) => {
  bet.legs.forEach((leg) => {
    totalLegs += 1;

    methodTracker[
      leg.method as keyof typeof methodTracker
    ] += 1;

    if (leg.isFinish) {
      totalFinishes += 1;

      totalFinishRounds += leg.round;
    }
  });
});

/* FINISH RATE */

const finishRate = (
  (totalFinishes / totalLegs) *
  100
).toFixed(0);

/* AVG FINISH ROUND */

const averageFinishRound =
  totalFinishes > 0
    ? (
        totalFinishRounds /
        totalFinishes
      ).toFixed(1)
    : "0";

/* METHOD GRAPH */

const methodData = [
  {
    method: "KO",
    total: methodTracker.knockout,
  },

  {
    method: "SUB",
    total: methodTracker.submission,
  },

  {
    method: "DEC",
    total: methodTracker.decision,
  },
];

/* MOST VIOLENT FIGHTER */

const fighterTracker: Record<
  string,
  { finishes: number }
> = {};

allActionHistory.forEach((bet) => {
  bet.legs.forEach((leg) => {
    if (!fighterTracker[leg.fighter]) {
      fighterTracker[leg.fighter] = {
        finishes: 0,
      };
    }

    if (leg.isFinish) {
      fighterTracker[leg.fighter].finishes += 1;
    }
  });
});

const mostViolentFighter = Object.entries(
  fighterTracker
)
  .map(([fighter, stats]) => ({
    fighter,
    ...stats,
  }))
  .sort((a, b) => {
    return b.finishes - a.finishes;
  })[0];

/* RECENT EVENTS */

const recentEvents =
  allActionHistory.slice(0, 5);

export default function AllActionPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.22),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-red-500">
                Rear Naked Locks
              </p>

              <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl md:text-7xl">
                All Action
                <br />
                Parlay
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Violence only.
                No boring fights allowed.
              </p>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Record
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    {wins}-{losses}
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Finish Rate
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-red-400">
                    {finishRate}%
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Units
                  </p>

                  <h3
                    className={`mt-2 text-3xl font-black ${
                      totalUnits >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {totalUnits > 0 ? "+" : ""}
                    {totalUnits.toFixed(2)}
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Avg Odds
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    {averageOdds > 0 ? "+" : "-"}
                    {averageOdds}
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-3xl border border-red-500/20">
              <Image
                src="/bets/all-action.jpg"
                alt="All Action Parlay"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    
    {/* CURRENT PARLAY */}
<section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
  <div className="mb-10">
    <p className="text-xs uppercase tracking-[0.35em] text-red-500">
      UFC 328
    </p>

    <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
      Current All Action Parlay
    </h2>
  </div>

  <div className="grid gap-6 lg:grid-cols-2">
    {/* LEG 1 */}
    <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-[#0d1117]">
      <div className="relative h-[320px] overflow-hidden">
        <Image
          src="/fighters/ochoa.jpg"
          alt="Jose Ochoa"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">
            Violence Pick
          </p>

          <h3 className="mt-3 text-4xl font-black uppercase leading-none">
            Jose
            <br />
            Ochoa
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 p-6">
        <div>
          <p className="text-sm text-gray-400">
            Predicted Style
          </p>

          <p className="mt-1 text-xl font-black text-red-400">
            Pressure & Chaos
          </p>
        </div>

        <div className="rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm font-black uppercase tracking-wide text-white">
          Action Approved
        </div>
      </div>
    </div>

    {/* LEG 2 */}
    <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-[#0d1117]">
      <div className="relative h-[320px] overflow-hidden">
        <Image
          src="/fighters/brady.jpg"
          alt="Sean Brady"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">
            Violence Pick
          </p>

          <h3 className="mt-3 text-4xl font-black uppercase leading-none">
            Sean
            <br />
            Brady
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 p-6">
        <div>
          <p className="text-sm text-gray-400">
            Predicted Style
          </p>

          <p className="mt-1 text-xl font-black text-red-400">
            Relentless Pace
          </p>
        </div>

        <div className="rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm font-black uppercase tracking-wide text-white">
          Violence Certified
        </div>
      </div>
    </div>
  </div>

  {/* PARLAY SUMMARY */}
  <div className="mt-8 overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950/40 to-black">
    <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-red-400">
          Official All Action Ticket
        </p>

        <h3 className="mt-3 text-4xl font-black uppercase">
          Ochoa + Brady
        </h3>
      </div>

      <div className="flex items-center gap-6">
        <div>
          <p className="text-sm text-gray-400">
            Odds
          </p>

          <p className="text-3xl font-black text-green-400">
            +133
          </p>
        </div>

        <a
          href="#video-breakdown"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-red-600
            px-6
            py-4
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
      </div>
    </div>
  </div>
</section>

      {/* ANALYTICS */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Violence Analytics
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Fight Trends
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Most Violent Fighter
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase">
                {mostViolentFighter?.fighter}
              </h3>

              <p className="mt-2 text-red-400 font-black">
                {mostViolentFighter?.finishes} finishes
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Average Finish Round
              </p>

              <h3 className="mt-4 text-5xl font-black text-white">
                {averageFinishRound}
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Total Finishes
              </p>

              <h3 className="mt-4 text-5xl font-black text-red-400">
                {totalFinishes}
              </h3>
            </div>
          </div>

          {/* METHOD GRAPH */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
            <div className="border-b border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                Finish Types
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase text-white">
                Violence Distribution
              </h3>
            </div>

            <div className="h-[420px] w-full p-6">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <BarChart data={methodData}>
                  <XAxis
                    dataKey="method"
                    stroke="#9ca3af"
                    tick={{
                      fill: "#9ca3af",
                    }}
                  />

                  <YAxis
                    stroke="#9ca3af"
                    tick={{
                      fill: "#9ca3af",
                    }}
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor:
                        "#0d1117",
                      border:
                        "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "16px",
                      color: "white",
                    }}
                  />

                  <Bar
                    dataKey="total"
                    fill="#dc2626"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RECENT EVENTS */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
            <div className="border-b border-white/10 p-6">
              <h3 className="text-2xl font-black uppercase text-white">
                Recent Parlays
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="border-b border-white/10 bg-black/40">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Event
                    </th>

                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Odds
                    </th>

                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Result
                    </th>

                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Finishes
                    </th>

                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Units
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recentEvents.map((bet) => (
                    <tr
                      key={bet.event}
                      className="border-b border-white/5"
                    >
                      <td className="px-6 py-5 font-bold text-white">
                        {bet.event}
                      </td>

                      <td className="px-6 py-5 text-white">
                        {bet.odds}
                      </td>

                      <td
                        className={`px-6 py-5 font-black ${
                          bet.parlayResult ===
                          "win"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {bet.parlayResult.toUpperCase()}
                      </td>

                      <td className="px-6 py-5 text-white">
                        {
                          bet.legs.filter(
                            (leg) =>
                              leg.isFinish
                          ).length
                        }
                      </td>

                      <td
                        className={`px-6 py-5 font-black ${
                          bet.units >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {bet.units > 0 ? "+" : ""}
                        {bet.units}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* VIDEO */}
          <div id="video-breakdown" 
          className="mt-12 overflow-hidden rounded-3xl border border-red-500/20 bg-[#0d1117]">
            <div className="border-b border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                Official Breakdown
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase text-white">
                Watch The Breakdown
              </h3>
            </div>

            <div className="aspect-video w-full">
              <iframe
              
                className="h-full w-full"
                src="https://www.youtube.com/embed/5B3-wKlUCCk"
                title="Rear Naked Locks Breakdown"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
         {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">
            Join The Community
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
            More Violence.
            <br />
            More Profit.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Follow Rear Naked Locks for weekly betting cards,
            fight breakdowns, parlays, and pure MMA degeneracy.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full border border-white/10 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:border-red-500/40 hover:bg-white/5"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}