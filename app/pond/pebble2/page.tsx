export default function PondPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 gap-10">
      <h1 className="text-2xl font-bold text-[var(--baccent)]">External Links</h1>

      <p className="text-center max-w-2xl">
        Here are some links to other things I have made. They are all unfinished.
        Rule 1 is never expect me to finish anything ever. I get bored.
        I am hoping that by creating a list of links I will be motivated to finish something. I will try my best to add anything else I remember exists. My long term plan is to put them all on this website, but that will take a long time. 
      </p>

   <div className="flex flex-col gap-1">
     <a
     href="https://words-one-red.vercel.app"
     target="_blank"
     rel="noopener noreferrer"
      className="w-full px-4 py-2 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded shadow hover:opacity-80 transition text-center">
     Meaningless sentence generator
     </a>
     <p className="text-sm text-[var(--text)]">
     Shuffles a sentence into other sentences with no real meaning. I tried to make it so that the sentences were all grammatically correct but meaningless. I only did one sentence though. It is also not styled. 
     </p>
  </div>

   <div className="flex flex-col gap-1">
     <a
     href="https://numix-brown.vercel.app"
     target="_blank"
     rel="noopener noreferrer"
      className="w-full px-4 py-2 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded shadow hover:opacity-80 transition text-center">
        Alcohol Calculator
     </a>
     <p className="text-sm text-[var(--text)]">
        Collab with Benny. I made the original site and he made it a lot better. You can use it to know how much alcohol is in your drink using a standard 1.5oz shot of 80 proof liquor as a universal measurement for one drink. Helpful if you have very bad anxiety about getting too drunk. I use this whenever I drink because I am not chill or fun to go out with and will precisely measure the amount of alcohol I have consumed by this metric and will not drink if I am unable to do so. Hope this helps someone.     
     </p>
  </div>

   <div className="flex flex-col gap-1">
     <a
     href="https://figura-three.vercel.app"
     target="_blank"
     rel="noopener noreferrer"
      className="w-full px-4 py-2 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded shadow hover:opacity-80 transition text-center">
        Figura
     </a>
     <p className="text-sm text-[var(--text)]">
        Similar to this website in the sense that it is entirely disorganized and half the pages are missing content. It has some stuff though.    
     </p>
  </div>

   <div className="flex flex-col gap-1">
     <a
     href="https://yamix.vercel.app"
     target="_blank"
     rel="noopener noreferrer"
      className="w-full px-4 py-2 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded shadow hover:opacity-80 transition text-center">
        YAMIX
     </a>
     <p className="text-sm text-[var(--text)]">
        One single visual diagram I made.    
     </p>
  </div>

   <div className="flex flex-col gap-1">
     <a
     href="https://abix-ten.vercel.app"
     target="_blank"
     rel="noopener noreferrer"
      className="w-full px-4 py-2 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded shadow hover:opacity-80 transition text-center">
        ABIX
     </a>
     <p className="text-sm text-[var(--text)]">
       another nonsensical thing I made a while ago.     
     </p>
  </div>

   </div>
  );
}