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
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current conditions and forecasts using multiple weather APIs.",
    technologies: ["React", "Redux", "TailwindCSS", "Weather API"],
    github: "https://github.com/username/weather-dashboard",
  },
];
