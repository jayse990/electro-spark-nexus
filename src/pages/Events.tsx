
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedBackground from '../components/AnimatedBackground';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import RocketAnimation from '../components/RocketAnimation';

const Events: React.FC = () => {
  const { t } = useLanguage();
  const animationCompleted = useRef(false);

  useEffect(() => {
    // Reset animation state when component mounts
    animationCompleted.current = false;
  }, []);

  const events = [
    {
      id: 1,
      title: t('event1Title'),
      date: t('event1Date'),
      description: t('event1Description')
    },
    {
      id: 2,
      title: t('event2Title'),
      date: t('event2Date'),
      description: t('event2Description')
    },
    {
      id: 3,
      title: t('event3Title'),
      date: t('event3Date'),
      description: t('event3Description')
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 text-white relative overflow-hidden">
      <AnimatedBackground />
      
      <RocketAnimation />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8 animate-fade-in opacity-0" style={{animationDelay: '0.3s'}}>
          <Link to="/" className="mr-4 text-white hover:text-electric-blue transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="flex items-center">
              <span className="text-electric-blue mr-2">💡</span>
              <span>SGEER</span> - <span className="text-electric-blue">{t('eventsTitle')}</span>
            </span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl font-bold text-electric-blue animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
              {t('upcomingEvents')}
            </h2>
            
            {events.map((event, index) => (
              <div 
                key={event.id}
                className="glass-card p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg animate-fade-in opacity-0"
                style={{animationDelay: `${0.7 + index * 0.2}s`}}
              >
                <h3 className="text-xl font-bold text-electric-blue mb-2">{event.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{event.date}</p>
                <p className="text-white">{event.description}</p>
              </div>
            ))}
          </div>
          
          <div className="hidden lg:flex justify-center items-center animate-fade-in opacity-0" style={{animationDelay: '1.3s'}}>
            <div className="calendar-wrapper relative">
              <svg 
                width="400" 
                height="400" 
                viewBox="0 0 400 400" 
                className="calendar-svg"
              >
                {/* Calendar base */}
                <rect x="50" y="50" width="300" height="300" rx="15" className="stroke-electric-blue fill-electric-dark/50" strokeWidth="2" />
                
                {/* Calendar header */}
                <rect x="50" y="50" width="300" height="50" rx="15" className="fill-electric-blue/20" />
                
                {/* Calendar grid - vertical lines */}
                <line x1="100" y1="100" x2="100" y2="350" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                <line x1="150" y1="100" x2="150" y2="350" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                <line x1="200" y1="100" x2="200" y2="350" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                <line x1="250" y1="100" x2="250" y2="350" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                <line x1="300" y1="100" x2="300" y2="350" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                
                {/* Calendar grid - horizontal lines */}
                <line x1="50" y1="150" x2="350" y2="150" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                <line x1="50" y1="200" x2="350" y2="200" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                <line x1="50" y1="250" x2="350" y2="250" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                <line x1="50" y1="300" x2="350" y2="300" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
                
                {/* Calendar event highlights */}
                <rect x="100" y="120" width="100" height="30" rx="5" className="fill-electric-blue/50 animate-pulse" />
                <rect x="250" y="220" width="60" height="30" rx="5" className="fill-electric-purple/50 animate-pulse" />
                <rect x="150" y="270" width="120" height="30" rx="5" className="fill-electric-blue/50 animate-pulse" />
                
                {/* Calendar title */}
                <text x="200" y="85" textAnchor="middle" className="fill-white font-bold text-lg">2025</text>
                
                {/* Animated highlight circle */}
                <circle cx="150" cy="180" r="10" className="fill-electric-blue animate-pulse" />
              </svg>
              
              {/* Glowing dots animation */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-electric-blue opacity-70 animate-ping" style={{animationDuration: '3s'}}></div>
                <div className="absolute top-3/4 left-2/3 w-2 h-2 rounded-full bg-electric-purple opacity-70 animate-ping" style={{animationDuration: '2s'}}></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-electric-blue opacity-70 animate-ping" style={{animationDuration: '3.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
