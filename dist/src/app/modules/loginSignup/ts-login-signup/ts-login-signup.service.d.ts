import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../../shared/services/api-service';
export declare class TsLoginSignupService {
    apiService: ApiService;
    private http;
    token: any;
    headers: HttpHeaders;
    CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY: any;
    constructor(apiService: ApiService, http: HttpClient);
    getUserSignUpDetails: (emailId: any) => import("rxjs").Observable<Object>;
    loginWithTownscript: (emailId: any, password: any) => import("rxjs").Observable<Object>;
    registerWithTownscriptWithCaptcha: (formData: any) => import("rxjs").Observable<string>;
    sendForgotPwdEmail: (emailId: any) => import("rxjs").Observable<Object>;
    resendVerificationCode: (rdurl: any, emailId: any) => import("rxjs").Observable<Object>;
}
