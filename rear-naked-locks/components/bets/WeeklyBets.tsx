import Image from "next/image";
import Link from "next/link";

const bets = [
  {
    title: "Play of the Week",
    image: "/bets/play-of-week.jpeg",
    link: "/bets/play-of-the-week",
  },
  {
    title: "Bark Alley Bangers",
    image: "/bets/bark-alley.jpeg",
    link: "/bets/bark-alley-bangers",
  },
  {
    title: "Around the World",
    image: "/bets/around-world.jpeg",
    link: "/bets/around-the-world",
  },
  {
    title: "All Action Parlay",
    image: "/bets/all-action.jpeg",
    link: "/bets/all-action",
  },
];

export default function WeeklyBets() {
  return (
    <section
  id="weekly-bets"
  className="rnl-section"
>
      {/* HEADER */}
      <div className="mb-10 sm:mb-14">
        <p className="rnl-label">
          Weekly Betting Segments
        </p>

        <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
          Featured Bets
        </h2>
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {bets.map((bet) => (
          <div
            key={bet.title}
            className="rnl-card group overflow-hidden transition duration-300 hover:border-red-500/30"
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
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                {/* TOP */}
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-red-400 sm:text-[11px]">
                    Rear Naked Locks
                  </p>

                 
                </div>

                {/* TITLE */}
                <h3 className="max-w-[85%] text-2xl font-black uppercase leading-none text-white sm:text-3xl md:text-5xl">
                  {bet.title}
                </h3>

                {/* BUTTON */}
                <div className="mt-4">
                  <Link
  href={bet.link}
  className="rnl-button"
>
  View Picks
</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}