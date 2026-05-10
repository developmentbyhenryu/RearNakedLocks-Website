import Image from "next/image";

const bets = [
  {
    title: "Play of the Week",
    image: "/bets/play-of-week.jpg",
    odds: "-101",
  },
  {
    title: "Bark Alley Bangers",
    image: "/bets/bark-alley.jpg",
    odds: "+225",
  },
  {
    title: "Around the World",
    image: "/bets/around-world.jpg",
    odds: "+106",
  },
  {
    title: "All Action Parlay",
    image: "/bets/all-action.jpg",
    odds: "+102",
  },
];

export default function WeeklyBets() {
  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mb-14">
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-red-500">
            Weekly Betting Segments
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            Featured Bets
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          {bets.map((bet) => (
            <div
              key={bet.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] transition duration-300 hover:border-red-500/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* IMAGE */}
                <Image
                  src={bet.image}
                  alt={bet.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 sm:px-8">
                  {/* TOP ROW */}
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-red-400">
                      Rear Naked Locks
                    </p>

                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-sm font-bold text-white backdrop-blur-sm">
                      {bet.odds}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-5 text-xl font-black uppercase leading-none text-white sm:text-2xl md:text-5xl">
                    {bet.title}
                  </h3>

                  {/* BUTTON */}
                  <button
                    className="
                      inline-flex
                      h-10
                      min-w-[120px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-red-500/30
                      bg-red-600
                      px-5
                      text-xs
                      font-black
                      uppercase
                      tracking-wide
                      text-white
                      shadow-lg
                      shadow-red-900/30
                      transition-all
                      duration-300
                      hover:bg-red-500
                      whitespace-nowrap
                      leading-none
                    "
                  >
                    View Picks
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}