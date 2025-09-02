'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-[var(--main)] text-[var(--text)] shadow-md">
      <div className="text-xl font-bold text-[var(--text)]">
        <Link href="/"></Link>
      </div>
      <ul className="flex space-x-6 text-[var(--text)] ">
         <li>
          <Link 
            href="/" 
            className={`transition-colors ${
              pathname === '/' || pathname?.startsWith('')
                ? 'text-[var(--baccent)] text-lg font-semibold'
                : 'hover:text-[var(--baccent)]'
            }`}
          >
            Pond
          </Link>
        </li>
        <li>
          <Link 
            href="/pond" 
            className={`transition-colors ${
              pathname === '/pond' || pathname?.startsWith('/pond/')
                ? 'text-[var(--baccent)] text-lg font-semibold'
                : 'hover:text-[var(--baccent)]'
            }`}
          >
            Pond
          </Link>
        </li>
        <li>
          <Link 
            href="/throw" 
            className={`transition-colors ${pathname === '/throw' ? 'text-[var(--baccent)] text-lg font-semibold' : 'hover:text-[var(--baccent)]'}`}
          >
            Throw
          </Link>
        </li>
        <li>
          <Link 
            href="/colors" 
            className={`transition-colors ${pathname === '/colors' ? 'text-[var(--baccent)] text-lg font-semibold' : 'hover:text-[var(--baccent)]'}`}
          >
            Colors
          </Link>
        </li>
        <li>
          <Link 
            href="/info" 
            className={`transition-colors ${pathname === '/info' ? 'text-[var(--baccent)] text-lg font-semibold' : 'hover:text-[var(--baccent)]'}`}
          >
            Info
          </Link>
        </li>
      </ul>
    </nav>
  );
}