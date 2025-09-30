import type { Metadata } from "next";
import RootLayoutShell from "./pcomponents/RootLayoutShell";
import { Analytics } from "@vercel/analytics/react"; // 
export const metadata: Metadata = {
  title: "Welcome to Pebble World",
  description: "what stone makes of",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayoutShell>
      {children}
      <Analytics /> 
    </RootLayoutShell>
  );
}