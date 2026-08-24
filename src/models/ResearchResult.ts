export type ResearchGrade = "A" | "B" | "C" | "D" | "F";

export interface ResearchIdea {
  title: string;
  description: string;
  grade: ResearchGrade;
}

export interface ResearchResult {
  topic: string;
  ideas: ResearchIdea[];
}