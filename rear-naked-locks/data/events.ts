export const events = [
  {
    /* =========================
       BASIC EVENT INFO
    ========================= */

    slug: "ufc-freedom-250",

    name: "UFC Freedom 250",

    shortName: "UFC Freedom 250",

    date: "June 14, 2026",

    location: "The White House, Washington United States",

    venue: "White House Lawn",

    status: "upcoming",
    // upcoming | live | completed

    poster: "/events/ufc-freedom-250/poster.jpg",

    banner: "/events/ufc-freedom-250/banner.jpg",

    countdown: true,

    /* =========================
       MAIN EVENT
    ========================= */

    mainEvent: {
      fighterA: {
        name: "Ilia Topuria",

        image:
          "/fighters/ilia-topuria.png",

        record: "17-0",

        country: "Georgia",
      },

      fighterB: {
        name: "Justin Gaethje",

        image:
          "/fighters/justin-gaethje.png",

        record: "27-5",

        country: "USA",
      },

      weightClass: "Lightweight",

      rounds: 5,
    },

    /* =========================
       CO-MAIN EVENT
    ========================= */

    coMainEvent: {
      fighterA: {
        name: "Alex Pereira",

        image:
          "/fighters/alex-pereira.png",
      },

      fighterB: {
        name: "Ciryl Gane",

        image:
          "/fighters/ciryl-gane.png",
      },

      weightClass: "Heavyweight",

      rounds: 5,
    },

    /* =========================
       BREAKDOWN VIDEO
    ========================= */

    breakdownVideo: {
      youtubeId: "5B3-wKlUCCk",

      title:
        "UFC Freedom 250 Full Betting Breakdown",
    },
 /* =========================
       Individual PICKS
    ========================= */

    individualPicks: {
  henry: [
    {
      fighter: "Ilia Topuria",
      odds: "-670",
      confidence: 10,
    },

    {
      fighter: "Ciryl Gane",
      odds: "-110",
      confidence: 6,
    },

    {
      fighter: "Josh Hokit",
      odds: "-400",
      confidence: 9,
    },
    {
      fighter: "Sean O'Malley",
      odds: "-430",
      confidence: 9,
    },
    {
      fighter: "Mauricio Ruffy",
      odds: "-650",
      confidence: 8,
    },
    {
      fighter: "Bo Nickal",
      odds: "-330",
      confidence: 7,
    },
    {
      fighter: "Diego Lopes",
      odds: "-174",
      confidence: 6,
    },
  ],

  chato: [
    {
      fighter: "Ilia Topuria",
      odds: "-670",
      confidence: 10,
    },

    {
      fighter: "Ciryl Gane",
      odds: "-110",
      confidence: 6,
    },

    {
      fighter: "Josh Hokit",
      odds: "-400",
      confidence: 9,
    },
    {
      fighter: "Sean O'Malley",
      odds: "-430",
      confidence: 9,
    },
    {
      fighter: "Mauricio Ruffy",
      odds: "-650",
      confidence: 8,
    },
    {
      fighter: "Bo Nickal",
      odds: "-330",
      confidence: 7,
    },
    {
      fighter: "Diego Lopes",
      odds: "-174",
      confidence: 6,
    },
  ],
},
   

    officialPicks: {
      playOfTheWeek: {
        henryPick:
          "Ilia Topuria",

        chatoPick:
          "Sean O'Malley",

        odds: "-240",

        result: null,
        // win | loss | push

        units: 0,
      },

      barkAlley: {
        fighter:
          "Ciryl Gane",

        odds: "-110",

        result: null,

        methodOfVictory: null,

        methodOfLoss: null,

        units: 0,
      },

      aroundTheWorld: {
        countries: [
          {
            country: "USA",

            fighter:
              "Josh Hokit",

            result: null,
          },

          {
            country: "USA",

            fighter:
              "Sean O'Malley",

            result: null,
          },

          {
            country: "USA",

            fighter:
              "Bo Nickal",

            result: null,
          },
        ],

        parlayOdds: "+101",

        result: null,

        units: 0,
      },

      allAction: {
        legs: [
          {
            fighter:
              "Josh Hokit",

            result: null,
          },

          {
            fighter:
              "Diego Lopes",

            result: null,
          },
        ],

        parlayOdds: "-103",

        result: null,

        units: 0,
      },
    },

    /* =========================
       FULL FIGHT CARD
    ========================= */

    fightCard: {
      mainCard: [
        {
          fighterA:
            "Ilia Topuria",

          fighterB:
            "Justin Gaethje",

          weightClass:
            "Lightweight",

          predictedWinner:
            "Ilia Topuria",

          confidence: 8,

          result: null,
        },

        {
          fighterA:
            "Alex Pereira",

          fighterB:
            "Cirly Gane",

          weightClass:
            "Heavyweight",

          predictedWinner:
            "Ciryl Gane",

          confidence: 9,

          result: null,
        },
        {
          fighterA:
            "Sean O'Malley",

          fighterB:
            "Aiemann Zahabi",

          weightClass:
            "Bantamweight",

          predictedWinner:
            "Sean O'Malley",

          confidence: 9,

          result: null,
        },
        {
          fighterA:
            "Josh Hokit",

          fighterB:
            "Derick Lewis",

          weightClass:
            "Heavyweight",

          predictedWinner:
            "Josh Hokit",

          confidence: 9,

          result: null,
        },
        {
          fighterA:
            "Mauricio Ruffy",

          fighterB:
            "Michael Chandler",

          weightClass:
            "Lightweight",

          predictedWinner:
            "Mauricio Ruffy",

          confidence: 9,

          result: null,
        },
        {
          fighterA:
            "Bo Nickal",

          fighterB:
            "Kyle Daukaus",

          weightClass:
            "Middleweight",

          predictedWinner:
            "Bo Nickal",

          confidence: 9,

          result: null,
        },
        {
          fighterA:
            "Diego Lopes",

          fighterB:
            "Steve Garcia",

          weightClass:
            "Featherweight",

          predictedWinner:
            "Diego Lopes",

          confidence: 9,

          result: null,
        },
      ],

      prelims: [
        {
          fighterA:
            "",

          fighterB:
            "",

          weightClass:
            "",

          predictedWinner:
            " ",

          confidence: 0,

          result: null,
        },
      ],
    },

    /* =========================
       EVENT RESULTS
    ========================= */

    results: {
      totalUnits: 0,

      wins: 0,

      losses: 0,

      pushes: 0,

      roi: 0,
    },

    /* =========================
       ARTICLES
    ========================= */

    articles: [
      {
        title:
          "Why Islam Makhachev dominates this matchup",

        slug:
          "islam-makhachev-breakdown",
      },
    ],

    /* =========================
       SEO
    ========================= */

    seo: {
      title:
        "UFC 329 Betting Picks, Predictions & Breakdown | Rear Naked Locks",

      description:
        "Full UFC 329 betting breakdown including official picks, parlays, underdogs, analytics, and predictions from Rear Naked Locks.",
    },
  },

  {
    slug: "ufc-328",

    name: "UFC 328",

    shortName: "UFC 328",

    date: "May 2026",

    location: "Las Vegas, Nevada",

    venue: "T-Mobile Arena",

    status: "completed",

    poster: "/events/ufc-328/poster.jpg",

    banner: "/events/ufc-328/banner.jpg",

    countdown: false,

    mainEvent: {
      fighterA: {
        name:
          "Charles Oliveira",

        image:
          "/fighters/charles-oliveira.png",

        record: "36-10",

        country: "Brazil",
      },

      fighterB: {
        name:
          "Arman Tsarukyan",

        image:
          "/fighters/arman-tsarukyan.png",

        record: "23-3",

        country: "Armenia",
      },

      weightClass: "Lightweight",

      rounds: 5,
    },

    coMainEvent: {
      fighterA: {
        name:
          "Brandon Moreno",

        image:
          "/fighters/brandon-moreno.png",
      },

      fighterB: {
        name:
          "Kai Kara-France",

        image:
          "/fighters/kai-kara-france.png",
      },

      weightClass: "Flyweight",

      rounds: 3,
    },

    breakdownVideo: {
      youtubeId: "5B3-wKlUCCk",

      title:
        "UFC 328 Betting Breakdown",
    },

    officialPicks: {
      playOfTheWeek: {
        henryPick:
          "Grant Dawson",

        chatoPick:
          "Jared Gordon",

        odds: "+120",

        result: "win",

        units: 1.2,
      },

      barkAlley: {
        fighter:
          "Jeremy Stephens",

        odds: "+225",

        result: "loss",

        methodOfVictory: null,

        methodOfLoss:
          "submission",

        units: -1,
      },

      aroundTheWorld: {
        countries: [
          {
            country: "Brazil",

            fighter:
              "Charles Oliveira",

            result: "win",
          },

          {
            country: "Mexico",

            fighter:
              "Brandon Moreno",

            result: "win",
          },

          {
            country: "Russia",

            fighter:
              "Islam Makhachev",

            result: "win",
          },
        ],

        parlayOdds: "+425",

        result: "win",

        units: 4.25,
      },

      allAction: {
        legs: [
          {
            fighter:
              "Charles Oliveira",

            method:
              "Submission",

            result: "win",
          },

          {
            fighter:
              "Brandon Moreno",

            method:
              "Decision",

            result: "win",
          },
        ],

        parlayOdds: "+500",

        result: "win",

        units: 5,
      },
    },

    fightCard: {
      mainCard: [],

      prelims: [],
    },

    results: {
      totalUnits: 9.45,

      wins: 3,

      losses: 1,

      pushes: 0,

      roi: 45,
    },

    articles: [],

    seo: {
      title:
        "UFC 328 Results & Betting Picks | Rear Naked Locks",

      description:
        "Official UFC 328 betting results, breakdowns, analytics, and picks from Rear Naked Locks.",
    },
  },
];