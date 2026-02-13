import Image from 'next/image';
import { Experience } from './types';

interface ExperienceCardProps {
  experience: Experience;
  onClick: () => void;
}

const ExperienceCard = ({ experience, onClick }: ExperienceCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-black dark:hover:border-teal-400 transition-all duration-300 hover:shadow-lg cursor-pointer"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-zinc-900 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-2 flex items-center justify-center">
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
        <div className="text-zinc-400 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-teal-400 transition-colors">
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
