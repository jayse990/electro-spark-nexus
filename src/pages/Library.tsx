
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedBackground from '../components/AnimatedBackground';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import PomodoroTimer from '../components/PomodoroTimer';

const Library: React.FC = () => {
  const { t } = useLanguage();
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("methods");
  
  const methodologies = [
    {
      name: "Pomodoro",
      description: t('pomodoroDesc'),
      icon: "🍅",
      hasTryIt: true
    },
    {
      name: "Pareto",
      description: t('paretoDesc'),
      icon: "📊",
      hasTryIt: false
    },
    {
      name: "Eisenhower",
      description: t('eisenhowerDesc'),
      icon: "🧠",
      hasTryIt: false
    }
  ];
  
  const resources = [
    {
      name: "ChatGPT",
      url: "https://chat.openai.com",
      description: t('chatgptDesc'),
      icon: "🤖"
    },
    {
      name: "DeepSeek",
      url: "https://deepseek.com",
      description: t('deepseekDesc'),
      icon: "🔍"
    },
    {
      name: "Wikipedia",
      url: "https://wikipedia.org",
      description: t('wikipediaDesc'),
      icon: "📚"
    }
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-16 text-white">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8 animate-fade-in opacity-0" style={{animationDelay: '0.3s'}}>
          <Link to="/" className="mr-4 text-white hover:text-electric-blue transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="page-title">
            <span className="flex items-center">
              <span className="text-electric-blue mr-2">📚</span>
              <span className="text-electric-blue">{t('libraryTitle')}</span>
            </span>
          </h1>
        </div>
        
        <Tabs defaultValue="methods" className="w-full max-w-4xl mx-auto animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
          <TabsList className="grid w-full grid-cols-2 bg-electric-dark/50 backdrop-blur-md border border-electric-blue/20">
            <TabsTrigger value="methods" onClick={() => setActiveTab("methods")} className={activeTab === "methods" ? "text-white bg-electric-blue" : "text-gray-300"}>
              {t('methodsTitle')}
            </TabsTrigger>
            <TabsTrigger value="resources" onClick={() => setActiveTab("resources")} className={activeTab === "resources" ? "text-white bg-electric-blue" : "text-gray-300"}>
              {t('resourcesTitle')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="methods" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodologies.map((method, index) => (
                <div 
                  key={method.name}
                  className="glass-card p-6 h-full flex flex-col animate-fade-in opacity-0"
                  style={{animationDelay: `${0.7 + index * 0.2}s`}}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{method.icon}</span>
                    <h3 className="text-2xl font-bold text-electric-blue">{method.name}</h3>
                  </div>
                  
                  <p className="flex-1 mb-4 text-gray-200">{method.description}</p>
                  
                  {method.hasTryIt && (
                    <Button 
                      className="self-start mt-auto bg-electric-blue hover:bg-electric-purple text-white"
                      onClick={() => setIsTimerOpen(true)}
                    >
                      {t('tryItButton')}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="resources" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <div 
                  key={resource.name}
                  className="glass-card p-6 h-full flex flex-col animate-fade-in opacity-0"
                  style={{animationDelay: `${0.7 + index * 0.2}s`}}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{resource.icon}</span>
                    <h3 className="text-2xl font-bold text-electric-blue">{resource.name}</h3>
                  </div>
                  
                  <p className="flex-1 mb-4 text-gray-200">{resource.description}</p>
                  
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="self-start mt-auto px-4 py-2 bg-electric-blue hover:bg-electric-purple text-white rounded-md transition-colors"
                  >
                    {t('visitButton')}
                  </a>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Dialog open={isTimerOpen} onOpenChange={setIsTimerOpen}>
        <DialogContent className="bg-electric-dark border-electric-blue/30 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-electric-blue text-xl">{t('pomodoroTimerTitle')}</DialogTitle>
          </DialogHeader>
          <PomodoroTimer />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Library;
