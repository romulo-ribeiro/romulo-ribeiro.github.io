import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { RootApp } from './app/root-app';

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(RootApp, config, context);

export default bootstrap;
