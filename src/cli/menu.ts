import inquirer from "inquirer";

export async function showMainMenu(): Promise<string> {
  const answer = await inquirer.prompt([
    {
      type: "select",
      name: "option",
      message: "🚀 Welcome to CreatorOS\n\nChoose an option:",
      choices: [
        {
          name: "📈 Research Trends",
          value: "research",
        },
        {
          name: "📝 Generate Script",
          value: "script",
        },
        {
          name: "⚙️ Settings",
          value: "settings",
        },
        {
          name: "🚪 Exit",
          value: "exit",
        },
      ],
    },
  ]);

  return answer.option;
}