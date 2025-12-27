import React from 'react';
import Section from '../ui/Section';

const images = [
  { id: 1, src: "/images/image1.png" },
  { id: 2, src: "/images/image2.png" },
  { id: 3, src: "/images/image3.png" },
];

const Gallery = () => {
  return (
    <Section id="gallery" className="py-16 md:py-24" fullWidth>
      <div className="text-center max-w-3xl mx-auto mb-16 px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Interface Gallery</h2>
      </div>

      <div className="flex flex-col gap-16 items-center">
        {images.map((image) => (
          <div key={image.id} className="w-[80vw] mx-auto">
            <div className="overflow-hidden border border-border/50 shadow-2xl bg-card/30">
              <img
                src={image.src}
                alt="Luna Player Interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;