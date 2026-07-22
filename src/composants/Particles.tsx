"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Particles from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";

interface ParticlesBackgroundProps {
  enabled: boolean;
}

export function ParticlesBackground({ enabled }: ParticlesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create a container div in the body
    const container = document.createElement('div');
    container.className = 'fixed inset-0 -z-10';
    document.body.appendChild(container);
    containerRef.current = container;

    return () => {
      if (containerRef.current) {
        document.body.removeChild(containerRef.current);
      }
    };
  }, []);

  if (!enabled || !containerRef.current) return null;

  const options: ISourceOptions = {
    background: {
      color: {
        value: '#0a0a0a',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffd700',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return createPortal(
    <Particles id="tsparticles" options={options} />,
    containerRef.current
  );
}
