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
        animate={{ y: [0, -30, 0] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[var(--text)] font-semibold">Updates:</span>
      </motion.div>

      <div className="flex flex-col items-center justify-center h-full space-y-6">
       <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl flex items-center justify-center">
        <p className="text-[var(--text)] font-semibold">Pond is temporarily gone so that I can organize the site better. I will put the old pond pages back soon! I just had to get rid of the navbar so basically no pages are accessible until I have a different system of organization.</p>
      </div>
      <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl flex items-center justify-center">
        <p className="text-[var(--text)] font-semibold">Currently the pages with content on them are Elsewhere and Info which I have updated with proper styling. Info has the current site colors, and Elsewhere links to other websites I have made.</p>
      </div>
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl flex items-center justify-center">
        <p className="text-[var(--text)] font-semibold">I have 13 test responses from the first draft of the thinking styles google form, and I will be putting updates about that on the Cave page once I have made edits. I will put the link to the finalized form here when I have finished it. Thank you to everyone who helped with that!</p>
      </div>
      </div>
    </div>
  );
}