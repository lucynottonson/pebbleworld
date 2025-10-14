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
            description="Collab with Benny. I made the original site and he made it a lot better. You can use it to know how much alcohol is in your drink using a standard 1.5oz shot of 80 proof liquor as a universal measurement for one drink. Helpful if you have very bad anxiety about getting too drunk."
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
            href="#"
            title="Placeholder Link 2"
            description="im going to link things here that i like but didnt take part in"
          />

          <ProjectButton
            href="#"
            title="Placeholder Link 3"
            description="im going to link things here that i like but didnt take part in"
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