import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { translations } from '../constans/translation'; 

interface TranslationData {
  navbar: {
    home: string;
    projects: string;
    contact: string;
    languageToggle: string;
  };
  contactIn: {
    fullName: string;
    email: string;
    message: string;
    submit: string;
    phone: string;
    emailAddress: string;
  };
}

interface LanguageContextProps {
  language: 'he' | 'en';
  toggleLanguage: () => void;
  t: TranslationData;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<'he' | 'en'>('he');

  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'he' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'he' ? 'en' : 'he';
    setLanguage(newLanguage);
  };

  const value: LanguageContextProps = {
    language,
    toggleLanguage,
    t: translations[language], 
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
