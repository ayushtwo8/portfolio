import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="text-white mt-12 py-16 px-4 sm:px-6 lg:px-8 "
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together!
          </p>

          <Button className="mt-10 rounded-full px-6 py-3 bg-cyan-800 font-bold hover:bg-cyan-950 transition-colors duration-200">
            <a
              href="mailto:ayushh8866@gmail.com"
              className="text-gray-200 hover:text-white transition-colors duration-200"
            >
              Contact Me
            </a>
          </Button>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <MapPin size={16} />
            <span>Indore, India</span>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:ayushh8866@gmail.com"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ayushtwo8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/ayushtwo8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {currentYear}. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Designed and developed by Ayush Tiwari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
