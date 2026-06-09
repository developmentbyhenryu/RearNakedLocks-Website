import Button from "../ui/Button";
export default function FeaturedEvent() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
          Upcoming UFC Event
        </p>

        <h2 className="text-4xl uppercase text-white md:text-5xl">
          UFC Song VS Figueiredo
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
              Current Event
            </p>

            <h3 className="mb-6 text-4xl uppercase leading-none sm:text-5xl text-white">
              Topuria <br /> vs Gaethje
            </h3>

            <p className="mb-8 text-lg text-gray-300">
              Full breakdowns, betting analysis, and predictions for UFC Freedom 250.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
  <a href="#video-breakdown">
    <Button>
      Watch Breakdown
    </Button>
  </a>

  <a href="/events/ufc-freedom-250">
    <Button variant="secondary">
      View Picks
    </Button>
  </a>
</div>
          </div>

          <div
  className="min-h-[350px] bg-cover bg-center"
  style={{
    backgroundImage: "url('/events/poster.jpg')",
  }}
/>
        </div>
      </div>
    </section>

    
    
  );
}