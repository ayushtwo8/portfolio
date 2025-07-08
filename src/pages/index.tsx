import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

import { ExternalLink, Github } from "lucide-react";

export default function Index() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Zidio Development",
      duration: "April 2025 – June 2025",
      highlights: [
        "Engineered 'Excelytics', a full-stack Excel analytics platform using the MERN stack, handling real-time data processing for 50+ users",
        "Designed and implemented dynamic dashboards with React, leveraging Recharts and Plotly.js to render 5 interactive 2D/3D charts",
        "Integrated Firebase Authentication with JWT-based session management, supporting 500+ secure login requests/day during testing",
      ],
    },
    {
      title: "Java Developer Intern",
      company: "Internship Studio",
      duration: "May 2024 – June 2024",
      highlights: [
        "Completed a structured training program emphasizing Core Java, Object-Oriented Programming(OOP), and software development principles",
        "Developed a GUI-based Pizza Billing Application using Java Swing for the user interface and MySQL for robust database connectivity",
        "Gained practical, hands-on experience in application design, efficient coding, systematic debugging, and effective database integration",
      ],
    },
  ];

  const projects = [
    {
      title: "Brainboard",
      github: "https://github.com/ayushtwo8/brainboard",
      live: "https://github.com/ayushtwo8/brainboard",
      tech: "React.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS",
      highlights: [
        "Built Brainboard, a full-stack 'second brain' web app to store and organize content from platforms like X(Twitter), Youtube and articles, enabling seamless saving, searching and sharing.",
        "Architected the frontend using TypeScript + React, building reusable, accessible UI components styled with Tailwind CSS for a modern and responsive user experience",
        "Designed and implemented secure backend APIs for user data ingestion, sharing, and content categorization, leveraging JWT-based authentication and optimized MongoDB queries for fast and reliable access",
      ],
    },
    {
      title: "Buzzly",
      github: "https://github.com/ayushtwo8/buzzly-react",
      live: "https://github.com/ayushtwo8/buzzly-react",
      tech: "React.js, Node.js, Socket.IO, MongoDB, Tailwind CSS",
      highlights: [
        "Developed a real-time chat platform using React.js for a dynamic frontend and Node.js with Socket.IO for efficient, low-latency communication.",
        "Implemented a visually appealing and highly interactive user interface with Tailwind CSS, focusing on an intuitive user experience",
        "Features included instant messaging, user presence indicators and responsive design across devices",
      ],
    },
  ];
  
    return (
      <div
        className="bg-black w-screen h-screen font-mono"
        style={{
          backgroundImage: `
        linear-gradient(to right, #090909 1px, transparent 1px),
        linear-gradient(to bottom, #090909 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      >
        <Navbar />

        {/* Centered Section */}
        <div className="flex flex-col mx-40 my-20  h-full px-4">
          <h1 className="text-yellow-600 text-2xl font-bold">Ayush Tiwari</h1>
          <h2 className="text-white/90 text-lg font-medium mt-2">About Me</h2>
          <p className="text-white/70 text-md font-normal max-w-xl mt-2">
            I'm Ayush, a full-stack developer from Indore, India. I enjoy
            building web apps that work well and look good.
          </p>

          {/* Experience Section */}
          <section className="bg-black text-white py-10 px-4 md:px-16">
            <h2 className="text-3xl font-semibold mb-10">Experience</h2>
            <div className="relative border-l border-neutral-800 pl-6 space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <span className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-neutral-400 border-2 border-black" />

                  <div className="absolute -left-[8rem] top-0 w-[6.5rem] bg-neutral-900 text-white text-xs px-2 py-1 rounded-md text-center">
                    {exp.duration.toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-neutral-400 mt-1">
                      {exp.highlights}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <Skills />
          
          {/* Project section */}
          <section
            id="projects"
            className="bg-black text-white py-16 px-4 md:px-16"
          >
            <h2 className="text-3xl font-bold mb-10 text-white/90">Projects</h2>

            <div className="flex flex-col gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-950 border border-neutral-900 rounded-lg p-6 space-y-4 hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        className="bg-neutral-800 text-cyan-400 text-xs font-mono px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-400">
                    {project.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex gap-6 pt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-cyan-400 hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live Preview
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-cyan-400 hover:underline"
                      >
                        <Github className="w-3 h-3" />
                        Github
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

