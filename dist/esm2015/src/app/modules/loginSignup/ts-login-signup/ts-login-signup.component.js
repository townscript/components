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
const headers = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9DTElFTlQiLCJzdWIiOiJhcGlAdG93bnNjcmlwdC5jb20iLCJhdWRpZW5jZSI6IndlYiIsImNyZWF0ZWQiOjE1NTgzMzUwNjI0MTksIlVTRVJfSUQiOjAsImV4cCI6MTU2NjExMTA2Mn0.FL9I1Rn0OtQ4eHdE1QaFtzI7WwHFPe_45p6sO4Civin_drrvp9itjvcoDHCPjz_4GeNN45mYGnHsQExVgTbHuA');
let TsLoginSignupComponent = class TsLoginSignupComponent {
    constructor(apiService, http, fb, cookieService, userService, notificationService) {
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
        this.rdurl = '/marketplace';
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
        this.password = () => {
            this.show = !this.show;
        };
        this.onLoginWithFB = () => {
            const url = 'https://' + this.apiService.hostName + '/api/user/signinwithfacebook' +
                (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl);
            window.open(url, '_self');
        };
        this.onLoginWithGoogle = () => {
            const url = 'https://' + this.apiService.hostName + '/api/user/signinwithgoogle' +
                (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl);
            console.log(url);
            window.open(url, '_self');
        };
        this.getEmailVerifyResponse = () => {
            const params = new HttpParams({ fromString: `email=` + this.loginForm.value.email });
            return this.http.get(this.apiService.API_SERVER + 'user/getusersignupdetails', { params: params, headers: headers }).pipe(map(data => (data)));
        };
        this.verifyEmail = () => {
            this.getEmailVerifyResponse().subscribe((retData) => {
                const newData = JSON.parse(retData.data);
                if (newData && newData.isExistingUser && newData.isManualSignup) {
                    this.loginForm.get('password').enable();
                    this.ifSignIn = true;
                    this.ifUnverified = false;
                    this.ifSignUp = false;
                    this.showSocial = false;
                    this.currScreen = 'ifSignIn';
                    this.socialLoginMsg = false;
                }
                else if (newData && newData.isExistingUser && !newData.isManualSignup) {
                    this.socialLoginMsg = true;
                }
                else {
                    this.ifSignUp = true;
                    this.ifSignIn = false;
                    this.ifUnverified = false;
                    this.showSocial = false;
                    this.currScreen = 'ifSignUp';
                    this.loginForm.get('firstName').enable();
                    this.loginForm.get('password').enable();
                    this.loginForm.get('phoneNumber').enable();
                    this.socialLoginMsg = false;
                    this.initializeTelInput = setTimeout(() => {
                        this.initializeIntlTelInput();
                    }, 200);
                }
            }, (error) => {
            });
        };
        this.initializeIntlTelInput = () => {
            // initialize intl tel
            const input = document.querySelector('#phoneNumber');
            window.intlTelInput(input, {
                initialCountry: 'in',
                utilScripts: '../../../../../../node_modules/intl-tel-input/build/js/utils.js'
            });
        };
        this.signIn = () => {
            // alert('you have signed in');
            this.postSignInCredentials().subscribe((retData) => {
                const tokenData = {
                    token: (retData.data)
                };
                const userData = Object.assign({}, retData.userDetails, tokenData);
                this.userService.updateUser(userData);
                this.notificationService.success("Congrats! You are signed in", 2000, "Dismiss");
                if (this.mode === 'dialog') {
                    this.close();
                }
                this.redirectToListings();
            }, (error) => {
            });
        };
        this.signup = () => {
            const self = this;
            this.postSignupCredentials().toPromise().then(function (data) {
                self.showVerifyEmail = true;
                self.showSocial = false;
                self.ifSignUp = false;
                self.currScreen = 'showVerifyEmail';
            });
        };
        this.forgotPassword = () => {
            this.loginForm.get('password').disable();
            this.showResetPassword = true;
            this.showSocial = false;
            this.ifSignIn = false;
            this.currScreen = 'showResetPassword';
        };
        this.takeMeBack = () => {
            if (this.showResetPassword) {
                this.ifUnverified = true;
                this.showResetPassword = false;
                this.ifSignUp = false;
                this.currScreen = 'ifUnverified';
            }
            else if (this.ifSignIn) {
                this.ifSignUp = false;
                this.showResetPassword = false;
                this.ifUnverified = true;
                this.ifSignIn = false;
                this.showSocial = true;
                this.currScreen = 'ifUnverified';
            }
            else if (this.ifSignUp) {
                this.ifUnverified = true;
                this.ifSignUp = false;
                this.showSocial = true;
                this.currScreen = 'ifUnverified';
                this.loginForm.get('firstName').disable();
                this.loginForm.get('password').disable();
                this.loginForm.get('phoneNumber').disable();
            }
            else if (this.showVerifyEmail) {
                this.showVerifyEmail = false;
                this.ifUnverified = true;
                this.showSocial = true;
                this.ifSignUp = false;
                this.loginForm.get('firstName').disable();
                this.loginForm.get('password').disable();
                this.loginForm.get('phoneNumber').disable();
                this.currScreen = 'ifUnverified';
            }
        };
        this.postSignInCredentials = () => {
            if (!this.loginForm.valid) {
                return;
            }
            const loginObj = {
                emailId: this.loginForm.value.email,
                password: this.loginForm.value.password
            };
            const params = new HttpParams({
                fromString: `emailId=` + this.loginForm.value.email + `&password=` + this.loginForm.value.password
            });
            return this.http.post(this.apiService.API_SERVER + 'user/loginwithtownscript', loginObj, { params: params, headers: headers }).pipe(map(data => (data)));
        };
        this.resetPasswordCredentials = () => {
            const forgotPassword = {
                emailId: this.loginForm.value.email
            };
            return this.http.post(this.apiService.API_SERVER + 'verify/sendforgotpwdemail', forgotPassword, { headers: headers }).pipe(map(data => (data)));
        };
        this.redirectToListings = () => {
            window.open('/', '_self');
        };
        this.resetPassword = () => {
            this.resetPasswordCredentials().subscribe((resp) => {
                // console.log(resp);
            }, (error) => {
                // console.log(error);
            });
        };
        this.postSignupCredentials = () => {
            if (!this.loginForm.valid) {
                return;
            }
            const input = document.querySelector('#phoneNumber');
            const iti = window.intlTelInputGlobals.getInstance(input);
            this.correctPhoneNumber = iti.getNumber();
            if (this.correctPhoneNumber === '') {
                return;
            }
            const formData = new FormData();
            formData.append('name', this.loginForm.value.firstName);
            formData.append('emailid', this.loginForm.value.email);
            formData.append('password', this.loginForm.value.password);
            formData.append('phone', this.correctPhoneNumber);
            formData.append('usertimezone', this.userTimezone);
            formData.append('reCaptcha', this.captchaResponse);
            formData.append('username', this.randomString(10, ''));
            return this.http.post(this.apiService.API_SERVER + 'user/registerwithtownscriptwithcaptcha', formData, { headers: headers, responseType: 'text' });
        };
        this.randomString = (len, an) => {
            an = an && an.toLowerCase();
            let str = '', i = 0, min = an == 'a' ? 10 : 0, max = an == 'n' ? 10 : 62;
            for (; i++ < len;) {
                let r = Math.random() * (max - min) + min << 0;
                str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
            }
            return str;
        };
        this.resendVerifyEmail = () => {
            this.resendVerifyEmailCredential().subscribe((retData) => {
                alert('verification email has been sent');
            }, (error) => {
                // console.log('error');
            });
        };
        this.resendVerifyEmailCredential = () => {
            const emailObj = {
                emailId: this.loginForm.value.email
            };
            return this.http.post(this.apiService.API_SERVER + 'user/resendverificationcode', emailObj, { headers: headers }).pipe(map(data => (data)));
        };
    }
    ngOnInit() {
        this.loginForm.get('firstName').disable();
        this.loginForm.get('password').disable();
        this.loginForm.get('phoneNumber').disable();
        this.currScreen = 'ifUnverified';
    }
    close() {
        this.closeDialog.emit(true);
    }
    resolveAndProceed(captchaResponse) {
        this.captchaResponse = captchaResponse;
        this.signup();
    }
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
        template: "<section [ngClass]=\"(mode=='dialog') ? \n            'bg-white container-background flex flex-row m-auto overflow:hidden'\n            :'flex flex-row m-auto overflow:hidden'\">\n    <div id=\"login-signup-container\" [ngClass]=\"(mode=='dialog') ? 'z-10 bg-white w-full p-6 m-auto md:m-2 lg:m-2'\n            : 'login-card-box z-10 bg-white max-w-sm w-full p-10'\">\n        <i *ngIf=\"!ifUnverified\" (click)=\"takeMeBack()\" class=\"cursor-pointer mdi mdi-arrow-left\">arrow_back</i>\n        <app-login-top-content [condition]=\"currScreen\"></app-login-top-content>\n        <form [formGroup]=\"loginForm\" class=\"w-full\">\n            <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"firstName\"\n                        class=\" form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"username\"></ts-input-text>\n                </div>\n            </div>\n            <div *ngIf=\"!showVerifyEmail\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"email\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"user-email\" type=\"email\" name=\"email\" placeholder=\"Email\" autocomplete=\"user-email\"\n                        required></ts-input-text>\n                    <p class=\"text-sm text-red-500\" *ngIf=\"socialLoginMsg\">It seems you have signed up using Social\n                        Login.</p>\n                </div>\n\n            </div>\n            <div *ngIf=\"ifSignIn || ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"password\" appPassword\n                        class=\"form-control bg-white border-gray-500 rounded py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"user-pwd\" [type]=\"'password'\" placeholder=\"Password\" autocomplete=\"current-password\">\n                    </ts-input-text>\n                </div>\n            </div>\n            <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <input type=\"tel\" value=\"phone_number\" formControlName=\"phoneNumber\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"phoneNumber\" type=\"tel\" placeholder=\"Phone no.\" autocomplete=\"user-phone\">\n\n\n                    <p class=\"text-sm text-red-500\" *ngIf=\"phoneError\">Please enter a valid Phone no.</p>\n                </div>\n            </div>\n            <div *ngIf=\"showVerifyEmail\" class=\"text-center\">\n                <img class=\"m-auto\" src=\"../../../../../assets/images/verify-email.png\">\n                <span class=\"text-sm\">Tap the link in the email we sent you at\n                    {{this.loginForm.value.email}}</span>\n            </div>\n            <div class=\"mt-5\">\n                <div *ngIf=\"ifUnverified\" class=\"w-full text-center\">\n                    <ts-button text=\"Continue\" [disabled]=\"!loginForm.valid\" (click)=\"verifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"ifSignIn\" class=\"w-full text-center\">\n                    <ts-button text=\"Sign in\" [disabled]=\"!loginForm.valid\" (click)=\"signIn()\" class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"forgotPassword()\" class=\" text-sm text-center verify-email py-2 px-2\">\n                        Forgot Password?\n                    </a>\n                </div>\n                <div *ngIf=\"ifSignUp\" class=\"w-full text-center\">\n                    <ts-button text=\"Create your account\" [disabled]=\"!loginForm.valid || phoneError\"\n                        (click)=\"recaptchaRef.execute()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"showResetPassword\" class=\"md:w-full text-center\">\n                    <ts-button text=\"Send Reset Password Link\" [disabled]=\"!loginForm.valid\" (click)=\"resetPassword()\"\n                        class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"resetPassword()\" class=\" text-sm text-center resend-email py-2 px-2\">\n                        Resend Email\n                    </a>\n                </div>\n                <div *ngIf=\"showVerifyEmail\" class=\"md:w-full text-center py-2 my-2 \">\n                    <ts-button text=\"Resend Verification Email\" [disabled]=\"!loginForm.valid\"\n                        (click)=\"resendVerifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                    <a class=\" text-sm text-center resend-email py-2 px-2\">\n                        Why verify?\n                    </a>\n                </div>\n                <!-- <p class=\"text-sm\">\n                    Form Value: {{ loginForm.value | json }}\n                </p>\n                <p class=\"text-sm\">\n                    Form Status: {{ loginForm.status }}\n                </p> -->\n\n            </div>\n            <div class=\"form-group\">\n                <re-captcha #recaptchaRef=\"reCaptcha\" (resolved)=\"resolveAndProceed($event)\"\n                    siteKey={{CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY}} size=\"invisible\"></re-captcha>\n            </div>\n        </form>\n        <section id=\"social-signin-container\" *ngIf=\"showSocial\">\n            <div class=\"strike-through strike-through-margin\">\n                <span>\n                    <strong class=\"or-text\">or</strong>\n                </span>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithGoogle()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Google\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\" matRipple>\n                        <img  class=\"logo\" \n                            src=\"/assets/images/google-min.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Google</span>\n                    </div>\n                </button>\n                <p class=\"form-control--error\" ng-if=\"googleError.length\" ng-bind=\"googleError\"></p>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithFB()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Facebook\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img class=\"logo\"\n                            src=\"/assets/images/facebook-min.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Facebook</span>\n                    </div>\n                </button>\n                <ng-container class=\"login-error\" ng-if=\"fbError.length\">\n                    <i class=\"ion-android-alert\"></i>\n                    <p class=\"form-control--error\" ng-bind=\"fbError\"></p>\n                </ng-container>\n            </div>\n        </section>\n        <div *ngIf=\"ifUnverified ||  ifSignUp\" class=\"agreement my-2 px-2\">\n            <div class=\"w-full hor-linear-grad m-4\"></div>\n            <p class=\"text-xs text-center\">By continuing, you agree to Townscript's <a class=\"text-blue-700\"\n                    href=\"/terms-and-conditions\">terms of service</a> and <a class=\"text-blue-700\"\n                    href=\"/privacy-policy\">privacy policy</a>.</p>\n        </div>\n    </div>\n    <div [ngClass]=\"(mode=='dialog') ? 'hidden' : 'ml-20 p-6 hidden md:block'\">\n        <div class=\"flex flex-col mt-4\">\n            <span class=\"text-2xl w-2/3 mb-4 text-gray-900\">\n                <strong>301,589 event organizers trust us.</strong>\n            </span>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Quick and easy event creation</p>\n                    <p class=\"text-sm text-gray-600\">Create your event page, it is easy and customizable.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Start selling tickets within minutes.</p>\n                    <p class=\"text-sm text-gray-600\">Link your bank account, verify identity details and start selling\n                        instantly.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Simple Integration with your website.</p>\n                    <p class=\"text-sm text-gray-600\">Easy to start selling tickets directly from your website and\n                        facebook without developers.</p>\n                </span>\n            </div>\n        </div>\n    </div>\n\n</section>",
        styles: [".container-background::before{color:#fff;background:url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'  preserveAspectRatio='none'><polygon points='0,110 0,50 300,0 300,300' width='100%' height='100%' style='fill:blue;'/></svg>\") 0 0/contain;width:30%;font-size:2em;padding:4px 40px}.strike-through-margin{margin:30px 0;text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em}.strike-through-margin span{background-color:#fff;padding:3px 30px}.strike-through{text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em;margin:30px auto}.strike-through span{background-color:#fff;padding:3px 30px}.hor-linear-grad{border:1px solid;border-left:0;border-right:0;-webkit-border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));-webkit-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);-o-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image-slice:1}.iti__flag{background-image:url(../../../../../node_modules/intl-tel-input/build/img/flags.png)}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.iti__flag{background-image:url(../../../../../node_modules/intl-tel-input/build/img/flags@2x.png)}}#social-signin-container .logo{width:22px;height:22px}.mkt-content{background-color:#f1f1f1}.login-card-box{box-shadow:0 0 8px rgba(0,0,0,.25);border-radius:5px;max-width:460px}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ApiService,
        HttpClient,
        FormBuilder,
        CookieService,
        UserService,
        NotificationService])
], TsLoginSignupComponent);
export { TsLoginSignupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbG9naW5TaWdudXAvdHMtbG9naW4tc2lnbnVwL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXBGLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSw2UUFBNlEsQ0FBQyxDQUFDO0FBT3RVLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBOEIvQixZQUFtQixVQUFzQixFQUM3QixJQUFnQixFQUNoQixFQUFlLEVBQ2YsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsbUJBQXdDO1FBTGpD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LFVBQVU7UUFDdkIsVUFBVTtRQUNaLFdBQVc7UUFDQSxhQUFhO1FBQ2YsV0FBVztRQUNILG1CQUFtQjtHQW5DM0Msc0JBQXNCLENBaVNsQztTQWpTWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuaW1wb3J0IHsgUmVjYXB0Y2hhQ29tcG9uZW50IH0gZnJvbSAnbmctcmVjYXB0Y2hhJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Nvb2tpZS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXItc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQXV0aG9yaXphdGlvbicsICdleUpoYkdjaU9pSklVelV4TWlKOS5leUpTVDB4Rklqb2lVazlNUlY5RFRFbEZUbFFpTENKemRXSWlPaUpoY0dsQWRHOTNibk5qY21sd2RDNWpiMjBpTENKaGRXUnBaVzVqWlNJNkluZGxZaUlzSW1OeVpXRjBaV1FpT2pFMU5UZ3pNelV3TmpJME1Ua3NJbFZUUlZKZlNVUWlPakFzSW1WNGNDSTZNVFUyTmpFeE1UQTJNbjAuRkw5STFSbjBPdFE0ZUhkRTFRYUZ0ekk3V3dIRlBlXzQ1cDZzTzRDaXZpbl9kcnJ2cDlpdGp2Y29ESENQanpfNEdlTk40NW1ZR25Ic1FFeFZnVGJIdUEnKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtdHMtbG9naW4tc2lnbnVwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90cy1sb2dpbi1zaWdudXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUc0xvZ2luU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBtb2RlO1xuICAgIEBPdXRwdXQoKSBjbG9zZURpYWxvZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAVmlld0NoaWxkKCdyZWNhcHRjaGFSZWYnLCB7IHJlYWQ6IHRydWUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHJlY2FwdGNoYVJlZjogUmVjYXB0Y2hhQ29tcG9uZW50O1xuICAgIHNob3dTb2NpYWwgPSB0cnVlO1xuICAgIHNob3cgPSBmYWxzZTtcbiAgICBzaG93UGFzc3dvcmQgPSBmYWxzZTtcbiAgICByZHVybCA9ICcvbWFya2V0cGxhY2UnO1xuICAgIGlmU2lnbkluID0gZmFsc2U7XG4gICAgaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICBpZlNpZ25VcCA9IGZhbHNlO1xuICAgIHNob3dWZXJpZnlFbWFpbCA9IGZhbHNlO1xuICAgIHNob3dSZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgaXNVc2VyVmVyaWZpZWQ6IGFueTtcbiAgICBDQVBUQ0hBX1NJVEVfSU5WSVNJQkxFX0NBUFRDSEFfS0VZID0gJzZMY0FxNFFVQUFBQUFCck9ucDB4d3NhUms3UGduQ2dtRS1GRGNiTEcnO1xuICAgIHVzZXJUaW1lem9uZSA9IERhdGVUaW1lLmxvY2FsKCkuem9uZU5hbWU7XG4gICAgbG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBwaG9uZU51bWJlcjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIGNhcHRjaGFSZXNwb25zZSA9ICcnO1xuICAgIGN1cnJTY3JlZW46IHN0cmluZztcbiAgICBjb3JyZWN0UGhvbmVOdW1iZXIgPSBudWxsO1xuICAgIHBob25lRXJyb3IgPSBmYWxzZTtcbiAgICBzb2NpYWxMb2dpbk1zZyA9IGZhbHNlO1xuICAgIGluaXRpYWxpemVUZWxJbnB1dDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG5cbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jbG9zZURpYWxvZy5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNvbHZlQW5kUHJvY2VlZChjYXB0Y2hhUmVzcG9uc2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhcHRjaGFSZXNwb25zZSA9IGNhcHRjaGFSZXNwb25zZTtcbiAgICAgICAgdGhpcy5zaWdudXAoKTtcbiAgICB9XG5cbiAgICBwYXNzd29yZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB9XG5cbiAgICBvbkxvZ2luV2l0aEZCID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly8nICsgdGhpcy5hcGlTZXJ2aWNlLmhvc3ROYW1lICsgJy9hcGkvdXNlci9zaWduaW53aXRoZmFjZWJvb2snICtcbiAgICAgICAgICAgICh0aGlzLnJkdXJsID09PSB1bmRlZmluZWQgPyAnJyA6ICc/cmR1cmw9JyArIHRoaXMucmR1cmwpO1xuICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfc2VsZicpO1xuICAgIH1cblxuICAgIG9uTG9naW5XaXRoR29vZ2xlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly8nICsgdGhpcy5hcGlTZXJ2aWNlLmhvc3ROYW1lICsgJy9hcGkvdXNlci9zaWduaW53aXRoZ29vZ2xlJyArXG4gICAgICAgICAgICAodGhpcy5yZHVybCA9PT0gdW5kZWZpbmVkID8gJycgOiAnP3JkdXJsPScgKyB0aGlzLnJkdXJsKTtcbiAgICAgICAgY29uc29sZS5sb2codXJsKTtcbiAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnX3NlbGYnKTtcbiAgICB9XG5cbiAgICBnZXRFbWFpbFZlcmlmeVJlc3BvbnNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IGBlbWFpbD1gICsgdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvZ2V0dXNlcnNpZ251cGRldGFpbHMnLFxuICAgICAgICAgICAgeyBwYXJhbXM6IHBhcmFtcywgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKG1hcChkYXRhID0+IChkYXRhKSkpO1xuICAgIH1cblxuICAgIHZlcmlmeUVtYWlsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmdldEVtYWlsVmVyaWZ5UmVzcG9uc2UoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmV0RGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IEpTT04ucGFyc2UocmV0RGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3RGF0YSAmJiBuZXdEYXRhLmlzRXhpc3RpbmdVc2VyICYmIG5ld0RhdGEuaXNNYW51YWxTaWdudXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmU2lnbkluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmU2lnbkluJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxMb2dpbk1zZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3RGF0YSAmJiBuZXdEYXRhLmlzRXhpc3RpbmdVc2VyICYmICFuZXdEYXRhLmlzTWFudWFsU2lnbnVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaWFsTG9naW5Nc2cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZTaWduVXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmU2lnbkluID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZTaWduVXAnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGhvbmVOdW1iZXInKS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxMb2dpbk1zZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVUZWxJbnB1dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplSW50bFRlbElucHV0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZUludGxUZWxJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBpbnRsIHRlbFxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaG9uZU51bWJlcicpO1xuXG4gICAgICAgICg8YW55PndpbmRvdykuaW50bFRlbElucHV0KGlucHV0LCB7XG4gICAgICAgICAgICBpbml0aWFsQ291bnRyeTogJ2luJyxcbiAgICAgICAgICAgIHV0aWxTY3JpcHRzOiAnLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ludGwtdGVsLWlucHV0L2J1aWxkL2pzL3V0aWxzLmpzJ1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHNpZ25JbiA9ICgpID0+IHtcbiAgICAgICAgLy8gYWxlcnQoJ3lvdSBoYXZlIHNpZ25lZCBpbicpO1xuICAgICAgICB0aGlzLnBvc3RTaWduSW5DcmVkZW50aWFscygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXREYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbkRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAocmV0RGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHsgLi4ucmV0RGF0YS51c2VyRGV0YWlscywgLi4udG9rZW5EYXRhIH07XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVVc2VyKHVzZXJEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2VzcyhcIkNvbmdyYXRzISBZb3UgYXJlIHNpZ25lZCBpblwiLCAyMDAwLCBcIkRpc21pc3NcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2RpYWxvZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9MaXN0aW5ncygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNpZ251cCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucG9zdFNpZ251cENyZWRlbnRpYWxzKCkudG9Qcm9taXNlKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgc2VsZi5zaG93VmVyaWZ5RW1haWwgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5zaG93U29jaWFsID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLmN1cnJTY3JlZW4gPSAnc2hvd1ZlcmlmeUVtYWlsJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yZ290UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMuc2hvd1Jlc2V0UGFzc3dvcmQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZlNpZ25JbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnc2hvd1Jlc2V0UGFzc3dvcmQnO1xuICAgIH1cblxuICAgIHRha2VNZUJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNob3dSZXNldFBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZVbnZlcmlmaWVkJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlmU2lnbkluKSB7XG4gICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlmU2lnbkluID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZlNpZ25VcCkge1xuICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdmaXJzdE5hbWUnKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dWZXJpZnlFbWFpbCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VmVyaWZ5RW1haWwgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bob25lTnVtYmVyJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHBvc3RTaWduSW5DcmVkZW50aWFscyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvZ2luT2JqID0ge1xuICAgICAgICAgICAgZW1haWxJZDogdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgICAgZnJvbVN0cmluZzogYGVtYWlsSWQ9YCArIHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsICsgYCZwYXNzd29yZD1gICsgdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvbG9naW53aXRodG93bnNjcmlwdCcsXG4gICAgICAgICAgICBsb2dpbk9iaiwgeyBwYXJhbXM6IHBhcmFtcywgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKG1hcChkYXRhID0+IChkYXRhKSkpO1xuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmRDcmVkZW50aWFscyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSB7XG4gICAgICAgICAgICBlbWFpbElkOiB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd2ZXJpZnkvc2VuZGZvcmdvdHB3ZGVtYWlsJyxcbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShtYXAoZGF0YSA9PiAoZGF0YSkpKTtcbiAgICB9XG5cbiAgICByZWRpcmVjdFRvTGlzdGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCcvJywgJ19zZWxmJyk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkQ3JlZGVudGlhbHMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcG9zdFNpZ251cENyZWRlbnRpYWxzID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvbmVOdW1iZXInKTtcbiAgICAgICAgY29uc3QgaXRpID0gKDxhbnk+d2luZG93KS5pbnRsVGVsSW5wdXRHbG9iYWxzLmdldEluc3RhbmNlKGlucHV0KTtcbiAgICAgICAgdGhpcy5jb3JyZWN0UGhvbmVOdW1iZXIgPSBpdGkuZ2V0TnVtYmVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdFBob25lTnVtYmVyID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGhpcy5sb2dpbkZvcm0udmFsdWUuZmlyc3ROYW1lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbGlkJywgdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bhc3N3b3JkJywgdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bob25lJywgdGhpcy5jb3JyZWN0UGhvbmVOdW1iZXIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJ0aW1lem9uZScsIHRoaXMudXNlclRpbWV6b25lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZUNhcHRjaGEnLCB0aGlzLmNhcHRjaGFSZXNwb25zZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcm5hbWUnLCB0aGlzLnJhbmRvbVN0cmluZygxMCwgJycpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvcmVnaXN0ZXJ3aXRodG93bnNjcmlwdHdpdGhjYXB0Y2hhJyxcbiAgICAgICAgICAgIGZvcm1EYXRhLCB7IGhlYWRlcnM6IGhlYWRlcnMsIHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pO1xuICAgIH1cblxuICAgIHJhbmRvbVN0cmluZyA9IChsZW4sIGFuKSA9PiB7XG4gICAgICAgIGFuID0gYW4gJiYgYW4udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHN0ciA9ICcnLCBpID0gMCwgbWluID0gYW4gPT0gJ2EnID8gMTAgOiAwLCBtYXggPSBhbiA9PSAnbicgPyAxMCA6IDYyO1xuICAgICAgICBmb3IgKDsgaSsrIDwgbGVuOykge1xuICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4gPDwgMDtcbiAgICAgICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHIgKz0gciA+IDkgPyByIDwgMzYgPyA1NSA6IDYxIDogNDgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcmVzZW5kVmVyaWZ5RW1haWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZW5kVmVyaWZ5RW1haWxDcmVkZW50aWFsKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJldERhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCd2ZXJpZmljYXRpb24gZW1haWwgaGFzIGJlZW4gc2VudCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJlc2VuZFZlcmlmeUVtYWlsQ3JlZGVudGlhbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZW1haWxPYmogPSB7XG4gICAgICAgICAgICBlbWFpbElkOiB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndXNlci9yZXNlbmR2ZXJpZmljYXRpb25jb2RlJyxcbiAgICAgICAgICAgIGVtYWlsT2JqLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShtYXAoZGF0YSA9PiAoZGF0YSkpKTtcbiAgICB9XG5cbn0iXX0=