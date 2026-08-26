import React from 'react';
import { personalData } from '../data/personal';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 px-6 bg-[#07090f] border-t border-gray-900 text-center text-xs text-gray-500">
      <p>© 2026 {personalData.name} ({personalData.brand}). {t('footer.rights')}</p>
    </footer>
  );
}
