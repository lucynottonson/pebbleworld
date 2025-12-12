
'use client';
import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });

export default function HomePage() {
  const recentPonds = [
    { title: 'December 12 deranged stream of consciousness', href: '/pond/pond1/121225', date: 'December 12, 2025' },
  ];

  return (
    <div
      className="relative w-full h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >


      <div className="container mx-auto h-full px-6">
<div className="flex flex-col md:flex-row h-full items-start md:space-x-6 space-y-6 md:space-y-0 py-12">
          <main className="flex-1 min-w-0">
            <div className="flex flex-col items-center justify-start h-full space-y-6">
              <div className="w-full max-w-2xl bg-[var(--text)]/10 border border-[var(--background)] rounded-xl flex items-center justify-center px-4">
                <p className={`text-[var(--text)] ${raleway.className}`}>HAPPY DECEMBER!!! School has just ended. I have turned in my last final. For a brief period of time, I will be listlessly wandering my own mind and feeling sorry for myself in a very dramatic way. I also have had to recently remove myself from the public internet due to safety reasons. This has not been enjoyable for me. I am coping by adding only to this website, which is not directly linked to my identity as far as I know. I believe it is on Github unfortunately, but you would have to find me on Github to discover that. Any nihilistic or otherwise anti-fun statement made over the summer is probably again part of my worldview. It will change again once I have had something to do. I apologize for any negative philosophical points I make. I can assure you that I will, in a different state of mind, have a counterargument for anything negative I say. The same obviously will be the case in reverse. Nothing I say matters. Everything is true and not true simultaneously. To think is to be insane.</p>
              </div>

              <div className="w-full max-w-xl bg-[var(--text)]/10 border border-[var(--background)] rounded-xl flex items-center justify-center px-4">
                <p className={`text-[var(--text)] ${raleway.className}`}>I am currently trying to create an organization system that is normal and makes sense. This is more difficult than you might think. Most of the site is down right now because of this. You cannot see the progress that has been made, but I promise it is coming together.</p>
              </div>

              <div className="w-full max-w-xl bg-[var(--text)]/10 border border-[var(--background)] rounded-xl flex items-center justify-center px-4">
                <p className={`text-[var(--text)] ${raleway.className}`}>I am adding a list of pages recently added to pond on the homepage, to give the site more of an alive feel. Keep in mind I am giving this update before making a new pond page. I have concepts of the pond page!!!!!!!!! I just wanted to establish a system so the page was not floating in the middle of nowhere. I will edit the date if it does not get completed today. This list is to your right --------C</p>
              </div>
            </div>
          </main>

          <aside className={`w-56 bg-[var(--text)]/5 border border-[var(--background)] rounded-xl p-4 ${raleway.className}`}>
            <h3 className="text-lg font-bold text-[var(--text)] mb-3">Recent Pond Pages</h3>
            <ul className="space-y-3">
              {recentPonds.map((p) => (
                <li key={p.href} className="overflow-hidden">
                  <a href={p.href} className="block text-[var(--text)] hover:underline truncate">{p.title}</a>
                  <div className="text-[var(--text)]/70 text-xs mt-1">{p.date}</div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
