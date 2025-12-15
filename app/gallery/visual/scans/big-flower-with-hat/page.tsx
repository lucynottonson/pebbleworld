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
           Big Flower with Hat
          </span>
        </motion.div>
      </div>
      {/* Image + caption */}
      <div className="pt-44 flex flex-col items-center px-6">
        <img
          src="/big-flower-with-hat.jpeg"
          alt="Big Flower with Hat"
          className="max-w-full w-[600px] h-auto mb-6"
        />

        <div className="max-w-xl text-center text-[var(--text)]/80 leading-relaxed">
          <p className="text-sm mb-1">
            August 11, 2024
          </p>
          <p className="text-sm italic mb-4">
            Colored pencil
          </p>
          <p className="text-base">
            I drew this in Oakland with Malcolm. We drew together on opposite pages of the same notebook. This was my half.
          </p>
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