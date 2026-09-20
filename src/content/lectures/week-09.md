---
title: Overfitting
description:
  You will find a rule that would have avoided every loss you have had. This
  week counts how hard you looked, using week 1's arithmetic.
week: 9
mode: overfitting
date: 2027-05-03
teachers:
  - marisol-quaye
related:
  - lectures/week-01
  - lectures/week-04
  - sessions/03-midpoint-check
---

Before this lecture, build one. Take your own position history since week 1 and
find a rule that would have kept you out of your worst decision — a threshold, a
moving average, a day of the week, anything mechanical. Most people find one in
under an hour.

Then count two numbers, and be honest about the second.

**How many observations do you have?** Nine weeks of daily prices is about
forty-five trading days. Call it sixty by the time you read this.

**How many rules did you try?** Not how many you kept — how many you *looked
at*, including the ones you rejected after a glance, and counting each nudge of
a threshold as its own attempt. Honest answers are between twenty and fifty.

## This is week 1's arithmetic

Suppose a rule that has learned nothing still has about a 1-in-20 chance of
looking good on sixty days of your data, by luck. One rule, and you probably
find nothing. Now try forty.

The chance that *every one* of forty useless rules fails to impress you is

```
(19/20)^40  =  0.95^40  =  0.1285
```

so the chance that **at least one of them looks good** is

```
1 − 0.1285  =  0.8715
```

**87%.** You were always going to find one.

Look at that number. It is week 1's number, and this is the same computation
run for the other outcome: in week 1, 0.95^40 was the 13% of people who survive
forty exposures to a small chance of ruin. Here it is the 13% of searches that
turn up nothing — which makes 87% the chance the search succeeds at finding
something worthless.

The lesson is the same in both weeks and worth saying in one sentence:
**repeating a thing with a small chance attached does not leave the small chance
small.** In week 1 that killed you. Here it flatters you, which is harder to
notice.

## What you were actually doing

You were not testing a theory against data. You were searching a space of rules
for one that matched a particular sixty-day history, and such a rule exists
whether or not there is any structure in the market at all — because a space of
rules is large and sixty days is small.

That is **overfitting**: the rule memorised your noise. Your noise will not
recur, because it was noise.

Notice what this shares with week 7 and what it does not. Week 7 was a position
you could not check. This is a rule you checked far too many times, against the
one sample that cannot refute it. Both end with a belief you cannot tell from
knowledge; they get there by opposite routes.

## The only thing that separates the two

A rule that learned something works on data it has never seen. A rule that
memorised something does not. There is no other test, and no amount of staring
at the backtest substitutes for it.

So: **declare your rule and its exact thresholds in writing today**, at the
[midpoint check](/sessions/03-midpoint-check/), and run it forward for the
remaining three weeks without touching it. Record what it does, including
nothing.

Changing a threshold after seeing those three weeks is not an improvement to
your rule. It is attempt number forty-one, and it resets the count — which is
why the declaration is signed and handed in rather than kept in your notes.

## For the final project

This is one of the six mechanisms you can commit deliberately, so it is
available to everyone and it is admissible in the
[final project](/assessments/final-project/). It is also the one students write
up best, because the evidence is unusually clean: a declaration with a date on
it, and three weeks of results that were not available when it was written.

Most forward tests in this course fail. A rule that fires twice and is wrong
twice is a complete answer, and it is worth more than a backtest that fits
perfectly.
