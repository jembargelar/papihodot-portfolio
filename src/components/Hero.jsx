import React from 'react';
import { personalData } from '../data/personal';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-[#0B0F19] relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-6 font-mono">
          {t('hero.badge')}
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          {t('hero.title')}
        </h1>
        
        <p className="text-xs md:text-sm font-mono text-cyan-300 mb-6 tracking-wide uppercase">
          {t('hero.subtitle')}
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
          {t('hero.bio')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#portfolio" 
            className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold transition shadow-lg shadow-cyan-500/20"
          >
            {t('hero.viewWork')}
          </a>
          <a 
            href={personalData.socials.whatsapp}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium border border-gray-800 transition"
          >
            {t('hero.hireMe')}
          </a>
        </div>
      </div>
    </section>
  );
}
