'use client';

import { useAboutTranslations } from '@/lib/i18n';
import styles from './styles/shared.module.css';

const About = () => {
  const t = useAboutTranslations();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-8 ${styles.headerWithOutline}`}>
          {t.title}
        </h2>
        <div className="space-y-6 text-lg text-zinc-400">
          {t.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
