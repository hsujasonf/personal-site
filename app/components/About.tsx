'use client';

import { useAboutTranslations } from '@/lib/i18n';
import styles from './styles/shared.module.css';

const About = () => {
  const t = useAboutTranslations();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-6xl font-bold text-black dark:text-white mb-8 ${styles.headerWithOutline}`}>
          {t.title}
        </h2>
        <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300">
          {t.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
