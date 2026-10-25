import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		coverImage: z.string().optional(),
		liveUrl: z.string().url().optional(),
		repoUrl: z.string().url().optional(),
		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

export const collections = { projects };
