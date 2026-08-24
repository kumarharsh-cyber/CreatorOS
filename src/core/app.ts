import { Logger } from "./logger";
import { showMainMenu } from "../cli/menu";
import { MockProvider } from "../providers/ai/MockProvider";
import { ResearchAgent } from "../agents/ResearchAgent";
import { askTopic } from "../cli/input";

export async function startApp() {
  Logger.success("CreatorOS started successfully.");

  const ai = new MockProvider();
  const researchAgent = new ResearchAgent(ai);

  const choice = await showMainMenu();

  switch (choice) {
    case "research": {
      const topic = await askTopic();

      const response = await researchAgent.research(topic);

      Logger.success(`Research results for: ${response.topic}`);

      response.ideas.forEach((idea, index) => {
        Logger.info(`${index + 1}. ${idea.title}`);
        Logger.info(idea.description);
      });

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