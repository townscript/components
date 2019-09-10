import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../../../../core/app-config';

@Injectable()
export class HeaderService {

    baseUrl: string = config.baseUrl;
    apiServerUrl: string = this.baseUrl + 'api/';
    constructor(private http: HttpClient) {
    }
    getplaceSearchResults = (query) => {
        return this.http.get(this.baseUrl + 'listings/place/autocomplete?query=' + query);
    }
    getPopularCities(countryCode) {
        return this.http.get(this.baseUrl + 'listings/city/popular/' + countryCode);
    }
}
