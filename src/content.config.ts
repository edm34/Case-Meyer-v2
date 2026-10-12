import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * The site is populated from the files in src/content — the same way the
 * Barragan Foundation site is driven by its works and archive index.
 * Add a markdown file to a folder and it appears in that section's index.
 */

const image = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  credit: z.string().optional(),
});

// The rooms, walls and elements of the house — the "Works" list of the house.
const spaces = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/spaces' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    order: z.number(),
    year: z.string().optional(),
    cover: image,
    gallery: z.array(image).default([]),
    placeholder: z.boolean().default(false),
  }),
});

// Drawings, photographs and documents — the archive.
const archive = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/archive' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['drawing', 'photograph', 'watercolor', 'document']),
    date: z.string().optional(),
    author: z.string().optional(),
    medium: z.string().optional(),
    dimensions: z.string().optional(),
    inscription: z.string().optional(),
    order: z.number(),
    image: image,
  }),
});

// Dated entries for the Luis Barragán chronology.
const chronology = defineCollection({
  loader: file('./src/content/chronology.json'),
  schema: z.object({
    id: z.string(),
    year: z.string(),
    title: z.string(),
    text: z.string(),
    casaMeyer: z.boolean().default(false),
  }),
});

// Home slideshow — full-bleed images in order.
const slides = defineCollection({
  loader: file('./src/content/slides.json'),
  schema: z.object({
    id: z.string(),
    src: z.string(),
    alt: z.string(),
    caption: z.string(),
    href: z.string().optional(),
    tone: z.enum(['light', 'dark']).default('light'),
  }),
});

const tours = defineCollection({
  loader: file('./src/content/tours.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    duration: z.string(),
    price: z.string(),
    text: z.string(),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { spaces, archive, chronology, slides, tours };
