import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/shared/services/api-service';

@Injectable()
export class TsLoginSignupService {

    token: any;
    headers = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9DTElFTlQiLCJzdWIiOiJhcGlAdG93bnNjcmlwdC5jb20iLCJhdWRpZW5jZSI6IndlYiIsImNyZWF0ZWQiOjE1NjUyNTA4ODc2MDUsIlVTRVJfSUQiOjAsImV4cCI6MTU3MzAyNjg4N30.gfDC_wGGN05zCxhLKRm2uY_QjypCiz5qfwm7U0PqkIrywoDGuGcgDa9d1Vo9ftprpZ78A62HY-w4kjfiLOKC7g');

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
