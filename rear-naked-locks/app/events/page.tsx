import FeaturedEventCard from "@/components/events/FeaturedEventCard";
import EventCard from "@/components/events/EventCard";
import { events } from "@/data/events";

export default function EventsPage() {
  const featuredEvent = events[0];

  const remainingEvents = events.slice(1);

  return (
    <main className="bg-black text-white">
      <div className="px-6 py-12 md:px-10 xl:px-14">
        {/* HERO */}
        <section>
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">
            UFC Event Hub
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase tracking-tight md:text-7xl">
            Events
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Full UFC betting coverage including official picks,
            breakdown videos, analytics, and event results.
          </p>
        </section>

        {/* FEATURED EVENT */}
        <section className="mt-14">
          <FeaturedEventCard event={featuredEvent} />
        </section>

        {/* EVENT GRID */}
        <section className="mt-16">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Fight Calendar
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              All Events
            </h2>
          </div>

          {/* <div className="grid gap-8 lg:grid-cols-2">
            {remainingEvents.map((event) => (
              <EventCard
                key={event.slug}
                event={event}
              />
            ))}
          </div> */}
        </section>
      </div>
    </main>
  );
}