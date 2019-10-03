import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { config } from './app/core/app-config';

if (environment.production) {
  enableProdMode();
}
config.baseUrl = "https://www.tsdugout.in/";
config.betaHostName = "beta.tsdugout.in/";
config.token = "eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9DTElFTlQiLCJzdWIiOiJhcGlAdG93bnNjcmlwdC5jb20iLCJhdWRpZW5jZSI6IndlYiIsImNyZWF0ZWQiOjE1NjUyNTA4ODc2MDUsIlVTRVJfSUQiOjAsImV4cCI6MTU3MzAyNjg4N30.gfDC_wGGN05zCxhLKRm2uY_QjypCiz5qfwm7U0PqkIrywoDGuGcgDa9d1Vo9ftprpZ78A62HY-w4kjfiLOKC7g";
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

