import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../../../../core/app-config';

@Injectable()
export class FooterService {

    baseUrl: string = config.baseUrl;
    listingsUrl: string = this.baseUrl + 'listings/';
    constructor(private http: HttpClient) {
    }

    getPopularEvents = (lat: any, long: any): Promise<any> => {
      const params: Object = new Object();
        params['lat'] = lat;
        params['lng'] = long;
        params['radarDistance'] = 50;
        params['page'] = 0;
        params['size'] = 8;
        params['minScore'] = 0;
      return this.http.post(this.listingsUrl + 'event/radar', {}, {params: <HttpParams>params}).toPromise();
    }

    getCityFromCityCode = (code: string) => {
      return this.http.get(this.listingsUrl + 'place/city?code='+code).toPromise();
    }
}
