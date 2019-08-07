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
import { NotificationService } from '../../../../shared/services/notification.service';
const headers = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9DTElFTlQiLCJzdWIiOiJhcGlAdG93bnNjcmlwdC5jb20iLCJhdWRpZW5jZSI6IndlYiIsImNyZWF0ZWQiOjE1NTgzMzUwNjI0MTksIlVTRVJfSUQiOjAsImV4cCI6MTU2NjExMTA2Mn0.FL9I1Rn0OtQ4eHdE1QaFtzI7WwHFPe_45p6sO4Civin_drrvp9itjvcoDHCPjz_4GeNN45mYGnHsQExVgTbHuA');
let TsLoginSignupComponent = class TsLoginSignupComponent {
    constructor(apiService, http, fb, cookieService, userService, notificationService, dialogRef) {
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
        this.password = () => {
            this.show = !this.show;
        };
        this.onLoginWithFB = () => {
            window.open('https://' + this.apiService.hostName + '/api/user/signinwithfacebook' +
                (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl), '_self');
        };
        this.onLoginWithGoogle = () => {
            window.open('https://' + this.apiService.hostName + '/api/user/signinwithgoogle' +
                (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl), '_self');
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
            // console.log(input);
            // console.log(window);
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
                this.cookieService.setCookie('townscript-user', JSON.stringify(userData), 90, '/');
                // console.log(userData);
                this.userService.updateUser(userData);
                this.close();
                this.notificationService.success("Congrats! You are signed in", 2000, "Dismiss");
                // this.redirectToListings();
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
            const signupObj = {
                emailId: this.loginForm.value.email,
                password: this.loginForm.value.password,
                name: this.loginForm.value.firstName,
                username: this.randomString(10, ''),
                phone: this.correctPhoneNumber,
                usertimezone: this.userTimezone,
                reCaptcha: this.captchaResponse
            };
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
        this.hasError = (event) => {
            // console.log(event);
            this.phoneError = !event;
        };
        this.telInputObject = (event) => {
            // console.log(event);
        };
        this.onCountryChange = (event) => {
            // console.log(event);
        };
        this.getNumber = (event) => {
            // console.log(event);
            this.correctPhoneNumber = event;
        };
    }
    ngOnInit() {
        this.loginForm.get('firstName').disable();
        this.loginForm.get('password').disable();
        this.loginForm.get('phoneNumber').disable();
        this.currScreen = 'ifUnverified';
    }
    close() {
        this.dialogRef.close();
    }
    resolveAndProceed(captchaResponse) {
        this.captchaResponse = captchaResponse;
        this.signup();
    }
};
tslib_1.__decorate([
    ViewChild('recaptchaRef', { read: true, static: true }),
    tslib_1.__metadata("design:type", RecaptchaComponent)
], TsLoginSignupComponent.prototype, "recaptchaRef", void 0);
TsLoginSignupComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ts-login-signup',
        template: "<section class=\"container-background flex flex-row bg-white\">\n    <div id=\"login-signup-container\" class=\"z-10 bg-white w-2/5 sm:w-1/2 p-6 m-auto md:m-2 lg:m-2\">\n        <i (click)=\"takeMeBack()\" class=\"cursor-pointer material-icons\">arrow_back</i>\n        <app-login-top-content [condition]=\"currScreen\"></app-login-top-content>\n        <form [formGroup]=\"loginForm\" class=\"w-full max-w-sm \">\n            <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"firstName\"\n                        class=\" form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"username\"></ts-input-text>\n                </div>\n            </div>\n            <div *ngIf=\"!showVerifyEmail\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"email\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"user-email\" type=\"email\" name=\"email\" placeholder=\"Email\" autocomplete=\"user-email\"\n                        required></ts-input-text>\n                    <p class=\"text-sm text-red-500\" *ngIf=\"socialLoginMsg\">It seems you have signed up using Social\n                        Login.</p>\n                </div>\n\n            </div>\n            <div *ngIf=\"ifSignIn || ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"password\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"user-pwd\" type=\"password\" placeholder=\"Password\" autocomplete=\"current-password\">\n                    </ts-input-text>\n                </div>\n            </div>\n            <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <input type=\"tel\" value=\"phone_number\" formControlName=\"phoneNumber\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"phoneNumber\" type=\"tel\" placeholder=\"Phone no.\" autocomplete=\"user-phone\">\n\n\n                    <p class=\"text-sm text-red-500\" *ngIf=\"phoneError\">Please enter a valid Phone no.</p>\n                </div>\n            </div>\n            <div *ngIf=\"showVerifyEmail\" class=\"text-center\">\n                <img class=\"m-auto\" src=\"../../../../../assets/images/verify-email.png\">\n                <span class=\"text-sm\">Tap the link in the email we sent you at\n                    {{this.loginForm.value.email || 'someEMail'}}</span>\n            </div>\n            <div class=\"mt-5\">\n                <div *ngIf=\"ifUnverified\" class=\"w-full text-center\">\n                    <ts-button text=\"Continue\" [disabled]=\"!loginForm.valid\" (click)=\"verifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"ifSignIn\" class=\"w-full text-center\">\n                    <ts-button text=\"Signin\" [disabled]=\"!loginForm.valid\" (click)=\"signIn()\" class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"forgotPassword()\" class=\" text-sm text-center verify-email py-2 px-2\">\n                        Forgot Password?\n                    </a>\n                </div>\n                <div *ngIf=\"ifSignUp\" class=\"w-full text-center\">\n                    <ts-button text=\"Create your account\" [disabled]=\"!loginForm.valid || phoneError\"\n                        (click)=\"recaptchaRef.execute()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"showResetPassword\" class=\"md:w-full text-center\">\n                    <ts-button text=\"Send Reset Password Link\" [disabled]=\"!loginForm.valid\" (click)=\"resetPassword()\"\n                        class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"resetPassword()\" class=\" text-sm text-center resend-email py-2 px-2\">\n                        Resend Email\n                    </a>\n                </div>\n                <div *ngIf=\"showVerifyEmail\" class=\"md:w-full text-center py-2 my-2 \">\n                    <ts-button text=\"Resend Verification Email\" [disabled]=\"!loginForm.valid\"\n                        (click)=\"resendVerifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                    <a class=\" text-sm text-center resend-email py-2 px-2\">\n                        Why verify?\n                    </a>\n                </div>\n                <!-- <p class=\"text-sm\">\n                    Form Value: {{ loginForm.value | json }}\n                </p>\n                <p class=\"text-sm\">\n                    Form Status: {{ loginForm.status }}\n                </p> -->\n\n            </div>\n            <div class=\"form-group\">\n                <re-captcha #recaptchaRef=\"reCaptcha\" (resolved)=\"resolveAndProceed($event)\"\n                    siteKey={{CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY}} size=\"invisible\"></re-captcha>\n            </div>\n        </form>\n        <section id=\"social-signin-container\" *ngIf=\"showSocial\">\n            <div class=\"strike-through strike-through-margin\">\n                <span>\n                    <strong class=\"or-text\">or</strong>\n                </span>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row leading-loose border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithGoogle()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Google\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img src=\"../../../../../assets/images/google-min.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Google</span>\n                    </div>\n                </button>\n                <p class=\"form-control--error\" ng-if=\"googleError.length\" ng-bind=\"googleError\"></p>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row leading-loose border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithFB()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Facebook\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img\n                            src=\"https://s3.ap-southeast-1.amazonaws.com/common-resources/assets/facebook-min-new.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Facebook</span>\n                    </div>\n                </button>\n                <ng-container class=\"login-error\" ng-if=\"fbError.length\">\n                    <i class=\"ion-android-alert\"></i>\n                    <p class=\"form-control--error\" ng-bind=\"fbError\"></p>\n                </ng-container>\n            </div>\n        </section>\n        <div *ngIf=\"ifSignUp\" class=\"agreement my-2 px-2\">\n            <div class=\"w-full hor-linear-grad m-2\"></div>\n            <p class=\"text-xs text-center\">By continuing, you agree to Townscript's <a class=\"text-blue-700\"\n                    href=\"/terms-and-conditions\">terms of service</a> and <a class=\"text-blue-700\"\n                    href=\"/privacy-policy\">privacy policy</a>.</p>\n        </div>\n    </div>\n    <div class=\"p-6 hidden md:block\">\n        <div class=\"flex flex-col mt-8\">\n            <span class=\"text-2xl w-2/3 whitespace-no-wrap mb-4 text-gray-900\">\n                <strong>301,589 event organizers trust us.</strong>\n            </span>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Quick and easy event creation</p>\n                    <p class=\"text-sm text-gray-600\">Create your event page, it is easy and customizable.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Start selling tickets within minutes.</p>\n                    <p class=\"text-sm text-gray-600\">Link your bank account, verify identity details and start selling\n                        instantly.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Simple Integration with your website.</p>\n                    <p class=\"text-sm text-gray-600\">Easy to start selling tickets directly from your website and\n                        facebook without developers.</p>\n                </span>\n            </div>\n        </div>\n    </div>\n\n</section>",
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
export { TsLoginSignupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEtBQUssTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV2RixNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsNlFBQTZRLENBQUMsQ0FBQztBQU90VSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQTZCL0IsWUFBbUIsVUFBc0IsRUFDN0IsSUFBZ0IsRUFDaEIsRUFBZSxFQUNmLGFBQTRCLEVBQzVCLFdBQXdCLEVB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O0lBQ3JDLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ00saUJBQWlCLENBQUMsZUFBdUI7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0E4UEosQ0FBQTtBQTlTRztJQURDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztzQ0FDMUMsa0JBQWtCOzREQUFDO0FBSHhCLHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLDh6VEFBK0M7O0tBRWxELENBQUM7NkNBOEJpQyxVQUFVO1FBQ3ZCLFVBQVU7UUFDWixXQUFXO1FBQ0EsYUFBYTtRQUNmLFdBQVc7UUFDSCxtQkFBbUI7UUFDOUIsWUFBWTtHQW5DekIsc0JBQXNCLENBaVRsQztTQWpUWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcbmltcG9ydCB7IFJlY2FwdGNoYUNvbXBvbmVudCB9IGZyb20gJ25nLXJlY2FwdGNoYSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLXNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuXG5jb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdBdXRob3JpemF0aW9uJywgJ2V5SmhiR2NpT2lKSVV6VXhNaUo5LmV5SlNUMHhGSWpvaVVrOU1SVjlEVEVsRlRsUWlMQ0p6ZFdJaU9pSmhjR2xBZEc5M2JuTmpjbWx3ZEM1amIyMGlMQ0poZFdScFpXNWpaU0k2SW5kbFlpSXNJbU55WldGMFpXUWlPakUxTlRnek16VXdOakkwTVRrc0lsVlRSVkpmU1VRaU9qQXNJbVY0Y0NJNk1UVTJOakV4TVRBMk1uMC5GTDlJMVJuME90UTRlSGRFMVFhRnR6STdXd0hGUGVfNDVwNnNPNENpdmluX2RycnZwOWl0anZjb0RIQ1Bqel80R2VOTjQ1bVlHbkhzUUV4VmdUYkh1QScpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC10cy1sb2dpbi1zaWdudXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90cy1sb2dpbi1zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRzTG9naW5TaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vIEBWaWV3Q2hpbGQoUmVjYXB0Y2hhQ29tcG9uZW50LCB7IHJlYWQ6IHRydWUsIHN0YXRpYzogdHJ1ZSB9KSByZWNhcHRjaGE6IFJlY2FwdGNoYUNvbXBvbmVudDtcbiAgICBAVmlld0NoaWxkKCdyZWNhcHRjaGFSZWYnLCB7IHJlYWQ6IHRydWUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHJlY2FwdGNoYVJlZjogUmVjYXB0Y2hhQ29tcG9uZW50O1xuICAgIHNob3dTb2NpYWwgPSB0cnVlO1xuICAgIHNob3cgPSBmYWxzZTtcbiAgICBzaG93UGFzc3dvcmQgPSBmYWxzZTtcbiAgICByZHVybCA9ICcnO1xuICAgIGlmU2lnbkluID0gZmFsc2U7XG4gICAgaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICBpZlNpZ25VcCA9IGZhbHNlO1xuICAgIHNob3dWZXJpZnlFbWFpbCA9IGZhbHNlO1xuICAgIHNob3dSZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgaXNVc2VyVmVyaWZpZWQ6IGFueTtcbiAgICBDQVBUQ0hBX1NJVEVfSU5WSVNJQkxFX0NBUFRDSEFfS0VZID0gJzZMY0FxNFFVQUFBQUFCck9ucDB4d3NhUms3UGduQ2dtRS1GRGNiTEcnO1xuICAgIHVzZXJUaW1lem9uZSA9IG1vbWVudC50ei5ndWVzcygpO1xuICAgIGxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICBjYXB0Y2hhUmVzcG9uc2UgPSAnJztcbiAgICBjdXJyU2NyZWVuOiBzdHJpbmc7XG4gICAgY29ycmVjdFBob25lTnVtYmVyID0gbnVsbDtcbiAgICBwaG9uZUVycm9yID0gZmFsc2U7XG4gICAgc29jaWFsTG9naW5Nc2cgPSBmYWxzZTtcbiAgICBpbml0aWFsaXplVGVsSW5wdXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICAgICAgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VHNMb2dpblNpZ251cENvbXBvbmVudD4sXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuICAgIHB1YmxpYyByZXNvbHZlQW5kUHJvY2VlZChjYXB0Y2hhUmVzcG9uc2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhcHRjaGFSZXNwb25zZSA9IGNhcHRjaGFSZXNwb25zZTtcbiAgICAgICAgdGhpcy5zaWdudXAoKTtcbiAgICB9XG5cbiAgICBwYXNzd29yZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB9XG5cbiAgICBvbkxvZ2luV2l0aEZCID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly8nICsgdGhpcy5hcGlTZXJ2aWNlLmhvc3ROYW1lICsgJy9hcGkvdXNlci9zaWduaW53aXRoZmFjZWJvb2snICtcbiAgICAgICAgICAgICh0aGlzLnJkdXJsID09PSB1bmRlZmluZWQgPyAnJyA6ICc/cmR1cmw9JyArIHRoaXMucmR1cmwpLCAnX3NlbGYnKTtcbiAgICB9XG5cbiAgICBvbkxvZ2luV2l0aEdvb2dsZSA9ICgpID0+IHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vJyArIHRoaXMuYXBpU2VydmljZS5ob3N0TmFtZSArICcvYXBpL3VzZXIvc2lnbmlud2l0aGdvb2dsZScgK1xuICAgICAgICAgICAgKHRoaXMucmR1cmwgPT09IHVuZGVmaW5lZCA/ICcnIDogJz9yZHVybD0nICsgdGhpcy5yZHVybCksICdfc2VsZicpO1xuICAgIH1cblxuICAgIGdldEVtYWlsVmVyaWZ5UmVzcG9uc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbVN0cmluZzogYGVtYWlsPWAgKyB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndXNlci9nZXR1c2Vyc2lnbnVwZGV0YWlscycsXG4gICAgICAgICAgICB7IHBhcmFtczogcGFyYW1zLCBoZWFkZXJzOiBoZWFkZXJzIH0pLnBpcGUobWFwKGRhdGEgPT4gKGRhdGEpKSk7XG4gICAgfVxuXG4gICAgdmVyaWZ5RW1haWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0RW1haWxWZXJpZnlSZXNwb25zZSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXREYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gSlNPTi5wYXJzZShyZXREYXRhLmRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdEYXRhICYmIG5ld0RhdGEuaXNFeGlzdGluZ1VzZXIgJiYgbmV3RGF0YS5pc01hbnVhbFNpZ251cCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZTaWduSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZTaWduSW4nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2lhbExvZ2luTXNnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdEYXRhICYmIG5ld0RhdGEuaXNFeGlzdGluZ1VzZXIgJiYgIW5ld0RhdGEuaXNNYW51YWxTaWdudXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxMb2dpbk1zZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZTaWduSW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlNpZ25VcCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgnZmlyc3ROYW1lJykuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2lhbExvZ2luTXNnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRlbElucHV0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVJbnRsVGVsSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBpbml0aWFsaXplSW50bFRlbElucHV0ID0gKCkgPT4ge1xuICAgICAgICAvLyBpbml0aWFsaXplIGludGwgdGVsXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lTnVtYmVyJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93KTtcbiAgICAgICAgKDxhbnk+d2luZG93KS5pbnRsVGVsSW5wdXQoaW5wdXQsIHtcbiAgICAgICAgICAgIGluaXRpYWxDb3VudHJ5OiAnaW4nLFxuICAgICAgICAgICAgdXRpbFNjcmlwdHM6ICcuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaW50bC10ZWwtaW5wdXQvYnVpbGQvanMvdXRpbHMuanMnXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc2lnbkluID0gKCkgPT4ge1xuICAgICAgICAvLyBhbGVydCgneW91IGhhdmUgc2lnbmVkIGluJyk7XG4gICAgICAgIHRoaXMucG9zdFNpZ25JbkNyZWRlbnRpYWxzKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJldERhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IChyZXREYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0geyAuLi5yZXREYXRhLnVzZXJEZXRhaWxzLCAuLi50b2tlbkRhdGEgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2Uuc2V0Q29va2llKCd0b3duc2NyaXB0LXVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIDkwLCAnLycpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIodXNlckRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2VzcyhcIkNvbmdyYXRzISBZb3UgYXJlIHNpZ25lZCBpblwiLCAyMDAwLCBcIkRpc21pc3NcIik7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZWRpcmVjdFRvTGlzdGluZ3MoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaWdudXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvc3RTaWdudXBDcmVkZW50aWFscygpLnRvUHJvbWlzZSgpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHNlbGYuc2hvd1ZlcmlmeUVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuc2hvd1NvY2lhbCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5jdXJyU2NyZWVuID0gJ3Nob3dWZXJpZnlFbWFpbCc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvcmdvdFBhc3N3b3JkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZGlzYWJsZSgpO1xuICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93U29jaWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWZTaWduSW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ3Nob3dSZXNldFBhc3N3b3JkJztcbiAgICB9XG5cbiAgICB0YWtlTWVCYWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zaG93UmVzZXRQYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZlNpZ25Jbikge1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93UmVzZXRQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25JbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWZTaWduVXApIHtcbiAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaWZTaWduVXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZVbnZlcmlmaWVkJztcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgnZmlyc3ROYW1lJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGhvbmVOdW1iZXInKS5kaXNhYmxlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93VmVyaWZ5RW1haWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1ZlcmlmeUVtYWlsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdmaXJzdE5hbWUnKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwb3N0U2lnbkluQ3JlZGVudGlhbHMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5sb2dpbkZvcm0udmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2dpbk9iaiA9IHtcbiAgICAgICAgICAgIGVtYWlsSWQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICAgIGZyb21TdHJpbmc6IGBlbWFpbElkPWAgKyB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbCArIGAmcGFzc3dvcmQ9YCArIHRoaXMubG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL2xvZ2lud2l0aHRvd25zY3JpcHQnLFxuICAgICAgICAgICAgbG9naW5PYmosIHsgcGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShtYXAoZGF0YSA9PiAoZGF0YSkpKTtcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkQ3JlZGVudGlhbHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0ge1xuICAgICAgICAgICAgZW1haWxJZDogdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndmVyaWZ5L3NlbmRmb3Jnb3Rwd2RlbWFpbCcsXG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pLnBpcGUobWFwKGRhdGEgPT4gKGRhdGEpKSk7XG4gICAgfVxuXG4gICAgcmVkaXJlY3RUb0xpc3RpbmdzID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignLycsICdfc2VsZicpO1xuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRQYXNzd29yZENyZWRlbnRpYWxzKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlc3A6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBvc3RTaWdudXBDcmVkZW50aWFscyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpZ251cE9iaiA9IHtcbiAgICAgICAgICAgIGVtYWlsSWQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMubG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5sb2dpbkZvcm0udmFsdWUuZmlyc3ROYW1lLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMucmFuZG9tU3RyaW5nKDEwLCAnJyksXG4gICAgICAgICAgICBwaG9uZTogdGhpcy5jb3JyZWN0UGhvbmVOdW1iZXIsXG4gICAgICAgICAgICB1c2VydGltZXpvbmU6IHRoaXMudXNlclRpbWV6b25lLFxuICAgICAgICAgICAgcmVDYXB0Y2hhOiB0aGlzLmNhcHRjaGFSZXNwb25zZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMubG9naW5Gb3JtLnZhbHVlLmZpcnN0TmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWxpZCcsIHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHRoaXMubG9naW5Gb3JtLnZhbHVlLnBhc3N3b3JkKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwaG9uZScsIHRoaXMuY29ycmVjdFBob25lTnVtYmVyKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VydGltZXpvbmUnLCB0aGlzLnVzZXJUaW1lem9uZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmVDYXB0Y2hhJywgdGhpcy5jYXB0Y2hhUmVzcG9uc2UpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJuYW1lJywgdGhpcy5yYW5kb21TdHJpbmcoMTAsICcnKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL3JlZ2lzdGVyd2l0aHRvd25zY3JpcHR3aXRoY2FwdGNoYScsXG4gICAgICAgICAgICBmb3JtRGF0YSwgeyBoZWFkZXJzOiBoZWFkZXJzLCByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KTtcbiAgICB9XG5cbiAgICByYW5kb21TdHJpbmcgPSAobGVuLCBhbikgPT4ge1xuICAgICAgICBhbiA9IGFuICYmIGFuLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBzdHIgPSAnJywgaSA9IDAsIG1pbiA9IGFuID09ICdhJyA/IDEwIDogMCwgbWF4ID0gYW4gPT0gJ24nID8gMTAgOiA2MjtcbiAgICAgICAgZm9yICg7IGkrKyA8IGxlbjspIHtcbiAgICAgICAgICAgIGxldCByID0gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluIDw8IDA7XG4gICAgICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyICs9IHIgPiA5ID8gciA8IDM2ID8gNTUgOiA2MSA6IDQ4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHJlc2VuZFZlcmlmeUVtYWlsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2VuZFZlcmlmeUVtYWlsQ3JlZGVudGlhbCgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXREYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydCgndmVyaWZpY2F0aW9uIGVtYWlsIGhhcyBiZWVuIHNlbnQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICByZXNlbmRWZXJpZnlFbWFpbENyZWRlbnRpYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVtYWlsT2JqID0ge1xuICAgICAgICAgICAgZW1haWxJZDogdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvcmVzZW5kdmVyaWZpY2F0aW9uY29kZScsXG4gICAgICAgICAgICBlbWFpbE9iaiwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pLnBpcGUobWFwKGRhdGEgPT4gKGRhdGEpKSk7XG4gICAgfVxuXG4gICAgaGFzRXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICB0aGlzLnBob25lRXJyb3IgPSAhZXZlbnQ7XG4gICAgfVxuXG4gICAgdGVsSW5wdXRPYmplY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH1cblxuICAgIG9uQ291bnRyeUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0TnVtYmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgdGhpcy5jb3JyZWN0UGhvbmVOdW1iZXIgPSBldmVudDtcbiAgICB9XG5cbn1cbiJdfQ==