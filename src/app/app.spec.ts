import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';
import { contactLinks } from './content';
import portfolioData from './data/projects.json';

const publishedProjectCount = portfolioData.projects.filter(
  (project) => project.status === 'published',
).length;
const publishedExperienceCount = portfolioData.experienceAreas.filter(
  (project) => project.status === 'published',
).length;

// Mock IntersectionObserver for test environment
let latestIntersectionObserverOptions: IntersectionObserverInit | undefined;

class MockIntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: readonly number[] = [];
  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    void callback;
    latestIntersectionObserverOptions = options;
  }
  observe(target: Element): void {
    void target;
  }
  unobserve(target: Element): void {
    void target;
  }
  disconnect(): void {
    return;
  }
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

describe('App', () => {
  beforeEach(async () => {
    latestIntersectionObserverOptions = undefined;
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero heading', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('industrial operations');
  });

  it('should have work cards', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.work-card')).toHaveLength(
      publishedProjectCount,
    );
  });

  it('reveals tall mobile sections as soon as they intersect the viewport', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(latestIntersectionObserverOptions?.threshold).toBe(0);
  });

  it('should have contact links', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const links = [
      ...fixture.nativeElement.querySelectorAll('.contact-links a'),
    ] as HTMLAnchorElement[];

    expect(links).toHaveLength(contactLinks.length);
    expect(links.map((link) => link.textContent?.trim())).toEqual(
      contactLinks.map((link) => link.label),
    );
  });

  it('should present capabilities and selected work', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#capabilities')).toBeTruthy();
    expect(compiled.querySelector('#projects')).toBeTruthy();
  });

  it('should render the featured case study', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#case-study')?.textContent).toContain(
      'Predictive maintenance for a continuous industrial process',
    );
  });
  it('shows projects by default and preserves all experience areas', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.work-card')).toHaveLength(
      publishedProjectCount,
    );

    const experienceButton = fixture.nativeElement.querySelectorAll(
      '.project-view button',
    )[1] as HTMLButtonElement;
    experienceButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.work-card')).toHaveLength(
      publishedExperienceCount,
    );
  });

  it('does not publish empty editorial placeholders', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).not.toContain('[Placeholder]');
    expect(compiled.textContent).not.toContain('[Marcador]');
    expect(compiled.querySelector('.section--evidence')).toBeNull();
    expect(compiled.querySelector('.section--notes')).toBeNull();
    expect(compiled.querySelector('.work-card__outcome')).toBeNull();
    expect(compiled.querySelector('.case-study__details')).toBeNull();
  });

  it('renders route-backed Spanish content', async () => {
    const harness = await RouterTestingHarness.create('/es');
    await harness.navigateByUrl('/es', App);
    expect(harness.routeNativeElement?.querySelector('.work-card h3')?.textContent).toContain(
      'Plataforma de inteligencia de video',
    );
  });

  it('links to every language route and marks the current route', async () => {
    const harness = await RouterTestingHarness.create('/pt');
    await harness.navigateByUrl('/pt', App);
    const links = [
      ...harness.routeNativeElement!.querySelectorAll('.language-switcher a'),
    ] as HTMLAnchorElement[];

    expect(links.map((link) => new URL(link.href).pathname)).toEqual(['/en', '/es', '/pt']);
    expect(
      links.find((link) => link.textContent?.trim() === 'PT')?.getAttribute('aria-current'),
    ).toBe('page');
  });

  it('persists a directly visited localized route', async () => {
    const harness = await RouterTestingHarness.create('/pt');
    await harness.navigateByUrl('/pt', App);
    expect(localStorage.getItem('portfolio.language')).toBe('pt');
  });

  it('renders uploaded media for all published projects', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.work-card__media--placeholder').length).toBe(0);
  });

  it('provides responsive sources for published project images', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const images = [
      ...fixture.nativeElement.querySelectorAll('.work-card__img'),
    ] as HTMLImageElement[];

    expect(images).toHaveLength(publishedProjectCount);
    expect(
      images.every((image) => image.srcset.includes('600w') && image.srcset.includes('900w')),
    ).toBe(true);
    expect(images.every((image) => image.getAttribute('loading') === 'lazy')).toBe(true);
  });

  it('labels primary navigation independently from the language switcher', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.site-nav')?.getAttribute('aria-label')).toBe(
      'Primary navigation',
    );
    expect(compiled.querySelector('.language-switcher')?.getAttribute('aria-label')).toBe(
      'Language',
    );
  });

  it('provides a localized skip link to the main content', async () => {
    const harness = await RouterTestingHarness.create('/es');
    await harness.navigateByUrl('/es', App);
    const compiled = harness.routeNativeElement!;
    const skipLink = compiled.querySelector('.page-shell a') as HTMLAnchorElement | null;

    expect(skipLink?.classList.contains('skip-link')).toBe(true);
    expect(skipLink?.getAttribute('href')).toBe('#top');
    expect(skipLink?.textContent?.trim()).toBe('Saltar al contenido principal');
    expect(compiled.querySelector('main')?.id).toBe('top');
  });

  it('hides only the duplicated marquee chips from assistive technology', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const rows = [...fixture.nativeElement.querySelectorAll('.marquee-row')] as HTMLElement[];

    expect(rows.length).toBeGreaterThan(0);
    rows.forEach((row) => {
      const accessibleChips = row.querySelectorAll('.chip:not([aria-hidden="true"])');
      const hiddenChips = row.querySelectorAll('.chip[aria-hidden="true"]');

      expect(accessibleChips.length).toBeGreaterThan(0);
      expect(hiddenChips.length).toBe(accessibleChips.length);
    });
  });
});
