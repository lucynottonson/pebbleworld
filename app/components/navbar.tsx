'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Pond', href: '/pond' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Cave', href: '/cave' },
    { name: 'Garden', href: '/garden' },
    { name: 'Elsewhere', href: '/otherprojects' },
    { name: 'Info', href: '/info' },
  ];

  return (
    <nav className={`${raleway.className} w-full px-6 py-4 flex justify-center bg-[var(--main)] font-baloo`}>
      <ul className="flex flex-wrap gap-6 justify-center">
        {links.map(({ name, href }) => {
          const isActive = pathname === href || pathname?.startsWith(`${href}/`);
          return (
            <li key={href}>
              <motion.div
                {...(!isActive && {
                  whileHover: { scale: 1.1, y: -2 },
                  whileTap: { scale: 0.95 },
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                })}
              >
                <Link
                  href={href}
                  className={`px-5 py-3 rounded-full transition-all duration-200 ease-out text-xl
                    ${isActive
                      ? 'text-[var(--baccent)]'
                      : 'text-[var(--text)] hover:text-[var(--baccent)]'
                    }`}
                >
                  {name}
                </Link>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}