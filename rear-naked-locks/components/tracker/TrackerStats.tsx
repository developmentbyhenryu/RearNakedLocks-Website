const stats = [
  {
    label: "Overall Record",
    value: "42-18",
  },
  {
    label: "Units Won",
    value: "+18.4",
  },
  {
    label: "ROI",
    value: "+14%",
  },
  {
    label: "Parlays Hit",
    value: "12",
  },
];

export default function TrackerStats() {
  return (
    <section className="border-y border-white/10 bg-[var(--card)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-black/30 p-7"
          >
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-400">
              {stat.label}
            </p>

            <h3 className="text-3xl text-white sm:text-4xl">
  {stat.value}
</h3>
          </div>
        ))}
      </div>
    </section>
  );
}