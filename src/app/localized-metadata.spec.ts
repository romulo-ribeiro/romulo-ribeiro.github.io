import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { LocalizedMetadata } from './localized-metadata';

describe('LocalizedMetadata', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('writes localized metadata, canonical, and language alternates without duplicates', () => {
    const service = TestBed.inject(LocalizedMetadata);
    const document = TestBed.inject(DOCUMENT);

    service.apply('es');
    service.apply('es');

    expect(document.documentElement.lang).toBe('es');
    expect(document.title).toContain('Ingeniero de software sénior');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain('más de 6 años');
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe('https://romulo.is-a.dev/es');
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe('https://romulo.is-a.dev/images/social-card.jpg');
    expect(document.querySelector('meta[property="og:image:alt"]')?.getAttribute('content')).toBe(
      'Romulo Barbosa Ribeiro, ingeniero de software sénior, en una estación de trabajo de ingeniería de software',
    );
    expect(document.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe('summary_large_image');
    expect(document.querySelector('meta[name="twitter:image"]')?.getAttribute('content')).toBe('https://romulo.is-a.dev/images/social-card.jpg');
    expect(document.querySelector('meta[name="twitter:image:alt"]')?.getAttribute('content')).toBe(
      'Romulo Barbosa Ribeiro, ingeniero de software sénior, en una estación de trabajo de ingeniería de software',
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe('https://romulo.is-a.dev/es');

    [
      'meta[property="og:image"]',
      'meta[property="og:image:alt"]',
      'meta[name="twitter:card"]',
      'meta[name="twitter:image"]',
      'meta[name="twitter:image:alt"]',
    ].forEach(selector => expect(document.querySelectorAll(selector)).toHaveLength(1));

    const alternates = [...document.querySelectorAll('link[data-portfolio-hreflang]')];
    expect(alternates).toHaveLength(4);
    expect(alternates.map(link => link.getAttribute('hreflang'))).toEqual(['en', 'es', 'pt', 'x-default']);
  });

  it('marks alternate links through the server-compatible attribute API', () => {
    const service = TestBed.inject(LocalizedMetadata);
    const document = TestBed.inject(DOCUMENT);
    const createElement = document.createElement.bind(document);

    vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
      const element = createElement(tagName);
      if (tagName === 'link') Object.defineProperty(element, 'dataset', { value: undefined });
      return element;
    });

    expect(() => service.apply('pt')).not.toThrow();
  });
});
