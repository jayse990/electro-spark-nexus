
import React, { useState } from 'react';
import RocketAnimation from './RocketAnimation';

const WelcomeRocket: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  
  const handleRocketClick = () => {
    setShowWelcome(true);
    
    // Auto-hide the welcome message after 3 seconds
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
  };
  
  return (
    <div className="relative">
      {/* Clickable rocket area */}
      <div 
        className="cursor-pointer inline-block p-2 transition-transform hover:scale-110"
        onClick={handleRocketClick}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white hover:text-electric-blue transition-colors"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
      </div>
      
      {/* Welcome message */}
      {showWelcome && (
        <div className="absolute z-50 -top-2 left-12 md:left-16 min-w-[200px] transform -translate-y-full animate-fade-in bg-yellow-400/90 p-3 rounded-lg shadow-lg border-2 border-yellow-500">
          <p className="text-electric-dark font-medium text-center">Bienvenue à bord !</p>
        </div>
      )}
      
      {/* Trigger rocket animation when clicked */}
      {showWelcome && <RocketAnimation />}
    </div>
  );
};

export default WelcomeRocket;
