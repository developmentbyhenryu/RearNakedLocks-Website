import type { Event } from "@/types/event";

const ufcGamrotVsSalkilld: Event = {
  /* ==========================================
   BASIC EVENT INFO
========================================== */
  slug: "ufc-gamrot-vs-salkilld",

  event: "UFC Fight Night: Gamrot vs Salkilld",

  shortName: "UFC Vegas",

  date: "August 8, 2026",

  venue: "UFC Apex",

  location: "Las Vegas, Nevada, USA",

  status: "completed",
  version: 2,
  /* ==========================================
   FEATURED FIGHTS
========================================== */
  media: {
    poster: "/events/gamrot-salkilld.jpg",

    banner: "/events/gamrot-salkilld-banner.jpg",

    thumbnail: "/events/gamrot-salkilld-thumbnail.jpg",
    video: {
      youtubeId: "WGxHqXHirSw",

      title: "Everyone's Betting Salkilld... Here's Why We're Fading Him",
    },
  },
  /* ==========================================
   FEATURED FIGHTS
========================================== */
  fights: {
    mainEvent: {
      fighterA: {
        name: "Mateusz Gamrot",
        country: "Poland",
        image: "/fighters/mateusz-gamrot.png",

        record: "26-4",
      },

      fighterB: {
        name: "Quillan Salkilld",
        country: "Australia",
        image: "/fighters/quillan-salkilld.png",

        record: "12-1",
      },

      weightClass: "Lightweight",

      rounds: 5,
    },

    coMainEvent: {
      fighterA: {
        name: "Billy Quarantillo",

        country: "USA",

        image: "/fighters/billy-quarantillo.png",

        record: "20-7",
      },

      fighterB: {
        name: "Diego Ferreira",

        country: "Brazil",

        image: "/fighters/diego-ferreira.png",

        record: "19-6",
      },
      weightClass: "Lightweight",
      rounds: 3,
    },
  },
  segments: {
    picks: {
      henry: [
        {
          fighter: "Mateusz Gamrot",
          odds: "+120",
          confidence: 6,
          result: "loss",
        },

        {
          fighter: "Diego Ferreira",
          odds: "-186",
          confidence: 8,
          result: "win",
        },

        {
          fighter: "Yadier Del Valle",
          odds: "-700",
          confidence: 10,
          result: "win",
        },
        {
          fighter: "Alexia Thainara",
          odds: "-265",
          confidence: 8,
          result: "win",
        },
        {
          fighter: "Ty Miller",
          odds: "-350",
          confidence: 9,
          result: "win",
        },
        {
          fighter: "Steven Asplund",
          odds: "-280",
          confidence: 8,
          result: "win",
        },
        {
          fighter: "Diyar Nurgozhay",
          odds: "-164",
          confidence: 7,
          result: "win",
        },
        {
          fighter: "Jose Montanha",
          odds: "+135",
          confidence: 4,
          result: "win",
        },
        {
          fighter: "Richie Miranda",
          odds: "+210",
          confidence: 5,
          result: "loss",
        },
        {
          fighter: "Miles Johns",
          odds: "-160",
          confidence: 6,
          result: "win",
        },
        {
          fighter: "Juliana Miller",
          odds: "-260",
          confidence: 8,
          result: "win",
        },
      ],

      chato: [
        {
          fighter: "Mateusz Gamrot",
          odds: "+120",
          confidence: 6,
          result: "loss",
        },

        {
          fighter: "Diego Ferreira",
          odds: "-186",
          confidence: 7,
          result: "win",
        },

        {
          fighter: "Yadier Del Valle",
          odds: "-700",
          confidence: 10,
          result: "win",
        },
        {
          fighter: "Alexia Thainara",
          odds: "-265",
          confidence: 8,
          result: "win",
        },
        {
          fighter: "Ty Miller",
          odds: "-350",
          confidence: 9,
          result: "win",
        },
        {
          fighter: "Steven Asplund",
          odds: "-280",
          confidence: 8,
          result: "win",
        },
        {
          fighter: "Diyar Nurgozhay",
          odds: "-164",
          confidence: 7,
          result: "win",
        },
        {
          fighter: "Louie Sutherland",
          odds: "-162",
          confidence: 4,
          result: "loss",
        },
        {
          fighter: "Manoel Sousa",
          odds: "-280",
          confidence: 7,
          result: "win",
        },
        {
          fighter: "Miles Johns",
          odds: "-160",
          confidence: 6,
          result: "win",
        },
        {
          fighter: "Juliana Miller",
          odds: "-260",
          confidence: 8,
          result: "win",
        },
      ],
    },
    playOfTheWeek: {
      slug: "play-of-the-week",
      title: "Play Of The Week",
      description: "Henry + Chato's official weekly parlay.",

      henry: {
        fighter: "Steven Asplund",
        result: "win",
      },

      chato: {
        fighter: "Alexia Thainara",
        result: "win",
      },

      parlayOdds: "-111",
      result: "win",

      units: 0.9,
    },

    barkAlley: {
      slug: "bark-alley",
      title: "Bark Alley",
      description: "Best underdog of the week.",

      pick: {
        fighter: "Mateusz Gamrot",
        result: "loss",
        method: "submission",
      },
      odds: "+120",
      units: -1,
    },

    aroundTheWorld: {
      slug: "around-the-world",
      title: "Around The World",
      description:
        "Three fighters from three different countries combined into one parlay.",
      picks: [
        {
          country: "Brazil",
          fighter: "Alexia Thainara",
          result: "win",
        },

        {
          country: "USA",
          fighter: "Ty Miller",
          result: "win",
        },

        {
          country: "Kazakhstan",
          fighter: "Diyar Nurgozhay",
          result: "win",
        },
      ],

      parlayOdds: "+185",
      result: "win",
      units: 1.85,
    },

    allAction: {
      slug: "all-action",
      title: "All Action Parlay",
      description:
        "Henry's official action parlay featuring fighters expected to deliver exciting finishes.",
      picks: [
        {
          fighter: "Juliana Miller",
          method: "submission",
          result: "win",
        },
        {
          fighter: "Diego Ferreira",
          method: "decision",
          result: "win",
        },
      ],

      parlayOdds: "+107",

      result: "win",

      units: 1.07,
    },
  },
  published: {
    youtube: true,

    homepage: true,

    social: false,
  },
  results: {
    completed: false,
    completedAt: null,
    notes: "",
  },
};

export default ufcGamrotVsSalkilld;
