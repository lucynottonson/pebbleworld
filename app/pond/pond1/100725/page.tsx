'use client';
import { motion } from "framer-motion";
import { Cherry_Bomb_One} from 'next/font/google';
const cherryBombOne = Cherry_Bomb_One({ subsets: ['latin'], weight: '400' });

export default function PondPage() {
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
        <span className={`text-2xl font-bold text-[var(--text)] ${cherryBombOne.className}`}>Pond Page Outline:</span>

      </motion.div>

      <div className="flex flex-col items-center justify-center h-full space-y-6">
       <div className="w-3/4 max-w-2xl h-32 bg-[var(--text)]/10 border border-[var(--background)] rounded-xl flex items-center justify-center">
        <p className={`text-[var(--text)] ${cherryBombOne.className}`}>unlinked pond page with end date identifier</p>
      </div>
      </div>
    </div>
  );
}