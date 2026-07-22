"use client";

import { useEffect, useState } from "react";

export function VideoBackground() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkStarMode = () => {
      const isStar = document.documentElement.classList.contains('star');
      setIsVisible(isStar);
    };

    checkStarMode();
    
    const observer = new MutationObserver(checkStarMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      <source src="/star.mp4" type="video/mp4" />
    </video>
  );
}
