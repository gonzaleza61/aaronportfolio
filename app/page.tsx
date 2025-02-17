import { experiences } from "./data/experience";
import { projects } from "./data/projects";
import { certificates } from "./data/certificates";
import { getTechColor } from "./data/techColors";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi, I'm Aaron, a software developer passionate about building intuitive and efficient applications. With experience in React, Flutter, and JavaScript, I focus on crafting responsive and user-centered interfaces. I enjoy problem-solving, learning new technologies, and bringing ideas to life through code.`}
      </p>

      <h2
        id="projects"
        className="mt-12 mb-6 text-xl font-semibold tracking-tighter scroll-mt-32"
      >
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
              {project.technologies.map((tech, idx) => {
                const { background, text } = getTechColor(tech);
                return (
                  <span
                    key={idx}
                    className="inline-block px-2 py-1 text-sm rounded"
                    style={{
                      backgroundColor: background,
                      color: text,
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <h2
        id="experience"
        className="mt-12 mb-6 text-xl font-semibold tracking-tighter scroll-mt-32"
      >
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

      <div className="mt-8 flex justify-end">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          View Full Resume
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <h2
        id="certificates"
        className="mt-12 mb-6 text-xl font-semibold tracking-tighter scroll-mt-32"
      >
        Certificates
      </h2>
      <div className="space-y-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-8 last:border-none"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{cert.title}</h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                View Certificate
              </a>
            </div>
            <div className="text-gray-600">
              {cert.issuer} • {cert.date}
            </div>
            {cert.description && (
              <p className="mt-2 text-gray-700">{cert.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="my-8"></div>
    </section>
  );
}
