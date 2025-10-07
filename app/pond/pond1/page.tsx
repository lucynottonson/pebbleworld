'use client';
import { motion } from "framer-motion";
import { Cherry_Bomb_One} from 'next/font/google';
import { useState } from 'react';
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
        <p className={`text-[var(--text)] ${cherryBombOne.className}`}>another real pond page. Did not reuse exact code from home page obviously.</p>
      </div>

        <ProjectButton
        href='/pond/pond1/100725'
        title="October 7, 2025"
        description="Not a real page yet. testing my abilty to do this and locking in"
      />

      </div>
    </div>
  );
}

function ProjectButton({ href, title, description }: { href: string; title: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
   <motion.a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className={`relative w-64 h-64 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded shadow transition flex flex-col items-center justify-center overflow-hidden ${cherryBombOne.className}`}
  initial="collapsed"
  animate={isHovered ? "expanded" : "collapsed"}
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
  style={{ cursor: 'pointer' }}
  variants={{
    collapsed: { height: 64, scale: 1 },
    expanded: { height: 'auto', scale: 1.05 },
  }}
  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
>
  <span className="z-10 text-center text-2xl">{title}</span>
  <motion.span
    className={`mt-2 px-2 text-sm text-[var(--text)] text-center select-text ${cherryBombOne.className}`}
    initial={{ opacity: 0, height: 0 }}
    animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    style={{ overflow: 'hidden' }}
  >
    {description}
  </motion.span>
</motion.a>
  );
}