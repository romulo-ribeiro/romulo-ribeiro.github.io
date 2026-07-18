export type Language = 'en' | 'es' | 'pt';
export type ProjectDomain = 'industrial' | 'enterprise' | 'logistics' | 'ai' | 'product';
export type ProjectFilter = 'all' | ProjectDomain;
export type ProjectView = 'projects' | 'experience';

export interface LocalizedExperienceArea {
  title: string;
  summary: string;
  contribution: string;
  caption: string;
  outcome: string | null;
}

export interface ExperienceArea {
  id: string;
  status: 'draft' | 'published';
  featured: boolean;
  primaryDomain: ProjectDomain;
  domains: ProjectDomain[];
  image: string | null;
  technologies: string[];
  translations: Record<Language, LocalizedExperienceArea>;
}

export interface PortfolioData {
  experienceAreas: ExperienceArea[];
  projects: ExperienceArea[];
  caseStudySlots: { role: string | null; validation: string | null };
  evidenceSlots: { id: string; status: 'draft' | 'published'; content: string | null }[];
  technicalNotes: { id: string; status: 'draft' | 'published'; content: string | null }[];
}

export interface LocalizedExperienceCard {
  project: ExperienceArea;
  content: LocalizedExperienceArea;
}
