"use client";
import Image from "next/image";
import Link from "next/link";

import { getBarkAlley } from "@/lib/picks";
import BreakdownVideo from "@/components/home/BreakdownVideo";
import { barkAlleyHistory } from "@/data/barkAlley";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";


/* OVERALL STATS */

const wins = barkAlleyHistory.filter(
  (pick) => pick.result === "win"
).length;

const losses = barkAlleyHistory.filter(
  (pick) => pick.result === "loss"
).length;

const totalUnits = barkAlleyHistory.reduce(
  (acc, pick) => acc + pick.units,
  0
);

const roi = (
  (totalUnits / barkAlleyHistory.length) *
  100
).toFixed(0);

/* AVERAGE ODDS */

const averageOdds = Math.round(
  barkAlleyHistory.reduce((acc, pick) => {
    return (
      acc +
      Number(
        pick.odds.replace("+", "")
      )
    );
  }, 0) / barkAlleyHistory.length
);

/* RECENT PICKS */

const recentPicks =
  barkAlleyHistory.slice(0, 5);

/* HIGHEST CASHING DOG */

const highestCashDog = [...barkAlleyHistory]
  .filter((pick) => pick.result === "win")
  .sort((a, b) => {
    return (
      Number(
        b.odds.replace("+", "")
      ) -
      Number(
        a.odds.replace("+", "")
      )
    );
  })[0];

/* METHOD ANALYTICS */

const winMethods = {
  knockout: 0,
  submission: 0,
  decision: 0,
};

const lossMethods = {
  knockout: 0,
  submission: 0,
  decision: 0,
};

barkAlleyHistory.forEach((pick) => {
  if (
    pick.result === "win" &&
    pick.methodOfVictory
  ) {
    winMethods[
      pick.methodOfVictory as keyof typeof winMethods
    ] += 1;
  }

  if (
    pick.result === "loss" &&
    pick.methodOfLoss
  ) {
    lossMethods[
      pick.methodOfLoss as keyof typeof lossMethods
    ] += 1;
  }
});

const methodData = [
  {
    method: "KO",
    wins: winMethods.knockout,
    losses: lossMethods.knockout,
  },

  {
    method: "SUB",
    wins: winMethods.submission,
    losses: lossMethods.submission,
  },

  {
    method: "DEC",
    wins: winMethods.decision,
    losses: lossMethods.decision,
  },
];
/* WEIGHT CLASS TRACKER */

const weightClassTracker: Record<
  string,
  {
    wins: number;
    losses: number;
  }
> = {};

barkAlleyHistory.forEach((pick) => {
  const division = pick.weightClass;

  if (!weightClassTracker[division]) {
    weightClassTracker[division] = {
      wins: 0,
      losses: 0,
    };
  }

  if (pick.result === "win") {
    weightClassTracker[division].wins += 1;
  } else {
    weightClassTracker[division].losses += 1;
  }
});

const bestWeightClass = Object.entries(
  weightClassTracker
)
  .map(([division, stats]) => ({
    division,
    ...stats,
  }))
  .sort((a, b) => {
    const aRate =
      a.wins / (a.wins + a.losses);

    const bRate =
      b.wins / (b.wins + b.losses);

    return bRate - aRate;
  })[0];

const currentBark = getBarkAlley();

export default function BarkAlleyPage() {
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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-red-500">
                Rear Naked Locks
              </p>

              <h1 className="mt-5 text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl md:text-7xl">
                Bark Alley
                <br />
                Bangers
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Calculated underdogs.
                Market disrespect.
                Maximum value.
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
                    ROI
                  </p>

                  <h3
                    className={`mt-2 text-3xl font-black ${
                      Number(roi) >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {Number(roi) > 0 ? "+" : ""}
                    {roi}%
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Avg Odds
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    +{averageOdds}
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-3xl border border-red-500/20">
              <Image
                src="/bets/bark-alley.jpeg"
                alt="Bark Alley Bangers"
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

      {/* CURRENT PICK */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-[#0d1117]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[400px]">
              <Image
                src="/bets/bark-alley.jpeg"
                alt="Current Pick"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                Current Bark Alley Pick
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none">
                {currentBark?.fighter}
              </h2>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm font-black uppercase tracking-wide text-white">
                  {currentBark?.odds}
                </div>

                {/* <div className="rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm font-black uppercase tracking-wide text-white">
                  Lightweight
                </div> */}
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
      </section>

      {/* ANALYTICS */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Betting Analytics
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Bark Alley Trends
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Highest Cash Dog
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase">
                {highestCashDog?.fighter}
              </h3>

              <p className="mt-2 text-green-400 font-black">
                {highestCashDog?.odds}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                KO Wins
              </p>

              <h3 className="mt-4 text-5xl font-black text-white">
                {winMethods.knockout}
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Decision Losses
              </p>

              <h3 className="mt-4 text-5xl font-black text-white">
                {lossMethods.decision}
              </h3>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Best Division
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase">
                {bestWeightClass?.division}
              </h3>

              <p className="mt-2 text-green-400 font-black">
                {bestWeightClass?.wins}-
                {bestWeightClass?.losses}
              </p>
            </div>
          </div>
        

        {/* METHOD GRAPH */}
<div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
  <div className="border-b border-white/10 p-6">
    <p className="text-xs uppercase tracking-[0.35em] text-red-500">
      Fight Trends
    </p>

    <h3 className="mt-3 text-3xl font-black uppercase text-white">
      Method Performance
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
            backgroundColor: "#0d1117",
            border:
              "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            color: "white",
          }}
        />

        <Bar
          dataKey="wins"
          fill="#22c55e"
          radius={[6, 6, 0, 0]}
        />

        <Bar
          dataKey="losses"
          fill="#dc2626"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>
        
          {/* RECENT PICKS */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
            <div className="border-b border-white/10 p-6">
              <h3 className="text-2xl font-black uppercase text-white">
                Recent Picks
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="border-b border-white/10 bg-black/40">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Fighter
                    </th>

                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Odds
                    </th>

                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Result
                    </th>

                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Method
                    </th>

                    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                      Units
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recentPicks.map((pick) => (
                    <tr
                      key={pick.event}
                      className="border-b border-white/5"
                    >
                      <td className="px-6 py-5 font-bold text-white">
                        {pick.fighter}
                      </td>

                      <td className="px-6 py-5 text-white">
                        {pick.odds}
                      </td>

                      <td
                        className={`px-6 py-5 font-black ${
                          pick.result === "win"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {pick.result.toUpperCase()}
                      </td>

                      <td className="px-6 py-5 text-white">
                        {pick.result === "win"
                          ? pick.methodOfVictory
                          : pick.methodOfLoss}
                      </td>

                      <td
                        className={`px-6 py-5 font-black ${
                          pick.units >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {pick.units > 0 ? "+" : ""}
                        {pick.units}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* VIDEO BREAKDOWN */}
<BreakdownVideo />
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