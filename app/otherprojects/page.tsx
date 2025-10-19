"use client";
import { Raleway, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";

const raleway = Raleway({ subsets: ["latin"], weight: ["400","700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export default function PondPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 gap-8" style={{ backgroundColor: "var(--background)" }}>

      <p className={`text-center max-w-2xl text-lg leading-relaxed ${montserrat.className}`}>
        Here are some links to other things I have made and some I did not make. They are all unfinished.
        Rule 1 is never expect me to finish anything ever. I get bored. I am hoping that by creating
        a list of links I will be motivated to finish something. My long term plan is to put them all
        on this website, but that will take a long time.
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-6">
          <h2 className={`text-2xl font-bold text-[var(--text)] ${raleway.className}`}>From Me</h2>

          <ProjectButton
            href="https://words-one-red.vercel.app"
            title="Meaningless sentence generator"
            description="Shuffles a sentence into other sentences with no real meaning. I tried to make it so that the sentences were all grammatically correct but meaningless. I only did one sentence though. It is also not styled."
          />

          <ProjectButton
            href="https://numix-brown.vercel.app"
            title="Alcohol Calculator"
            description="Collab with Benny. I made the original site and he made it a lot better. You can use it to know how much alcohol is in your drink using a standard 1.5oz shot of 80 proof liquor as a universal measurement for one drink. Helpful if you are trying to precisely measure how drunk you are going to get. Also helpful for self-experimentation as it creates a control group. You can, for example, know which factors outside of alcohol content contribute to your hangover symptoms so you can optimize your drinking. By optimize I mean getting as drunk as possible with no consequences. Mine is 2 shots. It used to be 3. One day it will probably be 1 at which point I will consider my days numbered."
          />

          <ProjectButton
            href="https://figura-three.vercel.app"
            title="Figura"
            description="Similar to this website in the sense that it is entirely disorganized and half the pages are missing content. It has some stuff though."
          />

          <ProjectButton
            href="https://yamix.vercel.app"
            title="YAMIX"
            description="One single visual diagram I made."
          />

          <ProjectButton
            href="https://abix-ten.vercel.app"
            title="ABIX"
            description="Another nonsensical thing I made a while ago."
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <h2 className={`text-2xl font-bold text-[var(--text)] ${raleway.className}`}>From Others</h2>

          <ProjectButton
            href="https://personal.math.ubc.ca/~cass/frivs/latin/latin-dict-full.html"
            title="Latin Word List"
            description="Very extensive reference site for latin words. I like this website. It is nice if you want to search for a root or something. You can also just read it in the way a child before iPads might have read the English dictionary when they were bored. It is sort of fun to experience boredom from the perspective of a pre-internet child."
          />
          <ProjectButton
            href="https://annas-archive.org"
            title="Annas Archive"
            description="Largest online shadow library. They have an information page with a better description than I could give. NOTE: It is each of our individual ethical responsibilities to do research on the origins of texts we are thinking about pirating and decide whether or not it is right to do so. There are times when I do not think it is. Do not steal from individuals. Only steal from corporations. It is also good to support your local library. Individual action matters at the local level."
          />

          <ProjectButton
            href="https://www.canada.ca/en.html"
            title="Canadian Government Website"
            description="Has many resources that are more reputable than the resources available on the US government website at this time. Accurate food nutrition database, etc. Nice to look through. No ads for megacorporations"
          />
        </div>
      </div> 
    </div>  
  );
}

function ProjectButton({ href, title, description }: { href: string; title: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
   <motion.a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className={`relative w-64 h-64 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded shadow transition flex flex-col items-center justify-center overflow-hidden ${raleway.className}`}
  initial="collapsed"
  animate={isHovered ? "expanded" : "collapsed"}
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
  style={{ cursor: "pointer" }}
  variants={{
    collapsed: { height: 64, scale: 1 },
    expanded: { height: "auto", scale: 1.05 },
  }}
  transition={{ type: "spring", stiffness: 200, damping: 25 }}
>
  <span className="z-10 text-center text-2xl">{title}</span>
  <motion.span
    className={`mt-2 px-2 text-sm text-[var(--text)] text-center select-text ${montserrat.className}`}
    initial={{ opacity: 0, height: 0 }}
    animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 25 }}
    style={{ overflow: "hidden" }}
  >
    {description}
  </motion.span>
</motion.a>
  );
}