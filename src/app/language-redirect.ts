import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { LanguagePreference } from './language-preference';

@Component({
  selector: 'app-language-redirect',
  template: '',
})
export class LanguageRedirect implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly preference = inject(LanguagePreference);
  private readonly router = inject(Router);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    void this.router.navigate(['/' + this.preference.resolve()], { replaceUrl: true });
  }
}
