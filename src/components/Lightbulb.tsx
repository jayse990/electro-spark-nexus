
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Lightbulb: React.FC = () => {
  const [isLit, setIsLit] = useState(false);
  const { t } = useLanguage();
  
  const toggleLight = () => {
    setIsLit(!isLit);
    
    // Auto-hide the welcome message after 3 seconds
    if (!isLit) {
      setTimeout(() => {
        setIsLit(false);
      }, 3000);
    }
  };
  
  return (
    <div className="relative mt-12 flex flex-col items-center">
      <div 
        className={`cursor-pointer light-btn ${isLit ? 'active' : ''}`}
        onClick={toggleLight}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="64" 
          height="64" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke={isLit ? "#1EAEDB" : "currentColor"} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={isLit ? "lightbulb-glow" : ""}
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      </div>
      
      {isLit && (
        <div className="mt-4 animate-scale-in glass-card p-4 text-white max-w-xs text-center">
          <p className="text-yellow-300 font-medium">Bienvenue à bord !</p>
        </div>
      )}
    </div>
  );
};

export default Lightbulb;
