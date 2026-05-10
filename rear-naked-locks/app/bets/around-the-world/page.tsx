import Image from "next/image";
import Link from "next/link";
import CountryTracker from "@/components/stats/CountryTracker";


export default function AroundTheWorldPage() {
  return (
    <main className="min-h-screen bg-black text-white">
    {/* TOP NAV */}
<div className="border-b border-white/10">
  <div className="mx-auto flex max-w-7xl items-center px-6 py-4 md:px-10">
    <Link
      href="/"
      className="
        inline-flex
        items-center
        gap-2
        text-sm
        font-black
        uppercase
        tracking-wide
        text-gray-300
        transition-all
        duration-300
        hover:text-red-500
      "
    >
      ← Back Home
    </Link>
  </div>
</div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-red-500">
                Weekly Betting Segment
              </p>

              <h1 className="text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl md:text-7xl">
                Around The
                <br />
                World
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                International underdogs, overlooked matchups,
                value plays, and chaos picks from across the MMA world.
                This is where the weird money gets made.
              </p>

              {/* STATS */}
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Record
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    14-6
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Units
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-green-400">
                    +11.2
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-4 col-span-2 md:col-span-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    ROI
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    +22%
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/bets/around-world.jpg"
                alt="Around The World"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                  Rear Naked Locks
                </p>

                <h2 className="mt-3 text-4xl font-black uppercase leading-none md:text-5xl">
                  Global
                  <br />
                  Violence
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT PICKS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              UFC 328
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Current Picks
            </h2>
          </div>

          <div className="hidden rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-bold text-green-400 md:block">
            3 Active Plays
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* CARD 1 */}
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/fighters/topuria.jpg"
                alt="Fighter1"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

             
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-red-500">
                Country 1
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase leading-none">
                Fighter 1
                <br />
                ML
              </h3>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Confidence
                  </p>

                  <p className="text-xl font-black text-white">
                    High
                  </p>
                </div>

                <button className="rounded-full bg-red-600 px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-500">
                  View Breakdown
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/fighters/chimaev.jpg"
                alt="Fighter2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-red-500">
                Country 2
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase leading-none">
                Fighter 2
                <br />
                ML
              </h3>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Confidence
                  </p>

                  <p className="text-xl font-black text-white">
                    Medium
                  </p>
                </div>

                <button className="rounded-full border border-white/10 px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:border-red-500/40 hover:bg-white/5">
                  Analysis
                </button>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/fighters/oliveira.jpg"
                alt="Oliveira"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-red-500">
                Country 3
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase leading-none">
                Fighter 3
                <br />
                ML
              </h3>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Confidence
                  </p>

                  <p className="text-xl font-black text-white">
                    Wild
                  </p>
                </div>

                <button className="rounded-full border border-white/10 px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:border-red-500/40 hover:bg-white/5">
                  Breakdown
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CountryTracker />

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">
            Join The Community
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
            More Violence.
            <br />
            More Profit.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Follow Rear Naked Locks for weekly betting cards,
            fight breakdowns, parlays, and pure MMA degeneracy.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://youtube.com"
              className="rounded-full bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-500"
            >
              Watch On YouTube
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white/10 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:border-red-500/40 hover:bg-white/5"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}