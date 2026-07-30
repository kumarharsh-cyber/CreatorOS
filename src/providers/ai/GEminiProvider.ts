import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
import { AIProvider } from "./AIProvider";

dotenv.config();

const MODEL = "gemini-2.5-flash-lite";

export class GeminiProvider implements AIProvider {
  private ai: GoogleGenAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing from .env");
    }

    this.ai = new GoogleGenAI({ apiKey });
  }

async generate(prompt: string): Promise<string> {
  const models = await this.ai.models.list();

  for await (const model of models) {
    console.log(model.name);
  }

  return "Model list printed to the terminal.";
}
}