import React from 'react';
import { motion } from 'framer-motion';
import { FaWindows, FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';
import Section from '../ui/Section';

const Hero = () => {
  return (
    <Section id="home" className="pt-24 pb-16 md:pt-48 md:pb-32 overflow-visible">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 items-center"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-primary/10 border border-primary/20 w-fit text-xs">
            <span className="w-1.5 h-1.5 bg-primary animate-pulse"></span>
            <span className="font-mono text-primary font-bold uppercase tracking-wider">v1.0.0 Release</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-center">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Future</span> of <br className="hidden md:block" />
            Windows Media.
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-center">
            Experience media like never before with Luna Player.
            Built on MPV and WebView for maximum performance and infinite customizability.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-4 w-full">
            <Button size="lg" className="gap-2 group w-full sm:w-auto justify-center min-w-[200px]" onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' })}>
              <FaWindows className="text-lg" />
              <span className="text-base">Download for Windows</span>
            </Button>
            
            <Button variant="ghost" size="lg" className="gap-2 group w-full sm:w-auto justify-center min-w-[160px]" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
              <span className="text-base">Learn More</span> <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground font-mono mt-4">
            <span>• Open Source</span>
            <span>• No Ads</span>
            <span>• Lightweight</span>
          </div>
        </motion.div>
        
      </div>
    </Section>
  );
};

export default Hero;