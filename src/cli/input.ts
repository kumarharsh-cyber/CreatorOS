import inquirer from "inquirer";

export async function askTopic(): Promise<string> {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "topic",
      message: "🔍 Enter the topic you want to research:",
      validate: (input: string) => {
        if (!input.trim()) {
          return "Please enter a topic.";
        }

        return true;
      },
    },
  ]);

  return answer.topic;
}