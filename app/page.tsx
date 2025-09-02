export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: "var(--main)" }}>
      <div className="absolute inset-0 -z-10">
        <div
          className="floating w-24 h-24 rounded-full opacity-40"
          style={{ backgroundColor: "var(--baccent)", top: "10%", left: "10%" }}
        />
        <div
          className="floating w-20 h-20 rounded-full opacity-30"
          style={{ backgroundColor: "var(--text)", top: "30%", left: "30%" }}
        />
        <div
          className="floating w-32 h-32 rounded-full opacity-20"
          style={{ backgroundColor: "var(--baccent)", top: "60%", left: "60%" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
        <div className="w-3/4 max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--text)] rounded-xl" />
      </div>
    </div>
  );
}