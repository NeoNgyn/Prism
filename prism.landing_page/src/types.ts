export interface StatCard {
  icon: string;
  number: string;
  description: string;
}

export interface KPI {
  title: string;
  description: string;
}

export interface SummaryCard {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface QAItem {
  question: string;
  preview: string;
  answer: string;
  meta?: string;
  relatedLinks?: Array<{text: string; url: string}>;
}

export interface TestQuestion {
  id: number;
  question: string;
  options: Array<{
    label: string;
    score: number;
  }>;
}

export interface TestResult {
  score: number;
  category: string;
  message: string;
  description: string;
  recommendations: string[];
}
