import type { Event } from "@/types/event";

const ufcNurmagomedovVsYadong: Event = {
  /* ==========================================
     BASIC EVENT INFO
  ========================================== */

  slug: "ufc-nurmagomedov-vs-yadong",

  event: "UFC Nurmagomedov vs Yadong",

  shortName: "Nurmagomedov vs Yadong",
  date: "August 29, 2026",

  venue: "Oriental Sports Center",

  location: "Pudong District China",

  status: "upcoming",

  version: 2,

  /* ==========================================
     MEDIA
  ========================================== */

  media: {
    poster: "/events/ufc-330-makhachev-vs-garry.jpg",
    banner: "/events/ufc-330-makhachev-vs-garry-banner.jpg",
    thumbnail: "/events/gamrot-salkilld-thumbnail.jpg",
    video: {
      youtubeId: "WGxHqXHirSw",

      title: "Father's Plan - Will Umar dominate in China",
    },
  },

  /* ==========================================
     FEATURED FIGHTS
  ========================================== */

  fights: {
    mainEvent: {
      fighterA: {
        name: "Umar Nurmagomedov",

        country: "Russia",

        image: "",

        record: "20-1",
      },

      fighterB: {
        name: "Song Yadong",

        country: "China",

        image: "",

        record: "23-9-1",
      },

      weightClass: "Bantamweight",

      rounds: 5,
    },

    coMainEvent: {
      fighterA: {
        name: "Yan Xiaonan",

        country: "China",

        image: "",

        record: "19-5",
      },

      fighterB: {
        name: "Denise Gomes",

        country: "Brazil",

        image: "",

        record: "12-3",
      },

      weightClass: "Strawweight",

      rounds: 5,
    },
  },

  /* ==========================================
     BETTING SEGMENTS
  ========================================== */

  segments: {
    /* ---------- Individual Picks ---------- */

    picks: {
      henry: [
        {
          fighter: "Umar Nurmagomedov",
          odds: "-600",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Yan Xiaonan",
          odds: "-158",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Kai Asakura",
          odds: "-470",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Sumudaerji",
          odds: "-225",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Liu Ce",
          odds: "-205",
          confidence: 5,
          result: null,
        },
        {
          fighter: "Bilal Hasan",
          odds: "-800",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Andre Lima",
          odds: "-290",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Rei Tsuruya",
          odds: "-700",
          confidence: 10,
          result: null,
        },
        {
          fighter: "Xiong Jingnan",
          odds: "+200",
          confidence: 5,
          result: null,
        },
        {
          fighter: "Jack Jenkins",
          odds: "+134",
          confidence: 7,
          result: null,
        },
        {
          fighter: "Francesco Nuzzi",
          odds: "+155",
          confidence: 4,
          result: null,
        },
        {
          fighter: "Lawrence Lui",
          odds: "-290",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Ding Meng",
          odds: "-148",
          confidence: 7,
          result: null,
        },
      ],

      chato: [
        {
          fighter: "Umar Nurmagomedov",
          odds: "-600",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Yan Xiaonan",
          odds: "-158",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Kai Asakura",
          odds: "-470",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Sumudaerji",
          odds: "-225",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Liu Ce",
          odds: "-205",
          confidence: 5,
          result: null,
        },
        {
          fighter: "Bilal Hasan",
          odds: "-800",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Andre Lima",
          odds: "-290",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Rei Tsuruya",
          odds: "-700",
          confidence: 10,
          result: null,
        },
        {
          fighter: "Xiong Jingnan",
          odds: "+200",
          confidence: 5,
          result: null,
        },
        {
          fighter: "Jack Jenkins",
          odds: "+134",
          confidence: 7,
          result: null,
        },
        {
          fighter: "Francesco Nuzzi",
          odds: "+155",
          confidence: 4,
          result: null,
        },
        {
          fighter: "Lawrence Lui",
          odds: "-290",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Ding Meng",
          odds: "-148",
          confidence: 7,
          result: null,
        },
      ],
    },

    /* ---------- Play Of The Week ---------- */

    playOfTheWeek: {
      slug: "play-of-the-week",
      title: "Play Of The Week",
      description: "Henry + Chato's official weekly parlay.",

      henry: {
        fighter: "Joel Alvarez",

        result: null,
      },

      chato: {
        fighter: "Esteban Ribovics",

        result: null,
      },

      parlayOdds: "-179",

      result: null,

      units: 0,
    },

    /* ---------- Bark Alley ---------- */

    barkAlley: {
      title: "Bark Alley",
      slug: "bark-alley",
      description: "Best underdog of the week.",

      pick: {
        fighter: "Jack Jenkins",

        result: null,

        method: null,
      },

      odds: "+134",

      units: 0,
    },

    /* ---------- Around The World ---------- */

    aroundTheWorld: {
      title: "Around The World",
      slug: "around-the-world",
      description: "",

      picks: [
        {
          country: "Brazil",
          fighter: "Andre Lima",
          result: null,
        },

        {
          country: "Japan",
          fighter: "Kai Asakura",
          result: null,
        },

        {
          country: "Russia",
          fighter: "Umar Nurmagomedov",
          result: null,
        },
      ],

      parlayOdds: "+102",

      result: null,

      units: 0,
    },

    /* ---------- All Action ---------- */

    allAction: {
      title: "All Action Parlay",
      slug: "all-action",
      description: "",

      picks: [
        {
          fighter: "Lawrence Lui",
          method: "",
          result: null,
        },
        {
          fighter: "Andre Lima",
          method: "",
          result: null,
        },
      ],

      parlayOdds: "-121",

      result: null,

      units: 0,
    },
  },

  /* ==========================================
     PUBLISHING
  ========================================== */

  published: {
    homepage: false,

    youtube: true,

    social: false,
  },

  /* ==========================================
     EVENT RESULTS
  ========================================== */

  results: {
    completed: false,

    completedAt: null,

    notes: "",
  },
};

export default ufcNurmagomedovVsYadong;
