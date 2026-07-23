'use client';

import { useState, useEffect } from 'react';
import styles from '@/Style/home.module.css';
import { ImageCard } from '@/composants/ImageCard';
import { VideoBackground } from '@/composants/VideoBackground';
import { VoirPlus } from '@/composants/VoirPlus';
import { Work } from '@/composants/Work/Work';
import { LogoStrip } from '@/composants/LogoStrip';
import { Vscode } from '@/composants/Vscode';
import { GsapReveal } from '@/GSAP/GsapReveal';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('en');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.home}>
      {showVideo && <VideoBackground />}
      <div className={styles.container}>
        <GsapReveal>
          <ImageCard
            language={language}
            onToggleLanguage={() => setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'))}
            src="/waffle.webp"
            alt="Waffle"
            backSrc="/mehdi_bel.webp"
            backAlt="Mehdi"
            title="Belkacem Mehdi"
            titleEn="Belkacem Mehdi"
            label="Full Stack & AI Engineer"
            labelEn="Full Stack & AI Engineer"
            description="développeur complet et curieux, je façonne des plateformes web robustes et des architectures d'IA locales pour transformer des idées techniques en expériences concrètes, fluides et intuitives."
            descriptionEn="A curious and comprehensive developer, I build robust web platforms and local AI architectures to transform technical ideas into concrete, seamless, and intuitive experiences."
          />
        </GsapReveal>

        <GsapReveal>
          <VoirPlus language={language} />
        </GsapReveal>

        <GsapReveal>
          <Vscode language={language} />
        </GsapReveal>

        <GsapReveal>
          <LogoStrip language={language} />
        </GsapReveal>

        <GsapReveal>
          <Work language={language} />
        </GsapReveal>
      </div>
    </div>
  );
}
