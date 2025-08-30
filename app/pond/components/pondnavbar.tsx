'use client';

import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-40 min-h-screen bg-[var(--background)] text-[var(--text)] p-4">
      <nav className="flex flex-col gap-0.5">
        <a
          href="/pond"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Home
        </a>
        <a
          href="/pond/pebble1"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble1"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          DISCLAIMER
        </a>
        <a
          href="/pond/pebble2"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble2"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Links to other things I have made
        </a>
  
          <a
          href="/pond/pebble5"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble5"
              ? "bg-[var(--accent)] text-[var(--baccent)] font-bold"
              : "hover:bg-[var(--accent)] hover:text-[var(--baccent)]"
          }`}
        >
          Questions
        </a>
          <a
          href="/pond/pebble9"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble9"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Insomnia
        </a>
          <a
          href="/pond/pebble11"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble11"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          RAMBLING FROM ONE TIME
        </a>
            <a
          href="/pond/pebble10"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble15"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
         Anti-Solipsism
        </a>
            <a
          href="/pond/pebble18"
         className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble5"
              ? "bg-[var(--accent)] text-[var(--baccent)] font-bold"
              : "hover:bg-[var(--accent)] hover:text-[var(--baccent)]"
          }`}
        >
          box storage
        </a>
      </nav>
    </div>
  );
}
