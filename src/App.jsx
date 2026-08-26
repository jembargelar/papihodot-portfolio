import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#0B0F19] min-h-screen text-gray-100 selection:bg-cyan-500 selection:text-gray-950 font-sans scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <SocialMedia />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
