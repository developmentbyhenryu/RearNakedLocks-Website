export default function FeaturedEvent() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
          Upcoming UFC Event
        </p>

        <h2 className="text-4xl uppercase text-white md:text-5xl">
          UFC 317
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
              Main Event
            </p>

            <h3 className="mb-6 text-4xl uppercase leading-none sm:text-5xl text-white">
              Topuria <br /> vs Oliveira
            </h3>

            <p className="mb-8 text-lg text-gray-300">
              Full breakdowns, betting analysis, and predictions for UFC 317.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500">
                View Breakdown
              </button>

              <button className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40">
                View Bets
              </button>
            </div>
          </div>

          <div
  className="min-h-[350px] bg-cover bg-center"
  style={{
    backgroundImage: "url('/events/ufc-328.jpg')",
  }}
/>
        </div>
      </div>
    </section>
  );
}