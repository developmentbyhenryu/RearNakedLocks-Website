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
        {/* PICKS */}

        {event.individualPicks && (
          <>
            {/* HENRY */}

            <section className="mt-16">
              <h2 className="mb-8 text-4xl font-black uppercase">
                Henry's Picks
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {event.individualPicks.henry.map(
                  (pick) => (
                    <div
                      key={pick.fighter}
                      className="rounded-3xl border border-white/10 bg-[#0d1117] p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                        Pick
                      </p>

                      <h3 className="mt-3 text-2xl font-black">
                        {pick.fighter}
                      </h3>

                      <div className="mt-5 flex justify-between">
                        <span className="text-gray-400">
                          Odds
                        </span>

                        <span>
                          {pick.odds}
                        </span>
                      </div>

                      <div className="mt-3 flex justify-between">
                        <span className="text-gray-400">
                          Confidence
                        </span>

                        <span>
                          {pick.confidence}/10
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* CHATO */}

            <section className="mt-16">
              <h2 className="mb-8 text-4xl font-black uppercase">
                Chato's Picks
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {event.individualPicks.chato.map(
                  (pick) => (
                    <div
                      key={pick.fighter}
                      className="rounded-3xl border border-white/10 bg-[#0d1117] p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
                        Pick
                      </p>

                      <h3 className="mt-3 text-2xl font-black">
                        {pick.fighter}
                      </h3>

                      <div className="mt-5 flex justify-between">
                        <span className="text-gray-400">
                          Odds
                        </span>

                        <span>
                          {pick.odds}
                        </span>
                      </div>

                      <div className="mt-3 flex justify-between">
                        <span className="text-gray-400">
                          Confidence
                        </span>

                        <span>
                          {pick.confidence}/10
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* CONSENSUS */}

            <section className="mt-16">
              <h2 className="mb-8 text-4xl font-black uppercase">
                Consensus Plays
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {consensusPicks.map(
                  (pick) => (
                    <div
                      key={pick.fighter}
                      className="rounded-3xl border border-green-500/20 bg-[#0d1117] p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.35em] text-green-400">
                        Consensus
                      </p>

                      <h3 className="mt-3 text-2xl font-black">
                        {pick.fighter}
                      </h3>

                      <div className="mt-5 flex justify-between">
                        <span className="text-gray-400">
                          Odds
                        </span>

                        <span>
                          {pick.odds}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
          </>
        )}

        {/* OFFICIAL SEGMENTS */}

        <section className="mt-20">
          <h2 className="mb-8 text-4xl font-black uppercase">
            Official Betting Segments
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 p-6">
              <h3 className="font-black">
                Play of the Week
              </h3>

              <p className="mt-3 text-gray-300">
                {event.officialPicks.playOfTheWeek.henryPick}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-6">
              <h3 className="font-black">
                Bark Alley Banger
              </h3>

              <p className="mt-3 text-gray-300">
                {event.officialPicks.barkAlley.fighter}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}