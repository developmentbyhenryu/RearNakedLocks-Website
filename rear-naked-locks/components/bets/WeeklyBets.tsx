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
    <section className="bg-black py-14 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mb-10 sm:mb-14">
          <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-red-500 sm:text-[11px]">
            Weekly Betting Segments
          </p>

          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured Bets
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {bets.map((bet) => (
            <div
              key={bet.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] transition duration-300 hover:border-red-500/30"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* IMAGE */}
                <Image
                  src={bet.image}
                  alt={bet.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  {/* TOP ROW */}
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-red-400 sm:text-[11px]">
                      Rear Naked Locks
                    </p>

                    <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      {bet.odds}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-4 text-xl font-black uppercase leading-none text-white sm:text-2xl md:text-4xl">
                    {bet.title}
                  </h3>

                  {/* BUTTON */}
                  <button
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-red-500/30
                      bg-red-600
                      px-5
                      py-2.5
                      text-[11px]
                      font-black
                      uppercase
                      tracking-[0.15em]
                      text-white
                      transition-all
                      duration-300
                      hover:bg-red-500
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