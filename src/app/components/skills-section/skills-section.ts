import { Component, input } from '@angular/core';

import { Principle, SectionContent } from '../../portfolio.models';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss'
})
export class SkillsSectionComponent {
  readonly content = input.required<SectionContent>();
  readonly stack = input.required<readonly string[]>();
  readonly principles = input.required<readonly Principle[]>();
}
