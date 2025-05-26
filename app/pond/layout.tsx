import Sidebar from "./components/pondnavbar";

export default function PondLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-4 w-full">{children}</div>
    </div>
  );
}