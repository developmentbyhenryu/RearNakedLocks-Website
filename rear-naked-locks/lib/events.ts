import { events } from "@/data/events";

export function getCurrentEvent() {
  return events.find(
    (event) => event.status === "upcoming"
  );
}

export function getCompletedEvents() {
  return events.filter(
    (event) => event.status === "completed"
  );
}

export function getUpcomingEvents() {
  return events.filter(
    (event) => event.status === "upcoming"
  );
}

export function getEventBySlug(slug: string) {
  return events.find(
    (event) => event.slug === slug
  );
}