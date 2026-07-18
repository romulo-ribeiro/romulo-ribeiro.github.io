import { translations } from './index';

describe('translations', () => {
  it('keeps navigation destinations explicit and consistent across locales', () => {
    const expectedHrefs = ['#about', '#capabilities', '#projects', '#skills', '#contact'];

    expect(translations.en.nav.map((item) => item.href)).toEqual(expectedHrefs);
    expect(translations.es.nav.map((item) => item.href)).toEqual(expectedHrefs);
    expect(translations.pt.nav.map((item) => item.href)).toEqual(expectedHrefs);
  });

  it('preserves localized navigation and language labels', () => {
    expect(translations.en.nav.map((item) => item.label)).toEqual([
      'About',
      'Capabilities',
      'Experience',
      'Skills',
      'Contact',
    ]);
    expect(translations.es.nav.map((item) => item.label)).toEqual([
      'Sobre mí',
      'Capacidades',
      'Experiencia',
      'Habilidades',
      'Contacto',
    ]);
    expect(translations.pt.nav.map((item) => item.label)).toEqual([
      'Sobre',
      'Capacidades',
      'Experiência',
      'Habilidades',
      'Contato',
    ]);
    expect(translations.es.languageNames).toEqual({ en: 'Inglés', es: 'Español', pt: 'Portugués' });
  });
});
