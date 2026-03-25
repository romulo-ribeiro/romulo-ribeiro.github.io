import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { HeroContent, StatItem } from '../../portfolio.models';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSectionComponent {
  readonly content = input.required<HeroContent>();
  readonly stats = input.required<readonly StatItem[]>();
}
