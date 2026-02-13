'use client';

import { useState, useEffect } from 'react';
import { useResumeTranslations } from '@/lib/i18n';
import ExperienceCard from './ExperienceCard';
import ExperienceModal from './ExperienceModal';
import { Experience } from './types';

const WorkExperience = () => {
  const t = useResumeTranslations();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const experiences: Experience[] = t.experience.jobs;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (expandedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedIndex]);

  return (
    <>
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
          {t.experience.title}
          <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400 ml-3">
            {t.clickToExpand}
          </span>
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onClick={() => setExpandedIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Expanded Experience Modal */}
      {expandedIndex !== null && (
        <ExperienceModal
          experience={experiences[expandedIndex]}
          onClose={() => setExpandedIndex(null)}
        />
      )}
    </>
  );
};

export default WorkExperience;
