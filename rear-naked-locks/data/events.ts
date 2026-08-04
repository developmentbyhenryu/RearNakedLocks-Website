import { SegmentStateProvider } from "next/dist/next-devtools/userspace/app/segment-explorer-node";
import { SegmentViewStateNode } from "next/dist/server/app-render/entry-base";
import { SegmentPrefixRSCPathnameNormalizer } from "next/dist/server/normalizers/request/segment-prefix-rsc";

export const events = [
{
    /* =========================
       BASIC EVENT INFO
    ========================= */

    slug: "ufc-uae-7-25-26",

    name: "UFC Ankalaev VS Guskov",

    shortName: "UFC UAE",

    date: "July 25, 2026",

    location: " Yas Island/Yas West United Arab Emirates",

    venue: "Etihad Arena",

    status: "upcoming",
    // upcoming | live | completed

    poster: "/events/poster.jpg",

    banner: "/events/poster.jpg",

    countdown: true,

    /* =========================
       MAIN EVENT
    ========================= */

    mainEvent: {
      fighterA: {
        name: "Magomed Ankalaev",

        image:
          "/fighters/conor-mcgregor.png",

        record: "23-3",

        country: "Russia",
      },

      fighterB: {
        name: "Bogdan Guskov",

        image:
          "/fighters/max-holloway.png",

        record: "21-4",

        country: "Nigeria",
      },

      weightClass: "Middleweight",

      rounds: 5,
    },

    /* =========================
       CO-MAIN EVENT
    ========================= */

    coMainEvent: {
      fighterA: {
        name: "Jared Cannonier",

        image:
          "/fighters/benoit-saint-denis.png",
      },

      fighterB: {
        name: "Christian Leroy Duncan",

        image:
          "/fighters/paddy-pimblett.png",
      },

      weightClass: "Middleweight",

      rounds: 3,
    },

    /* =========================
       BREAKDOWN VIDEO
    ========================= */

    breakdownVideo: {
      youtubeId: "5B3-wKlUCCk",

      title:
        "UFC OKC Best Bets & Predictions | Du Plessis vs Usman Full Fight Breakdown + Best Picks",
    },
 /* =========================
       Individual PICKS
    ========================= */

    individualPicks: {
  henry: [
    {
      fighter: "Dricus Du Plessis",
      odds: "-235",
      confidence: 10,
    },

    {
      fighter: "Christian Leroy Duncan",
      odds: "-390",
      confidence: 9,
    },

    {
      fighter: "Mitch Ramirez",
      odds: "+280",
      confidence: 7,
    },
    {
      fighter: "Fatima Kline",
      odds: "-490",
      confidence: 10,
    },
    {
      fighter: "Tommy Mcmillen",
      odds: "-174",
      confidence: 7,
    },
    {
      fighter: "Jose Miguel Delgado",
      odds: "+108",
      confidence: 7,
    },
    {
      fighter: "Jean-Paul Lebosnoyani",
      odds: "+152",
      confidence: 5,
    },
    {
      fighter: "Felipe Franco",
      odds: "+128",
      confidence: 5,
    },
    {
      fighter: "Damien Anderson",
      odds: "-120",
      confidence: 7,
    },
    {
      fighter: "Alden Coria",
      odds: "-1150",
      confidence: 10,
    },
    {
      fighter: "Rj Harris",
      odds: "+100",
      confidence: 4,
    },
    {
      fighter: "Dione Barbosa",
      odds: "-650",
      confidence: 8,
    },
 
  ],

  chato: [
     {
      fighter: "Dricus Du Plessis",
      odds: "-235",
      confidence: 10,
    },

    {
      fighter: "Christian Leroy Duncan",
      odds: "-390",
      confidence: 9,
    },

    {
      fighter: "Mitch Ramirez",
      odds: "+280",
      confidence: 7,
    },
    {
      fighter: "Fatima Kline",
      odds: "-490",
      confidence: 10,
    },
    {
      fighter: "Tommy Mcmillen",
      odds: "-174",
      confidence: 7,
    },
    {
      fighter: "Jose Miguel Delgado",
      odds: "+108",
      confidence: 7,
    },
    {
      fighter: "Seok Hyun Ko",
      odds: "-180",
      confidence: 7,
    },
    {
      fighter: "Felipe Franco",
      odds: "+128",
      confidence: 5,
    },
    {
      fighter: "Damien Anderson",
      odds: "-120",
      confidence: 7,
    },
    {
      fighter: "Alden Coria",
      odds: "-1150",
      confidence: 10,
    },
    {
      fighter: "Rj Harris",
      odds: "+100",
      confidence: 4,
    },
    {
      fighter: "Dione Barbosa",
      odds: "-650",
      confidence: 8,
    },
  ],
},
   

    segments: {
      playOfTheWeek: {
        henryPick:
          "Fatima Kline",

        chatoPick:
          "Dricus Du Plessis",

        odds: "-140",

        result: null,
        // win | loss | push

        units: 0,
      },

      barkAlley: {
        fighter:
          "Mitch Ramirez",

        odds: "+290",

        result: null,

        methodOfVictory: null,

        methodOfLoss: null,

        units: 0,
      },

      aroundTheWorld: {
        countries: [
          {
            country: "England",

            fighter:
              "Christian Leroy Duncan",

            result: null,
          },

          {
            country: "USA",

            fighter:
              "Fatima Kline",

            result: null,
          },

          {
            country: "South Africa",

            fighter:
              "Dricus Du Plessis",

            result: null,
          },
        ],

        parlayOdds: "+114",

        result: null,

        units: 0,
      },

      allAction: {
        picks: [
  {
    fighter: "Jose Miguel Delgado",
    method: "",
    result: null,
  },
  {
    fighter: "Alden Coria",
    method: "",
    result: null,
  },
],

        parlayOdds: "+112",

        result: null,

        units: 0,
      },
    },
  },
];