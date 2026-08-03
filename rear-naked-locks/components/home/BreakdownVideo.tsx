export default function BreakdownVideo() {
  return (
    <section
      id="video-breakdown"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-[#0d1117]">
          {/* HEADER */}
          <div className="border-b border-white/10 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Official Breakdown
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Watch The Breakdown
            </h2>

            <p className="mt-4 max-w-2xl text-gray-300">
              Full UFC betting breakdown including matchup
              analysis, betting logic, parlays, underdogs,
              and weekly picks from Rear Naked Locks.
            </p>
          </div>

          {/* VIDEO */}
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/0y7YA7TngfY?si=yVaKdxJKRxsb6ysa"
              title="Rear Naked Locks Breakdown"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}