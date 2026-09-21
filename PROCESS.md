# Process overview

## What I built

**SLOP1039 — Ruin: A First Course in Losing Money**: an investing course taught
entirely from the loss side. Twelve weeks, each owning one named mechanism by
which money is lost, with arithmetic a reader can reproduce from the inputs
printed beside it.

## How I got here

I decided a good course is one idea held for a semester that gets *deeper*
rather than broader, and that it should be honest about which parts of itself
a given student will actually get. Those two positions are what I encoded; a
third — the register — is what the harness spends most of its words on, because
it was the one most at risk.

That risk is specific. An agent writing about investing drifts to the upside,
because that is what the training data is made of, and one reassuring sentence
on one page of twelve undoes the premise. So `CLAUDE.md` names that drift as
the primary failure mode and bans the three shapes it takes — gain framing,
reassurance, and the disclaimer, which reads as retreat from a position the
course means ([`fdea0cc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/fdea0cc)).
`spec/thesis.test.ts` holds the mechanical half against the built HTML. It never
fired across roughly 4,000 lines of generated prose, which is the clearest
result I have: stating the constraint before generating anything was worth more
than any amount of editing afterwards.

"One idea, deeper" became a rule that each week owns exactly one named
mechanism, and that a paragraph which would sit equally well in another week
belongs in neither. `spec/curriculum.test.ts` enforces the shape nothing else
can see — twelve weeks, distinct modes, week 12 the single deliberate repeat
([`6bb7cd0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/6bb7cd0)).
"Honest about what it delivers" became the split that six mechanisms a student
can commit deliberately and five the world has to hand them, so only the six
are assessable. That is a declared field per week, a marker down the listing,
and an assertion that the 6/5 promise still holds
([`0fde6bd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/0fde6bd)).

What I left out is in the harness too, in its last section: nothing constrains
topic coverage, week ordering, or how far the provocation goes. Encoding those
would have produced twelve competent weeks with nothing at stake, and they are
the calls worth making by hand.

What changed most was what I accepted back. Early on, green checks were my
acceptance criterion. Then `pnpm check` passed — 32 pages, no accessibility
violations, no broken links — on a site whose every lecture read `failure
mode:ruin` and whose week 1 arithmetic had its result off the right edge of a
phone
([`445ac21`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/445ac21)).
After that I stopped accepting anything I had not seen rendered, and started
rejecting work on sight: a marker that printed `RUIN` under a heading reading
"Week 1: Ruin", and a calculator that measured 826px against 813px of usable
slide height.

The harness and the build check different things, and the gap between them is
visual — so two of my checks now live in that gap
([`07cd186`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/commit/07cd186)).
Twice, though, the work corrected the course rather than implementing it: every
survivor of week 1's bet holds identically `1.10^40 = 45.26`, and week 9's 87%
is week 1's own number inverted. I accepted both because they were arithmetic I
could redo.

Full history:
[`906d4b9...ec6c6d8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-wuyimin362-sudo/compare/906d4b9...ec6c6d8).
The site was built with Claude Code under that harness; the positions, the
staging and the verification are mine.
