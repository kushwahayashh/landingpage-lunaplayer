import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      className={cn(
        "glass-panel p-6 rounded-none relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;