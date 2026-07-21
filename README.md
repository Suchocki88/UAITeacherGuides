# Teacher Resource Hub — Understanding and Working with AI

A single-page index that lets teachers navigate to the Teacher Guide and State
Standards document for every lesson and Spotlight in the program.

## Files

| File | Purpose |
|---|---|
| `index.html` | The page itself. You should rarely need to touch this. |
| `lessons.js` | All content: chapters, lessons, Spotlights, and URLs. **This is the only file to edit for updates.** |
| `check-links.mjs` | Optional link checker. Run `node check-links.mjs` in this folder to verify all 118 document URLs are live. |

All document links follow the pattern `https://suchocki88.github.io/{RepoName}/`,
using the base (Alia) versions of the guides. The `na` repos are the no-Alia
PocketLab adaptations and are deliberately not linked here.

## Deploying on Vercel

1. Push these two files (plus this README) to a GitHub repository.
2. In Vercel: **Add New Project → Import** that repository.
3. Framework preset: **Other**. No build command, no output directory settings
   needed — it's a static site. Deploy.

Every later `git push` redeploys automatically.

Alternatively, since the guides already use GitHub Pages, the hub itself can be
hosted the same way: create a repo, push these files, enable Pages
(Settings → Pages → deploy from main), and it will serve at
`https://suchocki88.github.io/{repo-name}/` with no Vercel involved.

## Adding the URLs

Open `lessons.js`. Each entry looks like:

```js
{ id: "3.2", title: "Basic Prompt Structures", type: "", guideUrl: "", standardsUrl: "" },
```

Paste the full URL between the quotes of `guideUrl` and `standardsUrl`.
Any entry left as `""` automatically displays as a dashed
"in development" chip instead of a link.

**Spotlights** are components of their surrounding lessons and have no
separate teacher guides or standards documents. They appear in the hub
as unlinked context rows so teachers can follow the course sequence. To
hide them entirely, just delete their entries from this file.

## Optional: lesson-type badges

Each entry has a `type` field. Leave it `""` and nothing shows. Set it to
`"Lesson"`, `"Lab"`, `"Discussion"`, or `"Project"` and a small badge appears
next to the title. You can fill these in gradually; the page works either way.

## Renaming or reordering

Edit titles or move entries around inside `lessons.js` — the page rebuilds
itself from that file on every load. Keep each entry's `id` unique.
