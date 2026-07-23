'use client';

import { useState } from 'react';
import { PixelCard, Project } from './PixelCard';
import styles from '@/Style/work.module.css';

interface Section {
  id: string;
  content: React.ReactNode;
}

interface WorkProps {
  sections?: Section[];
  projects?: Project[];
  projectsEn?: Project[];
  language?: 'fr' | 'en';
}

export function Work({
  projects = [
    { id: '1', nom: 'CNEP Banque', description: 'Système de gestion documentaire sur mesure remplaçant SharePoint. Permet de stocker et d\'organiser efficacement les dossiers, avec l\'avantage exclusif d\'une IA (RAG) intégrée pour interroger instantanément vos documents.', année: '2026', image: '/CNEP_Stage.webp' },
    { id: '2', nom: 'Searchtube', description: 'Moteur de recherche universel et personnalisé, agissant comme un Google sur-mesure. Il indexe n\'importe quel type de lien, article ou ressource avec une très haute qualité de résultat.', année: '2026', image: '/Searchtube.webp' },
    { id: '3', nom: 'Dashboard Celestia', description: 'Tableau de bord analytique complet. Visualisez vos métriques clés, gérez votre catalogue et suivez l\'évolution de vos revenus et de votre rentabilité en un clin d\'œil.', année: '2025', image: '/Dashboard_cele.webp' },
    { id: '4', nom: 'Celestia Jewelry', description: 'Boutique en ligne élégante et moderne dédiée à la vente de bijoux. Une vitrine numérique fluide mettant en valeur chaque collection pour offrir une expérience d\'achat luxueuse.', année: '2024', image: '/Jewelry_website.webp', images: ['/Jewelry_website.webp', '/Jewelry_website2.webp'] }
  ],
  projectsEn = [
    { id: '1', nom: 'CNEP Banque', description: 'Custom document management system replacing SharePoint. Efficiently stores and organizes files, featuring an exclusive built-in AI (RAG) to instantly query your documents.', année: '2026', image: '/CNEP_Stage.webp' },
    { id: '2', nom: 'Searchtube', description: 'Universal and personalized search engine acting like a custom Google. It indexes any type of link, article, or resource with exceptionally high result quality.', année: '2026', image: '/Searchtube.webp' },
    { id: '3', nom: 'Dashboard Celestia', description: 'Comprehensive analytics dashboard. Visualize key metrics, manage your catalog, and track revenue and profitability at a glance.', année: '2025', image: '/Dashboard_cele.webp' },
    { id: '4', nom: 'Celestia Jewelry', description: 'Elegant and modern online store dedicated to selling jewelry. A seamless digital storefront showcasing each collection for a luxurious shopping experience.', année: '2024', image: '/Jewelry_website.webp', images: ['/Jewelry_website.webp', '/Jewelry_website2.webp'] }
  ],
  language = 'fr'
}: WorkProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const activeProjects = language === 'en' ? projectsEn : projects;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.divTitle}>
          <h1 className={styles.workTitle}>/Work</h1>

          <button
            className={styles.expandButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {language === 'en' ? (isExpanded ? 'Collapse' : 'Expand') : (isExpanded ? 'Réduire' : 'Voir tout')}
          </button>
        </div>

        <div className={styles.cardsContainer}>
          <PixelCard projects={activeProjects} isExpanded={isExpanded} />
        </div>
      </div>
    </div>
  );
}
