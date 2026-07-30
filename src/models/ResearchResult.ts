export interface ResearchIdea {
  title: string;
  description: string;
}

export interface ResearchResult {
  topic: string;
  ideas: ResearchIdea[];
}