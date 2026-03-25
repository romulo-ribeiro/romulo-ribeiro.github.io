import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  computed,
  effect,
  inject,
  signal
} from '@angular/core';
import {
  AiBrowserIcon,
  Atom01Icon,
  Briefcase01Icon,
  CodeIcon,
  GithubIcon,
  Linkedin01Icon,
  Moon02Icon,
  Sun03Icon
} from '@hugeicons/core-free-icons';

import { AboutSectionComponent } from './components/about-section/about-section';
import { ContactSectionComponent } from './components/contact-section/contact-section';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { ProjectsSectionComponent } from './components/projects-section/projects-section';
import { LANGUAGE_OPTIONS, PORTFOLIO_TRANSLATIONS } from './portfolio.translations';
import { SiteHeaderComponent } from './components/site-header/site-header';
import { SkillsSectionComponent } from './components/skills-section/skills-section';
import {
  AboutContent,
  ContactLink,
  ContactContent,
  HeaderContent,
  HeroContent,
  LanguageOption,
  NavItem,
  PortfolioLanguage,
  Principle,
  ProjectSlide,
  SectionId,
  SectionContent,
  StatItem,
  WorkCard
} from './portfolio.models';

const PROJECT_MEDIA = [
  {
    slides: [
      { src: '/projects/process-software.svg', alt: 'Process software overview' },
      { src: '/projects/process-software-flow.svg', alt: 'Process flow detail' },
      { src: '/projects/process-software-metrics.svg', alt: 'Process metrics view' }
    ],
    href: '#contact'
  },
  {
    slides: [
      { src: '/projects/internal-platforms.svg', alt: 'Internal platform overview' },
      { src: '/projects/internal-platforms-table.svg', alt: 'Internal platform table view' },
      { src: '/projects/internal-platforms-insights.svg', alt: 'Internal platform insights view' }
    ],
    href: '#contact'
  },
  {
    slides: [
      { src: '/projects/cross-disciplinary.svg', alt: 'Cross-disciplinary overview' },
      { src: '/projects/cross-disciplinary-bridge.svg', alt: 'Systems bridge view' },
      { src: '/projects/cross-disciplinary-map.svg', alt: 'Delivery map view' }
    ],
    href: '#contact'
  }
] as const;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly themeStorageKey = 'personal-portfolio-theme';
  private readonly languageStorageKey = 'personal-portfolio-language';
  private languageAnimationTimeout: ReturnType<typeof setTimeout> | null = null;
  private languageAnimationFrame: number | null = null;
  private sectionObserver: IntersectionObserver | null = null;

  protected readonly activeSection = signal<SectionId>('top');
  protected readonly isDarkMode = signal(this.getInitialDarkMode());
  protected readonly isLanguageAnimating = signal(false);
  protected readonly language = signal<PortfolioLanguage>(this.getInitialLanguage());
  protected readonly languageOptions: readonly LanguageOption[] = LANGUAGE_OPTIONS;
  protected readonly content = computed(() => PORTFOLIO_TRANSLATIONS[this.language()]);
  protected readonly headerContent = computed<HeaderContent>(() => this.content().header);
  protected readonly heroContent = computed<HeroContent>(() => this.content().hero);
  protected readonly aboutContent = computed<AboutContent>(() => this.content().about);
  protected readonly projectsContent = computed<SectionContent>(() => this.content().projects);
  protected readonly skillsContent = computed<SectionContent>(() => this.content().skills);
  protected readonly contactContent = computed<ContactContent>(() => this.content().contact);
  protected readonly navItems = computed<readonly NavItem[]>(() => [
    { label: this.content().nav[0], href: '#about' },
    { label: this.content().nav[1], href: '#projects' },
    { label: this.content().nav[2], href: '#skills' },
    { label: this.content().nav[3], href: '#contact' }
  ]);
  protected readonly stats = computed<readonly StatItem[]>(() => [
    {
      icon: Atom01Icon,
      value: this.content().hero.stats[0].value,
      label: this.content().hero.stats[0].label
    },
    {
      icon: CodeIcon,
      value: this.content().hero.stats[1].value,
      label: this.content().hero.stats[1].label
    },
    {
      icon: AiBrowserIcon,
      value: this.content().hero.stats[2].value,
      label: this.content().hero.stats[2].label
    }
  ]);
  protected readonly workCards = computed<readonly WorkCard[]>(() => [
    {
      icon: Atom01Icon,
      title: this.content().projects.cards[0].title,
      summary: this.content().projects.cards[0].summary,
      outcome: this.content().projects.cards[0].outcome,
      tags: [...this.content().projects.cards[0].tags],
      href: PROJECT_MEDIA[0].href,
      linkLabel: this.content().projects.cards[0].linkLabel,
      slides: this.projectSlidesFor(0)
    },
    {
      icon: Briefcase01Icon,
      title: this.content().projects.cards[1].title,
      summary: this.content().projects.cards[1].summary,
      outcome: this.content().projects.cards[1].outcome,
      tags: [...this.content().projects.cards[1].tags],
      href: PROJECT_MEDIA[1].href,
      linkLabel: this.content().projects.cards[1].linkLabel,
      slides: this.projectSlidesFor(1)
    },
    {
      icon: CodeIcon,
      title: this.content().projects.cards[2].title,
      summary: this.content().projects.cards[2].summary,
      outcome: this.content().projects.cards[2].outcome,
      tags: [...this.content().projects.cards[2].tags],
      href: PROJECT_MEDIA[2].href,
      linkLabel: this.content().projects.cards[2].linkLabel,
      slides: this.projectSlidesFor(2)
    }
  ]);
  protected readonly stack = computed<readonly string[]>(() => [...this.content().skills.stack]);
  protected readonly principles = computed<readonly Principle[]>(() => [
    {
      title: this.content().skills.principles[0].title,
      description: this.content().skills.principles[0].description
    },
    {
      title: this.content().skills.principles[1].title,
      description: this.content().skills.principles[1].description
    },
    {
      title: this.content().skills.principles[2].title,
      description: this.content().skills.principles[2].description
    }
  ]);
  protected readonly contactLinks = computed<readonly ContactLink[]>(() => [
    {
      icon: GithubIcon,
      label: this.content().contact.links[0].label,
      href: 'https://github.com/romulo-ribeiro'
    },
    {
      icon: Linkedin01Icon,
      label: this.content().contact.links[1].label,
      href: 'https://linkedin.com/in/your-handle'
    }
  ]);

  protected readonly themeIcons = {
    light: Sun03Icon,
    dark: Moon02Icon
  } as const;

  constructor() {
    effect(() => {
      const theme = this.isDarkMode() ? 'dark' : 'light';
      const root = this.document.documentElement;

      root.dataset['theme'] = theme;
      root.style.colorScheme = theme;
      this.writeStoredValue(this.themeStorageKey, theme);
    });

    effect(() => {
      this.writeStoredValue(this.languageStorageKey, this.language());
    });
  }

  ngAfterViewInit(): void {
    const sections = Array.from(
      this.document.querySelectorAll<HTMLElement>('.page-section[data-section]')
    );

    if (!sections.length) {
      return;
    }

    for (const section of sections) {
      section.dataset['visible'] = section.dataset['section'] === 'top' ? 'true' : 'false';
    }

    if (typeof IntersectionObserver !== 'undefined') {
      this.sectionObserver = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

          for (const entry of entries) {
            entry.target.setAttribute('data-visible', entry.isIntersecting ? 'true' : 'false');
          }

          const nextSection = visibleEntries[0]?.target.getAttribute('data-section');

          if (this.isSectionId(nextSection)) {
            this.activeSection.set(nextSection);
          }
        },
        {
          threshold: [0.18, 0.35, 0.6],
          rootMargin: '-12% 0px -18% 0px'
        }
      );

      for (const section of sections) {
        this.sectionObserver.observe(section);
      }
    }
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();

    if (this.languageAnimationTimeout !== null) {
      clearTimeout(this.languageAnimationTimeout);
    }

    if (
      this.languageAnimationFrame !== null
      && typeof cancelAnimationFrame === 'function'
    ) {
      cancelAnimationFrame(this.languageAnimationFrame);
    }

  }

  protected setDarkMode(isDarkMode: boolean): void {
    this.isDarkMode.set(isDarkMode);
  }

  protected setLanguage(language: PortfolioLanguage): void {
    if (language === this.language()) {
      return;
    }

    this.language.set(language);
    this.restartLanguageAnimation();
  }

  private getInitialDarkMode(): boolean {
    const storedTheme = this.readStoredValue(this.themeStorageKey);

    if (storedTheme === 'dark') {
      return true;
    }

    if (storedTheme === 'light') {
      return false;
    }

    return false;
  }

  private getInitialLanguage(): PortfolioLanguage {
    const storedLanguage = this.readStoredValue(this.languageStorageKey);

    if (storedLanguage && this.isSupportedLanguage(storedLanguage)) {
      return storedLanguage;
    }

    if (typeof navigator === 'undefined') {
      return 'en';
    }

    const browserLanguage = navigator.language.slice(0, 2).toLowerCase();

    return this.isSupportedLanguage(browserLanguage) ? browserLanguage : 'en';
  }

  private readStoredValue(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  private writeStoredValue(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Ignore storage failures and keep the in-memory state.
    }
  }

  private isSupportedLanguage(value: string): value is PortfolioLanguage {
    return value === 'en' || value === 'pt' || value === 'es' || value === 'fr' || value === 'da';
  }

  private isSectionId(value: string | null): value is SectionId {
    return value === 'top'
      || value === 'about'
      || value === 'projects'
      || value === 'skills'
      || value === 'contact';
  }

  private projectSlidesFor(index: number): ProjectSlide[] {
    return PROJECT_MEDIA[index].slides.map((slide) => ({
      src: slide.src,
      alt: slide.alt
    }));
  }

  private restartLanguageAnimation(): void {
    if (this.languageAnimationTimeout !== null) {
      clearTimeout(this.languageAnimationTimeout);
      this.languageAnimationTimeout = null;
    }

    if (
      this.languageAnimationFrame !== null
      && typeof cancelAnimationFrame === 'function'
    ) {
      cancelAnimationFrame(this.languageAnimationFrame);
      this.languageAnimationFrame = null;
    }

    this.isLanguageAnimating.set(false);

    const startAnimation = () => {
      this.isLanguageAnimating.set(true);
      this.languageAnimationTimeout = setTimeout(() => {
        this.isLanguageAnimating.set(false);
        this.languageAnimationTimeout = null;
      }, 260);
    };

    if (typeof requestAnimationFrame === 'function') {
      this.languageAnimationFrame = requestAnimationFrame(() => {
        this.languageAnimationFrame = null;
        startAnimation();
      });
    } else {
      startAnimation();
    }
  }
}
