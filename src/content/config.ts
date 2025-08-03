import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Trasforma la stringa della data in un oggetto Date di JavaScript
		pubDate: z.date(),
		author: z.string().default('Admin'), // Campo con valore predefinito
		heroImage: z.string().optional(), // Immagine opzionale
		tags: z.array(z.string()).optional(), // Array di stringhe opzionale per i tag
	}),
});

export const collections = {
  'blog': blogCollection,
};