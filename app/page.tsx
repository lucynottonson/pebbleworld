'use client';
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div
      className="relative w-full h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <motion.div
        className="absolute left-1/2 top-24 -translate-x-1/2 w-40 h-20 bg-[var(--text)]/20 border border-[var(--text)] rounded-lg shadow-lg z-10 flex items-center justify-center"
        animate={{ y: [0, -30, 0] }} // moves up and down
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[var(--text)] font-semibold">Floating Box</span>
      </motion.div>

      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
      </div>
    </div>
  );
}