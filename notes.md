pages I would like to make:

- dsm musings 
- sickness and autism 
- getting shot problem 
- good and evil 
- religion ?
- on introspection
- on meaning and finding meaning 
- veganism ????
- fun arguments 
- symbolic events (birb for example)
- on intelligence and precocity 
- on what we owe each other 
- things that make me angry 
- on humor and why does no one think im joking when im clearly joking
- on taking things in the world seriously 
- on language and pictures 
- arguing about kant for a whole page 
- on the value and limitations of science 
- on the ineffable
- why doesn't anyone care about themselves or each other?




sites iwant to add to sites list but need better description:

https://www.vangoghmuseum.nl/en

https://appagg.com/?hl=en

https://www.drugs.com/imprints.php

https://www.wholecelium.com

references for mushrooms page:
https://pmc.ncbi.nlm.nih.gov/articles/PMC12061882/
https://www.hopkinsmedicine.org/psychiatry/research/psychedelics-research
https://www.thehotline.org

https://plato.stanford.edu/entries/socrates/

page with the correct formatting code 

'use client';
import { motion } from "framer-motion";
import { Raleway } from 'next/font/google';
import { useState } from 'react';
const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });
export default function PondPage() {
  return (
    <div
      className="min-h-screen bg-[var(--background)] p-6 flex flex-col items-center"
    >
    <motion.div
  className="mt-20 mb-2 z-10 flex flex-col items-center w-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className={`text-4xl font-bold text-[var(--text)] ${raleway.className}`}>
          Pond
        </span>

        <span className={'text-xl font-normal text-[var(--text)] ${raleway.className}'}>
         Media in the form of text. Most deranged part of this website. 
        </span>
      </motion.div>

      <div className="flex flex-col items-center justify-start flex-grow space-y-4 mt-4 w-full max-w-4xl">

        <ProjectButton
        href='/pond/pond1'
        title="Uncategorized"
        description="this does not actually exist I just need to make the whole system first"
      />

       <ProjectButton
        href='/pond/pond2'
        title="Why Things are Good and Bad"
        description="me giving topics a full overview and listing why they are good and bad. Because everything is a little of both."
      />

        <ProjectButton
        href='/pond/pond3'
        title="Bookshelf"
        description="Books and me yap maxing about them"
      />


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
  className={`relative w-[22rem] h-[12rem] bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded shadow transition flex flex-col items-center justify-center overflow-hidden ${raleway.className}`}
  initial="collapsed"
  animate={isHovered ? "expanded" : "collapsed"}
  onHoverStart={() => setIsHovered(true)}
  onHoverEnd={() => setIsHovered(false)}
  style={{ cursor: 'pointer' }}
  variants={{
    collapsed: { height: 64, scale: 1 },
    expanded: { height: 'auto'},
  }}
  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
>
<span className="z-10 text-center text-[clamp(0.8rem,1.5vw,1.2rem)]">{title}</span>
  <motion.span
    className={`mt-0 px-2 text-sm text-[var(--text)] text-center select-text ${raleway.className}`}
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

PAGES WITH CORRECT FORMATTING:
[ ] home page
[x] pond/page.tsx
[ ] pond/pond1/page.tsx
[ ] pond/pond2/page.tsx
[ ] pond/pond3/page.tsx
[x] gallery/page.tsx
[ ] gallery/animations/page.tsx
[ ] gallery/audio/page.tsx
[ ] gallery/visual/3D/page.tsx
[ ] gallery/visual/2D/page.tsx
[ ] info/page.tsx
[x] otherprojects/page.tsx
[ ] throw/page.tsx
