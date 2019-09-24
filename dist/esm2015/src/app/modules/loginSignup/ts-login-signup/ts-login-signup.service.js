import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../../shared/services/api-service';
import { config } from '../../../core/app-config';
let TsLoginSignupService = class TsLoginSignupService {
    constructor(apiService, http) {
        this.apiService = apiService;
        this.http = http;
        this.token = config.token;
        this.headers = new HttpHeaders().set('Authorization', this.token);
        this.getUserSignUpDetails = (emailId) => {
            const params = new HttpParams({ fromString: `email=` + emailId });
            return this.http.get(this.apiService.API_SERVER + 'user/getusersignupdetails', { params: params, headers: this.headers });
        };
        this.loginWithTownscript = (emailId, password) => {
            let formData = new FormData();
            formData.set('emailId', emailId);
            formData.set('password', password);
            return this.http.post(this.apiService.API_SERVER + 'user/loginwithtownscript', formData, { headers: this.headers });
        };
        this.registerWithTownscriptWithCaptcha = (formData) => {
            return this.http.post(this.apiService.API_SERVER + 'user/registerwithtownscriptwithcaptcha', formData, { headers: this.headers, responseType: 'text' });
        };
        this.sendForgotPwdEmail = (emailId) => {
            let forgotPassword = new FormData();
            forgotPassword.set('emailId', emailId);
            return this.http.post(this.apiService.API_SERVER + 'verify/sendforgotpwdemail', forgotPassword, { headers: this.headers });
        };
        this.resendVerificationCode = (rdurl, emailId) => {
            const formData = new FormData();
            formData.append('rdurl', rdurl);
            formData.append('emailid', emailId);
            return this.http.post(this.apiService.API_SERVER + 'user/resendverificationcode', formData, { headers: this.headers });
        };
    }
};
TsLoginSignupService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [ApiService, HttpClient])
], TsLoginSignupService);
export { TsLoginSignupService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9naW4tc2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdG93bnNjcmlwdC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2xvZ2luU2lnbnVwL3RzLWxvZ2luLXNpZ251cC90cy1sb2dpbi1zaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2xELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBSy9CLFlBQW1CLFVBQXNCLEVBQVUsSUFBZ0I7UUFBaEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFIbkUsVUFBSyxHQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFLN0QseUJBQW9CLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNqQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNsRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLDJCQUEyQixFQUMzRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQTtRQUVELHdCQUFtQixHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQzFDLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDOUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsRUFDM0UsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQTtRQUVELHNDQUFpQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyx3Q0FBd0MsRUFDekYsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFBO1FBRUQsdUJBQWtCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMvQixJQUFJLGNBQWMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ3BDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLEVBQzVFLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUE7UUFFRCwyQkFBc0IsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsNkJBQTZCLEVBQzlFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUE7SUFsQ0QsQ0FBQztDQW1DRixDQUFBO0FBekNZLG9CQUFvQjtJQURoQyxVQUFVLEVBQUU7NkNBTW9CLFVBQVUsRUFBZ0IsVUFBVTtHQUx4RCxvQkFBb0IsQ0F5Q2hDO1NBekNZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwcC1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHNMb2dpblNpZ251cFNlcnZpY2Uge1xuXG4gIHRva2VuOiBhbnkgPSBjb25maWcudG9rZW47XG4gIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0F1dGhvcml6YXRpb24nLCB0aGlzLnRva2VuKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gIH1cblxuICBnZXRVc2VyU2lnblVwRGV0YWlscyA9IChlbWFpbElkKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tU3RyaW5nOiBgZW1haWw9YCArIGVtYWlsSWQgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndXNlci9nZXR1c2Vyc2lnbnVwZGV0YWlscycsXG4gICAgICB7IHBhcmFtczogcGFyYW1zLCBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSk7XG4gIH1cblxuICBsb2dpbldpdGhUb3duc2NyaXB0ID0gKGVtYWlsSWQsIHBhc3N3b3JkKSA9PiB7XG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuc2V0KCdlbWFpbElkJywgZW1haWxJZCk7XG4gICAgZm9ybURhdGEuc2V0KCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndXNlci9sb2dpbndpdGh0b3duc2NyaXB0JyxcbiAgICAgIGZvcm1EYXRhLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyV2l0aFRvd25zY3JpcHRXaXRoQ2FwdGNoYSA9IChmb3JtRGF0YSkgPT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL3JlZ2lzdGVyd2l0aHRvd25zY3JpcHR3aXRoY2FwdGNoYScsXG4gICAgICBmb3JtRGF0YSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pO1xuICB9XG5cbiAgc2VuZEZvcmdvdFB3ZEVtYWlsID0gKGVtYWlsSWQpID0+IHtcbiAgICBsZXQgZm9yZ290UGFzc3dvcmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3Jnb3RQYXNzd29yZC5zZXQoJ2VtYWlsSWQnLCBlbWFpbElkKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndmVyaWZ5L3NlbmRmb3Jnb3Rwd2RlbWFpbCcsXG4gICAgICBmb3Jnb3RQYXNzd29yZCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSk7XG4gIH1cblxuICByZXNlbmRWZXJpZmljYXRpb25Db2RlID0gKHJkdXJsLCBlbWFpbElkKSA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3JkdXJsJywgcmR1cmwpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWxpZCcsIGVtYWlsSWQpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL3Jlc2VuZHZlcmlmaWNhdGlvbmNvZGUnLFxuICAgICAgZm9ybURhdGEsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pO1xuICB9XG59XG4iXX0=