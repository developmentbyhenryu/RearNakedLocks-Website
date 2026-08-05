export type Result = "win" | "loss" | "push" | null;

export interface Fighter {
  name: string;
  country: string;
  image: string;
  record: string;
}

export interface Pick {
  fighter: string;
  odds: string;
  confidence: number;
  result: Result;
}

export interface PlayPick {
  fighter: string;
  result: Result;
}

export interface BarkAlleyPick {
  fighter: string;
  result: Result;
  method: string | null;
}

export interface AroundTheWorldPick {
  country: string;
  fighter: string;
  result: Result;
}

export interface AllActionPick {
  fighter: string;
  method: string;
  result: Result;
}

export interface Event {
  /* =========================
     BASIC INFO
  ========================= */

  slug: string;
  event: string;
  shortName: string;
  date: string;
  venue: string;
  location: string;

  status: "draft" | "upcoming" | "live" | "completed";

  version: number;

  /* =========================
     MEDIA
  ========================= */

  media: {
    poster: string;
    banner: string;
    thumbnail: string;

    video: {
      youtubeId: string;
      title: string;
    };
  };

  /* =========================
     FEATURED FIGHTS
  ========================= */

  fights: {
    mainEvent: {
      fighterA: Fighter;
      fighterB: Fighter;
      weightClass: string;
      rounds: number;
    };

    coMainEvent: {
      fighterA: Fighter;
      fighterB: Fighter;
      weightClass: string;
      rounds: number;
    };
  };

  /* =========================
     SEGMENTS
  ========================= */

  segments: {
    picks: {
      henry: Pick[];
      chato: Pick[];
    };

    playOfTheWeek: {
      slug: string;
      title: string;
      description: string;

      henry: PlayPick;
      chato: PlayPick;

      parlayOdds: string;

      result: Result;

      units: number;
    };

    barkAlley: {
      slug: string;
      title: string;
      description: string;

      pick: BarkAlleyPick;

      odds: string;

      units: number;
    };

    aroundTheWorld: {
      slug: string;
      title: string;
      description: string;

      picks: AroundTheWorldPick[];

      parlayOdds: string;

      result: Result;

      units: number;
    };

    allAction: {
      slug: string;
      title: string;
      description: string;

      picks: AllActionPick[];

      parlayOdds: string;

      result: Result;

      units: number;
    };
  };

  /* =========================
     PUBLISHING
  ========================= */

  published: {
    homepage: boolean;
    youtube: boolean;
    social: boolean;
  };

  /* =========================
     RESULTS
  ========================= */

  results: {
    completed: boolean;
    completedAt: string | null;
    notes: string;
  };
}