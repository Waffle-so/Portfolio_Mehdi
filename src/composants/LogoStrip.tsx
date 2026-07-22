'use client';

import Image from 'next/image';
import styles from '@/Style/logoStrip.module.css';

const companies = [
  { name: 'CNEP-Banque', logo: '/CNEP.webp' },
  { name: 'Algérie telecom', logo: '/télécom.webp' },
  { name: 'Ooredoo', logo: '/Ooredoo.webp' },
];

export function LogoStrip() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.badge}>
        </div>
        <h2 className={styles.title}>Des projets à impact réel</h2>
        <p className={styles.subtitle}>
          Des systèmes réels. Des contraintes réelles. <br /> Du code qui tourne en production.
        </p>
      </div>
      <div className={styles.grid}>
        {companies.map((company, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={company.logo}
              alt={company.name}
              width={120}
              height={120}
              className={styles.logoIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

