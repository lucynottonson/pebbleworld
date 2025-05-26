import type { Metadata } from "next";
import {Merriweather} from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const merriweatherSerif = Merriweather({
  variable: "--font-merriweather",
  weight: ["300"],
  style: "normal",
  subsets: ['latin']
});

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
    <html lang="en" className="bg-[color:var(--background)] text-[color:var(--text)]">
      <head>
        <link rel="icon" href="/pebbles.ico" type="image/x-icon" />
      </head>
      <body
        className={`${merriweatherSerif.variable} antialiased bg-[color:var(--background)] text-[color:var(--text)]`}
      >
        <>
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}
