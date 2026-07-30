import { Logger } from "./logger";
import { showMainMenu } from "../cli/menu";
import { MockProvider } from "../providers/ai/MockProvider"; // or GeminiProvider later
import { ResearchAgent } from "../agents/ResearchAgent";


export async function startApp() {
  Logger.success("CreatorOS started successfully.");

  const ai = new MockProvider();
  const researchAgent = new ResearchAgent(ai);

  const choice = await showMainMenu();

  switch (choice) {
    case "research": {
      const response = await researchAgent.research(
        "Artificial Intelligence"
      );

      Logger.success(response);
      break;
    }

    case "script":
      Logger.info("Script Generator coming soon...");
      break;

    case "settings":
      Logger.info("Settings coming soon...");
      break;

    case "exit":
      Logger.info("Goodbye!");
      process.exit(0);
  }
}