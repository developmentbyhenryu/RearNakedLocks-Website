"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 xl:px-10">
        {/* LOGO */}
        <div>
          <h1 className="text-xl uppercase tracking-wide text-white md:text-2xl">
            Rear Naked Locks
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden gap-6 text-sm text-gray-300 md:flex">
          {/* <a className="transition hover:text-white" href="#">
            Events
          </a>

          <a className="transition hover:text-white" href="#">
            Fighters
          </a>

          <a className="transition hover:text-white" href="#">
            Tracker
          </a>

          <a className="transition hover:text-white" href="#">
            Articles
          </a>

          <a className="transition hover:text-white" href="#">
            Games
          </a> */}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <a
  href="https://www.youtube.com/@RearNakedLocks"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 md:block"
>
  YouTube
</a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-lg text-white">
            {/* <a href="#">Events</a>
            <a href="#">Fighters</a>
            <a href="#">Tracker</a>
            <a href="#">Articles</a>
            <a href="#">Games</a> */}

            <a
  href="https://www.youtube.com/@RearNakedLocks"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 rounded-full bg-red-600 px-4 py-3 text-center font-semibold text-white"
>
  YouTube
</a>
          </div>
        </div>
      )}
    </header>
  );
}