
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';

const Navigation: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  
  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };
  
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-electric-dark/80 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-electric-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M2 12h20M12 2a10 10 0 0 0 10 10M12 2a10 10 0 0 1 -10 10" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <span className="text-lg font-bold text-white">Tech<span className="text-electric-blue">Club</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`${location.pathname === '/' ? 'text-electric-blue' : 'text-gray-300'} hover:text-electric-blue transition-colors`}>
            {t('home')}
          </Link>
          <Link to="/events" className={`${location.pathname === '/events' ? 'text-electric-blue' : 'text-gray-300'} hover:text-electric-blue transition-colors`}>
            {t('events')}
          </Link>
          <Link to="/projects" className={`${location.pathname === '/projects' ? 'text-electric-blue' : 'text-gray-300'} hover:text-electric-blue transition-colors`}>
            {t('projects')}
          </Link>
          <Link to="/library" className={`${location.pathname === '/library' ? 'text-electric-blue' : 'text-gray-300'} hover:text-electric-blue transition-colors`}>
            {t('library')}
          </Link>
          <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-electric-blue' : 'text-gray-300'} hover:text-electric-blue transition-colors`}>
            {t('contact')}
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            onClick={toggleLanguage}
            variant="ghost" 
            className="text-white hover:text-electric-blue hover:bg-electric-dark"
          >
            {language === 'fr' ? '🇫🇷' : '🇬🇧'}
          </Button>
          
          <Button className="hidden md:flex bg-electric-blue hover:bg-electric-purple text-white">
            {t('joinButton')}
          </Button>
          
          {/* Mobile menu button */}
          <div className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
