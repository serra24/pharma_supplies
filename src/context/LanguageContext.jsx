
import { createContext, useContext, useState, useEffect } from 'react';
import en from '../i18n/en.json';
import ar from '../i18n/ar.json';

const LanguageContext = createContext();

const translations = { en, ar };
const LOCAL_KEY = 'lang';

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ar');
  const [dir, setDir] = useState('rtl');

// Load saved language from localStorage and set direction
  useEffect(() => {
    const savedLang = localStorage.getItem(LOCAL_KEY);
    if (savedLang) {
      setLang(savedLang);
      const newDir = savedLang === 'ar' ? 'rtl' : 'ltr';
      setDir(newDir);
      document.documentElement.dir = newDir;
    }
  }, []);

 const switchLang = (newLang) => {
    setLang(newLang);
    const newDir = newLang === 'ar' ? 'rtl' : 'ltr';
    setDir(newDir);
    localStorage.setItem(LOCAL_KEY, newLang);
    document.documentElement.dir = newDir;
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, dir, switchLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
