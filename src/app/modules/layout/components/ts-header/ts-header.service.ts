import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../../../../core';
import { Router } from '@angular/router';

@Injectable()
export class HeaderService {

    baseUrl: string = config.baseUrl;
    apiServerUrl: string = this.baseUrl + "api/";
    @Input() router: Router;
    constructor(private http: HttpClient) {
    }
    getplaceSearchResults = (query) => {
        return this.http.get(this.baseUrl + "listings/place/autocomplete?query=" + query);
    }
}
