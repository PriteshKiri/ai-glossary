import Link from "next/link";
import { Suspense } from "react";
import { Explorer } from "@/components/explorer";
import { paths, pathSteps, terms } from "@/data/glossary";

export default function Page() {
  const cards = terms.map(({ slug, name, letter, aliases, category, level, summary }) => ({
    slug,
    name,
    letter,
    aliases,
    category,
    level,
    summary,
  }));

  return (
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent)]">Field guide</p>
      <h1 className="mt-2 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
        The language of AI, A to Z.
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
        Short definitions, then the best place to actually learn the term. {terms.length} entries,
        no account, no database.
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {paths.map((path) => (
          <li key={path.slug}>
            <Link
              href={`/paths/${path.slug}`}
              className="block rounded-2xl bg-[#1c1915] p-4 text-[#f4f0e6]"
            >
              <p className="text-xs uppercase tracking-wide text-[#e7c07a]">Guided path</p>
              <h2 className="mt-1 font-serif text-2xl">{path.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#d9d3c7]">{path.summary}</p>
              <p className="mt-3 text-xs text-[#e7c07a]">{pathSteps(path).length} terms</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Suspense fallback={<p className="text-sm text-[var(--muted)]">Loading the index…</p>}>
          <Explorer terms={cards} />
        </Suspense>
      </div>
    </div>
  );
}
