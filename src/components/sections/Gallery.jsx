import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Section from '../ui/Section';

// Placeholder data since we don't have real images yet
const images = [
  { id: 1, title: "Library View", color: "bg-blue-900" },
  { id: 2, title: "Playback Controls", color: "bg-indigo-900" },
  { id: 3, title: "Settings Panel", color: "bg-slate-800" },
  { id: 4, title: "Mini Player", color: "bg-sky-900" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Section id="gallery">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Interface Gallery</h2>
        <p className="text-lg text-muted-foreground">
          See Luna Player in action. Clean, minimal, and focused on your content.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative aspect-video bg-card rounded-lg overflow-hidden shadow-2xl border border-border">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full h-full flex items-center justify-center ${images[currentIndex].color}`}
            >
              {/* Placeholder Content - Always dark since it's a player screenshot mockup */}
              <div className="text-center">
                <div className="text-white/20 text-9xl mb-4 font-bold opacity-20 select-none">LUNA</div>
                <h3 className="text-2xl text-white font-medium">{images[currentIndex].title}</h3>
                <p className="text-white/60">Screenshot Placeholder</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-colors z-10"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-colors z-10"
          >
            <FaChevronRight />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Gallery;