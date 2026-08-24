import { validateResearchResult } from "./validation";

export function parseJSON<T>(text: string): T {
  let data: unknown;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("AI returned invalid JSON.");
  }

  return validateResearchResult(data) as T;
}
