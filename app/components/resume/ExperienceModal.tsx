import Image from 'next/image';
import { useResumeTranslations } from '@/lib/i18n';
import { Experience } from './types';
import styles from '../styles/shared.module.css';

interface ExperienceModalProps {
  experience: Experience;
  onClose: () => void;
}

const ExperienceModal = ({ experience, onClose }: ExperienceModalProps) => {
  const t = useResumeTranslations();

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.experienceLogoLarge}>
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={64}
              height={64}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {experience.title}
            </h3>
            <p className="text-xl font-semibold text-zinc-400">
              {experience.company}
            </p>
            <p className="text-sm text-zinc-600 mt-1">
              {experience.period}
            </p>
          </div>
          <button onClick={onClose} className={styles.modalCloseButton}>
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
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {t.modal.overview}
                </h4>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  {experience.detailedInfo.description}
                </p>
              </div>

              {/* Image (if available) */}
              {experience.detailedInfo.image && (
                <div className="mb-8 rounded-xl overflow-hidden border border-white/[0.08]">
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
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {t.modal.technologies}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.detailedInfo.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={styles.skillTagSecondary}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {t.modal.achievements}
                </h4>
                <ul className="space-y-3">
                  {experience.detailedInfo.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="text-zinc-400 leading-relaxed flex"
                    >
                      <span className="mr-3 text-accent font-bold">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* All Highlights */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-3">
              {t.modal.responsibilities}
            </h4>
            <ul className="space-y-3">
              {experience.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="text-zinc-400 leading-relaxed flex"
                >
                  <span className="mr-3 text-foreground font-bold">•</span>
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
