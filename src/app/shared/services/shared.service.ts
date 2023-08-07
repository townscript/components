import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user-service';
import { config } from '../../core/app-config';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class SharedService {

    baseUrl: String = config.baseUrl;
    apiServerUrl: String = this.baseUrl + 'api/';
    listingsUrl: String = this.baseUrl + 'listings/';



    constructor(private http: HttpClient) {
    }

    getPopularCitiesByCountryCode = (code: string): Promise<any> => {
        return this.http.get(this.listingsUrl + 'city/popular/' + code).toPromise();
    }

    getNearbyCity = (lat: string, long: string) => {
        return this.http.get(this.listingsUrl + 'place/nearbycity?lat=' + lat + '&long=' + long).toPromise();
    }

}
