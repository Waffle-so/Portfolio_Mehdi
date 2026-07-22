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
  ]
}: VoirPlusProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.button}
      >
        <span>Voir plus</span>
        {isOpen ? <ChevronUpIcon className={styles.icon} /> : <ChevronDownIcon className={styles.icon} />}
      </button>

      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <div className={styles.contentInner}>
          {sections.map((section, index) => (
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
