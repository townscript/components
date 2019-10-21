import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../../shared/services/api-service';
import { config } from '../../../core/app-config';
var TsLoginSignupService = /** @class */ (function () {
    function TsLoginSignupService(apiService, http) {
        var _this = this;
        this.apiService = apiService;
        this.http = http;
        this.token = config.token;
        this.headers = new HttpHeaders().set('Authorization', this.token);
        this.CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY = config.CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY;
        this.getUserSignUpDetails = function (emailId) {
            var params = new HttpParams({ fromString: "email=" + emailId });
            return _this.http.get(_this.apiService.API_SERVER + 'user/getusersignupdetails', { params: params, headers: _this.headers }).toPromise();
        };
        this.loginWithTownscript = function (emailId, password) {
            var formData = new FormData();
            formData.set('emailId', emailId);
            formData.set('password', password);
            return _this.http.post(_this.apiService.API_SERVER + 'user/loginwithtownscript', formData, { headers: _this.headers }).toPromise();
        };
        this.registerWithTownscriptWithCaptcha = function (formData) {
            return _this.http.post(_this.apiService.API_SERVER + 'user/registerwithtownscriptwithcaptcha', formData, { headers: _this.headers, responseType: 'text' }).toPromise();
        };
        this.sendForgotPwdEmail = function (emailId) {
            var forgotPassword = new FormData();
            forgotPassword.set('emailId', emailId);
            return _this.http.post(_this.apiService.API_SERVER + 'verify/sendforgotpwdemail', forgotPassword, { headers: _this.headers }).toPromise();
        };
        this.resendVerificationCode = function (rdurl, emailId) {
            var formData = new FormData();
            formData.append('rdurl', rdurl);
            formData.append('emailid', emailId);
            return _this.http.post(_this.apiService.API_SERVER + 'user/resendverificationcode', formData, { headers: _this.headers });
        };
    }
    TsLoginSignupService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ApiService, HttpClient])
    ], TsLoginSignupService);
    return TsLoginSignupService;
}());
export { TsLoginSignupService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9naW4tc2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdG93bnNjcmlwdC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2xvZ2luU2lnbnVwL3RzLWxvZ2luLXNpZ251cC90cy1sb2dpbi1zaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2xEO0lBTUksOEJBQW1CLFVBQXNCLEVBQVUsSUFBZ0I7UUFBbkUsaUJBQ0M7UUFEa0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFKbkUsVUFBSyxHQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsdUNBQWtDLEdBQUcsTUFBTSxDQUFDLGtDQUFrQyxDQUFDO1FBSy9FLHlCQUFvQixHQUFHLFVBQUMsT0FBZTtZQUNyQyxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFDLENBQUMsQ0FBQztZQUNqRSxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLDJCQUEyQixFQUN6RSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdELENBQUMsQ0FBQTtRQUVELHdCQUFtQixHQUFHLFVBQUMsT0FBZSxFQUFFLFFBQWdCO1lBQ3RELElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDOUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkMsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsRUFDekUsUUFBUSxFQUFFLEVBQUcsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hELENBQUMsQ0FBQTtRQUVELHNDQUFpQyxHQUFHLFVBQUMsUUFBYTtZQUNoRCxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLHdDQUF3QyxFQUN2RixRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3RSxDQUFDLENBQUE7UUFFRCx1QkFBa0IsR0FBRyxVQUFDLE9BQWU7WUFDbkMsSUFBSSxjQUFjLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNwQyxjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN2QyxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLDJCQUEyQixFQUMxRSxjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0QsQ0FBQyxDQUFBO1FBRUQsMkJBQXNCLEdBQUcsVUFBQyxLQUFhLEVBQUUsT0FBZTtZQUN0RCxJQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsNkJBQTZCLEVBQzVFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUE7SUFsQ0QsQ0FBQztJQVBRLG9CQUFvQjtRQURoQyxVQUFVLEVBQUU7aURBT3NCLFVBQVUsRUFBZ0IsVUFBVTtPQU4xRCxvQkFBb0IsQ0EwQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQTFDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcHAtY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRzTG9naW5TaWdudXBTZXJ2aWNlIHtcblxuICAgIHRva2VuOiBhbnkgPSBjb25maWcudG9rZW47ICAgIFxuICAgIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0F1dGhvcml6YXRpb24nLCB0aGlzLnRva2VuKTtcbiAgICBDQVBUQ0hBX1NJVEVfSU5WSVNJQkxFX0NBUFRDSEFfS0VZID0gY29uZmlnLkNBUFRDSEFfU0lURV9JTlZJU0lCTEVfQ0FQVENIQV9LRVk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgfVxuXG4gICAgZ2V0VXNlclNpZ25VcERldGFpbHMgPSAoZW1haWxJZDogc3RyaW5nKTpQcm9taXNlPGFueT4gPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tU3RyaW5nOiBgZW1haWw9YCArIGVtYWlsSWR9KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvZ2V0dXNlcnNpZ251cGRldGFpbHMnLFxuICAgICAgICAgIHsgcGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KS50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBsb2dpbldpdGhUb3duc2NyaXB0ID0gKGVtYWlsSWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6UHJvbWlzZTxhbnk+ID0+IHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuc2V0KCdlbWFpbElkJywgZW1haWxJZCk7XG4gICAgICBmb3JtRGF0YS5zZXQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvbG9naW53aXRodG93bnNjcmlwdCcsXG4gICAgICAgICAgZm9ybURhdGEsIHsgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KS50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlcldpdGhUb3duc2NyaXB0V2l0aENhcHRjaGEgPSAoZm9ybURhdGE6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndXNlci9yZWdpc3RlcndpdGh0b3duc2NyaXB0d2l0aGNhcHRjaGEnLFxuICAgICAgICAgIGZvcm1EYXRhLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSkudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgc2VuZEZvcmdvdFB3ZEVtYWlsID0gKGVtYWlsSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgICBsZXQgZm9yZ290UGFzc3dvcmQgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcmdvdFBhc3N3b3JkLnNldCgnZW1haWxJZCcsIGVtYWlsSWQpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3ZlcmlmeS9zZW5kZm9yZ290cHdkZW1haWwnLFxuICAgICAgICAgIGZvcmdvdFBhc3N3b3JkLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KS50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICByZXNlbmRWZXJpZmljYXRpb25Db2RlID0gKHJkdXJsOiBzdHJpbmcsIGVtYWlsSWQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmR1cmwnLCByZHVybCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsaWQnLCBlbWFpbElkKTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL3Jlc2VuZHZlcmlmaWNhdGlvbmNvZGUnLFxuICAgICAgICAgIGZvcm1EYXRhLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KTtcbiAgICB9XG59XG4iXX0=