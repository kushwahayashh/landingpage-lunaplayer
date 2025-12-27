import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 50);
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

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
        "fixed left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border py-3" : "bg-transparent py-5",
        isVisible ? "top-0" : "-top-24"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center font-mono text-sm">
            L
          </div>
          <span className="font-mono">LUNA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <BsSunFill className="text-lg" /> : <BsMoonStarsFill className="text-lg" />}
          </button>
          
          <Button href="#download" size="sm">Download</Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            {theme === 'dark' ? <BsSunFill className="text-lg" /> : <BsMoonStarsFill className="text-lg" />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 bg-black z-40"
          >
            {/* Header bar in mobile menu */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-border">
              <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center font-mono text-sm">
                  L
                </div>
                <span className="font-mono text-white">LUNA</span>
              </a>
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                >
                  {theme === 'dark' ? <BsSunFill className="text-lg" /> : <BsMoonStarsFill className="text-lg" />}
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl focus:outline-none text-white"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            
            {/* Navigation links */}
            <nav className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium text-white/80 hover:text-white py-4 border-b border-white/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 mt-4">
                <Button href="#download" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  Download Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;