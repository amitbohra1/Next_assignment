export type BlogPost = {
  author: string;
  date: string;
  readTime: string;
  heroDescription: string;
  intro: string[];
  features: {
    title: string;
    description: string;
    icon: "zap" | "globe" | "code" | "shield";
  }[];
  appRouterPoints: string[];
  getStart: string[];
  codeExample: string;
  start: string[];
  performance: {
    title: string;
    emoji: string;
    description: string;
  }[];
  conclusion: string[];
};
