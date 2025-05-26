export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] font-serif">
      <main className="max-w-3xl mx-auto p-8 flex flex-col gap-10">
        <section className="p-6 rounded bg-[var(--accent)] text-[var(--baccent)] shadow">
          <h2 className="text-2xl font-bold mb-2">Pebble World</h2>
          <p className="text-base">
this is pebble world.          </p>
        </section>
      </main>
    </div>
  );
}
