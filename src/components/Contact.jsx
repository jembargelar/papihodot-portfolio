import React from 'react';
import { personalData } from '../data/personal';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-[#0B0F19] border-t border-gray-800/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">{t('contact.title')}</h2>
        <p className="text-gray-400 text-sm mb-10">{t('contact.subtitle')}</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href={personalData.socials.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold transition shadow-lg shadow-cyan-500/20"
          >
            {t('contact.whatsapp')}
          </a>
          <a 
            href={`mailto:${personalData.socials.email}`}
            className="px-8 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium border border-gray-800 transition"
          >
            {t('contact.email')}
          </a>
        </div>
      </div>
    </section>
  );
}
