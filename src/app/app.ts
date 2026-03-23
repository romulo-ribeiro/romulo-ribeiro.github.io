import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  protected readonly stats = [
    { value: 'Chemical Engineering', label: 'process, systems, and technical foundations' },
    { value: 'Software Engineering', label: 'frontend, backend, and product delivery' },
    { value: 'Angular 21', label: 'clean standalone SPA ready for deployment' }
  ];

  protected readonly workCards = [
    {
      title: 'Industrial and Process Tools',
      summary: 'Interfaces and internal tools that help translate technical workflows into software people can actually use.',
      outcome: 'Useful for calculators, operational dashboards, simulations, and workflow automation tied to engineering contexts.',
      tags: ['Domain modeling', 'Data-heavy UI', 'Applied engineering']
    },
    {
      title: 'Business Platforms',
      summary: 'Web applications focused on reporting, operations, and decision support with an emphasis on clarity and maintainability.',
      outcome: 'A good representation of software work where structure, reliability, and readable interfaces matter more than trends.',
      tags: ['Angular', 'API integration', 'Maintainable architecture']
    },
    {
      title: 'Cross-disciplinary Delivery',
      summary: 'Projects that benefit from both engineering analysis and software execution, from problem framing to production rollout.',
      outcome: 'This is where chemical engineering and software engineering reinforce each other instead of living in separate tracks.',
      tags: ['Systems thinking', 'Technical communication', 'End-to-end ownership']
    }
  ];

  protected readonly stack = [
    'Angular 21',
    'TypeScript',
    'SCSS',
    'C# / .NET',
    'APIs',
    'Data visualization',
    'Responsive layouts',
    'Accessibility',
    'GitHub Actions'
  ];

  protected readonly principles = [
    {
      title: 'Engineering first',
      description: 'I focus on understanding the process, constraints, and operating context before designing the implementation.'
    },
    {
      title: 'Clear software',
      description: 'I prefer interfaces and codebases that are direct, readable, and easy to evolve without unnecessary complexity.'
    },
    {
      title: 'Practical delivery',
      description: 'The goal is not novelty. The goal is solving real problems with software that teams can trust and keep shipping.'
    }
  ];

  protected readonly contactLinks = [
    { label: 'GitHub', href: 'https://github.com/romulo-ribeiro' }
  ];
}
