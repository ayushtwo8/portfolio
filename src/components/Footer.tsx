import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="text-white mt-8 sm:mt-12 py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together!
          </p>

          <a href="mailto:ayushh8866@gmail.com" className="inline-block">
            <Button className="mt-6 sm:mt-8 lg:mt-10 rounded-full px-6 sm:px-8 py-3 sm:py-4 bg-cyan-800 font-bold hover:bg-cyan-950 transition-colors duration-200 text-base sm:text-lg text-gray-200 hover:text-white">
              Contact Me
            </Button>
          </a>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6 sm:mb-4 text-sm sm:text-base">
            <MapPin size={16} className="flex-shrink-0" />
            <span>Indore, India</span>
          </div>

          <div className="flex justify-center space-x-8 sm:space-x-6 mb-8 py-2">
            <a
              href="mailto:ayushh8866@gmail.com"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800/50"
              aria-label="Email"
            >
              <Mail size={24} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ayushtwo8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800/50"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/ayushtwo8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800/50"
              aria-label="GitHub"
            >
              <Github size={24} className="sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-gray-400 text-sm sm:text-base">
              © {currentYear}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Designed and developed by Ayush Tiwari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;