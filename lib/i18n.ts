import resumeMessages from '@/messages/en/resume.json';
import aboutMessages from '@/messages/en/about.json';
import heroMessages from '@/messages/en/hero.json';

export const useResumeTranslations = () => resumeMessages;
export const useAboutTranslations = () => aboutMessages;
export const useHeroTranslations = () => heroMessages;

export type ResumeMessages = typeof resumeMessages;
export type AboutMessages = typeof aboutMessages;
export type HeroMessages = typeof heroMessages;
