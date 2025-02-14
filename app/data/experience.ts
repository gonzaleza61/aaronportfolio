export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: [
      "Led development of a high-traffic e-commerce platform using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Lab",
    location: "Remote",
    period: "2019 - 2021",
    description: [
      "Built responsive web applications using React and TypeScript",
      "Developed RESTful APIs using Express and MongoDB",
      "Improved application performance by 60% through optimization",
    ],
  },
  {
    title: "Software Developer",
    company: "StartUp Co",
    location: "Seattle, WA",
    period: "2018 - 2019",
    description: [
      "Developed and maintained multiple client-facing applications",
      "Collaborated with design team to implement UI/UX improvements",
      "Participated in agile development processes",
    ],
  },
];
