import React from 'react';
import { personalData } from '../data/personal';
import { useLanguage } from '../context/LanguageContext';

export default function SocialMedia() {
  const { t } = useLanguage();

  return (
    <section id="social" className="py-24 px-6 bg-[#0B0F19] border-t border-gray-800/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">{t('social.title')}</h2>
        <p className="text-gray-400 text-sm mb-12">{t('social.subtitle')}</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href={personalData.socials.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium border border-gray-800 transition flex items-center gap-2"
          >
            Instagram (@papih.odot)
          </a>
          <a 
            href={personalData.socials.tiktok} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium border border-gray-800 transition flex items-center gap-2"
          >
            TikTok (@papih.odot)
          </a>
        </div>
      </div>
    </section>
  );
}
