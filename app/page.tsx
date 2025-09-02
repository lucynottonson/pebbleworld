export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--main)]">
      <div className="absolute inset-0 -z-10">
        <div className="floating bg-[var(--baccent)] opacity-30 w-24 h-24 rounded-full" />
        <div className="floating bg-[var(--text)] opacity-20 w-16 h-16 rounded-full left-1/3 top-1/4" />
        <div className="floating bg-[var(--main)] opacity-40 w-32 h-32 rounded-full left-2/3 top-2/3" />
      </div>

      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
      </div>
    </div>
  );
}