export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Fitness App",
    description:
      "A Flutter fitness app leveraging Firebase and OpenAI for AI-powered workout tracking, scheduling, and progress logging—built for a seamless and intelligent fitness experience.",
    technologies: ["Flutter", "Firebase", "OpenAI"],
    github: "https://github.com/gonzaleza61/wmftracker",
    link: "https://wmf-weight-tracker.web.app/",
  },
  {
    title: "QOS Game",
    description:
      "A 2D platformer built with React, JavaScript, and Phaser.js, featuring smooth gameplay, dynamic physics, and immersive visuals for an engaging player experience.",
    technologies: ["React", "JavaScript"],
    github: "https://github.com/gonzaleza61/queenofswordsphaser",
    link: "https://queenofswordsphaser.vercel.app/",
  },
  {
    title: "AlphaThreaded Site",
    description:
      "A React & JavaScript-built website providing essential tool supply information with a clean design and easy contact options.",
    technologies: ["React", "JavaScript", "TailwindCSS"],
    github: "https://github.com/gonzaleza61/alphathreaded",
    link: "https://alphathreaded.vercel.app/",
  },
];
