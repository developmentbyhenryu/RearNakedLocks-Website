export const events = [
  {
    /* =========================
       BASIC EVENT INFO
    ========================= */

    slug: "ufc-329",

    name: "UFC 329",

    shortName: "UFC 329",

    date: "July 11, 2026",

    location: "Las Vegas, Nevada United States",

    venue: "T-Mobile Arena",

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
        name: "Conor McGregor",

        image:
          "/fighters/conor-mcgregor.png",

        record: "22-6",

        country: "Ireland",
      },

      fighterB: {
        name: "Max Holloway",

        image:
          "/fighters/max-holloway.png",

        record: "27-9",

        country: "USA",
      },

      weightClass: "Welterweight",

      rounds: 5,
    },

    /* =========================
       CO-MAIN EVENT
    ========================= */

    coMainEvent: {
      fighterA: {
        name: "Benoit Saint Denis",

        image:
          "/fighters/benoit-saint-denis.png",
      },

      fighterB: {
        name: "Paddy Pimblett",

        image:
          "/fighters/paddy-pimblett.png",
      },

      weightClass: "Lightweight",

      rounds: 3,
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
      fighter: "Max Holloway",
      odds: "-245",
      confidence: 8,
    },

    {
      fighter: "Paddy Pimblett",
      odds: "+126",
      confidence: 8,
    },

    {
      fighter: "Mario Bautista",
      odds: "+126",
      confidence: 7,
    },
    {
      fighter: "Loneer Kavanagh",
      odds: "-225",
      confidence: 9,
    },
    {
      fighter: "King Green",
      odds: "+126",
      confidence: 5,
    },
    {
      fighter: "Gable Steveson",
      odds: "-2500",
      confidence: 10,
    },
    {
      fighter: "Robert Whittaker",
      odds: "-174",
      confidence: 8,
    },
    {
      fighter: "Adrian Yanez",
      odds: "-440",
      confidence: 7,
    },
    {
      fighter: "Luke Riley",
      odds: "-340",
      confidence: 8,
    },
    {
      fighter: "Tracy Cortez",
      odds: "-104",
      confidence: 6,
    },
    {
      fighter: "Damian Pinas",
      odds: "-215",
      confidence: 6,
    },
    {
      fighter: "Ryan Gandra",
      odds: "-150",
      confidence: 8,
    },
    {
      fighter: "Alessandro Costa",
      odds: "-265",
      confidence: 8,
    },
  ],

  chato: [
     {
      fighter: "Max Holloway",
      odds: "-245",
      confidence: 8,
    },

    {
      fighter: "Paddy Pimblett",
      odds: "+126",
      confidence: 8,
    },

    {
      fighter: "Mario Bautista",
      odds: "+126",
      confidence: 7,
    },
    {
      fighter: "Loneer Kavanagh",
      odds: "-225",
      confidence: 9,
    },
    {
      fighter: "Terrance Mckinney",
      odds: "-162",
      confidence: 5,
    },
    {
      fighter: "Gable Steveson",
      odds: "-2500",
      confidence: 10,
    },
    {
      fighter: "Robert Whittaker",
      odds: "-174",
      confidence: 8,
    },
    {
      fighter: "Adrian Yanez",
      odds: "-440",
      confidence: 7,
    },
    {
      fighter: "Luke Riley",
      odds: "-340",
      confidence: 8,
    },
    {
      fighter: "Tracy Cortez",
      odds: "-104",
      confidence: 6,
    },
    {
      fighter: "Damian Pinas",
      odds: "-215",
      confidence: 6,
    },
    {
      fighter: "Ryan Gandra",
      odds: "-150",
      confidence: 8,
    },
    {
      fighter: "Alessandro Costa",
      odds: "-265",
      confidence: 8,
    },
  ],
},
   

    officialPicks: {
      playOfTheWeek: {
        henryPick:
          "Loneer Kavanagh",

        chatoPick:
          "Alessandro Costa",

        odds: "-101",

        result: null,
        // win | loss | push

        units: 0,
      },

      barkAlley: {
        fighter:
          "Paddy Pimblett",

        odds: "+126",

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
              "Luke Riley",

            result: null,
          },

          {
            country: "USA",

            fighter:
              "Max Holloway",

            result: null,
          },

          {
            country: "Brazil",

            fighter:
              "Alessandro Costa",

            result: null,
          },
        ],

        parlayOdds: "+151",

        result: null,

        units: 0,
      },

      allAction: {
        legs: [
  {
    fighter: "Robert Whittaker",
    method: "",
    result: null,
  },
  {
    fighter: "Ryan Gandra",
    method: "",
    result: null,
  },
],

        parlayOdds: "+157",

        result: null,

        units: 0,
      },
    },
  },
];