'use client';

import { useState, useRef } from 'react';
import styles from '@/Style/vscode.module.css';
import { ChatBubbleBottomCenterIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface FileContent {
  language: string;
  code: string[];
}

const fileContents: Record<string, FileContent> = {
  'Cesi_Engineering.tsx': {
    language: 'TypeScript',
    code: [
      '<span className={styles.keyword}>const </span> <span className={styles.variable}>formation</span> = &#123;',
      '&nbsp;&nbsp;ecole: <span className={styles.string}>"CESI Exia"</span>, <span className={styles.comment">//</span>',
      '&nbsp;&nbsp;titre: <span className={styles.string}>"Diplôme d\'Ingénieur - Spécialité Informatique"</span>, <span className={styles.comment">//</span>',
      '&nbsp;&nbsp;equivalence: <span className={styles.string}>"Niveau 7 (Master / Bac+5)"</span>, <span className={styles.comment">//</span>',
      '&nbsp;&nbsp;specialite: <span className={styles.string}>"Full Stack & AI Engineer"</span>, <span className={styles.comment">//</span>',
      '&nbsp;&nbsp;focus: <span className={styles.string}>"Building Scalable Web Applications & Intelligent SaaS Solutions"</span>, <span className={styles.comment}>//[cite: 1]</span>',
      '&nbsp;&nbsp;statut: <span className={styles.string}>"Diplômé (Promotion 2026)"</span> <span className={styles.comment}>//[cite: 1]</span>',
      '&#125;;',
      '',
      '<span className={styles.comment}>/*',
      ' * Compétences clés validées au cours du cursus d\'ingénieur :',
      ' * - Concevoir des architectures logicielles robustes, sécurisées et scalables[cite: 1]',
      ' * - Concevoir et déployer des solutions IA locales de bout en bout (RAG, pipelines sémantiques)[cite: 1]',
      ' * - Manager des projets techniques de la planification (WBS, AMDEC) au déploiement de production[cite: 1]',
      ' * - Maîtriser l\'environnement DevOps (Docker, Nginx, virtualisation et sécurisation réseau)[cite: 1]',
      ' */</span>'
    ]
  },
  'experiences.json': {
    language: 'JSON',
    code: [
      '&#123;',
      '&nbsp;&nbsp;<span className={styles.string}>"experiences"</span>: [',
      '&nbsp;&nbsp;&nbsp;&nbsp;&#123;',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"company"</span>: <span className={styles.string}>"CNEP-Banque"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"role"</span>: <span className={styles.string}>"Ingénieur IA &amp; Full Stack (RAG)"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"period"</span>: <span className={styles.string}>"02/2026 - 07/2026"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"project"</span>: <span className={styles.string}>"Intelligent Banking Assistant — RAG Platform"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"description"</span>: <span className={styles.string}>"Conception et déploiement on-premise d\'une architecture IA souveraine pour l\'interrogation de documents réglementaires internes. Implémentation d\'un pipeline sémantique complet avec LLM local."</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"stack"</span>: [',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Ollama"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"ChromaDB"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Next.js"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Python"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Docker"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"GPU Inference"</span>',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]',
      '&nbsp;&nbsp;&nbsp;&nbsp;&#125;,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&#123;',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"company"</span>: <span className={styles.string}>"Algérie Télécom"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"role"</span>: <span className={styles.string}>"Développeur Web Full Stack"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"period"</span>: <span className={styles.string}>"03/2023 - 06/2023"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"project"</span>: <span className={styles.string}>"Plateforme d\'interconnexion Encadrants/Stagiaires"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"description"</span>: <span className={styles.string}>"Conception et développement d\'une solution web pour fluidifier et structurer les relations, le suivi et la validation des missions entre maîtres de stage et stagiaires."</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"stack"</span>: [',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"React.js"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Node.js"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"PostgreSQL"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"UML"</span>',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]',
      '&nbsp;&nbsp;&nbsp;&nbsp;&#125;,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&#123;',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"company"</span>: <span className={styles.string}>"Ooredoo"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"role"</span>: <span className={styles.string}>"Développeur Full Stack & DevOps"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"period"</span>: <span className={styles.string}>"2024 - 2025"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"project"</span>: <span className={styles.string}>"Suivi de Stage & Base de Connaissances Sécurisée"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"description"</span>: <span className={styles.string}>"Conception d\'outils de suivi de progression en temps réel et centralisation des flux d\'information. Déploiement d\'une infrastructure conteneurisée sécurisée."</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"stack"</span>: [',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Docker"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Nginx"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Node.js"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"MongoDB"</span>,',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Virtual Machines"</span>',
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]',
      '&nbsp;&nbsp;&nbsp;&nbsp;&#125;',
      '&nbsp;&nbsp;]',
      '&#125;'
    ]
  },
  'tech_stack.md': {
    language: 'Markdown',
    code: [
      '<span className={styles.keyword}><strong># Tech Stack &amp; Projects Integration </strong></span><span className={styles.keyword}> <br/>&nbsp;</span>',
      '',
      '<span className={styles.keyword}><strong>## Intelligence Artificielle &amp; Data</strong></span>',
      '- <span className={styles.keyword}>Python, Ollama &amp; Llama.cpp</span> : Orchestration de LLMs en local pour développer des plateformes IA (RAG) souveraines.',
      '- <span className={styles.keyword}>ChromaDB</span> : Stockage d\'embeddings vectoriels pour propulser la recherche sémantique et documentaire.',
      '- <span className={styles.keyword}>PostgreSQL &amp; MongoDB</span> : Modélisation, persistance de données structurées et gestion des flux en temps réel.',
      '- <span className={styles.keyword}>Workflows &amp; Pipelines IA</span> : Automatisation et orchestration de flux de données pour assistants intelligents.',
      '&nbsp;',
      '<span className={styles.keyword}><strong>## Développement Full Stack</strong></span>',
      '<span className={styles.comment}>&lt;!-- Ouvert à d\'autres langages --&gt;</span>',
      '- <span className={styles.keyword}>Next.js &amp; React.js</span> : Conception d\'interfaces utilisateur interactives, fluides et optimisées pour le référencement.',
      '- <span className={styles.keyword}>Node.js</span> : Construction d\'APIs backend robustes servant de passerelles entre les services.',
      '&nbsp;',
      '<span className={styles.keyword}><strong>## DevOps &amp; Infrastructure</strong></span>',
      '- <span className={styles.keyword}>Docker</span> : Conteneurisation des microservices pour garantir des environnements de dev et prod identiques.',
      '- <span className={styles.keyword}>Nginx &amp; VMs</span> : Déploiement et sécurisation de serveurs reverse-proxy sur des infrastructures Cloud.',
      '- <span className={styles.keyword}>Unreal Engine &amp; Blueprints</span> : Conception de mécaniques de jeu et de simulations 3D interactives.'
    ]
  },
  'unreal_engine_game.cpp': {
    language: 'C++',
    code: [
      '<span className={styles.keyword}>#include</span> <span className={styles.string}">&lt;iostream&gt;</span>',
      '',
      '<span className={styles.comment}>// Passionné par Unreal Engine, le kick-boxing et les technologies modulaires.</span>',
      '<span className={styles.keyword}>void</span> <span className={styles.function}>believe</span>() &#123;',
      '&nbsp;&nbsp;std::string philosophy =',
      '&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Un logiciel dépasse le simple rôle d\'outil lorsque la complexité technique "</span>',
      '&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"s\'efface pour laisser place à une expérience fluide et profondément humaine."</span>;',
      '&#125;'
    ]
  },
  'passions.md': {
    language: 'Markdown',
    code: [
      '<span className={styles.keyword}><strong># Passions &amp; Hobbies</strong></span>',
      '',
      '<span className={styles.keyword}><strong>## Développement &amp; Création</strong></span>',
      '- <span className={styles.keyword}>Code &amp; Architecture</span> : Toujours à la recherche de solutions innovantes et de projets SaaS autonomes.',
      '- <span className={styles.keyword}>Unreal Engine &amp; Blueprints</span> : Conception de mécaniques de jeu et d\'environnements interactifs.',
      '',
      '<span className={styles.keyword}><strong>## Manga de prédilection</strong></span>',
      '- <span className={styles.keyword}>Berserk</span> : Chef-d\'œuvre absolu pour sa narration, y a pas débat dessus.',
      '',
      '<span className={styles.keyword}><strong>## Activités Physiques</strong></span>',
      '- <span className={styles.keyword}>Sports de combat</span> : Pratique régulière (Kick-boxing) alliant rigueur, discipline et force mentale.'
    ]
  },
  'contact_me.css': {
    language: 'CSS',
    code: [
      '<span className={styles.tag}>.contact</span> &#123;',
      '&nbsp;&nbsp;<span className={styles.property}>Email</span>: <span className={styles.string}>"xlutirax@gmail.com"</span>;',
      '&nbsp;&nbsp;<span className={styles.property}>CV</span>: <span className={styles.string}">"Available on request"</span>;',
      '&nbsp;&nbsp;<span className={styles.property}>availability</span>: <span className={styles.string}">" Open to SaaS projects && Freelance && Recrutement "</span>;',
      '&#125;'
    ]
  }
};

export function Vscode() {
  const [activeFile, setActiveFile] = useState('Cesi_Engineering.tsx');
  const [aiMessage, setAiMessage] = useState('Salut ! Je suis Cascade, l\'assistant IA de Mehdi. Posez-moi une question sur ses compétences ou demandez-moi son CV.');
  const [isTyping, setIsTyping] = useState(false);

  const codeContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!codeContainerRef.current) return;

      gsap.fromTo(
        codeContainerRef.current.children,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.02,
          duration: 0.4,
          ease: 'power2.out',
        }
      );
    },
    { dependencies: [activeFile], scope: codeContainerRef }
  );

  const handleFileClick = (fileName: string) => {
    setActiveFile(fileName);
  };

  const handleAiQuestion = (question: string) => {
    setIsTyping(true);
    setAiMessage('');

    const responses: Record<string, string> = {
      'specialite': 'Mehdi excelle dans l\'intégration d\'IA locales (RAG, Llama.cpp), le développement Full Stack (Next.js, Node.js) et le déploiement d\'infrastructures conteneurisées (DevOps/Docker).',
      'disponible': 'Oui ! Mehdi est disponible pour des projets SaaS autonomes et des architectures Full Stack.',
      'cv': 'Le CV de Mehdi est disponible sur demande. Contactez-le à belkacem.mehdi@cesi.fr'
    };

    setTimeout(() => {
      setAiMessage(responses[question] || 'Je suis là pour vous aider !');
      setIsTyping(false);
    }, 1500);
  };

  const currentContent = fileContents[activeFile] || fileContents['Cesi_Engineering.tsx'];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.menuItem}>File</span>
          <span className={styles.menuItem}>Edit</span>
          <span className={styles.menuItem}>Selection</span>
          <span className={styles.menuItem}>View</span>
          <span className={styles.menuItem}>Go</span>
          <span className={styles.menuItem}>Run</span>
          <span className={styles.menuItem}>Terminal</span>
          <span className={styles.menuItem}>Help</span>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.title}>portfolio - Visual Studio Code</span>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>Explorer</div>
          <div className={styles.fileTree}>
            <div className={styles.folder}>📁 parcours_et_diplomes</div>
            <div className={styles.fileIndent}>
              <div
                className={`${styles.file} ${activeFile === 'Cesi_Engineering.tsx' ? styles.activeFile : ''}`}
                onClick={() => handleFileClick('Cesi_Engineering.tsx')}
              >
                📄 Cesi_Engineering.tsx
              </div>
              <div
                className={`${styles.file} ${activeFile === 'experiences.json' ? styles.activeFile : ''}`}
                onClick={() => handleFileClick('experiences.json')}
              >
                📄 experiences.json
              </div>
            </div>
            <div className={styles.folder}>📁 technologies_ia</div>
            <div className={styles.fileIndent}>
              <div
                className={`${styles.file} ${activeFile === 'tech_stack.md' ? styles.activeFile : ''}`}
                onClick={() => handleFileClick('tech_stack.md')}
              >
                📄 tech_stack.md
              </div>
            </div>
            <div className={styles.folder}>📁 hobbys_et_philosophie</div>
            <div className={styles.fileIndent}>
              <div
                className={`${styles.file} ${activeFile === 'unreal_engine_game.cpp' ? styles.activeFile : ''}`}
                onClick={() => handleFileClick('unreal_engine_game.cpp')}
              >
                📄 unreal_engine_game.cpp
              </div>
              <div
                className={`${styles.file} ${activeFile === 'passions.md' ? styles.activeFile : ''}`}
                onClick={() => handleFileClick('passions.md')}
              >
                📄 passions.md
              </div>
            </div>
            <div
              className={`${styles.file} ${activeFile === 'contact_me.css' ? styles.activeFile : ''}`}
              onClick={() => handleFileClick('contact_me.css')}
            >
              📄 contact_me.css
            </div>
          </div>
        </div>

        <div className={styles.codeArea}>
          <div className={styles.tabs}>
            <div className={`${styles.tab} ${styles.active}`}>{activeFile}</div>
          </div>
          <div className={styles.editor}>
            <div className={styles.lineNumbers}>
              {currentContent.code.map((_, index) => (
                <span key={index}>{index + 1}</span>
              ))}
            </div>
            <div className={styles.code} ref={codeContainerRef}>
              {currentContent.code.map((line, index) => (
                <div key={index} className={styles.codeLine} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.aiSidebar}>
          <div className={styles.aiHeader}>AI Assistant (Cascade)</div>
          <div className={styles.aiContent}>
            <div className={styles.aiMessage}>
              <div className={styles.aiLabel}>Cascade</div>
              <div className={styles.aiText}>
                {isTyping ? (
                  <span className={styles.typing}>Écriture en cours...</span>
                ) : (
                  aiMessage
                )}
              </div>
            </div>
          </div>
          <div className={styles.aiButtons}>
            <button
              className={styles.aiButton}
              onClick={() => handleAiQuestion('specialite')}
            >
              <ChatBubbleBottomCenterIcon className={styles.aiButtonIcon} /> Quelle est sa spécialité ?
            </button>
            <button
              className={styles.aiButton}
              onClick={() => handleAiQuestion('disponible')}
            >
              <ChatBubbleBottomCenterIcon className={styles.aiButtonIcon} /> Disponible pour projet ?
            </button>
            <button
              className={styles.aiButton}
              onClick={() => handleAiQuestion('cv')}
            >
              <PaperClipIcon className={styles.aiButtonIcon} /> Télécharger CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
