import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { config } from './app/core/app-config';

if (environment.production) {
  enableProdMode();
}
config.baseUrl = "https://www.tsdugout.in/"
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

