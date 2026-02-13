import Image from 'next/image';
import { useResumeTranslations } from '@/lib/i18n';
import { Experience } from './types';

interface ExperienceModalProps {
  experience: Experience;
  onClose: () => void;
}

const ExperienceModal = ({ experience, onClose }: ExperienceModalProps) => {
  const t = useResumeTranslations();

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-black border-2 border-black dark:border-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white dark:bg-black border-b-2 border-zinc-200 dark:border-zinc-800 p-6 flex items-start gap-4 z-10">
          <div className="flex-shrink-0 w-20 h-20 bg-white dark:bg-zinc-900 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-3 flex items-center justify-center">
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={64}
              height={64}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
              {experience.title}
            </h3>
            <p className="text-xl font-semibold text-zinc-700 dark:text-zinc-300">
              {experience.company}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
              {experience.period}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-teal-400 flex items-center justify-center transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          {experience.detailedInfo && (
            <>
              {/* Overview */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-black dark:text-white mb-3">
                  {t.modal.overview}
                </h4>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
                  {experience.detailedInfo.description}
                </p>
              </div>

              {/* Image (if available) */}
              {experience.detailedInfo.image && (
                <div className="mb-8 rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={experience.detailedInfo.image}
                    alt={`${experience.company} app`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-black dark:text-white mb-3">
                  {t.modal.technologies}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.detailedInfo.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-black dark:text-white mb-3">
                  {t.modal.achievements}
                </h4>
                <ul className="space-y-3">
                  {experience.detailedInfo.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-zinc-700 dark:text-zinc-300 leading-relaxed flex"
                    >
                      <span className="mr-3 text-black dark:text-white font-bold">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* All Highlights */}
          <div>
            <h4 className="text-lg font-bold text-black dark:text-white mb-3">
              {t.modal.responsibilities}
            </h4>
            <ul className="space-y-3">
              {experience.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="text-zinc-700 dark:text-zinc-300 leading-relaxed flex"
                >
                  <span className="mr-3 text-black dark:text-white font-bold">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
