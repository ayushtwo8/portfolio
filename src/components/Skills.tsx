import { Button } from "./ui/button";

const Skills = () => {
  const skillsList = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Git",
    "Github",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen -my-48 text-white px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-white">Skills</span>
        </h2>

        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center max-w-4xl mx-auto">
          {skillsList.map((skill, index) => (
            <Button
              key={index} 
              variant="ghost"
              className="border border-cyan-700 bg-black/30 text-cyan-400 hover:bg-cyan-950 hover:text-white transition-colors duration-200 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 h-auto min-w-0 whitespace-nowrap"
            >
              {skill}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;