'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './Button';
import styles from '@/Style/imageCard.module.css';
import { SunIcon, MoonIcon, PlayIcon, StarIcon } from '@heroicons/react/24/outline';

interface ImageCardProps {
  src: string;
  alt: string;
  backSrc?: string;
  backAlt?: string;
  title?: string;
  titleEn?: string;
  label?: string;
  labelEn?: string;
  description?: string;
  descriptionEn?: string;
  language?: 'fr' | 'en';
  onToggleLanguage?: () => void;
}

export function ImageCard({ src, alt, backSrc, backAlt, title, titleEn, label, labelEn, description, descriptionEn, language: propLanguage, onToggleLanguage }: ImageCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'star'>('light');
  const [currentFont, setCurrentFont] = useState<'Satoshi' | 'Author'>('Satoshi');
  const [hasPlayedInitialAnimation, setHasPlayedInitialAnimation] = useState(false);
  const [internalLanguage, setInternalLanguage] = useState<'fr' | 'en'>('fr');

  const language = propLanguage || internalLanguage;
  const toggleLanguage = onToggleLanguage || (() => setInternalLanguage((prev) => (prev === 'fr' ? 'en' : 'fr')));

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background', "url('/paper.webp')");
    root.style.setProperty('--foreground', '#171717');
  }, []);

  useEffect(() => {
    if (!hasPlayedInitialAnimation) {
      const timer = setTimeout(() => {
        setIsFlipped(true);
        setTimeout(() => {
          setIsFlipped(false);
          setHasPlayedInitialAnimation(true);
        }, 500);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasPlayedInitialAnimation]);

  const toggleTheme = () => {
    const themes: Array<'light' | 'dark' | 'star'> = ['light', 'dark', 'star'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);

    const root = document.documentElement;

    if (nextTheme === 'light') {
      root.classList.remove('dark');
      root.classList.remove('star');
      root.style.setProperty('--background', "url('/paper.webp')");
      root.style.setProperty('--foreground', '#171717');
    } else if (nextTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('star');
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
    } else {
      root.classList.remove('dark');
      root.classList.add('star');
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
    }
  };

  const toggleFont = () => {
    const newFont = currentFont === 'Satoshi' ? 'Author' : 'Satoshi';
    setCurrentFont(newFont);
    const root = document.documentElement;
    root.style.setProperty('--font-family', newFont);
  };

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        {/* Top section: Image + Title + Label */}
        <div className={styles.topSection}>
          {/* Flip Image */}
          <div
            className={styles.flipContainer}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className={`${styles.flipInner} ${isFlipped ? styles.flipped : ''}`}>
              {/* Front face */}
              <div className={styles.face}>
                <Image
                  src={src}
                  alt={alt}
                  width={500}
                  height={500}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              {/* Back face */}
              <div className={`${styles.face} ${styles.faceBack}`}>
                <Image
                  src={backSrc || src}
                  alt={backAlt || alt}
                  width={500}
                  height={500}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>

          {/* Title + Label */}
          <div className={styles.titleLabelSection}>
            {(title || titleEn) && (
              <h3 className={styles.title}>
                {language === 'en' && titleEn ? titleEn : title}
              </h3>
            )}
            {(label || labelEn) && (
              <div className={styles.label}>
                {language === 'en' && labelEn ? labelEn : label}
              </div>
            )}
          </div>
        </div>

        {/* Buttons section */}
        <div className={styles.buttonsSection}>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex-1 font-bold"
            aria-label={language === 'en' ? 'Change language' : 'Changer de langue'}
          >
            {language === 'en' ? 'EN' : 'FR'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="flex-1"
            aria-label={language === 'en' ? 'Change theme' : 'Changer de thème'}
          >
            {theme === 'light' ? <SunIcon className="w-5 h-5" /> : theme === 'dark' ? <MoonIcon className="w-5 h-5" /> : <span className="text-lg"><StarIcon className="w-5 h-5" /></span>}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFont}
            className="flex-1"
            aria-label={language === 'en' ? 'Change font' : 'Changer de police'}
          >
            Aa
          </Button>
        </div>
      </div>

      {/* Description */}
      {(description || descriptionEn) && (
        <div className={styles.description}>
          <p>{language === 'en' && descriptionEn ? descriptionEn : description}</p>
        </div>
      )}
    </div>
  );
}
