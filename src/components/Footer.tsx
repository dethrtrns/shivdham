import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'hi' ? 'en' : 'hi');
  };
  
  return (
    <motion.footer 
      className="w-full text-center py-4 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <button
        onClick={toggleLanguage}
        className={`mb-4 px-4 py-1 rounded-full border border-gold text-gold hover:bg-gold hover:text-deepRed transition-colors duration-300 ${language === 'hi' ? 'font-poppins' : 'font-devanagari'}`}
      >
        {t('language.toggle')}
      </button>
      
      <p className={`text-sm text-gold/80 ${language === 'hi' ? 'font-devanagari' : 'font-poppins'}`}>
        {t('footer.family')}
      </p>
    </motion.footer>
  );
};

export default Footer;