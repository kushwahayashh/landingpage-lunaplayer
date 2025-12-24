import React from 'react';
import { cn } from '../../lib/utils';

const Section = ({ 
  children, 
  id, 
  className, 
  fullWidth = false,
  background = 'transparent' // transparent, muted, grid
}) => {
  const backgrounds = {
    transparent: "",
    muted: "bg-muted",
    grid: "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-20 relative overflow-hidden", 
        backgrounds[background],
        className
      )}
    >
      <div className={cn(
        "mx-auto px-6 md:px-12",
        fullWidth ? "w-full" : "max-w-7xl"
      )}>
        {children}
      </div>
    </section>
  );
};

export default Section;