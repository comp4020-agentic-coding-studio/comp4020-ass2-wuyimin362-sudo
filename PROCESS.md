# Process overview

## What I built

**SLOP1039 — Ruin: A First Course in Losing Money**, a course website for an
investing course taught entirely from the loss side. Twelve weeks, each owning
exactly one named mechanism by which money is lost, with arithmetic a reader
can reproduce from the inputs printed beside it. Six of the mechanisms a
student can commit deliberately and five the world has to hand them, and only
the six can be assessed — the site says which is which rather than implying
every student will feel all twelve. The loss requirement is bounded by a stated
course policy: paper positions by default, a $20 hard cap on the opt-in
real-money track, long-only and fully paid. Week 12 re-runs week 1's lecture
and links the same deck file, so the course closes its loop by construction
rather than by a copy that can drift.

## How I got here

### The harness came before the first page

The premise is fragile in a specific way. An agent writing about investing
drifts to the upside, because that is what the training data is made of, and a
single reassuring sentence on one page of twelve undoes the whole thing. So
`CLAUDE.md` was written first
([`fdea0cc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/fdea0cc)),
naming that drift as the primary failure mode and banning the three shapes it
takes: gain framing, reassurance, and the disclaimer — which reads as retreat
from a position the course means.

The part of that a test can hold, `spec/thesis.test.ts` holds: no page may
hedge, and no page may promise gains in its own voice, checked against the
built HTML rather than the source. `spec/curriculum.test.ts` held the shape —
twelve weeks lectured once each, distinct modes with week 12 as the one
deliberate repeat, weights summing to 100. Both were written before the content
and both failed for the whole first stretch of work, which is what I wanted
from them.

### Alignment before generation

I did not let the agent start writing pages until the twelve mechanisms were
agreed, because that list is the course and it is the one thing a harness
cannot generate. I also had it simulate a student's twelve weeks in first
person before any page existed — the fastest way to find out whether a
syllabus holds together is to walk through it as the person it happens to.

Then the work was staged deliberately: the first act (weeks 1–6), then the
site-level pages, then interactivity. Each stage ended in a review.

### What the harness caught, and what it could not

This is the part worth reporting, because the two lists are different sizes.

The harness did its job on content. Across roughly 4,000 lines of prose, the
thesis test never fired, and reading the pages back, the register held. Writing
the constraint down before generating anything was the single highest-leverage
thing I did.

What the harness and the build were both blind to was everything visual.

`pnpm check` was green — 32 pages, no accessibility violations, no broken
links — while the rendered page read `failure mode:ruin` and the home page read
`You keep aposition log`. A newline before an element inside a paragraph
collapses in `.astro`, and nothing in the toolchain has an opinion about that.
The same pass found four blocks of arithmetic whose result sat off the right
edge of a phone viewport, including week 1's `= 1.045`. For a course whose
stated position is that its numbers are load-bearing, a number you have to
scroll sideways to read is a defect, not a nitpick. All of it came from
screenshots
([`445ac21`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/445ac21)).

The largest instance of the same blindness was structural. Well into the build
I noticed the site looked like the course's own website and asked whether that
was required:

> 你的网页咋跟 comp8020 课的风格是一样的 老师是这样要求的吗

Half of it was: the Slop branding and palette are fixed by the platform. The
other half was not. `README.md` lists "the visual treatment" among the things
that are mine and points at `src/layouts/PageLayout.astro` as where site-wide
styling goes — and that file had not been touched since the initial commit. The
site was shipping the theme default because nobody, including me, had looked at
it as a design question
([`0fde6bd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/0fde6bd)).

The treatment that followed is content-driven rather than decorative. There is
no code in this course, so every fenced block on the site is a sum; they now
carry a flush accent rule and tabular figures, and read as ledger entries
rather than as shell commands. The committable/rationed split became a declared
field per week and a marker down the listing, so the shape of the twelve is
scannable instead of stated once in a paragraph.

### Measuring instead of guessing

Three decisions were settled by measurement rather than judgement, and I think
this is the habit the course is actually teaching.

The simulator was mounted on a slide, measured at 826px against 813px of usable
height at the desktop marking viewport and 1,116px at phone width, and removed
again; the deck links to the lecture page instead, and the measurement is in
the commit message
([`16a6683`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/16a6683)).
Its arithmetic was checked against theory at 200,000 trials across five
parameter sets before it shipped, and its click path driven in headless Chrome
by extracting the shipped markup and inlined script out of `dist/` — no test
dependency added
([`66e9220`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/66e9220)).
The mode marker was designed, rendered, and discarded on sight, because it put
`RUIN` directly under a heading reading "Week 1: Ruin" on every page.

### Where building it changed what the course claims

Twice the work corrected the material rather than implementing it.

Week 1 originally said survivors hold "about forty-five times their stake".
Building the simulator made it obvious that is wrong in an interesting way:
a survivor is someone the loss never happened to, so every survivor multiplied
by 1.10 exactly forty times and they all hold identically `1.10^40 = 45.26`.
There is no spread among the winners to explain, which is a far stronger
version of the week's argument than the one I had written.

Then week 9. Trying forty rules against sixty days of data, each with a 1-in-20
chance of fitting by luck, gives `1 − 0.95^40 = 87%` odds of finding one — and
`0.95^40` is week 1's number, the same computation read for the other outcome.
That was not planned into the syllabus; it fell out of computing it
([`39dda68`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/39dda68)).

### Constraints I kept rather than routed around

The simulator is vanilla Astro with a bundled script, because astromotion's
`client:*` directives only apply to framework components and adding a framework
integration would mean editing the build pipeline the platform fixes. The last
three placeholder images were dropped rather than replaced, with the cost
stated on the record: no `og:image`, so a shared link previews as text
([`f6fe6e7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/f6fe6e7)).

### What I would do differently

Screenshot from the first page, not from the first review. Every visual defect
in this build survived a green `pnpm check` and died within seconds of being
looked at, and I ran a lot of green checks before I ran the first screenshot.

The full history is
[`906d4b9...d94613c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/compare/906d4b9...d94613c).

### Declaration

The site was built with Claude Code under the harness in `CLAUDE.md`. I set the
premise, the twelve mechanisms, the staging and the review gates, and made the
calls the harness deliberately leaves open — topic coverage, week ordering, and
how far the provocation goes. The agent wrote the pages and the components
against those constraints. The verification described above is mine.
