import { ResearchResult } from "../models/ResearchResult";

export function validateResearchResult(data: unknown): ResearchResult {
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    throw new Error("Research result must be an object.");
  }

  const result = data as Record<string, unknown>;

  if (typeof result.topic !== "string") {
    throw new Error("Research result topic must be a string.");
  }

  if (!Array.isArray(result.ideas)) {
    throw new Error("Research result ideas must be an array.");
  }

  for (const idea of result.ideas) {
    if (typeof idea !== "object" || idea === null || Array.isArray(idea)) {
      throw new Error("Each research idea must be an object.");
    }

    const researchIdea = idea as Record<string, unknown>;

    if (typeof researchIdea.title !== "string") {
      throw new Error("Research idea title must be a string.");
    }

    if (typeof researchIdea.description !== "string") {
      throw new Error("Research idea description must be a string.");
    }
  }

return result as unknown as ResearchResult;
}
