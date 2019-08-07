import { InjectionToken } from '@angular/core';
import { CookieService } from '../../modules/layout/components/ts-login-signup/cookie.service';
export declare class UserService {
    private cookieService;
    private document;
    private platformId;
    private user$;
    documentIsAccessible: boolean;
    user: import("rxjs").Observable<Object>;
    constructor(cookieService: CookieService, document: any, platformId: InjectionToken<Object>);
    updateUser(data: any): void;
}
