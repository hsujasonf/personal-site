import { useResumeTranslations } from '@/lib/i18n';
import styles from '../styles/shared.module.css';

const ContactInfo = () => {
  const t = useResumeTranslations();

  return (
    <div className="space-y-3 text-sm">
      <a href={`mailto:${t.contact.email}`} className={`${styles.badgeClickable} text-xs`}>
        <span>📧</span>
        {t.contact.email}
      </a>
      <div className={`${styles.badgeStatic} text-xs`}>
        <span>📱</span>
        {t.contact.phone}
      </div>
      <div className={`${styles.badgeStatic} text-xs`}>
        <span>📍</span>
        {t.contact.location}
      </div>
      <a
        href="https://linkedin.com/in/jasonhsu90"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.badgeClickable} text-xs`}
      >
        <span>💼</span>
        {t.contact.linkedin}
      </a>
    </div>
  );
};

export default ContactInfo;
