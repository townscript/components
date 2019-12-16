import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../../../../core/cookie.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../../../../shared/services/utilities.service';

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
                    const data = { 'city': ipInfoData['city'],
                      'country': ipInfoData['countryCode'] ? ipInfoData['countryCode'].toLowerCase() : 'in',
                      'currentPlace': ipInfoData['city'] };
                    if(this.cookieService.getCookie('location') != null)
                      this.updatePlace(data);
                });
            }
        }
    }

    updatePlace(data): void {
        console.log('updating place in components with ');
        console.log(data);
        data = JSON.stringify(data);
        this.cookieService.setCookie('location', data, 100000000, '/');
        this.currentPlace$.next(data);
    }

    async getLocationFromIpInfo() {
        if (isPlatformBrowser(this.platformId)) {
            const localData = localStorage.getItem('ipinfo_data');
            let ipInfoData;
            if (!localData) {
                console.log('Calling ip info!');
                const ipInfoJson = await this.getJsonFromIpInfo();
                ipInfoData = {
                    'lat': ipInfoJson['loc'].split(',')[0],
                    'lng': ipInfoJson['loc'].split(',')[1],
                    'countryCode': ipInfoJson['country'].toLowerCase(),
                    'city': ipInfoJson['city'].toLowerCase()
                };
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
        return this.http.get('//ipinfo.io/json?token=' + environment.IPINFO_ACCESS_TOKEN + '').toPromise();
    }
}
