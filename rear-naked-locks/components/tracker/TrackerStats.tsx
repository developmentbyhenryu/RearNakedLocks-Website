export default function TrackerStats() {
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

  return (
    <section className="border-b border-white/10 bg-black py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-[var(--card)] p-7 transition duration-300 hover:border-red-500/30"
          >
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gray-400">
              {stat.label}
            </p>

            <h3 className="text-5xl font-black tracking-tight text-white">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}