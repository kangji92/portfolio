import { describe, it, expect } from "vitest";
import { selectGraph, validateGraph } from "./arch";
import type { ArchGraph } from "@/types";

const validGraph: ArchGraph = {
  nodes: [
    { id: "a", label: "A", variant: "root", position: { x: 0, y: 0 } },
    { id: "b", label: "B", variant: "leaf", position: { x: 0, y: 100 } },
  ],
  edges: [{ id: "e1", source: "a", target: "b" }],
};

describe("validateGraph", () => {
  it("returns empty array for a valid graph", () => {
    expect(validateGraph(validGraph)).toEqual([]);
  });

  it("reports an edge referencing an unknown node", () => {
    const broken: ArchGraph = {
      nodes: [{ id: "a", label: "A", variant: "root", position: { x: 0, y: 0 } }],
      edges: [{ id: "e1", source: "a", target: "missing" }],
    };
    const errors = validateGraph(broken);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain("missing");
  });
});

describe("selectGraph", () => {
  it("returns the before graph when mode is before", () => {
    const arch = { before: validGraph, after: { nodes: [], edges: [] } };
    expect(selectGraph(arch, "before")).toBe(validGraph);
  });

  it("returns the after graph when mode is after", () => {
    const after: ArchGraph = { nodes: [], edges: [] };
    const arch = { before: validGraph, after };
    expect(selectGraph(arch, "after")).toBe(after);
  });
});
