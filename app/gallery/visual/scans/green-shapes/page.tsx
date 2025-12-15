'use client';
import { motion } from "framer-motion";
import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });

export default function PondPage() {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >
           <motion.a
        href="/gallery/visual/scans"
        className={`absolute top-8 left-8 w-28 h-12 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded-lg shadow-md flex items-center justify-center text-center px-3 ${raleway.className}`}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        style={{ cursor: 'pointer' }}
      >
        Back
      </motion.a>
      <div className="absolute inset-x-0 top-20 z-10 flex justify-center">
        <motion.div
          className="px-6 h-16 max-w-[90vw] bg-[var(--text)]/20 border border-[var(--background)] rounded-lg flex items-center justify-center whitespace-nowrap"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className={`text-2xl font-bold text-[var(--text)] ${raleway.className}`}>
           Green Shapes
          </span>
        </motion.div>
      </div>
      <div className="pt-44 pb-32 flex flex-col items-center px-6">
        <img
          src="/green-shapes.jpeg"
          alt="Green Shapes"
          className="max-w-full w-[600px] h-auto mb-6"
        />

        <div className="max-w-xl text-center text-[var(--text)]/80 leading-relaxed">
          <p className="text-sm mb-1">
            November 20, 2022
          </p>
          <p className="text-sm italic mb-4">
            Acrylic on Paper
          </p>
          <p className="text-base">
To be honest I have no memory of this. Around this time I was very mentally unstable. This apparently was some sort of expression of that instability. I have no idea though.           </p>
        </div>
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
      className={`w-44 h-16 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded-lg shadow-md flex items-center justify-center text-center px-4 ${raleway.className}`}
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      style={{ cursor: 'pointer' }}
    >
      <span className="text-center text-lg">{title}</span>
    </motion.a>
  );
}