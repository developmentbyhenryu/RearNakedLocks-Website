import { playOfTheWeekHistory } from "@/data/playOfTheWeek";
import { aroundTheWorldHistory } from "@/data/aroundTheWorld";
import { barkAlleyHistory } from "@/data/barkAlley";
import { allActionHistory } from "@/data/allActionParlay";

/* COMBINED DATA */

const allBets = [
  ...playOfTheWeekHistory.map((bet) => ({
    result: bet.parlayResult,
    units: bet.units,
    type: "parlay",
  })),

  ...aroundTheWorldHistory.map((bet) => ({
    result: bet.parlayResult,
    units: bet.units,
    type: "parlay",
  })),

  ...barkAlleyHistory.map((bet) => ({
    result: bet.result,
    units: bet.units,
    type: "single",
  })),

  ...allActionHistory.map((bet) => ({
    result: bet.parlayResult,
    units: bet.units,
    type: "parlay",
  })),
];

/* RECORD */

const wins = allBets.filter(
  (bet) => bet.result === "win"
).length;

const losses = allBets.filter(
  (bet) => bet.result === "loss"
).length;

/* UNITS */

const totalUnits = allBets.reduce(
  (acc, bet) => acc + bet.units,
  0
);

/* ROI */

const roi = (
  (totalUnits / allBets.length) *
  100
).toFixed(0);

/* PARLAYS HIT */

const parlayWins = allBets.filter(
  (bet) =>
    bet.type === "parlay" &&
    bet.result === "win"
).length;

const parlayLosses = allBets.filter(
  (bet) =>
    bet.type === "parlay" &&
    bet.result === "loss"
).length;

/* STRAIGHT BET RECORD */

const straightWins =
  barkAlleyHistory.filter(
    (bet) => bet.result === "win"
  ).length;

const straightLosses =
  barkAlleyHistory.filter(
    (bet) => bet.result === "loss"
  ).length;



export default function StatsBar() {
 const stats = [
 {
  label: "Underdog Bet Record",
  value: `${straightWins}-${straightLosses}`,
  positive: straightWins > straightLosses,
},

  {
    label: "Units Won",
    value: `${
      totalUnits > 0 ? "+" : ""
    }${totalUnits.toFixed(1)}`,
    positive: totalUnits >= 0,
  },

  {
    label: "ROI",
    value: `${
      Number(roi) > 0 ? "+" : ""
    }${roi}%`,
    positive: Number(roi) >= 0,
  },

  {
    label: "Parlay Record",
    value: `${parlayWins}-${parlayLosses}`,
    positive: parlayWins > parlayLosses,
  },
];

  return (
    <section className="py-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rnl-stat-card"
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-400">
              {stat.label}
            </p>

            <h3
           className={`text-4xl font-black tracking-tight ${
  stat.positive
    ? "text-green-400"
    : "text-red-400"
}`}
            >
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}