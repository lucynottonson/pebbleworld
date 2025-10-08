'use client';
import { motion } from "framer-motion";
import { Cherry_Bomb_One } from 'next/font/google';
const cherryBombOne = Cherry_Bomb_One({ subsets: ['latin'], weight: '400' });

export default function PondPage() {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >
           <motion.a
        href="/pond"
        className={`absolute top-8 left-8 w-28 h-12 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded-lg shadow-md flex items-center justify-center text-center px-3 ${cherryBombOne.className}`}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        style={{ cursor: 'pointer' }}
      >
        Back
      </motion.a>
      <div className="absolute inset-x-0 top-20 z-10 flex justify-center">
        <motion.div
          className="w-48 h-20 bg-[var(--text)]/20 border border-[var(--background)] rounded-lg flex items-center justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className={`text-2xl font-bold text-[var(--text)] ${cherryBombOne.className}`}>
            Uncategorized
          </span>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-64">
        <ProjectButton href='/pond/pond1/100725' title="October 7, 2025" />
        <ProjectButton href='#' title="box" />
        <ProjectButton href='#' title="box" />
        <ProjectButton href='#' title="box" />
        <ProjectButton href='#' title="box" />
        <ProjectButton href='#' title="box" />
      </div>
    </div>
  );
}

function ProjectButton({ href, title }: { href: string; title: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-44 h-16 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded-lg shadow-md flex items-center justify-center text-center px-4 ${cherryBombOne.className}`}
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      style={{ cursor: 'pointer' }}
    >
      <span className="text-center text-lg">{title}</span>
    </motion.a>
  );
}