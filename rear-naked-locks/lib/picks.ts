import { getCurrentEvent } from "./events";

export function getPlayOfTheWeek() {
  return getCurrentEvent()?.officialPicks.playOfTheWeek;
}

export function getBarkAlley() {
  return getCurrentEvent()?.officialPicks.barkAlley;
}

export function getAroundTheWorld() {
  return getCurrentEvent()?.officialPicks.aroundTheWorld;
}

export function getAllAction() {
  return getCurrentEvent()?.officialPicks.allAction;
}