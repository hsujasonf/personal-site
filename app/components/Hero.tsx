'use client';

import styles from './styles/shared.module.css';
import { useHeroTranslations } from '@/lib/i18n';
import { useAboutTranslations } from '@/lib/i18n';

const Hero = () => {
  const t = useHeroTranslations();
  const about = useAboutTranslations();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col px-6 py-8"
    >
      <h1
        className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 animate-fade-in ${styles.headerWithOutline}`}
      >
        {t.name}
      </h1>

      <div className="flex-1 flex items-center pb-16">
        <div className="max-w-md space-y-5 text-base text-zinc-400">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
