"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

import { playOfTheWeekHistory } from "@/data/playOfTheWeek";
import { aroundTheWorldHistory } from "@/data/aroundTheWorld";
import { barkAlleyHistory } from "@/data/barkAlley";
import { allActionHistory } from "@/data/allActionParlay";

/* =========================
   COMBINED TRACKER DATA
========================= */

const allTrackedBets = [
  ...playOfTheWeekHistory.map((bet) => ({
    segment: "Play Of The Week",
    result: bet.parlayResult,
    units: bet.units,
  })),

  ...aroundTheWorldHistory.map((bet) => ({
    segment: "Around The World",
    result: bet.parlayResult,
    units: bet.units,
  })),

  ...barkAlleyHistory.map((bet) => ({
    segment: "Bark Alley",
    result: bet.result,
    units: bet.units,
  })),

  ...allActionHistory.map((bet) => ({
    segment: "All Action",
    result: bet.parlayResult,
    units: bet.units,
  })),
];

/* =========================
   OVERALL STATS
========================= */

const totalWins = allTrackedBets.filter(
  (bet) => bet.result === "win"
).length;

const totalLosses = allTrackedBets.filter(
  (bet) => bet.result === "loss"
).length;

const totalUnits = allTrackedBets.reduce(
  (acc, bet) => acc + bet.units,
  0
);

const totalROI = (
  (totalUnits / allTrackedBets.length) *
  100
).toFixed(0);

/* =========================
   STRAIGHT BET RECORD
========================= */

const straightWins =
  barkAlleyHistory.filter(
    (bet) => bet.result === "win"
  ).length;

const straightLosses =
  barkAlleyHistory.filter(
    (bet) => bet.result === "loss"
  ).length;

/* =========================
   SEGMENT STATS
========================= */

function calculateSegmentStats(
  data: any[],
  resultKey: string
) {
  const wins = data.filter(
    (bet) => bet[resultKey] === "win"
  ).length;

  const losses = data.filter(
    (bet) => bet[resultKey] === "loss"
  ).length;

  const units = data.reduce(
    (acc, bet) => acc + bet.units,
    0
  );

  const roi = (
    (units / data.length) *
    100
  ).toFixed(0);

  return {
    wins,
    losses,
    units,
    roi,
  };
}

const potwStats = calculateSegmentStats(
  playOfTheWeekHistory,
  "parlayResult"
);

const barkStats = calculateSegmentStats(
  barkAlleyHistory,
  "result"
);

const atwStats = calculateSegmentStats(
  aroundTheWorldHistory,
  "parlayResult"
);

const actionStats = calculateSegmentStats(
  allActionHistory,
  "parlayResult"
);

/* =========================
   UNIFIED RESULTS
========================= */

const unifiedResults = [
  ...playOfTheWeekHistory.map((bet) => ({
    event: bet.event,
    segment: "Play Of The Week",
    bet:
      `${bet.henryPick} + ${bet.chatoPick}`,
    result: bet.parlayResult,
    units: bet.units,
  })),

  ...aroundTheWorldHistory.map((bet) => ({
    event: bet.event,
    segment: "Around The World",
    bet: bet.legs
  .map((leg) => leg.fighter)
  .join(", "),
    odds: "-",
    result: bet.parlayResult,
    units: bet.units,
  })),

  ...barkAlleyHistory.map((bet) => ({
    event: bet.event,
    segment: "Bark Alley",
    bet: bet.fighter,
    result: bet.result,
    units: bet.units,
  })),

  ...allActionHistory.map((bet) => ({
    event: bet.event,
    segment: "All Action",
    bet: bet.legs
      .map((leg) => leg.fighter)
      .join(" + "),
    result: bet.parlayResult,
    units: bet.units,
  })),
].reverse();

/* =========================
   EVENT RESULTS TABLE
========================= */

const groupedEventResults = unifiedResults.reduce(
  (
    acc: Record<
      string,
      {
        bets: string[];
        units: number;
        wins: number;
        losses: number;
      }
    >,
    bet
  ) => {
    if (!acc[bet.event]) {
      acc[bet.event] = {
        bets: [],
        units: 0,
        wins: 0,
        losses: 0,
      };
    }

    acc[bet.event].bets.push(
      `${bet.segment}: ${bet.bet}`
    );

    acc[bet.event].units += bet.units;

    if (bet.result === "win") {
      acc[bet.event].wins += 1;
    }

    if (bet.result === "loss") {
      acc[bet.event].losses += 1;
    }

    return acc;
  },
  {}
);

const eventResults = Object.entries(
  groupedEventResults
)
  .reverse()
  .map(([event, data]) => ({
  event,

  bets: data.bets,

  units: Number(
    data.units.toFixed(2)
  ),

  result:
  data.units > 0
    ? "win"
    : data.units < 0
    ? "loss"
    : "push",
}));


/* =========================
   EVENT GRAPH DATA
========================= */

