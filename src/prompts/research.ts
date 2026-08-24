export function buildResearchPrompt(topic: string): string {
  return `
You are an expert YouTube Shorts strategist.

Generate exactly 5 YouTube Shorts ideas about:

${topic}

For each idea, assign a CreatorOS grade based on:
- Hook strength
- Audience appeal
- Uniqueness
- Relevance

Grade definitions:
- A = High potential. Strong hook, strong audience appeal, distinctive, and highly relevant.
- B = Good potential. Solid idea with several strong characteristics.
- C = Moderate potential. Usable idea, but it needs improvement.
- D = Weak potential. Limited appeal, weak differentiation, or weak relevance.
- F = Very weak potential. Should generally not be prioritized.

Return ONLY valid JSON.

Use exactly this format:

{
  "topic": "${topic}",
  "ideas": [
    {
      "title": "Shorts title",
      "description": "Short description",
      "grade": "A"
    }
  ]
}

Rules:
- Generate exactly 5 ideas.
- Every idea must have a title, description, and grade.
- Grade must be exactly one of: A, B, C, D, F.
- Keep every description under 100 words.
- Do not include markdown.
- Do not include explanations outside the JSON.
`;
}