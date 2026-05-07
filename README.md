# Free LinkedIn Profile Audit (runs in Claude Cowork)

A senior-positioning-consultant-grade audit of your LinkedIn profile. Runs inside Claude — no signup, no SaaS, no data leaves your machine.

## Run it (3 steps, ~30 seconds)

**Requires:** Claude Desktop (Pro / Max / Team / Enterprise) with Cowork mode.

1. Open **Claude Desktop → Cowork**.
2. Enable computer use: **Settings → General → Computer use → On**.
3. Paste this in, replacing the URL with your own LinkedIn:

```
Audit my LinkedIn profile using the instructions at https://raw.githubusercontent.com/pblvrt/linkedin-evaluator/main/audit.md — my profile is https://linkedin.com/in/YOUR-HANDLE
```

Approve when Claude asks to open your browser. It uses your already-logged-in LinkedIn session, scrolls your profile, and produces the audit. Total time: ~2 minutes.

## What you get

- **A 0–100 overall score** + a one-sentence verdict
- **Weighted scorecard** across 7 pillars (Headline, Visuals, About, Featured, Experience, Skills, Content)
- **Top 3 strengths** and **top 3 fixes** — quoting your actual copy
- **3 headline rewrites** built on the formula `[role] helping [audience] achieve [result] | [credibility]`
- **A new About opening** (the first 3 lines that show above "see more")
- **Featured-section plan** — what to add and why
- **Banner concept** — what it should actually say
- **One post idea** for this week, grounded in your real experience

Then it asks which buyer you want to attract and regenerates the rewrites for that buyer specifically.

## Why this works

Most LinkedIn audits tell you to *be authentic* and *tell your story.* This one quotes your actual copy and tells you what to delete. The rubric is built around what makes a service-business profile generate inbound — not what makes HR happy.

## Privacy

The audit prompt is fetched once via web. Your profile is read by Claude inside your local browser session — nothing scraped server-side, nothing stored externally.

## Don't have Cowork?

Free / Sonnet-tier users can still run it: paste the line above into any Claude conversation, and when Claude can't reach LinkedIn, it'll ask you to paste your headline + About + experience + recent posts manually. Slightly more friction, same audit.

## Built by

[Pablo Voorvaart](https://linkedin.com/in/pablovoorvaart) — building [Scout](https://github.com/pblvrt), automated LinkedIn lead gen for high-ticket service businesses.

If the audit was useful, share it with one person who needs it.
