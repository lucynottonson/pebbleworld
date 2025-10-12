'use client';

import { Raleway } from 'next/font/google';
import { motion } from 'framer-motion';

const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });

export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-black flex flex-col items-center p-10 gap-10">
      <h1 className={`text-4xl font-bold text-[var(--text)] ${raleway.className}`}>Current Site Colors:</h1>
      <div className="flex gap-6 justify-center">
        <motion.div
          className="w-24 h-24 rounded flex items-center justify-center text-[var(--text)] font-semibold text-lg cursor-pointer border border-gray-300"
          style={{ backgroundColor: 'var(--text)' }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
        </motion.div>
        <motion.div
          className="w-24 h-24 rounded flex items-center justify-center text-[var(--text)] font-semibold text-lg cursor-pointer border border-gray-300"
          style={{ backgroundColor: 'var(--background)' }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
        </motion.div>
        <motion.div
          className="w-24 h-24 rounded flex items-center justify-center text-[var(--text)] font-semibold text-lg cursor-pointer border border-gray-300"
          style={{ backgroundColor: 'var(--main)' }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
        </motion.div>
        <motion.div
          className="w-24 h-24 rounded flex items-center justify-center text-[var(--text)] font-semibold text-lg cursor-pointer border border-gray-300"
          style={{ backgroundColor: 'var(--accent)' }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
        </motion.div>
        <motion.div
          className="w-24 h-24 rounded flex items-center justify-center text-[var(--accent)] font-semibold text-lg cursor-pointer border border-gray-300"
          style={{ backgroundColor: 'var(--baccent)' }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
        </motion.div>
      </div>
    </div>
  );
}