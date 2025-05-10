
import React, { useEffect, useState, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const [points, setPoints] = useState<{x: number, y: number, vx: number, vy: number}[]>([]);
  const animationFrameRef = useRef<number>();
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    // Create circuit and particle animations
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Generate constellation points
    const generatePoints = () => {
      const newPoints = [];
      const count = Math.min(window.innerWidth / 15, 100); // Responsive point count
      
      for (let i = 0; i < count; i++) {
        newPoints.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }
      
      setPoints(newPoints);
    };
    
    generatePoints();
    
    // Animation function for moving points
    const animate = () => {
      setPoints(prevPoints => 
        prevPoints.map(point => {
          // Move points
          let newX = point.x + point.vx;
          let newY = point.y + point.vy;
          
          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth) {
            point.vx = -point.vx;
            newX = point.x;
          }
          if (newY < 0 || newY > window.innerHeight) {
            point.vy = -point.vy;
            newY = point.y;
          }
          
          return {
            ...point,
            x: newX,
            y: newY
          };
        })
      );
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Handle resize
    const handleResize = () => {
      generatePoints();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 constellation-bg overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-electric-dark/40"></div>
      
      {/* Constellation SVG */}
      <svg ref={svgRef} className="w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Draw lines between points that are close enough */}
        {points.map((point, i) => 
          points.slice(i + 1).map((point2, j) => {
            const dx = point.x - point2.x;
            const dy = point.y - point2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = Math.min(window.innerWidth, window.innerHeight) / 5;
            
            if (distance < maxDistance) {
              const opacity = 1 - distance / maxDistance;
              return (
                <line 
                  key={`line-${i}-${j}`}
                  x1={point.x} 
                  y1={point.y} 
                  x2={point2.x} 
                  y2={point2.y} 
                  stroke={`rgba(75, 150, 255, ${opacity * 0.15})`}
                  strokeWidth="0.5"
                />
              );
            }
            return null;
          })
        )}
        
        {/* Draw points */}
        {points.map((point, i) => (
          <circle 
            key={`point-${i}`}
            cx={point.x} 
            cy={point.y} 
            r={Math.random() * 1.5 + 0.5} 
            fill={Math.random() > 0.8 ? '#1EAEDB' : '#8B5CF6'} 
            className="animate-pulse"
            style={{ animationDuration: `${Math.random() * 3 + 2}s` }}
          />
        ))}
      </svg>
      
      {/* Additional light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-electric-blue/3 filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-electric-purple/3 filter blur-[100px]"></div>
    </div>
  );
};

export default AnimatedBackground;
