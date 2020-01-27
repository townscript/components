import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../../../../core/app-config';

@Injectable()
export class FooterService {

    baseUrl: string = config.baseUrl;
    listingsUrl: string = this.baseUrl + 'listings/';
    constructor(private http: HttpClient) {
    }

    getPopularEvents = (lat: any, long: any, filter?: any): Promise<any> => {
      const params: Object = new Object();
        params['lat'] = lat ? lat : 1;
        params['lng'] = long ? long : 2;
        params['radarDistance'] = 50;
        params['page'] = 0;
        params['size'] = 8;        
      return this.http.post(this.listingsUrl + 'event/radar', filter ? filter : {}, {params: <HttpParams>params}).toPromise();
    }

    getCityFromCityCode = (code: string):Promise<any> => {
      return this.http.get(this.listingsUrl + 'place/city?code='+code).toPromise();
    }

    getAllPopularCities = (): Promise<any> => {
        return this.http.get(this.listingsUrl + 'city/popular').toPromise();
    }
}
