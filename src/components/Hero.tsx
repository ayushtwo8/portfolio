import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-4xl sm:text-5xl lg:text-6xl text-yellow-600 block sm:inline mt-2 sm:mt-0"> 
            Ayush Tiwari
          </span>
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
          I love to code, break things, and figure out how they work. Curious by
          heart — I'm always exploring new topics, whether it's CS, random tech,
          or just something weird I found online. Learning never really stops
          for me. <br />
          <span className="hidden sm:inline"><br /></span>
          If you're building something cool (or just geeking out), let's talk.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          {/* Get in touch button */}
          <div className="relative group cursor-pointer w-full sm:w-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-600 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-all duration-300" />

            <a
              href="mailto:ayushh8866@gmail.com"
              className="relative flex items-center justify-center gap-3 rounded-full bg-black backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 font-medium text-white transition-all duration-200 group-hover:scale-[1.02] border border-gray-700 group-hover:border-yellow-500 w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors duration-200 flex-shrink-0" />
              <span className="text-gray-100 group-hover:text-white transition-colors duration-200 text-sm sm:text-base">
                Get in touch
              </span>
            </a>
          </div>

          {/* View my work button */}
          <div className="relative group cursor-pointer w-full sm:w-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-600 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-all duration-300" />

            <a
              href="#projects"
              className="relative flex items-center justify-center gap-3 rounded-full bg-black backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 font-medium text-white transition-all duration-200 group-hover:scale-[1.02] border border-gray-700 group-hover:border-cyan-500 w-full sm:w-auto"
            >
              <span className="text-gray-100 group-hover:text-white transition-colors duration-200 text-sm sm:text-base">
                View my work
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-500 transition-colors duration-200 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;