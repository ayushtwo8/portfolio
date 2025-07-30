import { Home, Github, Linkedin, File } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-3 sm:top-4 left-1/2 z-50 -translate-x-1/2 w-[90%] sm:w-[95%] max-w-md sm:max-w-lg lg:max-w-xl bg-white/5 backdrop-blur-sm border border-white/10 rounded-full shadow-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-around">
      <a 
        href="#" 
        className="text-yellow-400 hover:text-yellow-300 hover:scale-110 transition-all duration-200 p-2 sm:p-1 rounded-full hover:bg-white/5"
        aria-label="Home"
      >
        <Home size={18} className="sm:w-5 sm:h-5" />
      </a>

      <a
        href="https://drive.google.com/file/d/1B5UkGH3ag60idvYXBApSAYRDbe6RTdLT/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-cyan-400 hover:scale-110 transition-all duration-200 p-2 sm:p-1 rounded-full hover:bg-white/5"
        aria-label="Resume"
      >
        <File size={18} className="sm:w-5 sm:h-5" />
      </a>

      <a
        href="https://github.com/ayushtwo8"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-cyan-400 hover:scale-110 transition-all duration-200 p-2 sm:p-1 rounded-full hover:bg-white/5"
        aria-label="GitHub"
      >
        <Github size={18} className="sm:w-5 sm:h-5" />
      </a>

      <a
        href="https://linkedin.com/in/ayushtwo8"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-cyan-400 hover:scale-110 transition-all duration-200 p-2 sm:p-1 rounded-full hover:bg-white/5"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} className="sm:w-5 sm:h-5" />
      </a>
    </header>
  );
};

export default Header;