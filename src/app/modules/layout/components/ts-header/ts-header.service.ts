import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../../../../core/app-config';

@Injectable()
export class HeaderService {

    baseUrl: string = config.baseUrl;
    apiServerUrl: string = this.baseUrl + 'api/';
    listingsServerUrl: string = this.baseUrl + 'listings/';
    constructor(private http: HttpClient) {
    }
    getplaceSearchResults = (query) => {
        return this.http.get(this.listingsServerUrl + 'place/autocomplete?query=' + query);
    }
    getPopularCities(countryCode) {
        return this.http.get(this.listingsServerUrl + 'city/popular/' + countryCode).toPromise();
    }
    async getSuggestions(searchText: string): Promise<any> {
        return await this.http.get(this.listingsServerUrl + 'tsElasticSearch/suggestions/search?search-for-text='+searchText).toPromise();
    }

    async postSuggestions(searchText: string): Promise<any> {
        const par: Object = new Object();
        par['search-intent'] = searchText;
        return await this.http.post(this.listingsServerUrl + '/tsElasticSearch/suggestions/add?search-intent=' + searchText, null, {}).toPromise();
    }
}
