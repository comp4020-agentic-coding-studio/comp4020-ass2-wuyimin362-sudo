# Harness — SLOP1039 Ruin

## The thesis you may not soften

The course teaches markets from the loss side. It does not teach anyone to make
money, and it never implies it might. Every page holds this line.

An agent writing about investing drifts to the upside by default — it is what
the training data is made of. Treat that drift as the primary failure mode and
check for it before anything else.

Concretely, never write:

- advice framed as gains: "grow your wealth", "beat the market", "maximise
  returns", "build a portfolio that performs"
- reassurance: "over the long run markets go up", "time in the market"
- the hedge: "this is not financial advice", "consult a licensed professional",
  "past performance does not guarantee". The course's stance is stronger than a
  disclaimer and a disclaimer reads as retreat from it.

The register is deadpan. The course means what it says; it is not winking.
Satire that announces itself stops being satire.

## One failure mode per week, and it stays there

Each of the twelve weeks owns exactly one named way to lose money, declared as
`mode:` in the lecture's frontmatter. That name is the week's whole job.

The failure this guards against: weeks converging into "here are the risks of
X". Week 5 is leverage and week 9 is overfitting, and if both read as generic
cautionary material then neither week exists. Before writing any week, read the
adjacent two and the `mode:` of all twelve. If a paragraph would sit equally
well in another week, it belongs in neither.

Week 12 is the exception and deliberately so: it re-reads week 1 with the other
ten weeks behind it. That is the course closing its loop, not a repeat.

## Numbers are load-bearing

Where a number appears it must be one a reader could reproduce — an arithmetic
result stated with its inputs, or a documented figure. Do not invent statistics,
studies, dates or attributed quotes. If a claim needs a citation the course
cannot supply, cut the claim rather than dressing it.

Worked arithmetic is welcome and preferred over assertion: show the 1% compounded
over forty years rather than calling it significant.

## Prose

Write for a first-year who has never held a security. Assume no finance, no
statistics past arithmetic, and no patience for jargon used as decoration.

- Define a term the first time it earns its place, then use it plainly.
- No "key takeaways", no bulleted summaries restating the paragraph above, no
  "in today's fast-paced markets".
- A page that could be about any topic has failed. Specific beats complete.

## The loss requirement is bounded, and the site says so

The course requires documented losses. Every page that touches this points at
the bounded-loss policy: paper positions by default, and a hard cap where a
student chooses real money. This is not a disclaimer bolted on — it is a real
course policy and it is stated as one, in the same register as everything else.

A course that required unbounded real losses would be the kind of harm this
provocation is not. Keep the constraint visible.

## Platform

`README.md` documents the platform and it is fixed. Do not restate facts from
`src/course-config.ts` in page prose — the home page and navigation already read
them, and a restated fact is how two pages start to disagree.

Run `pnpm check` before committing. `spec/` holds the promises this course makes
that the build cannot check; if you change what the course promises, change the
spec in the same commit.

## Left to judgement, deliberately

No rule here constrains the course's topic coverage, week ordering, or how funny
any given page is. Those are the calls worth making by hand, and a harness that
pre-decided them would just produce twelve competent weeks with nothing at stake.
