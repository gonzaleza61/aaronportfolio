export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Witness My Fitness",
    location: "Houston, TX",
    period: "2021 - Present",
    description: [
      "Built cross-platform fitness apps with Flutter, integrating Firebase and OpenAI APIs for AI-powered workout recommendations and real-time data syncing.",
      "Optimized app performance and scalability, implementing best practices in state management, API integration, and cloud functions to enhance user engagement.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Limbic Innovations",
    location: "Houston, Tx",
    period: "2021 - 2022",
    description: [
      "Designed and developed a landing page website to communicate the company's mission in the field of addiction recovery",
      "Worked closely with the marketing team to make changes and updates as needed",
      "Contributed to the overall software development projects of the company",
    ],
  },
];
