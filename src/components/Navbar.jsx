import React, { useState } from 'react';
import { personalData } from '../data/personal';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-lg font-extrabold tracking-wider text-white">
          {personalData.brand}
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">{t('nav.about')}</a>
          <a href="#skills" className="hover:text-cyan-400 transition">{t('nav.skills')}</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition">{t('nav.portfolio')}</a>
          <a href="#experience" className="hover:text-cyan-400 transition">{t('nav.experience')}</a>
          <a href="#social" className="hover:text-cyan-400 transition">{t('nav.social')}</a>
          
          <button 
            onClick={toggleLang}
            className="px-3 py-1 rounded-md bg-gray-800 text-cyan-400 text-xs font-mono font-bold border border-gray-700 hover:bg-gray-700 transition"
          >
            {lang === 'id' ? 'EN 🇬🇧' : 'ID 🇮🇩'}
          </button>

          <a href="#contact" className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold transition">{t('nav.hire')}</a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-md bg-gray-800 text-cyan-400 text-xs font-mono font-bold border border-gray-700"
          >
            {lang === 'id' ? 'EN' : 'ID'}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0B0F19] border-b border-gray-800 px-6 py-6 flex flex-col gap-4 text-gray-300 shadow-xl">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">{t('nav.about')}</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">{t('nav.skills')}</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">{t('nav.portfolio')}</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">{t('nav.experience')}</a>
          <a href="#social" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">{t('nav.social')}</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-cyan-400 font-bold">{t('nav.hire')}</a>
        </div>
      )}
    </nav>
  );
}
