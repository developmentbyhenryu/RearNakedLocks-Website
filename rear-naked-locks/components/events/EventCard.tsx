import Image from "next/image";
import Link from "next/link";

export default function EventCard({
  event,
}: any) {
  return (
    <Link href={`/events/${event.slug}`}>
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] transition duration-300 hover:scale-[1.02] hover:border-red-500/30">
        <div className="relative h-[280px] overflow-hidden">
          <Image
            src={event.poster}
            alt={event.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-red-400">
              {event.status}
            </p>

            <h3 className="mt-3 text-4xl font-black uppercase leading-none text-white">
              {event.shortName}
            </h3>

            <p className="mt-3 text-gray-300">
                {event.mainEvent.fighterA.name} vs{" "}
                {event.mainEvent.fighterB.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}