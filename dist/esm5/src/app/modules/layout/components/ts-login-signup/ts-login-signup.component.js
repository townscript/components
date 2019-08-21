import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../../../shared/services/api-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { DateTime } from "luxon";
import { RecaptchaComponent } from 'ng-recaptcha';
import { CookieService } from './cookie.service';
import { UserService } from '../../../../shared/services/user-service';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../../../shared/services/notification.service';
var headers = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9DTElFTlQiLCJzdWIiOiJhcGlAdG93bnNjcmlwdC5jb20iLCJhdWRpZW5jZSI6IndlYiIsImNyZWF0ZWQiOjE1NTgzMzUwNjI0MTksIlVTRVJfSUQiOjAsImV4cCI6MTU2NjExMTA2Mn0.FL9I1Rn0OtQ4eHdE1QaFtzI7WwHFPe_45p6sO4Civin_drrvp9itjvcoDHCPjz_4GeNN45mYGnHsQExVgTbHuA');
var TsLoginSignupComponent = /** @class */ (function () {
    function TsLoginSignupComponent(apiService, http, fb, cookieService, userService, notificationService, dialogRef) {
        var _this = this;
        this.apiService = apiService;
        this.http = http;
        this.fb = fb;
        this.cookieService = cookieService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.dialogRef = dialogRef;
        this.showSocial = true;
        this.show = false;
        this.showPassword = false;
        this.rdurl = 'www.tsdugout.in/marketplace';
        this.ifSignIn = false;
        this.ifUnverified = true;
        this.ifSignUp = false;
        this.showVerifyEmail = false;
        this.showResetPassword = false;
        this.CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY = '6LcAq4QUAAAAABrOnp0xwsaRk7PgnCgmE-FDcbLG';
        this.userTimezone = DateTime.local().zoneName;
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
                    _this.ifSignUp = true;
                    _this.ifSignIn = false;
                    _this.ifUnverified = false;
                    _this.showSocial = false;
                    _this.currScreen = 'ifSignUp';
                    _this.loginForm.get('firstName').enable();
                    _this.loginForm.get('password').enable();
                    _this.loginForm.get('phoneNumber').enable();
                    _this.socialLoginMsg = false;
                    _this.initializeTelInput = setTimeout(function () {
                        _this.initializeIntlTelInput();
                    }, 200);
                }
            }, function (error) {
            });
        };
        this.initializeIntlTelInput = function () {
            // initialize intl tel
            var input = document.querySelector('#phoneNumber');
            // console.log(input);
            // console.log(window);
            window.intlTelInput(input, {
                initialCountry: 'in',
                utilScripts: '../../../../../../node_modules/intl-tel-input/build/js/utils.js'
            });
        };
        this.signIn = function () {
            // alert('you have signed in');
            _this.postSignInCredentials().subscribe(function (retData) {
                var tokenData = {
                    token: (retData.data)
                };
                var userData = tslib_1.__assign({}, retData.userDetails, tokenData);
                _this.cookieService.setCookie('townscript-user', JSON.stringify(userData), 90, '/');
                // console.log(userData);
                _this.userService.updateUser(userData);
                _this.close();
                _this.notificationService.success("Congrats! You are signed in", 2000, "Dismiss");
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
                // console.log(resp);
            }, function (error) {
                // console.log(error);
            });
        };
        this.postSignupCredentials = function () {
            if (!_this.loginForm.valid) {
                return;
            }
            var input = document.querySelector('#phoneNumber');
            var iti = window.intlTelInputGlobals.getInstance(input);
            _this.correctPhoneNumber = iti.getNumber();
            if (_this.correctPhoneNumber === '') {
                return;
            }
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
                // console.log('error');
            });
        };
        this.resendVerifyEmailCredential = function () {
            var emailObj = {
                emailId: _this.loginForm.value.email
            };
            return _this.http.post(_this.apiService.API_SERVER + 'user/resendverificationcode', emailObj, { headers: headers }).pipe(map(function (data) { return (data); }));
        };
        console.log(this.userTimezone);
    }
    TsLoginSignupComponent.prototype.ngOnInit = function () {
        this.loginForm.get('firstName').disable();
        this.loginForm.get('password').disable();
        this.loginForm.get('phoneNumber').disable();
        this.currScreen = 'ifUnverified';
    };
    TsLoginSignupComponent.prototype.close = function () {
        this.dialogRef.close();
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
            template: "<section class=\"container-background flex flex-row bg-white\">\n    <div id=\"login-signup-container\" class=\"z-10 bg-white w-2/5 sm:w-1/2 p-6 m-auto md:m-2 lg:m-2\">\n        <i *ngIf=\"!ifUnverified\" (click)=\"takeMeBack()\" class=\"cursor-pointer mdi mdi-arrow-left\">arrow_back</i>\n        <app-login-top-content [condition]=\"currScreen\"></app-login-top-content>\n        <form [formGroup]=\"loginForm\" class=\"w-full max-w-sm \">\n            <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"firstName\"\n                        class=\" form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"username\"></ts-input-text>\n                </div>\n            </div>\n            <div *ngIf=\"!showVerifyEmail\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"email\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"user-email\" type=\"email\" name=\"email\" placeholder=\"Email\" autocomplete=\"user-email\"\n                        required></ts-input-text>\n                    <p class=\"text-sm text-red-500\" *ngIf=\"socialLoginMsg\">It seems you have signed up using Social\n                        Login.</p>\n                </div>\n\n            </div>\n            <div *ngIf=\"ifSignIn || ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"password\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"user-pwd\" type=\"password\" placeholder=\"Password\" autocomplete=\"current-password\">\n                    </ts-input-text>\n                </div>\n            </div>\n            <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <input type=\"tel\" value=\"phone_number\" formControlName=\"phoneNumber\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"phoneNumber\" type=\"tel\" placeholder=\"Phone no.\" autocomplete=\"user-phone\">\n\n\n                    <p class=\"text-sm text-red-500\" *ngIf=\"phoneError\">Please enter a valid Phone no.</p>\n                </div>\n            </div>\n            <div *ngIf=\"showVerifyEmail\" class=\"text-center\">\n                <img class=\"m-auto\" src=\"../../../../../assets/images/verify-email.png\">\n                <span class=\"text-sm\">Tap the link in the email we sent you at\n                    {{this.loginForm.value.email}}</span>\n            </div>\n            <div class=\"mt-5\">\n                <div *ngIf=\"ifUnverified\" class=\"w-full text-center\">\n                    <ts-button text=\"Continue\" [disabled]=\"!loginForm.valid\" (click)=\"verifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"ifSignIn\" class=\"w-full text-center\">\n                    <ts-button text=\"Signin\" [disabled]=\"!loginForm.valid\" (click)=\"signIn()\" class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"forgotPassword()\" class=\" text-sm text-center verify-email py-2 px-2\">\n                        Forgot Password?\n                    </a>\n                </div>\n                <div *ngIf=\"ifSignUp\" class=\"w-full text-center\">\n                    <ts-button text=\"Create your account\" [disabled]=\"!loginForm.valid || phoneError\"\n                        (click)=\"recaptchaRef.execute()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"showResetPassword\" class=\"md:w-full text-center\">\n                    <ts-button text=\"Send Reset Password Link\" [disabled]=\"!loginForm.valid\" (click)=\"resetPassword()\"\n                        class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"resetPassword()\" class=\" text-sm text-center resend-email py-2 px-2\">\n                        Resend Email\n                    </a>\n                </div>\n                <div *ngIf=\"showVerifyEmail\" class=\"md:w-full text-center py-2 my-2 \">\n                    <ts-button text=\"Resend Verification Email\" [disabled]=\"!loginForm.valid\"\n                        (click)=\"resendVerifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                    <a class=\" text-sm text-center resend-email py-2 px-2\">\n                        Why verify?\n                    </a>\n                </div>\n                <!-- <p class=\"text-sm\">\n                    Form Value: {{ loginForm.value | json }}\n                </p>\n                <p class=\"text-sm\">\n                    Form Status: {{ loginForm.status }}\n                </p> -->\n\n            </div>\n            <div class=\"form-group\">\n                <re-captcha #recaptchaRef=\"reCaptcha\" (resolved)=\"resolveAndProceed($event)\"\n                    siteKey={{CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY}} size=\"invisible\"></re-captcha>\n            </div>\n        </form>\n        <section id=\"social-signin-container\" *ngIf=\"showSocial\">\n            <div class=\"strike-through strike-through-margin\">\n                <span>\n                    <strong class=\"or-text\">or</strong>\n                </span>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row leading-loose border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithGoogle()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Google\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img src=\"../../../../../assets/images/google-min.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Google</span>\n                    </div>\n                </button>\n                <p class=\"form-control--error\" ng-if=\"googleError.length\" ng-bind=\"googleError\"></p>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row leading-loose border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithFB()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Facebook\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img\n                            src=\"https://s3.ap-southeast-1.amazonaws.com/common-resources/assets/facebook-min-new.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Facebook</span>\n                    </div>\n                </button>\n                <ng-container class=\"login-error\" ng-if=\"fbError.length\">\n                    <i class=\"ion-android-alert\"></i>\n                    <p class=\"form-control--error\" ng-bind=\"fbError\"></p>\n                </ng-container>\n            </div>\n        </section>\n        <div *ngIf=\"ifSignUp\" class=\"agreement my-2 px-2\">\n            <div class=\"w-full hor-linear-grad m-2\"></div>\n            <p class=\"text-xs text-center\">By continuing, you agree to Townscript's <a class=\"text-blue-700\"\n                    href=\"/terms-and-conditions\">terms of service</a> and <a class=\"text-blue-700\"\n                    href=\"/privacy-policy\">privacy policy</a>.</p>\n        </div>\n    </div>\n    <div class=\"p-6 hidden md:block\">\n        <div class=\"flex flex-col mt-8\">\n            <span class=\"text-2xl w-2/3 whitespace-no-wrap mb-4 text-gray-900\">\n                <strong>301,589 event organizers trust us.</strong>\n            </span>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Quick and easy event creation</p>\n                    <p class=\"text-sm text-gray-600\">Create your event page, it is easy and customizable.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Start selling tickets within minutes.</p>\n                    <p class=\"text-sm text-gray-600\">Link your bank account, verify identity details and start selling\n                        instantly.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Simple Integration with your website.</p>\n                    <p class=\"text-sm text-gray-600\">Easy to start selling tickets directly from your website and\n                        facebook without developers.</p>\n                </span>\n            </div>\n        </div>\n    </div>\n\n</section>",
            styles: [".container-background::before{color:#fff;background:url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'  preserveAspectRatio='none'><polygon points='0,110 0,50 300,0 300,300' width='100%' height='100%' style='fill:blue;'/></svg>\") 0 0/contain;width:30%;font-size:2em;padding:4px 40px}.strike-through-margin{margin:30px 0;text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em}.strike-through-margin span{background-color:#fff;padding:3px 30px}.strike-through{text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em;margin:30px auto}.strike-through span{background-color:#fff;padding:3px 30px}.hor-linear-grad{border:1px solid;border-left:0;border-right:0;-webkit-border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));-webkit-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);-o-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image-slice:1}.iti__flag{background-image:url(../../../../../../node_modules/intl-tel-input/build/img/flags.png)}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.iti__flag{background-image:url(../../../../../../node_modules/intl-tel-input/build/img/flags@2x.png)}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService,
            HttpClient,
            FormBuilder,
            CookieService,
            UserService,
            NotificationService,
            MatDialogRef])
    ], TsLoginSignupComponent);
    return TsLoginSignupComponent;
}());
export { TsLoginSignupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV2RixJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsNlFBQTZRLENBQUMsQ0FBQztBQU90VTtJQTZCSSxnQ0FBbUIsVUFBc0IsRUFDN0IsSUFBZ0IsRUFDaEIsRUFBZSxFQUNmLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN6QyxTQUErQztRQU4xRCxpQkFTQztRQVRrQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzdCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDekMsY0FBUyxHQUFULFNBQVMsQ0FBc0M7UUEvQjFELGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFVBQUssR0FBRyw2QkFBNkIsQ0FBQztRQUN0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRTFCLHVDQUFrQyxHQUFHLDBDQUEwQyxDQUFDO1FBQ2hGLGlCQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxjQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDekMsQ0FBQyxDQUFDO1FBQ0gsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFFckIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUE4QnZCLGFBQVEsR0FBRztZQUNQLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLENBQUMsQ0FBQTtRQUVELGtCQUFhLEdBQUc7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyw4QkFBOEI7Z0JBQzlFLENBQUMsS0FBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUE7UUFFRCxzQkFBaUIsR0FBRztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyw0QkFBNEI7Z0JBQzVFLENBQUMsS0FBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUE7UUFFRCwyQkFBc0IsR0FBRztZQUNyQixJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNyRixPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLDJCQUEyQixFQUN6RSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEVBQU4sQ0FBTSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUE7UUFFRCxnQkFBVyxHQUFHO1lBQ1YsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsU0FBUyxDQUNuQyxVQUFDLE9BQVk7Z0JBQ1QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTtvQkFDN0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3hDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7aUJBQy9CO3FCQUFNLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxjQUFjLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO29CQUNyRSxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztpQkFDOUI7cUJBQU07b0JBQ0gsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN0QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO29CQUM3QixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDekMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3hDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMzQyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDNUIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQzt3QkFDakMsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7b0JBQ2xDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDWDtZQUNMLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDTixDQUFDLENBQ0osQ0FBQztRQUVOLENBQUMsQ0FBQTtRQUVELDJCQUFzQixHQUFHO1lBQ3JCLHNCQUFzQjtZQUN0QixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JELHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDakIsTUFBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7Z0JBQzlCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixXQUFXLEVBQUUsaUVBQWlFO2FBQ2pGLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQTtRQUVELFdBQU0sR0FBRztZQUNMLCtCQUErQjtZQUMvQixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxTQUFTLENBQ2xDLFVBQUMsT0FBWTtnQkFDVCxJQUFNLFNBQVMsR0FBRztvQkFDZCxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2lCQUN4QixDQUFDO2dCQUVGLElBQU0sUUFBUSx3QkFBUSxPQUFPLENBQUMsV0FBVyxFQUFLLFNBQVMsQ0FBRSxDQUFDO2dCQUMxRCxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkYseUJBQXlCO2dCQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNqRixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUM5QixDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ04sQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQUE7UUFFRCxXQUFNLEdBQUc7WUFDTCxJQUFNLElBQUksR0FBRyxLQUFJLENBQUM7WUFDbEIsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQUc7WUFDYixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUM7UUFDMUMsQ0FBQyxDQUFBO1FBRUQsZUFBVSxHQUFHO1lBQ1QsSUFBSSxLQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3hCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7YUFDcEM7aUJBQU0sSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN0QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztnQkFDL0IsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7YUFDcEM7aUJBQU0sSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN0QixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQztnQkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQztpQkFBTSxJQUFJLEtBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3pDLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM1QyxLQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQzthQUNwQztRQUVMLENBQUMsQ0FBQTtRQUVELDBCQUFxQixHQUFHO1lBQ3BCLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtnQkFDdkIsT0FBTzthQUNWO1lBQ0QsSUFBTSxRQUFRLEdBQUc7Z0JBQ2IsT0FBTyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQ25DLFFBQVEsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRO2FBQzFDLENBQUM7WUFDRixJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQztnQkFDMUIsVUFBVSxFQUFFLFVBQVUsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsWUFBWSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDckcsQ0FBQyxDQUFDO1lBRUgsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsRUFDekUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsRUFBTixDQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQTtRQUVELDZCQUF3QixHQUFHO1lBQ3ZCLElBQU0sY0FBYyxHQUFHO2dCQUNuQixPQUFPLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSzthQUN0QyxDQUFDO1lBRUYsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsRUFDMUUsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEVBQU4sQ0FBTSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUE7UUFFRCx1QkFBa0IsR0FBRztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUE7UUFFRCxrQkFBYSxHQUFHO1lBQ1osS0FBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsU0FBUyxDQUNyQyxVQUFDLElBQVM7Z0JBQ04scUJBQXFCO1lBQ3pCLENBQUMsRUFDRCxVQUFDLEtBQVU7Z0JBQ1Asc0JBQXNCO1lBQzFCLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUFBO1FBRUQsMEJBQXFCLEdBQUc7WUFDcEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUN2QixPQUFPO2FBQ1Y7WUFDRCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JELElBQU0sR0FBRyxHQUFTLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUUxQyxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsS0FBSyxFQUFFLEVBQUU7Z0JBQ2hDLE9BQU87YUFDVjtZQUVELElBQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDaEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuRCxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsd0NBQXdDLEVBQ3ZGLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFBO1FBRUQsaUJBQVksR0FBRyxVQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ25CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDekUsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUc7Z0JBQ2YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDbEU7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUMsQ0FBQTtRQUVELHNCQUFpQixHQUFHO1lBQ2hCLEtBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLFNBQVMsQ0FDeEMsVUFBQyxPQUFZO2dCQUNULEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQzlDLENBQUMsRUFDRCxVQUFDLEtBQVU7Z0JBQ1Asd0JBQXdCO1lBQzVCLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUFBO1FBQ0QsZ0NBQTJCLEdBQUc7WUFDMUIsSUFBTSxRQUFRLEdBQUc7Z0JBQ2IsT0FBTyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUs7YUFDdEMsQ0FBQztZQUNGLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsNkJBQTZCLEVBQzVFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLElBQUksQ0FBQyxFQUFOLENBQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFBO1FBelBHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7SUFFckMsQ0FBQztJQUVELHNDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTSxrREFBaUIsR0FBeEIsVUFBeUIsZUFBdUI7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFuREQ7UUFEQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7MENBQzFDLGtCQUFrQjtnRUFBQztJQUh4QixzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQiwyMFRBQStDOztTQUVsRCxDQUFDO2lEQThCaUMsVUFBVTtZQUN2QixVQUFVO1lBQ1osV0FBVztZQUNBLGFBQWE7WUFDZixXQUFXO1lBQ0gsbUJBQW1CO1lBQzlCLFlBQVk7T0FuQ3pCLHNCQUFzQixDQWdTbEM7SUFBRCw2QkFBQztDQUFBLEFBaFNELElBZ1NDO1NBaFNZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5pbXBvcnQgeyBSZWNhcHRjaGFDb21wb25lbnQgfSBmcm9tICduZy1yZWNhcHRjaGEnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4vY29va2llLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci1zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQXV0aG9yaXphdGlvbicsICdleUpoYkdjaU9pSklVelV4TWlKOS5leUpTVDB4Rklqb2lVazlNUlY5RFRFbEZUbFFpTENKemRXSWlPaUpoY0dsQWRHOTNibk5qY21sd2RDNWpiMjBpTENKaGRXUnBaVzVqWlNJNkluZGxZaUlzSW1OeVpXRjBaV1FpT2pFMU5UZ3pNelV3TmpJME1Ua3NJbFZUUlZKZlNVUWlPakFzSW1WNGNDSTZNVFUyTmpFeE1UQTJNbjAuRkw5STFSbjBPdFE0ZUhkRTFRYUZ0ekk3V3dIRlBlXzQ1cDZzTzRDaXZpbl9kcnJ2cDlpdGp2Y29ESENQanpfNEdlTk40NW1ZR25Ic1FFeFZnVGJIdUEnKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtdHMtbG9naW4tc2lnbnVwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90cy1sb2dpbi1zaWdudXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUc0xvZ2luU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvLyBAVmlld0NoaWxkKFJlY2FwdGNoYUNvbXBvbmVudCwgeyByZWFkOiB0cnVlLCBzdGF0aWM6IHRydWUgfSkgcmVjYXB0Y2hhOiBSZWNhcHRjaGFDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZCgncmVjYXB0Y2hhUmVmJywgeyByZWFkOiB0cnVlLCBzdGF0aWM6IHRydWUgfSlcbiAgICByZWNhcHRjaGFSZWY6IFJlY2FwdGNoYUNvbXBvbmVudDtcbiAgICBzaG93U29jaWFsID0gdHJ1ZTtcbiAgICBzaG93ID0gZmFsc2U7XG4gICAgc2hvd1Bhc3N3b3JkID0gZmFsc2U7XG4gICAgcmR1cmwgPSAnd3d3LnRzZHVnb3V0LmluL21hcmtldHBsYWNlJztcbiAgICBpZlNpZ25JbiA9IGZhbHNlO1xuICAgIGlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgaWZTaWduVXAgPSBmYWxzZTtcbiAgICBzaG93VmVyaWZ5RW1haWwgPSBmYWxzZTtcbiAgICBzaG93UmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuICAgIGlzVXNlclZlcmlmaWVkOiBhbnk7XG4gICAgQ0FQVENIQV9TSVRFX0lOVklTSUJMRV9DQVBUQ0hBX0tFWSA9ICc2TGNBcTRRVUFBQUFBQnJPbnAweHdzYVJrN1BnbkNnbUUtRkRjYkxHJztcbiAgICB1c2VyVGltZXpvbmUgPSBEYXRlVGltZS5sb2NhbCgpLnpvbmVOYW1lO1xuICAgIGxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICBjYXB0Y2hhUmVzcG9uc2UgPSAnJztcbiAgICBjdXJyU2NyZWVuOiBzdHJpbmc7XG4gICAgY29ycmVjdFBob25lTnVtYmVyID0gbnVsbDtcbiAgICBwaG9uZUVycm9yID0gZmFsc2U7XG4gICAgc29jaWFsTG9naW5Nc2cgPSBmYWxzZTtcbiAgICBpbml0aWFsaXplVGVsSW5wdXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VHNMb2dpblNpZ251cENvbXBvbmVudD4sXG4gICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlclRpbWV6b25lKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdmaXJzdE5hbWUnKS5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGhvbmVOdW1iZXInKS5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuXG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuICAgIHB1YmxpYyByZXNvbHZlQW5kUHJvY2VlZChjYXB0Y2hhUmVzcG9uc2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhcHRjaGFSZXNwb25zZSA9IGNhcHRjaGFSZXNwb25zZTtcbiAgICAgICAgdGhpcy5zaWdudXAoKTtcbiAgICB9XG5cbiAgICBwYXNzd29yZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB9XG5cbiAgICBvbkxvZ2luV2l0aEZCID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly8nICsgdGhpcy5hcGlTZXJ2aWNlLmhvc3ROYW1lICsgJy9hcGkvdXNlci9zaWduaW53aXRoZmFjZWJvb2snICtcbiAgICAgICAgICAgICh0aGlzLnJkdXJsID09PSB1bmRlZmluZWQgPyAnJyA6ICc/cmR1cmw9JyArIHRoaXMucmR1cmwpLCAnX3NlbGYnKTtcbiAgICB9XG5cbiAgICBvbkxvZ2luV2l0aEdvb2dsZSA9ICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vJyArIHRoaXMuYXBpU2VydmljZS5ob3N0TmFtZSArICcvYXBpL3VzZXIvc2lnbmlud2l0aGdvb2dsZScgK1xuICAgICAgICAgICAgKHRoaXMucmR1cmwgPT09IHVuZGVmaW5lZCA/ICcnIDogJz9yZHVybD0nICsgdGhpcy5yZHVybCksICdfc2VsZicpO1xuICAgIH1cblxuICAgIGdldEVtYWlsVmVyaWZ5UmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbVN0cmluZzogYGVtYWlsPWAgKyB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndXNlci9nZXR1c2Vyc2lnbnVwZGV0YWlscycsXG4gICAgICAgICAgICB7IHBhcmFtczogcGFyYW1zLCBoZWFkZXJzOiBoZWFkZXJzIH0pLnBpcGUobWFwKGRhdGEgPT4gKGRhdGEpKSk7XG4gICAgfVxuXG4gICAgdmVyaWZ5RW1haWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0RW1haWxWZXJpZnlSZXNwb25zZSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXREYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gSlNPTi5wYXJzZShyZXREYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdEYXRhICYmIG5ld0RhdGEuaXNFeGlzdGluZ1VzZXIgJiYgbmV3RGF0YS5pc01hbnVhbFNpZ251cCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZTaWduSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZTaWduSW4nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2lhbExvZ2luTXNnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdEYXRhICYmIG5ld0RhdGEuaXNFeGlzdGluZ1VzZXIgJiYgIW5ld0RhdGEuaXNNYW51YWxTaWdudXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxMb2dpbk1zZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZTaWduSW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlNpZ25VcCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgnZmlyc3ROYW1lJykuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2lhbExvZ2luTXNnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRlbElucHV0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVJbnRsVGVsSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBpbml0aWFsaXplSW50bFRlbElucHV0ID0gKCkgPT4ge1xuICAgICAgICAvLyBpbml0aWFsaXplIGludGwgdGVsXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lTnVtYmVyJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93KTtcbiAgICAgICAgKDxhbnk+d2luZG93KS5pbnRsVGVsSW5wdXQoaW5wdXQsIHtcbiAgICAgICAgICAgIGluaXRpYWxDb3VudHJ5OiAnaW4nLFxuICAgICAgICAgICAgdXRpbFNjcmlwdHM6ICcuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaW50bC10ZWwtaW5wdXQvYnVpbGQvanMvdXRpbHMuanMnXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc2lnbkluID0gKCkgPT4ge1xuICAgICAgICAvLyBhbGVydCgneW91IGhhdmUgc2lnbmVkIGluJyk7XG4gICAgICAgIHRoaXMucG9zdFNpZ25JbkNyZWRlbnRpYWxzKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJldERhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IChyZXREYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0geyAuLi5yZXREYXRhLnVzZXJEZXRhaWxzLCAuLi50b2tlbkRhdGEgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0Q29va2llKCd0b3duc2NyaXB0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIDkwLCAnLycpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIodXNlckRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2VzcyhcIkNvbmdyYXRzISBZb3UgYXJlIHNpZ25lZCBpblwiLCAyMDAwLCBcIkRpc21pc3NcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvTGlzdGluZ3MoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaWdudXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvc3RTaWdudXBDcmVkZW50aWFscygpLnRvUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHNlbGYuc2hvd1ZlcmlmeUVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuc2hvd1NvY2lhbCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5jdXJyU2NyZWVuID0gJ3Nob3dWZXJpZnlFbWFpbCc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvcmdvdFBhc3N3b3JkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93U29jaWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWZTaWduSW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ3Nob3dSZXNldFBhc3N3b3JkJztcbiAgICB9XG5cbiAgICB0YWtlTWVCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zaG93UmVzZXRQYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZlNpZ25Jbikge1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25JbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWZTaWduVXApIHtcbiAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaWZTaWduVXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZVbnZlcmlmaWVkJztcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgnZmlyc3ROYW1lJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGhvbmVOdW1iZXInKS5kaXNhYmxlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93VmVyaWZ5RW1haWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZlcmlmeUVtYWlsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdmaXJzdE5hbWUnKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwb3N0U2lnbkluQ3JlZGVudGlhbHMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5sb2dpbkZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2dpbk9iaiA9IHtcbiAgICAgICAgICAgIGVtYWlsSWQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICAgIGZyb21TdHJpbmc6IGBlbWFpbElkPWAgKyB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbCArIGAmcGFzc3dvcmQ9YCArIHRoaXMubG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL2xvZ2lud2l0aHRvd25zY3JpcHQnLFxuICAgICAgICAgICAgbG9naW5PYmosIHsgcGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShtYXAoZGF0YSA9PiAoZGF0YSkpKTtcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkQ3JlZGVudGlhbHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0ge1xuICAgICAgICAgICAgZW1haWxJZDogdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndmVyaWZ5L3NlbmRmb3Jnb3Rwd2RlbWFpbCcsXG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pLnBpcGUobWFwKGRhdGEgPT4gKGRhdGEpKSk7XG4gICAgfVxuXG4gICAgcmVkaXJlY3RUb0xpc3RpbmdzID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignLycsICdfc2VsZicpO1xuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRQYXNzd29yZENyZWRlbnRpYWxzKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlc3A6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBvc3RTaWdudXBDcmVkZW50aWFscyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lTnVtYmVyJyk7XG4gICAgICAgIGNvbnN0IGl0aSA9ICg8YW55PndpbmRvdykuaW50bFRlbElucHV0R2xvYmFscy5nZXRJbnN0YW5jZShpbnB1dCk7XG4gICAgICAgIHRoaXMuY29ycmVjdFBob25lTnVtYmVyID0gaXRpLmdldE51bWJlcigpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvcnJlY3RQaG9uZU51bWJlciA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMubG9naW5Gb3JtLnZhbHVlLmZpcnN0TmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWxpZCcsIHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHRoaXMubG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG9uZScsIHRoaXMuY29ycmVjdFBob25lTnVtYmVyKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VydGltZXpvbmUnLCB0aGlzLnVzZXJUaW1lem9uZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmVDYXB0Y2hhJywgdGhpcy5jYXB0Y2hhUmVzcG9uc2UpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJuYW1lJywgdGhpcy5yYW5kb21TdHJpbmcoMTAsICcnKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL3JlZ2lzdGVyd2l0aHRvd25zY3JpcHR3aXRoY2FwdGNoYScsXG4gICAgICAgICAgICBmb3JtRGF0YSwgeyBoZWFkZXJzOiBoZWFkZXJzLCByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KTtcbiAgICB9XG5cbiAgICByYW5kb21TdHJpbmcgPSAobGVuLCBhbikgPT4ge1xuICAgICAgICBhbiA9IGFuICYmIGFuLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBzdHIgPSAnJywgaSA9IDAsIG1pbiA9IGFuID09ICdhJyA/IDEwIDogMCwgbWF4ID0gYW4gPT0gJ24nID8gMTAgOiA2MjtcbiAgICAgICAgZm9yICg7IGkrKyA8IGxlbjspIHtcbiAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluIDw8IDA7XG4gICAgICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyICs9IHIgPiA5ID8gciA8IDM2ID8gNTUgOiA2MSA6IDQ4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHJlc2VuZFZlcmlmeUVtYWlsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2VuZFZlcmlmeUVtYWlsQ3JlZGVudGlhbCgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXREYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgndmVyaWZpY2F0aW9uIGVtYWlsIGhhcyBiZWVuIHNlbnQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICByZXNlbmRWZXJpZnlFbWFpbENyZWRlbnRpYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVtYWlsT2JqID0ge1xuICAgICAgICAgICAgZW1haWxJZDogdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvcmVzZW5kdmVyaWZpY2F0aW9uY29kZScsXG4gICAgICAgICAgICBlbWFpbE9iaiwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pLnBpcGUobWFwKGRhdGEgPT4gKGRhdGEpKSk7XG4gICAgfVxuXG59Il19