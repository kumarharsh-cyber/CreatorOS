import { AIProvider } from "./AIProvider";

export class MockProvider implements AIProvider {
  async generate(prompt: string): Promise<string> {
    const lines = prompt
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

   const topicIndex = lines.findIndex(
  (line) =>
    line.toLowerCase() ===
    "generate exactly 5 youtube shorts ideas about:"
);
    const topic =
      topicIndex !== -1 && lines[topicIndex + 1]
        ? lines[topicIndex + 1]
        : "Unknown Topic";

    return JSON.stringify({
      topic,
      ideas: [
        {
          title: `5 Things About ${topic}`,
          description: `Discover five interesting things about ${topic} that most people don't know.`
        },
        {
          title: `${topic}: What Nobody Tells You`,
          description: `Explore some surprising facts and insights about ${topic}.`
        },
        {
          title: `The Future of ${topic}`,
          description: `A quick look at how ${topic} could evolve and affect our future.`
        },
        {
          title: `${topic} Explained in 60 Seconds`,
          description: `A fast and simple explanation of the most important ideas behind ${topic}.`
        },
        {
          title: `5 Surprising Facts About ${topic}`,
          description: `Five fascinating facts about ${topic} that could make a great Shorts video.`
        }
      ]
    });
  }
}
