import { getCurrentEvent } from "./events";

export function getPlayOfTheWeek() {
  const event = getCurrentEvent();

  if (!event) return null;

  return {
    event: event.event,
    ...event.segments.playOfTheWeek,
  };
}

export function getBarkAlley() {
  const event = getCurrentEvent();

  if (!event) return null;

  return {
    event: event.event,
    ...event.segments.barkAlley,
  };
}

export function getAroundTheWorld() {
  const event = getCurrentEvent();

  if (!event) return null;

  return {
    event: event.event,
    ...event.segments.aroundTheWorld,
  };
}

export function getAllAction() {
  const event = getCurrentEvent();

  if (!event) return null;

  return {
    event: event.event,
    ...event.segments.allAction,
  };
}