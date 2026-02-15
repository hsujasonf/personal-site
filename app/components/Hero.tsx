'use client';

import styles from './styles/shared.module.css';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`text-6xl md:text-8xl font-bold text-black dark:text-white mb-6 animate-fade-in ${styles.headerWithOutline}`}>
          Jason Hsu
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
          Welcome to my personal space on the web
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#about" className={styles.buttonPrimary}>
            Learn More
          </a>
          <a href="#resume" className={styles.buttonSecondary}>
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
