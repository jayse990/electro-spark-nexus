
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
            <Button variant="ghost" onClick={toggleMobileMenu} className="p-1">
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-electric-dark/95 pt-20 px-6">
          <div className="flex flex-col space-y-6 items-center">
            <Link 
              to="/" 
              className={`text-xl ${location.pathname === '/' ? 'text-electric-blue' : 'text-gray-300'} hover:text-electric-blue transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              to="/events" 
              className={`text-xl ${location.pathname === '/events' ? 'text-electric-blue' : 'text-gray-300'} hover:text-electric-blue transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('events')}
            </Link>
            <Link 
              to="/projects" 
              className={`text-xl ${location.pathname === '/projects' ? 'text-electric-blue' : 'text-gray-300'} hover:text-electric-blue transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('projects')}
            </Link>
            <Link 
              to="/library" 
              className={`text-xl ${location.pathname === '/library' ? 'text-electric-blue' : 'text-gray-300'} hover:text-electric-blue transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('library')}
            </Link>
            <Link 
              to="/contact" 
              className={`text-xl ${location.pathname === '/contact' ? 'text-electric-blue' : 'text-gray-300'} hover:text-electric-blue transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            
            <Button className="mt-4 bg-electric-blue hover:bg-electric-purple text-white w-full">
              {t('joinButton')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
