import Image from 'next/image';
import { Experience } from './types';
import styles from '../styles/shared.module.css';

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

const ExperienceCard = ({ experience, onClick }: ExperienceCardProps) => {
  return (
    <div onClick={onClick} className={`group ${styles.cardHoverable} p-6`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={styles.experienceLogo}>
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={48}
            height={48}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-black dark:text-white mb-1">
            {experience.title}
          </h4>
          <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
            {experience.company}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
            {experience.period}
          </p>
        </div>
        <div className={styles.chevronIcon}>
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
