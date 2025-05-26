'use client';

import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-40 min-h-screen bg-[var(--background)] text-white p-4">
      <nav className="flex flex-col gap-4">
        <a
          href="/pond"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pond Home
        </a>
        <a
          href="/pond/pebble1"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble1"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 1
        </a>
        <a
          href="/pond/pebble2"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble2"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 2
        </a>
      </nav>
    </div>
  );
}