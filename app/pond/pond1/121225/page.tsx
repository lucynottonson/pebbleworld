'use client';
import { motion } from "framer-motion";
import { Raleway } from 'next/font/google';
import { Montserrat } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600'] });

//THIS IS NOT A PUBLISHED PAGE, IT IS A TEMPLATE FOR THE OTHER PAGES TO COPY

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
          Recent Thoughts and Things
        </h1>
        <p className={`text-lg text-[var(--text)]/80 ${raleway.className}`}>
          December 12, 2025
        </p>
      </motion.div>

      <div className="w-full max-w-3xl space-y-8">
        <div className={`text-[var(--text)] text-lg leading-relaxed space-y-4 ${montserrat.className}`}>
          <p>
            Hello. My quarter just ended and I am now without stimulus. I decided to revisit this website as I do not really remember why I decided to stop and I need a place to express myself. Did I make any new friends at my new school? No. Lol. I have not spoken to anyone. I am becoming increasingly agoraphobic and I am not sure much can be done about it. But I also did not get to choose my classes for fall quarter so that probably contributed to my discontent.
          </p>
          <p>
            I am just going to provide my stream of consciousness as I do not feel that it is important to adhere to any sort of system anymore. I think when I stopped doing this my insanity was largely focused on organization and other trivial matters. Now it is focused primarily on the state of my consciousness and death and other worse things. But it always feels like whatever it is focused on is the worst possible thing. It is never logical. But I am free to some extent in this specific way. Every time it switches I am freed in some area and constrained in another. I can never get bored. They do not make a medication for this btw but thanks for wondering. But I digress. Lets move on. 
          </p>
          <p>
            Can I share some facts I just found? Thanks, I am going to. 
          </p>
          <link rel="stylesheet" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8135245/" />
          <p>
           I found this really funny study on how heavier drinking is associated with higher IQ. I have not published my anti-solipsism manifesto on here, but once I do I will be more valid for pointing this out. Just know, I am anti-solipsism. You just have to believe me for now. 
          </p>
          <p>
        I would also like to mention that I am against the IQ test as a measure of intelligence. It is not a good measure of intelligence. It does not take into account many important types of intelligence and (this is not a flex I am just stating my truth as anecdotal evidence for my claim but I am sorry regardless again you will like me more after anti-solipsism manifesto, I promise) at least when I took it (in 2005 or something) it maxed out every section at 150. If you scored higher than 150 it was labeled 150+, which means that 150 was the number factored into your overall IQ score at the end. This means that if you scored 151 on every section you would get the same overall IQ score as someone who scored 200 on every section. This obviously gives higher relative scores to people whose intelligence spans all categories more evenly. I am not coping and I do not care, but that lends itself to extra bias since the weight of and differentiation between the categories is determined by the testmaker and they all max out at 150. Similarly to the aspbergers diagnosis criteria, the IQ test is designed to measure who will be most suited for capitalism. Under capitalism, no measure of intelligence is trustworthy. No measure of value is trustworthy, for that matter.
          </p>
            <p>
            Ok now that I have said my piece on IQ tests, I will move on. IQ means SOMETHING, just not everything. I think that can be said for the now nonexistent aspbergers diagnosis as well. Neither is a counterfactual assessment, they just weigh things in a way that is biased towards capital productivity. And (again this is not personal, just stating my truth) I think it is genuinely insane to have one category of the IQ test be &quot;verbal comprehension&quot; and everything else being something that in some way corresponds to math. The literacy crisis and death of the humanities began long before AI. 
          </p>
          <p>
            Anyway, I am done ranting about IQ tests for now. I will move on to other things. The study I linked points to a correlation between high IQ and heavy alcohol use, which I think is actually relevant information. I would again point out that the IQ test does likely identify individuals with higher intelligence, it just overvalues certain things in terms of importance and undervalues others. Also it implies innate intelligence which I think is only partially relevant. 
          </p>
          <p>
            I apologize, by the way, for the repeated references to anti-solipsism or to my possible bias against information that is relevant to my personal existence. This is a touchy subject for everyone, including me, and even in my own private musings I am careful to avoid relying too heavily on hierarchical analyses of human beings, regardless of their category. I do not believe in any of that, and I am always afraid of that coming through unintentionally. I do not believe I am of more value than others because my measured IQ is higher, nor do I feel resentment towards the IQ test for maxing out my verbal intelligence. There is no reality in which I think it was okay or appropriate to give a five year old an IQ test. I wish I did not know any of that. It has only harmed me. It has only harmed others. 
          </p>
          <p>
            With all that being said, I do think that intelligence is a real thing, I just do not believe that it is necessarily quantitatively measurable. I think any scenario where you apply numerical value to a human being is problematic, regardless of its correspondance to actual data. We should never do this. But that is not how research works, as you may have noticed. I believe in science, and I believe that scientific research is good. But I do not believe in the split between science and the humanities that has occured under capitalism. Scientific data means NOTHING without interpretation and nuance. I think there is a belief among STEM advocates that scientific data is entirely objective, or that it in some way is exempt from human bias. This is obviously not true. From the way data is collected, to the way it is analyzed, to the way it is presented, human bias is present at every step of the process. It genuinely does require someone who understands the inherent subjectivity to every fact and every piece of data in the world to properly interpret the findings of a scientific study. There never should have been a split between humanities disciplines and STEM disciplines in the first place. They should not operate in two different worlds. They should not occupy geographically two different sides of the same college campus. No person can have a complete understanding of the world without the influence of both. I resent even the word both for implying that they are somehow two separate things when they are not and never have been. 
          </p>
          <p>
            I have basically said nothing, especially not anything about what I first intended to write about. I think initially I was going to write a funny thing about how I am valid for liking alcohol as much as I do. But I realized quickly that I was going against the tenets of anti-solipsism by doing that. I do not want to center my own experience in everything I write about. I want to write about things that are universally relevant, even if they are filtered through my own experience. I think that is the only way to write anything of value. But it is hard to separate self from interpretation. I am not capable of objectivity either. None of us are. But anyway, I think I have resigned already to going on a bunch of random tangents and never reaching a point. I am going to attempt to be okay with that. I think as long as there is enough of that published to this website, I can tolerate it. It reminds me of some great advice I got before starting high school, where I was told to specifically get a B in my first semester so that I would not be constantly worried about my GPA falling below a 4.0. This was good advice. I have not necessarily followed it, but I think of it often, so I guess it was still effective to some degree. I was like eleven then or something crazy like that. Still kicking though. That is so crazy. 
          </p>
          <p>
            Anyway, I think I have said enough regarding the intelligence/IQ nuances to warrant my discussion now. If I have not I am sorry. I personally love alcohol but only in small quantities. I have small quantitites of alcohol almost every day. I think it is the most effective form of self medication I have ever found besides not eating. And I do think there is some truth to the correlation between alcoholism and intelligence, regardless of what measure they are using to determine what intelligence is. Most people who score high on an IQ test are probably more intelligent than the average person, my point is that numeric value is the wrong way to understand it. But I understand.
          </p>
          <p>
            I wonder if anyone else views human intelligence at a certain degree as an evolutionary flaw, or something that will eventually be reversed or corrected somehow. Alcoholism is not the only thing that has been found to correlate with high intelligence. Mental illness in general has been found to correlate with high intelligence as well. Why are we all so miserable? I would love to say that it is all due to the pressures corresponding with being labeled as intelligent in early childhood, but I doubt that this is the full picture. I know many extremely intelligent people who have expressed confusion about why they feel the way that they do and do not personally identify with high intelligence. I think if I were to assume that I would be basing my interpetation on my own experience which did involve a lot of childhood glazing. But I have since wavered on my opinion about whether or not it was wrong to assign more responsibility over the world to children who seem more intelligent. I do not think this should have come directly or explicitly from the mouth of any adult, but I also am not sure that I think the sentiment itself is wrong. I think I feel a lot of guilt about the lack of responsibility I have taken. And I wonder sometimes whether it is wrong to hold the position that it is not my responsibility more than it is anyone else&apos;s. Would&apos;t we all prefer to think that way? Even if it isn&apos;t about intelligence alone, doesn&apos;t it make the most sense to expect those who can help in some way to help more than those who are less capable? I don&apos;t know. I just fear that my own ego and sense of inferiority is an ethical problem much more than it is a personal one. I am afraid of believing I am really smarter than other poeple. I have developed an entire framework of thought to justify this, but what if it&apos;s wrong? What if I decide I am no better or more capable than another person and it leads to me doing less than I could have otherwise? I don&apos;t know. My life has not been that difficult. Maybe some of the experience of suffering that highly intelligent people have is due to the feeling of responsibility itself, which I don&apos;t think necessarily has to be enforced by an external source. People are not thinking at all, and it seems like an extreme crisis almost all of the time. It feels like we are already doomed, and that there is nothing anyone can do and there never has been. And that it in fact is a mental illness to be able to identify systems and patterns to a degree that shows the causal chain between human suffering and larger systems. What is responsibility? What is the place of the individual in a global economy? In a world that connects billions of people to the existences of one another. Isn&apos;t it supposed to be from each according to their ability? Does that not mean my ability holds me responsible? I don&apos;t know. If we aren&apos;t doomed, I guess, I don&apos;t know. It just feels like, if you can&apos;t do anything, and you can&apos;t think about something else, what choice do you have other than to turn off your brain? Through some means? It is awful to be thinking all of the time. This thought spiral alone has prevented me from doing anything at all about anything. Many people much less intelligent than me are infinitely more capable of action than I am. But can I really blame it on intelligence? I don&apos;t think that&apos;s really fair. To me or to anyone. I don&apos;t know. I know nothing. I am just thinking. There is no end. The difference is whether or not I write it down. I don&apos;t feel sorry for myself anymore, but I also don&apos;t think about it in a productive way. Isn&apos;t every cope self-serving in some way? Whatever. I think that is all I have for now. 
          </p>
          <p>
            I think this was actually less yielding of insight than I even could have predicted with my worst pessimism. But really what matters is that I post it and leave it up. The worse the better. Something has to happen. There needs to be something. Okay, goodbye. Hopefully I will produce something better at some point. This is just an exercise in posting something at all. I have to do something in a direction or nothing will change. I know this much. 
          </p>
        </div>
      </div>
    </div>
  );
}