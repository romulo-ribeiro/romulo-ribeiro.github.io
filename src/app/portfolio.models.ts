export type IconSvgObject = readonly (readonly [
  string,
  Readonly<Record<string, string | number>>
])[];

export type PortfolioLanguage = 'en' | 'pt' | 'es' | 'fr' | 'da';
export type SectionId = 'top' | 'about' | 'projects' | 'skills' | 'contact';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  icon: IconSvgObject;
  value: string;
  label: string;
}

export interface WorkCard {
  icon: IconSvgObject;
  title: string;
  summary: string;
  outcome: string;
  tags: string[];
  href: string;
  linkLabel: string;
  slides: ProjectSlide[];
}

export interface ProjectSlide {
  src: string;
  alt: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface ContactLink {
  icon: IconSvgObject;
  label: string;
  href: string;
}

export interface HeaderContent {
  languageLabel: string;
  themeLight: string;
  themeDark: string;
  themeToggleAria: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  body: string;
  primaryAction: string;
  secondaryAction: string;
  panelLabel: string;
  panelNote: string;
}

export interface SectionContent {
  eyebrow: string;
  title: string;
}

export interface AboutContent extends SectionContent {
  body: string;
  quote: string;
}

export interface ContactContent extends SectionContent {
  body: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    note: string;
  };
}

export interface LanguageOption {
  code: PortfolioLanguage;
  label: string;
  shortLabel: string;
  flagSrc: string;
}
