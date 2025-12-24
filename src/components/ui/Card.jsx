import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={cn(
        "glass-panel p-6 rounded-none relative overflow-hidden group",
        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity duration-500",
        // Sharp edges
        "border-l-4 border-l-transparent hover:border-l-primary transition-colors duration-300",
        className
      )}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Sci-fi corner accents */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-border opacity-50 group-hover:border-primary group-hover:opacity-100 transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-border opacity-50 group-hover:border-primary group-hover:opacity-100 transition-colors duration-300"></div>
    </motion.div>
  );
};

export default Card;