"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
<nav className="flex items-center justify-between px-8 py-5 xl:px-14">
  {/* LEFT - LOGO */}
  <Link href="/">
    <h1 className="text-2xl font-medium uppercase tracking-wide text-white transition hover:text-red-400">
      Rear Naked Locks
    </h1>
  </Link>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-10">
    {/* DESKTOP NAV */}
<div className="hidden items-center gap-8 text-sm font-medium text-gray-300 lg:flex">
  <Link
    href="/events"
    className="transition hover:text-white"
  >
    Events
  </Link>

  <Link
    href="/fighters"
    className="transition hover:text-white"
  >
    Fighters
  </Link>

  <Link
    href="/tracker"
    className="transition hover:text-white"
  >
    Tracker
  </Link>

  <Link
    href="/articles"
    className="transition hover:text-white"
  >
    Articles
  </Link>

  <Link
    href="/games"
    className="transition hover:text-white"
  >
    Games
  </Link>
</div>

    {/* YOUTUBE BUTTON */}
    <a
      href="https://www.youtube.com/@RearNakedLocks"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-500 md:block"
    >
      YouTube
    </a>

    {/* MOBILE MENU BUTTON */}
    <button
      className="text-white md:hidden"
      onClick={() => setOpen(!open)}
    >
      {open ? (
        <X size={28} />
      ) : (
        <Menu size={28} />
      )}
    </button>
  </div>
</nav>

      {/* MOBILE MENU */}
      {open && (
<div className="flex flex-col gap-5 text-lg text-white">
  <Link href="/events">
    Events
  </Link>

  <Link href="/fighters">
    Fighters
  </Link>

  <Link href="/tracker">
    Tracker
  </Link>

  <Link href="/articles">
    Articles
  </Link>

  <Link href="/games">
    Games
  </Link>

  <a
    href="https://www.youtube.com/@RearNakedLocks"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 rounded-full bg-red-600 px-4 py-3 text-center font-semibold text-white"
  >
    YouTube
  </a>
</div>
      )}
    </header>
  );
}