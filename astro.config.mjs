// @ts-check
import { defineConfig } from "astro/config";

// Detect if we are building on Netlify (which sets NETLIFY=true by default)
const isNetlify = process.env.NETLIFY === "true";

// https://astro.build/config
export default defineConfig({
	site: "https://abelacostaec.github.io",
	base: isNetlify ? undefined : "/asaasysec",
});
