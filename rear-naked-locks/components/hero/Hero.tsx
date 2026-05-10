"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,57,53,0.22),transparent_50%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 md:gap-16 md:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-28">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-red-500 sm:text-xs">
            UFC Fight Analysis & Betting Picks
          </p>

          {/* Logo + Title */}
          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/10 bg-black/40 sm:h-20 sm:w-20">
              <Image
                src="/logos/RNL_Logo.png"
                alt="Rear Naked Locks Logo"
                fill
                className="object-contain p-1"
              />
            </div>

            <div>
              <h1 className="text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl">
                Rear Naked
              </h1>

              <h1 className="text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl">
                Locks
              </h1>
            </div>
          </div>

          <p className="max-w-lg text-base leading-7 text-gray-300 md:text-lg">
            Fight breakdowns, betting picks, ROI tracking,
            fighter analysis, and weekly parlays built for
            real MMA fans.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button>
              View Weekly Bets
            </Button>

            <Button variant="secondary">
              Watch Breakdown
            </Button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-3xl border border-red-500/20 bg-[var(--card)] p-6 shadow-2xl shadow-red-500/10 md:p-8 lg:max-w-md"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-red-400">
            Current Record
          </p>

          <h2 className="mt-3 text-5xl font-black text-white sm:text-6xl">
            42-18
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">
                Units
              </span>

              <span className="font-semibold text-green-400">
                +18.4 Units
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400">
                Win Rate
              </span>

              <span className="font-semibold text-white">
                67%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400">
                ROI
              </span>

              <span className="font-semibold text-white">
                +14%
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}