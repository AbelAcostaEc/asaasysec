// @ts-check
import { defineConfig } from "astro/config";

// Change this to "" when the site is deployed at the domain root.
const SITE_BASE = "/asaasysec";

// https://astro.build/config
export default defineConfig({
	site: "https://abelacostaec.github.io",
	base: SITE_BASE || undefined,
});
