'use client';

import styles from './styles/shared.module.css';
import { useHeroTranslations } from '@/lib/i18n';

const Hero = () => {
  const t = useHeroTranslations();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 blur-[100px] opacity-30 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full scale-75" />
          <h1
            className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 mb-6 animate-fade-in ${styles.headerWithOutline}`}
            style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 6s ease infinite, fade-in 0.3s ease-out' }}
          >
            {t.name}
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-zinc-500 mb-8">
          {t.tagline}
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#about" className={styles.buttonPrimary}>
            {t.buttons.learnMore}
          </a>
          <a href="#resume" className={styles.buttonSecondary}>
            {t.buttons.viewResume}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
