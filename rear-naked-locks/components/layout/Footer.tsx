import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black">
      <div className="px-8 py-16 xl:px-14">
        <div className="grid gap-12 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              Rear Naked Locks
            </p>

            <h3 className="mt-4 text-3xl font-black uppercase">
              UFC Betting
              <br />
              Analytics
            </h3>

            <p className="mt-4 max-w-sm text-gray-400">
              Fight breakdowns, betting picks, ROI tracking,
              and event coverage built for MMA fans.
            </p>
          </div>

          {/* SITE */}
          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-white">
              Site
            </h4>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

                {/* <Link
                  href="/events"
                  className="transition hover:text-white"
                >
                  Events
                </Link> */}

              <Link
                href="/tracker"
                className="transition hover:text-white"
              >
                Tracker
              </Link>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-white">
              Follow
            </h4>

            <div className="flex flex-col gap-3 text-gray-400">
              <a
                href="https://www.youtube.com/@RearNakedLocks"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                YouTube
              </a>

              <a
                href="https://x.com/rearnaked_locks"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                X / Twitter
              </a>

              <a
                href="https://instagram.com/rearnaked_locks"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Rear Naked Locks
            </p>

            <p>
              Built for fight fans. Track every bet.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}