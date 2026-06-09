import { playOfTheWeekHistory } from "./playOfTheWeek";
import { aroundTheWorldHistory } from "./aroundTheWorld";
import { barkAlleyHistory } from "./barkAlley";
import { allActionHistory } from "./allActionParlay";

const unifiedResults = [
  ...playOfTheWeekHistory.map((bet) => ({
    event: bet.event,
    segment: "Play Of The Week",
    bet: `${bet.henryPick} + ${bet.chatoPick}`,
    result: bet.parlayResult,
    units: bet.units,
  })),

  ...aroundTheWorldHistory.map((bet) => ({
    event: bet.event,
    segment: "Around The World",
    bet: bet.legs
      .map((leg) => leg.fighter)
      .join(", "),
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
];

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
      acc[bet.event].wins++;
    }

    if (bet.result === "loss") {
      acc[bet.event].losses++;
    }

    return acc;
  },
  {}
);

export const eventResults = Object.entries(
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