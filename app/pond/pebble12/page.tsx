"use client";
import { useState } from "react";

function ToggleBox({ title, children }: { title: string; children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="w-full border border-[var(--accent)] rounded-lg p-6 shadow-md flex flex-col items-start gap-2 cursor-pointer transition-all"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-[var(--baccent)] font-bold">{title}</span>
        <span className="text-sm text-[var(--baccent)]">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="text-[var(--baccent)] mt-2 transition-all duration-300">
          {children ?? "This is hidden content. Add custom children here."}
        </div>
      )}
    </div>
  );
}

export default function PondPage() {
  return (
    <main className="min-h-screen flex flex-col items-center p-2 gap-10">
      <div className="w-full max-w-6xl flex flex-col items-center gap-2">

        <div className="flex flex-col items-center gap-2 md:flex-row md:items-stretch w-half">
          <div className="w-full border border-[var(--accent)] rounded-lg p-6 shadow-md flex flex-col items-center gap-2">
            <span className="text-[var(--baccent)] font-bold text-xl text-center w-full">Altered States of Consciousness</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 md:flex-row md:items-stretch w-full">
          <div className="w-full border border-[var(--accent)] rounded-lg p-4 shadow-md flex flex-col items-center gap-2">
            <span className="text-[var(--baccent)] font-bold text-l text-center w-full"> I feel that I should provide a disclaimer here regarding my position on substance use and illicit drugs. My position on substance use is very simple: &quot;substance use&quot; is an entirely arbitrary and useless umbrella term that collapses very different substances into a single category despite wide differences in safety, usefulness, addictiveness, and overall risk. There is no reasonable way to argue that the use of cannabis, for example, is even remotely similar in nature or risk to the use of heroin. Additionally, many entirely legal  and socially acceptable &quot;substances&quot; such as nicotine and alcohol, are far worse for a person to consume than a number of illicit substances. This is scientific fact. My position on illicit drugs is related, but still worth explaining. I do not believe in following the law just for the sake of it. This does not mean I believe myself to be above the law, as I would happily accept legal consequences if I were to be caught breaking a law. Actions have consequences. All I am saying is that victimless crimes are, in my opinion, perfectly moral to commit. And I am generally more concerned with breaking moral rules than I am legal ones. For legal purposes I would also like to say explicitly that I do not sell, distribute, or even currently have possession of any illicit substances. Lastly, I am not encouraging substance use. I am also not discouraging it. I would not like to die knowing I did not experience as many things as I was able to, including altered states. This is the only meaning I have found in life so far. Do I think this is necessarily a good thing to do? No. I do many things that are not necessarily good things to do. This is intended to simply be a detailed phenomenological description of all altered states I have experienced, and some of those have been under the influence of a substance. I will not be including psychiatric medication on this list because although I have been on many of them, it is very difficult to articulate or even fully be aware of the ways in which those drugs have altered my experience, since they are taken for long periods of time and often work gradually. 
</span>
          </div>
        </div>

<ToggleBox title="Cannabis">
  <p>
    nothing yet
    </p>
</ToggleBox>
<ToggleBox title="Psilocybin">
  <p>
nothing yet
  </p>
</ToggleBox>
<ToggleBox title="Nicotine">
  <p>
    nothing yet
    </p>
</ToggleBox>
<ToggleBox title="Alcohol">
    <p>
    nothing yet
    </p>
</ToggleBox>
<ToggleBox title="Sleep Paralysis">
  <p>
    nothing yet
    </p></ToggleBox>
<ToggleBox title="Extreme Sleep Deprivation">
  <p>
    nothing yet
    </p></ToggleBox>
<ToggleBox title="Mania or Whatever That Was">
  <p>
    nothing yet
    </p>
    </ToggleBox>
<ToggleBox title="Nutmeg">
  <p>
    nothing yet
    </p>
    </ToggleBox>
<ToggleBox title="Cannabis + Alcohol">
  <p>
    nothing yet
    </p>
    </ToggleBox>
<ToggleBox title="Alcohol + Psilocybin">
  <p>
    nothing yet
    </p>
</ToggleBox>
<ToggleBox title="CBD">
  <p>
    nothing yet
    </p>
</ToggleBox>
<ToggleBox title="Malnutrition">
  <p>
nothing yet 
  </p>
</ToggleBox>
      </div>
    </main>
  );
}