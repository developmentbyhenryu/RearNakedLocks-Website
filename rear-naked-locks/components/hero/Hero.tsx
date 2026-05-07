"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,57,53,0.25),transparent_50%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-14 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:py-28">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-red-500">
            UFC Fight Analysis & Betting Picks
          </p>

          <h1 className="mb-6 text-2xl uppercase leading-[0.9] sm:text-4xl md:text-6xl lg:text-7xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Rear Naked <br /> Locks
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-300">
            Fight breakdowns, betting picks, ROI tracking, fighter analysis,
            and weekly parlays built for real MMA fans.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-500">
              View Weekly Bets
            </button>

            <button className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-white/40">
              Watch Breakdown
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-3xl border border-red-500/20 bg-[var(--card)] p-8 shadow-2xl shadow-red-500/10"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-400">
            Current Record
          </p>

          <h2 className="mb-6 text-5xl text-white sm:text-6xl">42-18</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Units</span>
              <span className="font-semibold text-green-400">
                +18.4 Units
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400">Win Rate</span>
              <span className="font-semibold text-white">67%</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400">ROI</span>
              <span className="font-semibold text-white">+14%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}