const groupedEvents = unifiedResults.reduce(
  (
    acc: Record<
      string,
      {
        units: number;
        shortLabel: string;
      }
    >,
    bet
  ) => {
    if (!acc[bet.event]) {
      let shortLabel = bet.event;

      /* SHORTEN EVENT NAMES */
      if (
        bet.event.includes("vs")
      ) {
        shortLabel =
          bet.event
            .replace("UFC ", "")
            .split(" vs ")[0];
      }

      acc[bet.event] = {
        units: 0,
        shortLabel,
      };
    }

    acc[bet.event].units += bet.units;

    return acc;
  },
  {}
);

/* =========================
   KEEP ORIGINAL ORDER
========================= */

const orderedEvents = Object.entries(
  groupedEvents
);

/* =========================
   BUILD CUMULATIVE GRAPH
========================= */

let runningUnits = 0;

const unitsGraphData = orderedEvents.map(
  ([event, data]) => {
    runningUnits += data.units;

    return {
      event: data.shortLabel,
      totalUnits: Number(
        runningUnits.toFixed(2)
      ),
    };
  }
);

/* =========================
   SORT EVENTS CHRONOLOGICALLY
========================= */

const sortedEvents = Object.entries(
  groupedEvents
).sort((a, b) => {
  const getEventNumber = (
    eventName: string
  ) => {
    const match =
      eventName.match(/\d+/);

    return match
      ? parseInt(match[0])
      : 0;
  };

  return (
    getEventNumber(a[0]) -
    getEventNumber(b[0])
  );
});


/* =========================
   SEGMENT CHART DATA
========================= */

const segmentChartData = [
  {
    segment: "POTW",
    winRate: Math.round(
      (potwStats.wins /
        (potwStats.wins +
          potwStats.losses)) *
        100
    ),
  },

  {
    segment: "BARK",
    winRate: Math.round(
      (barkStats.wins /
        (barkStats.wins +
          barkStats.losses)) *
        100
    ),
  },

  {
    segment: "ATW",
    winRate: Math.round(
      (atwStats.wins /
        (atwStats.wins +
          atwStats.losses)) *
        100
    ),
  },

  {
    segment: "ACTION",
    winRate: Math.round(
      (actionStats.wins /
        (actionStats.wins +
          actionStats.losses)) *
        100
    ),
  },
];

