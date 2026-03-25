import { Component, input } from '@angular/core';

import { AboutContent } from '../../portfolio.models';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss'
})
export class AboutSectionComponent {
  readonly content = input.required<AboutContent>();
}
