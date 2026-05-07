# LinkedIn Profile Audit (for Claude Code users)

A senior-positioning-consultant-grade audit of your LinkedIn profile, scored across 7 pillars, with concrete rewrites. Runs in your own Claude Code session via the chrome-devtools MCP — no signup, no SaaS, no data sent anywhere.

## Prereqs (one-time, ~30 seconds)

You need [Claude Code](https://claude.com/claude-code) and the `chrome-devtools` MCP. If you don't have it:

```bash
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest
```

Restart Claude Code. Make sure Chrome is open and you're logged into LinkedIn.

## Run it

Paste this into Claude Code, replacing the URL with your own profile:

```
Audit my LinkedIn profile using the framework at https://raw.githubusercontent.com/pblvrt/linkedin-evaluator/main/audit.md — my profile is https://linkedin.com/in/YOUR-HANDLE
```

Claude fetches the framework, drives your already-logged-in Chrome to read your profile, and produces:

- **A 0–100 overall score** + a one-sentence verdict
- **Weighted scorecard** across 7 pillars (Headline · Visuals · About · Featured · Experience · Skills · Content)
- **Top 3 strengths** and **top 3 fixes** — quoting your actual copy
- **3 headline rewrites** built on the formula `[role] helping [audience] achieve [result] | [credibility]`
- **A new About opening** (the first 3 lines that show above "see more")
- **Featured-section plan** — what to add and why
- **Banner concept** — what it should actually say
- **One post idea for this week**, grounded in your real experience

Then it asks which buyer you want to attract and regenerates the rewrites for that buyer specifically.

## Why this works

Most LinkedIn audits tell you to *be authentic* and *tell your story*. This one quotes your actual copy and tells you what to delete. The rubric is built around what makes a service-business profile generate inbound — not what makes HR happy.

## Privacy

The audit prompt is fetched once via web. Your profile is read by Claude inside your local browser session — nothing scraped server-side, nothing stored externally.

## Built by

[Pablo Voorvaart](https://linkedin.com/in/pablovoorvaart) — building [Scout](https://github.com/pblvrt), automated LinkedIn lead gen for high-ticket service businesses.
