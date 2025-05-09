
import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="glass-card overflow-hidden">
      <div 
        className="cursor-pointer relative overflow-hidden"
        onClick={toggleExpanded}
      >
        {/* Project image */}
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {/* Project title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-electric-dark/90 to-transparent p-4 text-white text-center">
          <h3 className="text-lg font-medium">{title}</h3>
          <span className="text-sm text-electric-blue">
            {isExpanded ? 'Cliquez pour réduire' : 'Cliquez pour en savoir plus'}
          </span>
        </div>
      </div>
      
      {/* Project details */}
      <div className={`project-card ${isExpanded ? 'active' : ''} px-4 pb-4 text-white`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
