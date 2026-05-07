# Free LinkedIn Profile Audit (via Claude Code)

A senior-positioning-consultant-grade audit of your LinkedIn profile. Runs in your own Claude Code — no signup, no data leaves your terminal, no SaaS.

## Run it

Paste this into [Claude Code](https://claude.com/claude-code), replacing the URL with your own LinkedIn:

```
Audit my LinkedIn profile using the instructions at https://raw.githubusercontent.com/pblvrt/linkedin-evaluator/main/audit.md — my profile is https://linkedin.com/in/YOUR-HANDLE
```

That's it. Claude will fetch the audit prompt, fetch your profile, and produce:

- A 0–100 overall score
- A weighted scorecard across 12 sections (headline, About, featured, activity, etc.)
- Top 3 strengths and top 3 fixes — quoting your actual copy
- 3 headline rewrites
- A new About opening
- A Featured-section plan
- One post idea for this week

Then it'll ask which buyer you want to attract and regenerate the rewrites for that buyer specifically.

## Why this works

LinkedIn profile audits from "personal brand coaches" tell you to *be authentic* and *tell your story*. This one quotes your actual copy and tells you what to delete. The rubric is built around what makes a service-business profile generate inbound — not what makes HR happy.

## Privacy

The prompt is fetched once via WebFetch. Your profile content stays inside your Claude Code session. Nothing is sent anywhere.

## Built by

[Pablo Voorvaart](https://linkedin.com/in/pablovoorvaart) — building [Scout](https://github.com/pblvrt), automated LinkedIn lead gen for high-ticket service businesses.

If the audit was useful, share the link with one person who needs it.
