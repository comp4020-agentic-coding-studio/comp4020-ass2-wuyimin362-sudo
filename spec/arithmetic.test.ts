import { globSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

// The course's position is that its numbers are load-bearing: every figure is
// meant to be reproducible from the inputs printed beside it. A reader who has
// to scroll sideways to reach the right-hand side of a sum cannot do that, and
// on a phone that is exactly what an over-long line does — the block scrolls
// rather than wrapping, so the result of the arithmetic is the part that goes
// off-screen.
//
// Nothing else catches this. The build renders the page, axe passes, the link
// checker passes, and the number is still off the edge. It has been fixed by
// hand twice, in content and then again on a page the hand-check had skipped,
// which is what a test is for.
//
// THE BUDGET IS MEASURED, NOT GUESSED. At the narrowest viewport headless
// Chrome would actually give (500px), the rendered code block is 460px wide
// including 22.4px of padding each side, and the code font measures 10.837px
// per character — so about 38 characters of text fit:
//
//     (460 − 2 × 22.4) / 10.837  =  38.3
//
// A 390px phone is narrower still and could not be measured directly, so 38 is
// a floor rather than a guarantee: staying under it is necessary for the
// arithmetic to be readable on a phone, and may not be sufficient. Lower the
// number if a real device says so; do not raise it without a new measurement.
const BUDGET = 38;

// Decks are excluded: Reveal.js scales a slide to fit its frame, so a deck's
// text does not overflow the way a page's does.
const pages = globSync("dist/**/*.html").filter(
  (path) => !path.includes("/_astro/") && !path.includes("/decks/"),
);

const entities = (text: string) =>
  text
    .replace(/<[^>]*>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");

/** Every line of every fenced block on a page. There is no code in this
 *  course, so each one is a sum. */
const arithmeticLines = (path: string) => {
  const html = readFileSync(path, "utf8");
  const lines: string[] = [];
  for (const block of html.matchAll(/<pre class="astro-code[^"]*"[^>]*>([\s\S]*?)<\/pre>/g)) {
    lines.push(...entities(block[1]).split("\n"));
  }
  return lines;
};

describe("arithmetic stays readable on a phone", () => {
  it("finds pages to check", () => {
    expect(pages.length).toBeGreaterThan(0);
    expect(pages.filter((path) => arithmeticLines(path).length > 0).length).toBeGreaterThan(0);
  });

  it.each(pages)("%s keeps every sum inside the width a phone can show", (path) => {
    const tooWide = arithmeticLines(path)
      .filter((line) => line.length > BUDGET)
      .map((line) => `${line.length} chars: ${line}`);

    expect(tooWide, `wrap these so the result of the sum is not off-screen`).toEqual([]);
  });
});
