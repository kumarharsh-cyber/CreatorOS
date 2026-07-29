import { Logger } from "./logger";
import { showMainMenu } from "../cli/menu";
import { MockProvider } from "../providers/ai/MockProvider";


export async function startApp() {
  Logger.success("CreatorOS started successfully.");

  const choice = await showMainMenu();

  switch (choice) {
case "research": {
    const ai = new MockProvider();

    const response = await ai.generate(
        "Give me three trending YouTube Shorts ideas about AI."
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
