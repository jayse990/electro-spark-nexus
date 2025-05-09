
import React, { useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    // Create circuit and particle animations here if needed
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 tech-bg">
      <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {/* Circuit paths */}
        <path className="circuit-path animate-circuit-flow" stroke="#1EAEDB" strokeWidth="1" fill="none" 
          d="M0,500 Q250,400 500,500 T1000,500 M0,700 Q250,600 500,700 T1000,700 M0,300 Q250,200 500,300 T1000,300"
        />
        <path className="circuit-path animate-circuit-flow" stroke="#8B5CF6" strokeWidth="1" fill="none"
          d="M500,0 Q400,250 500,500 T500,1000 M300,0 Q200,250 300,500 T300,1000 M700,0 Q600,250 700,500 T700,1000"
        />
        
        {/* Connection nodes */}
        <circle cx="500" cy="500" r="3" fill="#1EAEDB" />
        <circle cx="300" cy="300" r="2" fill="#8B5CF6" />
        <circle cx="700" cy="700" r="2" fill="#8B5CF6" />
        <circle cx="200" cy="800" r="2" fill="#1EAEDB" />
        <circle cx="800" cy="200" r="2" fill="#1EAEDB" />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
