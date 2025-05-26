import Sidebar from "./components/pondnavbar";
import "../globals.css";

export default function PondLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[color:var(--background)] text-[color:var(--text)] antialiased">
        <div className="flex">
          <Sidebar />
          <main className="ml-4 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}