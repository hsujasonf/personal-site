import { useResumeTranslations } from '@/lib/i18n';

const ProfessionalSummary = () => {
  const t = useResumeTranslations();

  return (
    <div className="mb-12">
      <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
        {t.summary.title}
      </h3>
      <p className="text-zinc-400 leading-relaxed text-sm">
        {t.summary.content}
      </p>
    </div>
  );
};

export default ProfessionalSummary;
