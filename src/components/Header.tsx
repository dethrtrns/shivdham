import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import OmSvg from '../images/Om.svg'; // Directly import the SVG as an image

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.header 
      className="w-full text-center py-4 mb-6 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-center mb-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-gold w-12 h-12 mr-2 animate-diya-glow"
        >
          <img src={OmSvg} alt="Om Symbol" className="w-full h-full" />
        </motion.div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-gold mb-2">
        <span className="font-devanagari">{t('welcome.title')}</span>
      </h1>
      
      <div className="w-24 h-1 bg-saffron mx-auto rounded-full"></div>
    </motion.header>
  );
};

export default Header;