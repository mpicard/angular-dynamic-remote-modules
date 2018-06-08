import * as angularCommon from '@angular/common';
import { enableProdMode } from '@angular/core';
import * as angularCore from '@angular/core';
import * as angularPlatformBrowser from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as angularPlatformBrowserDynamic from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const SystemJS;

SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
SystemJS.set(
  '@angular/platform-browser',
  SystemJS.newModule(angularPlatformBrowser)
);
SystemJS.set(
  '@angular/platform-browser-dynamic',
  SystemJS.newModule(angularPlatformBrowserDynamic)
);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
