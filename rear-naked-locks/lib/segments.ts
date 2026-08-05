import { getCurrentEvent } from "@/lib/events";

/* ==========================================
   CURRENT EVENT
========================================== */

export function getCurrentSegments() {
  return getCurrentEvent()?.segments;
}

/* ==========================================
   INDIVIDUAL PICKS
========================================== */

export function getCurrentPicks() {
  return getCurrentEvent()?.segments.picks;
}

/* ==========================================
   PLAY OF THE WEEK
========================================== */

export function getPlayOfTheWeek() {
  return getCurrentEvent()?.segments.playOfTheWeek;
}

/* ==========================================
   BARK ALLEY
========================================== */

export function getBarkAlley() {
  return getCurrentEvent()?.segments.barkAlley;
}

/* ==========================================
   AROUND THE WORLD
========================================== */

export function getAroundTheWorld() {
  return getCurrentEvent()?.segments.aroundTheWorld;
}

/* ==========================================
   ALL ACTION
========================================== */

export function getAllAction() {
  return getCurrentEvent()?.segments.allAction;
}

/* ==========================================
   GET SEGMENT BY SLUG
========================================== */

export function getSegment(slug: string) {
  const segments = getCurrentEvent()?.segments;

  if (!segments) return null;

  return Object.values(segments).find(
    (segment: any) => segment?.slug === slug
  );
}

export function getAllSegments() {
  const segments = getCurrentEvent()?.segments;

  if (!segments) return [];

  return Object.values(segments).filter(
    (segment: any) => segment?.slug
  );
}