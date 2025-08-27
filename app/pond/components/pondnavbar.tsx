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
          Pebble 2
        </a>
          <a
          href="/pond/pebble3"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble3"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 3
        </a>
          <a
          href="/pond/pebble4"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble4"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 4
        </a>
          <a
          href="/pond/pebble5"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble5"
              ? "bg-[var(--accent)] text-[var(--baccent)] font-bold"
              : "hover:bg-[var(--accent)] hover:text-[var(--baccent)]"
          }`}
        >
          Topics of Inquiry and Insanity
        </a>
          <a
          href="/pond/pebble6"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble6"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 6
        </a>
          <a
          href="/pond/pebble7"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble7"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 7
        </a>
          <a
          href="/pond/pebble8"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble8"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 8
        </a>
          <a
          href="/pond/pebble9"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble9"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 9
        </a>
          <a
          href="/pond/pebble10"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble10"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 10
        </a>
          <a
          href="/pond/pebble11"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble11"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 11
        </a>
          <a
          href="/pond/pebble12"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble12"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Altered States
        </a>
          <a
          href="/pond/pebble13"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble13"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 13
        </a>
            <a
          href="/pond/pebble14"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble14"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 14
        </a>
            <a
          href="/pond/pebble15"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble15"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 15
        </a>
            <a
          href="/pond/pebble16"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble16"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 16
        </a>
            <a
          href="/pond/pebble17"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble17"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Revered Books
        </a>
            <a
          href="/pond/pebble18"
          className={`px-4 py-2 rounded-lg transition-colors ${
            pathname === "/pond/pebble18"
              ? "bg-white text-[var(--accent)] font-bold"
              : "hover:bg-white hover:text-[var(--accent)]"
          }`}
        >
          Pebble 18
        </a>
      </nav>
    </div>
  );
}
