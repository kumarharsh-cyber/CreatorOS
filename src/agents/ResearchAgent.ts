import { AIProvider } from "../providers/ai/AIProvider";
import { buildResearchPrompt } from "../prompts/research";
import { parseJSON } from "../utils/json";
import { ResearchResult } from "../models/ResearchResult";

export class ResearchAgent {
  constructor(private ai: AIProvider) {}

  async research(topic: string): Promise<ResearchResult> {
    const prompt = buildResearchPrompt(topic);

    const response = await this.ai.generate(prompt);

    return parseJSON<ResearchResult>(response);
  }
}