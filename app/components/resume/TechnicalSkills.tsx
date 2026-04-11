import { useResumeTranslations } from '@/lib/i18n';
import styles from '../styles/shared.module.css';

const TechnicalSkills = () => {
  const t = useResumeTranslations();
  const coreSkills = t.skills.coreSkills.items;
  const mobileSkills = t.skills.mobileSkills.items;
  const additionalSkills = t.skills.additionalSkills.items;

  return (
    <div className="space-y-4">
      <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">
        {t.skills.title}
      </h3>

      <div>
        <h4 className="text-[10px] text-zinc-500 mb-1.5 uppercase tracking-wider">
          {t.skills.coreSkills.title}
        </h4>
        <div className="flex flex-wrap gap-1">
          {coreSkills.map((skill, index) => (
            <span key={index} className={styles.skillTagPrimary}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-[10px] text-zinc-500 mb-1.5 uppercase tracking-wider">
          {t.skills.mobileSkills.title}
        </h4>
        <div className="flex flex-wrap gap-1">
          {mobileSkills.map((skill, index) => (
            <span key={index} className={styles.skillTagSecondary}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-[10px] text-zinc-500 mb-1.5 uppercase tracking-wider">
          {t.skills.additionalSkills.title}
        </h4>
        <div className="flex flex-wrap gap-1">
          {additionalSkills.map((skill, index) => (
            <span key={index} className={styles.skillTagOutline}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
