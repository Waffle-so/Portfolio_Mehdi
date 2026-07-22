import React, { useState } from 'react';
import style from '@/Style/pixelCard.module.css';
import { ProjectModal } from './ProjectModal';

export interface Project {
  id: string;
  nom: string;
  description: string;
  année: string;
  image: string;
  images?: string[];
}

interface PixelCardProps {
  projects: Project[];
  isExpanded?: boolean;
}

export function PixelCard({ projects, isExpanded = false }: PixelCardProps) {
  const [dynamicStyles, setDynamicStyles] = useState<Record<number, React.CSSProperties>>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    // Inclinaison de la carte
    const angleX = (yc - y) / 18;
    const angleY = (x - xc) / 18;

    // Décalage du reflet (différence par rapport au centre)
    const offsetX = x - xc;
    const offsetY = y - yc;

    setDynamicStyles(prev => ({
      ...prev,
      [index]: {
        transform: `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`,
        '--x-offset': `${offsetX}px`,
        '--y-offset': `${offsetY}px`
      }
    }));
  };

  const handleMouseLeave = (index: number) => {
    setDynamicStyles(prev => ({
      ...prev,
      [index]: {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        '--x-offset': '0px',
        '--y-offset': '0px',
        transition: 'transform 0.5s ease, transform 0.5s ease'
      }
    }));
  };

  return (
    <>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`${style.cardContainer} ${isExpanded ? style.cardExpanded : ''}`}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
          style={dynamicStyles[index] || {}}
          onClick={() => setSelectedProject(project)}
        >
          <div className={style.cardGlare}></div>
          <div className={style.cardContent}>
            <div className={style.cornerTopLeft}>
              <span className={style.cornerText}>{project.id}</span>
              <span className={style.cornerSuit}>♥</span>
            </div>

            <div className={style.centerBox}>
              <h2 className={style.cardTitle}>{project.nom}</h2>
              <span className={style.cardYear}>{project.année}</span>
            </div>

            <div className={style.cornerBottomRight}>
              <span className={style.cornerText}>{project.id}</span>
              <span className={style.cornerSuit}>♥</span>
            </div>
          </div>
        </div>
      ))}

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}