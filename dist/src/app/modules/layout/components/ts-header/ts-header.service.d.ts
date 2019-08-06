import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
export declare class HeaderService {
    private http;
    baseUrl: string;
    apiServerUrl: string;
    router: Router;
    constructor(http: HttpClient);
    getplaceSearchResults: (query: any) => import("rxjs").Observable<Object>;
}
