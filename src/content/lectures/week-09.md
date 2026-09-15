---
title: Overfitting
description:
  You will find a rule that would have avoided every loss you have had. This
  week is about counting how hard you looked.
week: 9
mode: overfitting
date: 2027-05-03
teachers:
  - marisol-quaye
related:
  - lectures/week-04
  - sessions/03-midpoint-check
---

Before this lecture, build one. Take your own position history since week 1 and
find a rule that would have kept you out of your worst decision — a threshold, a
moving average, a day of the week, anything mechanical. Most people find one in
under an hour.

Then count two numbers.

**How many observations do you have?** Nine weeks of daily prices is about 45
trading days. Call it 60 by the time you read this.

**How many rules did you try?** Not how many you kept — how many you looked at,
including the ones you rejected after a glance, and including every variation of
a threshold you nudged. Honest answers are usually between 20 and 50.

With 40 attempts on 60 observations, **finding a rule that fits is the expected
outcome, not evidence of anything.** You were not testing a theory against data;
you were searching a space of rules for one that matched a particular sixty-day
history, and such a rule exists whether or not the market has any structure at
all. This is **overfitting**: the rule memorised your noise, and your noise will
not recur.

The thing that distinguishes a rule that learned something from a rule that
memorised something is that only one of them works on data it has never seen. So
run yours forward for the remaining three weeks, declare the rule and its
thresholds in writing today, and do not adjust them. Bring both results to the
[midpoint check](/sessions/03-midpoint-check/).

Changing a threshold after seeing the next three weeks is not an improvement to
your rule. It is one more of the 40 attempts, and it resets the count.
