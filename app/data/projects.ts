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
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/username/ecommerce-platform",
    link: "https://demo-ecommerce.example.com",
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
