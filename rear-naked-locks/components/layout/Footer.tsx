import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold uppercase">
            Rear Naked Locks
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            UFC Betting Analysis, Picks, ROI Tracking,
            and Fight Breakdowns.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/events">
            Events
          </Link>

          <Link href="/tracker">
            Tracker
          </Link>

          <a
            href="https://www.youtube.com/@RearNakedLocks"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-500">
        © 2026 Rear Naked Locks
      </p>
    </footer>
  );
}