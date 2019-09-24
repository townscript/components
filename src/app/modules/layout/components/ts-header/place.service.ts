import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../../../../core/cookie.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PlaceService {

    private currentPlace$: BehaviorSubject<Object> = new BehaviorSubject<Object>(null);
    documentIsAccessible: boolean;
    place = this.currentPlace$.asObservable();

    constructor(private cookieService: CookieService, @Inject(DOCUMENT) private document: any,
        @Inject(PLATFORM_ID) private platformId: InjectionToken<Object>) {
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
        if (this.documentIsAccessible) {
            const location = this.cookieService.getCookie('location');
            console.log('got location from cookie' + location);
            if (location != null && location.length > 0) {
                this.updatePlace(JSON.parse(location));
            }
        }
    }

    updatePlace(data): void {
        data = JSON.stringify(data);
        this.cookieService.setCookie('location', data, 100000000, '/');
        console.log("sending to observable");
        this.currentPlace$.next(data);
    }
}
