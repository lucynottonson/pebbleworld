export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] font-serif">
      <main className="max-w-3xl mx-auto p-8 flex flex-col gap-10">
        <section className="p-6 rounded bg-[var(--accent)] text-[var(--baccent)] shadow">
          <h2 className="text-2xl font-bold mb-2">Pebble World</h2>
          <p className="text-base">
            PEBBLE WORLD IS BACK
          </p>
          <p>
           Good news guys.  
          Pond is up, and it is full of old stuff and some new stuff. I promise I will edit and organize soon. colors page should be working and throw and info are both blank. Any updates will be here and not on info (because it is blank). 
          </p>
          <p>More importantly,</p>
          <h2>THE THINKING STYLES GOOGLE FORM IS READY!!!!!! Click da button below this to fill it out</h2>
          <div className="flex flex-col gap-1">
     <a
     href="https://docs.google.com/forms/d/e/1FAIpQLSeh_q9xUInvzhbid-OJ53mKrZlz8J0svofIlH7tBnG9eNi0qg/viewform?usp=header"
     target="_blank"
     rel="noopener noreferrer"
      className="w-full px-4 py-2 bg-[var(--text)] text-[var(--accent)] font-semibold rounded shadow hover:opacity-80 transition text-center">
     PLEASE GIVE ME DATA
     </a>
     <p className="text-sm text-[var(--text)]">
questionnaire that asks you about how you think. I cut it down a lot so hopefully it will not take very long to complete. Please give me access to your brains! There is also a space at the end for you to put a form of contact so I can share the data with you one day.</p>
  </div>
        </section>
      </main>
    </div>
  );
}