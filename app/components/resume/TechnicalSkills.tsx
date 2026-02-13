import { useResumeTranslations } from '@/lib/i18n';

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
        <div className="bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h4 className="text-xs font-bold tracking-wider text-zinc-600 dark:text-zinc-400 mb-4 uppercase">
            {t.skills.coreSkills.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-md text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile Skills */}
        <div className="bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h4 className="text-xs font-bold tracking-wider text-zinc-600 dark:text-zinc-400 mb-4 uppercase">
            {t.skills.mobileSkills.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {mobileSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-zinc-700 dark:bg-zinc-300 text-white dark:text-black rounded-md text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h4 className="text-xs font-bold tracking-wider text-zinc-600 dark:text-zinc-400 mb-4 uppercase">
            {t.skills.additionalSkills.title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-md text-xs font-medium"
              >
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
