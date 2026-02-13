export interface Experience {
  id: string;
  title: string;
  company: string;
  logo: string;
  period: string;
  highlights: string[];
  detailedInfo?: {
    description: string;
    technologies: string[];
    achievements: string[];
    image?: string;
  };
}
