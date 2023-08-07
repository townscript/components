import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { config } from './app/core/app-config';

if (environment.production) {
  enableProdMode();
}
config.baseUrl = 'http://localhost:4200/';
config.imgixUrl = 'https://ts-testing.imgix.net';
config.s3Bucket = 'townscript-production';
config.betaHostName = 'beta.tsdugout.in/';
config.token = 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9DTElFTlQiLCJzdWIiOiJhcGlAdG93bnNjcmlwdC5jb20iLCJhdWRpZW5jZSI6Indl' +
  'YiIsImNyZWF0ZWQiOjE1NzIyNDkyMjI0MjksIlVTRVJfSUQiOjAsImV4cCI6MTU4MDAyNTIyMn0.HXRdlpKQG-s' +
  'jkgI2r6thpUhtMQFUva-ahgDu4ETd51sl4EB_dzTYuBgp5a1k8Nv9IvK5eQsBQN3ppFhtjesmbg';
config.algoliaIndexName = 'tsTesting';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

