import { Routes } from '@angular/router';
import { App } from './app';
import { LanguageRedirect } from './language-redirect';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LanguageRedirect },
  { path: 'en', component: App, data: { language: 'en' } },
  { path: 'es', component: App, data: { language: 'es' } },
  { path: 'pt', component: App, data: { language: 'pt' } },
  { path: '**', component: LanguageRedirect },
];
