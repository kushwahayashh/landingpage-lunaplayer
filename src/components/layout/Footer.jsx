import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center font-mono text-sm">
              L
            </div>
            <span className="font-mono">LUNA</span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <a href="https://github.com/kushwahayashh/LunaPlayer/blob/master/README.md" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Documentation</a>
            <a href="https://github.com/kushwahayashh/LunaPlayer" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <FaGithub className="text-lg" />
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs md:text-sm">
            © {new Date().getFullYear()} Luna Player. MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;