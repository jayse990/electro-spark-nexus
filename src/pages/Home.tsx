
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedBackground from '../components/AnimatedBackground';
import Lightbulb from '../components/Lightbulb';

const Home: React.FC = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-16 text-white">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section with Welcome Lightbulb */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              {language === 'fr' ? 'Bienvenue au Club SGEER' : 'Welcome to SGEER Club'}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-300 mb-8">
              {language === 'fr' ? 'Sciences, Génie Électrique et Énergies Renouvelables' : 'Sciences, Electrical Engineering and Renewable Energy'}
            </p>
            
            {/* Centered Lightbulb */}
            <Lightbulb />
          </div>
          
          {/* Main Content Section with Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            {/* À Propos de Nous */}
            <div className="glass-card bg-opacity-10 p-8 rounded-lg border border-blue-500/20 bg-gradient-to-br from-electric-blue/10 to-electric-purple/10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400">
                {language === 'fr' ? 'À Propos de Nous' : 'About Us'}
              </h2>
              
              <p className="text-gray-200 leading-relaxed">
                <span className="text-yellow-300 mr-2">💡</span>
                {language === 'fr' ? 
                  'Notre club scientifique universitaire SGEER – Sciences, Génie Électrique et Énergies Renouvelables – est un espace de découverte, de collaboration et d\'innovation. Nous réunissons des étudiants passionnés par les domaines de l\'électricité, de l\'électronique, de l\'énergie durable et des technologies avancées. Notre mission : explorer, concevoir et partager des solutions technologiques utiles et durables, en répondant aux enjeux du futur à travers des projets concrets mêlant créativité, esprit d\'équipe et impact environnemental positif.' 
                  : 
                  'Our university scientific club SGEER - Sciences, Electrical Engineering and Renewable Energy - is a space for discovery, collaboration and innovation. We bring together students passionate about electricity, electronics, sustainable energy and advanced technologies. Our mission: to explore, design and share useful and sustainable technological solutions, addressing future challenges through concrete projects combining creativity, teamwork and positive environmental impact.'}
              </p>
            </div>
            
            {/* Notre Mission */}
            <div className="glass-card bg-opacity-10 p-8 rounded-lg border border-purple-500/20 bg-gradient-to-br from-electric-purple/10 to-electric-blue/10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400">
                {language === 'fr' ? 'Notre Mission' : 'Our Mission'}
              </h2>
              
              <p className="text-gray-200 leading-relaxed">
                {language === 'fr' ? 
                  'Nous visons à créer un environnement collaboratif où les étudiants peuvent développer leurs compétences techniques, partager leurs connaissances et travailler sur des projets innovants qui ont un impact réel sur le monde.' 
                  : 
                  'We aim to create a collaborative environment where students can develop their technical skills, share their knowledge and work on innovative projects that have a real impact on the world.'}
              </p>
            </div>
          </div>
          
          {/* Banner Image Section (matching the reference site) */}
          <div className="mt-16 rounded-xl overflow-hidden">
            <div className="tech-banner relative h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
              <div className="absolute left-8 bottom-8 z-20 max-w-md">
                <h2 className="text-3xl font-bold mb-2 text-white">
                  {language === 'fr' ? 'Bienvenue au Club SGEER' : 'Welcome to SGEER Club'}
                </h2>
                <p className="text-blue-200">
                  {language === 'fr' ? 'Ensemble, innovons pour un avenir meilleur' : 'Together, let\'s innovate for a better future'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Banner Image (with new uploaded image) */}
          <div className="mt-16 rounded-xl overflow-hidden">
            <div className="w-full flex justify-center">
              <img 
                src="/lovable-uploads/44214f27-b270-4756-9af8-d244a1a4ceab.png" 
                alt="SGEER Club Banner" 
                className="w-full max-w-5xl h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
