"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import { categories, levels, type Category, type Level } from "@/data/types";

export type Card = {
  slug: string;
  name: string;
  letter: string;
  aliases: string[];
  category: Category;
  level: Level;
  summary: string;
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function Explorer({ terms }: { terms: Card[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const q = (params.get("q") ?? "").trim();
  const letter = params.get("letter") ?? "";
  const category = params.get("category") ?? "";
  const level = params.get("level") ?? "";

  function update(next: Record<string, string>) {
    const search = new URLSearchParams(params.toString());
    for (const [key, value] of Object.entries(next)) {
      if (value) search.set(key, value);
      else search.delete(key);
    }
    const query = search.toString();
    router.replace(query ? `/?${query}` : "/", { scroll: false });
  }

  const needle = q.toLowerCase();
  const shown = terms.filter((term) => {
    if (letter && term.letter !== letter) return false;
    if (category && term.category !== category) return false;
    if (level && term.level !== level) return false;
    if (!needle) return true;
    const haystack = [term.name, term.summary, term.category, ...term.aliases]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });

  return (
    <div>
      <div className="sticky top-14 z-10 -mx-4 border-b border-[var(--line)] bg-[var(--bg)]/95 px-4 py-3 backdrop-blur">
        <label className="block">
          <span className="sr-only">Search terms</span>
          <input
            value={q}
            onChange={(event) => update({ q: event.target.value })}
            placeholder="Search terms, aliases, ideas"
            className="w-full rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2.5 text-sm outline-none ring-[var(--accent)] focus:ring-2"
          />
        </label>
        <div className="mt-3 flex gap-1 overflow-x-auto pb-1">
          <FilterButton active={!letter} onClick={() => update({ letter: "" })}>
            All
          </FilterButton>
          {letters.map((item) => (
            <FilterButton
              key={item}
              active={letter === item}
              onClick={() => update({ letter: letter === item ? "" : item })}
            >
              {item}
            </FilterButton>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {categories.map((item) => (
            <FilterButton
              key={item}
              active={category === item}
              onClick={() => update({ category: category === item ? "" : item })}
            >
              {item}
            </FilterButton>
          ))}
          {levels.map((item) => (
            <FilterButton
              key={item}
              active={level === item}
              onClick={() => update({ level: level === item ? "" : item })}
            >
              {item}
            </FilterButton>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-[var(--muted)]">
        {shown.length} {shown.length === 1 ? "term" : "terms"}
      </p>
      {shown.length === 0 ? (
        <p className="mt-6 text-sm">
          Nothing matches.{" "}
          <button className="underline" onClick={() => update({ q: "", letter: "", category: "", level: "" })}>
            Clear filters
          </button>
        </p>
      ) : (
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {shown.map((term) => (
            <li key={term.slug}>
              <Link
                href={`/terms/${term.slug}`}
                className="block h-full rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 transition hover:border-[var(--accent)]"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-serif text-xl leading-tight">{term.name}</h2>
                  <span className="font-mono text-xs text-[var(--muted)]">{term.letter}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{term.summary}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-[var(--accent)]">
                  {term.category} · {term.level}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-2.5 py-1 text-xs ${
        active
          ? "bg-[var(--ink)] text-[var(--bg)]"
          : "bg-[var(--card)] text-[var(--muted)] ring-1 ring-[var(--line)]"
      }`}
    >
      {children}
    </button>
  );
}
