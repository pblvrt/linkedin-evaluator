#!/usr/bin/env node
// Reads scrape.js, compresses whitespace, URL-encodes, and inlines into index.html
// as the bookmarklet href. Re-run after every change to scrape.js.

const fs = require('fs');
const path = require('path');

const root = __dirname;
const scrapeSrc = fs.readFileSync(path.join(root, 'scrape.js'), 'utf8');

// Minimal compression — strip line comments and collapse whitespace runs.
// Preserves string contents (rough — no comments inside strings in scrape.js).
const compressed = scrapeSrc
  .replace(/^\s*\/\/[^\n]*$/gm, '')         // line comments
  .replace(/\/\*[\s\S]*?\*\//g, '')          // block comments
  .replace(/\n+/g, '\n')
  .replace(/^[ \t]+/gm, '')                  // leading whitespace
  .replace(/[ \t]+$/gm, '')                  // trailing whitespace
  .trim();

const bookmarklet = 'javascript:' + encodeURIComponent(compressed);

console.log(`scrape.js: ${scrapeSrc.length} bytes → bookmarklet: ${bookmarklet.length} chars`);

const tplPath = path.join(root, 'index.html');
const tpl = fs.readFileSync(tplPath, 'utf8');

// Replace the href on the .bookmark anchor.
const updated = tpl.replace(
  /(<a class="bookmark"\s+href=")[^"]*(")/,
  (_, pre, post) => pre + bookmarklet.replace(/"/g, '&quot;') + post
);

if (updated === tpl) {
  console.error('❌ Could not find bookmark anchor in index.html');
  process.exit(1);
}

fs.writeFileSync(tplPath, updated);
console.log('✅ index.html updated.');
