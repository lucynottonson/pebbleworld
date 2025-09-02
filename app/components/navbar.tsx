'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4 flex items-center bg-[var(--main)] text-[var(--text)] shadow-md">
  <ul className="flex flex-1 justify-evenly text-[var(--text)]">
    <li>
      <Link 
        href="/" 
        className={`transition-colors ${
          pathname === '/'
            ? 'text-[var(--baccent)] text-2xl font-semibold'
            : 'hover:text-[var(--baccent)] text-xl'
        }`}
      >
        Home
      </Link>
    </li>
    <li>
      <Link 
        href="/pond" 
        className={`transition-colors ${
          pathname === '/pond' || pathname?.startsWith('/pond/')
            ? 'text-[var(--baccent)] text-2xl font-semibold'
            : 'hover:text-[var(--baccent)] text-xl'
        }`}
      >
        Pond
      </Link>
    </li>
    <li>
      <Link 
        href="/throw" 
        className={`transition-colors ${
          pathname === '/throw'
            ? 'text-[var(--baccent)] text-2xl font-semibold'
            : 'hover:text-[var(--baccent)] text-xl'
        }`}
      >
        Throw
      </Link>
    </li>
    <li>
      <Link 
        href="/colors" 
        className={`transition-colors ${
          pathname === '/colors'
            ? 'text-[var(--baccent)] text-2xl font-semibold'
            : 'hover:text-[var(--baccent)] text-xl'
        }`}
      >
        Colors
      </Link>
    </li>
    <li>
      <Link 
        href="/info" 
        className={`transition-colors ${
          pathname === '/info'
            ? 'text-[var(--baccent)] text-2xl font-semibold'
            : 'hover:text-[var(--baccent)] text-xl'
        }`}
      >
        Info
      </Link>
    </li>
  </ul>
</nav>
  );
}