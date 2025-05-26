export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-black flex flex-col items-center p-10 gap-10">
      <h1 className="text-4xl font-bold text-[var(--text)]">Current Site Colors</h1>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded bg-[var(--text)]" />
            <span>Text</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded bg-[var(--background)]" />
            <span>Background</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded bg-[var(--main)]" />
            <span>Main</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded bg-[var(--accent)]" />
            <span>Accent</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded bg-[var(--baccent)]" />
            <span>Baccent (text on accent color)</span>
          </div>
        </div>
      </div>
    </div>
  );
}