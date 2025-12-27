import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaPalette, FaSlidersH, FaFileVideo } from 'react-icons/fa';
import Section from '../ui/Section';

const features = [
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    description: "Powered by MPV's legendary playback engine. Zero dropped frames."
  },
  {
    icon: <FaPalette />,
    title: "Modern Design",
    description: "Sleek, distraction-free interface built for Windows 11."
  },
  {
    icon: <FaFileVideo />,
    title: "Universal Support",
    description: "Plays everything. MKV, MP4, WEBM, FLAC - no extra codecs."
  },
  {
    icon: <FaSlidersH />,
    title: "Fully Customizable",
    description: "Edit CSS, write scripts. Total control."
  }
];

const Features = () => {
  return (
    <Section id="features" className="py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col p-8 md:p-10 bg-muted/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold">
                {feature.title}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;