import type { ArchGraph, Project } from "@/types";

type Architecture = NonNullable<Project["architecture"]>;

export function selectGraph(
  architecture: Architecture,
  mode: "before" | "after",
): ArchGraph {
  return architecture[mode];
}

export function validateGraph(graph: ArchGraph): string[] {
  const ids = new Set(graph.nodes.map((n) => n.id));
  const errors: string[] = [];
  for (const edge of graph.edges) {
    if (!ids.has(edge.source)) {
      errors.push(`edge ${edge.id}: unknown source node "${edge.source}"`);
    }
    if (!ids.has(edge.target)) {
      errors.push(`edge ${edge.id}: unknown target node "${edge.target}"`);
    }
  }
  return errors;
}
