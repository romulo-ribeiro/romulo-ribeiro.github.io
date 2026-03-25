import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

import {
  IconSvgObject,
  LanguageOption,
  NavItem,
  PortfolioLanguage,
  SectionId
} from '../../portfolio.models';
import { HugeIconComponent } from '../../shared/huge-icon/huge-icon';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [FormsModule, SelectModule, HugeIconComponent],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss'
})
export class SiteHeaderComponent {
  readonly navItems = input.required<readonly NavItem[]>();
  readonly activeSection = input.required<SectionId>();
  readonly isDarkMode = input.required<boolean>();
  readonly themeIcon = input.required<IconSvgObject>();
  readonly themeToggleAriaLabel = input.required<string>();
  readonly currentLanguage = input.required<PortfolioLanguage>();
  readonly languageLabel = input.required<string>();
  readonly languageOptions = input.required<readonly LanguageOption[]>();
  readonly darkModeChange = output<boolean>();
  readonly languageChange = output<PortfolioLanguage>();

  protected selectLanguageOptions(): LanguageOption[] {
    return [...this.languageOptions()];
  }

  protected selectedLanguageOption(): LanguageOption | undefined {
    return this.languageOptions().find((option) => option.code === this.currentLanguage());
  }

  protected sectionFromHref(href: string): SectionId {
    const section = href.replace('#', '');

    return section === 'about'
      || section === 'projects'
      || section === 'skills'
      || section === 'contact'
      ? section
      : 'top';
  }
}
