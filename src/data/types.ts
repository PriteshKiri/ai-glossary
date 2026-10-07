export const categories = [
  "Foundations",
  "Models",
  "Training",
  "Language",
  "Data",
  "Evaluation",
  "Agents",
  "Safety",
  "Multimodal",
  "Systems",
] as const;

export const levels = ["foundational", "intermediate", "advanced"] as const;

export type Category = (typeof categories)[number];
export type Level = (typeof levels)[number];

export type Resource = {
  title: string;
  url: string;
  source: string;
};

export type Term = {
  slug: string;
  name: string;
  letter: string;
  aliases: string[];
  category: Category;
  level: Level;
  summary: string;
  definition: string;
  inPractice: string;
  resources: [Resource, Resource];
  related: [string, string];
};

export type Path = {
  slug: string;
  title: string;
  summary: string;
  steps: string[];
};
