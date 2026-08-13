import { describe, it, expect } from "vitest";
import { zeroTrust } from "./zero-trust";
import { validateGraph } from "@/lib/arch";

describe("zeroTrust data", () => {
  it("has non-empty case study narrative", () => {
    expect(zeroTrust.caseStudy?.background).toBeTruthy();
    expect(zeroTrust.caseStudy?.challenge).toBeTruthy();
    expect(zeroTrust.caseStudy?.solution.summary).toBeTruthy();
    expect(zeroTrust.caseStudy?.solution.points.length).toBeGreaterThan(0);
    expect(zeroTrust.caseStudy?.improvements.length).toBeGreaterThan(0);
  });

  it("has valid before/after architecture graphs", () => {
    expect(zeroTrust.architecture).toBeDefined();
    expect(validateGraph(zeroTrust.architecture!.before)).toEqual([]);
    expect(validateGraph(zeroTrust.architecture!.after)).toEqual([]);
  });
});
