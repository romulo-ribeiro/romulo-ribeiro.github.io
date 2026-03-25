import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component, computed, inject, input } from '@angular/core';

import { IconSvgObject } from '../../portfolio.models';

@Component({
  selector: 'app-huge-icon',
  standalone: true,
  templateUrl: './huge-icon.html',
  styleUrl: './huge-icon.scss'
})
export class HugeIconComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly icon = input.required<IconSvgObject>();
  readonly size = input(20);
  readonly title = input<string | null>(null);

  protected readonly svgMarkup = computed<SafeHtml>(() => {
    const title = this.title();
    const labelled = Boolean(title);
    const body = this.icon()
      .map(([element, attributes]) => {
        const serialized = Object.entries(attributes)
          .filter(([key]) => key !== 'key')
          .map(([key, value]) => `${key}="${String(value)}"`)
          .join(' ');

        return `<${element} ${serialized}></${element}>`;
      })
      .join('');

    const svg = [
      `<svg viewBox="0 0 24 24" fill="none" width="${this.size()}" height="${this.size()}"`,
      labelled ? 'role="img"' : 'aria-hidden="true"',
      'focusable="false"',
      'xmlns="http://www.w3.org/2000/svg">'
    ].join(' ');

    return this.sanitizer.bypassSecurityTrustHtml(
      `${svg}${title ? `<title>${title}</title>` : ''}${body}</svg>`
    );
  });
}
