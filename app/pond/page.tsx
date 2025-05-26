export default function PondPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-2 gap-10">
      <div className="w-full max-w-6xl flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-stretch w-full">
          <div className="flex-grow min-w-0 border border-[var(--accent)] rounded-lg p-6 shadow-md flex flex-col items-center gap-2">
            <span className="text-[var(--baccent)] font-bold text-center break-words">
              This is the text that would be there. I just want to see if it will adapt to the page basically. So I&apos;m trying to write a lot. I think it is working. I don’t have much to say though. I am running out of things to write because I am tired and did not really sleep last night. When I have slept more I have more access to my arsenal of words. whf;oeawjfoeawmuf
            </span>
          </div>
          <div className="flex-grow min-w-0 border border-[var(--accent)] rounded-lg p-8 shadow-md flex flex-col items-center gap-4">
            <span className="text-[var(--baccent)] font-bold text-center break-words">Main Color</span>
          </div>
          <div className="flex-grow min-w-0 border border-[var(--accent)] rounded-lg p-6 shadow-md flex flex-col items-center gap-4">
            <span className="text-[var(--baccent)] font-bold text-center break-words">four</span>
          </div>
        </div>
        <div className="w-full border border-[var(--accent)] rounded-lg p-10 shadow-md flex flex-col items-center gap-4">
          <span className="text-[var(--baccent)] font-bold">three</span>
        </div>
      </div>
    </main>
  );
}