export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--main)]">
      {/* Floating background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="floating w-24 h-24 rounded-full bg-[var(--baccent)] opacity-40" />
        <div className="floating w-20 h-20 rounded-full bg-[var(--text)] opacity-30 left-1/3 top-1/4" />
        <div className="floating w-32 h-32 rounded-full bg-pink-500 opacity-20 left-2/3 top-2/3" />
      </div>

      {/* Content boxes (empty for now) */}
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
      </div>
    </div>
  );
}