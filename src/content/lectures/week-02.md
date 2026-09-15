---
title: Cost drag
description:
  The only loss on this syllabus that is guaranteed — what you paid to open a
  position, before the market had an opinion about it.
week: 2
mode: cost drag
date: 2027-03-01
teachers:
  - marisol-quaye
slides: /decks/week-02/
related:
  - lectures/week-01
---

Nothing happened last week. Whatever you bought is roughly where you left it,
and you are already down. This lecture is the arithmetic of that, and it is the
one lecture in the course whose conclusion applies to every single person in the
room.

## The quote has two prices

When you looked up the thing you bought, you probably saw one number. There were
two. Someone will buy from you at the **bid** and someone will sell to you at
the **ask**, and the ask is higher. The gap is the **spread**, and it is the fee
you pay for the existence of somebody willing to trade with you.

Take a quote of $39.96 bid and $40.00 ask. You paid the ask. If you changed your
mind one second later, you would receive the bid. So the instant you bought, the
position was worth

```
$40.00 − $39.96  =  $0.04 per unit
        $0.04 / $40.00  =  0.10%
```

less than you paid. Nobody was wrong about anything. There was no news.

## Then the platform charges you

Add whatever your platform charges per transaction. At $5 to open and $5 to
close, on a $10,000 position, that is

```
$10 / $10,000  =  0.10%
```

So a complete round trip — in and out, one decision, no opinion about the
market — costs

```
0.10%  +  0.10%  =  0.20%
                 =  $20.00 on $10,000
```

We just did this in class: the whole room opened a position and closed it inside
fifty minutes. Check your account. The market did not move enough to matter and
about $20 is missing per $10,000. Write it in your
[position log](/records/) with the side of the quote recorded, because that
column is what this week is for.

## Now leave it alone for forty years

Twenty dollars is not interesting. What makes it the second lecture rather than
a footnote is that this kind of cost recurs, and recurring costs compound
against you exactly the way returns compound for you.

Suppose the total drag on a position is 1% per year — platform fees, spreads on
the trades you do make, the small percentage a fund takes. After forty years you
are holding

```
0.99^40  =  0.669
```

that is, **66.9% of what you would otherwise have had. A third of it is gone.**
Not to a crash, not to a bad decision, not to anything that appeared in a
newspaper. To a number so small that it is usually quoted as a reassurance.

Do it with your own number instead of 1%. If you make four round trips a year at
the 0.20% we measured today, your drag is

```
4 × 0.20%  =  0.80% per year
0.992^40   =  0.725
```

You keep 72.5%, and 27.5% of the outcome went to the act of transacting. Four
trades a year is not active. Most people in this room will do four trades in
March.

## The part that matters for week 12

Cost drag is the only failure mode in this course you are certain to realise,
which is why it comes second and why it is always available as an answer in
[Assignment 1](/assessments/assignment-1/). It needs no bad luck, no bad
judgement and no market event. It needs you to have opened a position, and you
did that last week.

It is also the thinnest answer available, because the diagnosis is a
subtraction. The interesting losses need you to have chosen something, and you
have not chosen anything yet. Next week you will find out that you did.
