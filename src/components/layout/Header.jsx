import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Docs', href: 'https://github.com/kushwahayashh/LunaPlayer/blob/master/README.md', external: true },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center font-mono text-sm rounded-md">
            L
          </div>
          <span className="font-mono">LUNA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <BsSunFill className="text-lg" /> : <BsMoonStarsFill className="text-lg" />}
            </button>
            <Button href="#download" size="sm">Download</Button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            {theme === 'dark' ? <BsSunFill className="text-lg" /> : <BsMoonStarsFill className="text-lg" />}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full left-0 top-full shadow-lg">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium py-3 border-b border-border/50 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <Button href="#download" className="w-full justify-center" onClick={() => setIsOpen(false)}>
                Download Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;