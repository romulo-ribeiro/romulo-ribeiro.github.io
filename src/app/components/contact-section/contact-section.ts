import { DOCUMENT } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

import { ContactContent, ContactLink } from '../../portfolio.models';
import { HugeIconComponent } from '../../shared/huge-icon/huge-icon';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, TextareaModule, HugeIconComponent],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss'
})
export class ContactSectionComponent {
  private readonly document = inject(DOCUMENT);

  readonly content = input.required<ContactContent>();
  readonly contactLinks = input.required<readonly ContactLink[]>();

  protected draftName = '';
  protected draftEmail = '';
  protected draftMessage = '';

  protected submitPlaceholderForm(): void {
    const subject = this.encodeMailtoValue(
      this.draftName.trim()
        ? `Portfolio inquiry from ${this.draftName.trim()}`
        : 'Portfolio inquiry'
    );

    const body = this.encodeMailtoValue(
      [
        this.draftName.trim() ? `Name: ${this.draftName.trim()}` : 'Name:',
        this.draftEmail.trim() ? `Email: ${this.draftEmail.trim()}` : 'Email:',
        '',
        this.draftMessage.trim() || 'Message:'
      ].join('\n')
    );

    const view = this.document.defaultView;

    if (!view) {
      return;
    }

    view.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }

  private encodeMailtoValue(value: string): string {
    return encodeURIComponent(value);
  }
}
