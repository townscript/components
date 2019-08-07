import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../../../shared/services/api-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment-timezone';
import { RecaptchaComponent } from 'ng-recaptcha';
import { CookieService } from './cookie.service';
import { UserService } from '../../../../shared/services/user-service';
import { MatDialogRef } from '@angular/material/dialog';
var headers = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9DTElFTlQiLCJzdWIiOiJhcGlAdG93bnNjcmlwdC5jb20iLCJhdWRpZW5jZSI6IndlYiIsImNyZWF0ZWQiOjE1NTgzMzUwNjI0MTksIlVTRVJfSUQiOjAsImV4cCI6MTU2NjExMTA2Mn0.FL9I1Rn0OtQ4eHdE1QaFtzI7WwHFPe_45p6sO4Civin_drrvp9itjvcoDHCPjz_4GeNN45mYGnHsQExVgTbHuA');
var TsLoginSignupComponent = /** @class */ (function () {
    function TsLoginSignupComponent(apiService, http, fb, cookieService, userService, dialogRef) {
        var _this = this;
        this.apiService = apiService;
        this.http = http;
        this.fb = fb;
        this.cookieService = cookieService;
        this.userService = userService;
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
            console.log(input);
            console.log(window);
            window.intlTelInput(input, {
                initialCountry: 'in',
                utilScripts: '../../../../../../node_modules/intl-tel-input/build/js/utils.js'
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
                console.log(userData);
                _this.userService.updateUser(userData);
                _this.close();
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
            template: "<section  class=\"container-background flex flex-row bg-white\">\n    <div id=\"login-signup-container\" class=\"z-10 bg-white w-2/5 sm:w-1/2 p-6 m-auto md:m-2 lg:m-2\">\n        <i (click)=\"takeMeBack()\" class=\"cursor-pointer material-icons\">arrow_back</i>     \n        <app-login-top-content [condition] = \"currScreen\"></app-login-top-content>\n        <form [formGroup]=\"loginForm\" class=\"w-full max-w-sm \">\n            <div *ngIf= \"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"firstName\" class=\" form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\" id=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"username\"></ts-input-text>\n                </div>\n            </div>\n            <div *ngIf= \"!showVerifyEmail\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"email\" class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\" id=\"user-email\" type=\"email\" name=\"email\" placeholder=\"Email\" autocomplete=\"user-email\" required></ts-input-text>\n                    <p class=\"text-sm text-red-500\" *ngIf=\"socialLoginMsg\">It seems you have signed up using Social Login.</p>\n                </div>\n                \n            </div>\n            <div *ngIf= \"ifSignIn || ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"password\"  class=\"form-control bg-white border-gray-500 rounded py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\" id=\"user-pwd\" type =\"password\" placeholder= \"Password\" autocomplete=\"current-password\"></ts-input-text>\n                </div>\n            </div>\n            <div *ngIf= \"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <input\n                    type=\"tel\"\n                    value=\"phone_number\"\n                    formControlName=\"phoneNumber\"\n                    class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\" id=\"phoneNumber\" type=\"tel\" placeholder=\"Phone no.\" autocomplete=\"user-phone\">\n                   \n                    \n                    <p class=\"text-sm text-red-500\" *ngIf=\"phoneError\">Please enter a valid Phone no.</p>\n                </div>\n            </div>\n            <div *ngIf=\"showVerifyEmail\" class=\"text-center\">\n                <img class=\"m-auto\" src=\"../../../../../assets/images/verify-email.png\">\n                <span class=\"text-sm\">Tap the link in the email we sent you at {{this.loginForm.value.email || 'someEMail'}}</span>\n            </div>\n            <div class=\"mt-5\">\n                <div *ngIf= \"ifUnverified\" class=\"w-full text-center\">\n                    <ts-button text=\"Continue\" [disabled]=\"!loginForm.valid\" (click) = \"verifyEmail()\" class=\"w-full\"></ts-button>\n                </div>\n                <div *ngIf= \"ifSignIn\" class=\"w-full text-center\">\n                    <ts-button text=\"Signin\" [disabled]=\"!loginForm.valid\" (click) = \"signIn()\" class=\"w-full\">\n                    </ts-button>\n                    <a (click) = \"forgotPassword()\" class=\" text-sm text-center verify-email py-2 px-2\">\n                        Forgot Password?\n                    </a>\n                </div>\n                <div *ngIf= \"ifSignUp\" class=\"w-full text-center\">\n                    <ts-button text=\"Create your account\" [disabled]=\"!loginForm.valid || phoneError\" (click) = \"recaptchaRef.execute()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"showResetPassword\" class=\"md:w-full text-center\">\n                    <ts-button text=\"Send Reset Password Link\" [disabled]=\"!loginForm.valid\" (click) = \"resetPassword()\" class=\"w-full\">\n                    </ts-button>\n                    <a (click) = \"resetPassword()\" class=\" text-sm text-center resend-email py-2 px-2\">\n                            Resend Email\n                    </a>\n                </div>\n                <div *ngIf=\"showVerifyEmail\" class=\"md:w-full text-center py-2 my-2 \">\n                    <ts-button text=\"Resend Verification Email\" [disabled]=\"!loginForm.valid\" (click) = \"resendVerifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                    <a  class=\" text-sm text-center resend-email py-2 px-2\">\n                        Why verify?\n                    </a>\n                </div>\n                <!-- <p class=\"text-sm\">\n                    Form Value: {{ loginForm.value | json }}\n                </p>\n                <p class=\"text-sm\">\n                    Form Status: {{ loginForm.status }}\n                </p> -->\n\n            </div>\n            <div class=\"form-group\">\n                <re-captcha\n                    #recaptchaRef=\"reCaptcha\"\n                    (resolved)=\"resolveAndProceed($event)\"\n                    siteKey= {{CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY}}\n                    size=\"invisible\"\n                ></re-captcha>\n\t\t\t</div>\n        </form>\n        <section id=\"social-signin-container\" *ngIf=\"showSocial\">\n            <div class=\"strike-through strike-through-margin\">\n                <span>\n                    <strong class=\"or-text\">or</strong>\n                </span>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button class=\"bg-white w-full p-2 flex flex-row leading-loose border border-gray-400 rounded shadow mb-2 justify-center\" \n                    (click)=\"onLoginWithGoogle()\" \n                    ts-data-analytics prop-event=\"click\" \n                    eventLabel=\"Login with Google\" \n                    prop-clicked-location=\"Sign In\">\n                        <div class=\"px-2\">\n                            <img src=\"../../../../../assets/images/google-min.png\"/>\n                        </div>\n                        <div class=\"text-sm\">\n                            <span class=\"no-margin\">Continue with Google</span>\n                        </div>\n                </button>\n                <p class=\"form-control--error\" ng-if=\"googleError.length\" ng-bind=\"googleError\"></p>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button class=\"bg-white w-full p-2 flex flex-row leading-loose border border-gray-400 rounded shadow mb-2 justify-center\" (click)=\"onLoginWithFB()\"\n                    ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Facebook\" prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img src=\"https://s3.ap-southeast-1.amazonaws.com/common-resources/assets/facebook-min-new.png\"/>\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Facebook</span>\n                    </div>\n                </button>\n                <ng-container class=\"login-error\" ng-if=\"fbError.length\">\n                    <i class=\"ion-android-alert\"></i>\n                    <p class=\"form-control--error\" ng-bind=\"fbError\"></p>\n                </ng-container>\n            </div>\n        </section>\n        <div *ngIf=\"ifSignUp\" class=\"agreement my-2 px-2\">\n            <div class=\"w-full hor-linear-grad m-2\"></div>\n            <p class=\"text-xs text-center\">By continuing, you agree to Townscript's <a class=\"text-blue-700\" href=\"/terms-and-conditions\">terms of service</a> and <a class=\"text-blue-700\" href=\"/privacy-policy\">privacy policy</a>.</p>\n        </div>\n    </div>\n    <div class=\"p-6 hidden md:block\">\n            <div class=\"flex flex-col\">\n                    <span class=\"text-2xl w-2/3\"><strong>301,589 event organizers trust us.</strong></span>\n                    <div class=\"flex flex-column my-2\">\n                        <i class=\"material-icons bg-purple-500 mr-2 rounded-full h-6 text-white\">done</i>\n                        <span>\n                            <p class=\"\">Quick and easy event creation</p>\n                            <p class=\"text-sm text-gray-600\">Create your event page, it is easy and customizable.</p>\n                        </span>\n                    </div>\n                    <div class=\"flex flex-column my-2\">\n                            <i class=\"material-icons bg-purple-500 mr-2 rounded-full h-6 text-white\">done</i>\n                            <span>\n                                <p class=\"\">Start selling tickets within minutes.</p>\n                                <p class=\"text-sm text-gray-600\">Link your bank account, verify identity details and start selling instantly.</p>\n                            </span>\n                    </div>\n                    <div class=\"flex flex-column my-2\">\n                            <i class=\"material-icons bg-purple-500 mr-2 rounded-full h-6 text-white\">done</i>\n                            <span>\n                                <p class=\"\">Simple Integration with your website.</p>\n                                <p class=\"text-sm text-gray-600\">Easy to start selling tickets directly from your website and facebook without developers.</p>\n                            </span>\n                    </div>\n                </div>\n    </div>\n    \n</section>\n",
            styles: [".container-background::before{color:#fff;background:url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'  preserveAspectRatio='none'><polygon points='0,110 0,50 300,0 300,300' width='100%' height='100%' style='fill:blue;'/></svg>\") 0 0/contain;width:30%;font-size:2em;padding:4px 40px}.strike-through-margin{margin:30px 0;text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em}.strike-through-margin span{background-color:#fff;padding:3px 30px}.strike-through{text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em;margin:30px auto}.strike-through span{background-color:#fff;padding:3px 30px}.hor-linear-grad{border:1px solid;border-left:0;border-right:0;-webkit-border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));-webkit-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);-o-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image-slice:1}.iti__flag{background-image:url(../../../../../../node_modules/intl-tel-input/build/img/flags.png)}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.iti__flag{background-image:url(../../../../../../node_modules/intl-tel-input/build/img/flags@2x.png)}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService,
            HttpClient,
            FormBuilder,
            CookieService,
            UserService,
            MatDialogRef])
    ], TsLoginSignupComponent);
    return TsLoginSignupComponent;
}());
export { TsLoginSignupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEtBQUssTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV4RCxJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsNlFBQTZRLENBQUMsQ0FBQztBQU90VTtJQTZCSSxnQ0FBbUIsVUFBc0IsRUFDN0IsSUFBZ0IsRUFDaEIsRUFBZSxFQUNmLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3pCLFNBQStDO1FBTDFELGlCQU1LO1FBTmMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUM3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FB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LENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQS9DRDtRQURDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzswQ0FDMUMsa0JBQWtCO2dFQUFDO0lBSHhCLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLHV5VEFBK0M7O1NBRWxELENBQUM7aURBOEJpQyxVQUFVO1lBQ3ZCLFVBQVU7WUFDWixXQUFXO1lBQ0EsYUFBYTtZQUNmLFdBQVc7WUFDZCxZQUFZO09BbEN6QixzQkFBc0IsQ0ErU2xDO0lBQUQsNkJBQUM7Q0FBQSxBQS9TRCxJQStTQztTQS9TWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcbmltcG9ydCB7IFJlY2FwdGNoYUNvbXBvbmVudCB9IGZyb20gJ25nLXJlY2FwdGNoYSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLXNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQXV0aG9yaXphdGlvbicsICdleUpoYkdjaU9pSklVelV4TWlKOS5leUpTVDB4Rklqb2lVazlNUlY5RFRFbEZUbFFpTENKemRXSWlPaUpoY0dsQWRHOTNibk5qY21sd2RDNWpiMjBpTENKaGRXUnBaVzVqWlNJNkluZGxZaUlzSW1OeVpXRjBaV1FpT2pFMU5UZ3pNelV3TmpJME1Ua3NJbFZUUlZKZlNVUWlPakFzSW1WNGNDSTZNVFUyTmpFeE1UQTJNbjAuRkw5STFSbjBPdFE0ZUhkRTFRYUZ0ekk3V3dIRlBlXzQ1cDZzTzRDaXZpbl9kcnJ2cDlpdGp2Y29ESENQanpfNEdlTk40NW1ZR25Ic1FFeFZnVGJIdUEnKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtdHMtbG9naW4tc2lnbnVwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90cy1sb2dpbi1zaWdudXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUc0xvZ2luU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvLyBAVmlld0NoaWxkKFJlY2FwdGNoYUNvbXBvbmVudCwgeyByZWFkOiB0cnVlLCBzdGF0aWM6IHRydWUgfSkgcmVjYXB0Y2hhOiBSZWNhcHRjaGFDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZCgncmVjYXB0Y2hhUmVmJywgeyByZWFkOiB0cnVlLCBzdGF0aWM6IHRydWUgfSlcbiAgICByZWNhcHRjaGFSZWY6IFJlY2FwdGNoYUNvbXBvbmVudDtcbiAgICBzaG93U29jaWFsID0gdHJ1ZTtcbiAgICBzaG93ID0gZmFsc2U7XG4gICAgc2hvd1Bhc3N3b3JkID0gZmFsc2U7XG4gICAgcmR1cmwgPSAnJztcbiAgICBpZlNpZ25JbiA9IGZhbHNlO1xuICAgIGlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgaWZTaWduVXAgPSBmYWxzZTtcbiAgICBzaG93VmVyaWZ5RW1haWwgPSBmYWxzZTtcbiAgICBzaG93UmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuICAgIGlzVXNlclZlcmlmaWVkOiBhbnk7XG4gICAgQ0FQVENIQV9TSVRFX0lOVklTSUJMRV9DQVBUQ0hBX0tFWSA9ICc2TGNBcTRRVUFBQUFBQnJPbnAweHdzYVJrN1BnbkNnbUUtRkRjYkxHJztcbiAgICB1c2VyVGltZXpvbmUgPSBtb21lbnQudHouZ3Vlc3MoKTtcbiAgICBsb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIHBob25lTnVtYmVyOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgY2FwdGNoYVJlc3BvbnNlID0gJyc7XG4gICAgY3VyclNjcmVlbjogc3RyaW5nO1xuICAgIGNvcnJlY3RQaG9uZU51bWJlciA9IG51bGw7XG4gICAgcGhvbmVFcnJvciA9IGZhbHNlO1xuICAgIHNvY2lhbExvZ2luTXNnID0gZmFsc2U7XG4gICAgaW5pdGlhbGl6ZVRlbElucHV0IDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VHNMb2dpblNpZ251cENvbXBvbmVudD5cbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgnZmlyc3ROYW1lJykuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bob25lTnVtYmVyJykuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZVbnZlcmlmaWVkJztcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gICAgcHVibGljIHJlc29sdmVBbmRQcm9jZWVkKGNhcHRjaGFSZXNwb25zZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2FwdGNoYVJlc3BvbnNlID0gY2FwdGNoYVJlc3BvbnNlO1xuICAgICAgICB0aGlzLnNpZ251cCgpO1xuICAgIH1cblxuICAgIHBhc3N3b3JkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIH1cblxuICAgIG9uTG9naW5XaXRoRkIgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovLycgKyB0aGlzLmFwaVNlcnZpY2UuaG9zdE5hbWUgKyAnL2FwaS91c2VyL3NpZ25pbndpdGhmYWNlYm9vaycgK1xuICAgICAgICAgICAgKHRoaXMucmR1cmwgPT09IHVuZGVmaW5lZCA/ICcnIDogJz9yZHVybD0nICsgdGhpcy5yZHVybCksICdfc2VsZicpO1xuICAgIH1cblxuICAgIG9uTG9naW5XaXRoR29vZ2xlID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly8nICsgdGhpcy5hcGlTZXJ2aWNlLmhvc3ROYW1lICsgJy9hcGkvdXNlci9zaWduaW53aXRoZ29vZ2xlJyArXG4gICAgICAgICAgICAodGhpcy5yZHVybCA9PT0gdW5kZWZpbmVkID8gJycgOiAnP3JkdXJsPScgKyB0aGlzLnJkdXJsKSwgJ19zZWxmJyk7XG4gICAgfVxuXG4gICAgZ2V0RW1haWxWZXJpZnlSZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tU3RyaW5nOiBgZW1haWw9YCArIHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL2dldHVzZXJzaWdudXBkZXRhaWxzJyxcbiAgICAgICAgICAgIHsgcGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShtYXAoZGF0YSA9PiAoZGF0YSkpKTtcbiAgICB9XG5cbiAgICB2ZXJpZnlFbWFpbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5nZXRFbWFpbFZlcmlmeVJlc3BvbnNlKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJldERhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBKU09OLnBhcnNlKHJldERhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0RhdGEgJiYgbmV3RGF0YS5pc0V4aXN0aW5nVXNlciAmJiBuZXdEYXRhLmlzTWFudWFsU2lnbnVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlNpZ25JbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZTaWduVXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlNpZ25Jbic7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaWFsTG9naW5Nc2cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0RhdGEgJiYgbmV3RGF0YS5pc0V4aXN0aW5nVXNlciAmJiAhbmV3RGF0YS5pc01hbnVhbFNpZ251cCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2lhbExvZ2luTXNnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlNpZ25JbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmU2lnblVwJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdmaXJzdE5hbWUnKS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bob25lTnVtYmVyJykuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaWFsTG9naW5Nc2cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplVGVsSW5wdXQgPSBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVJbnRsVGVsSW5wdXQoKTsgXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZUludGxUZWxJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgIC8vIGluaXRpYWxpemUgaW50bCB0ZWxcbiAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lTnVtYmVyJyk7XG4gICAgICAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpO1xuICAgICAgICAgKDxhbnk+d2luZG93KS5pbnRsVGVsSW5wdXQoaW5wdXQsIHtcbiAgICAgICAgICAgICBpbml0aWFsQ291bnRyeTogJ2luJyxcbiAgICAgICAgICAgICB1dGlsU2NyaXB0czogJy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbnRsLXRlbC1pbnB1dC9idWlsZC9qcy91dGlscy5qcydcbiAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc2lnbkluID0gKCkgPT4ge1xuICAgICAgICBhbGVydCgneW91IGhhdmUgc2lnbmVkIGluJyk7XG4gICAgICAgIHRoaXMucG9zdFNpZ25JbkNyZWRlbnRpYWxzKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJldERhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IChyZXREYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0geyAuLi5yZXREYXRhLnVzZXJEZXRhaWxzLCAuLi50b2tlbkRhdGEgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0Q29va2llKCd0b3duc2NyaXB0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIDkwLCAnLycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIodXNlckRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlZGlyZWN0VG9MaXN0aW5ncygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNpZ251cCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucG9zdFNpZ251cENyZWRlbnRpYWxzKCkudG9Qcm9taXNlKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgc2VsZi5zaG93VmVyaWZ5RW1haWwgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5zaG93U29jaWFsID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLmN1cnJTY3JlZW4gPSAnc2hvd1ZlcmlmeUVtYWlsJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yZ290UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMuc2hvd1Jlc2V0UGFzc3dvcmQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZlNpZ25JbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnc2hvd1Jlc2V0UGFzc3dvcmQnO1xuICAgIH1cblxuICAgIHRha2VNZUJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNob3dSZXNldFBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZVbnZlcmlmaWVkJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlmU2lnbkluKSB7XG4gICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlmU2lnbkluID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZlNpZ25VcCkge1xuICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdmaXJzdE5hbWUnKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dWZXJpZnlFbWFpbCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VmVyaWZ5RW1haWwgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bob25lTnVtYmVyJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHBvc3RTaWduSW5DcmVkZW50aWFscyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvZ2luT2JqID0ge1xuICAgICAgICAgICAgZW1haWxJZDogdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgICAgZnJvbVN0cmluZzogYGVtYWlsSWQ9YCArIHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsICsgYCZwYXNzd29yZD1gICsgdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvbG9naW53aXRodG93bnNjcmlwdCcsXG4gICAgICAgICAgICBsb2dpbk9iaiwgeyBwYXJhbXM6IHBhcmFtcywgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKG1hcChkYXRhID0+IChkYXRhKSkpO1xuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmRDcmVkZW50aWFscyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSB7XG4gICAgICAgICAgICBlbWFpbElkOiB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd2ZXJpZnkvc2VuZGZvcmdvdHB3ZGVtYWlsJyxcbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShtYXAoZGF0YSA9PiAoZGF0YSkpKTtcbiAgICB9XG5cbiAgICByZWRpcmVjdFRvTGlzdGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCcvJywgJ19zZWxmJyk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkQ3JlZGVudGlhbHMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcG9zdFNpZ251cENyZWRlbnRpYWxzID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbnVwT2JqID0ge1xuICAgICAgICAgICAgZW1haWxJZDogdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLmxvZ2luRm9ybS52YWx1ZS5maXJzdE5hbWUsXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy5yYW5kb21TdHJpbmcoMTAsICcnKSxcbiAgICAgICAgICAgIHBob25lOiB0aGlzLmNvcnJlY3RQaG9uZU51bWJlcixcbiAgICAgICAgICAgIHVzZXJ0aW1lem9uZTogdGhpcy51c2VyVGltZXpvbmUsXG4gICAgICAgICAgICByZUNhcHRjaGE6IHRoaXMuY2FwdGNoYVJlc3BvbnNlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGhpcy5sb2dpbkZvcm0udmFsdWUuZmlyc3ROYW1lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbGlkJywgdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bhc3N3b3JkJywgdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bob25lJywgdGhpcy5jb3JyZWN0UGhvbmVOdW1iZXIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJ0aW1lem9uZScsIHRoaXMudXNlclRpbWV6b25lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZUNhcHRjaGEnLCB0aGlzLmNhcHRjaGFSZXNwb25zZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcm5hbWUnLCB0aGlzLnJhbmRvbVN0cmluZygxMCwgJycpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvcmVnaXN0ZXJ3aXRodG93bnNjcmlwdHdpdGhjYXB0Y2hhJyxcbiAgICAgICAgICAgIGZvcm1EYXRhLCB7IGhlYWRlcnM6IGhlYWRlcnMsIHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pO1xuICAgIH1cblxuICAgIHJhbmRvbVN0cmluZyA9IChsZW4sIGFuKSA9PiB7XG4gICAgICAgIGFuID0gYW4gJiYgYW4udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHN0ciA9ICcnLCBpID0gMCwgbWluID0gYW4gPT0gJ2EnID8gMTAgOiAwLCBtYXggPSBhbiA9PSAnbicgPyAxMCA6IDYyO1xuICAgICAgICBmb3IgKDsgaSsrIDwgbGVuOykge1xuICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4gPDwgMDtcbiAgICAgICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHIgKz0gciA+IDkgPyByIDwgMzYgPyA1NSA6IDYxIDogNDgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcmVzZW5kVmVyaWZ5RW1haWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZW5kVmVyaWZ5RW1haWxDcmVkZW50aWFsKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJldERhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCd2ZXJpZmljYXRpb24gZW1haWwgaGFzIGJlZW4gc2VudCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJlc2VuZFZlcmlmeUVtYWlsQ3JlZGVudGlhbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZW1haWxPYmogPSB7XG4gICAgICAgICAgICBlbWFpbElkOiB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndXNlci9yZXNlbmR2ZXJpZmljYXRpb25jb2RlJyxcbiAgICAgICAgICAgIGVtYWlsT2JqLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShtYXAoZGF0YSA9PiAoZGF0YSkpKTtcbiAgICB9XG5cbiAgICBoYXNFcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIHRoaXMucGhvbmVFcnJvciA9ICFldmVudDtcbiAgICB9XG5cbiAgICB0ZWxJbnB1dE9iamVjdCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfVxuXG4gICAgb25Db3VudHJ5Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICB9XG5cbiAgICBnZXROdW1iZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICB0aGlzLmNvcnJlY3RQaG9uZU51bWJlciA9IGV2ZW50O1xuICAgIH1cblxufVxuIl19