import { useResumeTranslations } from '@/lib/i18n';
import styles from '../styles/shared.module.css';

const TechnicalSkills = () => {
  const t = useResumeTranslations();
  const coreSkills = t.skills.coreSkills.items;
  const mobileSkills = t.skills.mobileSkills.items;
  const additionalSkills = t.skills.additionalSkills.items;

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
        {t.skills.title}
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Core Skills */}
        <div className={`${styles.card} p-6`}>
          <h4 className="text-xs font-bold tracking-wider text-zinc-600 dark:text-zinc-400 mb-4 uppercase">
            {t.skills.coreSkills.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill, index) => (
              <span key={index} className={styles.skillTagPrimary}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile Skills */}
        <div className={`${styles.card} p-6`}>
          <h4 className="text-xs font-bold tracking-wider text-zinc-600 dark:text-zinc-400 mb-4 uppercase">
            {t.skills.mobileSkills.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {mobileSkills.map((skill, index) => (
              <span key={index} className={styles.skillTagSecondary}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className={`${styles.card} p-6`}>
          <h4 className="text-xs font-bold tracking-wider text-zinc-600 dark:text-zinc-400 mb-4 uppercase">
            {t.skills.additionalSkills.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill, index) => (
              <span key={index} className={styles.skillTagOutline}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
