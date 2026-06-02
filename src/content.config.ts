import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		slug: z.string().optional(),
		date: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		category: z.string().optional(),
		tags: z.array(z.string()).optional(),
		readingTime: z.string().optional(),
	}),
});

export const collections = {
	blog,
};
