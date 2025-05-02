import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Introduction: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <motion.div 
      className="text-center mb-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center border-2 border-gold overflow-hidden">
        <img 
          src="/images/mandala-bg.jpg" 
          alt="Family Photo" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <p className={`text-lg text-white max-w-md mx-auto ${language === 'hi' ? 'font-devanagari' : 'font-poppins'}`}>
        {t('intro.head')}
      </p>
    </motion.div>
  );
};

export default Introduction;