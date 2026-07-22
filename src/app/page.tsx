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
            src="/waffle.webp"
            alt="Waffle"
            backSrc="/mehdi_bel.webp"
            backAlt="Mehdi"
            title="Belkacem Mehdi"
            label="Full Stack & AI Engineer"
            description="développeur complet et curieux, je façonne des plateformes web robustes et des architectures d'IA locales pour transformer des idées techniques en expériences concrètes, fluides et intuitives."
          />
        </GsapReveal>

        <GsapReveal>
          <VoirPlus />
        </GsapReveal>

        <GsapReveal>
          <Vscode />
        </GsapReveal>

        <GsapReveal>
          <LogoStrip />
        </GsapReveal>

        <GsapReveal>
          <Work />
        </GsapReveal>
      </div>
    </div>
  );
}