export default function TrackerPage() {
  const [visibleResults, setVisibleResults] =
    useState(10);

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
                Tracker
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                Every official Rear Naked Locks wager
                tracked publicly across all betting
                segments.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* TOTAL RECORD */}
              <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Total Record
                </p>

                <h3
                  className={`mt-4 text-5xl font-black ${
                    totalWins >= totalLosses
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {totalWins}-{totalLosses}
                </h3>
              </div>

              {/* UNITS */}
              <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Units
                </p>

                <h3
                  className={`mt-4 text-5xl font-black ${
                    totalUnits >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {totalUnits > 0 ? "+" : ""}
                  {totalUnits.toFixed(1)}
                </h3>
              </div>

              {/* ROI */}
              <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  ROI
                </p>

                <h3
                  className={`mt-4 text-5xl font-black ${
                    Number(totalROI) >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {Number(totalROI) > 0 ? "+" : ""}
                  {totalROI}%
                </h3>
              </div>

              {/* STRAIGHT BETS */}
              <div className="rounded-3xl border border-white/10 bg-[#0d1117] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Straight Bets
                </p>

                <h3
                  className={`mt-4 text-5xl font-black ${
                    straightWins >= straightLosses
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {straightWins}-{straightLosses}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENT PERFORMANCE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Betting Systems
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Segment Performance
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* POTW */}
            <Link href="/bets/play-of-the-week">
  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] transition duration-300 hover:scale-[1.02] hover:border-red-500/30">
    <div className="relative h-[220px]">
      <Image
        src="/bets/play-of-week.jpg"
        alt="Play Of The Week"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-4xl font-black uppercase">
          Play Of The Week
        </h3>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 p-6">
      <div>
        <p className="text-sm text-gray-400">
          Record
        </p>

        <p className="mt-1 text-3xl font-black text-green-400">
          {potwStats.wins}-{potwStats.losses}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-400">
          Units
        </p>

        <p
          className={`mt-1 text-3xl font-black ${
            potwStats.units >= 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {potwStats.units > 0 ? "+" : ""}
          {potwStats.units.toFixed(1)}
        </p>
      </div>
    </div>
  </div>
</Link>

            {/* BARK */}
           <Link href="/bets/bark-alley-bangers">
  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] transition duration-300 hover:scale-[1.02] hover:border-red-500/30">
    <div className="relative h-[220px]">
      <Image
        src="/bets/bark-alley.jpg"
        alt="Bark Alley"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-4xl font-black uppercase">
          Bark Alley
        </h3>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 p-6">
      <div>
        <p className="text-sm text-gray-400">
          Record
        </p>

        <p className="mt-1 text-3xl font-black text-green-400">
          {barkStats.wins}-{barkStats.losses}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-400">
          Units
        </p>

        <p
          className={`mt-1 text-3xl font-black ${
            barkStats.units >= 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {barkStats.units > 0 ? "+" : ""}
          {barkStats.units.toFixed(1)}
        </p>
      </div>
    </div>
  </div>
</Link>

            {/* ATW */}
  <Link href="/bets/around-the-world">
  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] transition duration-300 hover:scale-[1.02] hover:border-red-500/30">
    <div className="relative h-[220px]">
      <Image
        src="/bets/around-world.jpg"
        alt="Around The World"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-4xl font-black uppercase">
          Around The World
        </h3>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 p-6">
      <div>
        <p className="text-sm text-gray-400">
          Record
        </p>

        <p className="mt-1 text-3xl font-black text-green-400">
          {atwStats.wins}-{atwStats.losses}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-400">
          Units
        </p>

        <p
          className={`mt-1 text-3xl font-black ${
            atwStats.units >= 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {atwStats.units > 0 ? "+" : ""}
          {atwStats.units.toFixed(1)}
        </p>
      </div>
    </div>
  </div>
</Link>

            {/* ACTION */}
<Link href="/bets/all-action">
  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] transition duration-300 hover:scale-[1.02] hover:border-red-500/30">
    <div className="relative h-[220px]">
      <Image
        src="/bets/all-action.jpg"
        alt="All Action"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-4xl font-black uppercase">
          All Action
        </h3>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 p-6">
      <div>
        <p className="text-sm text-gray-400">
          Record
        </p>

        <p className="mt-1 text-3xl font-black text-green-400">
          {actionStats.wins}-{actionStats.losses}
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-400">
          Units
        </p>

        <p
          className={`mt-1 text-3xl font-black ${
            actionStats.units >= 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {actionStats.units > 0 ? "+" : ""}
          {actionStats.units.toFixed(1)}
        </p>
      </div>
    </div>
  </div>
</Link>
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Analytics
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Performance Trends
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* UNITS GRAPH */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
              <div className="border-b border-white/10 p-6">
                <h3 className="text-2xl font-black uppercase">
                  Units Over Time
                </h3>
              </div>

              <div className="h-[420px] w-full p-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={unitsGraphData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#222"
                    />

<XAxis
  dataKey="event"
  stroke="#9ca3af"
  tick={{ fontSize: 11 }}
/>

 <YAxis
  stroke="#9ca3af"
  domain={["auto", "auto"]}
  tickCount={6}
/>

                    <Tooltip
  formatter={(value) => [
    `${value} Units`,
    "Channel Total",
  ]}
  contentStyle={{
    backgroundColor: "#0d1117",
    border:
      "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
  }}
/>

                    <Line
                      type="monotone"
                      dataKey="totalUnits"
                      stroke="#22c55e"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* SEGMENT WIN RATE */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
              <div className="border-b border-white/10 p-6">
                <h3 className="text-2xl font-black uppercase">
                  Segment Win Rate
                </h3>
              </div>

              <div className="h-[420px] w-full p-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={segmentChartData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#222"
                    />

                    <XAxis
                      dataKey="segment"
                      stroke="#9ca3af"
                    />

                    <YAxis stroke="#9ca3af" />
                    
                    <Tooltip
  formatter={(value) => [
    `${value}%`,
    "Win Rate",
  ]}
  contentStyle={{
    backgroundColor: "#0d1117",
    border:
      "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
  }}
/>
                    <Bar
                      dataKey="winRate"
                      fill="#dc2626"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT RESULTS */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Betting Ledger
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Recent Results
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="border-b border-white/10 bg-black/40">
  <tr>
    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
      Event
    </th>

    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
      Official Bets
    </th>

    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
      Result
    </th>

    <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
      Units
    </th>
  </tr>
</thead>

               <tbody>
  {eventResults
    .slice(0, visibleResults)
    .map((bet) => (
      <tr
        key={bet.event}
        className="border-b border-white/5"
      >
        <td className="px-6 py-5 font-bold text-white">
          {bet.event}
        </td>

        <td className="px-6 py-5 text-white">
          <div className="space-y-2">
            {bet.bets.map(
              (
                singleBet,
                index
              ) => (
                <p
                  key={index}
                  className="text-sm text-gray-300"
                >
                  {singleBet}
                </p>
              )
            )}
          </div>
        </td>

        <td
          className={`px-6 py-5 font-black ${
            bet.result === "win"
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {bet.result.toUpperCase()}
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

            {visibleResults < 
            eventResults.length && (
              <div className="p-6 text-center">
                <button
                  onClick={() =>
                    setVisibleResults(
                      visibleResults + 10
                    )
                  }
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-6
                    py-3
                    text-sm
                    font-black
                    uppercase
                    tracking-wide
                    text-white
                    transition
                    hover:border-red-500
                    hover:text-red-500
                  "
                >
                  Show More Results
                </button>
              </div>
            )}
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
