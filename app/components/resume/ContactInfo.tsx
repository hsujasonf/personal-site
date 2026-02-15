import { useResumeTranslations } from '@/lib/i18n';
import styles from '../styles/shared.module.css';

const ContactInfo = () => {
  const t = useResumeTranslations();

  return (
    <div className="mb-12">
      <h2 className={`text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 ${styles.headerWithOutline}`}>
        {t.title}
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        <a href={`mailto:${t.contact.email}`} className={styles.badgeClickable}>
          <span>📧</span>
          {t.contact.email}
        </a>
        <div className={styles.badgeStatic}>
          <span>📱</span>
          {t.contact.phone}
        </div>
        <div className={styles.badgeStatic}>
          <span>📍</span>
          {t.contact.location}
        </div>
        <a
          href="https://linkedin.com/in/jasonhsu90"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.badgeClickable}
        >
          <span>💼</span>
          {t.contact.linkedin}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
