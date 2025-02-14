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
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket"],
    github: "https://github.com/username/task-manager",
    link: "https://task-app.example.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current conditions and forecasts using multiple weather APIs.",
    technologies: ["React", "Redux", "TailwindCSS", "Weather API"],
    github: "https://github.com/username/weather-dashboard",
  },
];
