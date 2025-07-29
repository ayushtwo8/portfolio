import {
  Home,
  Github,
  Linkedin,
  File,
} from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-90 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full shadow-md px-8 py-3 flex items-center justify-around">
      <a href="#" className="text-yellow-400 hover:scale-110 transition">
        <Home size={20} />
      </a>

      <a
        href="https://drive.google.com/file/d/1B5UkGH3ag60idvYXBApSAYRDbe6RTdLT/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <File size={20} />
      </a>
      <a
        href="https://github.com/ayushtwo8"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <Github size={20} />
      </a>
      <a
        href="https://linkedin.com/in/ayushtwo8"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <Linkedin size={20} />
      </a>
    </header>
  );
};

export default Header;
