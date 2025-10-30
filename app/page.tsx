
'use client';
import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'], weight: ['400','700'] });

export default function HomePage() {
  const recentPonds = [
    { title: 'WTAGB - Binaries', href: '/pond/pond2/1', date: 'October 30, 2025' },
  ];

  return (
    <div
      className="relative w-full h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >


      <div className="container mx-auto h-full px-6">
        <div className="flex flex-row h-full items-start space-x-6 py-12">
          <main className="flex-1 min-w-0">
            <div className="flex flex-col items-center justify-start h-full space-y-6">
              <div className="w-full max-w-2xl h-32 bg-[var(--text)]/10 border border-[var(--background)] rounded-xl flex items-center justify-center px-4">
                <p className={`text-[var(--text)] ${raleway.className}`}>HAPPY OCTOBER!!! School has started, and now life is worth living. Any nihilistic or otherwise anti-fun statement made over the summer is no longer part of my worldview. I changed the site colors to reflect this shift. Sorry about that. I get unhappy when bored. Never take anything I say seriously.</p>
              </div>

              <div className="w-full max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--background)] rounded-xl flex items-center justify-center px-4">
                <p className={`text-[var(--text)] ${raleway.className}`}>I am currently trying to create an organization system that is normal and makes sense. This is more difficult than you might think. Most of the site is down right now because of this. You cannot see the progress that has been made, but I promise it is coming together.</p>
              </div>

              <div className="w-full max-w-xl h-32 bg-[var(--text)]/10 border border-[var(--background)] rounded-xl flex items-center justify-center px-4">
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
