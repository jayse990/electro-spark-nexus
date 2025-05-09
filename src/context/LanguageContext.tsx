
import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

type Translations = {
  [key: string]: {
    fr: string;
    en: string;
  };
};

// All the website translations
const translations: Translations = {
  // Navigation
  home: {
    fr: "Accueil",
    en: "Home"
  },
  events: {
    fr: "Actualités & Événements",
    en: "News & Events"
  },
  projects: {
    fr: "Projets & Ambitions",
    en: "Projects & Ambitions"
  },
  library: {
    fr: "Bibliothèque",
    en: "Library"
  },
  contact: {
    fr: "Remerciements",
    en: "Acknowledgments"
  },
  
  // Home Page
  welcome: {
    fr: "Bienvenue au",
    en: "Welcome to"
  },
  clubName: {
    fr: "Club Scientifique",
    en: "Scientific Club"
  },
  specialization: {
    fr: "Génie Électrique, Électronique, Intelligence Artificielle et Énergie",
    en: "Electrical Engineering, Electronics, Artificial Intelligence and Energy"
  },
  lightMessage: {
    fr: "Bienvenue à bord ⚡ Ensemble, construisons le futur !",
    en: "Welcome aboard ⚡ Together, let's build the future!"
  },
  aboutClub: {
    fr: "Notre club scientifique universitaire est dédié à l'exploration et au développement de solutions dans les domaines de l'Électrique, l'Électronique, l'Intelligence Artificielle et l'Énergie. Nous réunissons des étudiants passionnés partageant la même vision : repousser les limites de l'innovation.",
    en: "Our university scientific club is dedicated to exploring and developing solutions in the fields of Electrical, Electronics, Artificial Intelligence and Energy. We bring together passionate students sharing the same vision: pushing the boundaries of innovation."
  },
  
  // Events Page
  eventsTitle: {
    fr: "Actualités & Événements",
    en: "News & Events"
  },
  upcomingEvents: {
    fr: "Prochains événements",
    en: "Upcoming events"
  },
  event1Title: {
    fr: "Hackathon IA & Énergie",
    en: "AI & Energy Hackathon"
  },
  event1Date: {
    fr: "15-17 Juin 2025",
    en: "June 15-17, 2025"
  },
  event1Description: {
    fr: "Un weekend intensif de programmation et d'innovation pour développer des solutions énergétiques durables basées sur l'intelligence artificielle. Ouvert à tous les étudiants de l'université.",
    en: "An intensive weekend of programming and innovation to develop sustainable energy solutions based on artificial intelligence. Open to all university students."
  },
  event2Title: {
    fr: "Conférence: Avenir de la Robotique",
    en: "Conference: Future of Robotics"
  },
  event2Date: {
    fr: "22 Juillet 2025",
    en: "July 22, 2025"
  },
  event2Description: {
    fr: "Rejoignez-nous pour une conférence exceptionnelle avec le Dr. Marie Laurent, experte internationale en robotique avancée. Découvrez les dernières avancées et perspectives futures.",
    en: "Join us for an exceptional conference with Dr. Marie Laurent, international expert in advanced robotics. Discover the latest advances and future perspectives."
  },
  event3Title: {
    fr: "Atelier Électronique Créative",
    en: "Creative Electronics Workshop"
  },
  event3Date: {
    fr: "5 Septembre 2025",
    en: "September 5, 2025"
  },
  event3Description: {
    fr: "Un atelier pratique pour apprendre à concevoir vos propres circuits électroniques et projets DIY. Matériel fourni et aucune expérience préalable requise.",
    en: "A hands-on workshop to learn how to design your own electronic circuits and DIY projects. Materials provided and no prior experience required."
  },
  
  // Projects Page
  projectsTitle: {
    fr: "Nos Projets & Ambitions",
    en: "Our Projects & Ambitions"
  },
  project1Title: {
    fr: "Voiture Autonome",
    en: "Autonomous Car"
  },
  project1Desc: {
    fr: "Notre équipe développe un prototype de véhicule autonome utilisant l'IA pour la reconnaissance d'objets et la prise de décision. Ce projet intègre des capteurs avancés et des algorithmes d'apprentissage profond pour une conduite sécurisée.",
    en: "Our team is developing an autonomous vehicle prototype using AI for object recognition and decision making. This project integrates advanced sensors and deep learning algorithms for safe driving."
  },
  project2Title: {
    fr: "Prothèse Robotique",
    en: "Robotic Prosthesis"
  },
  project2Desc: {
    fr: "Nous travaillons sur une prothèse de main robotisée contrôlée par des signaux électromyographiques. Cette prothèse abordable vise à améliorer significativement la qualité de vie des utilisateurs grâce à sa réactivité et sa précision.",
    en: "We are working on a robotic hand prosthesis controlled by electromyographic signals. This affordable prosthesis aims to significantly improve users' quality of life through its responsiveness and precision."
  },
  project3Title: {
    fr: "Projet Énergétique Innovant",
    en: "Innovative Energy Project"
  },
  project3Desc: {
    fr: "Notre initiative de recherche se concentre sur la conception de panneaux solaires adaptatifs qui optimisent automatiquement leur angle en fonction de la position du soleil, augmentant ainsi l'efficacité énergétique jusqu'à 30% comparé aux systèmes traditionnels.",
    en: "Our research initiative focuses on designing adaptive solar panels that automatically optimize their angle based on the sun's position, thus increasing energy efficiency by up to 30% compared to traditional systems."
  },
  project4Title: {
    fr: "Imprimante 3D",
    en: "3D Printer"
  },
  project4Desc: {
    fr: "Notre projet d'imprimante 3D innovante combine précision, vitesse et utilisation de matériaux durables. Conçue spécifiquement pour les prototypes industriels et l'éducation, elle permet de créer des pièces complexes avec une finition professionnelle.",
    en: "Our innovative 3D printer project combines precision, speed and the use of sustainable materials. Designed specifically for industrial prototyping and education, it allows for the creation of complex parts with a professional finish."
  },
  
  // Library Page
  libraryTitle: {
    fr: "Bibliothèque",
    en: "Library"
  },
  methodsTitle: {
    fr: "Méthodes d'étude",
    en: "Study Methods"
  },
  resourcesTitle: {
    fr: "Ressources",
    en: "Resources"
  },
  pomodoroDesc: {
    fr: "La technique Pomodoro est une méthode de gestion du temps qui divise le travail en intervalles de 25 minutes (appelés pomodoros) séparés par de courtes pauses. Cette technique améliore la concentration et réduit la fatigue mentale.",
    en: "The Pomodoro Technique is a time management method that divides work into 25-minute intervals (called pomodoros) separated by short breaks. This technique improves focus and reduces mental fatigue."
  },
  paretoDesc: {
    fr: "Le principe de Pareto, ou règle des 80/20, suggère que 80% des résultats proviennent de 20% des efforts. En étude, cela implique d'identifier les 20% de votre travail qui produiront 80% de vos résultats, et de prioriser ces activités.",
    en: "The Pareto Principle, or 80/20 rule, suggests that 80% of results come from 20% of efforts. In studying, this involves identifying the 20% of your work that will produce 80% of your results, and prioritizing these activities."
  },
  eisenhowerDesc: {
    fr: "La matrice d'Eisenhower aide à prioriser les tâches en les classant selon deux critères: l'urgence et l'importance. Cela permet d'éviter de passer trop de temps sur des tâches urgentes mais peu importantes au détriment des tâches importantes mais non urgentes.",
    en: "The Eisenhower Matrix helps prioritize tasks by categorizing them according to two criteria: urgency and importance. This helps avoid spending too much time on urgent but unimportant tasks at the expense of important but non-urgent tasks."
  },
  chatgptDesc: {
    fr: "Assistant IA conversationnel capable de répondre à des questions, fournir des informations et aider dans diverses tâches comme la rédaction, la programmation et plus encore.",
    en: "Conversational AI assistant capable of answering questions, providing information, and helping with various tasks like writing, programming, and more."
  },
  deepseekDesc: {
    fr: "Moteur de recherche basé sur l'IA offrant des résultats plus pertinents et une compréhension plus profonde des requêtes complexes.",
    en: "AI-powered search engine offering more relevant results and deeper understanding of complex queries."
  },
  wikipediaDesc: {
    fr: "Encyclopédie en ligne collaborative contenant des millions d'articles dans de nombreuses langues, utile pour la recherche académique initiale.",
    en: "Collaborative online encyclopedia containing millions of articles in many languages, useful for initial academic research."
  },
  tryItButton: {
    fr: "Essayer",
    en: "Try it"
  },
  visitButton: {
    fr: "Visiter",
    en: "Visit"
  },
  pomodoroTimerTitle: {
    fr: "Minuteur Pomodoro",
    en: "Pomodoro Timer"
  },
  minutesLabel: {
    fr: "minutes",
    en: "minutes"
  },
  startButton: {
    fr: "Démarrer",
    en: "Start"
  },
  pauseButton: {
    fr: "Pause",
    en: "Pause"
  },
  resetButton: {
    fr: "Réinitialiser",
    en: "Reset"
  },
  pastSessions: {
    fr: "Sessions précédentes",
    en: "Past sessions"
  },
  
  // Contact Page
  thanksTitle: {
    fr: "Remerciements & Rejoignez-nous",
    en: "Acknowledgments & Join Us"
  },
  motivationalMsg: {
    fr: "Nous sommes les porteurs de demain, rejoignez le mouvement tech",
    en: "We are the bearers of tomorrow, join the tech movement"
  },
  contactInfo: {
    fr: "Coordonnées du club",
    en: "Club Information"
  },
  phone: {
    fr: "Téléphone",
    en: "Phone"
  },
  email: {
    fr: "Email",
    en: "Email"
  },
  location: {
    fr: "Lieu",
    en: "Location"
  },
  joinButton: {
    fr: "Rejoindre le club",
    en: "Join the club"
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation '${key}' not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
