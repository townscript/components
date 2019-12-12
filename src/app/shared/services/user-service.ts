import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../../core/cookie.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';



@Injectable()
export class UserService {

    private user$: BehaviorSubject<Object> = new BehaviorSubject<Object>(null);
    documentIsAccessible: boolean;
    user = this.user$.asObservable();

    constructor(private cookieService: CookieService, @Inject(DOCUMENT) private document: any,
        @Inject(PLATFORM_ID) private platformId: InjectionToken<Object>) {
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
        if (this.documentIsAccessible) {
            const user = this.cookieService.getCookie('townscript-user');
            console.log('got user from cookie');
            if (user != null && user.length > 0) {
                this.updateUser(JSON.parse(JSON.parse(user)));
            }
        }
    }

    updateUser(data): void {
        if(data)
          this.user$.next(data);
        else
          this.user$ = new BehaviorSubject<Object>(null);
    }
}
