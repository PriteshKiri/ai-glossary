import { termsAD } from "./terms-a-d";
import { termsEH } from "./terms-e-h";
import { termsIL } from "./terms-i-l";
import { termsMP } from "./terms-m-p";
import { termsQT } from "./terms-q-t";
import { termsUZ } from "./terms-u-z";
import type { Path, Term } from "./types";

export const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const terms: Term[] = [
  ...termsAD,
  ...termsEH,
  ...termsIL,
  ...termsMP,
  ...termsQT,
  ...termsUZ,
].sort((a, b) => a.letter.localeCompare(b.letter) || a.name.localeCompare(b.name));

const bySlug = new Map(terms.map((term) => [term.slug, term]));

export function getTerm(slug: string) {
  return bySlug.get(slug);
}

export function relatedTerms(term: Term) {
  return term.related
    .map((slug) => bySlug.get(slug))
    .filter((item): item is Term => Boolean(item));
}

export function neighbors(slug: string) {
  const index = terms.findIndex((term) => term.slug === slug);
  return {
    prev: index > 0 ? terms[index - 1] : undefined,
    next: index >= 0 ? terms[index + 1] : undefined,
  };
}

export const paths: Path[] = [
  {
    slug: "start-here",
    title: "Start here",
    summary: "Ten words that the rest of the guide assumes you know.",
    steps: [
      "artificial-intelligence",
      "machine-learning",
      "neural-network",
      "training",
      "model",
      "token",
      "transformer",
      "llm",
      "prompt",
      "evaluation",
    ],
  },
  {
    slug: "use-a-model",
    title: "Use a model",
    summary: "What you actually wire up: prompts, retrieval, tools, and the ways they fail.",
    steps: [
      "prompt",
      "context-window",
      "embedding",
      "rag",
      "tool-use",
      "agent",
      "hallucination",
      "guardrail",
    ],
  },
];

export function getPath(slug: string) {
  return paths.find((path) => path.slug === slug);
}

export function pathSteps(path: Path) {
  return path.steps
    .map((slug) => bySlug.get(slug))
    .filter((item): item is Term => Boolean(item));
}
