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
            <span className="text-[var(--baccent)] font-bold text-xl text-center w-full">Topics of Inquiry and Insanity</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 md:flex-row md:items-stretch w-full">
          <div className="w-full border border-[var(--accent)] rounded-lg p-4 shadow-md flex flex-col items-center gap-2">
            <span className="text-[var(--baccent)] font-bold text-l text-center w-full"> My attempt at an exhaustive list of questions with psychologically destabilizing implications. Specifically, questions I have found to be permanently and necessarily unresolvable. Why do this? I don’t fucking know. Because I’m bored. Mainly, it is fascinating to me that abstract thought exists entirely outside the bounds of rationality. There seems to be no purpose for this except to torture me specifically. So in response, I have made this attempt to collect and systemetize my tormenters. I am aware already of the clear obsessive compulsive nature of this. The existence of obsessive compulsive disorder may as well be its own entry. I will refrain from adding it though, mostly so that I can maintain this opening statement which alludes to its nonexistence. If I were to add OCD to the bottom of the list, I'd have to modify all of this commentary. Where's the fun in that?
</span>
          </div>
        </div>

<ToggleBox title="Accessing the Content of One's Own Mind">
  <p>You can't! Not really. And if you could, you wouldn't know, and you could never be certain. True self-awareness is impossible. So why attempt to achieve it? How does one know if they are correct or incorrect? And with the existence of placebo, how does one know whether or not their experience is being framed by a diagnostic product of false self awareness?</p>
</ToggleBox>
<ToggleBox title="Accessing the Content of Other Minds">
  <p>Even worse. Although, arguably easier than accessing the content of one's own mind. The most significant barrier to self-awareness is lack of an external observer. If you are the external observer of another mind, perhaps your evaluations have more of a capacity for accuracy. That is of course if you are able to maintain objectivity, which you are obviously not. As a matter of fact, I think it may be necessary later to add "objectivity" to this list.</p>
</ToggleBox>
<ToggleBox title="Language and its Limitations">
  <p>Self-explanatory I guess. Ironically.</p>
</ToggleBox>
<ToggleBox title="The Evolutionary Function of Complex Emotion">
  <p>Specifically, why is it necessary, and what is its function. Is it a mistake?</p>
</ToggleBox>
<ToggleBox title="Psychological Suffering">
  <p>Similarly, why? What is the function of psychological suffering. I suppose it is most rational to assume that there is none. I guess because of that this does not really belong on the list.</p>
</ToggleBox>
<ToggleBox title="The Evolutionary Function of Divergent Cognition">
  <p>Pretentious way of wondering why I exist, and what absolutely catastrophic collection of DNA mutations led to the existence of my brain.</p>
</ToggleBox>
<ToggleBox title="The Social Utility of Defining Evil">
  <p>What actaully is it? It is clear that evil does not really exist. But it is also clear that we need to believe it does. Is it all to cope with suffering? Is that the answer to most of these questions? I'm starting to think I haven't actaully thought enough. Maybe this is answerable. Wondering whether or not the question itself is answerable probably took a lot of time away from potential productive thoughts about it. Will revisit later.</p>
</ToggleBox>
<ToggleBox title="Consciousness and Altered States">
  <p>What is actually happening in an altered state? Not to the body but to the mind's perception of reality? How can one prove that an altered state is any less real than the default state. How can "altered state" even be defined with no real understanding of the default state?</p>
</ToggleBox>
<ToggleBox title="The Evolutionary Purpose of Metacognitive Thought">
  <p>Well now that I'm here I think I already covered this. I'll leave it for now. These statements are all placeholders. This is not what will actually be here.</p>
</ToggleBox>
<ToggleBox title="Post-Traumatic Pathology">
  <p>What the fuck has happened to my brain and how do I end it? Surely this is not evolutionarily advantageous? Is it simply that trauma is defined by events that logically do not fit into the brain's understanding of the world? If my dog gets stung by a bee, he may become afraid of bees. This makes sense. If I am abused by a domestic partner, it should logically follow that I would go on being afraid of my domestic partner, or maybe even domestic partners in general. So why is it that if I am abused by my domestic partner, I am not only unafraid of my domestic partner, but afraid of entirely unrelated things. Why should I become depressed and pessimistic? What is the logical purpose of this?</p>
</ToggleBox>
<ToggleBox title="Empathy">
  <p>What is it? Why don't others have it? Why is it blunted sometimes? What is its function?</p>
</ToggleBox>
<ToggleBox title="Faith and Religious Thought">
  <p>If it is irrational to believe in God, why do I wish that I did? Why is there comfort in the idea of God? Why does religious belief serve as the greates cope for existence of all time, despite being so irrational. Additionally, given how irrational it is, how is it possible that it has so many supporters? What happened there?</p>
</ToggleBox>
<ToggleBox title="Purpose and Meaning-Making">
  <p>Why do I want to do that? What is the function of having meaning. Why is it necessary. Why does anyone care if there is meaning. Is it all to cope with suffering? Meaning and religious thought are intertwined, but when I explore this more I will explain my distinction. I don't feel like it now.</p>
</ToggleBox>
<ToggleBox title="Humanity">
  <p>What is humanity and why do we care? I don't mean the species definition, all of that is arbitrary. Why have we created such a distinction. You know what, I have a bigger quesiton now that I'm writing this out. What is the purpose of our labeling things and distinguishing between things so obnoxiously and obsessively. Is it just a byproduct of language? I don't get it.</p>
</ToggleBox>
<ToggleBox title="Death and Cessation of Consciousness">
  <p>I don't get it. I understand it logically but I obviously can't imagine what this would feel like. I would quite like to take a break from being conscious, why don't I get to before death? Even in my sleep I must think. Why?</p>
</ToggleBox>
<ToggleBox title="The Experience of Fear">
  <p>I do not personally feel afraid of any physical thing. I genuinely fear my own experience of fear. In other words, I don't rationally care what happens to me so long as I do not feel negatively about it. I guess this extends to other emotions as well, but fear seems the most irrational. Why does fear exist psychologically as well as physically? Might we be better suited for disaster with only one or the other? What psychiatric medication can entirely dull this physical experience for me? Why does it always feel like I am in danger? Does that not seem counterproductive? What is the evolutionary function of this?</p>
</ToggleBox>
      </div>
    </main>
  );
}