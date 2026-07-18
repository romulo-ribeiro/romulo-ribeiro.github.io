import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RootApp } from './app/root-app';

bootstrapApplication(RootApp, appConfig)
  .catch((err) => console.error(err));
