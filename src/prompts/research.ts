export function buildResearchPrompt(topic: string): string {
  return `
You are an expert YouTube Shorts strategist.

Generate exactly 5 YouTube Shorts ideas about:

${topic}

Return ONLY valid JSON.

Use exactly this format:

{
  "topic": "${topic}",
  "ideas": [
    {
      "title": "Shorts title",
      "description": "Short description"
    }
  ]
}

Rules:
- Generate exactly 5 ideas.
- Every idea must have a title and description.
- Keep every description under 100 words.
- Do not include markdown.
- Do not include explanations outside the JSON.
`;
}