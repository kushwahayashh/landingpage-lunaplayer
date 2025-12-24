import React from 'react';
import { FaWindows, FaGithub, FaLinux, FaApple } from 'react-icons/fa';
import Section from '../ui/Section';
import Button from '../ui/Button';

const Download = () => {
  return (
    <Section id="download" background="muted" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Luna Player</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Free, open source, and privacy-focused. No hidden costs, no tracking.
        </p>

        <div className="glass-panel p-8 md:p-12 mb-12 relative overflow-hidden group">
          {/* Animated Glow Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground mb-6">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">Latest: v1.0.0</span>
              <span>•</span>
              <span>Windows 10/11 (x64)</span>
            </div>

            <Button size="lg" className="w-full md:w-auto min-w-[250px] gap-3 text-lg mb-4">
              <FaWindows className="text-2xl" /> Download Installer
            </Button>
            
            <p className="text-sm text-muted-foreground">
              By downloading, you agree to our <a href="#" className="underline hover:text-primary">Terms</a> and <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center p-6 border border-border bg-card/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaGithub /> Source Code
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Audit the code, contribute features, or report issues on GitHub.
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              View Repository
            </Button>
          </div>

          <div className="flex flex-col items-center p-6 border border-border bg-card/50 opacity-60">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaLinux /> <FaApple /> Other Platforms
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Linux and macOS versions are currently in development.
            </p>
            <Button variant="secondary" size="sm" disabled>
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Download;