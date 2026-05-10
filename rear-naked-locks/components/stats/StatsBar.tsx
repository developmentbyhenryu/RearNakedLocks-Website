export default function StatsBar() {
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
    <section className="py-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rnl-stat-card"
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-400">
              {stat.label}
            </p>

            <h3 className="text-4xl font-black tracking-tight text-white">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}