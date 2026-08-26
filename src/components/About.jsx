import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 bg-[#0B0F19] border-t border-gray-800/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-3">{t('about.title')}</h2>
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest">{t('about.subtitle')}</p>
        </div>
        <div className="bg-gray-900/40 border border-gray-800 p-8 rounded-2xl shadow-xl backdrop-blur-md">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            {t('about.fullBio')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-800 text-center font-mono text-xs">
            <div>
              <span className="block text-cyan-400 text-lg font-bold">2017</span>
              <span className="text-gray-500">{t('about.started')}</span>
            </div>
            <div>
              <span className="block text-cyan-400 text-lg font-bold">Garut</span>
              <span className="text-gray-500">{t('about.location')}</span>
            </div>
            <div>
              <span className="block text-cyan-400 text-lg font-bold">4+</span>
              <span className="text-gray-500">{t('about.fields')}</span>
            </div>
            <div>
              <span className="block text-cyan-400 text-lg font-bold">100%</span>
              <span className="text-gray-500">{t('about.dedication')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
