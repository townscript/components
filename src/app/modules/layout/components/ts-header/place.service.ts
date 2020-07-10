import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../../../../core/cookie.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../../../../shared/services/utilities.service';
import { config } from './../../../../core/app-config';

@Injectable({
    providedIn: 'root'
})
export class PlaceService {

    private currentPlace$: BehaviorSubject<Object> = new BehaviorSubject<Object>({});
    documentIsAccessible: boolean;
    place = this.currentPlace$.asObservable();

    constructor(private utilityService: UtilityService, private cookieService: CookieService, @Inject(DOCUMENT) private document: any,
        @Inject(PLATFORM_ID) private platformId: InjectionToken<Object>,
        private http: HttpClient) {
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
        if (this.documentIsAccessible) {
            const location = this.cookieService.getCookie('location');
            console.log('got location from cookie' + location);
            if (location != null && location.length > 0 && this.utilityService.IsJsonString(location)) {
                this.updatePlace(JSON.parse(location));
            } else {
                this.getLocationFromIpInfo().then(ipInfoData => {
                    const data = {
                        'city': ipInfoData['city'],
                        'country': ipInfoData['countryCode'] ? ipInfoData['countryCode'].toLowerCase() : 'in',
                        'currentPlace': ipInfoData['city']
                    };
                    if (!this.cookieService.getCookie('location')) {
                        this.setLocationCookie(data);
                        this.updatePlace(data);
                    }
                });
            }
        }
    }

    setLocationCookie(data): void {
        console.log('updating place in components with ');
        console.log(data);
        data = JSON.stringify(data);
        this.cookieService.setCookie('location', data, 100, '/');
    }

    updatePlace(data): void {
        this.currentPlace$.next(data);
    }


    async getLocationFromIpInfo() {
        if (isPlatformBrowser(this.platformId)) {
            const ipInfoCookieData = this.cookieService.getCookie('ipInfoData');
            let localData = localStorage.getItem('ipinfo_data');
            if (ipInfoCookieData && !localData) {
                localData = ipInfoCookieData;
                localStorage.setItem('ipinfo_data', ipInfoCookieData);
            }
            let ipInfoData;
            if (!localData) {
                console.log('Calling ip info!');
                const ipInfoJson = await this.getJsonFromIpInfo().catch(err => {
                    ipInfoData = { 'countryCode': 'in', 'city': 'india' };
                });
                if (ipInfoJson) {
                    ipInfoData = {
                        'countryCode': ipInfoJson['country'].toLowerCase(),
                        'city': ipInfoJson['city'].toLowerCase()
                    };
                }
                localStorage.setItem('ipinfo_data', JSON.stringify(ipInfoData));
                this.callMaxMindTest();
            } else {
                if (this.utilityService.IsJsonString(localData)) {
                    ipInfoData = JSON.parse(localData);
                }
            }
            return ipInfoData;
        }
    }

    getJsonFromIpInfo() {
        return this.http.get('//ipinfo.io/json?token=' + config.IPINFO_ACCESS_TOKEN + '').toPromise();
    }

    callMaxMindTest() {
        return this.http.get('https://nqjmyz4jvh.execute-api.ap-south-1.amazonaws.com/countryISOCode').toPromise();
    }
}
