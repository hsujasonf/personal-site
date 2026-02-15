import resumeMessages from '@/messages/en/resume.json';
import aboutMessages from '@/messages/en/about.json';

export const useResumeTranslations = () => {
  return resumeMessages;
};

export const useAboutTranslations = () => {
  return aboutMessages;
};

export type ResumeMessages = typeof resumeMessages;
export type AboutMessages = typeof aboutMessages;
