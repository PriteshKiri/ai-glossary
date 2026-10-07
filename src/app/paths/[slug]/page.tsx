import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPath, pathSteps, paths } from "@/data/glossary";

export function generateStaticParams() {
  return paths.map((path) => ({ slug: path.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const path = getPath(slug);
  if (!path) return { title: "Not found" };
  return { title: path.title, description: path.summary };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const path = getPath(slug);
  if (!path) notFound();
  const steps = pathSteps(path);

  return (
    <article className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">Guided path</p>
      <h1 className="mt-2 font-serif text-5xl">{path.title}</h1>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{path.summary}</p>
      <ol className="mt-8 space-y-3">
        {steps.map((term, index) => (
          <li key={term.slug}>
            <Link
              href={`/terms/${term.slug}`}
              className="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4 hover:border-[var(--accent)]"
            >
              <span className="font-mono text-sm text-[var(--accent)]">{index + 1}</span>
              <span>
                <span className="block font-serif text-xl">{term.name}</span>
                <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">{term.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
