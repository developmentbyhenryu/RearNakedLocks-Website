import React from "react";

type Pick = {
  fighter: string;
  odds: string;
  confidence: number;
};

const getConfidenceStyle = (
  confidence: number
) => {
  if (confidence >= 9) {
    return {
      border: "border-green-500/40",
      badge: "LOCK",
      badgeColor: "text-green-400",
    };
  }

  if (confidence >= 7) {
    return {
      border: "border-blue-500/40",
      badge: "CONFIDENT",
      badgeColor: "text-blue-400",
    };
  }

  if (confidence === 6) {
    return {
      border: "border-yellow-500/40",
      badge: "LEAN",
      badgeColor: "text-yellow-400",
    };
  }

  return {
    border: "border-red-500/30",
    badge: "LOW CONFIDENCE",
    badgeColor: "text-red-400",
  };
};

export default function EventPicks({
  henry,
  chato,
}: {
  henry: Pick[];
  chato: Pick[];
}) {
  return (
    <section className="mt-16">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-red-500">
          Official Card Picks
        </p>

        <h2 className="mt-3 text-4xl font-black uppercase">
          Henry vs Chato
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* HENRY PICKS */}
        <div>
          <h3 className="mb-6 text-2xl font-black">
            Henry's Picks
          </h3>

          <div className="space-y-4">
            {henry.map((pick) => {
              const style = getConfidenceStyle(
                pick.confidence
              );

              return (
                <div
                  key={pick.fighter}
                  className={`rounded-3xl border ${style.border} bg-[#0d1117] p-5 transition duration-300`}
                >
                  <p
                    className={`text-xs font-black uppercase tracking-[0.3em] ${style.badgeColor}`}
                  >
                    {style.badge}
                  </p>

                  <h4 className="mt-3 text-xl font-black">
                    {pick.fighter}
                  </h4>

                  <div className="mt-4 flex justify-between text-sm">
                    <span className="text-gray-400">
                      Odds
                    </span>

                    <span>{pick.odds}</span>
                  </div>

                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-gray-400">
                      Confidence
                    </span>

                    <span>
                      {pick.confidence}/10
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CHATO PICKS */}
        <div>
          <h3 className="mb-6 text-2xl font-black">
            Chato's Picks
          </h3>

          <div className="space-y-4">
            {chato.map((pick) => {
              const style = getConfidenceStyle(
                pick.confidence
              );

              return (
                <div
                  key={pick.fighter}
                  className={`rounded-3xl border ${style.border} bg-[#0d1117] p-5 transition duration-300`}
                >
                  <p
                    className={`text-xs font-black uppercase tracking-[0.3em] ${style.badgeColor}`}
                  >
                    {style.badge}
                  </p>

                  <h4 className="mt-3 text-xl font-black">
                    {pick.fighter}
                  </h4>

                  <div className="mt-4 flex justify-between text-sm">
                    <span className="text-gray-400">
                      Odds
                    </span>

                    <span>{pick.odds}</span>
                  </div>

                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-gray-400">
                      Confidence
                    </span>

                    <span>
                      {pick.confidence}/10
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}