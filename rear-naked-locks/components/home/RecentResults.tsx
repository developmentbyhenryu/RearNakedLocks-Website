import Link from "next/link";
import { eventResults } from "@/data/eventResults";

export default function RecentResults() {
  const recent = [...eventResults]
  .reverse()
  .slice(0, 5);

  return (
    <section className="rnl-section">
      <div className="mb-10">
        <p className="rnl-label">
          Betting Ledger
        </p>

        <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
          Recent Results
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117]">
        {recent.map((result) => (
          <div
            key={result.event}
            className="flex items-center justify-between border-b border-white/5 px-6 py-5 last:border-none"
          >
            <div>
              <p className="font-bold text-white">
                {result.event}
              </p>

              <p
                className={`mt-1 text-xs font-black uppercase ${
                  result.result === "win"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {result.result}
              </p>
            </div>

            <div
              className={`text-xl font-black ${
                result.units >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {result.units > 0 ? "+" : ""}
              {result.units}u
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/tracker"
          className="rnl-button"
        >
          View Full Tracker
        </Link>
      </div>
    </section>
  );
}