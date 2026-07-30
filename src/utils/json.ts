export function parseJSON<T>(text: string): T {
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error("AI returned invalid JSON.");
  }
}