import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * Everything on the site is populated from src/content. The article pages are
 * assembled from a short list of blocks (section 9.3 of the design spec).
 */

const imageRef = z.object({
  src: z.string(),
  alt: z.string().default(''),
  caption: z.string().optional(),
  credit: z.string().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
});

const placement = z.enum(['left', 'centre', 'right']).default('centre');

const block = z.discriminatedUnion('type', [
  z.object({ type: z.literal('intro'), html: z.string() }),
  z.object({ type: z.literal('large'), html: z.string() }),
  z.object({ type: z.literal('text'), html: z.string(), placement }),
  z.object({ type: z.literal('image'), image: imageRef, placement }),
  z.object({ type: z.literal('gallery'), images: z.array(imageRef), size: z.enum(['large', 'small']).default('large') }),
  z.object({ type: z.literal('break') }),
  z.object({ type: z.literal('subheading'), text: z.string() }),
  z.object({ type: z.literal('row'), title: z.string().optional(), html: z.string(), image: imageRef.optional(), side: z.enum(['left', 'right']).default('right') }),
  z.object({ type: z.literal('faq'), question: z.string(), html: z.string() }),
  z.object({ type: z.literal('video'), url: z.string() }),
  z.object({ type: z.literal('small'), html: z.string() }),
  z.object({ type: z.literal('form'), form: z.literal('booking') }),
  z.object({ type: z.literal('downloads'), groups: z.array(z.object({ title: z.string(), files: z.array(z.object({ label: z.string(), href: z.string(), thumb: z.string() })) })) }),
]);
export type Block = z.infer<typeof block>;

// Article pages: one file per page, keyed by "section/child".
const pages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    blocks: z.array(block),
  }),
});

// Index items (works of Barragán, spaces of the house). Items with `detail` get a page.
const item = z.object({
  title: z.string(),
  year: z.string(),
  category: z.string().optional(),
  notes: z.string().optional(),
  location: z.string().optional(),
  address: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  thumb: z.string().optional(),
  order: z.number().optional(),
  detail: z.object({
    cover: imageRef.optional(),
    intro: z.string().optional(),
    meta: z.string().optional(),
    blocks: z.array(block).default([]),
  }).optional(),
});

const works = defineCollection({ loader: glob({ pattern: '**/*.json', base: './src/content/works' }), schema: item });
const spaces = defineCollection({ loader: glob({ pattern: '**/*.json', base: './src/content/spaces' }), schema: item });

const chronology = defineCollection({
  loader: file('./src/content/chronology.json'),
  schema: z.object({ id: z.string(), year: z.string(), html: z.string(), image: imageRef.optional(), side: z.enum(['left', 'right']).optional(), casaMeyer: z.boolean().default(false) }),
});

const home = defineCollection({
  loader: file('./src/content/home.json'),
  schema: z.object({
    id: z.string(),
    section: z.string(),            // section slug
    heading: z.string(),
    html: z.string(),
    pill: z.object({ label: z.string(), href: z.string() }),
    photo: imageRef.optional(),
    carousel: z.boolean().default(false),
  }),
});

const tours = defineCollection({
  loader: file('./src/content/tours.json'),
  schema: z.object({ id: z.string(), name: z.string(), duration: z.string(), price: z.string(), html: z.string(), image: imageRef.optional() }),
});

export const collections = { pages, works, spaces, chronology, home, tours };
