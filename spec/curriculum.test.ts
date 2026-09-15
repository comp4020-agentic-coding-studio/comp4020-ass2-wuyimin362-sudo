import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);

// The course promises twelve weeks, each owning one named way to lose money,
// and an assessment scheme that adds up. The schemas validate each entry on its
// own; nothing but this file looks at the twelve together.
describe("the curriculum holds its shape", () => {
  it("runs weeks 1 to 12, each lectured exactly once", () => {
    const weeks = byType("lectures")
      .map((lecture) => lecture.meta?.week)
      .sort((a, b) => Number(a) - Number(b));

    expect(weeks).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("gives every week a distinct named failure mode", () => {
    const lectures = byType("lectures");
    const modes = lectures.map((lecture) => ({
      week: lecture.meta?.week,
      mode: lecture.meta?.mode,
    }));

    for (const { week, mode } of modes) {
      expect(typeof mode === "string" && mode.trim().length > 0, `week ${week} declares no mode`).toBe(
        true,
      );
    }

    // Week 12 re-reads week 1 by design, so it carries week 1's mode and is the
    // one repeat the course allows. Every other week must be its own.
    const closing = modes.find((entry) => entry.week === 12);
    const opening = modes.find((entry) => entry.week === 1);
    expect(closing?.mode, "week 12 closes the loop on week 1's mode").toBe(opening?.mode);

    const distinct = new Set(modes.filter((entry) => entry.week !== 12).map((entry) => entry.mode));
    expect(distinct.size, "two weeks share a failure mode").toBe(11);
  });

  it("assesses exactly 100% of the course", () => {
    const total = byType("assessments").reduce(
      (sum, assessment) => sum + Number(assessment.meta?.weight ?? 0),
      0,
    );

    expect(total).toBe(100);
  });

  it("carries at least one real deck, linked from its lecture and built", () => {
    const linked = byType("lectures")
      .map((lecture) => lecture.meta?.slides)
      .filter((slides): slides is string => typeof slides === "string");

    expect(linked.length, "no lecture links a deck").toBeGreaterThan(0);

    for (const path of linked) {
      const built = resolve(`dist${path}index.html`);
      expect(existsSync(built), `${path} is linked but did not build`).toBe(true);
    }
  });
});
