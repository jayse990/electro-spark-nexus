
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedBackground from '../components/AnimatedBackground';
import ProjectCard from '../components/ProjectCard';

const projectImages = {
  car: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
  prosthetic: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1000&q=80",
  energy: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
  printer3d: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-24 pb-16 text-white">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in opacity-0" style={{animationDelay: '0.3s'}}>
          <span className="text-electric-blue">{t('projectsTitle')}</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
            <ProjectCard 
              title={t('project1Title')}
              description={t('project1Desc')}
              imageSrc={projectImages.car}
            />
          </div>
          
          <div className="animate-fade-in opacity-0" style={{animationDelay: '0.7s'}}>
            <ProjectCard 
              title={t('project2Title')}
              description={t('project2Desc')}
              imageSrc={projectImages.prosthetic}
            />
          </div>
          
          <div className="animate-fade-in opacity-0" style={{animationDelay: '0.9s'}}>
            <ProjectCard 
              title={t('project3Title')}
              description={t('project3Desc')}
              imageSrc={projectImages.energy}
            />
          </div>
          
          <div className="animate-fade-in opacity-0" style={{animationDelay: '1.1s'}}>
            <ProjectCard 
              title={t('project4Title')}
              description={t('project4Desc')}
              imageSrc={projectImages.printer3d}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
