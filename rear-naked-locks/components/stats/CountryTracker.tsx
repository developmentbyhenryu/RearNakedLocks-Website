"use client";
import { aroundTheWorldHistory } from "@/data/aroundTheWorld";
import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


/* COUNTRY TRACKER */

const countryTracker: Record<
  string,
  {
    wins: number;
    losses: number;
    appearances: number;
  }
> = {};

aroundTheWorldHistory.forEach((event) => {
  event.legs.forEach((leg) => {
    const country = leg.country;

    if (!countryTracker[country]) {
      countryTracker[country] = {
        wins: 0,
        losses: 0,
        appearances: 0,
      };
    }

    countryTracker[country].appearances += 1;

    if (leg.result === "win") {
      countryTracker[country].wins += 1;
    } else {
      countryTracker[country].losses += 1;
    }
  });
});

const countries = Object.entries(
  countryTracker
).map(([country, stats]) => ({
  country,
  ...stats,

  profit:
    stats.wins * 1 -
    stats.losses * 1,

  accuracy:
    (
      (stats.wins /
        (stats.wins + stats.losses)) *
      100
    ).toFixed(0) + "%",
}));

export default function CountryTracker() {
  const [sortBy, setSortBy] = useState("profit");
  const [showAll, setShowAll] = useState(false);

  const sortedData = useMemo(() => {
    const data = [...countries];

    switch (sortBy) {
      case "wins":
        return data.sort((a, b) => b.wins - a.wins);

      case "losses":
        return data.sort((a, b) => b.losses - a.losses);

      case "profit":
      default:
        return data.sort((a, b) => b.profit - a.profit);
    }
  }, [sortBy]);

  const visibleData = showAll
    ? sortedData
    : sortedData.slice(0, 5);

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      {/* HEADER */}
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="rnl-label">
            Around The World Analytics
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Country Performance
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSortBy("profit")}
            className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide transition-all duration-300 ${
              sortBy === "profit"
                ? "bg-red-600 text-white"
                : "border border-white/10 text-gray-300 hover:border-red-500/30"
            }`}
          >
            Profit
          </button>

          <button
            onClick={() => setSortBy("wins")}
            className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide transition-all duration-300 ${
              sortBy === "wins"
                ? "bg-red-600 text-white"
                : "border border-white/10 text-gray-300 hover:border-red-500/30"
            }`}
          >
            Wins
          </button>

          <button
            onClick={() => setSortBy("losses")}
            className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide transition-all duration-300 ${
              sortBy === "losses"
                ? "bg-red-600 text-white"
                : "border border-white/10 text-gray-300 hover:border-red-500/30"
            }`}
          >
            Losses
          </button>
        </div>
      </div>

      {/* CHART CARD */}
      <div className="rnl-card overflow-hidden p-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">
              Betting Trends
            </p>

            <h3 className="mt-2 text-2xl font-black uppercase text-white">
              Country Records
            </h3>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-wide text-white transition-all duration-300 hover:border-red-500/30 hover:bg-white/5"
          >
            {showAll ? "Show Top 5" : "View All"}
          </button>
        </div>

        {/* CHART */}
        <div className="overflow-x-auto">
          <div className="h-[420px] min-w-[800px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={visibleData}
                margin={{
                  top: 10,
                  right: 20,
                  left: -10,
                  bottom: 20,
                }}
              >
                <XAxis
                  dataKey="country"
                  stroke="#9ca3af"
                  tick={{
                    fill: "#9ca3af",
                    fontSize: 12,
                  }}
                />

                <YAxis
                  stroke="#9ca3af"
                  tick={{
                    fill: "#9ca3af",
                    fontSize: 12,
                  }}
                />

                <Tooltip
  content={({ active, payload, label }) => {
    if (
      active &&
      payload &&
      payload.length
    ) {
      const wins = payload.find(
        (item: any) =>
          item.dataKey === "wins"
      );

      const losses = payload.find(
        (item: any) =>
          item.dataKey === "losses"
      );

      return (
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-[#0d1117]
            p-4
            shadow-2xl
          "
        >
          <p className="mb-3 text-lg font-black text-white">
            {label}
          </p>

          <p className="text-green-400 font-bold">
            Wins : {wins?.value}
          </p>

          <p className="mt-1 text-red-400 font-bold">
            Losses : {losses?.value}
          </p>
        </div>
      );
    }

    return null;
  }}
/>

                <Bar
                  dataKey="wins"
                  fill="#dc2626"
                  radius={[6, 6, 0, 0]}
                />

                <Bar
                  dataKey="losses"
                  fill="#3f3f46"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="border-b border-white/10 bg-black/40">
              <tr>
                <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                  Country
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                  Wins
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                  Losses
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                  Profit
                </th>

                <th className="px-6 py-4 text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                  Win Rate
                </th>
              </tr>
            </thead>

            <tbody>
              {(showAll
  ? sortedData
  : sortedData.slice(0, 10)
).map((country) => {
                const total =
                  country.wins + country.losses;

                const winRate = (
                  (country.wins / total) *
                  100
                ).toFixed(0);

                return (
                  <tr
                    key={country.country}
                    className="border-b border-white/5 transition-all duration-300 hover:bg-white/[0.03]"
                  >
                    <td className="px-6 py-5 font-bold text-white">
                      {country.country}
                    </td>

                    <td className="px-6 py-5 text-white">
                      {country.wins}
                    </td>

                    <td className="px-6 py-5 text-white">
                      {country.losses}
                    </td>

                    <td
                      className={`px-6 py-5 font-bold ${
                        country.profit >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {country.profit >= 0 ? "+" : ""}
                      {country.profit}
                    </td>

                    <td className="px-6 py-5 text-white">
                      {winRate}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="border-t border-white/10 p-6 text-center">
  <button
    onClick={() => setShowAll(!showAll)}
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
      transition-all
      duration-300
      hover:border-red-500/30
      hover:bg-white/5
    "
  >
    {showAll
      ? "Show Top 10"
      : "View All Countries"}
  </button>
</div>
      </div>
    </div>
    </section>
  );
}