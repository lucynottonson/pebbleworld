'use client';
import { Raleway, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import { useState } from 'react';

const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: '400' });

export default function PondPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 gap-8" style={{ backgroundColor: "var(--background)" }}>

      <p className={`text-center max-w-2xl text-lg leading-relaxed ${montserrat.className}`}>
        Here are some links to other things I have made. They are all unfinished.
        Rule 1 is never expect me to finish anything ever. I get bored.
        I am hoping that by creating a list of links I will be motivated to finish something. I will try my best to add anything else I remember exists. My long term plan is to put them all on this website, but that will take a long time. 
      </p>

      <ProjectButton
        href="https://words-one-red.vercel.app"
        title="Meaningless sentence generator"
        description="Shuffles a sentence into other sentences with no real meaning. I tried to make it so that the sentences were all grammatically correct but meaningless. I only did one sentence though. It is also not styled."
      />

      <ProjectButton
        href="https://numix-brown.vercel.app"
        title="Alcohol Calculator"
        description="Collab with Benny. I made the original site and he made it a lot better. You can use it to know how much alcohol is in your drink using a standard 1.5oz shot of 80 proof liquor as a universal measurement for one drink. Helpful if you have very bad anxiety about getting too drunk. I use this whenever I drink because I am not chill or fun to go out with and will precisely measure the amount of alcohol I have consumed by this metric and will not drink if I am unable to do so. Hope this helps someone."
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
        description="another nonsensical thing I made a while ago."
      />

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
  style={{ cursor: 'pointer' }}
  variants={{
    collapsed: { height: 64, scale: 1 },
    expanded: { height: 'auto', scale: 1.05 },
  }}
  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
>
  <span className="z-10 text-center text-2xl">{title}</span>
  <motion.span
    className={`mt-2 px-2 text-sm text-[var(--text)] text-center select-text ${montserrat.className}`}
    initial={{ opacity: 0, height: 0 }}
    animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    style={{ overflow: 'hidden' }}
  >
    {description}
  </motion.span>
</motion.a>
  );
}