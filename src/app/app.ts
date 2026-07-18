import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import portfolioDataSource from './data/projects.json';
import { isLanguage, LanguagePreference } from './language-preference';
import { LocalizedMetadata } from './localized-metadata';
import { contactLinks, languages, marqueeRows, projectFilters } from './content';
import { translations } from './i18n';
import { Language, PortfolioData, ProjectFilter, ProjectView } from './portfolio-data';

@Component({
  selector: 'app-portfolio-page',
  imports: [RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, OnDestroy {
  private readonly portfolioData = portfolioDataSource as unknown as PortfolioData;
  private readonly route = inject(ActivatedRoute);
  private readonly preference = inject(LanguagePreference);
  private readonly metadata = inject(LocalizedMetadata);
  private revealObserver?: IntersectionObserver;
  private readonly routeLanguage = this.route.snapshot.data['language'];

  protected readonly language = signal<Language>(
    isLanguage(this.routeLanguage) ? this.routeLanguage : 'en',
  );
  protected readonly copy = computed(() => translations[this.language()]);
  protected readonly languages = languages;
  protected readonly selectedProjectFilter = signal<ProjectFilter>('all');
  protected readonly projectView = signal<ProjectView>('projects');
  protected readonly projectFilters = projectFilters;
  protected readonly caseStudySlots = this.portfolioData.caseStudySlots;
  protected readonly filteredWorkCards = computed(() => {
    const filter = this.selectedProjectFilter();
    const view = this.projectView();

    const source =
      view === 'projects' ? this.portfolioData.projects : this.portfolioData.experienceAreas;

    return source
      .filter((project) => project.status === 'published')
      .filter((project) => filter === 'all' || project.domains.includes(filter))
      .map((project) => ({
        project,
        content: project.translations[this.language()],
        imageSrcset: project.image ? this.projectImageSrcset(project.image) : undefined,
      }));
  });

  protected readonly marqueeRows = marqueeRows;
  protected readonly contactLinks = contactLinks;

  constructor() {
    afterNextRender(() => {
      this.preference.save(this.language());
      this.revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
          });
        },
        { threshold: 0 },
      );
      document
        .querySelectorAll('.section, .section--contact')
        .forEach((element) => this.revealObserver?.observe(element));
    });
  }

  private projectImageSrcset(image: string): string {
    const base = image.endsWith('.webp') ? image.slice(0, -5) : image;
    return `${base}-600.webp 600w, ${base}-900.webp 900w, ${image} 1200w`;
  }

  protected setProjectFilter(filter: ProjectFilter): void {
    this.selectedProjectFilter.set(filter);
  }

  protected setProjectView(view: ProjectView): void {
    this.projectView.set(view);
  }

  ngOnInit(): void {
    this.metadata.apply(this.language());
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
