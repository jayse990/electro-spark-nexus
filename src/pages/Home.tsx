
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedBackground from '../components/AnimatedBackground';
import Lightbulb from '../components/Lightbulb';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-24 text-white">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="gradient-text page-title animate-fade-in opacity-0" style={{animationDelay: '0.3s'}}>
            {t('welcome')} {t('clubName')}
          </h1>
          
          <div className="mt-4 text-lg md:text-xl text-gray-300 animate-fade-in opacity-0" style={{animationDelay: '0.6s'}}>
            {t('specialization')}
          </div>
          
          <Lightbulb />
          
          <div className="mt-16 px-4 py-6 glass-card animate-fade-in opacity-0" style={{animationDelay: '0.9s'}}>
            <p className="text-lg text-gray-200 leading-relaxed">
              {t('aboutClub')}
            </p>
          </div>
          
          {/* Dynamic Circuit Animation */}
          <div className="mt-20 relative h-64">
            <svg className="w-full h-full" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="5" fill="#1EAEDB" className="animate-pulse" />
              <circle cx="700" cy="100" r="5" fill="#8B5CF6" className="animate-pulse" />
              
              <path className="circuit-path animate-circuit-flow" stroke="#1EAEDB" strokeWidth="2" fill="none"
                d="M100,100 L200,100 C250,100 250,50 300,50 L500,50 C550,50 550,100 600,100 L700,100"
              />
              
              <circle cx="300" cy="50" r="4" fill="#1EAEDB" className="animate-pulse" />
              <circle cx="500" cy="50" r="4" fill="#1EAEDB" className="animate-pulse" />
              
              <path className="circuit-path animate-circuit-flow" stroke="#8B5CF6" strokeWidth="2" fill="none"
                d="M100,100 L200,100 C250,100 250,150 300,150 L500,150 C550,150 550,100 600,100 L700,100"
                style={{animationDelay: '1s'}}
              />
              
              <circle cx="300" cy="150" r="4" fill="#8B5CF6" className="animate-pulse" />
              <circle cx="500" cy="150" r="4" fill="#8B5CF6" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
