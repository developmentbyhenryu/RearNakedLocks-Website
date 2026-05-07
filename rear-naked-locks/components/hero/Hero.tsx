"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,57,53,0.25),transparent_50%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-14 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:py-28">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl space-y-8"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-red-500">
            UFC Fight Analysis & Betting Picks
          </p>

          <h1 className="text-4xl uppercase leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
  Rear Naked{" "}
  <span className="block">
    Locks
  </span>
</h1>

          <p className="max-w-xl text-base leading-7 text-gray-300 md:text-lg">
            Fight breakdowns, betting picks, ROI tracking, fighter analysis,
            and weekly parlays built for real MMA fans.
          </p>

          <div className="flex flex-col gap-5 pt-2 sm:flex-row">
            <Button>View Weekly Bets</Button>

<Button variant="secondary">
  Watch Breakdown
</Button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-3xl border border-red-500/20 bg-[var(--card)] p-6 md:p-8 shadow-2xl shadow-red-500/10"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-400">
            Current Record
          </p>

          <h2 className="mb-6 text-5xl text-white sm:text-6xl">100-0</h2>

          <div className="space-y-5 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Units</span>
              <span className="font-semibold text-green-400">
                +18.4 Units
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400">Win Rate</span>
              <span className="font-semibold text-white">100%</span>
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