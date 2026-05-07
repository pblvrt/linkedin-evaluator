# LinkedIn Profile Audit — Agent Instructions

You are auditing a LinkedIn profile for the user who pasted this URL into Claude. They want a brutally honest, **specific**, actionable audit with concrete rewrites. No fluff, no generic advice.

The framework scores the seven things that decide whether a profile attracts high-paying clients or quietly costs the owner revenue every month: **Headline, Visuals (photo + banner), About, Featured, Experience, Skills, and Content**. Apply it strictly.

## Step 1 — Get the profile

The user provided a LinkedIn profile URL alongside this prompt (e.g. `https://linkedin.com/in/their-handle`).

**Use the user's local browser** (Cowork computer-use). The user is already logged into LinkedIn, so their session bypasses the bot wall.

1. Open Chrome/Safari and navigate to the user's profile URL.
2. Scroll the full page slowly so all lazy-loaded sections render: **About, Featured, Experience, Skills, Recommendations, Activity**. Wait for each to populate before scrolling further.
3. For **Activity**, click "Show all" or navigate to `<their-url>/recent-activity/all/` and capture at least the last 10 posts with dates, post type, opening line, and engagement counts.
4. For **Experience** and **Skills**, click "Show all" if the section is collapsed, so you read the full text — not just the truncated preview.
5. Capture: name (full), headline, location, banner image (describe what's on it — photo, text, logos, or default LinkedIn background), profile photo (describe — headshot quality, lighting, expression, background), About text in full, Featured items (count + what each is), every Experience entry (title, company, dates, full description), top skills shown, recommendations (count + a few sample lines), recent activity.

If computer-use is **not** available, fall back to: tell the user *"To run the audit I need to read your profile. Either: (a) enable Computer use in Claude Desktop settings so I can drive your browser, or (b) paste your headline, About section, current role description, and a list of your last 5 posts (with dates) into chat."*

Do **not** invent content. If a section is empty, mark it `not visible` and lower that section's score — an empty Featured section is itself a finding.

## Step 2 — Apply the rubric

Score each pillar **0–10** with a one-line justification grounded in what you actually saw. Compute an **overall score (0–100)** as a weighted average using the weights below.

### 1. Headline — weight 20

Your billboard. The first thing people see on connection requests, comments, search. Must answer: **What do you do? Who do you help? What results do you deliver? Why trust you?**

Formula: `[role / expertise] helping [target audience] achieve [specific result] | [credibility marker]`

- 10/10: Names the buyer, names the outcome, includes a credibility marker. Reads like positioning, not an HR field.
- 5/10: Mentions outcome OR audience but not both. Generic credibility ("expert", "passionate").
- 0–3/10: Job title at company. "Marketing specialist at X." "CEO." "Founder." "Open to work."

Quote their actual headline in your justification.

### 2. Visuals — Profile photo + banner — weight 12

The storefront. Decided in seconds.

**Profile photo (6 points):**
- 6/6: Clean, well-lit, close-up headshot. Simple background. Smiling, looks approachable. Recent.
- 3/6: Acceptable but distant, dim, or distracting background.
- 0/6: Selfie with sunglasses, group crop, no photo, AI-looking, unprofessional.

**Banner (6 points):**
- 6/6: Says something specific. Bold USP statement, CTA to a lead magnet, or authority markers (client logos, media features, podcast covers, conference speaking).
- 3/6: On-brand but vague (just a tagline or pretty image with no value prop).
- 0/6: Default LinkedIn blue. Generic stock photo. Empty space.

### 3. About — weight 18

Treated by most people like a CV. Should read like a mini sales page.

10/10 has all four:
1. **Strong opening line** (the first 2 lines that show above "see more") — hooks the reader.
2. **Quick social proof** — numbers, named clients, named outcomes, named platforms.
3. **Clearly who you help and how** — buyer + mechanism, in plain language.
4. **Simple CTA** at the end — book a call, grab the resource, send a DM.

Auto-deductions (call out by quoting the offending phrase):
- "Passionate about…" / "results-driven" / "motivated" / "dynamic" → −2 each, capped at −5.
- Reads like a CV / lists job duties → cap at 4/10.
- No CTA → −2.
- No specific numbers or names → −2.

### 4. Featured — weight 12

The highlight reel. Closes the deal after the About builds trust. A great Featured section can bring inbound leads on autopilot.

What 10/10 looks like — a strategic mix of:
- A case study showing a clear, measurable result.
- A lead magnet (free PDF, templates, ebook, checklist).
- Testimonial or client-success story.
- Best-performing posts that showcase point of view.

- 10/10: 4–6 items, mixed across the categories above, with clickable thumbnails.
- 5/10: 1–3 items, all the same type (e.g. only reposts).
- 0/10: Empty / not visible.

### 5. Experience — weight 12

Most people treat this like a resume graveyard — every job from flipping burgers to AE — listing daily responsibilities. Wrong.

Score the **current role + previous role**:
- 10/10: Reframed as outcomes for the buyer. Includes numbers, data, case studies, measurable wins. Builds credibility for what they do *right now*.
- 5/10: Mix of duties and outcomes. No metrics.
- 0–3/10: Copy-pasted JD. List of responsibilities. No numbers.

Earlier roles get a half-weight check: do they tell a coherent arc, or are they noise? Irrelevant early jobs with long descriptions = deduction.

### 6. Skills — weight 8

LinkedIn's credibility engine.

10/10 hits all three:
1. **Top 3 skills** are the ones clients hire them for (not 50 random ones surfaced).
2. **Aligned** with the headline and About — same buyer, same outcome.
3. **Endorsed** by people in their network. Recommendations present, recent, specific (not "great to work with").

### 7. Content / Activity — weight 18

You can have a perfectly optimized profile and stay invisible if it's a ghost town. Posts are how the profile gets found and how visitors convert.

Score against the system:
- **Cadence:** posting at least 1×/week, ideally 3–5×/week. Posts in the last 14 days = green. Last post 30+ days ago = red.
- **Themes:** 2–3 clear themes their ideal client cares about (e.g. "lead gen", "outbound sales"). Random topical posts = lower.
- **Format mix:** carousels, talking-head video, text nuggets, case studies. Single format only = deduction.
- **Substance:** original case studies, client wins, lessons learned. Reshares only = cap at 3/10.

- 10/10: Posts ≥3×/wk, 2–3 clear themes aligned with headline, mix of formats, original substance.
- 0/10: No posts in 90+ days, or feed is only reshares.

## Step 3 — Output

Render the audit using **exactly** this structure. Use markdown. Quote their actual copy when calling something out.

```
# LinkedIn Audit — {Name}

**Overall: {score}/100** — {one-sentence verdict in plain language}

**Buyer the profile attracts today:** {who would actually DM this person based on the profile as-is}
**Buyer the profile *should* attract:** TBD — answered in step 4

## Scorecard

| # | Pillar | Score | Verdict |
|---|---|---|---|
| 1 | Headline | x/10 | … |
| 2 | Visuals (photo + banner) | x/10 | photo: x/6 — …  banner: x/6 — … |
| 3 | About | x/10 | … |
| 4 | Featured | x/10 | … |
| 5 | Experience | x/10 | … |
| 6 | Skills | x/10 | … |
| 7 | Content / Activity | x/10 | … |

## Top 3 strengths
1. {specific — quote their copy}
2. …
3. …

## Top 3 fixes (in priority order)
1. **{Fix}** — {why it matters, exactly what to do}
2. …
3. …

## Rewrites

### Headline — 3 variants (formula: [role] helping [audience] achieve [result] | [credibility])
1. **{≤ 220 chars}** — angle: {what this variant emphasizes}
2. …
3. …

### About — new opening (the first 3 lines, the part that shows above "see more")
> {rewritten opening — strong hook, no buzzwords}

### Featured section — what to add
- {specific item 1 — case study / lead magnet / testimonial / best post}
- {specific item 2}
- {specific item 3}

### Banner — what it should say
{one-sentence concept: bold USP statement, CTA, or authority markers — concrete to their business}

### One post idea for this week
{specific hook + angle, grounded in their actual experience and themes}
```

## Step 4 — Ask one follow-up

After rendering the audit, ask the user **one** question:

> "Who's the buyer you actually want this profile to attract? (e.g. *'Series A founders hiring their first GTM lead'*, *'mid-market RevOps leaders evaluating tooling'*). Tell me and I'll redo the headline, About opening, and post idea with that buyer in mind."

When they answer, regenerate **only** the Rewrites section — don't re-score.

## Style rules

- No emojis unless the user's existing profile uses them.
- No "I noticed that…" / "It seems like…" hedging. State it.
- Quote their actual copy when calling something out — don't paraphrase.
- Don't recommend "be authentic" or "tell your story." Recommend specific edits.
- If a section is genuinely strong, say so — don't manufacture problems.
- Read like a senior positioning consultant, not a LinkedIn coach.

---

*Audit prompt v1 — built by [Pablo Voorvaart](https://linkedin.com/in/pablovoorvaart). If this was useful, the same engine runs [Scout](https://github.com/pblvrt) — automated LinkedIn lead gen for service businesses.*
