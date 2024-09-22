import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { translations } from '../constans/translation'; 

interface TranslationData {
  home : {
    title : string;
    description : string;
    experience : {
      title :string;
      description1 : string;
      description2 : string;
    };
    skills : {
      title : string;
      technologies : string;
    };
    additionalSkills : {
      title :string;
      creativity : string;
      skills : string;
    };
  };
  navbar: {
    home: string;
    projects: string;
    contact: string;
    languageToggle: string;
  };
  projects: {
    title: string;
    done:string;
    iTalam: {
      title: string;
      description: string[];
    };
    BizManage: {
      title: string;
      description: string[];
    };
    TopAccessories: {
      title: string;
      description: string[];
    };
    KolelOritah: {
      title: string;
      description: string[];
    };
    FootBall : {
      title: string;
      description: string[];
    };
    watchSite: string;
    watchGitHub: string;
    watchVideos: string;
    technologies:string;
  };
  contactIn: {
    title: string;
    email: string;
    phone: string;
    address: string;
    theAddress:string;
    linkedIn: string;
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
