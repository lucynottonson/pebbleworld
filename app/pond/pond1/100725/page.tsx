'use client';
import { motion } from "framer-motion";
import { Cherry_Bomb_One} from 'next/font/google';
import { Montserrat } from 'next/font/google';
const cherryBombOne = Cherry_Bomb_One({ subsets: ['latin'], weight: '400' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600'] });

export default function PondPage() {
  return (
    <div
      className="min-h-screen w-full px-6 pt-32 pb-16 flex flex-col items-center bg-[var(--background)]"
    >
      <motion.a
        href="/pond/pond1"
        className={`fixed top-24 left-8 w-24 h-10 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded-lg shadow-md flex items-center justify-center text-center px-3 ${cherryBombOne.className}`}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        style={{ cursor: 'pointer' }}
      >
        Back
      </motion.a>
      <motion.div
        className="text-center mb-12"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <h1 className={`text-4xl font-bold text-[var(--text)] mb-2 ${cherryBombOne.className}`}>
          Title of page when it exists
        </h1>
        <p className={`text-lg text-[var(--text)]/80 ${cherryBombOne.className}`}>
          October 7, 2025
        </p>
      </motion.div>

      <div className="w-full max-w-3xl space-y-8">
        <div className={`text-[var(--text)] text-lg leading-relaxed space-y-4 ${montserrat.className}`}>
          <p>
            Text
          </p>
          <p>
            Text more
          </p>
          <p>
            More text
          </p>
        </div>
      </div>
    </div>
  );
}