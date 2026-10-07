import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTerm, neighbors, relatedTerms, terms } from "@/data/glossary";

export function generateStaticParams() {
  return terms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return { title: "Not found" };
  return { title: term.name, description: term.summary };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) notFound();
  const related = relatedTerms(term);
  const { prev, next } = neighbors(slug);

  return (
    <article className="max-w-3xl">
      <p className="text-sm text-[var(--muted)]">
        <Link href={`/?letter=${term.letter}`} className="hover:underline">
          {term.letter}
        </Link>
        <span> / {term.category}</span>
      </p>
      <h1 className="mt-2 font-serif text-5xl leading-none">{term.name}</h1>
      <p className="mt-4 text-lg leading-8">{term.summary}</p>
      <p className="mt-2 text-xs uppercase tracking-wide text-[var(--accent)]">{term.level}</p>

      <h2 className="mt-10 font-serif text-2xl">Definition</h2>
      <p className="mt-2 text-sm leading-7">{term.definition}</p>

      <h2 className="mt-8 font-serif text-2xl">In practice</h2>
      <p className="mt-2 text-sm leading-7">{term.inPractice}</p>

      <h2 className="mt-8 font-serif text-2xl">Learn this</h2>
      <ol className="mt-3 space-y-3">
        {term.resources.map((resource) => (
          <li key={resource.url} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4">
            <a href={resource.url} target="_blank" rel="noreferrer" className="font-medium underline">
              {resource.title}
            </a>
            <p className="mt-1 text-xs text-[var(--muted)]">{resource.source}</p>
          </li>
        ))}
      </ol>

      {related.length > 0 && (
        <>
          <h2 className="mt-8 font-serif text-2xl">Related</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/terms/${item.slug}`}
                  className="inline-block rounded-full bg-[var(--card)] px-3 py-1 text-sm ring-1 ring-[var(--line)]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-10 flex justify-between gap-4 text-sm">
        {prev ? (
          <Link href={`/terms/${prev.slug}`} className="hover:underline">
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/terms/${next.slug}`} className="hover:underline">
            {next.name} →
          </Link>
        ) : null}
      </div>
    </article>
  );
}
