import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import style from '@/Style/projectModal.module.css';
import { Project } from './PixelCard';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const hasMultipleImages = images.length > 1;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return createPortal(
    <div className={style.modal} onClick={onClose}>
      <button
        className={style.modalClose}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <XMarkIcon className={style.modalCloseIcon} />
      </button>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalImageContainer}>
          {hasMultipleImages && (
            <button className={style.navButtonLeft} onClick={handlePrev}>
              <ChevronLeftIcon className={style.navIcon} />
            </button>
          )}
          <Image
            src={images[currentImageIndex]}
            alt={project.nom}
            width={1200}
            height={800}
            className={style.modalImage}
          />
          {hasMultipleImages && (
            <button className={style.navButtonRight} onClick={handleNext}>
              <ChevronRightIcon className={style.navIcon} />
            </button>
          )}
          {hasMultipleImages && (
            <div className={style.dotsContainer}>
              {images.map((_, idx) => (
                <div key={idx} className={`${style.dot} ${idx === currentImageIndex ? style.activeDot : ''}`} />
              ))}
            </div>
          )}
        </div>
        <div className={style.modalDetails}>
          <h2 className={style.modalTitle}>{project.nom}</h2>
          <p className={style.modalDescription}>{project.description}</p>
          <span className={style.modalYear}>{project.année}</span>
        </div>
      </div>
    </div>,
    document.body
  );
}
