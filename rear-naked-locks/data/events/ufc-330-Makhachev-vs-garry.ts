import type { Event } from "@/types/event";

const ufc330MakhachevVsGarry: Event = {
  /* ==========================================
     BASIC EVENT INFO
  ========================================== */

  slug: "ufc-330-Makhachev-vs-garry",

  event: "UFC 330: Makhachev vs Garry",

  shortName: "Makhachev vs Garry",
  date: "August 15, 2026",

  venue: "Xfinity Mobile Arena",

  location: "Philadelphia, Pennsylvania, USA",

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

      title: "Everyone's Betting Salkilld... Here's Why We're Fading Him",
    },
  },

  /* ==========================================
     FEATURED FIGHTS
  ========================================== */

  fights: {
    mainEvent: {
      fighterA: {
        name: "Islam Makhachev",

        country: "Russia",

        image: "",

        record: "28-1",
      },

      fighterB: {
        name: "Ian Machado Garry",

        country: "Ireland",

        image: "",

        record: "17-1",
      },

      weightClass: "Welterweight",

      rounds: 5,
    },

    coMainEvent: {
      fighterA: {
        name: "Mackenzie Dern",

        country: "Brazil",

        image: "",

        record: "16-5",
      },

      fighterB: {
        name: "Gillian Robertson",

        country: "Canada",

        image: "",

        record: "17-8",
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
          fighter: "Ian Machado Garry",
          odds: "+280",
          confidence: 7,
          result: null,
        },
        {
          fighter: "Gillian Robertson",
          odds: "+186",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Eduardo Henrique",
          odds: "+105",
          confidence: 7,
          result: null,
        },
        {
          fighter: "Mansur Abdul Malik",
          odds: "-530",
          confidence: 8,
          result: null,
        },
        {
          fighter: "Esteban Ribovics",
          odds: "-520",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Jalin Turner",
          odds: "-172",
          confidence: 8,
          result: null,
        },
        {
          fighter: "Joel Alvarez",
          odds: "-280",
          confidence: 9,
          result: null,
        },
        {
          fighter: "Tresean Gore",
          odds: "-154",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Donte Johnson",
          odds: "-230",
          confidence: 4,
          result: null,
        },
        {
          fighter: "Lucas Fernando",
          odds: "-310",
          confidence: 7,
          result: null,
        },
        {
          fighter: "Ramiz Brahimaj",
          odds: "-128",
          confidence: 8,
          result: null,
        },
        {
          fighter: "Myktybek Oralbai",
          odds: "-900",
          confidence: 10,
          result: null,
        },
      ],

      chato: [
                {
          fighter: "Ian Machado Garry",
          odds: "+280",
          confidence: 7,
          result: null,
        },
        {
          fighter: "Gillian Robertson",
          odds: "+186",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Charles Johnson",
          odds: "-125",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Mansur Abdul Malik",
          odds: "-530",
          confidence: 8,
          result: null,
        },
        {
          fighter: "Esteban Ribovics",
          odds: "-520",
          confidence: 10,
          result: null,
        },
        {
          fighter: "Jalin Turner",
          odds: "-172",
          confidence: 10,
          result: null,
        },
        {
          fighter: "Joel Alvarez",
          odds: "-280",
          confidence: 10,
          result: null,
        },
        {
          fighter: "Tresean Gore",
          odds: "-154",
          confidence: 8,
          result: null,
        },
        {
          fighter: "Donte Johnson",
          odds: "-230",
          confidence: 6,
          result: null,
        },
        {
          fighter: "Lucas Fernando",
          odds: "-310",
          confidence: 7,
          result: null,
        },
        {
          fighter: "Ramiz Brahimaj",
          odds: "-128",
          confidence: 7,
          result: null,
        },
        {
          fighter: "Myktybek Oralbai",
          odds: "-900",
          confidence: 10,
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
        fighter: "Ian Machado Garry",

        result: null,

        method: null,
      },

      odds: "+255",

      units: 0,
    },

    /* ---------- Around The World ---------- */

    aroundTheWorld: {
      title: "Around The World",
      slug: "around-the-world",
      description: "",

      picks: [
        {
          country: "Argentina",
          fighter: "Esteban Ribovics",
          result: null,
        },

        {
          country: "USA",
          fighter: "Jalin Turner",
          result: null,
        },

        {
          country: "Spain",
          fighter: "Joel Alvarez",
          result: null,
        },
      ],

      parlayOdds: "+142",

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
          fighter: "Joel Alvarez",
          method: "",
          result: null,
        },
        {
          fighter: "Ramiz Brahimaj",
          method: "",
          result: null,
        },
      ],

      parlayOdds: "+130",

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

export default ufc330MakhachevVsGarry;