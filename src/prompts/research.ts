export function buildResearchPrompt(topic: string): string {
  return `
You are an expert YouTube Shorts strategist.

Generate 5 viral YouTube Shorts ideas about:

${topic}

For each idea provide:
- Title
- Short Description

Keep every idea under 100 words.
`;
}