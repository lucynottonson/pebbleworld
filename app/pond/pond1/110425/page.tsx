'use client';
import { motion } from "framer-motion";
import { Raleway } from 'next/font/google';
import { Montserrat } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600'] });

export default function PondPage() {
  return (
    <div
      className="min-h-screen w-full px-6 pt-32 pb-16 flex flex-col items-center bg-[var(--background)]"
    >
      <motion.a
        href="/pond/pond1"
        className={`fixed top-24 left-8 w-24 h-10 bg-[var(--accent)] text-[var(--baccent)] font-semibold rounded-lg shadow-md flex items-center justify-center text-center px-3 ${raleway.className}`}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        style={{ cursor: 'pointer' }}
      >
        Back
      </motion.a>
      <motion.div
        className="text-center mb-12"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <h1 className={`text-4xl font-bold text-[var(--text)] mb-2 ${raleway.className}`}>
          Completeness, etc. 
        </h1>
        <p className={`text-lg text-[var(--text)]/80 ${raleway.className}`}>
          November 4, 2025
        </p>
      </motion.div>

      <div className="w-full max-w-3xl space-y-8">
        <div className={`text-[var(--text)] text-lg leading-relaxed space-y-4 ${montserrat.className}`}>
          <p>
            Happy November! I am trying once again to create something that feels complete. I took down my binaries WTAGB page because it felt incomplete. I will try my best to make it feel complete so that I can put it back up, but I historically have had trouble doing that. I never finish anything. This is not an exaggeration at all. I cannot think of a time when I have finished something. Sometimes I stop doing things, but they are not finished. Nothing I do or think about ever feels fully complete. I love starting over and clearing the slate and telling myself that the last thing I was working on will eventually be finished. Is this a problem others have?
          </p>
          <p>
            I made this website in an effort to create a sort of external container for my thoughts. It always feels like I am holding too many thoughts about too many things and if I could just *put* them somewhere, I could move on from them more easily.
          </p>
          <p>
            A website allows me to visually organize things in any way I want to. This removes the constraint of someone else&apos;s organization systsem clashing with the way my brain works. Unfortunately, it also gives me too much freedom, which feels like just as much of a constraint. 
          </p>
          <p>
            I also made this website because I talk a lot and due to this personality trait of mine people sometimes ask me questions about what I think about various subjects. I never know what I think about various subjects. That is why I talk so much. There are never enough words and if there are, I am not good enough to put them together in the right way. My opinions about things are never complete either. How can I know whether or not I will change my mind tomorrow? What if I learn something new? Things never seem to stay the same for long enough to catch them and put them somewhere and fully make sense of them. Nothing really makes sense. Every time something feels like it makes sense I think about it for so long that it loses all of its sense. It feels like there is no sense in the world and if there is I am not good enough to see it.
          </p>
          <p>
            This is actually the first coding project that I have consistently worked on and edited for long enough to feel like it is worth continuing. I told myself that I would continue working on this, and so that is why I have been. I still don't know what it is or what I want it to be. I know enough about myself to push past the planning stage of projects, where I will stay indefinitely if I am not careful. 
          </p>
          <p>
            After trying very seriously to finish the binaries page and failing, I have come to the conclusion that I am not currently in a state to declare something as being complete without an actual time constraint. Things will never be complete. If I go back on an SSRI maybe I will. What kind of a person is so distressed by a lack of a perfect organization system that they need to be medicated? I guess me. 
          </p>
          <p>
            I also feel like I have to declare that I am doing something before I do it. I don&apos;t know why that is either. Maybe it is so I will hold myself to it. Maybe it is because I feel like I need to justify everything I do by explaining my entire thought process. I have no idea. I literally do not know anything at all. 
          </p>
          <p>
            Okay, I am in class now and decided abruptly that I should do what I said I should not do and abandon pebble world temporarily. WHy not indulge in a compulsion while I still can!!!!!!! This is where I am leaving it. If my predictions about myself are correct I will either come back and remove both this entire page and every other half finished thing, or I will leave it as it is exactly and not look at it at all until I feel like I know what I am doing. It is feeling like it will likely be the latter. I am currently thinking about how the homepage says it is october. It is no longer october. Linear time is not even real!!!!!!!!!!!!! ok. bye
          </p>
        </div>
      </div>
    </div>
  );
}