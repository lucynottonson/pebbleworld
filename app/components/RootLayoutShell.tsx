import Navbar from "../components/navbar";
import "../globals.css";

export default function RootLayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className="bg-[color:var(--main)] text-[color:var(--text)] antialiased">
  <Navbar />
  {children}
</body>
    </html>
  );
}