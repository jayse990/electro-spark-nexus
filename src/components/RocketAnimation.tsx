
import React, { useEffect, useRef } from 'react';

const RocketAnimation: React.FC = () => {
  const rocketRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const rocketElement = rocketRef.current;
    if (!rocketElement) return;
    
    rocketElement.style.opacity = '1';
    
    // Start the animation after a small delay
    setTimeout(() => {
      rocketElement.style.transform = 'translateY(-120vh) scale(0.2)';
      rocketElement.style.opacity = '0';
      
      // Add the trail effect
      const trailContainer = document.createElement('div');
      trailContainer.className = 'rocket-trail';
      rocketElement.appendChild(trailContainer);
      
      // Create particles for the trail
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const particle = document.createElement('div');
          particle.className = 'trail-particle';
          const size = Math.random() * 10 + 5;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${Math.random() * 20 - 10}px`;
          
          trailContainer.appendChild(particle);
          
          setTimeout(() => {
            if (trailContainer.contains(particle)) {
              trailContainer.removeChild(particle);
            }
          }, 1000);
        }, i * 50);
      }
    }, 500);
  }, []);
  
  return (
    <div 
      ref={rocketRef}
      className="rocket-animation fixed left-1/2 bottom-0 transform -translate-x-1/2 transition-all duration-[2s] ease-out z-10"
      style={{ opacity: 0 }}
    >
      <div className="relative">
        {/* Rocket body */}
        <div className="w-16 h-24 bg-white rounded-t-full relative">
          {/* Rocket window */}
          <div className="absolute w-8 h-8 rounded-full bg-electric-blue left-1/2 top-1/3 transform -translate-x-1/2 border-2 border-white"></div>
          
          {/* Rocket fins */}
          <div className="absolute bottom-0 left-0 w-4 h-8 bg-electric-purple -translate-x-full"></div>
          <div className="absolute bottom-0 right-0 w-4 h-8 bg-electric-purple translate-x-full"></div>
          
          {/* Rocket bottom */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-electric-dark rounded-b-lg"></div>
          
          {/* Rocket flame */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-12 bg-gradient-to-t from-yellow-500 via-orange-500 to-red-500 rounded-b-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketAnimation;
