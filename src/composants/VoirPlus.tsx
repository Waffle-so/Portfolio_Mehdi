'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import styles from '@/Style/voirPlus.module.css';

interface Section {
  id: React.ReactNode;
  content: React.ReactNode;
}

interface VoirPlusProps {
  sections?: Section[];
  sectionsEn?: Section[];
  language?: 'fr' | 'en';
}

export function VoirPlus({
  sections = [
    {
      id: (<><strong className={styles.strong}>Rigueur & Grands Comptes</strong></>),
      content: (
        <>Formé à l'ingénierie au CESI, j'ai fait mes armes sur des projets d'envergure. De la création d'architectures IA souveraines (RAG) pour la CNEP-Banque à l'optimisation de systèmes pour Algérie Télécom et Ooredoo, je maîtrise les exigences de production des grandes entreprises.</>
      )
    },
    {
      id: (<><strong className={styles.strong}>Startups & SaaS</strong></>),
      content: (
        <>Passionné par l'innovation, j'accompagne les porteurs de projets dans le développement de leurs produits. Je fusionne développement web moderne (Next.js, Node.js) et modèles d'IA pour bâtir des plateformes scalables, intelligentes et prêtes à la croissance.</>
      )
    },
    {
      id: (<><strong className={styles.strong}>Freelance, E-commerce & Web</strong></>),
      content: (
        <>Je réalise également des missions sur mesure (sites vitrines ultra-rapides, boutiques e-commerce, intégration). Capable de travailler en solo ou de renforcer une équipe de développeurs, je m'adapte à vos besoins pour livrer des solutions pragmatiques.</>
      )
    },
    {
      id: '',
      content: (
        <>
          Vous avez un projet, une offre d'emploi ou une mission freelance ? <br />
          Contactez-moi à <strong className={styles.link}><a href="mailto:xlutirax@gmail.com">xlutirax@gmail.com</a></strong> et <a href="/Belkacem_MehdiCV.pdf" download target="_blank" rel="noopener noreferrer"><strong className={styles.cvLink}>consultez mon CV</strong></a>
        </>
      )
    }
  ],
  sectionsEn = [
    {
      id: (<><strong className={styles.strong}>Rigor & Large Accounts</strong></>),
      content: (
        <>Trained in engineering at CESI, I cut my teeth on large-scale projects. From creating sovereign AI architectures (RAG) for CNEP-Banque to optimizing systems for Algérie Télécom and Ooredoo, I master the production requirements of large companies.</>
      )
    },
    {
      id: (<><strong className={styles.strong}>Startups & SaaS</strong></>),
      content: (
        <>Passionate about innovation, I support project owners in developing their products. I merge modern web development (Next.js, Node.js) and AI models to build scalable, intelligent, and growth-ready platforms.</>
      )
    },
    {
      id: (<><strong className={styles.strong}>Freelance, E-commerce & Web</strong></>),
      content: (
        <>I also carry out custom assignments (ultra-fast showcase sites, e-commerce stores, integration). Capable of working solo or reinforcing a team of developers, I adapt to your needs to deliver pragmatic solutions.</>
      )
    },
    {
      id: '',
      content: (
        <>
          Do you have a project, a job offer, or a freelance mission? <br />
          Contact me at <strong className={styles.link}><a href="mailto:xlutirax@gmail.com">xlutirax@gmail.com</a></strong> and <a href="/Belkacem_MehdiCV.pdf" download target="_blank" rel="noopener noreferrer"><strong className={styles.cvLink}>check out my resume</strong></a>
        </>
      )
    }
  ],
  language = 'fr'
}: VoirPlusProps) {
  const [isOpen, setIsOpen] = useState(false);

  const activeSections = language === 'en' ? sectionsEn : sections;

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.button}
      >
        <span>{language === 'en' ? 'See more' : 'Voir plus'}</span>
        {isOpen ? <ChevronUpIcon className={styles.icon} /> : <ChevronDownIcon className={styles.icon} />}
      </button>

      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <div className={styles.contentInner}>
          {activeSections.map((section, index) => (
            <div key={index} className={styles.section}>
              <span className={styles.sectionId}>{section.id}</span>
              <div className={styles.sectionContent}>{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
