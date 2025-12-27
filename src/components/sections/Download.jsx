import React from 'react';
import { FaGithub, FaLinux, FaApple } from 'react-icons/fa';
import Section from '../ui/Section';
import Button from '../ui/Button';

const Download = () => {
  return (
    <Section id="download" className="relative py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Source Code */}
          <div className="flex flex-col items-center text-center p-8 md:p-10 bg-muted/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaGithub className="text-3xl" />
              <h3 className="text-xl md:text-2xl font-bold">Source Code</h3>
            </div>
            <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
              Audit the code, contribute features, or report issues on GitHub.
            </p>
            <Button variant="outline" className="mt-auto" href="https://github.com/kushwahayashh/LunaPlayer" target="_blank" rel="noopener noreferrer">
              View Repository
            </Button>
          </div>

          {/* Other Platforms */}
          <div className="flex flex-col items-center text-center p-8 md:p-10 bg-muted/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaLinux className="text-3xl" />
              <FaApple className="text-3xl" />
              <h3 className="text-xl md:text-2xl font-bold">Other Platforms</h3>
            </div>
            <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
              Linux and macOS versions are currently in development.
            </p>
            <Button variant="secondary" disabled className="mt-auto opacity-50">
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Download;