import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaPalette, FaSlidersH, FaFileVideo, FaCode, FaMicrochip } from 'react-icons/fa';
import Section from '../ui/Section';
import Card from '../ui/Card';

const features = [
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    description: "Powered by MPV's legendary playback engine. Handles 4K, 8K, and high-bitrate HDR content with zero dropped frames."
  },
  {
    icon: <FaPalette />,
    title: "Modern Design",
    description: "A sleek, distraction-free interface built with modern web technologies that fits perfectly into the Windows 11 ecosystem."
  },
  {
    icon: <FaSlidersH />,
    title: "Highly Customizable",
    description: "Edit CSS, change themes, or write custom scripts. Every aspect of the player is under your control."
  },
  {
    icon: <FaFileVideo />,
    title: "Universal Format Support",
    description: "Plays virtually any media format out of the box. MKV, MP4, AVI, WEBM, FLAC - no external codecs required."
  },
  {
    icon: <FaCode />,
    title: "WebView Powered",
    description: "The UI is rendered using WebView2, allowing for limitless possibilities in styling and functionality using HTML/CSS/JS."
  },
  {
    icon: <FaMicrochip />,
    title: "Hardware Acceleration",
    description: "Optimized for modern GPUs with full hardware decoding support for smooth, battery-efficient playback."
  }
];

const Features = () => {
  return (
    <Section id="features" background="muted">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Why <span className="text-primary">Luna Player?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          We've stripped away the bloat and focused on what matters: performance, design, and control.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;