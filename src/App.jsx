import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Gallery from './components/sections/Gallery';
import Download from './components/sections/Download';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Features />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
