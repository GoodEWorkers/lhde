import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const modules = defineCollection({
  loader: glob({ base: './src/content/modules', pattern: '**/*.mdx' }),
  schema: z.object({
    /** Stable, language-independent URL segment. Identical in FR and EN. (Not named `slug`: the glob loader would hijack it as the entry id.) */
    route: z.string(),
    lang: z.enum(['fr', 'en']),
    order: z.number().int().positive(),
    phase: z.number().int().min(1).max(4),
    level: z.enum(['intro', 'core', 'advanced', 'project']),
    title: z.string(),
    subtitle: z.string(),
    /** One sentence, verb-first: what the learner can do afterwards. */
    outcome: z.string(),
    /** Section headings previewed on the module card and at the top of the page. */
    agenda: z.array(z.string()).min(2),
    /** Minutes of guided study, activities included. */
    duration: z.number().int().positive(),
    /** Short question the module answers — used on the pathway map. */
    question: z.string(),
    /** How this module reopens the Argus running case. */
    argus: z.string(),
    /** Provenance of the teaching material. */
    sources: z.array(z.string()).default([]),
  }),
});

export const collections = { modules };
