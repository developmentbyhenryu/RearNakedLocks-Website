const eventTemplate = {
  /* ==========================================
     BASIC EVENT INFO
  ========================================== */

  slug: "",

  event: "",

  shortName: "",

  date: "",

  venue: "",

  location: "",

  status: "upcoming",

  version: 2,

  /* ==========================================
     MEDIA
  ========================================== */

  media: {
    poster: "",

    banner: "",

    video: {
      youtubeId: "",

      title: "",
    },
  },

  /* ==========================================
     FEATURED FIGHTS
  ========================================== */

  fights: {
    mainEvent: {
      fighterA: {
        name: "",

        country: "",

        image: "",

        record: "",
      },

      fighterB: {
        name: "",

        country: "",

        image: "",

        record: "",
      },

      weightClass: "",

      rounds: 5,
    },

    coMainEvent: {
      fighterA: {
        name: "",

        country: "",

        image: "",

        record: "",
      },

      fighterB: {
        name: "",

        country: "",

        image: "",

        record: "",
      },

      weightClass: "",

      rounds: 3,
    },
  },

  /* ==========================================
     BETTING SEGMENTS
  ========================================== */

  segments: {
    /* ---------- Individual Picks ---------- */

    picks: {
      henry: [],

      chato: [],
    },

    /* ---------- Play Of The Week ---------- */

    playOfTheWeek: {
      title: "Play Of The Week",

      description: "",

      henry: {
        fighter: "",

        result: null,
      },

      chato: {
        fighter: "",

        result: null,
      },

      parlayOdds: "",

      result: null,

      units: 0,
    },

    /* ---------- Bark Alley ---------- */

    barkAlley: {
      title: "Bark Alley",

      description: "",

      pick: {
        fighter: "",

        result: null,

        method: null,
      },

      odds: "",

      units: 0,
    },

    /* ---------- Around The World ---------- */

    aroundTheWorld: {
      title: "Around The World",

      description: "",

      picks: [],

      parlayOdds: "",

      result: null,

      units: 0,
    },

    /* ---------- All Action ---------- */

    allAction: {
      title: "All Action Parlay",

      description: "",

      picks: [],

      parlayOdds: "",

      result: null,

      units: 0,
    },
  },

  /* ==========================================
     PUBLISHING
  ========================================== */

  published: {
    homepage: false,

    youtube: false,

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

export default eventTemplate;