export default function PondPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-2 gap-10">
      <div className="w-full max-w-6xl flex flex-col items-center gap-2">

        <div className="flex flex-col items-center gap-2 md:flex-row md:items-stretch w-full">
          <div className="w-full border border-[var(--accent)] rounded-lg p-10 shadow-md flex flex-col items-center gap-4">
             <span className="text-[var(--baccent)] font-bold"> Here is a list of books that have critically shaped my existence as a thinking person. I think everyone should read them although it is only because I want to talk about them with someone and not necessarily because I believe they would impact everyone in the same way they impacted me. It is for selfish reasons. I will obviously add to this list when I encounter more although please note I am being very particular about what qualifies as a significant enough book to include here. </span>
           </div>
           <div className="w-full border border-[var(--accent)] rounded-lg p-10 shadow-md flex flex-col items-center gap-4">
             <span className="text-[var(--baccent)] font-bold">box</span>
           </div>
        </div>
     <div className="flex flex-col items-center gap-2 md:flex-row md:items-stretch w-full">
          <div className="w-full border border-[var(--accent)] rounded-lg p-10 shadow-md flex flex-col items-center gap-4">
             <span className="text-[var(--baccent)] font-bold">box</span>
           </div>
           <div className="w-full border border-[var(--accent)] rounded-lg p-10 shadow-md flex flex-col items-center gap-4">
             <span className="text-[var(--baccent)] font-bold">box</span>
          </div>
        </div>

      </div>
    </main>
  );
}