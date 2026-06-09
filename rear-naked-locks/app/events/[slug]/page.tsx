import { notFound } from "next/navigation";
import { events } from "@/data/events";
import EventPicks from "@/components/events/EventPicks";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find(
    (event) => event.slug === slug
  );

  if (!event) {
    notFound();
  }

  const consensusPicks =
    event.individualPicks
      ? event.individualPicks.henry.filter(
          (henryPick) =>
            event.individualPicks.chato.some(
              (chatoPick) =>
                chatoPick.fighter ===
                henryPick.fighter
            )
        )
      : [];

  return (
    <main className="bg-black text-white">
      <div className="px-6 py-12 md:px-10 xl:px-14">

        {/* HERO */}

        <section>
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">
            Event Breakdown
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase md:text-7xl">
            {event.name}
          </h1>

          <p className="mt-4 text-xl text-gray-300">
            {event.mainEvent.fighterA.name} vs{" "}
            {event.mainEvent.fighterB.name}
          </p>

          <p className="mt-3 text-gray-500">
            {event.date} • {event.location}
          </p>
        </section>

{event.individualPicks && (
  <EventPicks
    henry={event.individualPicks.henry}
    chato={event.individualPicks.chato}
  />
)}
  {/* OFFICIAL SEGMENTS */}

<section className="mt-20">
  <h2 className="mb-8 text-4xl font-black uppercase">
    Official Betting Segments
  </h2>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    {/* PLAY OF THE WEEK */}

    <div className="flex h-full flex-col rounded-3xl border border-green-500/30 bg-[#0d1117] p-6">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-green-400">
        🔥 Play of the Week
      </p>

      <div className="mt-6">
        <p className="text-sm text-gray-400">
          Henry
        </p>

        <h3 className="text-2xl font-black">
          {event.officialPicks.playOfTheWeek.henryPick}
        </h3>
      </div>

      <div className="mt-5">
        <p className="text-sm text-gray-400">
          Chato
        </p>

        <h3 className="text-2xl font-black">
          {event.officialPicks.playOfTheWeek.chatoPick}
        </h3>
      </div>

      <div className="mt-auto border-t border-white/10 pt-4">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Odds
        </p>

        <p className="mt-2 text-xl font-black text-green-400">
          {event.officialPicks.playOfTheWeek.odds}
        </p>
      </div>
    </div>

    {/* BARK ALLEY */}

    <div className="flex h-full flex-col rounded-3xl border border-orange-500/30 bg-[#0d1117] p-6">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-400">
        🐶 Bark Alley Banger
      </p>

      <h3 className="mt-6 text-3xl font-black">
        {event.officialPicks.barkAlley.fighter}
      </h3>

      <p className="mt-3 text-sm text-gray-500">
        Official Underdog Play
      </p>

      <div className="mt-auto border-t border-white/10 pt-4">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Odds
        </p>

        <p className="mt-2 text-xl font-black text-orange-400">
          {event.officialPicks.barkAlley.odds}
        </p>
      </div>
    </div>

    {/* AROUND THE WORLD */}

    <div className="flex h-full flex-col rounded-3xl border border-blue-500/30 bg-[#0d1117] p-6">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">
        🌎 Around The World
      </p>

      <div className="mt-6 space-y-4">
        {event.officialPicks.aroundTheWorld.countries.map(
          (pick) => (
            <div key={pick.fighter}>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                {pick.country}
              </p>

              <h3 className="font-bold">
                {pick.fighter}
              </h3>
            </div>
          )
        )}
      </div>

      <div className="mt-auto border-t border-white/10 pt-4">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Parlay Odds
        </p>

        <p className="mt-2 text-xl font-black text-blue-400">
          {event.officialPicks.aroundTheWorld.parlayOdds}
        </p>
      </div>
    </div>

    {/* ALL ACTION */}

    <div className="flex h-full flex-col rounded-3xl border border-red-500/30 bg-[#0d1117] p-6">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-red-400">
        💥 All Action Parlay
      </p>

      <div className="mt-6 space-y-4">
        {event.officialPicks.allAction.legs.map(
          (leg) => (
            <div key={leg.fighter}>
              <h3 className="font-bold">
                {leg.fighter}
              </h3>

              <p className="text-sm text-gray-500">
                {"method" in leg ? leg.method : ""}
                </p>
            </div>
          )
        )}
      </div>

      <div className="mt-auto border-t border-white/10 pt-4">
        <p className="text-xs uppercase tracking-widest text-gray-500">
          Parlay Odds
        </p>

        <p className="mt-2 text-xl font-black text-red-400">
          {event.officialPicks.allAction.parlayOdds}
        </p>
      </div>
    </div>

  </div>
</section>
      </div>
    </main>
  );
}