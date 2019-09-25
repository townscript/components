import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../../shared/services/api-service';
import { config } from '../../../core/app-config';

@Injectable()
export class TsLoginSignupService {

    token: any = config.token;
    headers = new HttpHeaders().set('Authorization', this.token);
    CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY = config.CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY;

    constructor(public apiService: ApiService, private http: HttpClient) {
    }

    getUserSignUpDetails = (emailId) => {
      const params = new HttpParams({ fromString: `email=` + emailId});
      return this.http.get(this.apiService.API_SERVER + 'user/getusersignupdetails',
          { params: params, headers: this.headers });
    }

    loginWithTownscript = (emailId, password) => {
      let formData = new FormData();
      formData.set('emailId', emailId);
      formData.set('password', password);
      return this.http.post(this.apiService.API_SERVER + 'user/loginwithtownscript',
          formData, {  headers: this.headers });
    }

    registerWithTownscriptWithCaptcha = (formData) => {
      return this.http.post(this.apiService.API_SERVER + 'user/registerwithtownscriptwithcaptcha',
          formData, { headers: this.headers, responseType: 'text' });
    }

    sendForgotPwdEmail = (emailId) => {
      let forgotPassword = new FormData();
      forgotPassword.set('emailId', emailId);
      return this.http.post(this.apiService.API_SERVER + 'verify/sendforgotpwdemail',
          forgotPassword, { headers: this.headers });
    }

    resendVerificationCode = (rdurl, emailId) => {
      const formData = new FormData();
      formData.append('rdurl', rdurl);
      formData.append('emailid', emailId);
      return this.http.post(this.apiService.API_SERVER + 'user/resendverificationcode',
          formData, { headers: this.headers });
    }
}
