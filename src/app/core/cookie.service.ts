import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class CookieService {

  constructor(@Inject(PLATFORM_ID) private platformId: InjectionToken<Object>, ) { }

  public getCookie(name: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const ca: Array<string> = document.cookie.split(';');
      const caLen: number = ca.length;
      const cookieName = `${name}=`;
      let c: string;

      for (let i = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) === 0) {
          return c.substring(cookieName.length, c.length);
        }
      }
    }
    return null;
  }

  public deleteCookie = (name: string): void => {
    this.setCookie(name, '', -1, '/');
  }

  public setCookie = (name: string, value: string, expireDays: number, path: string = ''): void => {
    if (isPlatformBrowser(this.platformId)) {
      const d: Date = new Date();
      d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
      const expires: string = 'expires=' + d.toUTCString();
      const host = '.' + window.location.host.split('.').splice(1).join('.');
      document.cookie = name + '=' + value + '; ' + expires + (path.length > 0 ? '; path=' + path : '') + ';domain=' + host;
    }
  }

}
