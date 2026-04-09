import { useResumeTranslations } from '@/lib/i18n';
import styles from '../styles/shared.module.css';

const ProfessionalSummary = () => {
  const t = useResumeTranslations();

  return (
    <div className={`mb-12 p-8 rounded-xl ${styles.card}`}>
      <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
        <span className="text-2xl">💼</span>
        {t.summary.title}
      </h3>
      <p className="text-zinc-400 leading-relaxed text-lg">
        {t.summary.content}
      </p>
    </div>
  );
};

export default ProfessionalSummary;
