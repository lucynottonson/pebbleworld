export default function PondPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-2 gap-10">
      <div className="w-full max-w-4xl flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-stretch w-full">
          <div className="flex-grow min-w-10 border border-[var(--accent)] rounded-lg p-6 shadow-md flex flex-col items-center gap-2">
            <span className="text-[var(--baccent)] font-bold text-center break-words">
              This is the pond. I know I said I would not provide any other descriptions but I decided to be generous because it is bothering me slightly that the home page is unfinished. 
              That should at least have something on it.            
            </span>
          </div>

          <div className="flex-grow min-w-0 border border-[var(--accent)] rounded-lg p-6 shadow-md flex flex-col items-center gap-4">
            <span className="text-[var(--baccent)] font-bold text-center break-words">
              Each pebble is an entirely separate thing and none of them are connected and there is no universal styling or formatting across the different pebbles. 
              You may be thinking, &quot;this must be someone who does not care about systems of organization&quot; and unfortunately you would be wrong. 
              I care deeply about systems of organization to the point of not being able to do things at all if I have not decided on a system of organization beforehand. 
              There is one workaround to this paralysis I experience though, which is creating a system of organization that specifically accommodates chaos as part of its rules. 
            </span>
          </div>
        </div>

        <div className="w-full border border-[var(--accent)] rounded-lg p-10 shadow-md flex flex-col items-center gap-4">
          <span className="text-[var(--baccent)] font-bold">
            As you might notice, many pages are just placeholders. It is also the case that this is something I am constantly changing. Pebble world was started in May 2025 so any of this stuff could be from anywhere from then to the present day. I am only saying this because it is likely that I will think different things than things I say on here after time has passed, and will not update my opinion accordingly. As you guys probably know already, I change my mind a lot and can be convinced of anything. I will not put dates on any of this. Right now this site is in a state of chaos and I intend to eventually make it into a site of non-chaos. I do not know whether or not I will, but that is my intention.
          </span>
        </div>
      </div>
    </main>
  );
}