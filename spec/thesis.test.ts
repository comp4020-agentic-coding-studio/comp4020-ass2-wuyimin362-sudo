import { globSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

// The course's whole position is that it does not teach anyone to make money.
// That promise lives in prose, so nothing in the build can hold it — a single
// reassuring sentence on one page of twelve undoes the premise, and it is
// exactly the sentence a language model reaches for when writing about markets.
//
// Two lists, because they fail differently. The hedge is never legitimate here:
// a course that means what it says does not also apologise for it. Promissory
// language is different — the course quotes the industry it is describing — so
// it is banned only outside `data-quoting`, which marks text the course is
// holding up rather than saying. Grep for `data-quoting` to audit every use.

const HEDGES = [
  "not financial advice",
  "not investment advice",
  "consult a licensed",
  "consult a financial",
  "consult a professional",
  "do your own research",
  "past performance is not",
];

const PROMISES = [
  "grow your wealth",
  "build your wealth",
  "maximise returns",
  "maximize returns",
  "maximise your returns",
  "maximize your returns",
  "beat the market",
  "outperform the market",
  "time in the market",
  "get rich",
  "guaranteed return",
  "risk-free return",
];

const QUOTING = /<[^>]+\sdata-quoting[^>]*>[\s\S]*?<\/[^>]+>/g;
const TAGS = /<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g;

const pages = globSync("dist/**/*.html").filter((path) => !path.includes("/_astro/"));

const readable = (path: string, keepQuoted: boolean) => {
  const html = readFileSync(path, "utf8");
  const scoped = keepQuoted ? html : html.replace(QUOTING, " ");
  return scoped
    .replace(TAGS, " ")
    .replace(/&#39;|&rsquo;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .toLowerCase();
};

const hits = (text: string, phrases: string[]) => phrases.filter((phrase) => text.includes(phrase));

describe("the course never promises an upside", () => {
  it("finds pages to check", () => {
    expect(pages.length).toBeGreaterThan(0);
  });

  it.each(pages)("%s does not hedge", (path) => {
    expect(hits(readable(path, true), HEDGES)).toEqual([]);
  });

  it.each(pages)("%s promises no gains in its own voice", (path) => {
    expect(hits(readable(path, false), PROMISES)).toEqual([]);
  });
});
