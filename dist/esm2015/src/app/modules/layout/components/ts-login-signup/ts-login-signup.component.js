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
        console.log(this.userTimezone);
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
export { TsLoginSignupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUV2RixNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsNlFBQTZRLENBQUMsQ0FBQztBQU90VSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQTZCL0IsWUFBbUIsVUFBc0IsRUFDN0IsSUFBZ0IsRUFDaEIsRUFBZSxFQUNmLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN6QyxTQUErQztRQU52QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQzdCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDekMsY0FBUyxHQUFULFNBQVMsQ0FBc0M7UUEvQjFELGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFVBQUssR0FBRyw2QkFBNkIsQ0FBQztRQUN0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRTFCLHVDQUFrQyxHQUFHLDBDQUEwQyxDQUFDO1FBQ2hGLGlCQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxjQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDekMsQ0FBQyxDQUFDO1FBQ0gsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFFckIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUE4QnZCLGFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUE7UUFFRCxrQkFBYSxHQUFHLEdBQUcsRUFBRTtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyw4QkFBOEI7Z0JBQzlFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUE7UUFFRCxzQkFBaUIsR0FBRyxHQUFHLEVBQUU7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsNEJBQTRCO2dCQUM1RSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFBO1FBRUQsMkJBQXNCLEdBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLEVBQ3pFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFBO1FBRUQsZ0JBQVcsR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxTQUFTLENBQ25DLENBQUMsT0FBWSxFQUFFLEVBQUU7Z0JBQ2IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTtvQkFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7aUJBQy9CO3FCQUFNLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxjQUFjLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO29CQUNyRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztpQkFDOUI7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO29CQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQ3RDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO29CQUNsQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ1g7WUFDTCxDQUFDLEVBQ0QsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNWLENBQUMsQ0FDSixDQUFDO1FBRU4sQ0FBQyxDQUFBO1FBRUQsMkJBQXNCLEdBQUcsR0FBRyxFQUFFO1lBQzFCLHNCQUFzQjtZQUN0QixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JELHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDakIsTUFBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7Z0JBQzlCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixXQUFXLEVBQUUsaUVBQWlFO2FBQ2pGLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQTtRQUVELFdBQU0sR0FBRyxHQUFHLEVBQUU7WUFDViwrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsU0FBUyxDQUNsQyxDQUFDLE9BQVksRUFBRSxFQUFFO2dCQUNiLE1BQU0sU0FBUyxHQUFHO29CQUNkLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7aUJBQ3hCLENBQUM7Z0JBRUYsTUFBTSxRQUFRLHFCQUFRLE9BQU8sQ0FBQyxXQUFXLEVBQUssU0FBUyxDQUFFLENBQUM7Z0JBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRix5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ2pGLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzlCLENBQUMsRUFDRCxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ1YsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQUE7UUFFRCxXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUFFRCxtQkFBYyxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUM7UUFDMUMsQ0FBQyxDQUFBO1FBRUQsZUFBVSxHQUFHLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO2FBQ3BDO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO2FBQ3BDO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDL0M7aUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7YUFDcEM7UUFFTCxDQUFDLENBQUE7UUFFRCwwQkFBcUIsR0FBRyxHQUFHLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUN2QixPQUFPO2FBQ1Y7WUFDRCxNQUFNLFFBQVEsR0FBRztnQkFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSztnQkFDbkMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDMUMsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO2dCQUMxQixVQUFVLEVBQUUsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUTthQUNyRyxDQUFDLENBQUM7WUFFSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLDBCQUEwQixFQUN6RSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUE7UUFFRCw2QkFBd0IsR0FBRyxHQUFHLEVBQUU7WUFDNUIsTUFBTSxjQUFjLEdBQUc7Z0JBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQ3RDLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLDJCQUEyQixFQUMxRSxjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFBO1FBRUQsdUJBQWtCLEdBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQTtRQUVELGtCQUFhLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLFNBQVMsQ0FDckMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDVixxQkFBcUI7WUFDekIsQ0FBQyxFQUNELENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQ1gsc0JBQXNCO1lBQzFCLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUFBO1FBRUQsMEJBQXFCLEdBQUcsR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtnQkFDdkIsT0FBTzthQUNWO1lBQ0QsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxNQUFNLEdBQUcsR0FBUyxNQUFPLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFMUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssRUFBRSxFQUFFO2dCQUNoQyxPQUFPO2FBQ1Y7WUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hELFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNELFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xELFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRCxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbkQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLHdDQUF3QyxFQUN2RixRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQTtRQUVELGlCQUFZLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdkIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN6RSxPQUFPLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRztnQkFDZixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDL0MsR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNsRTtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQyxDQUFBO1FBRUQsc0JBQWlCLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLFNBQVMsQ0FDeEMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtnQkFDYixLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQ0QsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDWCx3QkFBd0I7WUFDNUIsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQUE7UUFDRCxnQ0FBMkIsR0FBRyxHQUFHLEVBQUU7WUFDL0IsTUFBTSxRQUFRLEdBQUc7Z0JBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUs7YUFDdEMsQ0FBQztZQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsNkJBQTZCLEVBQzVFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUE7UUF6UEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQztJQUVyQyxDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNNLGlCQUFpQixDQUFDLGVBQXVCO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBME9KLENBQUE7QUE3Ukc7SUFEQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7c0NBQzFDLGtCQUFrQjs0REFBQztBQUh4QixzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQiwyMFRBQStDOztLQUVsRCxDQUFDOzZDQThCaUMsVUFBVTtRQUN2QixVQUFVO1FBQ1osV0FBVztRQUNBLGFBQWE7UUFDZixXQUFXO1FBQ0gsbUJBQW1CO1FBQzlCLFlBQVk7R0FuQ3pCLHNCQUFzQixDQWdTbEM7U0FoU1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCB7IFJlY2FwdGNoYUNvbXBvbmVudCB9IGZyb20gJ25nLXJlY2FwdGNoYSc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLXNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuXG5jb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdBdXRob3JpemF0aW9uJywgJ2V5SmhiR2NpT2lKSVV6VXhNaUo5LmV5SlNUMHhGSWpvaVVrOU1SVjlEVEVsRlRsUWlMQ0p6ZFdJaU9pSmhjR2xBZEc5M2JuTmpjbWx3ZEM1amIyMGlMQ0poZFdScFpXNWpaU0k2SW5kbFlpSXNJbU55WldGMFpXUWlPakUxTlRnek16VXdOakkwTVRrc0lsVlRSVkpmU1VRaU9qQXNJbVY0Y0NJNk1UVTJOakV4TVRBMk1uMC5GTDlJMVJuME90UTRlSGRFMVFhRnR6STdXd0hGUGVfNDVwNnNPNENpdmluX2RycnZwOWl0anZjb0RIQ1Bqel80R2VOTjQ1bVlHbkhzUUV4VmdUYkh1QScpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC10cy1sb2dpbi1zaWdudXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90cy1sb2dpbi1zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRzTG9naW5TaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vIEBWaWV3Q2hpbGQoUmVjYXB0Y2hhQ29tcG9uZW50LCB7IHJlYWQ6IHRydWUsIHN0YXRpYzogdHJ1ZSB9KSByZWNhcHRjaGE6IFJlY2FwdGNoYUNvbXBvbmVudDtcbiAgICBAVmlld0NoaWxkKCdyZWNhcHRjaGFSZWYnLCB7IHJlYWQ6IHRydWUsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHJlY2FwdGNoYVJlZjogUmVjYXB0Y2hhQ29tcG9uZW50O1xuICAgIHNob3dTb2NpYWwgPSB0cnVlO1xuICAgIHNob3cgPSBmYWxzZTtcbiAgICBzaG93UGFzc3dvcmQgPSBmYWxzZTtcbiAgICByZHVybCA9ICd3d3cudHNkdWdvdXQuaW4vbWFya2V0cGxhY2UnO1xuICAgIGlmU2lnbkluID0gZmFsc2U7XG4gICAgaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICBpZlNpZ25VcCA9IGZhbHNlO1xuICAgIHNob3dWZXJpZnlFbWFpbCA9IGZhbHNlO1xuICAgIHNob3dSZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgaXNVc2VyVmVyaWZpZWQ6IGFueTtcbiAgICBDQVBUQ0hBX1NJVEVfSU5WSVNJQkxFX0NBUFRDSEFfS0VZID0gJzZMY0FxNFFVQUFBQUFCck9ucDB4d3NhUms3UGduQ2dtRS1GRGNiTEcnO1xuICAgIHVzZXJUaW1lem9uZSA9IERhdGVUaW1lLmxvY2FsKCkuem9uZU5hbWU7XG4gICAgbG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBwaG9uZU51bWJlcjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIGNhcHRjaGFSZXNwb25zZSA9ICcnO1xuICAgIGN1cnJTY3JlZW46IHN0cmluZztcbiAgICBjb3JyZWN0UGhvbmVOdW1iZXIgPSBudWxsO1xuICAgIHBob25lRXJyb3IgPSBmYWxzZTtcbiAgICBzb2NpYWxMb2dpbk1zZyA9IGZhbHNlO1xuICAgIGluaXRpYWxpemVUZWxJbnB1dDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUc0xvZ2luU2lnbnVwQ29tcG9uZW50PixcbiAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyVGltZXpvbmUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG5cbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gICAgcHVibGljIHJlc29sdmVBbmRQcm9jZWVkKGNhcHRjaGFSZXNwb25zZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2FwdGNoYVJlc3BvbnNlID0gY2FwdGNoYVJlc3BvbnNlO1xuICAgICAgICB0aGlzLnNpZ251cCgpO1xuICAgIH1cblxuICAgIHBhc3N3b3JkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIH1cblxuICAgIG9uTG9naW5XaXRoRkIgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovLycgKyB0aGlzLmFwaVNlcnZpY2UuaG9zdE5hbWUgKyAnL2FwaS91c2VyL3NpZ25pbndpdGhmYWNlYm9vaycgK1xuICAgICAgICAgICAgKHRoaXMucmR1cmwgPT09IHVuZGVmaW5lZCA/ICcnIDogJz9yZHVybD0nICsgdGhpcy5yZHVybCksICdfc2VsZicpO1xuICAgIH1cblxuICAgIG9uTG9naW5XaXRoR29vZ2xlID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly8nICsgdGhpcy5hcGlTZXJ2aWNlLmhvc3ROYW1lICsgJy9hcGkvdXNlci9zaWduaW53aXRoZ29vZ2xlJyArXG4gICAgICAgICAgICAodGhpcy5yZHVybCA9PT0gdW5kZWZpbmVkID8gJycgOiAnP3JkdXJsPScgKyB0aGlzLnJkdXJsKSwgJ19zZWxmJyk7XG4gICAgfVxuXG4gICAgZ2V0RW1haWxWZXJpZnlSZXNwb25zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tU3RyaW5nOiBgZW1haWw9YCArIHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd1c2VyL2dldHVzZXJzaWdudXBkZXRhaWxzJyxcbiAgICAgICAgICAgIHsgcGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShtYXAoZGF0YSA9PiAoZGF0YSkpKTtcbiAgICB9XG5cbiAgICB2ZXJpZnlFbWFpbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5nZXRFbWFpbFZlcmlmeVJlc3BvbnNlKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJldERhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBKU09OLnBhcnNlKHJldERhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0RhdGEgJiYgbmV3RGF0YS5pc0V4aXN0aW5nVXNlciAmJiBuZXdEYXRhLmlzTWFudWFsU2lnbnVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlNpZ25JbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWZTaWduVXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlNpZ25Jbic7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaWFsTG9naW5Nc2cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0RhdGEgJiYgbmV3RGF0YS5pc0V4aXN0aW5nVXNlciAmJiAhbmV3RGF0YS5pc01hbnVhbFNpZ251cCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2lhbExvZ2luTXNnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZlNpZ25JbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmU2lnblVwJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdmaXJzdE5hbWUnKS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bob25lTnVtYmVyJykuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaWFsTG9naW5Nc2cgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplVGVsSW5wdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUludGxUZWxJbnB1dCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIGluaXRpYWxpemVJbnRsVGVsSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgaW50bCB0ZWxcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvbmVOdW1iZXInKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5wdXQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cpO1xuICAgICAgICAoPGFueT53aW5kb3cpLmludGxUZWxJbnB1dChpbnB1dCwge1xuICAgICAgICAgICAgaW5pdGlhbENvdW50cnk6ICdpbicsXG4gICAgICAgICAgICB1dGlsU2NyaXB0czogJy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbnRsLXRlbC1pbnB1dC9idWlsZC9qcy91dGlscy5qcydcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBzaWduSW4gPSAoKSA9PiB7XG4gICAgICAgIC8vIGFsZXJ0KCd5b3UgaGF2ZSBzaWduZWQgaW4nKTtcbiAgICAgICAgdGhpcy5wb3N0U2lnbkluQ3JlZGVudGlhbHMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmV0RGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5EYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogKHJldERhdGEuZGF0YSlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7IC4uLnJldERhdGEudXNlckRldGFpbHMsIC4uLnRva2VuRGF0YSB9O1xuICAgICAgICAgICAgICAgIHRoaXMuY29va2llU2VydmljZS5zZXRDb29raWUoJ3Rvd25zY3JpcHQtdXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSwgOTAsICcvJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codXNlckRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlVXNlcih1c2VyRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zdWNjZXNzKFwiQ29uZ3JhdHMhIFlvdSBhcmUgc2lnbmVkIGluXCIsIDIwMDAsIFwiRGlzbWlzc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9MaXN0aW5ncygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNpZ251cCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucG9zdFNpZ251cENyZWRlbnRpYWxzKCkudG9Qcm9taXNlKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgc2VsZi5zaG93VmVyaWZ5RW1haWwgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5zaG93U29jaWFsID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLmN1cnJTY3JlZW4gPSAnc2hvd1ZlcmlmeUVtYWlsJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yZ290UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMuc2hvd1Jlc2V0UGFzc3dvcmQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZlNpZ25JbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnc2hvd1Jlc2V0UGFzc3dvcmQnO1xuICAgIH1cblxuICAgIHRha2VNZUJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNob3dSZXNldFBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJTY3JlZW4gPSAnaWZVbnZlcmlmaWVkJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlmU2lnbkluKSB7XG4gICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dSZXNldFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlmVW52ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlmU2lnbkluID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dTb2NpYWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZlNpZ25VcCkge1xuICAgICAgICAgICAgdGhpcy5pZlVudmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pZlNpZ25VcCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93U29jaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY3VyclNjcmVlbiA9ICdpZlVudmVyaWZpZWQnO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdmaXJzdE5hbWUnKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bhc3N3b3JkJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZvcm0uZ2V0KCdwaG9uZU51bWJlcicpLmRpc2FibGUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dWZXJpZnlFbWFpbCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VmVyaWZ5RW1haWwgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaWZVbnZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NvY2lhbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlmU2lnblVwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ2ZpcnN0TmFtZScpLmRpc2FibGUoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRm9ybS5nZXQoJ3Bob25lTnVtYmVyJykuZGlzYWJsZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyU2NyZWVuID0gJ2lmVW52ZXJpZmllZCc7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHBvc3RTaWduSW5DcmVkZW50aWFscyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvZ2luT2JqID0ge1xuICAgICAgICAgICAgZW1haWxJZDogdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgICAgZnJvbVN0cmluZzogYGVtYWlsSWQ9YCArIHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsICsgYCZwYXNzd29yZD1gICsgdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvbG9naW53aXRodG93bnNjcmlwdCcsXG4gICAgICAgICAgICBsb2dpbk9iaiwgeyBwYXJhbXM6IHBhcmFtcywgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKG1hcChkYXRhID0+IChkYXRhKSkpO1xuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmRDcmVkZW50aWFscyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSB7XG4gICAgICAgICAgICBlbWFpbElkOiB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVNlcnZpY2UuQVBJX1NFUlZFUiArICd2ZXJpZnkvc2VuZGZvcmdvdHB3ZGVtYWlsJyxcbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShtYXAoZGF0YSA9PiAoZGF0YSkpKTtcbiAgICB9XG5cbiAgICByZWRpcmVjdFRvTGlzdGluZ3MgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCcvJywgJ19zZWxmJyk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldFBhc3N3b3JkQ3JlZGVudGlhbHMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcG9zdFNpZ251cENyZWRlbnRpYWxzID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvbmVOdW1iZXInKTtcbiAgICAgICAgY29uc3QgaXRpID0gKDxhbnk+d2luZG93KS5pbnRsVGVsSW5wdXRHbG9iYWxzLmdldEluc3RhbmNlKGlucHV0KTtcbiAgICAgICAgdGhpcy5jb3JyZWN0UGhvbmVOdW1iZXIgPSBpdGkuZ2V0TnVtYmVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29ycmVjdFBob25lTnVtYmVyID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGhpcy5sb2dpbkZvcm0udmFsdWUuZmlyc3ROYW1lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbGlkJywgdGhpcy5sb2dpbkZvcm0udmFsdWUuZW1haWwpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bhc3N3b3JkJywgdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bob25lJywgdGhpcy5jb3JyZWN0UGhvbmVOdW1iZXIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJ0aW1lem9uZScsIHRoaXMudXNlclRpbWV6b25lKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZUNhcHRjaGEnLCB0aGlzLmNhcHRjaGFSZXNwb25zZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcm5hbWUnLCB0aGlzLnJhbmRvbVN0cmluZygxMCwgJycpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpU2VydmljZS5BUElfU0VSVkVSICsgJ3VzZXIvcmVnaXN0ZXJ3aXRodG93bnNjcmlwdHdpdGhjYXB0Y2hhJyxcbiAgICAgICAgICAgIGZvcm1EYXRhLCB7IGhlYWRlcnM6IGhlYWRlcnMsIHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pO1xuICAgIH1cblxuICAgIHJhbmRvbVN0cmluZyA9IChsZW4sIGFuKSA9PiB7XG4gICAgICAgIGFuID0gYW4gJiYgYW4udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHN0ciA9ICcnLCBpID0gMCwgbWluID0gYW4gPT0gJ2EnID8gMTAgOiAwLCBtYXggPSBhbiA9PSAnbicgPyAxMCA6IDYyO1xuICAgICAgICBmb3IgKDsgaSsrIDwgbGVuOykge1xuICAgICAgICAgICAgbGV0IHIgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4gPDwgMDtcbiAgICAgICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHIgKz0gciA+IDkgPyByIDwgMzYgPyA1NSA6IDYxIDogNDgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcmVzZW5kVmVyaWZ5RW1haWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZW5kVmVyaWZ5RW1haWxDcmVkZW50aWFsKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJldERhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCd2ZXJpZmljYXRpb24gZW1haWwgaGFzIGJlZW4gc2VudCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJlc2VuZFZlcmlmeUVtYWlsQ3JlZGVudGlhbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZW1haWxPYmogPSB7XG4gICAgICAgICAgICBlbWFpbElkOiB0aGlzLmxvZ2luRm9ybS52YWx1ZS5lbWFpbFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlTZXJ2aWNlLkFQSV9TRVJWRVIgKyAndXNlci9yZXNlbmR2ZXJpZmljYXRpb25jb2RlJyxcbiAgICAgICAgICAgIGVtYWlsT2JqLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShtYXAoZGF0YSA9PiAoZGF0YSkpKTtcbiAgICB9XG5cbn0iXX0=