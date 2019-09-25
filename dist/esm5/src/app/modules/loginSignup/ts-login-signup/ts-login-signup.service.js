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
        this.getUserSignUpDetails = function (emailId) {
            var params = new HttpParams({ fromString: "email=" + emailId });
            return _this.http.get(_this.apiService.API_SERVER + 'user/getusersignupdetails', { params: params, headers: _this.headers });
        };
        this.loginWithTownscript = function (emailId, password) {
            var formData = new FormData();
            formData.set('emailId', emailId);
            formData.set('password', password);
            return _this.http.post(_this.apiService.API_SERVER + 'user/loginwithtownscript', formData, { headers: _this.headers });
        };
        this.registerWithTownscriptWithCaptcha = function (formData) {
            return _this.http.post(_this.apiService.API_SERVER + 'user/registerwithtownscriptwithcaptcha', formData, { headers: _this.headers, responseType: 'text' });
        };
        this.sendForgotPwdEmail = function (emailId) {
            var forgotPassword = new FormData();
            forgotPassword.set('emailId', emailId);
            return _this.http.post(_this.apiService.API_SERVER + 'verify/sendforgotpwdemail', forgotPassword, { headers: _this.headers });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9naW4tc2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdG93bnNjcmlwdC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2xvZ2luU2lnbnVwL3RzLWxvZ2luLXNpZ251cC90cy1sb2dpbi1zaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2xEO0lBS0UsOEJBQW1CLFVBQXNCLEVBQVUsSUFBZ0I7UUFBbkUsaUJBQ0M7UUFEa0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFIbkUsVUFBSyxHQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFLN0QseUJBQW9CLEdBQUcsVUFBQyxPQUFPO1lBQzdCLElBQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLEVBQzNFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFBO1FBRUQsd0JBQW1CLEdBQUcsVUFBQyxPQUFPLEVBQUUsUUFBUTtZQUN0QyxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsMEJBQTBCLEVBQzNFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUE7UUFFRCxzQ0FBaUMsR0FBRyxVQUFDLFFBQVE7WUFDM0MsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyx3Q0FBd0MsRUFDekYsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFBO1FBRUQsdUJBQWtCLEdBQUcsVUFBQyxPQUFPO1lBQzNCLElBQUksY0FBYyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDcEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdkMsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsRUFDNUUsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQTtRQUVELDJCQUFzQixHQUFHLFVBQUMsS0FBSyxFQUFFLE9BQU87WUFDdEMsSUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNoQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwQyxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLDZCQUE2QixFQUM5RSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBO0lBbENELENBQUM7SUFOVSxvQkFBb0I7UUFEaEMsVUFBVSxFQUFFO2lEQU1vQixVQUFVLEVBQWdCLFVBQVU7T0FMeEQsb0JBQW9CLENBeUNoQztJQUFELDJCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F6Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcywgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBwLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUc0xvZ2luU2lnbnVwU2VydmljZSB7XG5cbiAgdG9rZW46IGFueSA9IGNvbmZpZy50b2tlbjtcbiAgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQXV0aG9yaXphdGlvbicsIHRoaXMudG9rZW4pO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgfVxuXG4gIGdldFVzZXJTaWduVXBEZXRhaWxzID0gKGVtYWlsSWQpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IGBlbWFpbD1gICsgZW1haWxJZCB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL2dldHVzZXJzaWdudXBkZXRhaWxzJyxcbiAgICAgIHsgcGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KTtcbiAgfVxuXG4gIGxvZ2luV2l0aFRvd25zY3JpcHQgPSAoZW1haWxJZCwgcGFzc3dvcmQpID0+IHtcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5zZXQoJ2VtYWlsSWQnLCBlbWFpbElkKTtcbiAgICBmb3JtRGF0YS5zZXQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL2xvZ2lud2l0aHRvd25zY3JpcHQnLFxuICAgICAgZm9ybURhdGEsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pO1xuICB9XG5cbiAgcmVnaXN0ZXJXaXRoVG93bnNjcmlwdFdpdGhDYXB0Y2hhID0gKGZvcm1EYXRhKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvcmVnaXN0ZXJ3aXRodG93bnNjcmlwdHdpdGhjYXB0Y2hhJyxcbiAgICAgIGZvcm1EYXRhLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSk7XG4gIH1cblxuICBzZW5kRm9yZ290UHdkRW1haWwgPSAoZW1haWxJZCkgPT4ge1xuICAgIGxldCBmb3Jnb3RQYXNzd29yZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcmdvdFBhc3N3b3JkLnNldCgnZW1haWxJZCcsIGVtYWlsSWQpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd2ZXJpZnkvc2VuZGZvcmdvdHB3ZGVtYWlsJyxcbiAgICAgIGZvcmdvdFBhc3N3b3JkLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KTtcbiAgfVxuXG4gIHJlc2VuZFZlcmlmaWNhdGlvbkNvZGUgPSAocmR1cmwsIGVtYWlsSWQpID0+IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgncmR1cmwnLCByZHVybCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbGlkJywgZW1haWxJZCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvcmVzZW5kdmVyaWZpY2F0aW9uY29kZScsXG4gICAgICBmb3JtRGF0YSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMgfSk7XG4gIH1cbn1cbiJdfQ==