/* ============================================================
   Link checker for the Teacher Resource Hub
   ------------------------------------------------------------
   Verifies that every URL in lessons.js returns a live page.
   Run from this folder with:   node check-links.mjs
   Requires Node 18+ (built-in fetch). No dependencies.
   ============================================================ */

import { readFileSync } from 'fs';

const src = readFileSync('./lessons.js', 'utf8');
const CHAPTERS = new Function(src + '; return CHAPTERS;')();

const targets = [];
for (const ch of CHAPTERS) {
  for (const l of ch.lessons) {
    if (l.guideUrl) targets.push({ label: `${l.id} Guide`, url: l.guideUrl });
    if (l.standardsUrl) targets.push({ label: `${l.id} Standards`, url: l.standardsUrl });
  }
}

console.log(`Checking ${targets.length} URLs...\n`);
let ok = 0;
const failures = [];

// modest concurrency to be polite to GitHub Pages
const POOL = 8;
let i = 0;
async function worker() {
  while (i < targets.length) {
    const t = targets[i++];
    try {
      const res = await fetch(t.url, { method: 'HEAD', redirect: 'follow' });
      if (res.ok) { ok++; }
      else failures.push(`${t.label}  →  ${res.status}  ${t.url}`);
    } catch (e) {
      failures.push(`${t.label}  →  ${e.message}  ${t.url}`);
    }
  }
}
await Promise.all(Array.from({ length: POOL }, worker));

console.log(`✓ ${ok} live`);
if (failures.length) {
  console.log(`✗ ${failures.length} problems:\n`);
  failures.forEach(f => console.log('  ' + f));
  console.log('\nLikely cause: GitHub Pages not enabled for that repo');
  console.log('(repo Settings → Pages → deploy from main branch).');
} else {
  console.log('All links are live. Ready to deploy.');
}
