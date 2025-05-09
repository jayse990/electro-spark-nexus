
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
  projects: {
    fr: "Projets & Ambitions",
    en: "Projects & Ambitions"
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
    fr: "Équipe & Collaboration",
    en: "Team & Collaboration"
  },
  project4Desc: {
    fr: "Notre force réside dans notre diversité. Nous réunissons des étudiants de différentes disciplines pour créer une synergie unique. Cet environnement collaboratif favorise l'innovation et permet d'aborder les problèmes complexes sous différents angles.",
    en: "Our strength lies in our diversity. We bring together students from different disciplines to create a unique synergy. This collaborative environment fosters innovation and allows complex problems to be approached from different angles."
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
