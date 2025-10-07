'use client';
import { motion } from "framer-motion";
import { Cherry_Bomb_One} from 'next/font/google';
const cherryBombOne = Cherry_Bomb_One({ subsets: ['latin'], weight: '400' });

export default function HomePage() {
  return (
    <div
      className="relative w-full h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <motion.div
        className="absolute center-1/2 top-24 -translate-x-1/2 w-40 h-20 bg-[var(--text)]/20 border border-[var(--background)] rounded-lg  z-10 flex items-center justify-center"
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className={`text-2xl font-bold text-[var(--text)] ${cherryBombOne.className}`}>Updates:</span>

      </motion.div>

      <div className="flex flex-col items-center justify-center h-full space-y-6">
       <div className="w-3/4 max-w-2xl h-32 bg-[var(--text)]/10 border border-[var(--background)] rounded-xl flex items-center justify-center">
        <p className={`text-[var(--text)] ${cherryBombOne.className}`}>HAPPY SEPTEMBER!!! School has started, and now life is worth living. Any nihilistic or otherwise anti-fun statement made over the summer is no longer part of my worldview. I changed the site colors to reflect this shift. Sorry about that. I get unhappy when bored. Never take anything I say seriously.</p>
      </div>
      <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--background)] rounded-xl flex items-center justify-center">
        <p className={`text-[var(--text)] ${cherryBombOne.className}`}>I am currently trying to create an organization system that is normal and makes sense. This is more difficult than you might think. Most of the site is down right now because of this. You cannot see the progress that has been made, but I promise it is coming together.</p> 
      </div>
      </div>
    </div>
  );
}