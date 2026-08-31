import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../', import.meta.url);
const dist = new URL('../dist/', import.meta.url);
const release = new URL('../release/', import.meta.url);

const htmlPath = join(dist.pathname, 'index.html');
let html = await readFile(htmlPath, 'utf8');
const scriptPath = html.match(/<script type="module" crossorigin src="\.\/(.*?)"><\/script>/)?.[1];
const stylePath = html.match(/<link rel="stylesheet" crossorigin href="\.\/(.*?)">/)?.[1];

if (!scriptPath || !stylePath) throw new Error('Unable to locate the Vite bundle assets.');

const [script, style] = await Promise.all([
  readFile(join(dist.pathname, scriptPath), 'utf8'),
  readFile(join(dist.pathname, stylePath), 'utf8'),
]);

html = html
  .replace(`<script type="module" crossorigin src="./${scriptPath}"></script>`, `<script type="module">${script}</script>`)
  .replace(`<link rel="stylesheet" crossorigin href="./${stylePath}">`, `<style>${style}</style>`);

await mkdir(release, { recursive: true });
await Promise.all([
  writeFile(new URL('index.html', release), html),
  cp(new URL('../public/favicon.svg', import.meta.url), new URL('favicon.svg', release)),
  cp(new URL('../public/og.png', import.meta.url), new URL('og.png', release)),
  cp(new URL('../README.md', import.meta.url), new URL('README.md', release)),
]);

console.log(`Created ${new URL('index.html', release).pathname}`);
