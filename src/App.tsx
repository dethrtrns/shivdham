import React, { useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ActionButtons from './components/ActionButtons';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-deepRed to-earth overflow-hidden relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[url('/images/mandala-bg.png')] bg-repeat opacity-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-between h-full min-h-screen">
          <Header />
          <Introduction />
          <ActionButtons />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;