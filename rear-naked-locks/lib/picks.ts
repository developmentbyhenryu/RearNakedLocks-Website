import { getCurrentEvent } from "./events";

export function getPlayOfTheWeek() {
  return getCurrentEvent()?.segments.playOfTheWeek;
}

export function getBarkAlley() {
  return getCurrentEvent()?.segments.barkAlley;
}

export function getAroundTheWorld() {
  return getCurrentEvent()?.segments.aroundTheWorld;
}

export function getAllAction() {
  return getCurrentEvent()?.segments.allAction;
}