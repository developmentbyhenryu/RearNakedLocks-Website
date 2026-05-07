import Image from "next/image";

const bets = [
  {
    title: "Play of the Week",
    image: "/bets/play-of-week.jpg",
  },
  {
    title: "Bark Alley Bangers",
    image: "/bets/bark-alley.jpg",
  },
  {
    title: "Around the World",
    image: "/bets/around-world.jpg",
  },
  {
    title: "All Action Parlay",
    image: "/bets/all-action.jpg",
  },
];

export default function WeeklyBets() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-14">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
          Weekly Betting Segments
        </p>

        <h2 className="text-4xl uppercase tracking-tight text-white md:text-5xl">
          Featured Bets
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {bets.map((bet) => (
          <div
            key={bet.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] transition duration-500 hover:-translate-y-2 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10"
          >
            <div className="relative h-[260px] sm:h-[320px] w-full overflow-hidden">
              <Image
                src={bet.image}
                alt={bet.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent p-6" />
            </div>

            <div className="absolute bottom-0 left-0 p-6">
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-400">
                Rear Naked Locks
              </p>

              <h3 className="mb-4 text-3xl uppercase text-white">
                {bet.title}
              </h3>

              <button className="rounded-full bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-500">
                View Picks
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}