import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Primer — an A–Z field guide to AI",
    template: "%s · Primer",
  },
  description:
    "A small, static field guide to the AI terms in current use, with definitions and places to learn them.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#1c1915] text-[#f4f0e6]">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
            <Link href="/" className="font-serif text-lg tracking-tight">
              Primer
            </Link>
            <nav className="flex gap-4 text-sm text-[#d9d3c7]">
              <Link href="/paths/start-here" className="hover:text-white">
                Start here
              </Link>
              <Link href="/" className="hover:text-white">
                Index
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>
        <footer className="mx-auto w-full max-w-5xl px-4 py-8 text-xs leading-5 text-[var(--muted)]">
          Summaries are written for this guide. Follow the linked sources for the full treatment.
          Nothing here is stored in a database.
        </footer>
      </body>
    </html>
  );
}
