import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Gallery from './components/sections/Gallery';
import Download from './components/sections/Download';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
