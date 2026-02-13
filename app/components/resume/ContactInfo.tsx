import { useResumeTranslations } from '@/lib/i18n';

const ContactInfo = () => {
  const t = useResumeTranslations();

  return (
    <div className="mb-12">
      <h2 
        className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6"
        style={{
          WebkitTextStroke: '1px rgb(45, 212, 191)',
          textStroke: '1px rgb(45, 212, 191)'
        }}
      >
        {t.title}
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        <a
          href={`mailto:${t.contact.email}`}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 hover:border-black dark:hover:border-teal-400 hover:text-black dark:hover:text-teal-400 transition-all"
        >
          <span>📧</span>
          {t.contact.email}
        </a>
        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-500 dark:text-zinc-500">
          <span>📱</span>
          {t.contact.phone}
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-500 dark:text-zinc-500">
          <span>📍</span>
          {t.contact.location}
        </div>
        <a
          href="https://linkedin.com/in/jasonhsu90"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 hover:border-black dark:hover:border-teal-400 hover:text-black dark:hover:text-teal-400 transition-all"
        >
          <span>💼</span>
          {t.contact.linkedin}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
