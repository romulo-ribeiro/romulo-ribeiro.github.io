import { Language, ProjectFilter } from '../portfolio-data';

export interface NavigationItem {
  href: `#${string}`;
  label: string;
}

interface LabeledText {
  label: string;
  text: string;
}

export interface Translation {
  languageLabel: string;
  navLabel: string;
  skipToContent: string;
  languageNames: Record<Language, string>;
  nav: NavigationItem[];
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    text: string;
    primaryAction: string;
    secondaryAction: string;
    profile: string;
    profileSummary: string;
    profilePhoto: string;
    stats: { value: string; label: string }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string; tags: string[] }[];
  };
  about: {
    eyebrow: string;
    title: string;
    bio: string;
    contextPhoto: string;
    portraitPhoto: string;
    method: string;
    quote: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    overview: string;
    viewLabel: string;
    filterLabel: string;
    filters: Record<ProjectFilter, string>;
    views: { projects: string; experience: string };
    projectType: string;
    experienceType: string;
    projectResults: string;
    experienceResults: string;
    missingImage: string;
    confidentiality: string;
    outcomeLabel: string;
  };
  caseStudy: {
    eyebrow: string;
    title: string;
    lead: string;
    imageAlt: string;
    roleLabel: string;
    validationLabel: string;
    facts: LabeledText[];
    flow: { label: string; detail: string }[];
    technical: LabeledText[];
    architectureLabel: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    principles: { title: string; description: string }[];
  };
  contact: { eyebrow: string; title: string; text: string };
}
