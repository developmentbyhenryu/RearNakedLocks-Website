import Image from "next/image";
import Link from "next/link";

export default function FeaturedEventCard({
  event,
}: any) {
  return (
    <Link href={`/events/${event.slug}`}>
      <div className="group overflow-hidden rounded-3xl border border-red-500/20 bg-[#0d1117] transition duration-300 hover:scale-[1.01] hover:border-red-500/40">
        <div className="relative h-[420px] overflow-hidden">
          <Image
            src={event.media.banner}
            alt={event.event}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-red-400">
              Featured Event
            </p>

            <h2 className="mt-4 text-5xl font-black uppercase leading-none text-white md:text-7xl">
              {event.event}
            </h2>

            <p className="mt-4 text-lg text-gray-300">
              {event.fights.mainEvent.fighterA.name} vs{" "}
              {event.fights.mainEvent.fighterB.name}
            </p>

            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">
              {event.location}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}