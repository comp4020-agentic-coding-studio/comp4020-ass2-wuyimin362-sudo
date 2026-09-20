# Process overview

<!-- TEMPLATE: this is a scaffold, not your account. The headings and the
     citations below are real and correct — the prose is yours to write, and
     this comment stays until you have written it. `pnpm check:evidence` fails
     while it is here, which is deliberate: it stops the scaffold shipping as
     if it were your account.

     Notes under each heading are HTML comments, so they do not render on
     GitHub. Delete them as you use them.

     Check the word count on the course website before you start:
     https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts
-->

## What I built

<!-- One paragraph: the thing, and the idea behind it.

     Facts you can draw on:
     - SLOP1039 "Ruin: A First Course in Losing Money" — an investing course
       taught entirely from the loss side. Twelve weeks, each owning exactly
       one named mechanism by which money is lost.
     - Six mechanisms a student can commit deliberately, five the world has to
       hand them. Only the six can be assessed, and the site says so.
     - Week 12 re-runs week 1's lecture and links the same deck file.
     - The loss requirement is bounded by a real course policy: paper by
       default, $20 hard cap, long-only fully paid.
     - 27 pages, 4 decks, one interactive simulator, 71 spec assertions.
-->

## How I got here

<!-- The account of the process: how the work actually went, and how you knew
     the result was right. Below is the material, in the order it happened.
     Pick what carries your argument — you do not need all of it.

     THE HARNESS CAME FIRST, AND IT DID WORK
     `fdea0cc` is the harness and the course record, written before any page
     existed. It names one failure mode as primary — an agent writing about
     investing drifts to the upside, because that is what the training data is
     — and bans the three shapes it takes.
     `spec/thesis.test.ts` mechanises the part of that a test can hold: no page
     may hedge, and no page may promise gains in its own voice. It was written
     before the content and landed with it at `6bb7cd0`.

     SPEC BEFORE CONTENT
     `spec/curriculum.test.ts` asserted twelve weeks with distinct modes,
     weights summing to 100, and a built deck — and failed for the whole first
     stretch of work, because the content did not exist yet. Worth saying
     plainly if you want to make the spec-first point.

     ONE COMMIT HAD TO BE BIG
     `6bb7cd0` is 23 files. Content collection refs are bidirectional and the
     build fails on a dangling one, so twelve lectures, four sessions and two
     assessments could not be landed separately. The spec went in the same
     commit because that is where the promises it checks arrived.

     WHERE THE AGENT WAS WRONG AND THE LOOP CAUGHT IT
     These are the strongest material, because each is a case where a check
     did not fire and something else did.
     - `445ac21` — every build check was green while the rendered page said
       "failure mode:ruin" and "You keep aposition log". A newline before an
       element inside a paragraph collapses in `.astro`. Only a screenshot
       found it. The same commit wraps four arithmetic blocks that pushed the
       result of the sum off a phone viewport.
     - `16a6683` — the simulator was mounted on a slide, measured at 826px
       against 813px of usable height at the desktop marking viewport, and
       removed again. The measurement is in the commit message.
     - `0fde6bd` — the mode marker first printed the mechanism's name, which
       put `RUIN` directly under a heading reading "Week 1: Ruin" on every
       page. Designed, rendered, discarded on looking.
     - `0fde6bd` also exists because `src/layouts/PageLayout.astro` had not
       been touched since the initial commit: the site was shipping the
       theme's default appearance. The brand is fixed by the platform; the
       treatment on top of it is not, and it had simply been skipped.

     WHERE THE WORK CHANGED THE COURSE'S OWN CLAIMS
     - `66e9220` / week 1: building the simulator surfaced that survivors do
       not average 45× — every survivor holds exactly 1.10^40 = 45.26, because
       the only thing that varies is whether you were wiped out. There is no
       spread among the winners to explain, which is a stronger claim than the
       one the lecture originally made.
     - `39dda68` / week 9: trying forty rules against sixty days gives
       1 − 0.95^40 = 87% odds of finding one that fits by luck — which is week
       1's number, the same computation read for the other outcome. That came
       out of computing it, not out of planning the syllabus.

     CONSTRAINTS RESPECTED RATHER THAN ROUTED AROUND
     - `66e9220` — the simulator is vanilla Astro with a bundled script.
       astromotion's `client:*` directives only apply to framework components,
       and adding a framework integration would mean editing the build
       pipeline the platform fixes.
     - `f6fe6e7` — image-free treatment rather than replacement artwork, with
       the cost stated: no `og:image`, so a shared link previews as text.

     VERIFICATION THAT WAS NOT JUST `pnpm check`
     - The simulator's arithmetic was checked against theory at 200,000 trials
       across five parameter sets before it shipped.
     - Its click path was driven in headless Chrome by extracting the shipped
       markup and inlined script from `dist/` — no test dependency added.
     - Computed styles and tap targets were probed at desktop and phone width
       rather than eyeballed.
-->

<!-- Cite as you go. Both forms below are real and resolve. -->

<!-- Single commits:

[`fdea0cc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/fdea0cc) — harness and course record
[`2f118eb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/2f118eb) — lectures declare and render their failure mode
[`66e9220`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/66e9220) — ruin simulator
[`99854b9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/99854b9) — bounded-loss policy and the records
[`6bb7cd0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/6bb7cd0) — the curriculum, and the spec that checks it
[`16a6683`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/16a6683) — four decks
[`259899c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/259899c) — site-level pages
[`3819283`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/3819283) — teaching staff
[`445ac21`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/445ac21) — fixes found by looking at rendered pages
[`0fde6bd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/0fde6bd) — visual treatment
[`39dda68`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/39dda68) — weeks 7 to 12 deepened
[`f6fe6e7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/f6fe6e7) — image-free treatment
-->

<!-- Ranges:

everything, starter to now:
[`906d4b9...f6fe6e7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/compare/906d4b9...f6fe6e7)

the course content itself:
[`99854b9...3819283`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/compare/99854b9...3819283)

everything after the first screenshot pass:
[`445ac21...f6fe6e7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/compare/445ac21...f6fe6e7)
-->

<!-- To pair a prompt with the commit it produced, quote the prompt — curated,
     not a full transcript — next to the citation:

     > the prompt, verbatim

     Screenshots are welcome where one carries the point better than a
     sentence. Commit the file and link it with a relative path so it renders
     on GitHub: ![alt text](docs/before.png). Images do not count toward the
     word count and do not replace the citation.
-->

## Before you ship

<!-- Delete this whole section before submitting — it is a checklist, not part
     of your account.

     `pnpm check` — 71 assertions, currently green.
     `pnpm check:evidence` — currently fails on this file only. It will pass
     once the TEMPLATE comment at the top is gone and your citations resolve.
     The citations above already resolve; the comment is the only blocker.
-->
