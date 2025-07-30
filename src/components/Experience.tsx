const Experience = () => {
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

  return (
    <div className="bg-black min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 pt-8">
        <span className="text-white">Experience</span>
      </h2>
      
      <section id="experience" className="text-white px-4 sm:px-6 lg:px-8 pb-8">
        {/* Desktop Timeline */}
        {/* CHANGED: Removed conflicting margins, added max-width and mx-auto for proper centering. */}
        <div className="hidden lg:block max-w-3xl mx-auto mt-6 lg:mt-10 relative border-l border-neutral-800 hover:border-neutral-600 transition-colors duration-200 pl-6 pt-4 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <span className="absolute -left-8 top-1.5 h-4 w-4 rounded-full bg-neutral-400 border-2 border-black transition-transform group-hover:scale-105" />

              {/* Duration */}
              {/* CHANGED: Adjusted '-left-40' to '-left-36' to prevent it from being clipped on smaller large screens. */}
              <div className="absolute -left-36 -top-1.5 w-28 bg-neutral-900 text-white text-xs px-3 py-1 rounded-md text-center shadow-sm border border-neutral-700">
                {exp.duration.toUpperCase()}
              </div>

              {/* Content */}
              <div className="space-y-2 text-justify">
                <h3 className="text-lg font-semibold">
                  {exp.title} 
                  <span className="text-sm font-medium">
                     at {exp.company}
                  </span>
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-400">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Timeline (This part is already responsive and correct) */}
        <div className="lg:hidden mt-6 mx-2 sm:mx-4 space-y-8 sm:space-y-10 border-l border-neutral-800 hover:border-neutral-600 transition-colors duration-200 pl-4 sm:pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <span className="absolute -left-6 sm:-left-8 top-1.5 h-4 w-4 rounded-full bg-neutral-400 border-2 border-black transition-transform group-hover:scale-105" />

              {/* Duration */}
              <div className="mb-3">
                <span className="bg-neutral-900 text-white text-xs px-3 py-1 rounded-md inline-block border border-neutral-700 shadow-sm">
                  {exp.duration.toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-2 text-justify pr-2">
                <h3 className="text-base sm:text-lg font-semibold">
                  {exp.title}
                  <span className="block sm:inline text-sm font-medium text-orange-400 sm:text-white">
                    <span className="hidden sm:inline"> at </span>{exp.company}
                  </span>
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-400">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;