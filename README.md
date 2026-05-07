# LinkedIn Profile Audit — bookmarklet edition

A senior-positioning-consultant-grade audit of your LinkedIn profile, scored across 7 pillars, with concrete rewrites. Runs in your own Claude session — no signup, no SaaS, no server-side scraping.

**Live page:** https://pblvrt.github.io/linkedin-evaluator

## How it works

1. Drag the **📊 Audit my LinkedIn** button on [the landing page](https://pblvrt.github.io/linkedin-evaluator) to your browser's bookmarks bar.
2. Open your LinkedIn profile (`linkedin.com/in/your-handle`).
3. Click the bookmarklet. It scrolls your profile, expands every section, and copies an audit prompt (with your profile data inline) to your clipboard. Then it opens Claude.
4. Paste with `⌘V` and hit enter. Audit appears.

Works on Free, Pro, Cowork, Claude Code — anywhere you can paste into a Claude conversation.

## Files

- `index.html` — landing page with the draggable bookmarklet, served via GitHub Pages.
- `scrape.js` — runs inside the user's LinkedIn tab. Scrolls, clicks expanders, reads DOM, builds prompt, copies to clipboard, opens Claude.
- `audit.md` — the rubric Claude fetches and applies to the profile data.

## Why this architecture

- **No server.** GitHub Pages serves three static files. Zero infra, zero cost, zero on-call.
- **No LinkedIn ToS issue.** Scraping happens in the user's own logged-in browser tab. Your code never touches LinkedIn from the outside.
- **No Claude tier requirement.** Pasted text + a public markdown URL works in any Claude surface.
- **Updates ship instantly.** Improve `audit.md` or `scrape.js` → `git push` → next click pulls the new version.

## Built by

[Pablo Voorvaart](https://linkedin.com/in/pablovoorvaart) — building [Scout](https://github.com/pblvrt), automated LinkedIn lead gen for high-ticket service businesses.
