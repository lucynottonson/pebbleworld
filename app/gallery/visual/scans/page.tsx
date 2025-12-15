'use client';
import { motion } from "framer-motion";
import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });

export default function PondPage() {
  const items = [
    {
      id: 1,
      title: 'Big Flower with Hat',
      href: '/gallery/visual/scans/big-flower-with-hat',
      img: '/big-flower-with-hat.jpeg',
      date: 'August 11, 2024',
    },
    {
      id: 2,
      title: 'Green Shapes',
      href: '/gallery/visual/scans/green-shapes',
      img: '/green-shapes.jpeg',
      date: 'November 20, 2022',
    },
    {
      id: 3,
      title: 'Pink Circles',
      href: '/gallery/visual/scans/pink-circles',
      img: '/pink-circles.jpeg',
      date: 'October 14, 2023',
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <motion.a
        href="/gallery/visual"
        className={`absolute top-8 left-8 w-28 h-12 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded-lg shadow-md flex items-center justify-center text-center px-3 ${raleway.className}`}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        style={{ cursor: 'pointer' }}
      >
        Back
      </motion.a>

      <div className="absolute inset-x-0 top-20 z-10 flex justify-center">
        <motion.div
          className="w-48 h-20 bg-[var(--text)]/20 rounded-lg flex items-center justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className={`text-2xl font-bold text-[var(--text)] ${raleway.className}`}>
            Scans
          </span>
        </motion.div>
      </div>

      {/* Grid container */}
      <div className="container mx-auto px-6 pt-36 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((it) => (
            <article key={it.id} className="flex flex-col">
              <a href={it.href} className="group block">
                <div className="w-full h-44 sm:h-40 md:h-36 lg:h-32 bg-[var(--background)] rounded-lg overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mt-2">
                  <span className={`inline-block text-[var(--text)] ${raleway.className} relative`}>
                    <span className="group inline-block">
                      <span className="relative inline-block">
                        <span className="inline-block">{it.title}</span>
                        <span
                          className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-[var(--text)] transition-all duration-200 group-hover:w-full group-active:w-full"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </span>

                  <div className="text-[var(--text)]/70 text-[11px] mt-1">{it.date}</div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
