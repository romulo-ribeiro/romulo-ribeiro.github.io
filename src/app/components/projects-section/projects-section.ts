import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

import { SectionContent, WorkCard } from '../../portfolio.models';
import { HugeIconComponent } from '../../shared/huge-icon/huge-icon';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ButtonModule, CarouselModule, HugeIconComponent],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss'
})
export class ProjectsSectionComponent {
  readonly content = input.required<SectionContent>();
  readonly workCards = input.required<readonly WorkCard[]>();
}
