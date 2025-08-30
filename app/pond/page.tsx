export default function PondPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center p-2 gap-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/water_and_sky.jpg')" }}
    >
      <div className="w-full max-w-4xl flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-stretch w-full">
          <div className="flex-grow min-w-10 border border-[var(--accent)] rounded-lg p-6 shadow-md flex flex-col items-center gap-2 bg-white/70">
            <span className="text-black font-bold text-center break-words">
              This is pond. This section of pebble world is literally just me rambling and random lists and data I have collected. It is basically my notes app but only the notes I have decided could be helpful to anyone. I will likely change pond a lot but it was a lot more chaotic before now so keep that in mind while you are looking at it. I made the backgrounf for this page on procreate like 5 minutes ago on my phone. it kind of looks like real water. not a pond maybe but who cares.
            </span>
          </div>

          <div className="flex-grow min-w-0 border border-[var(--accent)] rounded-lg p-6 shadow-md flex flex-col items-center gap-4 bg-white/70">
            <span className="text-black font-bold text-center break-words">
              This is also currently the only section that has anything on it. What will probably happen eventually is that the entire organization system I have created will be trashed and redone. The issue is that this is more difficult than you might assume from a coding perspective. I am not good at coding. There is a lot of chaos in the file that you cannot even see from deleted pages. I also numerically ordered these pages and then deleted many of them, which means the number associated with each public page is not the number it appears as on the website. 
            </span>
          </div>
        </div>

        <div className="w-full border border-[var(--accent)] rounded-lg p-10 shadow-md flex flex-col items-center gap-4 bg-white/70">
          <span className="text-black font-bold">
            we are embracing chaos in pebble world right now. all together. yay.
          </span>
        </div>
      </div>
    </main>
  );
}