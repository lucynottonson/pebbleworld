import type { Metadata } from "next";
import RootLayoutShell from "./components/RootLayoutShell";

export const metadata: Metadata = {
  title: "Welcome to Pebble World",
  description: "what stone makes of",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayoutShell>{children}</RootLayoutShell>;
}
