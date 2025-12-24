import React from 'react';
import { motion } from 'framer-motion';
import { FaWindows, FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';
import Section from '../ui/Section';

const Hero = () => {
  return (
    <Section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-visible" background="grid">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">v1.0.0 Release</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Future</span> of <br />
            Windows Media.
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Experience media like never before with Luna Player. 
            Built on MPV and WebView for maximum performance and infinite customizability.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Button size="lg" className="gap-2 group" onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' })}>
              <FaWindows className="text-xl" /> 
              <span>Download for Windows</span>
            </Button>
            
            <Button variant="ghost" size="lg" className="gap-2 group" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
              Learn More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono mt-4">
            <span>• Open Source</span>
            <span>• No Ads</span>
            <span>• Lightweight</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="relative perspective-1000"
        >
          {/* Abstract UI Representation - Always dark themed as it's a player mockup */}
          <div className="relative z-10 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl overflow-hidden aspect-video transform transition-transform hover:scale-[1.01] duration-500 group">
            {/* Top Bar */}
            <div className="h-8 bg-slate-950 flex items-center px-4 gap-2 border-b border-slate-800">
               <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
               <div className="ml-auto text-xs text-slate-500 font-mono">luna-player.exe</div>
            </div>
            
            {/* Content Area - Gradient placeholder for now */}
            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
               
               {/* Play Button */}
               <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
               </div>
               
               {/* UI Overlay Elements */}
               <div className="absolute bottom-8 left-8 right-8 h-1 bg-slate-700/50 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-primary/20 blur-2xl -z-10 rounded-full opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/20 blur-xl rounded-full"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 blur-xl rounded-full"></div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;