import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Brainboard",
      github: "https://github.com/ayushtwo8/brainboard",
      live: "",
      tech: "React.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS",
      highlights: [
        "Built Brainboard, a full-stack 'second brain' web app to store and organize content from platforms like X(Twitter), Youtube and articles, enabling seamless saving, searching and sharing.",
        "Architected the frontend using TypeScript + React, building reusable, accessible UI components styled with Tailwind CSS for a modern and responsive user experience",
        "Designed and implemented secure backend APIs for user data ingestion, sharing, and content categorization, leveraging JWT-based authentication and optimized MongoDB queries for fast and reliable access",
      ],
    },
    {
      title: "Buzzly",
      github: "https://github.com/ayushtwo8/Buzzly-socket.io",
      live: "",
      tech: "React.js, Node.js, Socket.IO, MongoDB, Tailwind CSS",
      highlights: [
        "Developed a real-time chat platform using React.js for a dynamic frontend and Node.js with Socket.IO for efficient, low-latency communication.",
        "Implemented a visually appealing and highly interactive user interface with Tailwind CSS, focusing on an intuitive user experience",
        "Features included instant messaging, user presence indicators and responsive design across devices",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="text-white px-4 -mt-48 sm:-mt-56 md:-mt-64 lg:-mt-72 sm:px-6 lg:px-8 pb-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 lg:mb-24">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-neutral-800 hover:border-neutral-700 rounded-lg p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-5 hover:shadow-lg hover:shadow-neutral-900/20 transition-all duration-200 bg-black/20"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.split(", ").map((tech, i) => (
                  <span
                    key={i}
                    className="bg-neutral-800 hover:bg-neutral-700 text-cyan-400 text-xs font-mono px-2 sm:px-3 py-1 rounded-full border border-neutral-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.highlights.map((item, i) => (
                  <li key={i} className="text-justify">{item}</li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-2 border-t border-neutral-800">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm sm:text-base text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-200 py-1"
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    <span>Live Preview</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm sm:text-base text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-200 py-1"
                  >
                    <Github className="w-4 h-4 flex-shrink-0" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;