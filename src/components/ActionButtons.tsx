import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, Video, Bell } from 'lucide-react';
import { useAudio, useVibrate } from 'react-use';

const ActionButtons: React.FC = () => {
  const { t, language } = useLanguage();
  const [showBellMessage, setShowBellMessage] = useState(false);
  const vibrate = useVibrate();
  
  // Setup for doorbell sound
  const [audio, state, controls] = useAudio({
    src: '/sounds/doorbell-sound.mp3',
    autoPlay: false,
  });

  const buttonBaseClasses = `
    flex flex-col items-center justify-center p-6 rounded-xl
    transform transition-all duration-300 
    ${language === 'hi' ? 'font-devanagari' : 'font-poppins'}
    shadow-lg border-2 border-gold/30 
    hover:shadow-xl hover:scale-105 
    focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-opacity-50
  `;

  const handlePhoneCall = () => {
    window.location.href = 'tel:+918960285326';
  };

  const handleVideoCall = () => {
    window.location.href = 'https://wa.me/919450638189?text=Hello%20from%20Shivdham%20doorbell';
  };

  const handleBellRing = () => {
    // Play sound
    controls.play();
    
    // Trigger vibration if supported and function is available
    if (typeof vibrate === 'function') {
      vibrate(500);
    }
    
    // Show message
    setShowBellMessage(true);
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setShowBellMessage(false);
    }, 3000);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="w-full max-w-lg mx-auto mb-8">
      {audio}
      <motion.div 
        className="grid grid-cols-1 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.button
          variants={item}
          className={`${buttonBaseClasses} bg-deepRed text-white`}
          onClick={handlePhoneCall}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="w-8 h-8 mb-2 text-gold" />
          <span className="text-xl">{t('button.call')}</span>
        </motion.button>
        
        <motion.button
          variants={item} 
          className={`${buttonBaseClasses} bg-earth text-white`}
          onClick={handleVideoCall}
          whileTap={{ scale: 0.95 }}
        >
          <Video className="w-8 h-8 mb-2 text-gold" />
          <span className="text-xl">{t('button.videoCall')}</span>
        </motion.button>
        
        <motion.button
          variants={item}
          className={`${buttonBaseClasses} bg-saffron text-deepRed relative`}
          onClick={handleBellRing}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={state.playing ? { rotate: [0, 15, -15, 15, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            <Bell className="w-8 h-8 mb-2 text-deepRed" />
          </motion.div>
          <span className="text-xl">{t('button.bell')}</span>
          
          {showBellMessage && (
            <motion.div 
              className="absolute bottom-full left-0 right-0 mb-2 p-2 bg-white/90 rounded-lg shadow-lg text-deepRed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t('bell.rung')}
            </motion.div>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ActionButtons;