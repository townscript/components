import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../../modules/layout/components/ts-login-signup/cookie.service';
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
            let user = this.cookieService.getCookie("townscript-user");
            console.log("got user from cookie" + user);
            if (user != null && user.length > 0) {
                this.updateUser(JSON.parse(user));
            }
        }
    }

    updateUser(data): void {
        this.user$.next(data);
    }
}
