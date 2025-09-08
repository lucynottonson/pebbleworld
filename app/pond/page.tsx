export default function PondPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center p-2 gap-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/water_and_sky.jpg')" }}
    >
      <div className="w-full max-w-4xl flex flex-col items-center gap-2">
        <div className="w-full border border-[var(--accent)] rounded-lg p-10 shadow-md flex flex-col items-center gap-4 bg-white/70">
          <span className="text-black font-bold">
            we are embracing chaos in pebble world right now. all together. yay.
          </span>
        </div>
      </div>
    </main>
  );
}