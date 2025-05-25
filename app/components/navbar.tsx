'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-[var(--background)] text-[var(--text)] shadow-md">
      <div className="text-xl font-bold text-[var(--main)]">
        <Link href="/">PW</Link>
      </div>
      <ul className="flex space-x-6 text-[var(--main)] ">
        <li>
          <Link href="/pond" className="hover:text-[var(--accent)] transition-colors">
            Pond
          </Link>
        </li>
        <li>
          <Link href="/throw" className="hover:text-[var(--accent)] transition-colors">
            Throw
          </Link>
        </li>
        <li>
          <Link href="/info" className="hover:text-[var(--accent)] transition-colors">
            Info
          </Link>
        </li>
      </ul>
    </nav>
  );
}