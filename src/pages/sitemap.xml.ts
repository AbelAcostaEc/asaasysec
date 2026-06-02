import { getCollection } from "astro:content";

const site = "https://abelacostaec.github.io";

const formatDate = (date?: Date) => date?.toISOString().split("T")[0];
const getSlug = (post: { id: string; data: { slug?: string } }) =>
	post.data.slug ?? post.id.replace(/\.(md|mdx)$/, "");

export async function GET() {
	const posts = await getCollection("blog");
	const staticPages = [
		{ url: "/", priority: "1.0" },
		{ url: "/blog/", priority: "0.8" },
	];

	const urls = [
		...staticPages.map(
			(page) => `
	<url>
		<loc>${site}${page.url}</loc>
		<changefreq>weekly</changefreq>
		<priority>${page.priority}</priority>
	</url>`
		),
		...posts.map((post) => {
			const lastmod = formatDate(post.data.updatedDate ?? post.data.date);

			return `
	<url>
		<loc>${site}/blog/${getSlug(post)}/</loc>
		${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`;
		}),
	].join("");

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`, {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
