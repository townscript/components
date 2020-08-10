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
                        this.updatePlace(data);
                    }
                });
            }
        }
    }

    updatePlace(data): void {
        data = JSON.stringify(data);
        this.cookieService.setCookie('location', data, 100, '/');
        this.currentPlace$.next(data);
    }


    async getLocationFromIpInfo() {
        if (isPlatformBrowser(this.platformId)) {
            let ipInfoCookieData = this.cookieService.getCookie('ipInfoData');
            let localData = localStorage.getItem('ipinfo_data');
            if (ipInfoCookieData && !localData) {
                ipInfoCookieData = decodeURIComponent(ipInfoCookieData);
                const jsonIpInfoCookie = JSON.parse(ipInfoCookieData);
                const localDataJson = { 'countryCode': '', 'city': '', ip: '', 'country': '' };
                localDataJson.countryCode = jsonIpInfoCookie.country;
                localDataJson.country = jsonIpInfoCookie.country;
                localDataJson.city = jsonIpInfoCookie.city;
                localDataJson.ip = jsonIpInfoCookie.ip;
                localData = JSON.stringify(localDataJson);
                localStorage.setItem('ipinfo_data', localData);
            }
            let ipInfoData;
            if (!localData) {
                const ipInfoJson = await this.getJsonFromIpInfo().catch(err => {
                    ipInfoData = { 'countryCode': 'in', 'city': 'india', 'country': 'in' };
                });
                if (ipInfoJson) {
                    ipInfoData = {
                        'countryCode': ipInfoJson['countryCode'].toLowerCase(),
                        'ip': ipInfoJson['ip'],
                        'country': ipInfoJson['countryCode'].toLowerCase()
                    };
                }
                localStorage.setItem('ipinfo_data', JSON.stringify(ipInfoData));
            } else {
                if (this.utilityService.IsJsonString(localData)) {
                    ipInfoData = JSON.parse(localData);
                }
            }
            return ipInfoData;
        }
    }

    getJsonFromIpInfo() {
        return this.http.get('https://96ooltknqg.execute-api.ap-south-1.amazonaws.com/countryfromip')
            .toPromise();
    }
}
