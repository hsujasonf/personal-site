import { useResumeTranslations } from '@/lib/i18n';

const ProfessionalSummary = () => {
  const t = useResumeTranslations();

  return (
    <div className="mb-12 p-8 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black rounded-xl border-2 border-zinc-200 dark:border-zinc-800 shadow-sm">
      <h3 className="text-2xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">💼</span>
        {t.summary.title}
      </h3>
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        {t.summary.content}
      </p>
    </div>
  );
};

export default ProfessionalSummary;
