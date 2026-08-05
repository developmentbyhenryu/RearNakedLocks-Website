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

  status: "upcoming",
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
          result: null,
        },

        {
          fighter: "Diego Ferreira",
          odds: "-186",
          confidence: 8,
          result: null,
        },

        {
          fighter: "Yadier Del Valle",
          odds: "-700",
          confidence: 10,
          result: null,
        },
        {
          fighter: "Alexia Thainara",
          odds: "-265",
          confidence: 8,
          result: null,
        },
        {
          fighter: "Ty Miller",
          odds: "-350",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Steven Asplund",
          odds: "-280",
          confidence: 8,
          result: null,
        },
        {
          fighter: "Diyar Nurgozhay",
          odds: "-164",
          confidence: 7,
          result: null,
        },
        {
          fighter: "Louie Sutherland",
          odds: "-162",
          confidence: 4,
          result: null,
        },
        {
          fighter: "Richie Miranda",
          odds: "+210",
          confidence: 5,
          result: null,
        },
        {
          fighter: "Miles Johns",
          odds: "-160",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Juliana Miller",
          odds: "-260",
          confidence: 8,
          result: null,
        },
      ],

      chato: [
        {
          fighter: "Mateusz Gamrot",
          odds: "+120",
          confidence: 6,
          result: null,
        },

        {
          fighter: "Diego Ferreira",
          odds: "-186",
          confidence: 7,
          result: null,
        },

        {
          fighter: "Yadier Del Valle",
          odds: "-700",
          confidence: 10,
          result: null,
        },
        {
          fighter: "Alexia Thainara",
          odds: "-265",
          confidence: 8,
          result: null,
        },
        {
          fighter: "Ty Miller",
          odds: "-350",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Steven Asplund",
          odds: "-280",
          confidence: 8,
          result: null,
        },
        {
          fighter: "Diyar Nurgozhay",
          odds: "-164",
          confidence: 7,
          result: null,
        },
        {
          fighter: "Louie Sutherland",
          odds: "-162",
          confidence: 4,
          result: null,
        },
        {
          fighter: "Richie Miranda",
          odds: "+210",
          confidence: 5,
          result: null,
        },
        {
          fighter: "Miles Johns",
          odds: "-160",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Juliana Miller",
          odds: "-260",
          confidence: 8,
          result: null,
        },
      ],
    },
    playOfTheWeek: {
      slug: "play-of-the-week",
      title: "Play Of The Week",
      description: "Henry + Chato's official weekly parlay.",

      henry: {
        fighter: "Steven Asplund",
        result: null,
      },

      chato: {
        fighter: "Alexia Thainara",
        result: null,
      },

      parlayOdds: "-111",
      result: null,

      units: 0,
    },

    barkAlley: {
      slug: "bark-alley",
      title: "Bark Alley",
      description: "Best underdog of the week.",

      pick: {
        fighter: "Mateusz Gamrot",
        result: null,
        method: null,
      },
      odds: "+120",
      units: 0,
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
          result: null,
        },

        {
          country: "USA",
          fighter: "Ty Miller",
          result: null,
        },

        {
          country: "Kazakhstan",
          fighter: "Diyar Nurgozhay",
          result: null,
        },
      ],

      parlayOdds: "+185",
      result: null,
      units: 0,
    },

    allAction: {
      slug: "all-action",
      title: "All Action Parlay",
      description:
        "Henry's official action parlay featuring fighters expected to deliver exciting finishes.",
      picks: [
        {
          fighter: "Juliana Miller",
          method: "",
          result: null,
        },
        {
          fighter: "Diego Ferreira",
          method: "",
          result: null,
        },
      ],

      parlayOdds: "+107",

      result: null,

      units: 0,
    },
  },
  published: {
    youtube: false,

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
