import { experiences } from "./data/experience";
import { projects } from "./data/projects";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi, I'm Aaron, a software developer passionate about building intuitive and efficient applications. With experience in React, Flutter, and JavaScript, I focus on crafting responsive and user-centered interfaces. I enjoy problem-solving, learning new technologies, and bringing ideas to life through code.`}
      </p>

      <h2 className="mt-12 mb-6 text-xl font-semibold tracking-tighter">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-8 last:border-none"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{project.title}</h3>
              <div className="space-x-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            <p className="mt-2 text-gray-700">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-100 px-2 py-1 text-sm text-gray-600 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-12 mb-6 text-xl font-semibold tracking-tighter">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-8 last:border-none"
          >
            <h3 className="font-medium">{exp.title}</h3>
            <div className="text-gray-600">
              {exp.company} • {exp.location}
            </div>
            <div className="text-gray-500 text-sm mb-2">{exp.period}</div>
            <ul className="list-disc list-inside space-y-1">
              {exp.description.map((desc, idx) => (
                <li key={idx} className="text-gray-700">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="my-8"></div>
    </section>
  );
}
