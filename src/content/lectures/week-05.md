---
title: Leverage
description:
  The one failure mode this course refuses to let you buy with real money, and
  the arithmetic that explains the refusal.
week: 5
mode: leverage
date: 2027-03-22
teachers:
  - marisol-quaye
slides: /decks/week-05/
related:
  - lectures/week-04
---

Every other week on this syllabus you are allowed to go and do the thing. This
week you are not, and the reason is the subject of the lecture.

Under the [bounded-loss policy](/policies/), real-money positions are long-only
and fully paid: you own the thing and the most you can lose is what you paid.
That rule exists because of one number, which we are going to derive.

## Borrowing against a position

Take the 610 units of B at $18.00 from last week — $10,980 of your own money.
Now borrow the same again and buy twice as much:

```
1,220 units at $18.00  =  $21,960
  your money           =  $10,980
  borrowed             =  $10,980
```

Your **equity** is what you would have left after repaying the loan:

```
equity  =  1,220P − $10,980
```

where P is the price. At $18.00 that is $10,980, as it should be.

## The number the broker is watching

Whoever lent you the money wants the position to stay worth comfortably more
than the loan. The usual form is a **maintenance margin**: keep your equity
above some fraction of the position's value, or the position is closed for you.
Take 25%:

```
       (1,220P − 10,980) / 1,220P  =  0.25
        1,220P − 10,980            =  305P
                          915P     =  10,980
                             P     =  $12.00
```

**$12.00.** Not a price you chose, not a price you were warned about, and not a
price at which you have any say. It falls out of three numbers: what you
borrowed, how many units you bought, and a fraction in a document you did not
read.

## What that costs when the price comes back

Suppose B falls to $11.50 and then recovers to $14.00.

**Unleveraged.** You hold 610 units throughout. You are down, and you are still
holding:

```
610 × $14.00  =  $8,540
```

**Leveraged.** You were closed out at $12.00 on the way down:

```
equity  =  1,220 × $12.00 − $10,980  =  $3,660
```

and the move from $12.00 to $14.00 happened to somebody else.

Now compare that to what you would have guessed. B went from $18.00 to $14.00,
a fall of 22.2%. Twice the exposure, twice the loss, so you would expect

```
$10,980 × (1 − 2 × 0.222)  =  $6,101
```

You have $3,660. **The missing $2,441 is not the size of the fall. It is the
shape of it.** Leverage did not multiply your loss by two; it removed your
ability to still be holding when the price came back, and it did so at a price
computed by somebody else.

This is what "the path matters" means, and it is the sentence to take out of
this week.

## The same effect without any borrowing

Leverage makes this worse but does not create it. An instrument that falls 50%
and then rises 50% leaves you at

```
0.50 × 1.50  =  0.75
```

down 25% after two moves that sound like they cancel. To get back from 0.50 to
1.00 the price has to rise 100%, not 50%. Every percentage fall demands a larger
percentage rise to undo it, and leverage enlarges the falls.

## Why the policy says no

Go back to the borrowed position and ask what happens if B keeps falling. The
position is worth the loan when

```
1,220P  =  $10,980  →  P  =  $9.00
```

At $9.00 your equity is zero. **Below $9.00 you owe money you never deposited.**
At $8.00 the position is worth $9,760 against a $10,980 loan and you are $1,220
in debt, on top of having lost everything you put in.

Unleveraged, B at $9.00 means you are holding 610 units worth $5,490 — a bad
week, and yours.

That is the whole argument. A $20 cap is not a cap if the instrument can send you
a bill, and instruments that can send you a bill are sold to retail customers
with the word "amplify" in the advertising. So this course teaches you to derive
the $12.00 and forbids you from paying to experience it.

## This week's work

On the paper track, run the overlay: take your own position history since week 1,
apply 2:1, and compute the price at which you would have been closed out. Use
your real numbers, not the example's. Put the result in the
[log](/records/).

Most of you will find the number sits inside the range your position has already
travelled this semester.
