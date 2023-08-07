import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { config } from '../../../core/app-config';

@Injectable()
export class TsLoginSignupService {

  token: string = config.token;
  baseUrl: String = config.baseUrl;
  apiServerUrl: String = this.baseUrl + 'api/';

  headers = new HttpHeaders().set('Authorization', this.token);
  CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY = config.CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY;

  constructor(private http: HttpClient) {
  }

  getUserSignUpDetails = (emailId: string): Promise<any> => {
    const params = new HttpParams({ fromString: `email=` + emailId });
    return this.http.get(this.apiServerUrl + 'user/getusersignupdetails',
      { params: params, headers: this.headers }).toPromise();
  }

  loginWithTownscript = (emailId: string, password: string): Promise<any> => {
    const formData = new FormData();
    formData.set('emailId', emailId);
    formData.set('password', password);
    return this.http.post(this.apiServerUrl + 'user/loginwithtownscript',
      formData, { headers: this.headers }).toPromise();
  }

  registerWithTownscriptWithCaptcha = (formData: any): Promise<any> => {
    return this.http.post(this.apiServerUrl + 'user/registerwithtownscriptwithcaptcha',
      formData, { headers: this.headers, responseType: 'text' }).toPromise();
  }

  sendForgotPwdEmail = (emailId: string): Promise<any> => {
    const forgotPassword = new FormData();
    forgotPassword.set('emailId', emailId);
    return this.http.post(this.apiServerUrl + 'verify/sendforgotpwdemail',
      forgotPassword, { headers: this.headers }).toPromise();
  }

  resendVerificationCode = (rdurl: string, emailId: string) => {
    const formData = new FormData();
    formData.append('rdurl', rdurl);
    formData.append('emailid', emailId);
    return this.http.post(this.apiServerUrl + 'user/resendverificationcode',
      formData, { headers: this.headers });
  }
}
