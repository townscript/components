import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../../../shared/services/api-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment-timezone';
import { RecaptchaComponent } from 'ng-recaptcha';
import { CookieService } from './cookie.service';
var headers = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9DTElFTlQiLCJzdWIiOiJhcGlAdG93bnNjcmlwdC5jb20iLCJhdWRpZW5jZSI6IndlYiIsImNyZWF0ZWQiOjE1NTgzMzUwNjI0MTksIlVTRVJfSUQiOjAsImV4cCI6MTU2NjExMTA2Mn0.FL9I1Rn0OtQ4eHdE1QaFtzI7WwHFPe_45p6sO4Civin_drrvp9itjvcoDHCPjz_4GeNN45mYGnHsQExVgTbHuA');
var TsLoginSignupComponent = /** @class */ (function () {
    function TsLoginSignupComponent(apiService, http, fb, cookieService) {
        var _this = this;
        this.apiService = apiService;
        this.http = http;
        this.fb = fb;
        this.cookieService = cookieService;
        this.showSocial = true;
        this.show = false;
        this.showPassword = false;
        this.rdurl = '';
        this.ifSignIn = false;
        this.ifUnverified = true;
        this.ifSignUp = false;
        this.showVerifyEmail = false;
        this.showResetPassword = false;
        this.CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY = '6LcAq4QUAAAAABrOnp0xwsaRk7PgnCgmE-FDcbLG';
        this.userTimezone = moment.tz.guess();
        this.loginForm = this.fb.group({
            firstName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            phoneNumber: ['', Validators.required]
        });
        this.captchaResponse = '';
        this.correctPhoneNumber = null;
        this.phoneError = false;
        this.socialLoginMsg = false;
        this.password = function () {
            _this.show = !_this.show;
        };
        this.onLoginWithFB = function () {
            window.open('https://' + _this.apiService.hostName + '/api/user/signinwithfacebook' +
                (_this.rdurl === undefined ? '' : '?rdurl=' + _this.rdurl), '_self');
        };
        this.onLoginWithGoogle = function () {
            window.open('https://' + _this.apiService.hostName + '/api/user/signinwithgoogle' +
                (_this.rdurl === undefined ? '' : '?rdurl=' + _this.rdurl), '_self');
        };
        this.getEmailVerifyResponse = function () {
            var params = new HttpParams({ fromString: "email=" + _this.loginForm.value.email });
            return _this.http.get(_this.apiService.API_SERVER + 'user/getusersignupdetails', { params: params, headers: headers }).pipe(map(function (data) { return (data); }));
        };
        this.verifyEmail = function () {
            _this.getEmailVerifyResponse().subscribe(function (retData) {
                var newData = JSON.parse(retData.data);
                if (newData && newData.isExistingUser && newData.isManualSignup) {
                    _this.loginForm.get('password').enable();
                    _this.ifSignIn = true;
                    _this.ifUnverified = false;
                    _this.ifSignUp = false;
                    _this.showSocial = false;
                    _this.currScreen = 'ifSignIn';
                    _this.socialLoginMsg = false;
                }
                else if (newData && newData.isExistingUser && !newData.isManualSignup) {
                    _this.socialLoginMsg = true;
                }
                else {
                    _this.ifSignIn = false;
                    _this.ifUnverified = false;
                    _this.ifSignUp = true;
                    _this.showSocial = false;
                    _this.currScreen = 'ifSignUp';
                    _this.loginForm.get('firstName').enable();
                    _this.loginForm.get('password').enable();
                    _this.loginForm.get('phoneNumber').enable();
                    _this.socialLoginMsg = false;
                }
            }, function (error) {
            });
        };
        this.signIn = function () {
            alert('you have signed in');
            _this.postSignInCredentials().subscribe(function (retData) {
                var tokenData = {
                    token: (retData.data)
                };
                var userData = tslib_1.__assign({}, retData.userDetails, tokenData);
                _this.cookieService.setCookie('townscript-user', JSON.stringify(userData), 90, '/');
                _this.redirectToListings();
            }, function (error) {
            });
        };
        this.signup = function () {
            var self = _this;
            _this.postSignupCredentials().toPromise().then(function (data) {
                self.showVerifyEmail = true;
                self.showSocial = false;
                self.ifSignUp = false;
                self.currScreen = 'showVerifyEmail';
            });
        };
        this.forgotPassword = function () {
            _this.loginForm.get('password').disable();
            _this.showResetPassword = true;
            _this.showSocial = false;
            _this.ifSignIn = false;
            _this.currScreen = 'showResetPassword';
        };
        this.takeMeBack = function () {
            if (_this.showResetPassword) {
                _this.ifUnverified = true;
                _this.showResetPassword = false;
                _this.ifSignUp = false;
                _this.currScreen = 'ifUnverified';
            }
            else if (_this.ifSignIn) {
                _this.ifSignUp = false;
                _this.showResetPassword = false;
                _this.ifUnverified = true;
                _this.ifSignIn = false;
                _this.showSocial = true;
                _this.currScreen = 'ifUnverified';
            }
            else if (_this.ifSignUp) {
                _this.ifUnverified = true;
                _this.ifSignUp = false;
                _this.showSocial = true;
                _this.currScreen = 'ifUnverified';
                _this.loginForm.get('firstName').disable();
                _this.loginForm.get('password').disable();
                _this.loginForm.get('phoneNumber').disable();
            }
            else if (_this.showVerifyEmail) {
                _this.showVerifyEmail = false;
                _this.ifUnverified = true;
                _this.showSocial = true;
                _this.ifSignUp = false;
                _this.loginForm.get('firstName').disable();
                _this.loginForm.get('password').disable();
                _this.loginForm.get('phoneNumber').disable();
                _this.currScreen = 'ifUnverified';
            }
        };
        this.postSignInCredentials = function () {
            if (!_this.loginForm.valid) {
                return;
            }
            var loginObj = {
                emailId: _this.loginForm.value.email,
                password: _this.loginForm.value.password
            };
            var params = new HttpParams({
                fromString: "emailId=" + _this.loginForm.value.email + "&password=" + _this.loginForm.value.password
            });
            return _this.http.post(_this.apiService.API_SERVER + 'user/loginwithtownscript', loginObj, { params: params, headers: headers }).pipe(map(function (data) { return (data); }));
        };
        this.resetPasswordCredentials = function () {
            var forgotPassword = {
                emailId: _this.loginForm.value.email
            };
            return _this.http.post(_this.apiService.API_SERVER + 'verify/sendforgotpwdemail', forgotPassword, { headers: headers }).pipe(map(function (data) { return (data); }));
        };
        this.redirectToListings = function () {
            window.open('/', '_self');
        };
        this.resetPassword = function () {
            _this.resetPasswordCredentials().subscribe(function (resp) {
                console.log(resp);
            }, function (error) {
                console.log(error);
            });
        };
        this.postSignupCredentials = function () {
            if (!_this.loginForm.valid) {
                return;
            }
            var signupObj = {
                emailId: _this.loginForm.value.email,
                password: _this.loginForm.value.password,
                name: _this.loginForm.value.firstName,
                username: _this.randomString(10, ''),
                phone: _this.correctPhoneNumber,
                usertimezone: _this.userTimezone,
                reCaptcha: _this.captchaResponse
            };
            var formData = new FormData();
            formData.append('name', _this.loginForm.value.firstName);
            formData.append('emailid', _this.loginForm.value.email);
            formData.append('password', _this.loginForm.value.password);
            formData.append('phone', _this.correctPhoneNumber);
            formData.append('usertimezone', _this.userTimezone);
            formData.append('reCaptcha', _this.captchaResponse);
            formData.append('username', _this.randomString(10, ''));
            return _this.http.post(_this.apiService.API_SERVER + 'user/registerwithtownscriptwithcaptcha', formData, { headers: headers, responseType: 'text' });
        };
        this.randomString = function (len, an) {
            an = an && an.toLowerCase();
            var str = '', i = 0, min = an == 'a' ? 10 : 0, max = an == 'n' ? 10 : 62;
            for (; i++ < len;) {
                var r = Math.random() * (max - min) + min << 0;
                str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
            }
            return str;
        };
        this.resendVerifyEmail = function () {
            _this.resendVerifyEmailCredential().subscribe(function (retData) {
                alert('verification email has been sent');
            }, function (error) {
                console.log('error');
            });
        };
        this.resendVerifyEmailCredential = function () {
            var emailObj = {
                emailId: _this.loginForm.value.email
            };
            return _this.http.post(_this.apiService.API_SERVER + 'user/resendverificationcode', emailObj, { headers: headers }).pipe(map(function (data) { return (data); }));
        };
        this.hasError = function (event) {
            console.log(event);
            _this.phoneError = !event;
        };
        this.telInputObject = function (event) {
            console.log(event);
        };
        this.onCountryChange = function (event) {
            console.log(event);
        };
        this.getNumber = function (event) {
            console.log(event);
            _this.correctPhoneNumber = event;
        };
    }
    TsLoginSignupComponent.prototype.ngOnInit = function () {
        this.loginForm.get('firstName').disable();
        this.loginForm.get('password').disable();
        this.loginForm.get('phoneNumber').disable();
        this.currScreen = 'ifUnverified';
    };
    TsLoginSignupComponent.prototype.ngAfterViewInit = function () {
    };
    TsLoginSignupComponent.prototype.resolveAndProceed = function (captchaResponse) {
        this.captchaResponse = captchaResponse;
        this.signup();
    };
    tslib_1.__decorate([
        ViewChild('recaptchaRef', { read: true, static: true }),
        tslib_1.__metadata("design:type", RecaptchaComponent)
    ], TsLoginSignupComponent.prototype, "recaptchaRef", void 0);
    TsLoginSignupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ts-login-signup',
            template: "<section  class=\"container-background flex flex-row bg-white\">\n    <div id=\"login-signup-container\" class=\"z-10 bg-white border border-gray-400 shadow w-2/5 sm:w-1/2 p-6 m-auto md:m-2 lg:m-2\">\n        <i (click)=\"takeMeBack()\" class=\"cursor-pointer material-icons\">arrow_back</i>     \n        <app-login-top-content [condition] = \"currScreen\"></app-login-top-content>\n        <form [formGroup]=\"loginForm\" class=\"w-full max-w-sm \">\n            <div *ngIf= \"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"firstName\" class=\" form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\" id=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"username\"></ts-input-text>\n                </div>\n            </div>\n            <div *ngIf= \"!showVerifyEmail\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"email\" class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\" id=\"user-email\" type=\"email\" name=\"email\" placeholder=\"Email\" autocomplete=\"user-email\" required></ts-input-text>\n                </div>\n                <p class=\"text-sm text-red-500\" *ngIf=\"socialLoginMsg\">It seems you have signed up using Social Login.</p>\n            </div>\n            <div *ngIf= \"ifSignIn || ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"password\"  class=\"form-control bg-white border-gray-500 rounded py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\" id=\"user-pwd\" type =\"password\" placeholder= \"Password\" autocomplete=\"current-password\"></ts-input-text>\n                </div>\n            </div>\n            <div *ngIf= \"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <input\n                    ng2TelInput\n                    [ng2TelInputOptions]=\"{\n                        initialCountry: 'in',\n                        separateDialCode: true,\n                        utilsScript: '../../../../../../../node_modules/intl-tel-input/build/js/utils.js'\n                    }\"\n                    (hasError)=\"hasError($event)\"\n                    (ng2TelOutput)=\"getNumber($event)\"\n                    (intlTelInputObject)=\"telInputObject($event)\"\n                    (countryChange)=\"onCountryChange($event)\"\n                    formControlName=\"phoneNumber\"\n                    class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\" id=\"phoneNumber\" type=\"tel\" placeholder=\"Phone no.\" autocomplete=\"user-phone\">\n                    <p class=\"text-sm text-red-500\" *ngIf=\"phoneError\">Please enter a valid Phone no.</p>\n                </div>\n            </div>\n            <div *ngIf=\"showVerifyEmail\" class=\"text-center\">\n                <img class=\"m-auto\" src=\"../../../../../assets/images/verify-email.png\">\n                <span class=\"text-sm\">Tap the link in the email we sent you at {{this.loginForm.value.email || 'someEMail'}}</span>\n            </div>\n            <div class=\"mt-5\">\n                <div *ngIf= \"ifUnverified\" class=\"w-full text-center\">\n                    <ts-button text=\"Continue\" [disabled]=\"!loginForm.valid\" (click) = \"verifyEmail()\" class=\"w-full\"></ts-button>\n                </div>\n                <div *ngIf= \"ifSignIn\" class=\"w-full text-center\">\n                    <ts-button text=\"Signin\" [disabled]=\"!loginForm.valid\" (click) = \"signIn()\" class=\"w-full\">\n                    </ts-button>\n                    <a (click) = \"forgotPassword()\" class=\" text-sm text-center verify-email py-2 px-2\">\n                        Forgot Password?\n                    </a>\n                </div>\n                <div *ngIf= \"ifSignUp\" class=\"w-full text-center\">\n                    <ts-button text=\"Create your account\" [disabled]=\"!loginForm.valid || phoneError\" (click) = \"recaptchaRef.execute()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"showResetPassword\" class=\"md:w-full text-center\">\n                    <ts-button text=\"Send Reset Password Link\" [disabled]=\"!loginForm.valid\" (click) = \"resetPassword()\" class=\"w-full\">\n                    </ts-button>\n                    <a (click) = \"resetPassword()\" class=\" text-sm text-center resend-email py-2 px-2\">\n                            Resend Email\n                    </a>\n                </div>\n                <div *ngIf=\"showVerifyEmail\" class=\"md:w-full text-center py-2 my-2 \">\n                    <ts-button text=\"Resend Verification Email\" [disabled]=\"!loginForm.valid\" (click) = \"resendVerifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                    <a  class=\" text-sm text-center resend-email py-2 px-2\">\n                        Why verify?\n                    </a>\n                </div>\n                <!-- <p class=\"text-sm\">\n                    Form Value: {{ loginForm.value | json }}\n                </p>\n                <p class=\"text-sm\">\n                    Form Status: {{ loginForm.status }}\n                </p> -->\n\n            </div>\n            <div class=\"form-group\">\n                <re-captcha\n                    #recaptchaRef=\"reCaptcha\"\n                    (resolved)=\"resolveAndProceed($event)\"\n                    siteKey= {{CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY}}\n                    size=\"invisible\"\n                ></re-captcha>\n\t\t\t</div>\n        </form>\n        <section id=\"social-signin-container\" *ngIf=\"showSocial\">\n            <div class=\"strike-through strike-through-margin\">\n                <span>\n                    <strong class=\"or-text\">or</strong>\n                </span>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button class=\"bg-white w-full p-2 flex flex-row leading-loose border border-gray-400 rounded shadow mb-2 justify-center\" \n                    (click)=\"onLoginWithGoogle()\" \n                    ts-data-analytics prop-event=\"click\" \n                    eventLabel=\"Login with Google\" \n                    prop-clicked-location=\"Sign In\">\n                        <div class=\"px-2\">\n                            <img src=\"../../../../../assets/images/google-min.png\"/>\n                        </div>\n                        <div class=\"text-sm\">\n                            <span class=\"no-margin\">Continue with Google</span>\n                        </div>\n                </button>\n                <p class=\"form-control--error\" ng-if=\"googleError.length\" ng-bind=\"googleError\"></p>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button class=\"bg-white w-full p-2 flex flex-row leading-loose border border-gray-400 rounded shadow mb-2 justify-center\" (click)=\"onLoginWithFB()\"\n                    ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Facebook\" prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img src=\"https://s3.ap-southeast-1.amazonaws.com/common-resources/assets/facebook-min-new.png\"/>\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Facebook</span>\n                    </div>\n                </button>\n                <ng-container class=\"login-error\" ng-if=\"fbError.length\">\n                    <i class=\"ion-android-alert\"></i>\n                    <p class=\"form-control--error\" ng-bind=\"fbError\"></p>\n                </ng-container>\n            </div>\n        </section>\n        <div *ngIf=\"ifSignUp\" class=\"agreement my-2 px-2\">\n            <div class=\"w-full hor-linear-grad m-2\"></div>\n            <p class=\"text-xs text-center\">By continuing, you agree to Townscript's <a class=\"text-blue-700\" href=\"/terms-and-conditions\">terms of service</a> and <a class=\"text-blue-700\" href=\"/privacy-policy\">privacy policy</a>.</p>\n        </div>\n    </div>\n    <div class=\"p-6 hidden md:block\">\n            <div class=\"flex flex-col\">\n                    <span class=\"text-2xl w-2/3\"><strong>301,589 event organizers trust us.</strong></span>\n                    <div class=\"flex flex-column my-2\">\n                        <i class=\"material-icons bg-purple-500 mr-2 rounded-full h-6 text-white\">done</i>\n                        <span>\n                            <p class=\"\">Quick and easy event creation</p>\n                            <p class=\"text-sm text-gray-600\">Create your event page, it is easy and customizable.</p>\n                        </span>\n                    </div>\n                    <div class=\"flex flex-column my-2\">\n                            <i class=\"material-icons bg-purple-500 mr-2 rounded-full h-6 text-white\">done</i>\n                            <span>\n                                <p class=\"\">Start selling tickets within minutes.</p>\n                                <p class=\"text-sm text-gray-600\">Link your bank account, verify identity details and start selling instantly.</p>\n                            </span>\n                    </div>\n                    <div class=\"flex flex-column my-2\">\n                            <i class=\"material-icons bg-purple-500 mr-2 rounded-full h-6 text-white\">done</i>\n                            <span>\n                                <p class=\"\">Simple Integration with your website.</p>\n                                <p class=\"text-sm text-gray-600\">Easy to start selling tickets directly from your website and facebook without developers.</p>\n                            </span>\n                    </div>\n                </div>\n    </div>\n    \n</section>\n",
            styles: [".container-background::before{color:#fff;background:url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'  preserveAspectRatio='none'><polygon points='0,110 0,50 300,0 300,300' width='100%' height='100%' style='fill:blue;'/></svg>\") 0 0/contain;width:30%;font-size:2em;padding:4px 40px}.strike-through-margin{margin:30px 0;text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em}.strike-through-margin span{background-color:#fff;padding:3px 30px}.strike-through{text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em;margin:30px auto}.strike-through span{background-color:#fff;padding:3px 30px}.hor-linear-grad{border:1px solid;border-left:0;border-right:0;-webkit-border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));-webkit-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);-o-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image-slice:1}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService,
            HttpClient,
            FormBuilder,
            CookieService])
    ], TsLoginSignupComponent);
    return TsLoginSignupComponent;
}());
export { TsLoginSignupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxLQUFLLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRWhELElBQU0sT0FBTyxHQUFHLElBQUssV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRyw2UUFBNlEsQ0FBQyxDQUFDO0FBT3hVO0lBNEJJLGdDQUFtQixVQUFzQixFQUM3QixJQUFnQixFQUNoQixFQUFlLEVBQ2YsYUFBNEI7UUFIeEMsaUJBSVE7UUFKVyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzdCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBM0J4QyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixp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QUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnREFBZSxHQUFmO0lBRUEsQ0FBQztJQUVNLGtEQUFpQixHQUF4QixVQUF5QixlQUF1QjtRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQTdDRDtRQURDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzswQ0FDMUMsa0JBQWtCO2dFQUFDO0lBSHhCLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLDh0VUFBK0M7O1NBRWhELENBQUM7aURBNkJpQyxVQUFVO1lBQ3ZCLFVBQVU7WUFDWixXQUFXO1lBQ0EsYUFBYTtPQS9CL0Isc0JBQXNCLENBNFJsQztJQUFELDZCQUFDO0NBQUEsQUE1UkQsSUE0UkM7U0E1Ulksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudC10aW1lem9uZSc7XG5pbXBvcnQgeyBSZWNhcHRjaGFDb21wb25lbnQgfSBmcm9tICduZy1yZWNhcHRjaGEnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZX0gZnJvbSAnLi9jb29raWUuc2VydmljZSc7XG5cbmNvbnN0IGhlYWRlcnMgPSBuZXcgIEh0dHBIZWFkZXJzKCkuc2V0KCdBdXRob3JpemF0aW9uJyAsICdleUpoYkdjaU9pSklVelV4TWlKOS5leUpTVDB4Rklqb2lVazlNUlY5RFRFbEZUbFFpTENKemRXSWlPaUpoY0dsQWRHOTNibk5qY21sd2RDNWpiMjBpTENKaGRXUnBaVzVqWlNJNkluZGxZaUlzSW1OeVpXRjBaV1FpT2pFMU5UZ3pNelV3TmpJME1Ua3NJbFZUUlZKZlNVUWlPakFzSW1WNGNDSTZNVFUyTmpFeE1UQTJNbjAuRkw5STFSbjBPdFE0ZUhkRTFRYUZ0ekk3V3dIRlBlXzQ1cDZzTzRDaXZpbl9kcnJ2cDlpdGp2Y29ESENQanpfNEdlTk40NW1ZR25Ic1FFeFZnVGJIdUEnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRzLWxvZ2luLXNpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90cy1sb2dpbi1zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cy1sb2dpbi1zaWdudXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUc0xvZ2luU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICAvLyBAVmlld0NoaWxkKFJlY2FwdGNoYUNvbXBvbmVudCwgeyByZWFkOiB0cnVlLCBzdGF0aWM6IHRydWUgfSkgcmVjYXB0Y2hhOiBSZWNhcHRjaGFDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZCgncmVjYXB0Y2hhUmVmJywgeyByZWFkOiB0cnVlLCBzdGF0aWM6IHRydWUgfSlcbiAgICByZWNhcHRjaGFSZWY6IFJlY2FwdGNoYUNvbXBvbmVudDtcbiAgICBzaG93U29jaWFsID0gdHJ1ZTtcbiAgICBzaG93ID0gZmFsc2U7XG4gICAgc2hvd1Bhc3N3b3JkID0gZmFsc2U7XG4gICAgcmR1cmwgPSAnJztcbiAgICBpZlNpZ25JbiA9IGZhbHNlO1xuICAgIGlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgaWZTaWduVXAgPSBmYWxzZTtcbiAgICBzaG93VmVyaWZ5RW1haWwgPSBmYWxzZTtcbiAgICBzaG93UmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuICAgIGlzVXNlclZlcmlmaWVkOiBhbnk7XG4gICAgQ0FQVENIQV9TSVRFX0lOVklTSUJMRV9DQVBUQ0hBX0tFWSA9ICc2TGNBcTRRVUFBQUFBQnJPbnAweHdzYVJrN1BnbkNnbUUtRkRjYkxHJztcbiAgICB1c2VyVGltZXpvbmUgPSBtb21lbnQudHouZ3Vlc3MoKTtcbiAgICBsb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIHBob25lTnVtYmVyOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgY2FwdGNoYVJlc3BvbnNlID0gJyc7XG4gICAgY3VyclNjcmVlbjogc3RyaW5nO1xuICAgIGNvcnJlY3RQaG9uZU51bWJlciA9IG51bGw7XG4gICAgcGhvbmVFcnJvciA9IGZhbHNlO1xuICAgIHNvY2lhbExvZ2luTXNnID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlXG4gICAgICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0ICgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZXNvbHZlQW5kUHJvY2VlZChjYXB0Y2hhUmVzcG9uc2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhcHRjaGFSZXNwb25zZSA9IGNhcHRjaGFSZXNwb25zZTtcbiAgICAgICAgdGhpcy5zaWdudXAoKTtcbiAgICB9XG5cbiAgICBwYXNzd29yZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB9XG5cbiAgICBvbkxvZ2luV2l0aEZCID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly8nICsgdGhpcy5hcGlTZXJ2aWNlLmhvc3ROYW1lICsgJy9hcGkvdXNlci9zaWduaW53aXRoZmFjZWJvb2snICtcbiAgICAgICAgKHRoaXMucmR1cmwgPT09IHVuZGVmaW5lZCA/ICcnIDogJz9yZHVybD0nICsgdGhpcy5yZHVybCksICdfc2VsZicpO1xuICAgIH1cblxuICAgIG9uTG9naW5XaXRoR29vZ2xlID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly8nICsgdGhpcy5hcGlTZXJ2aWNlLmhvc3ROYW1lICsgJy9hcGkvdXNlci9zaWduaW53aXRoZ29vZ2xlJyArXG4gICAgICAgICh0aGlzLnJkdXJsID09PSB1bmRlZmluZWQgPyAnJyA6ICc/cmR1cmw9JyArIHRoaXMucmR1cmwpLCAnX3NlbGYnKTtcbiAgICB9XG5cbiAgICBnZXRFbWFpbFZlcmlmeVJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgIEh0dHBQYXJhbXMoe2Zyb21TdHJpbmc6ICBgZW1haWw9YCArIHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvZ2V0dXNlcnNpZ251cGRldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICB7cGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IGhlYWRlcnN9KS5waXBlKG1hcChkYXRhID0+IChkYXRhKSkpO1xuICAgIH1cblxuICAgIHZlcmlmeUVtYWlsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmdldEVtYWlsVmVyaWZ5UmVzcG9uc2UoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmV0RGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IEpTT04ucGFyc2UocmV0RGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3RGF0YSAmJiBuZXdEYXRhLmlzRXhpc3RpbmdVc2VyICYmIG5ld0RhdGEuaXNNYW51YWxTaWdudXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmU2lnbkluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmU2lnbkluJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxMb2dpbk1zZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3RGF0YSAmJiBuZXdEYXRhLmlzRXhpc3RpbmdVc2VyICYmICFuZXdEYXRhLmlzTWFudWFsU2lnbnVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaWFsTG9naW5Nc2cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZTaWduSW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZTaWduVXAnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGhvbmVOdW1iZXInKS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxMb2dpbk1zZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgfVxuXG5cbiAgICBzaWduSW4gPSAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KCd5b3UgaGF2ZSBzaWduZWQgaW4nKTtcbiAgICAgICAgdGhpcy5wb3N0U2lnbkluQ3JlZGVudGlhbHMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmV0RGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5EYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogKHJldERhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7Li4ucmV0RGF0YS51c2VyRGV0YWlscywgLi4udG9rZW5EYXRhfTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0Q29va2llKCd0b3duc2NyaXB0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIDkwICwgJy8nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9MaXN0aW5ncygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgc2lnbnVwID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5wb3N0U2lnbnVwQ3JlZGVudGlhbHMoKS50b1Byb21pc2UoKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHNlbGYuc2hvd1ZlcmlmeUVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuc2hvd1NvY2lhbCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5jdXJyU2NyZWVuID0gJ3Nob3dWZXJpZnlFbWFpbCc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvcmdvdFBhc3N3b3JkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93U29jaWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWZTaWduSW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ3Nob3dSZXNldFBhc3N3b3JkJztcbiAgICB9XG5cbiAgICB0YWtlTWVCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zaG93UmVzZXRQYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZlNpZ25Jbikge1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25JbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWZTaWduVXApIHtcbiAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaWZTaWduVXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZVbnZlcmlmaWVkJztcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgnZmlyc3ROYW1lJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGhvbmVOdW1iZXInKS5kaXNhYmxlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93VmVyaWZ5RW1haWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZlcmlmeUVtYWlsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdmaXJzdE5hbWUnKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwb3N0U2lnbkluQ3JlZGVudGlhbHMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5sb2dpbkZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2dpbk9iaiA9IHtcbiAgICAgICAgICAgIGVtYWlsSWQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyAgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgICBmcm9tU3RyaW5nOiBgZW1haWxJZD1gICsgdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwgKyBgJnBhc3N3b3JkPWAgKyB0aGlzLmxvZ2luRm9ybS52YWx1ZS5wYXNzd29yZFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndXNlci9sb2dpbndpdGh0b3duc2NyaXB0JyxcbiAgICAgICAgICAgIGxvZ2luT2JqLCB7cGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IGhlYWRlcnN9KS5waXBlKG1hcChkYXRhID0+IChkYXRhKSkpO1xuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmRDcmVkZW50aWFscyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSB7XG4gICAgICAgICAgICBlbWFpbElkOiB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd2ZXJpZnkvc2VuZGZvcmdvdHB3ZGVtYWlsJyxcbiAgICAgICAgZm9yZ290UGFzc3dvcmQsIHsgaGVhZGVyczogaGVhZGVyc30pLnBpcGUobWFwKGRhdGEgPT4gKGRhdGEpKSk7XG4gICAgfVxuXG4gICAgcmVkaXJlY3RUb0xpc3RpbmdzID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignLycsICdfc2VsZicpO1xuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRQYXNzd29yZENyZWRlbnRpYWxzKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlc3A6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBvc3RTaWdudXBDcmVkZW50aWFscyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpZ251cE9iaiA9IHtcbiAgICAgICAgICAgIGVtYWlsSWQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5sb2dpbkZvcm0udmFsdWUuZmlyc3ROYW1lLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMucmFuZG9tU3RyaW5nKDEwLCAnJyksXG4gICAgICAgICAgICBwaG9uZTogdGhpcy5jb3JyZWN0UGhvbmVOdW1iZXIsXG4gICAgICAgICAgICB1c2VydGltZXpvbmU6IHRoaXMudXNlclRpbWV6b25lLFxuICAgICAgICAgICAgcmVDYXB0Y2hhOiB0aGlzLmNhcHRjaGFSZXNwb25zZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMubG9naW5Gb3JtLnZhbHVlLmZpcnN0TmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWxpZCcsIHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHRoaXMubG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG9uZScsIHRoaXMuY29ycmVjdFBob25lTnVtYmVyKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VydGltZXpvbmUnLCB0aGlzLnVzZXJUaW1lem9uZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmVDYXB0Y2hhJywgdGhpcy5jYXB0Y2hhUmVzcG9uc2UpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJuYW1lJywgdGhpcy5yYW5kb21TdHJpbmcoMTAsICcnKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL3JlZ2lzdGVyd2l0aHRvd25zY3JpcHR3aXRoY2FwdGNoYScsXG4gICAgICAgIGZvcm1EYXRhLCB7aGVhZGVyczogaGVhZGVycywgcmVzcG9uc2VUeXBlOiAndGV4dCd9KTtcbiAgICB9XG5cbiAgICByYW5kb21TdHJpbmcgPSAobGVuLCBhbikgPT4ge1xuICAgICAgICBhbiA9IGFuICYmIGFuLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBzdHIgPSAnJywgaSA9IDAsIG1pbiA9IGFuID09ICdhJyA/IDEwIDogMCwgbWF4ID0gYW4gPT0gJ24nID8gMTAgOiA2MjtcbiAgICAgICAgZm9yICg7IGkrKyA8IGxlbjspIHtcbiAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluIDw8IDA7XG4gICAgICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyICs9IHIgPiA5ID8gciA8IDM2ID8gNTUgOiA2MSA6IDQ4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHJlc2VuZFZlcmlmeUVtYWlsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2VuZFZlcmlmeUVtYWlsQ3JlZGVudGlhbCgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXREYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgndmVyaWZpY2F0aW9uIGVtYWlsIGhhcyBiZWVuIHNlbnQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICByZXNlbmRWZXJpZnlFbWFpbENyZWRlbnRpYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVtYWlsT2JqID0ge1xuICAgICAgICAgICAgZW1haWxJZDogdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvcmVzZW5kdmVyaWZpY2F0aW9uY29kZScsXG4gICAgICAgIGVtYWlsT2JqLCB7aGVhZGVyczogaGVhZGVyc30pLnBpcGUobWFwKGRhdGEgPT4gKGRhdGEpKSk7XG4gICAgfVxuXG4gICAgaGFzRXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICB0aGlzLnBob25lRXJyb3IgPSAhZXZlbnQ7XG4gICAgfVxuXG4gICAgdGVsSW5wdXRPYmplY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH1cblxuICAgIG9uQ291bnRyeUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0TnVtYmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgdGhpcy5jb3JyZWN0UGhvbmVOdW1iZXIgPSBldmVudDtcbiAgICB9XG5cbn1cbiJdfQ==