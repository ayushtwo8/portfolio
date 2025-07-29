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
      <div className="max-w-6xl mx-98">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20">
          <span className="text-white">Skills</span>
        </h2>

        <div className=" flex flex-wrap gap-4 justify-center">
          {skillsList.map((skill, index) => (
            <Button
              key={index} 
              variant="ghost"
              className="border border-cyan-700 bg-black/30 text-cyan-400 hover:bg-cyan-950 hover:text-white transition-colors duration-200"
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
