import * as tslib_1 from "tslib";
import { Component, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { ApiService } from '../../../shared/services/api-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { RecaptchaComponent } from 'ng-recaptcha';
import { CookieService } from '../../../core/cookie.service';
import { UserService } from '../../../shared/services/user-service';
import { NotificationService } from '../../../shared/services/notification.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
var headers = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9VU0VSIiwic3ViIjoidGVzdGluZ0B0b3duc2NyaXB0LmNvbSIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTU2NjkwODg0NjE2MCwiVVNFUl9JRCI6NDkwNiwiZXhwIjoxNTc0Njg0ODQ2fQ.ge-O16ZPw9wHvjoJrmTKbJRhfOkvAdI57N_YBZ5yr_IwymKOhPAyQpD8vHxIqhJGJ4tfJ_jez4xh3vQoWwngZw');
var TsLoginSignupComponent = /** @class */ (function () {
    function TsLoginSignupComponent(apiService, http, fb, cookieService, userService, notificationService) {
        var _this = this;
        this.apiService = apiService;
        this.http = http;
        this.fb = fb;
        this.cookieService = cookieService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.closeDialog = new EventEmitter();
        this.showSocial = true;
        this.show = false;
        this.showPassword = false;
        this.rdurl = 'http://' + this.apiService.betaHostName + '/marketplace';
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
            var url = 'http://' + _this.apiService.betaHostName + '/api/user/signinwithfacebook' +
                (_this.rdurl === undefined ? '' : '?rdurl=' + _this.rdurl);
            window.open(url, '_self');
        };
        this.onLoginWithGoogle = function () {
            var url = 'http://' + _this.apiService.betaHostName + '/api/user/signinwithgoogle' +
                (_this.rdurl === undefined ? '' : '?rdurl=' + _this.rdurl);
            window.open(url, '_self');
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
                _this.userService.updateUser(userData);
                _this.cookieService.setCookie('townscript-user', JSON.stringify(userData), 90);
                _this.notificationService.success('Congrats! You are signed in', 2000, 'Dismiss');
                if (_this.mode === 'dialog') {
                    _this.close();
                }
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
            formData.append('rdurl', _this.rdurl);
            return _this.http.post(_this.apiService.API_SERVER + 'user/registerwithtownscriptwithcaptcha', formData, { headers: headers, responseType: 'text' });
        };
        this.randomString = function (len, an) {
            an = an && an.toLowerCase();
            var str = '', i = 0;
            var min = an === 'a' ? 10 : 0;
            var max = an === 'n' ? 10 : 62;
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
            var formData = new FormData();
            formData.append('rdurl', _this.rdurl);
            formData.append('emailid', _this.loginForm.value.email);
            return _this.http.post(_this.apiService.API_SERVER + 'user/resendverificationcode', formData, { headers: headers }).pipe(map(function (data) { return (data); }));
        };
    }
    TsLoginSignupComponent.prototype.ngOnInit = function () {
        this.loginForm.get('firstName').disable();
        this.loginForm.get('password').disable();
        this.loginForm.get('phoneNumber').disable();
        this.currScreen = 'ifUnverified';
    };
    TsLoginSignupComponent.prototype.close = function () {
        this.closeDialog.emit(true);
    };
    TsLoginSignupComponent.prototype.resolveAndProceed = function (captchaResponse) {
        this.captchaResponse = captchaResponse;
        this.signup();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TsLoginSignupComponent.prototype, "mode", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TsLoginSignupComponent.prototype, "closeDialog", void 0);
    tslib_1.__decorate([
        ViewChild('recaptchaRef', { read: true, static: true }),
        tslib_1.__metadata("design:type", RecaptchaComponent)
    ], TsLoginSignupComponent.prototype, "recaptchaRef", void 0);
    TsLoginSignupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ts-login-signup',
            template: "<section *ngIf=\"mode==='dialog'\" class=\"text-right\">\n    <i class=\"cursor-pointer mdi mdi-close text-2xl\" (click)=\"close()\"></i>\n</section>\n<section [ngClass]=\"(mode=='dialog') ?\n            ' bg-white container-background flex flex-row m-auto overflow:hidden'\n            :' flex flex-row m-auto overflow:hidden'\">\n    <div id=\"login-signup-container\" [ngClass]=\"(mode=='dialog') ? 'z-10 bg-white w-full p-6 m-auto md:m-2 lg:m-2'\n            : 'login-card-box z-10 bg-white max-w-sm w-full p-10'\">\n        <i *ngIf=\"!ifUnverified\" (click)=\"takeMeBack()\" class=\"cursor-pointer text-3xl mdi mdi-arrow-left\"></i>\n        <app-login-top-content [condition]=\"currScreen\"></app-login-top-content>\n        <form id=\"formId\" [formGroup]=\"loginForm\" class=\"w-full\">\n            <div [@in-out-animate] *ngIf=\"!showVerifyEmail\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"email\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"user-email\" type=\"email\" name=\"email\" placeholder=\"Email\" autocomplete=\"user-email\"\n                        required></ts-input-text>\n                    <p class=\"text-sm text-red-500\" *ngIf=\"socialLoginMsg\">It seems you have signed up using Social\n                        Login.</p>\n                </div>\n\n            </div>\n            <div [@EnterLeave]=\"'flyIn'\">\n                <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                    <div class=\"md:w-full\">\n                        <ts-input-text formControlName=\"firstName\"\n                            class=\" form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                            id=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"username\"></ts-input-text>\n                    </div>\n                </div>\n                <div  *ngIf=\"ifSignIn || ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                    <div class=\"md:w-full\">\n                        <ts-input-text formControlName=\"password\" appPassword\n                            class=\"form-control bg-white border-gray-500 rounded py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                            id=\"user-pwd\" [type]=\"'password'\" placeholder=\"Password\" autocomplete=\"current-password\">\n                        </ts-input-text>\n                    </div>\n                </div>\n                <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                    <div class=\"md:w-full\">\n                        <input type=\"tel\" value=\"phone_number\" formControlName=\"phoneNumber\"\n                            class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                            id=\"phoneNumber\" type=\"tel\" placeholder=\"Phone no.\" autocomplete=\"user-phone\">\n\n\n                        <p class=\"text-sm text-red-500\" *ngIf=\"phoneError\">Please enter a valid Phone no.</p>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"showVerifyEmail\" class=\"text-center\">\n                <img class=\"m-auto\" src=\"../../../../../assets/images/verify-email.png\">\n                <span class=\"text-sm\">Tap the link in the email we sent you at\n                    {{this.loginForm.value.email}}</span>\n            </div>\n            <div class=\"mt-5\">\n                <div [@btn-animate] *ngIf=\"ifUnverified\" class=\"w-full text-center\">\n                    <ts-button text=\"Continue\" [disabled]=\"!loginForm.valid\" (click)=\"verifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"ifSignIn\" class=\"w-full text-center\" >\n                    <ts-button text=\"Sign in\" [disabled]=\"!loginForm.valid\" (click)=\"signIn()\" class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"forgotPassword()\" class=\" text-sm text-center verify-email py-2 px-2\">\n                        Forgot Password?\n                    </a>\n                </div>\n                <div [@btn-animate] *ngIf=\"ifSignUp\" class=\"w-full text-center\">\n                    <ts-button text=\"Create your account\" [disabled]=\"!loginForm.valid || phoneError\"\n                        (click)=\"recaptchaRef.execute()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"showResetPassword\" class=\"md:w-full text-center\">\n                    <ts-button text=\"Send Reset Password Link\" [disabled]=\"!loginForm.valid\" (click)=\"resetPassword()\"\n                        class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"resetPassword()\" class=\" text-sm text-center resend-email py-2 px-2\">\n                        Resend Email\n                    </a>\n                </div>\n                <div *ngIf=\"showVerifyEmail\" class=\"md:w-full text-center py-2 my-2 \">\n                    <ts-button text=\"Resend Verification Email\" [disabled]=\"!loginForm.valid\"\n                        (click)=\"resendVerifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                    <a class=\" text-sm text-center resend-email py-2 px-2\">\n                        Why verify?\n                    </a>\n                </div>\n\n            </div>\n            <div class=\"form-group\">\n                <re-captcha #recaptchaRef=\"reCaptcha\" (resolved)=\"resolveAndProceed($event)\"\n                    siteKey={{CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY}} size=\"invisible\"></re-captcha>\n            </div>\n        </form>\n        <section id=\"social-signin-container\" *ngIf=\"showSocial\">\n            <div class=\"strike-through strike-through-margin\">\n                <span>\n                    <strong class=\"or-text\">or</strong>\n                </span>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithGoogle()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Google\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\" matRipple>\n                        <img  class=\"logo\" \n                            src=\"https://townscript-common-resources.s3.ap-south-1.amazonaws.com/google-min.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Google</span>\n                    </div>\n                </button>\n                <p class=\"form-control--error\" ng-if=\"googleError.length\" ng-bind=\"googleError\"></p>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithFB()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Facebook\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img class=\"logo\"\n                            src=\"https://townscript-common-resources.s3.ap-south-1.amazonaws.com/facebook-min.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Facebook</span>\n                    </div>\n                </button>\n                <ng-container class=\"login-error\" ng-if=\"fbError.length\">\n                    <i class=\"ion-android-alert\"></i>\n                    <p class=\"form-control--error\" ng-bind=\"fbError\"></p>\n                </ng-container>\n            </div>\n        </section>\n        <div *ngIf=\"ifUnverified ||  ifSignUp\" class=\"agreement my-2 px-2\">\n            <div class=\"w-full hor-linear-grad m-4\"></div>\n            <p class=\"text-xs text-center\">By continuing, you agree to Townscript's <a class=\"text-blue-700\"\n                    href=\"/terms-and-conditions\">terms of service</a> and <a class=\"text-blue-700\"\n                    href=\"/privacy-policy\">privacy policy</a>.</p>\n        </div>\n    </div>\n    <div [ngClass]=\"(mode=='dialog') ? 'hidden' : 'ml-20 p-6 hidden md:block'\">\n        <div class=\"flex flex-col mt-4\">\n            <span class=\"text-2xl w-2/3 mb-4 text-gray-900\">\n                <strong>301,589 event organizers trust us.</strong>\n            </span>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Quick and easy event creation</p>\n                    <p class=\"text-sm text-gray-600\">Create your event page, it is easy and customizable.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Start selling tickets within minutes.</p>\n                    <p class=\"text-sm text-gray-600\">Link your bank account, verify identity details and start selling\n                        instantly.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Simple Integration with your website.</p>\n                    <p class=\"text-sm text-gray-600\">Easy to start selling tickets directly from your website and\n                        facebook without developers.</p>\n                </span>\n            </div>\n        </div>\n    </div>\n\n</section>",
            animations: [
                trigger('btn-animate', [
                    transition('void => *', [
                        animate('1s ease', style({ opacity: 1 })),
                    ]),
                    transition('* => void', [
                        animate('1s ease', style({ opacity: 0, height: '0' }))
                    ])
                ]),
                trigger('in-out-animate', [
                    transition('void => *', [
                        style({ opacity: 0.2 }),
                        animate('1s ease', style({ opacity: 1 })),
                    ]),
                    transition('* => void', [
                        style({ opacity: 0.6 }),
                        animate('1s ease', style({ opacity: 0, height: '0' }))
                    ])
                ]),
                trigger('EnterLeave', [
                    state('flyIn', style({ transform: 'translateY(0)' })),
                    transition(':enter', [
                        style({ transform: 'translateY(0%)' }),
                        animate('1s ease-in-out')
                    ]),
                    transition(':leave', [
                        animate('.5s ease', style({ transform: 'translateY(-70%)', opacity: '0', height: 0 }))
                    ])
                ])
            ],
            styles: [".container-background::before{color:#fff;background:url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'  preserveAspectRatio='none'><polygon points='0,110 0,50 300,0 300,300' width='100%' height='100%' style='fill:blue;'/></svg>\") 0 0/contain;width:30%;font-size:2em;padding:4px 40px}.strike-through-margin{margin:30px 0;text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em}.strike-through-margin span{background-color:#fff;padding:3px 30px}.strike-through{text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em;margin:30px auto}.strike-through span{background-color:#fff;padding:3px 30px}.hor-linear-grad{border:1px solid;border-left:0;border-right:0;-webkit-border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));-webkit-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);-o-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image-slice:1}.iti__flag{background-image:url(../../../../../node_modules/intl-tel-input/build/img/flags.png)}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.iti__flag{background-image:url(../../../../../node_modules/intl-tel-input/build/img/flags@2x.png)}}#social-signin-container .logo{width:22px;height:22px}.mkt-content{background-color:#f1f1f1}.login-card-box{box-shadow:0 0 8px rgba(0,0,0,.25);border-radius:5px;max-width:460px}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService,
            HttpClient,
            FormBuilder,
            CookieService,
            UserService,
            NotificationService])
    ], TsLoginSignupComponent);
    return TsLoginSignupComponent;
}());
export { TsLoginSignupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbG9naW5TaWdudXAvdHMtbG9naW4tc2lnbnVwL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUF3QyxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUNqQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGLElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxvUkFBb1IsQ0FBQyxDQUFDO0FBcUM3VTtJQThCSSxnQ0FBbUIsVUFBc0IsRUFDN0IsSUFB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QUNqQixLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDdEMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO3FCQUM1QixDQUFDO29CQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3pGLENBQUM7aUJBQ0wsQ0FBQzthQUNMOztTQUNKLENBQUM7aURBK0JpQyxVQUFVO1lBQ3ZCLFVBQVU7WUFDWixXQUFXO1lBQ0EsYUFBYTtZQUNmLFdBQVc7WUFDSCxtQkFBbUI7T0FuQzNDLHNCQUFzQixDQW9TbEM7SUFBRCw2QkFBQztDQUFBLEFBcFNELElBb1NDO1NBcFNZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgybVTV0lUQ0hfQ09NUElMRV9ESVJFQ1RJVkVfX1BPU1RfUjNfXyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XG5pbXBvcnQgeyBSZWNhcHRjaGFDb21wb25lbnQgfSBmcm9tICduZy1yZWNhcHRjaGEnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY29va2llLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci1zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0F1dGhvcml6YXRpb24nLCAnZXlKaGJHY2lPaUpJVXpVeE1pSjkuZXlKU1QweEZJam9pVWs5TVJWOVZVMFZTSWl3aWMzVmlJam9pZEdWemRHbHVaMEIwYjNkdWMyTnlhWEIwTG1OdmJTSXNJbUYxWkdsbGJtTmxJam9pZDJWaUlpd2lZM0psWVhSbFpDSTZNVFUyTmprd09EZzBOakUyTUN3aVZWTkZVbDlKUkNJNk5Ea3dOaXdpWlhod0lqb3hOVGMwTmpnME9EUTJmUS5nZS1PMTZaUHc5d0h2am9Kcm1US2JKUmhmT2t2QWRJNTdOX1lCWjV5cl9Jd3ltS09oUEF5UXBEOHZIeElxaEpHSjR0ZkpfamV6NHhoM3ZRb1d3bmdadycpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC10cy1sb2dpbi1zaWdudXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90cy1sb2dpbi1zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQuc2NzcyddLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignYnRuLWFuaW1hdGUnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMXMgZWFzZScsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxcyBlYXNlJywgc3R5bGUoeyBvcGFjaXR5OiAwLCBoZWlnaHQ6ICcwJyB9KSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCdpbi1vdXQtYW5pbWF0ZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAuMiB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxcyBlYXNlJywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMC42IH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzFzIGVhc2UnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIGhlaWdodDogJzAnIH0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIHRyaWdnZXIoJ0VudGVyTGVhdmUnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnZmx5SW4nLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJyB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcxcyBlYXNlLWluLW91dCcpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcuNXMgZWFzZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNzAlKScsIG9wYWNpdHk6ICcwJywgaGVpZ2h0OiAwIH0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRzTG9naW5TaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIG1vZGU7XG4gICAgQE91dHB1dCgpIGNsb3NlRGlhbG9nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBWaWV3Q2hpbGQoJ3JlY2FwdGNoYVJlZicsIHsgcmVhZDogdHJ1ZSwgc3RhdGljOiB0cnVlIH0pXG4gICAgcmVjYXB0Y2hhUmVmOiBSZWNhcHRjaGFDb21wb25lbnQ7XG4gICAgc2hvd1NvY2lhbCA9IHRydWU7XG4gICAgc2hvdyA9IGZhbHNlO1xuICAgIHNob3dQYXNzd29yZCA9IGZhbHNlO1xuICAgIHJkdXJsID0gJ2h0dHA6Ly8nICsgdGhpcy5hcGlTZXJ2aWNlLmJldGFIb3N0TmFtZSArICcvbWFya2V0cGxhY2UnO1xuICAgIGlmU2lnbkluID0gZmFsc2U7XG4gICAgaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICBpZlNpZ25VcCA9IGZhbHNlO1xuICAgIHNob3dWZXJpZnlFbWFpbCA9IGZhbHNlO1xuICAgIHNob3dSZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgaXNVc2VyVmVyaWZpZWQ6IGFueTtcbiAgICBDQVBUQ0hBX1NJVEVfSU5WSVNJQkxFX0NBUFRDSEFfS0VZID0gJzZMY0FxNFFVQUFBQUFCck9ucDB4d3NhUms3UGduQ2dtRS1GRGNiTEcnO1xuICAgIHVzZXJUaW1lem9uZSA9IERhdGVUaW1lLmxvY2FsKCkuem9uZU5hbWU7XG4gICAgbG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBwaG9uZU51bWJlcjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIGNhcHRjaGFSZXNwb25zZSA9ICcnO1xuICAgIGN1cnJTY3JlZW46IHN0cmluZztcbiAgICBjb3JyZWN0UGhvbmVOdW1iZXIgPSBudWxsO1xuICAgIHBob25lRXJyb3IgPSBmYWxzZTtcbiAgICBzb2NpYWxMb2dpbk1zZyA9IGZhbHNlO1xuICAgIGluaXRpYWxpemVUZWxJbnB1dDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG5cbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZURpYWxvZy5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNvbHZlQW5kUHJvY2VlZChjYXB0Y2hhUmVzcG9uc2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhcHRjaGFSZXNwb25zZSA9IGNhcHRjaGFSZXNwb25zZTtcbiAgICAgICAgdGhpcy5zaWdudXAoKTtcbiAgICB9XG5cbiAgICBwYXNzd29yZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB9XG5cbiAgICBvbkxvZ2luV2l0aEZCID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cDovLycgKyB0aGlzLmFwaVNlcnZpY2UuYmV0YUhvc3ROYW1lICsgJy9hcGkvdXNlci9zaWduaW53aXRoZmFjZWJvb2snICtcbiAgICAgICAgICAgICh0aGlzLnJkdXJsID09PSB1bmRlZmluZWQgPyAnJyA6ICc/cmR1cmw9JyArIHRoaXMucmR1cmwpO1xuICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfc2VsZicpO1xuICAgIH1cblxuICAgIG9uTG9naW5XaXRoR29vZ2xlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cDovLycgKyB0aGlzLmFwaVNlcnZpY2UuYmV0YUhvc3ROYW1lICsgJy9hcGkvdXNlci9zaWduaW53aXRoZ29vZ2xlJyArXG4gICAgICAgICAgICAodGhpcy5yZHVybCA9PT0gdW5kZWZpbmVkID8gJycgOiAnP3JkdXJsPScgKyB0aGlzLnJkdXJsKTtcbiAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnX3NlbGYnKTtcbiAgICB9XG5cbiAgICBnZXRFbWFpbFZlcmlmeVJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IGBlbWFpbD1gICsgdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvZ2V0dXNlcnNpZ251cGRldGFpbHMnLFxuICAgICAgICAgICAgeyBwYXJhbXM6IHBhcmFtcywgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKG1hcChkYXRhID0+IChkYXRhKSkpO1xuICAgIH1cblxuICAgIHZlcmlmeUVtYWlsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmdldEVtYWlsVmVyaWZ5UmVzcG9uc2UoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmV0RGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IEpTT04ucGFyc2UocmV0RGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3RGF0YSAmJiBuZXdEYXRhLmlzRXhpc3RpbmdVc2VyICYmIG5ld0RhdGEuaXNNYW51YWxTaWdudXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmU2lnbkluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmU2lnbkluJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxMb2dpbk1zZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3RGF0YSAmJiBuZXdEYXRhLmlzRXhpc3RpbmdVc2VyICYmICFuZXdEYXRhLmlzTWFudWFsU2lnbnVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaWFsTG9naW5Nc2cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZTaWduVXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmU2lnbkluID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZTaWduVXAnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGhvbmVOdW1iZXInKS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxMb2dpbk1zZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVUZWxJbnB1dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplSW50bFRlbElucHV0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZUludGxUZWxJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBpbnRsIHRlbFxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaG9uZU51bWJlcicpO1xuXG4gICAgICAgICg8YW55PndpbmRvdykuaW50bFRlbElucHV0KGlucHV0LCB7XG4gICAgICAgICAgICBpbml0aWFsQ291bnRyeTogJ2luJyxcbiAgICAgICAgICAgIHV0aWxTY3JpcHRzOiAnLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ludGwtdGVsLWlucHV0L2J1aWxkL2pzL3V0aWxzLmpzJ1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHNpZ25JbiA9ICgpID0+IHtcbiAgICAgICAgLy8gYWxlcnQoJ3lvdSBoYXZlIHNpZ25lZCBpbicpO1xuICAgICAgICB0aGlzLnBvc3RTaWduSW5DcmVkZW50aWFscygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXREYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbkRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAocmV0RGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHsgLi4ucmV0RGF0YS51c2VyRGV0YWlscywgLi4udG9rZW5EYXRhIH07XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVVc2VyKHVzZXJEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0Q29va2llKCd0b3duc2NyaXB0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIDkwKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2VzcygnQ29uZ3JhdHMhIFlvdSBhcmUgc2lnbmVkIGluJywgMjAwMCwgJ0Rpc21pc3MnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnZGlhbG9nJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb0xpc3RpbmdzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2lnbnVwID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5wb3N0U2lnbnVwQ3JlZGVudGlhbHMoKS50b1Byb21pc2UoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBzZWxmLnNob3dWZXJpZnlFbWFpbCA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLnNob3dTb2NpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYuaWZTaWduVXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYuY3VyclNjcmVlbiA9ICdzaG93VmVyaWZ5RW1haWwnO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlmU2lnbkluID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdzaG93UmVzZXRQYXNzd29yZCc7XG4gICAgfVxuXG4gICAgdGFrZU1lQmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2hvd1Jlc2V0UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc2V0UGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaWZTaWduVXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWZTaWduSW4pIHtcbiAgICAgICAgICAgIHRoaXMuaWZTaWduVXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Jlc2V0UGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaWZTaWduSW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZVbnZlcmlmaWVkJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlmU2lnblVwKSB7XG4gICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bob25lTnVtYmVyJykuZGlzYWJsZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd1ZlcmlmeUVtYWlsKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dWZXJpZnlFbWFpbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaWZTaWduVXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgnZmlyc3ROYW1lJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGhvbmVOdW1iZXInKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZVbnZlcmlmaWVkJztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcG9zdFNpZ25JbkNyZWRlbnRpYWxzID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9naW5PYmogPSB7XG4gICAgICAgICAgICBlbWFpbElkOiB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmxvZ2luRm9ybS52YWx1ZS5wYXNzd29yZFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgICBmcm9tU3RyaW5nOiBgZW1haWxJZD1gICsgdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwgKyBgJnBhc3N3b3JkPWAgKyB0aGlzLmxvZ2luRm9ybS52YWx1ZS5wYXNzd29yZFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndXNlci9sb2dpbndpdGh0b3duc2NyaXB0JyxcbiAgICAgICAgICAgIGxvZ2luT2JqLCB7IHBhcmFtczogcGFyYW1zLCBoZWFkZXJzOiBoZWFkZXJzIH0pLnBpcGUobWFwKGRhdGEgPT4gKGRhdGEpKSk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZENyZWRlbnRpYWxzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IHtcbiAgICAgICAgICAgIGVtYWlsSWQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3ZlcmlmeS9zZW5kZm9yZ290cHdkZW1haWwnLFxuICAgICAgICAgICAgZm9yZ290UGFzc3dvcmQsIHsgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKG1hcChkYXRhID0+IChkYXRhKSkpO1xuICAgIH1cblxuICAgIHJlZGlyZWN0VG9MaXN0aW5ncyA9ICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oJy8nLCAnX3NlbGYnKTtcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0UGFzc3dvcmRDcmVkZW50aWFscygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwb3N0U2lnbnVwQ3JlZGVudGlhbHMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5sb2dpbkZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaG9uZU51bWJlcicpO1xuICAgICAgICBjb25zdCBpdGkgPSAoPGFueT53aW5kb3cpLmludGxUZWxJbnB1dEdsb2JhbHMuZ2V0SW5zdGFuY2UoaW5wdXQpO1xuICAgICAgICB0aGlzLmNvcnJlY3RQaG9uZU51bWJlciA9IGl0aS5nZXROdW1iZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5jb3JyZWN0UGhvbmVOdW1iZXIgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLmxvZ2luRm9ybS52YWx1ZS5maXJzdE5hbWUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsaWQnLCB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCB0aGlzLmxvZ2luRm9ybS52YWx1ZS5wYXNzd29yZCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGhvbmUnLCB0aGlzLmNvcnJlY3RQaG9uZU51bWJlcik7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcnRpbWV6b25lJywgdGhpcy51c2VyVGltZXpvbmUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3JlQ2FwdGNoYScsIHRoaXMuY2FwdGNoYVJlc3BvbnNlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VybmFtZScsIHRoaXMucmFuZG9tU3RyaW5nKDEwLCAnJykpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3JkdXJsJywgdGhpcy5yZHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL3JlZ2lzdGVyd2l0aHRvd25zY3JpcHR3aXRoY2FwdGNoYScsXG4gICAgICAgICAgICBmb3JtRGF0YSwgeyBoZWFkZXJzOiBoZWFkZXJzLCByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KTtcbiAgICB9XG5cbiAgICByYW5kb21TdHJpbmcgPSAobGVuLCBhbikgPT4ge1xuICAgICAgICBhbiA9IGFuICYmIGFuLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBzdHIgPSAnJywgaSA9IDA7XG4gICAgICAgIGNvbnN0IG1pbiA9IGFuID09PSAnYScgPyAxMCA6IDA7XG4gICAgICAgIGNvbnN0IG1heCA9IGFuID09PSAnbicgPyAxMCA6IDYyO1xuICAgICAgICBmb3IgKDsgaSsrIDwgbGVuOykge1xuICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4gPDwgMDtcbiAgICAgICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHIgKz0gciA+IDkgPyByIDwgMzYgPyA1NSA6IDYxIDogNDgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcmVzZW5kVmVyaWZ5RW1haWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZW5kVmVyaWZ5RW1haWxDcmVkZW50aWFsKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJldERhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCd2ZXJpZmljYXRpb24gZW1haWwgaGFzIGJlZW4gc2VudCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJlc2VuZFZlcmlmeUVtYWlsQ3JlZGVudGlhbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZHVybCcsIHRoaXMucmR1cmwpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsaWQnLCB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL3Jlc2VuZHZlcmlmaWNhdGlvbmNvZGUnLFxuICAgICAgICAgICAgZm9ybURhdGEsIHsgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKG1hcChkYXRhID0+IChkYXRhKSkpO1xuICAgIH1cblxufVxuIl19