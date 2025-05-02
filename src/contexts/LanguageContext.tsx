import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'hi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  'welcome.title': {
    hi: 'शिवधाम में आपका स्वागत है',
    en: 'Welcome to Shivdham',
  },
  'intro.head': {
    hi: 'श्री आर. पी. सिंह - शिवधाम के मुखिया और हमारे परिवार के आधारस्तंभ',
    en: 'Mr. R.P. Singh - Head of Shivdham and the pillar of our family',
  },
  'button.call': {
    hi: 'कॉल करें',
    en: 'Call',
  },
  'button.videoCall': {
    hi: 'वीडियो कॉल',
    en: 'Video Call',
  },
  'button.bell': {
    hi: 'घंटी बजाएँ',
    en: 'Ring Bell',
  },
  'bell.rung': {
    hi: 'घंटी बजाई गई है',
    en: 'Bell has been rung',
  },
  'footer.family': {
    hi: 'शिवधाम परिवार',
    en: 'Shivdham Family',
  },
  'language.toggle': {
    hi: 'English',
    en: 'हिन्दी',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[key as keyof typeof translations]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};