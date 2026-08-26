import React from 'react';
import { skillsData } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const getTranslatedCategoryKey = (idx) => {
    const keys = ['skills.c1', 'skills.c2', 'skills.c3', 'skills.c4'];
    return t(keys[idx]);
  };

  return (
    <section id="skills" className="py-24 px-6 bg-[#0B0F19] border-t border-gray-800/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white mb-3">{t('skills.title')}</h2>
          <p className="text-gray-400 text-sm">{t('skills.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col">
              <h3 className="text-lg font-bold text-cyan-400 mb-4 font-mono">
                {getTranslatedCategoryKey(idx)}
              </h3>
              <ul className="space-y-2.5 flex-grow">
                {group.items.map((skill, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
