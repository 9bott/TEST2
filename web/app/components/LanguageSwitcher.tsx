'use client';

import { useApp } from '../context/AppContext';
import { FaGlobe } from 'react-icons/fa';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useApp();

  return (
    <button
      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800 text-white hover:bg-navy-700 transition-colors"
    >
      <FaGlobe className="text-lg" />
      <span>{language === 'ar' ? 'English' : 'العربية'}</span>
    </button>
  );
} 