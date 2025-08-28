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
            <span className="text-[var(--baccent)] font-bold text-center break-words">Each pebble is an entirely seperate thing and none of them are connected and there is no universal styling or formatting across the different pebbles. 
You may be thinking, &quot;this must be someone who does not care about systems of organization&quot; and unfortunately you would be wrong. 
I care deeply about systems of organization to the point of not being able to do things at all if I have not decided on a system of organization beforehand. 
There is one workaround to this paralysis I experience though, which is creating a system of organization that accommodates chaos. 
This has solved a lot of my problems. 
I know that to accept a project, there must be a system, and that the system must be consistent and perfect and the rules of the system must never be broken or the project will be abandoned. 
This is almost impossible to actually do. There is only one workaround which is accepting a chaos system, or a constant improvement system, where there are a few consistent rules regarding the way the chaos is to be organized. As you may notice there are only six colors used on the entire site. This is the one rule that ties everything together. As long as that is consistent there are parameters and it is safe.      </span>
          </div>
        </div>
        <div className="w-full border border-[var(--accent)] rounded-lg p-10 shadow-md flex flex-col items-center gap-4">
          <span className="text-[var(--baccent)] font-bold">Many pebbles are currently blank, and many non-blank pebbles are unfinished. Although I have escaped not being able to continue something without an elaborate system, I have not escaped needing to create categories and blank placeholders before actually working on anything that goes inside them. This will come later. Maybe one day we can have an OCD exposures page and share our success with different ones. I stopped doing this like six months ago and decided that as long as I am not left to my own devices for too long this problem cannot get out of hand enough to warrant that type of intervention. Enjoy the pebbles. </span>
        </div>
      </div>
    </main>
  );
}