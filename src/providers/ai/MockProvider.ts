import { AIProvider } from "./AIProvider";

export class MockProvider implements AIProvider {
  async generate(prompt: string): Promise<string> {
    return `🤖 Mock AI Response\n\nPrompt: ${prompt}`;
  }
}