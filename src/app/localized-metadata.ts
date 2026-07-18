import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Language } from './portfolio-data';

const SITE_URL = 'https://romulo.is-a.dev';
const SOCIAL_IMAGE_URL = `${SITE_URL}/images/social-card.jpg`;
const documentMetadata: Record<
  Language,
  {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    imageAlt: string;
  }
> = {
  en: {
    title: 'Romulo Barbosa Ribeiro | Senior Software Engineer',
    description:
      'Senior software engineer with 6+ years of experience building enterprise, industrial, logistics, AI, and cloud-based applications.',
    ogTitle: 'Romulo Barbosa Ribeiro | Senior Software Engineer',
    ogDescription:
      'Enterprise, industrial, logistics, AI, and cloud software built with .NET, Angular, React, Next.js, Azure, and AWS.',
    imageAlt:
      'Romulo Barbosa Ribeiro, Senior Software Engineer, at a software engineering workstation',
  },
  es: {
    title: 'Romulo Barbosa Ribeiro | Ingeniero de software sénior',
    description:
      'Ingeniero de software con más de 6 años de experiencia en aplicaciones empresariales, industriales, logísticas, de IA y en la nube.',
    ogTitle: 'Romulo Barbosa Ribeiro | Ingeniero de software sénior',
    ogDescription:
      'Software empresarial, industrial, logístico, de IA y en la nube con .NET, Angular, React, Next.js, Azure y AWS.',
    imageAlt:
      'Romulo Barbosa Ribeiro, ingeniero de software sénior, en una estación de trabajo de ingeniería de software',
  },
  pt: {
    title: 'Romulo Barbosa Ribeiro | Engenheiro de software sênior',
    description:
      'Engenheiro de software com mais de 6 anos de experiência em aplicações empresariais, industriais, logísticas, de IA e em nuvem.',
    ogTitle: 'Romulo Barbosa Ribeiro | Engenheiro de software sênior',
    ogDescription:
      'Software empresarial, industrial, logístico, de IA e em nuvem com .NET, Angular, React, Next.js, Azure e AWS.',
    imageAlt:
      'Romulo Barbosa Ribeiro, engenheiro de software sênior, em uma estação de trabalho de engenharia de software',
  },
};

const alternates: { language: Language | 'x-default'; href: string }[] = [
  { language: 'en', href: `${SITE_URL}/en` },
  { language: 'es', href: `${SITE_URL}/es` },
  { language: 'pt', href: `${SITE_URL}/pt` },
  { language: 'x-default', href: `${SITE_URL}/` },
];

@Injectable({ providedIn: 'root' })
export class LocalizedMetadata {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  apply(language: Language): void {
    const values = documentMetadata[language];
    const localizedUrl = `${SITE_URL}/${language}`;

    this.document.documentElement.lang = language;
    this.title.setTitle(values.title);
    this.meta.updateTag({ name: 'description', content: values.description });
    this.meta.updateTag({ property: 'og:title', content: values.ogTitle }, "property='og:title'");
    this.meta.updateTag(
      { property: 'og:description', content: values.ogDescription },
      "property='og:description'",
    );
    this.meta.updateTag({ property: 'og:url', content: localizedUrl }, "property='og:url'");
    this.meta.updateTag({ property: 'og:image', content: SOCIAL_IMAGE_URL }, "property='og:image'");
    this.meta.updateTag(
      { property: 'og:image:type', content: 'image/jpeg' },
      "property='og:image:type'",
    );
    this.meta.updateTag(
      { property: 'og:image:width', content: '1200' },
      "property='og:image:width'",
    );
    this.meta.updateTag(
      { property: 'og:image:height', content: '630' },
      "property='og:image:height'",
    );
    this.meta.updateTag(
      { property: 'og:image:alt', content: values.imageAlt },
      "property='og:image:alt'",
    );
    this.meta.updateTag(
      { name: 'twitter:card', content: 'summary_large_image' },
      "name='twitter:card'",
    );
    this.meta.updateTag(
      { name: 'twitter:image', content: SOCIAL_IMAGE_URL },
      "name='twitter:image'",
    );
    this.meta.updateTag(
      { name: 'twitter:image:alt', content: values.imageAlt },
      "name='twitter:image:alt'",
    );
    this.upsertCanonical(localizedUrl);
    this.syncAlternates();
  }

  private upsertCanonical(href: string): void {
    const link =
      this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
      this.document.head.appendChild(this.document.createElement('link'));
    link.rel = 'canonical';
    link.href = href;
  }

  private syncAlternates(): void {
    this.document
      .querySelectorAll('link[data-portfolio-hreflang]')
      .forEach((link) => link.remove());
    alternates.forEach((alternate) => {
      const link = this.document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = alternate.language;
      link.href = alternate.href;
      link.setAttribute('data-portfolio-hreflang', '');
      this.document.head.appendChild(link);
    });
  }
}
