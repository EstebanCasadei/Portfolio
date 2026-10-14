import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";

const pages = readdirSync("dist", { recursive: true }).filter((file) => file.endsWith(".html"));
const titles = new Set();
const descriptions = new Set();
const sitemap = readFileSync("dist/sitemap.xml", "utf8");
const home = readFileSync("dist/index.html", "utf8");

for (const file of pages) {
  const html = readFileSync(`dist/${file}`, "utf8");
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/name="description" content="([^"]+)"/)?.[1];
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert(title && description && canonical, `Missing metadata: ${file}`);
  assert(!titles.has(title) && !descriptions.has(description), `Duplicate metadata: ${file}`);
  titles.add(title);
  descriptions.add(description);
  assert(canonical.startsWith("https://estebancasadei.dev/"));
  assert(sitemap.includes(`<loc>${canonical}</loc>`));
  assert.match(html, /property="og:image" content="https:\/\/estebancasadei\.dev\/og-cover\.jpg"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `H1 count: ${file}`);
  const schema = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  assert.equal(JSON.parse(schema)["@graph"].length, 3);
  if (file.replaceAll("\\", "/").startsWith("projects/")) {
    const project = file.replaceAll("\\", "/").split("/")[1];
    assert(home.includes(`href="/projects/${project}"`), `Missing home link: ${project}`);
  }
}

assert.match(readFileSync("dist/robots.txt", "utf8"), /Sitemap: https:\/\/estebancasadei\.dev\/sitemap\.xml/);
assert(readFileSync("dist/og-cover.jpg").length < 200_000);
console.log(`SEO checked: ${pages.length} pages, sitemap, robots and social cover.`);
