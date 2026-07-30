import { AIProvider } from "../providers/ai/AIProvider";
import { buildResearchPrompt } from "../prompts/research";

export class ResearchAgent {
  constructor(private ai: AIProvider) {}

  async research(topic: string): Promise<string> {
    const prompt = buildResearchPrompt(topic);

    return await this.ai.generate(prompt);
  }
}