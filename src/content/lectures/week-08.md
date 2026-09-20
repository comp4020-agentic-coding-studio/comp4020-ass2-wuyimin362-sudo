---
title: Correlation collapse
description:
  What your diversification was worth, to the dollar — and why adding more
  positions does not change the number.
week: 8
mode: correlation collapse
rationed: true
date: 2027-04-26
teachers:
  - idris-fenn
related:
  - lectures/week-03
---

Read question 3 of your [opening record](/records/): how many positions, and
what they have in common.

Splitting a position is the standard answer to week 3. Two holdings instead of
one, so a failure in either costs you half as much. That works when the two
things fail for different reasons and does nothing at all when they fail for
the same reason.

## Price your own split

Split $10,980 into two positions of $5,490. One falls 33%, the other 29%:

```
$5,490 × 0.67  =  $3,678
$5,490 × 0.71  =  $3,898
                  ───────
                  $7,576
```

Against having left it all in the first one:

```
$10,980 × 0.67  =  $7,357
```

**The diversification was worth $219, or 2.0% of the position.** Two decisions,
two sets of fees, about two percent of protection.

## Adding more positions does not help

The obvious response is that two was not enough. Test it. Take the same
$10,980 across five positions of $2,196, falling 33%, 29%, 31%, 30% and 32% —
an average fall of 31%:

```
0.67+0.71+0.69+0.70+0.68  =  3.45
$2,196 × 3.45             =  $7,576
```

And one single position falling by that same average 31%:

```
$10,980 × 0.69  =  $7,576
```

**The same number.** Five positions bought you exactly what one did, because
the only thing that protects you is the part where one of them does something
different, and none of them did.

This is the week's whole point, and it is why the failure has its own name
rather than being filed under week 3. Concentration is about *how much* is in
one thing, and you fix it by splitting. This is about whether the things you
split into move apart, and splitting cannot fix it. **The number of positions
is not the variable. Their independence is, and you cannot see independence on
a price screen.**

## Correlation, and where the number comes from

**Correlation** is the degree to which two things move together. Quoted as a
number, it is measured over some past window — and that window is mostly calm
periods, because most periods are calm.

The protection you are buying is only needed during the other kind. During
those, the correlation of almost everything rises toward one, for a reason that
has nothing to do with the things themselves: the same holders are selling
everything they own at once to raise cash, and your two positions sit in the
same portfolios as each other. They are being sold by the same person on the
same morning for the same reason.

So the measured correlation is honest about the months you do not need it and
silent about the weeks you do. That is not a flaw in the measurement. It is
what happens when you measure a relationship during the conditions in which the
relationship does not matter.

## Why this one is not on the assignment

You cannot commit this deliberately. You can choose to concentrate, you can
choose to chase, you can choose to pay fees — but whether your holdings come
apart in a crisis is decided by a crisis, and a semester may not contain one.

It is taught because the response to week 3 is to split, and the split is where
people stop thinking. Knowing this week exists changes the question you ask when
you diversify, from "how many do I hold" to "what would have to be true for
these to fall on different days".

## This week

Compute your own $219: what your split actually saved against the counterfactual
of not having split. If you hold one position, compute what a split into two
would have saved you so far, using real prices.

Then answer question 3 again, properly this time. Not how many positions — what
they have in common. Same customers, same input, same story, same country, same
week in the news. If the honest answer is "everything", write that.
