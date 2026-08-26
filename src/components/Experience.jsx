import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const timeline = [
    { period: "2017", desc: t('experience.t1') },
    { period: "2018 – 2020", desc: t('experience.t2') },
    { period: "2021 – 2024", desc: t('experience.t3') },
    { period: "2025 – 2026", desc: t('experience.t4') }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#0B0F19] border-t border-gray-800/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white mb-3">{t('experience.title')}</h2>
          <p className="text-gray-400 text-sm">{t('experience.subtitle')}</p>
        </div>

        <div className="relative border-l border-gray-800 ml-4 md:ml-32 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-4 border-[#0B0F19]" />
              <div className="md:absolute md:-left-32 md:text-right md:w-24 text-cyan-400 font-mono text-sm font-bold mb-1 md:mb-0">
                {item.period}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed bg-gray-900/40 border border-gray-800 p-5 rounded-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
