'use client';
import { motion } from "framer-motion";
import { Raleway } from 'next/font/google';
import { useState } from 'react';
const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });
export default function PondPage() {
  return (
    <div
      className="relative w-full h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <motion.div
        className="absolute inset-x-0 top-24 z-10 flex justify-center"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className={`text-4xl font-bold text-[var(--text)] ${raleway.className}`}>
          Gallery
        </span>
      </motion.div>

      <div className="flex flex-col items-center justify-center h-full space-y-6">
       <div className="w-3/4 max-w-2xl h-32 bg-[var(--text)]/10 border border-[var(--background)] rounded-xl flex items-center justify-center">
        <p className={`text-[var(--text)] ${raleway.className}`}>Give me grace here</p>
      </div>

        <ProjectButton
        href='/gallery/visual'
        title="Visual Gallery"
        description="p"
      />

       <ProjectButton
        href='/gallery/audio'
        title="Audio Gallery"
        description="p"
      />

        <ProjectButton
        href='/gallery/animations'
        title="Animations"
        description="Really generous word for what these are"
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
  className={`relative w-64 h-64 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded shadow transition flex flex-col items-center justify-center overflow-hidden ${raleway.className}`}
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
    className={`mt-2 px-2 text-sm text-[var(--text)] text-center select-text ${raleway.className}`}
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