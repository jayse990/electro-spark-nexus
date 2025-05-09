
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedBackground from '../components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const handleJoin = () => {
    toast({
      title: "Merci de votre intérêt!",
      description: "Nous vous contacterons très prochainement.",
      duration: 5000,
    });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 text-white">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in opacity-0" style={{animationDelay: '0.3s'}}>
          <span className="text-electric-blue">{t('thanksTitle')}</span>
        </h1>
        
        <div className="max-w-3xl mx-auto glass-card p-6 md:p-10 animate-fade-in opacity-0" style={{animationDelay: '0.6s'}}>
          <p className="text-xl text-center font-medium mb-8">
            {t('motivationalMsg')}
          </p>
          
          <h2 className="text-2xl font-medium mb-6 text-electric-blue">
            {t('contactInfo')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Phone */}
            <div className="flex flex-col items-center text-center p-4 glass-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <h3 className="font-medium text-electric-blue">{t('phone')}</h3>
              <p>+33 12 345 6789</p>
            </div>
            
            {/* Email */}
            <div className="flex flex-col items-center text-center p-4 glass-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <h3 className="font-medium text-electric-purple">{t('email')}</h3>
              <p>contact@techclub.edu</p>
            </div>
            
            {/* Location */}
            <div className="flex flex-col items-center text-center p-4 glass-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1EAEDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <h3 className="font-medium text-electric-blue">{t('location')}</h3>
              <p>Campus Universitaire, 75000 Paris</p>
            </div>
          </div>
          
          {/* Social media */}
          <div className="flex justify-center space-x-6 mb-8">
            {/* Facebook */}
            <a href="#" className="text-gray-300 hover:text-electric-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            
            {/* Twitter */}
            <a href="#" className="text-gray-300 hover:text-electric-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#" className="text-gray-300 hover:text-electric-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="#" className="text-gray-300 hover:text-electric-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
          
          {/* Join button */}
          <div className="text-center">
            <Button 
              onClick={handleJoin}
              className="bg-electric-blue hover:bg-electric-purple px-8 py-6 text-lg"
            >
              {t('joinButton')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
