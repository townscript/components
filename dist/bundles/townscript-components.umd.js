(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/forms'), require('moment-timezone'), require('ng-recaptcha'), require('rxjs'), require('@angular/common'), require('@angular/material/dialog'), require('algoliasearch'), require('@townscript/elements'), require('moment'), require('@angular/material/core'), require('@angular/material/snack-bar')) :
    typeof define === 'function' && define.amd ? define('@townscript/components', ['exports', '@angular/core', '@angular/material', '@angular/common/http', 'rxjs/operators', '@angular/forms', 'moment-timezone', 'ng-recaptcha', 'rxjs', '@angular/common', '@angular/material/dialog', 'algoliasearch', '@townscript/elements', 'moment', '@angular/material/core', '@angular/material/snack-bar'], factory) :
    (global = global || self, factory((global.townscript = global.townscript || {}, global.townscript.components = {}), global.ng.core, global.ng.material, global.ng.common.http, global.rxjs.operators, global.ng.forms, global.moment$2, global.ngRecaptcha, global.rxjs, global.ng.common, global.ng.material.dialog, global.algoliaSearchImported, global.elements, global.moment_, global.ng.material.core, global.ng.material['snack-bar']));
}(this, function (exports, core, material, http, operators, forms, moment$2, ngRecaptcha, rxjs, common, dialog, algoliaSearchImported, elements, moment_, core$1, snackBar) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var config = {
        baseUrl: "",
        router: ""
    };

    var TsControlValueAccessor = /** @class */ (function () {
        function TsControlValueAccessor() {
            this.onChangePropagation = function () { };
            this.onTouchedPropagation = function () { };
        }
        TsControlValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChangePropagation = fn;
        };
        TsControlValueAccessor.prototype.registerOnTouched = function (fn) {
            this.onTouchedPropagation = fn;
        };
        TsControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        };
        return TsControlValueAccessor;
    }());

    var ApiService = /** @class */ (function () {
        function ApiService() {
            this.FB_APP_ID = '303059286557418';
            this.hostName = 'www.tsdugout.in';
            this.S3_BUCKET_NAME = 'townscript-testing';
            this.GA_TRACKER_CODE = 'UA-68181318-1';
            this.SERVER_URL = 'https://www.tsdugout.in';
            this.API_SERVER = 'https://www.tsdugout.in/api/';
            this.algoliaIndexName = 'tsTesting';
            this.IPINFO_ACCESS_TOKEN = 'a27cfbcc77e854'; // change afterwards
            this.RECORD_FOR_KINESIS = true; // temporary
            this.PAYMENT_PAGE_URL = 'https://www.tsdugout.in/payment/';
        }
        ApiService = __decorate([
            core.Injectable()
        ], ApiService);
        return ApiService;
    }());

    var CookieService = /** @class */ (function () {
        function CookieService() {
        }
        CookieService.prototype.getCookie = function (name) {
            var ca = document.cookie.split(';');
            var caLen = ca.length;
            var cookieName = name + "=";
            var c;
            for (var i = 0; i < caLen; i += 1) {
                c = ca[i].replace(/^\s+/g, '');
                if (c.indexOf(cookieName) === 0) {
                    return c.substring(cookieName.length, c.length);
                }
            }
            return null;
        };
        CookieService.prototype.deleteCookie = function (name) {
            this.setCookie(name, '', -1);
        };
        CookieService.prototype.setCookie = function (name, value, expireDays, path) {
            if (path === void 0) { path = ''; }
            var d = new Date();
            d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
            var expires = 'expires=' + d.toUTCString();
            document.cookie = name + '=' + value + '; ' + expires + (path.length > 0 ? '; path=' + path : '');
        };
        CookieService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [])
        ], CookieService);
        return CookieService;
    }());

    var UserService = /** @class */ (function () {
        function UserService(cookieService, document, platformId) {
            this.cookieService = cookieService;
            this.document = document;
            this.platformId = platformId;
            this.user$ = new rxjs.BehaviorSubject(null);
            this.user = this.user$.asObservable();
            this.documentIsAccessible = common.isPlatformBrowser(this.platformId);
            if (this.documentIsAccessible) {
                var user = this.cookieService.getCookie("townscript-user");
                console.log("got user from cookie" + user);
                if (user != null && user.length > 0) {
                    this.updateUser(JSON.parse(user));
                }
            }
        }
        UserService.prototype.updateUser = function (data) {
            this.user$.next(data);
        };
        UserService = __decorate([
            core.Injectable(),
            __param(1, core.Inject(common.DOCUMENT)),
            __param(2, core.Inject(core.PLATFORM_ID)),
            __metadata("design:paramtypes", [CookieService, Object, core.InjectionToken])
        ], UserService);
        return UserService;
    }());

    var NotificationService = /** @class */ (function () {
        function NotificationService(snackBar) {
            this.snackBar = snackBar;
        }
        NotificationService.prototype.success = function (message, duration, action) {
            var config = new material.MatSnackBarConfig();
            config.panelClass = ['ts-notification-success'];
            config.duration = duration;
            this.snackBar.open(message, action, config);
        };
        NotificationService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [material.MatSnackBar])
        ], NotificationService);
        return NotificationService;
    }());

    var headers = new http.HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9DTElFTlQiLCJzdWIiOiJhcGlAdG93bnNjcmlwdC5jb20iLCJhdWRpZW5jZSI6IndlYiIsImNyZWF0ZWQiOjE1NTgzMzUwNjI0MTksIlVTRVJfSUQiOjAsImV4cCI6MTU2NjExMTA2Mn0.FL9I1Rn0OtQ4eHdE1QaFtzI7WwHFPe_45p6sO4Civin_drrvp9itjvcoDHCPjz_4GeNN45mYGnHsQExVgTbHuA');
    var TsLoginSignupComponent = /** @class */ (function () {
        function TsLoginSignupComponent(apiService, http$1, fb, cookieService, userService, notificationService, dialogRef) {
            var _this = this;
            this.apiService = apiService;
            this.http = http$1;
            this.fb = fb;
            this.cookieService = cookieService;
            this.userService = userService;
            this.notificationService = notificationService;
            this.dialogRef = dialogRef;
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
            this.userTimezone = moment$2.tz.guess();
            this.loginForm = this.fb.group({
                firstName: ['', forms.Validators.required],
                email: ['', forms.Validators.required],
                password: ['', forms.Validators.required],
                phoneNumber: ['', forms.Validators.required]
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
                var params = new http.HttpParams({ fromString: "email=" + _this.loginForm.value.email });
                return _this.http.get(_this.apiService.API_SERVER + 'user/getusersignupdetails', { params: params, headers: headers }).pipe(operators.map(function (data) { return (data); }));
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
                    var userData = __assign({}, retData.userDetails, tokenData);
                    _this.cookieService.setCookie('townscript-user', JSON.stringify(userData), 90, '/');
                    // console.log(userData);
                    _this.userService.updateUser(userData);
                    _this.close();
                    _this.notificationService.success("Congrats! You are signed in", 2000, "Dismiss");
                    // this.redirectToListings();
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
                var params = new http.HttpParams({
                    fromString: "emailId=" + _this.loginForm.value.email + "&password=" + _this.loginForm.value.password
                });
                return _this.http.post(_this.apiService.API_SERVER + 'user/loginwithtownscript', loginObj, { params: params, headers: headers }).pipe(operators.map(function (data) { return (data); }));
            };
            this.resetPasswordCredentials = function () {
                var forgotPassword = {
                    emailId: _this.loginForm.value.email
                };
                return _this.http.post(_this.apiService.API_SERVER + 'verify/sendforgotpwdemail', forgotPassword, { headers: headers }).pipe(operators.map(function (data) { return (data); }));
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
                    // console.log('error');
                });
            };
            this.resendVerifyEmailCredential = function () {
                var emailObj = {
                    emailId: _this.loginForm.value.email
                };
                return _this.http.post(_this.apiService.API_SERVER + 'user/resendverificationcode', emailObj, { headers: headers }).pipe(operators.map(function (data) { return (data); }));
            };
            this.hasError = function (event) {
                // console.log(event);
                _this.phoneError = !event;
            };
            this.telInputObject = function (event) {
                // console.log(event);
            };
            this.onCountryChange = function (event) {
                // console.log(event);
            };
            this.getNumber = function (event) {
                // console.log(event);
                _this.correctPhoneNumber = event;
            };
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
        __decorate([
            core.ViewChild('recaptchaRef', { read: true, static: true }),
            __metadata("design:type", ngRecaptcha.RecaptchaComponent)
        ], TsLoginSignupComponent.prototype, "recaptchaRef", void 0);
        TsLoginSignupComponent = __decorate([
            core.Component({
                selector: 'app-ts-login-signup',
                template: "<section class=\"container-background flex flex-row bg-white\">\n    <div id=\"login-signup-container\" class=\"z-10 bg-white w-2/5 sm:w-1/2 p-6 m-auto md:m-2 lg:m-2\">\n        <i (click)=\"takeMeBack()\" class=\"cursor-pointer material-icons\">arrow_back</i>\n        <app-login-top-content [condition]=\"currScreen\"></app-login-top-content>\n        <form [formGroup]=\"loginForm\" class=\"w-full max-w-sm \">\n            <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"firstName\"\n                        class=\" form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"username\"></ts-input-text>\n                </div>\n            </div>\n            <div *ngIf=\"!showVerifyEmail\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"email\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"user-email\" type=\"email\" name=\"email\" placeholder=\"Email\" autocomplete=\"user-email\"\n                        required></ts-input-text>\n                    <p class=\"text-sm text-red-500\" *ngIf=\"socialLoginMsg\">It seems you have signed up using Social\n                        Login.</p>\n                </div>\n\n            </div>\n            <div *ngIf=\"ifSignIn || ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"password\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"user-pwd\" type=\"password\" placeholder=\"Password\" autocomplete=\"current-password\">\n                    </ts-input-text>\n                </div>\n            </div>\n            <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <input type=\"tel\" value=\"phone_number\" formControlName=\"phoneNumber\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"phoneNumber\" type=\"tel\" placeholder=\"Phone no.\" autocomplete=\"user-phone\">\n\n\n                    <p class=\"text-sm text-red-500\" *ngIf=\"phoneError\">Please enter a valid Phone no.</p>\n                </div>\n            </div>\n            <div *ngIf=\"showVerifyEmail\" class=\"text-center\">\n                <img class=\"m-auto\" src=\"../../../../../assets/images/verify-email.png\">\n                <span class=\"text-sm\">Tap the link in the email we sent you at\n                    {{this.loginForm.value.email || 'someEMail'}}</span>\n            </div>\n            <div class=\"mt-5\">\n                <div *ngIf=\"ifUnverified\" class=\"w-full text-center\">\n                    <ts-button text=\"Continue\" [disabled]=\"!loginForm.valid\" (click)=\"verifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"ifSignIn\" class=\"w-full text-center\">\n                    <ts-button text=\"Signin\" [disabled]=\"!loginForm.valid\" (click)=\"signIn()\" class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"forgotPassword()\" class=\" text-sm text-center verify-email py-2 px-2\">\n                        Forgot Password?\n                    </a>\n                </div>\n                <div *ngIf=\"ifSignUp\" class=\"w-full text-center\">\n                    <ts-button text=\"Create your account\" [disabled]=\"!loginForm.valid || phoneError\"\n                        (click)=\"recaptchaRef.execute()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"showResetPassword\" class=\"md:w-full text-center\">\n                    <ts-button text=\"Send Reset Password Link\" [disabled]=\"!loginForm.valid\" (click)=\"resetPassword()\"\n                        class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"resetPassword()\" class=\" text-sm text-center resend-email py-2 px-2\">\n                        Resend Email\n                    </a>\n                </div>\n                <div *ngIf=\"showVerifyEmail\" class=\"md:w-full text-center py-2 my-2 \">\n                    <ts-button text=\"Resend Verification Email\" [disabled]=\"!loginForm.valid\"\n                        (click)=\"resendVerifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                    <a class=\" text-sm text-center resend-email py-2 px-2\">\n                        Why verify?\n                    </a>\n                </div>\n                <!-- <p class=\"text-sm\">\n                    Form Value: {{ loginForm.value | json }}\n                </p>\n                <p class=\"text-sm\">\n                    Form Status: {{ loginForm.status }}\n                </p> -->\n\n            </div>\n            <div class=\"form-group\">\n                <re-captcha #recaptchaRef=\"reCaptcha\" (resolved)=\"resolveAndProceed($event)\"\n                    siteKey={{CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY}} size=\"invisible\"></re-captcha>\n            </div>\n        </form>\n        <section id=\"social-signin-container\" *ngIf=\"showSocial\">\n            <div class=\"strike-through strike-through-margin\">\n                <span>\n                    <strong class=\"or-text\">or</strong>\n                </span>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row leading-loose border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithGoogle()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Google\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img src=\"../../../../../assets/images/google-min.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Google</span>\n                    </div>\n                </button>\n                <p class=\"form-control--error\" ng-if=\"googleError.length\" ng-bind=\"googleError\"></p>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row leading-loose border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithFB()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Facebook\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img\n                            src=\"https://s3.ap-southeast-1.amazonaws.com/common-resources/assets/facebook-min-new.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Facebook</span>\n                    </div>\n                </button>\n                <ng-container class=\"login-error\" ng-if=\"fbError.length\">\n                    <i class=\"ion-android-alert\"></i>\n                    <p class=\"form-control--error\" ng-bind=\"fbError\"></p>\n                </ng-container>\n            </div>\n        </section>\n        <div *ngIf=\"ifSignUp\" class=\"agreement my-2 px-2\">\n            <div class=\"w-full hor-linear-grad m-2\"></div>\n            <p class=\"text-xs text-center\">By continuing, you agree to Townscript's <a class=\"text-blue-700\"\n                    href=\"/terms-and-conditions\">terms of service</a> and <a class=\"text-blue-700\"\n                    href=\"/privacy-policy\">privacy policy</a>.</p>\n        </div>\n    </div>\n    <div class=\"p-6 hidden md:block\">\n        <div class=\"flex flex-col mt-8\">\n            <span class=\"text-2xl w-2/3 whitespace-no-wrap mb-4 text-gray-900\">\n                <strong>301,589 event organizers trust us.</strong>\n            </span>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Quick and easy event creation</p>\n                    <p class=\"text-sm text-gray-600\">Create your event page, it is easy and customizable.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Start selling tickets within minutes.</p>\n                    <p class=\"text-sm text-gray-600\">Link your bank account, verify identity details and start selling\n                        instantly.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Simple Integration with your website.</p>\n                    <p class=\"text-sm text-gray-600\">Easy to start selling tickets directly from your website and\n                        facebook without developers.</p>\n                </span>\n            </div>\n        </div>\n    </div>\n\n</section>",
                styles: [".container-background::before{color:#fff;background:url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'  preserveAspectRatio='none'><polygon points='0,110 0,50 300,0 300,300' width='100%' height='100%' style='fill:blue;'/></svg>\") 0 0/contain;width:30%;font-size:2em;padding:4px 40px}.strike-through-margin{margin:30px 0;text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em}.strike-through-margin span{background-color:#fff;padding:3px 30px}.strike-through{text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em;margin:30px auto}.strike-through span{background-color:#fff;padding:3px 30px}.hor-linear-grad{border:1px solid;border-left:0;border-right:0;-webkit-border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));-webkit-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);-o-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image-slice:1}.iti__flag{background-image:url(../../../../../../node_modules/intl-tel-input/build/img/flags.png)}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.iti__flag{background-image:url(../../../../../../node_modules/intl-tel-input/build/img/flags@2x.png)}}"]
            }),
            __metadata("design:paramtypes", [ApiService,
                http.HttpClient,
                forms.FormBuilder,
                CookieService,
                UserService,
                NotificationService,
                dialog.MatDialogRef])
        ], TsLoginSignupComponent);
        return TsLoginSignupComponent;
    }());

    var TsHeaderComponent = /** @class */ (function () {
        function TsHeaderComponent(dialog, userService) {
            var _this = this;
            this.dialog = dialog;
            this.userService = userService;
            this.Components = ["createEventBtn"];
            this.source = "marketplace";
            this.algoliaIndexName = "tsTesting";
            this.router = config.router;
            this.cityPopupActive = false;
            this.openMyProfileComponent = function () {
                _this.router.navigate(["/profile"]);
            };
        }
        TsHeaderComponent.prototype.clickout = function (event) {
            if (!this.citySuggestions.nativeElement.contains(event.target)) {
                this.cityPopupActive = false;
            }
            if (!this.userMenuEle.nativeElement.contains(event.target)) {
                this.userMenu = false;
            }
        };
        TsHeaderComponent.prototype.openLogin = function () {
            var dialogConfig = new material.MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.minWidth = '900px';
            dialogConfig.minHeight = '530px';
            dialogConfig.height = 'auto';
            // dialogConfig.backdropClass = 'mat-dialog-bkg-container';
            this.dialog.open(TsLoginSignupComponent, dialogConfig);
        };
        TsHeaderComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.userService.user.subscribe(function (data) {
                console.log(data);
                _this.user = data;
            });
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], TsHeaderComponent.prototype, "Components", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], TsHeaderComponent.prototype, "source", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], TsHeaderComponent.prototype, "algoliaIndexName", void 0);
        __decorate([
            core.ViewChild('citySuggestions', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], TsHeaderComponent.prototype, "citySuggestions", void 0);
        __decorate([
            core.ViewChild('userMenuEle', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], TsHeaderComponent.prototype, "userMenuEle", void 0);
        __decorate([
            core.HostListener('document:click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], TsHeaderComponent.prototype, "clickout", null);
        TsHeaderComponent = __decorate([
            core.Component({
                selector: 'ts-header',
                template: "<nav class=\"ts-header flex align-items-center\" *ngIf=\"source!='marketplace'\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <!-- <ts-button text=\"Create Event\"></ts-button> -->\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<nav class=\"ts-header-new w-full fixed flex items-center\" *ngIf=\"source=='marketplace'\">\n    <div class=\"ts-container flex items-center w-full\">\n        <div class=\"hidden md:block lg:w-1/6\">\n            <img class=\"ts-logo\" src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n        </div>\n        <div class=\"sm:w-1/4 flex md:hidden lg:hidden items-center\">\n            <!-- <i class=\"mdi mdi-menu mr-3 text-3xl color-blue\"></i> -->\n            <!-- <app-hamburger-menu class=\"mr-3\"></app-hamburger-menu> -->\n            <img class=\"ts-logo mr-3\" src=\"assets/images/ts-icon.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n            <div #citySuggestions class=\"city-selection text-lg cursor-pointer\" (click)=\"cityPopupActive=true\">\n                <div class=\"flex items-center\" matRipple>\n                    <span class=\"mr-1 text-gray-700\">Pune</span>\n                    <i class=\"mdi mdi-menu-down color-blue\"></i>\n                </div>\n                <app-city-search-popup [showArrow]=\"false\" class=\"popup\" *ngIf=\"cityPopupActive\">\n                </app-city-search-popup>\n            </div>\n        </div>\n        <div class=\"lg:w-5/12 ml-3 hidden sm:hidden md:hidden lg:flex\">\n            <app-search class=\"w-full\" [algoliaIndexName]=\"algoliaIndexName\"></app-search>\n        </div>\n        <div class=\"invisible sm:w-1/4 lg:w-1/12 flex items-center ml-6 view-type text-xl color-blue\">\n            <!-- <i class=\"active text-xl mdi mdi-book-open mr-4\"></i>\n            <i class=\"mdi mdi-map-legend mr-4\"></i>\n            <i class=\"mdi mdi-calendar-today mr-4\"></i> -->\n        </div>\n        <div class=\"lg:w-1/6 hidden sm:hidden md:hidden lg:flex items-center pr-8\">\n            <div class=\"create-btn cursor-pointer flex justify-center items-center\">\n                <span class=\"text-sm mr-2\">CREATE EVENT</span>\n                <i class=\"mdi mdi-ticket text-2xl\"></i>\n            </div>\n        </div>\n        <div #userMenuEle\n            class=\"position-relative sm:w-1/1 lg:w-1/6 justify-end hidden sm:hidden md:hidden lg:flex items-center\">\n            <div class=\"flex items-center cursor-pointer px-2\" (click)=\"openLogin()\" *ngIf=\"!user\" matRipple>\n                <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n                <span>Login | Signup</span>\n            </div>\n            <div class=\"flex items-center cursor-pointer\" (click)=\"userMenu=!userMenu\" *ngIf=\"user\" matRipple>\n                <img class=\"rounded-full mr-2\" width=\"36\"\n                    [src]=\"'https://s3.ap-south-1.amazonaws.com/townscript-testing/images/'+user?.s3imagename\" />\n                <!-- <span>{{user.user}}</span> -->\n            </div>\n            <div class=\"user-menu position-absolute shadow-md px-2 enter-slide-bottom\" *ngIf=\"userMenu\">\n                <app-user-menu [user]=\"user\" (close)=\"userMenu=!userMenu\"></app-user-menu>\n            </div>\n            <!-- <ts-button text=\"Login | Signup\" class=\"text-base\"></ts-button> -->\n        </div>\n\n        <!-- Mobile Menu -->\n        <div class=\"sm:w-1/1 ml-auto mr-2 flex  sm:flex md:flex lg:hidden items-center\">\n            <div class=\"rounded-full\" matRipple>\n                <i class=\"mdi mdi-magnify text-2xl ml-2 mr-2 color-blue\"></i>\n            </div>\n            <div class=\"rounded-full\" matRipple>\n                <i class=\"mdi mdi-account text-2xl mr-2 ml-2 color-blue\" matRipple\n                    (click)=\"openMyProfileComponent()\"></i>\n            </div>\n        </div>\n    </div>\n</nav>",
                styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:-webkit-box;display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}.ts-header-new{min-height:58px;background-color:#f7f7f7;top:0;z-index:1000;box-shadow:0 2px 4px 0 rgba(0,0,0,.11)}.ts-header-new .ts-logo{height:28px}.ts-header-new .popup{position:absolute;top:90%;width:100%;left:0}@media (min-width:991px){.ts-container{padding:0 80px!important}.ts-header-new{min-height:75px}.ts-header-new .ts-logo{height:35px}.ts-header-new .view-type i{opacity:.8;padding:3px 9px}.ts-header-new .view-type i.active{opacity:1;background:#3782c4;border-radius:50%;color:#fff;box-shadow:0 0 5px 0 #8ec0ec}.ts-header-new .create-btn{width:100%;min-width:200px;border-radius:20.5px;color:#fff;white-space:nowrap;background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0;-webkit-transition:.1s;transition:.1s}.ts-header-new .create-btn:hover{box-shadow:0 4px 6px 0 #d4b1f0;-webkit-transform:translateY(-2px);transform:translateY(-2px)}.ts-header-new .user-menu{position:absolute;top:145%;width:300px;left:-42%;background:#fff}.ts-header-new .user-menu:before{content:\" \";width:0;height:0;position:absolute;top:-11px;left:84%;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #fff;-webkit-filter:drop-shadow(0 -2px 1px rgba(0, 0, 0, .09));filter:drop-shadow(0 -2px 1px rgba(0, 0, 0, .09))}}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
            }),
            __metadata("design:paramtypes", [material.MatDialog, UserService])
        ], TsHeaderComponent);
        return TsHeaderComponent;
    }());

    var TsFooterComponent = /** @class */ (function () {
        function TsFooterComponent() {
            this.source = "landingPages";
            this.popularEvents = [];
            this.recentBlogs = [];
            this.popularReads = [];
            this.openContactUs = function () {
                window.open('/contact-us');
            };
            this.openMyBooking = function () {
                window.open('/signin?rdurl=/dashboard/mybookings', '_self');
            };
        }
        TsFooterComponent.prototype.ngOnInit = function () {
            if (this.source == "landingPages") ;
        };
        __decorate([
            core.Input("source"),
            __metadata("design:type", Object)
        ], TsFooterComponent.prototype, "source", void 0);
        __decorate([
            core.Input("popularEvents"),
            __metadata("design:type", Object)
        ], TsFooterComponent.prototype, "popularEvents", void 0);
        __decorate([
            core.Input("recentBlogs"),
            __metadata("design:type", Object)
        ], TsFooterComponent.prototype, "recentBlogs", void 0);
        __decorate([
            core.Input("popularReads"),
            __metadata("design:type", Object)
        ], TsFooterComponent.prototype, "popularReads", void 0);
        TsFooterComponent = __decorate([
            core.Component({
                selector: 'ts-footer',
                template: "<footer class=\"ts-footer text-center pt-32 pb-24\" [class.new-footer]=\"source=='marketplace'\">\n    <div class=\"ts-container content-footer\">\n        <div class=\"flex mb-4\">\n            <div class=\"w-1/5 hidden-xs px-4\">\n                <h5>ORGANISE EVENTS</h5>\n                <ul class=\"list-unstyled\">\n                    <li><a href=\"/i/conference-registration\">Conferences</a></li>\n                    <li><a href=\"/i/workshops-and-trainings\">Workshops and Trainings</a></li>\n                    <li><a href=\"/i/college-fest-payment-portal\">College Festivals</a></li>\n                    <li><a href=\"/i/marathon-cycling-trips-treks-registration\">Sports and Fitness Events</a></li>\n                    <li><a href=\"/i/entertainment-events-ticketing\">Entertainment Events</a></li>\n                    <li><a href=\"/i/meetup-registration\">Meetups and Reunions</a></li>\n                    <li><a href=\"/i/treks-trips-registration\">Treks and Trips</a></li>\n                    <!-- <li><a href=\"/i/fundraising-crowdfunding\">Fundraisings</a></li> -->\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\">\n                <h5>POPULAR SEARCHES</h5>\n                <ul class=\"list-unstyled\">\n                    <!--<li><a href=\"/pune/new-year-party\">New Year Parties In Pune</a></li>\n\t\t\t\t<li><a href=\"/mumbai/new-year-party\">New Year Parties In Mumbai</a></li>\n\t\t\t\t<li><a href=\"/delhi/new-year-party\">New Year Parties In Delhi</a></li>\n\t\t\t\t<li><a href=\"/bangalore/new-year-party\">New Year Parties In Bangalore</a></li>-->\n                    <li><a\n                            href=\"http://support.townscript.com/support/solutions/articles/1000265220-list-of-countries-supported-by-townscript-\">\n                            List of Countries supported by Townscript</a></li>\n                    <li><a href=\"/i/sell-event-tickets-online\">Sell Event Tickets Online</a></li>\n                    <li><a href=\"/i/event-management-software\">Event Management Software</a></li>\n                    <li><a href=\"/i/event-registration-software\">Event Registration Software</a></li>\n                    <li><a href=\"/i/conference-management-system\">Conference management System</a></li>\n                    <li><a href=\"/i/event-planning-software\">Event Planning Software</a></li>\n                    <li><a href=\"/i/online-event-ticketing\">Online Event Ticketing</a></li>\n                    <li><a href=\"/i/corporate-event-management\">Corporate Event Management</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\" *ngIf=\"source=='landingPages'\">\n                <h5>RECENT BLOGS</h5>\n                <ul class=\"list-unstyled blog-links\">\n                    <li *ngFor=\"let blog of recentBlogs\"><a [href]=\"blog.url\">{{blog.title}}</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\" *ngIf=\"source=='marketplace'\">\n                <h5>POPULAR EVENTS</h5>\n                <ul class=\"list-unstyled blog-links\">\n                    <li *ngFor=\"let event of popularEvents\"><a [href]=\"event.url\">{{event.title}}</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\">\n                <h5>POPULAR READS</h5>\n                <ul class=\"list-unstyled blog-links\">\n                    <li *ngFor=\"let read of popularReads\"><a [href]=\"read.url\" target=\"_blank\">{{read.title}}</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 hidden-xs pl-12\">\n                <h5>BOOKINGS</h5>\n                <ul class=\"list-unstyled\">\n                    <li>\n                        <a href (click)=\"openMyBooking()\">My Bookings</a>\n                    </li>\n                </ul>\n                <h5 (click)=\"openContactUs()\">GET IN TOUCH</h5>\n                <!--<h5><a href=\"mailto:service@townscript.com\" target=\"_blank\" class=\"mail-to visible-xs\">service@townscript.com</a></h5>-->\n                <ul class=\"list-unstyled\">\n                    <!-- \t\t\t\t<li class=\"hidden-xs\">\n\t\t\t\t\t<a href=\"#\">Contact us</a>\n\t\t\t\t</li> -->\n                    <li class=\"social-list-item\">\n                        <ul class=\"social-list clearfix\">\n                            <li>\n                                <a href=\"https://www.facebook.com/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-facebook\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://twitter.com/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-twitter\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://plus.google.com/+Townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-google-plus\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://www.linkedin.com/company/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-linkedin\"></i></a>\n                            </li>\n                            <!--<li>\n\t\t\t\t\t\t\t<a href=\"mailto:service@townscript.com\" target=\"_blank\"><i class=\"ion-email\"></i></a>\n\t\t\t\t\t\t</li>-->\n                        </ul>\n                    </li>\n                </ul>\n                <h5 class=\"hidden-xs\">ORGANIZER APP</h5>\n                <ul class=\"list-apps hidden-xs\">\n                    <li>\n                        <a href=\"//play.google.com/store/apps/details?id=com.dyulok.android.organizerapp&hl=en_IN\"\n                            title=\"Download on Google play\" class=\"store-icon google-play-icon\" target=\"_blank\">Download\n                            on Google\n                            play</a>\n                    </li>\n                    <li>\n                        <a href=\"//itunes.apple.com/in/app/townscript-event-manager/id1441088900?mt=8\"\n                            title=\"Download on App Store\" target=\"_blank\" class=\"store-icon app-store-icon\">Download on\n                            App Store</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"ts-container\">\n        <div class=\"brand-footer\">\n            <div class=\"flex mb-4\">\n                <div class=\"w-1/4\">\n                    <img src=\"assets/images/ts-logoBMS.png\" alt=\"Townscript Event Ticketing Logo\"\n                        title=\"Townscript Event Ticketing Logo\" />\n                    <a class=\"ts-footer__copyright\">Copyright@2019</a>\n                    <!--<a href=\"mailto:service@townscript.com\" target=\"_blank\" class=\"ts-footer__mail hidden-xs\">service@townscript.com</a>-->\n                </div>\n                <div class=\"w-2/3 linear-footer hidden-xs\">\n                    <h5>LEARN MORE</h5>\n                    <br>\n                    <ul class=\"list-linear\">\n                        <!-- <li><a href=\"#\">Features</a></li> -->\n                        <li><a href=\"/pricing\">Pricing</a></li>\n                        <li><a href=\"/how-it-works\" ts-data-analytics prop-event=\"click\" eventLabel=\"How It Works\"\n                                prop-clicked-location=\"Footer\">How it works</a></li>\n                        <!-- <li><a href=\"#\">Mobile Apps</a></li> -->\n                        <li><a href=\"//townscript-api.readme.io/\" target=\"_blank\">APIs for Developers</a></li>\n                        <li><a href=\"/terms-and-conditions\">Policies</a></li>\n                        <li><a href=\"/privacy-policy\">Privacy</a></li>\n                        <li><a href=\"http://support.townscript.com/support/home\" target=\"_blank\">Support / FAQs</a></li>\n                    </ul>\n                    <div class=\"linear-footer hidden-xs\" *ngIf=\"source=='marketplace'\">\n                        <h5>POPULAR CITIES</h5>\n                        <br>\n                        <ul class=\"list-linear\">\n                            <!-- <li *ngFor=\"let city of countryCityMap\">\n                                <div (click)=\"onChangeCity(city)\"><a href=\"/{{city | lowercase}}\">{{city}}</a></div>\n                            </li> -->\n                        </ul>\n                    </div>\n                    <div class=\"linear-footer hidden-xs\">\n                        <h5>ABOUT</h5>\n                        <br>\n                        <ul class=\"list-linear\">\n                            <li><a href=\"/about-us\">About us</a></li>\n                            <li><a href=\"/contact-us\">Contact us</a></li>\n                            <!-- <li><a href=\"#\">Career</a></li> -->\n                            <!-- <li><a href=\"#\">Media</a></li> -->\n                            <li><a href=\"http://blog.townscript.com\" target=\"_blank\">Blog</a></li>\n                            <li><a href=\"http://eventmagazine.townscript.com/\" target=\"_blank\">Event Magazine</a></li>\n                            <li><a href=\"https://productblog.townscript.com/\" target=\"_blank\">Product Diary</a></li>\n                            <li><a href=\"/sitemap\" target=\"_blank\">Sitemap</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"w-1/12 mixpanel-button align-text hidden-xs\">\n                    <a href=\"https://mixpanel.com/f/partner\" target=\"_blank\"><img\n                            src=\"//cdn.mxpnl.com/site_media/images/partner/badge_blue.png\" alt=\"Mobile Analytics\"\n                            width=\"100\"></a>\n                    <a href=\"https://www.g2crowd.com/products/townscript/reviews\" target=\"_blank\">\n                        <img src=\"https://s3-ap-southeast-1.amazonaws.com/common-resources/assets/g2badge.png\"\n                            alt=\"G2Crowd Townscript Reviews\" width=\"100\">\n                        <span>30 Reviews</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>\n</footer>",
                styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}footer{background-color:#ebebeb}footer.new-footer{background-color:#f7f7f7}footer.new-footer a,footer.new-footer h5{color:#3e3e3e;text-decoration:none;margin-bottom:0}footer h5{font-size:14px!important;font-weight:600}footer li,footer ul{margin-bottom:0}footer .content-footer{padding-bottom:20px}footer .m-l-8per{margin-left:8%}footer .brand-footer{border-top:1px solid #e5d7f1;padding-top:30px}footer img{width:165px}footer .bookmyshow-logo{width:140px}footer .mixpanel-button{padding:0;position:relative;left:-71px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}footer .mixpanel-button a,footer .mixpanel-button span{white-space:nowrap;display:block}footer .mixpanel-button img{width:100px!important}footer .mail-to{font-weight:600}footer a,footer h5{color:#683594;text-decoration:none;margin-bottom:0}footer a{letter-spacing:.4px;font-size:13px;font-weight:400}footer ul.social-list{list-style-type:none;padding:0;margin:0}footer ul.social-list li{display:inline-block;margin-right:10px}footer ul.social-list li i{font-size:17px}.ts-footer__copyright{display:block;text-indent:50px}@media (min-width:768px){.ts-footer__copyright{text-align:left}.ts-footer__mail{display:block;text-align:left;text-indent:50px;font-weight:700;line-height:36px}.ts-footer .container-fluid .row>div:first-child{padding-left:0}.ts-footer .container-fluid .row>div:nth-child(2){padding:0}.ts-footer .container-fluid .row>div:last-child{padding-right:0}footer{margin-top:100px;text-align:left;background-image:url(//s3.ap-south-1.amazonaws.com/townscript-common-resources/assets/footer-skyline.png);background-repeat:repeat-x;background-position:left top}footer .brand-footer .linear-footer h5,footer .brand-footer .linear-footer ul{display:inline-block;margin:2px 25px 2px 0;vertical-align:middle}footer .brand-footer .linear-footer .list-linear{list-style-type:none;padding:0}footer .brand-footer .linear-footer .list-linear li{float:left;margin-right:35px}footer ul.social-list{list-style-type:none;padding:0}footer ul.social-list li{display:block;float:left;margin-right:10px}footer ul.list-apps{list-style-type:none;padding:0}footer ul.list-apps li{line-height:50px;margin:10px 0}footer ul.list-apps li .store-icon{background-size:auto 45px;background-image:url(//s3.ap-south-1.amazonaws.com/townscript-common-resources/assets/store.png);background-repeat:no-repeat;display:block;width:150px;text-indent:-9999px}footer ul.list-apps li .store-icon.google-play-icon{background-position:0 0}footer ul.list-apps li .store-icon.app-store-icon{background-position:-172px 0}footer ul li{line-height:31px}footer ul li>a{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block}}.blog-links li{line-height:1.5;margin-bottom:18px}.blog-links li a{white-space:normal}"]
            }),
            __metadata("design:paramtypes", [])
        ], TsFooterComponent);
        return TsFooterComponent;
    }());

    var moment = moment$2;
    var TimeService = /** @class */ (function () {
        function TimeService() {
            var _this = this;
            this.moment = moment();
            this.convertDateToTimezone = function (date, timeZoneOffset) {
                var dateString = moment.tz(date, timeZoneOffset).format('YYYY-MM-DDTHH:mm:ss.sssZ');
                var tzon = [dateString.substr(0, 23), dateString.substr(24)];
                var currentSystemGMT = moment.tz(moment.tz.guess()).format("Z");
                return _this.formatLocalDate(new Date(tzon[0] + currentSystemGMT));
            };
            this.formatLocalDate = function (now) {
                var tzo = -now.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
                    var norm = Math.abs(Math.floor(num));
                    return (norm < 10 ? '0' : '') + norm;
                };
                return now.getFullYear()
                    + '-' + pad(now.getMonth() + 1)
                    + '-' + pad(now.getDate())
                    + 'T' + pad(now.getHours())
                    + ':' + pad(now.getMinutes())
                    + ':' + pad(now.getSeconds())
                    + '.000'
                    + dif + pad(tzo / 60)
                    + pad(tzo % 60);
            };
        }
        TimeService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [])
        ], TimeService);
        return TimeService;
    }());

    var HeaderService = /** @class */ (function () {
        function HeaderService(http) {
            var _this = this;
            this.http = http;
            this.baseUrl = config.baseUrl;
            this.apiServerUrl = this.baseUrl + "api/";
            this.getplaceSearchResults = function (query) {
                return _this.http.get(_this.baseUrl + "listings/place/autocomplete?query=" + query);
            };
        }
        HeaderService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [http.HttpClient])
        ], HeaderService);
        return HeaderService;
    }());

    var algoliasearch = algoliaSearchImported;
    var SearchComponent = /** @class */ (function () {
        function SearchComponent(headerService, timeService, datepipe) {
            var _this = this;
            this.headerService = headerService;
            this.timeService = timeService;
            this.datepipe = datepipe;
            this.algoliaIndexName = "tsTesting";
            this.searchTextChanged = new rxjs.Subject();
            this.searchActive = false;
            this.citySearchActive = false;
            this.cityPopupActive = false;
            this.activeCity = "Pune";
            this.cityQueryChanged = new rxjs.Subject();
            this.popularPlaces = ['Pune', 'Mumbai', 'Bangalore', 'New Delhi', 'Lucknow', 'Kanpur'];
            this.callAlgolia = function (text) {
                _this.index.search({
                    query: text,
                    hitsPerPage: 6
                }).then(function (data) {
                    _this.filterDataForSearchResult(data);
                });
            };
            this.filterDataForSearchResult = function (data) {
                var results = data.hits;
                var interests = results.filter(function (ele) {
                    return ele.objType == "keyword" ||
                        ele.objType == "eventtype" ||
                        ele.objType == "category";
                });
                var organizers = results.filter(function (ele) { return ele.objType == "organizer"; });
                var events = results.filter(function (ele) { return ele.objType == "event"; });
                interests.map(function (interest) {
                    interest.name = interest.name + ' Events';
                    interest.location = "PUNE";
                });
                organizers.map(function (organizer) {
                    if (!organizer.imageUrl) {
                        organizer.imageUrl = "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-organizer.png";
                    }
                    if (organizer.secondaryTextProperties && organizer.secondaryTextProperties.country) {
                        organizer.location = organizer.secondaryTextProperties.country;
                    }
                });
                events.map(function (event) {
                    if (!event.imageUrl) {
                        event.imageUrl = "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-event.png";
                    }
                    if (event.secondaryTextProperties && event.secondaryTextProperties.city) {
                        event.location = event.secondaryTextProperties.city;
                    }
                    if (event.secondaryTextProperties && event.secondaryTextProperties.startTime) {
                        var startDateTime = event.secondaryTextProperties.startTime;
                        startDateTime = _this.timeService.convertDateToTimezone(startDateTime, event.secondaryTextProperties.eventTimeZone);
                        event.secondaryTextProperties.startTime = _this.datepipe.transform(startDateTime, "d MMM yyyy, ' 'h:mma");
                    }
                });
                _this.searchResults = { "interests": interests, "organizers": organizers, "events": events };
            };
            this.search = function (text) {
                if (text != undefined && text.length > 0)
                    _this.searchTextChanged.next(text);
            };
            this.searchTextChanged.pipe(operators.debounceTime(300)).subscribe(function (text) { return _this.callAlgolia(text); });
            this.client = algoliasearch("AT5UB8FMSR", "c7e946f5b740ef035bd824f69dcc1612");
            this.index = this.client.initIndex(this.algoliaIndexName);
        }
        SearchComponent.prototype.clickout = function (event) {
            if (!this.citySuggestions.nativeElement.contains(event.target)) {
                this.cityPopupActive = false;
            }
        };
        SearchComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], SearchComponent.prototype, "algoliaIndexName", void 0);
        __decorate([
            core.ViewChild('cityInput', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], SearchComponent.prototype, "cityInput", void 0);
        __decorate([
            core.ViewChild('citySuggestions', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], SearchComponent.prototype, "citySuggestions", void 0);
        __decorate([
            core.HostListener('document:click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], SearchComponent.prototype, "clickout", null);
        SearchComponent = __decorate([
            core.Component({
                selector: 'app-search',
                template: "<div class=\"w-full lg:flex search-container relative\" [class.active]=\"searchActive\">\n    <div class=\"w-2/3 m-2 flex items-center left-section\">\n        <i class=\"mdi mdi-magnify text-2xl color-blue p-2\"></i>\n        <input [(ngModel)]=\"searchText\" (ngModelChange)=\"search($event)\"\n            (focus)=\"searchActive = true;citySearchActive=false\" (blur)=\"searchActive = false\"\n            class=\"text-sm w-full h-full bg-transparent  p-2\" type=\"text\" placeholder=\"Search for an Event\" />\n        <div class=\"suggestions enter-slide-bottom w-full p-4 absolute\" *ngIf=\"searchResults && searchActive\">\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.interests.length>0\">\n                <li class=\"list-head\">\n                    INTERESTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let interest of searchResults.interests\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ interest.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{interest.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"interest.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{interest.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.events.length>0\">\n                <li class=\"list-head\">\n                    EVENTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let event of searchResults.events\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ event.imageUrl +')'\"></div>\n                        <div>\n                            <span class=\"mb-1 block\">{{event.name | titlecase}} </span>\n                            <div class=\"flex items-center\">\n                                <div class=\"flex items-center\" *ngIf=\"event.location\">\n                                    <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                    <small>{{event.location}}</small>\n                                </div>\n                                <div class=\"flex items-center ml-2\" *ngIf=\"event?.secondaryTextProperties?.startTime\">\n                                    <i class=\"mdi mdi-calendar-today color-blue mr-1\"></i>\n                                    <small>{{event.secondaryTextProperties.startTime}}</small>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.organizers.length>0\">\n                <li class=\"list-head\">\n                    ORGANIZERS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let organizer of searchResults.organizers\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ organizer.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{organizer.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"organizer.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{organizer.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div #citySuggestions\n        class=\"w-1/3 flex items-center justify-between p-2 cursor-pointer relative city-search-container\"\n        [class.active]=\"cityPopupActive\" (click)=\"cityPopupActive = true\">\n        <div class=\"flex items-center\">\n            <i class=\"mdi mdi-map-marker text-2xl color-blue\"></i>\n            {{activeCity}}\n        </div>\n        <i class=\"mdi mdi-chevron-down text-2xl\"></i>\n        <app-city-search-popup class=\"popup\" *ngIf=\"cityPopupActive\"></app-city-search-popup>\n    </div>\n</div>",
                styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}@media (min-width:991px){.search-container{height:44px;border-radius:2px;background-color:#ededed;-webkit-transition:.3s;transition:.3s}.search-container .left-section{border-right:1px solid rgba(151,151,151,.3)}.search-container .left-section input{-webkit-transition:.3s;transition:.3s}.search-container .left-section input:focus{background:#fafafa}.search-container .left-section .suggestions{top:100%;left:0;background:#fafafa;border-top:1px solid rgba(151,151,151,.4)}.search-container .left-section .suggestions ul{margin:2% 0}.search-container .left-section .suggestions ul li{color:#636363;-webkit-transition:.15s;transition:.15s;border-bottom:1px solid rgba(151,151,151,.25)}.search-container .left-section .suggestions ul li.list-head{font-size:10px;color:#636363;border:none;font-weight:400}.search-container .left-section .suggestions ul li.list-head:hover{background:#fafafa}.search-container .left-section .suggestions ul li .avatar{border-radius:50%;height:41px;width:41px}.search-container .left-section .suggestions ul li:hover{background:#ededed}.search-container .city-search-container{-webkit-transition:.3s;transition:.3s}.search-container .city-search-container.active{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container .city-search-container .popup{position:absolute;top:135%;width:135%;left:-34%}.search-container.active{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container.active .suggestions{box-shadow:0 11px 15px 0 rgba(0,0,0,.15)}}"]
            }),
            __metadata("design:paramtypes", [HeaderService, TimeService, common.DatePipe])
        ], SearchComponent);
        return SearchComponent;
    }());

    var CitySearchPopupComponent = /** @class */ (function () {
        function CitySearchPopupComponent(headerService, timeService, datepipe) {
            var _this = this;
            this.headerService = headerService;
            this.timeService = timeService;
            this.datepipe = datepipe;
            this.showArrow = true;
            this.citySearchActive = false;
            this.cityPopupActive = false;
            this.activeCity = "Pune";
            this.router = config.router;
            this.cityQueryChanged = new rxjs.Subject();
            this.popularPlaces = ['Pune', 'Mumbai', 'Bangalore', 'New Delhi', 'Lucknow', 'Kanpur'];
            this.callSearchCity = function (query) {
                _this.headerService.getplaceSearchResults(query).subscribe(function (res) {
                    _this.placeSearchResults = res['data'];
                });
            };
            this.placeChanged = function (place) {
                if (place.type == "country") {
                    _this.router.navigate(["/" + place.twoDigitCode]);
                }
                if (place.type == "city") {
                    _this.router.navigate(["/" + place.countryCode + "/" + place.cityCode]);
                }
                if (place.type == "locality") {
                    _this.router.navigate(["/" + place.countryCode + "/" + place.cityCode + "/" + place.localityCode]);
                }
            };
            this.openCityPopup = function () {
                _this.cityPopupActive = true;
                _this.cityInput.nativeElement.focus();
            };
            this.searchCity = function (text) {
                if (!text || text.length == 0) {
                    _this.placeSearchResults = [];
                }
                if (text != undefined && text.length > 0)
                    _this.cityQueryChanged.next(text);
            };
            this.cityQueryChanged.pipe(operators.debounceTime(300)).subscribe(function (text) { return _this.callSearchCity(text); });
        }
        CitySearchPopupComponent.prototype.ngAfterViewInit = function () {
            this.cityInput.nativeElement.focus();
        };
        CitySearchPopupComponent.prototype.ngOnInit = function () { };
        __decorate([
            core.ViewChild('cityInput', { static: true }),
            __metadata("design:type", core.ElementRef)
        ], CitySearchPopupComponent.prototype, "cityInput", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], CitySearchPopupComponent.prototype, "showArrow", void 0);
        CitySearchPopupComponent = __decorate([
            core.Component({
                selector: 'app-city-search-popup',
                template: "<div class=\"city-suggestions enter-slide-bottom\" [class.arrow]=\"showArrow\">\n    <div class=\"suggestions-container\">\n        <ul>\n            <li [class.active]=\"citySearchActive\" class=\"p-2 cursor-pointer flex items-center truncate\">\n                <i class=\"mdi mdi-magnify mr-2\"></i>\n                <input #cityInput id=\"cityInput\" type=\"text\" placeholder=\"Type here to search...\"\n                    [(ngModel)]=\"cityQuery\" (ngModelChange)=\"searchCity($event)\" (focus)=\"citySearchActive=true\"\n                    class=\"w-full bg-transparent text-sm\" />\n            </li>\n            <li matRipple (click)=\"placeChanged(place);\" class=\"p-2 cursor-pointer flex items-center truncate\"\n                *ngFor=\"let place of placeSearchResults\">\n                <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                <span class=\"text-sm flex items-end truncate\">\n                    <span class=\"mr-1 whitespace-no-wrap\">{{place.name}} </span>\n                    <small class=\"text-2xs text-gray-600\"\n                        *ngIf=\"place.city && place?.city.length>0 && place?.type!='city'\">\n                        {{place.city}},\n                    </small>\n                    <small class=\"text-2xs text-gray-600\"\n                        *ngIf=\"place.country && place?.country.length>0 && place?.type!='country'\">{{place.country}}\n                    </small>\n                    <small class=\"text-2xs truncate text-gray-600\">{{place.secondaryText}}</small>\n                </span>\n            </li>\n            <ng-container matRipple *ngIf=\"!placeSearchResults || placeSearchResults.length==0\">\n                <li class=\"p-2 cursor-pointer\" *ngFor=\"let city of popularPlaces\">\n                    <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                    <span class=\"text-sm\">{{city}}</span>\n                </li>\n            </ng-container>\n        </ul>\n    </div>\n</div>",
                styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.city-suggestions{width:100%;background:#fafafa;position:absolute;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.city-suggestions li.active,.city-suggestions li:hover{background:#ededed}.city-suggestions.arrow{border-top:3px solid #3782c4}.city-suggestions.arrow:before{content:\" \";width:10px;position:absolute;top:-7px;left:88%;height:10px;-webkit-filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));background:#ededed;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-top:3px solid #3782c4;border-left:3px solid #3782c4}"]
            }),
            __metadata("design:paramtypes", [HeaderService, TimeService, common.DatePipe])
        ], CitySearchPopupComponent);
        return CitySearchPopupComponent;
    }());

    var HamburgerMenuComponent = /** @class */ (function () {
        function HamburgerMenuComponent() {
        }
        HamburgerMenuComponent.prototype.ngAfterViewInit = function () {
        };
        HamburgerMenuComponent.prototype.ngOnInit = function () {
        };
        HamburgerMenuComponent = __decorate([
            core.Component({
                selector: 'app-hamburger-menu',
                template: "<nav role=\"navigation\">\n    <div class=\"ham-container position-relative cursor-pointer\">\n        <div class=\"hamburger position-relative\">\n            <!-- <input type=\"checkbox\" /> -->\n            <div class=\"spans\" (click)=\"active=!active\">\n                <span class=\"block background-blue\" [class.active]=\"active\"></span>\n                <span class=\"block background-blue\" [class.active]=\"active\"></span>\n                <span class=\"block background-blue\" [class.active]=\"active\"></span>\n            </div>\n            <div class=\"overlay fixed bg-black w-full h-full\" *ngIf=\"active\"></div>\n            <ul class=\"menu fixed h-full px-4\" [class.active]=\"active\">\n                <img class=\"mb-10\" src=\"assets/images/ts-logo.svg\" class=\"logo\" />\n                <ts-panel [disable]=\"false\">\n                    <ts-panel-header (click)=\"panelOpen=!panelOpen\">\n                        <div>Organizing Events</div>\n                    </ts-panel-header>\n                    <ts-panel-body [open]=\"panelOpen\">\n                        <div>\n                            <div>Manage Event</div>\n                            <div>Billings</div>\n                            <div>Reports</div>\n                            <div>Promotions</div>\n                        </div>\n                    </ts-panel-body>\n                </ts-panel>\n                <ts-panel [disable]=\"false\">\n                    <ts-panel-header (click)=\"panelOpen2=!panelOpen2\">\n                        <div>Attending Events</div>\n                    </ts-panel-header>\n                    <ts-panel-body [open]=\"panelOpen2\">\n                        <div>\n                            <div>My Bookings</div>\n                            <div>Following</div>\n                        </div>\n                    </ts-panel-body>\n                </ts-panel>\n                <a href=\"#\">\n                    <li>My Profile</li>\n                </a>\n                <a href=\"#\">\n                    <li>Logout</li>\n                </a>\n            </ul>\n        </div>\n    </div>\n</nav>",
                styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ham-container{z-index:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ham-container .hamburger span{width:28px;height:3.2px;margin-bottom:5px;position:relative;border-radius:3px;z-index:1;-webkit-transform-origin:4px 0;transform-origin:4px 0;-webkit-transition:background .5s cubic-bezier(.77,.2,.05,1),margin .5s cubic-bezier(.77,.2,.05,1),opacity .55s,-webkit-transform .5s cubic-bezier(.77,.2,.05,1);transition:transform .5s cubic-bezier(.77,.2,.05,1),background .5s cubic-bezier(.77,.2,.05,1),margin .5s cubic-bezier(.77,.2,.05,1),opacity .55s,-webkit-transform .5s cubic-bezier(.77,.2,.05,1)}.ham-container .hamburger span:first-child{-webkit-transform-origin:0 0;transform-origin:0 0}.ham-container .hamburger span:last-child{margin-bottom:0}.ham-container .hamburger span:nth-last-child(2){-webkit-transform-origin:0 100%;transform-origin:0 100%}.ham-container .hamburger span.active{opacity:1;margin-left:240px;-webkit-transform:rotate(45deg) translate(-14px,-16px);transform:rotate(45deg) translate(-14px,-16px);background:#8c8c8c}.ham-container .hamburger span.active:nth-last-child(3){opacity:0;-webkit-transform:rotate(0) scale(.2,.2);transform:rotate(0) scale(.2,.2)}.ham-container .hamburger span.active:nth-last-child(2){-webkit-transform:rotate(-45deg) translate(0,4px);transform:rotate(-45deg) translate(0,4px)}.ham-container .hamburger span.active~ul{-webkit-transform:none;transform:none}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:.5}}@keyframes fadeIn{0%{opacity:0}100%{opacity:.5}}.ham-container .overlay{top:0;left:0;opacity:.5;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.ham-container .menu{top:0;left:0;width:300px;padding-top:15px;background:#fafafa;box-shadow:0 2px 4px 0 rgba(0,0,0,.11);list-style-type:none;-webkit-font-smoothing:antialiased;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:translate(-100%,0);transform:translate(-100%,0);-webkit-transition:-webkit-transform .5s cubic-bezier(.77,.2,.05,1);transition:transform .5s cubic-bezier(.77,.2,.05,1);transition:transform .5s cubic-bezier(.77,.2,.05,1),-webkit-transform .5s cubic-bezier(.77,.2,.05,1)}.ham-container .menu .logo{height:40px}.ham-container .menu.active{-webkit-transform:none;transform:none}.ham-container .menu li{padding:10px 0}"]
            }),
            __metadata("design:paramtypes", [])
        ], HamburgerMenuComponent);
        return HamburgerMenuComponent;
    }());

    var TsListingCardComponent = /** @class */ (function () {
        function TsListingCardComponent() {
            this.urgencyMessage = false;
            this.goingCounter = false;
            this.keywords = [
                { keyCode: 'marathon' },
                { keyCode: 'run4life' },
                { keyCode: 'behindYou' }
            ];
        }
        TsListingCardComponent.prototype.ngOnInit = function () {
            // this.eventData = {
            //   "id":1,"eventId":87429,
            //   "name":"first event",
            //   "shortName":"test-once-more-123442",
            //   "startTime":"2019-07-25T10:30:00.000+0000","endTime":"2019-07-25T11:30:00.000+0000",
            //   "displayName":null,"shortDescription":null,"eventTimeZone":"Asia/Calcutta",
            //   "timeZoneDisplayName":null,"venueLocation":null,"city":"Pune",
            //   "latitude":18.513217600000000,"longitude":73.928873200000000,
            //   "coverImageUrl":"https://s3.ap-south-1.amazonaws.com/townscript-common-resources/city-banners/large/pune.jpg",
            //   "cardImageUrl":"https://s3.ap-south-1.amazonaws.com/townscript-common-resources/city-banners/mobile/pune.jpg",
            //   "publicEvent":true,"live":true,"categoryId":null,"eventTypeId":17,
            //   "minimumTicketPrice":3456,"minimumTicketPriceCurrency":"INR",
            //   "organizerIsTrusted":true,"soldOutFlag":false,"reportFlag":false,
            //   "paid":false,"onlineEvent":false,"organizerId":3080,"pageViews":null,
            //   "organizerScore":null,"ticketsSold":0,"roTicketsSold":null,"ticketsRemaining":0,
            //   "farDuration":null,"townscriptIR":null,"score":null,"recurrent":false
            // };
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], TsListingCardComponent.prototype, "eventData", void 0);
        TsListingCardComponent = __decorate([
            core.Component({
                selector: 'ts-listing-card',
                template: "<div\n    class=\"listing-container cursor-pointer rounded  my-4 mx-auto lg:w-8/12 sm:w-1/2 md:w-1/2 lg:flex\">\n    <div class=\"h-48 lg:h-auto sm:w-full md:w-full lg:w-2/5 flex-none bg-cover text-center overflow-hidden\"\n        [style.background-image]=\"'url(' + eventData.cardImageUrl + ')'\">\n    </div>\n    <div class=\"listing-container--content flex flex-col justify-between leading-normal w-full\">\n        <div class=\"pl-4 pt-3 pb-1\">\n            <div *ngIf=\"urgencyMessage\" class=\"flex flex-row justify-between align-items-center\">\n                <span class=\"text-sm bg-orange-500 rounded text-sm px-2 mr-2\">In High Demand</span>\n                <span class=\"text-xs text-red-400\">Booked 20 times in the last 24 hrs</span>\n                <span class=\"bg-white rounded-l-full px-2\">\n                    <i class=\"material-icons align-bottom pr-1 hidden\">remove_red_eye</i>\n                    <strong class=\"text-xs\">12 Viewing right now</strong>\n                </span>\n            </div>\n            <div class=\"font-303030 capitalize text-xl my-3\">{{eventData.name | titlecase}}</div>\n            <div class=\"flex text-xs \">\n                <div class=\"mr-2 flex items-center\">\n                    <i class=\"mdi mdi-calendar-today text-xl pr-1  align-bottom\"></i>\n                    <span class=\"\">{{[eventData.startTime, eventData.endTime] | dateRange}}</span>\n                </div>\n                <div class=\"mr-2 flex items-center\">\n                    <i class=\"mdi mdi-map-marker pr-1 text-xl  align-bottom\"></i>\n                    <span class=\"font-323E48 font-bold\">{{eventData.city}}</span>\n                </div>\n                <div *ngIf=\"goingCounter\" class=\"mr-2\">\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <span class=\"font-323E48 font-bold\">700</span>\n                </div>\n            </div>\n            <div class=\"py-2 pr-2 flex justify-end  mt-8\">\n                <div class=\"pr-2  font-323E48 font-semibold text-sm sm:text-xs hover:text-gray-900 hover:underline\" *ngFor=\"let key of eventData.keywords\">#{{key.keyCode}}</div>\n            </div>\n        </div>\n        <div\n            class=\"h-10 bottom-purple-bar border-t border-gray-300 flex items-center justify-between py-2 px-4 sm:rounded-b-lg lg:rounded-none\">\n            <div class=\"text-sm flex items-center \">\n                <!-- <i class=\"mdi mdi-heart-outline text-2xl mr-2\"></i> -->\n                <i class=\"mdi mdi-share-variant text-2xl\"></i>\n            </div>\n            <div class=\"flex items-center\">\n                <span class=\"align-text-bottom price-container font-323E48 text-base font-semibold pr-4\"\n                    *ngIf=\"eventData.minimumTicketPrice\">{{eventData.minimumTicketPrice | currency:eventData.minimumTicketPriceCurrency}}-{{eventData.minimumTicketPrice}}</span>\n                <span *ngIf=\"!eventData.minimumTicketPrice \">Free</span>\n                <i class=\"mdi mdi-arrow-right text-2xl ml-2\"></i>\n            </div>\n        </div>\n    </div>\n</div>",
                styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.listing-container{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);-webkit-transition:.3s;transition:.3s;border:1px solid rgba(0,0,0,.13);border-radius:5px;font-family:Lato}.listing-container:hover{box-shadow:0 2px 15px 0 rgba(0,0,0,.13);box-shadow:0 12px 17px -3px rgba(0,0,0,.1),0 7px 8px -2px rgba(0,0,0,.1)}.listing-container:hover .bottom-purple-bar{background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0;border-radius:0 0 4px}.listing-container:hover .bottom-purple-bar i,.listing-container:hover .bottom-purple-bar span{color:#fff!important}.listing-container .font-323E48{color:#323e48}.listing-container .font-303030{color:#303030}.listing-container .listing-container--content{background-color:#eee}.listing-container .listing-container--content .bottom-purple-bar{-webkit-transition:1s;transition:1s}.listing-container .listing-container--content .price-container{font-size:15px}.listing-container i{color:#683592}"]
            }),
            __metadata("design:paramtypes", [])
        ], TsListingCardComponent);
        return TsListingCardComponent;
    }());

    var LoginTopContentComponent = /** @class */ (function () {
        function LoginTopContentComponent() {
        }
        LoginTopContentComponent.prototype.ngOnInit = function () {
            console.log('whats the condition', this.condition);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], LoginTopContentComponent.prototype, "condition", void 0);
        LoginTopContentComponent = __decorate([
            core.Component({
                selector: 'app-login-top-content',
                template: "<div *ngIf=\"condition == 'ifUnverified' \" class=\"py-2\">\n        <p class=\"text-lg text-gray-900\"><strong>Let's get started</strong></p>\n        <p class=\"text-sm text-gray-500\">Your one stop tool for organizing events</p>\n</div>\n<div *ngIf=\"condition == 'ifSignUp'\" class=\"py-2\">\n        <p class=\"text-lg\"><strong>Sign up</strong></p>\n        <p class=\"text-sm text-gray-500\">Welcome to Townscript</p>\n</div>\n<div *ngIf=\"condition == 'showVerifyEmail'\" class=\"py-2\">\n        <p class=\"text-lg\"><strong>You're almost done</strong></p>\n        <p class=\"text-sm text-gray-500\">We just need to verify your e-mail</p>\n</div>\n<div *ngIf=\"condition == 'ifSignIn'\" class=\"py-3\">\n        <p class=\"text-lg\"><strong>Sign in</strong></p>\n</div>\n<div *ngIf=\"condition == 'showResetPassword'\" class=\"py-3\">\n        <p class=\"text-lg\"><strong>Forgot password</strong></p>\n        <p class=\"text-sm text-gray-500\">Don't worry, we'll help you reset it</p>\n</div>",
                styles: [""]
            }),
            __metadata("design:paramtypes", [])
        ], LoginTopContentComponent);
        return LoginTopContentComponent;
    }());

    var moment$1 = moment_;
    var RangeDatePipe = /** @class */ (function () {
        function RangeDatePipe() {
        }
        RangeDatePipe.prototype.transform = function (rangeDates, args) {
            if (rangeDates) {
                var date = rangeDates.map(function (d) { return moment$1(d).format('DD'); });
                var month = rangeDates.map(function (d) { return moment$1(d).format('MMM'); });
                var time = moment$1(rangeDates[0]).format('hh:mm A');
                if ((date[0] === date[1]) && (month[0] === month[1])) {
                    return month[0] + ' ' + date[0] + ' | ' + time;
                }
                else if ((date[0] === date[1]) && (month[0] !== month[1])) {
                    return month[0] + ' ' + date[0] + ' - ' + month[1] + ' ' + date[1] + ' | ' + time;
                }
                else {
                    return month[0] + ' ' + date[0] + ' - ' + date[1] + ' | ' + time;
                }
            }
            else {
                return null;
            }
        };
        RangeDatePipe = __decorate([
            core.Pipe({
                name: 'dateRange'
            })
        ], RangeDatePipe);
        return RangeDatePipe;
    }());

    var UserMenuComponent = /** @class */ (function () {
        function UserMenuComponent(notificationService, userService, cookieService) {
            this.notificationService = notificationService;
            this.userService = userService;
            this.cookieService = cookieService;
            this.panelOpen1 = false;
            this.panelOpen2 = false;
            this.close = new core.EventEmitter();
        }
        UserMenuComponent.prototype.logout = function () {
            this.close.emit();
            this.cookieService.deleteCookie("townscript-user");
            this.userService.updateUser(null);
            this.notificationService.success("You are logged out successfully!", 2000, "Dismiss");
        };
        UserMenuComponent.prototype.ngAfterViewInit = function () {
        };
        UserMenuComponent.prototype.ngOnInit = function () { };
        __decorate([
            core.Input("panelOpen1"),
            __metadata("design:type", Boolean)
        ], UserMenuComponent.prototype, "panelOpen1", void 0);
        __decorate([
            core.Input("panelOpen2"),
            __metadata("design:type", Boolean)
        ], UserMenuComponent.prototype, "panelOpen2", void 0);
        __decorate([
            core.Input("user"),
            __metadata("design:type", Object)
        ], UserMenuComponent.prototype, "user", void 0);
        __decorate([
            core.Output("close"),
            __metadata("design:type", Object)
        ], UserMenuComponent.prototype, "close", void 0);
        UserMenuComponent = __decorate([
            core.Component({
                selector: 'app-user-menu',
                template: "<div class=\"user-menu  px-2 cursor-pointer\">\n    <div class=\"flex items-center border-b py-2 border-gray-300\">\n        <div class=\"mr-1 leading-none\">\n            <img class=\"rounded-full mr-2\" width=\"45\"\n                [src]=\"'https://s3.ap-south-1.amazonaws.com/townscript-testing/images/'+user?.s3imagename\" />\n        </div>\n        <div class=\"leading-tight\">\n            <span class=\"block text-lg text-gray-800\">{{user?.user}}</span>\n            <span class=\"text-xs text-gray-600 whitespace-nowrap\">View and edit profile</span>\n        </div>\n    </div>\n    <div class=\"menu mt-2 px-1\">\n        <ts-panel [disable]=\"false\">\n            <ts-panel-header (click)=\"panelOpen1=!panelOpen1\">\n                <div class=\"px-1 py-2 flex items-center border-b  border-gray-300 justify-between\"\n                    [class.border-dashed]=\"panelOpen1\" matRipple>\n                    <span class=\"text-gray-700\">\n                        Organizing Events\n                    </span>\n                    <i class=\"mdi mdi-chevron-down text-2xl color-blue\" [class.rotate-180]=\"panelOpen1\"></i>\n                </div>\n            </ts-panel-header>\n            <ts-panel-body [open]=\"panelOpen1\">\n                <div class=\"text-sm text-gray-800\">\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-calendar-today mr-2 color-blue text-xl\"></i>\n                        Manage Event\n                    </div>\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-cash mr-2 color-blue text-xl\"></i>\n                        Billings\n                    </div>\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-chart-line mr-2 color-blue text-xl\"></i>\n                        Reports\n                    </div>\n                    <div matRipple class=\"px-1 py-1 pb-2 flex items-center border-b border-gray-300\">\n                        <i class=\"mdi mdi-bullhorn mr-2 color-blue text-xl\"></i>\n                        Promotions\n                    </div>\n                </div>\n            </ts-panel-body>\n        </ts-panel>\n        <ts-panel [disable]=\"false\">\n            <ts-panel-header (click)=\"panelOpen2=!panelOpen2\">\n                <div class=\"px-1 py-2 flex items-center border-b  border-gray-300 justify-between\"\n                    [class.border-dashed]=\"panelOpen2\" matRipple>\n                    <span class=\"text-gray-700\">\n                        Attending Events\n                    </span>\n                    <i class=\"mdi mdi-chevron-down text-2xl color-blue\" [class.rotate-180]=\"panelOpen2\"></i>\n                </div>\n            </ts-panel-header>\n            <ts-panel-body [open]=\"panelOpen2\">\n                <div class=\"text-sm text-gray-800\">\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-ticket-account mr-2 color-blue text-xl\"></i>\n                        My Bookings\n                    </div>\n                    <div matRipple class=\"px-1 py-1 pb-2 flex items-center border-b border-gray-300\">\n                        <i class=\"mdi mdi-heart mr-2 color-blue text-xl \"></i>\n                        Following\n                    </div>\n                </div>\n            </ts-panel-body>\n        </ts-panel>\n        <div class=\"px-1 py-2 flex items-center justify-between\" (click)=\"logout()\" matRipple>\n            <span class=\"text-gray-700\">\n                Logout\n            </span>\n            <i class=\"mdi mdi-logout-variant text-2xl color-blue\"></i>\n        </div>\n    </div>\n</div>",
                styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}"]
            }),
            __metadata("design:paramtypes", [NotificationService, UserService, CookieService])
        ], UserMenuComponent);
        return UserMenuComponent;
    }());

    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    elements.TsFormsModule,
                    forms.ReactiveFormsModule,
                    ngRecaptcha.RecaptchaModule,
                    http.HttpClientModule,
                    core$1.MatRippleModule,
                    snackBar.MatSnackBarModule
                ],
                declarations: [
                    TsHeaderComponent,
                    TsFooterComponent,
                    SearchComponent,
                    TsLoginSignupComponent,
                    LoginTopContentComponent,
                    TsListingCardComponent,
                    RangeDatePipe,
                    SearchComponent,
                    CitySearchPopupComponent,
                    HamburgerMenuComponent,
                    UserMenuComponent
                ],
                exports: [
                    TsHeaderComponent,
                    TsFooterComponent,
                    TsLoginSignupComponent,
                    TsListingCardComponent,
                    UserMenuComponent
                ],
                providers: [TimeService, UserService, NotificationService, common.DatePipe, ApiService, CookieService, HeaderService]
            })
        ], LayoutModule);
        return LayoutModule;
    }());

    exports.ApiService = ApiService;
    exports.CitySearchPopupComponent = CitySearchPopupComponent;
    exports.HamburgerMenuComponent = HamburgerMenuComponent;
    exports.LayoutModule = LayoutModule;
    exports.SearchComponent = SearchComponent;
    exports.TimeService = TimeService;
    exports.TsControlValueAccessor = TsControlValueAccessor;
    exports.TsFooterComponent = TsFooterComponent;
    exports.TsHeaderComponent = TsHeaderComponent;
    exports.TsListingCardComponent = TsListingCardComponent;
    exports.TsLoginSignupComponent = TsLoginSignupComponent;
    exports.UserService = UserService;
    exports.config = config;
    exports.ɵa = CookieService;
    exports.ɵb = HeaderService;
    exports.ɵc = NotificationService;
    exports.ɵd = LoginTopContentComponent;
    exports.ɵe = RangeDatePipe;
    exports.ɵf = UserMenuComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=townscript-components.umd.js.map
