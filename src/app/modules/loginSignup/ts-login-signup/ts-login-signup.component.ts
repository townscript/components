import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__ } from '@angular/core';
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

const headers = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9VU0VSIiwic3ViIjoidGVzdGluZ0B0b3duc2NyaXB0LmNvbSIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTU2NjkwODg0NjE2MCwiVVNFUl9JRCI6NDkwNiwiZXhwIjoxNTc0Njg0ODQ2fQ.ge-O16ZPw9wHvjoJrmTKbJRhfOkvAdI57N_YBZ5yr_IwymKOhPAyQpD8vHxIqhJGJ4tfJ_jez4xh3vQoWwngZw');

@Component({
    selector: 'app-ts-login-signup',
    templateUrl: './ts-login-signup.component.html',
    styleUrls: ['./ts-login-signup.component.scss'],
    animations: [
        trigger('btn-animate', [
            transition('void => *', [
                animate('1s ease', style({ opacity: 1})),
            ]),
            transition('* => void', [
              animate('1s ease', style({ opacity: 0, height: '0'}))
            ])
          ]),
          trigger('in-out-animate', [
            transition('void => *', [
                style({ opacity: 0.2}),
                animate('1s ease', style({ opacity: 1})),
            ]),
            transition('* => void', [
              style({ opacity: 0.6}),
              animate('1s ease', style({ opacity: 0, height: '0'}))
            ])
          ]),
          trigger('EnterLeave', [
            state('flyIn', style({ transform: 'translateY(0)'})),
            transition(':enter', [
              style({ transform: 'translateY(0%)' }),
              animate('1s ease-in-out')
            ]),
            transition(':leave', [
              animate('.5s ease', style({ transform: 'translateY(-70%)', opacity: '0', height: 0 }))
            ])
          ])
    ]
})
export class TsLoginSignupComponent implements OnInit {
    @Input() mode;
    @Output() closeDialog = new EventEmitter();
    @ViewChild('recaptchaRef', { read: true, static: true })
    recaptchaRef: RecaptchaComponent;
    showSocial = true;
    show = false;
    showPassword = false;
    rdurl = 'http://' + this.apiService.betaHostName + '/marketplace';
    ifSignIn = false;
    ifUnverified = true;
    ifSignUp = false;
    showVerifyEmail = false;
    showResetPassword = false;
    isUserVerified: any;
    CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY = '6LcAq4QUAAAAABrOnp0xwsaRk7PgnCgmE-FDcbLG';
    userTimezone = DateTime.local().zoneName;
    loginForm = this.fb.group({
        firstName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        phoneNumber: ['', Validators.required]
    });
    captchaResponse = '';
    currScreen: string;
    correctPhoneNumber = null;
    phoneError = false;
    socialLoginMsg = false;
    initializeTelInput;

    constructor(public apiService: ApiService,
        private http: HttpClient,
        private fb: FormBuilder,
        private cookieService: CookieService,
        private userService: UserService,
        private notificationService: NotificationService,
    ) { }

    ngOnInit() {
        this.loginForm.get('firstName').disable();
        this.loginForm.get('password').disable();
        this.loginForm.get('phoneNumber').disable();
        this.currScreen = 'ifUnverified';

    }

    close() {
        this.closeDialog.emit(true);
    }

    public resolveAndProceed(captchaResponse: string) {
        this.captchaResponse = captchaResponse;
        this.signup();
    }

    password = () => {
        this.show = !this.show;
    }

    onLoginWithFB = () => {
        const url = 'http://' + this.apiService.betaHostName + '/api/user/signinwithfacebook' +
            (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl);
        window.open(url, '_self');
    }

    onLoginWithGoogle = () => {
        const url = 'http://' + this.apiService.betaHostName + '/api/user/signinwithgoogle' +
            (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl);
        window.open(url, '_self');
    }

    getEmailVerifyResponse = () => {
        const params = new HttpParams({ fromString: `email=` + this.loginForm.value.email });
        return this.http.get(this.apiService.API_SERVER + 'user/getusersignupdetails',
            { params: params, headers: headers }).pipe(map(data => (data)));
    }

    verifyEmail = () => {
        this.getEmailVerifyResponse().subscribe(
            (retData: any) => {
                const newData = JSON.parse(retData.data);
                if (newData && newData.isExistingUser && newData.isManualSignup) {
                    this.loginForm.get('password').enable();
                    this.ifSignIn = true;
                    this.ifUnverified = false;
                    this.ifSignUp = false;
                    this.showSocial = false;
                    this.currScreen = 'ifSignIn';
                    this.socialLoginMsg = false;
                } else if (newData && newData.isExistingUser && !newData.isManualSignup) {
                    this.socialLoginMsg = true;
                } else {
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
            },
            (error) => {
            }
        );

    }

    initializeIntlTelInput = () => {
        // initialize intl tel
        const input = document.querySelector('#phoneNumber');

        (<any>window).intlTelInput(input, {
            initialCountry: 'in',
            utilScripts: '../../../../../../node_modules/intl-tel-input/build/js/utils.js'
        });

    }

    signIn = () => {
        // alert('you have signed in');
        this.postSignInCredentials().subscribe(
            (retData: any) => {
                const tokenData = {
                    token: (retData.data)
                };

                const userData = { ...retData.userDetails, ...tokenData };
                this.userService.updateUser(userData);
                this.notificationService.success('Congrats! You are signed in', 2000, 'Dismiss');
                if (this.mode === 'dialog') {
                    this.close();
                }
                this.redirectToListings();
            },
            (error) => {
            }
        );
    }

    signup = () => {
        const self = this;
        this.postSignupCredentials().toPromise().then(function (data) {
            self.showVerifyEmail = true;
            self.showSocial = false;
            self.ifSignUp = false;
            self.currScreen = 'showVerifyEmail';
        });
    }

    forgotPassword = () => {
        this.loginForm.get('password').disable();
        this.showResetPassword = true;
        this.showSocial = false;
        this.ifSignIn = false;
        this.currScreen = 'showResetPassword';
    }

    takeMeBack = () => {
        if (this.showResetPassword) {
            this.ifUnverified = true;
            this.showResetPassword = false;
            this.ifSignUp = false;
            this.currScreen = 'ifUnverified';
        } else if (this.ifSignIn) {
            this.ifSignUp = false;
            this.showResetPassword = false;
            this.ifUnverified = true;
            this.ifSignIn = false;
            this.showSocial = true;
            this.currScreen = 'ifUnverified';
        } else if (this.ifSignUp) {
            this.ifUnverified = true;
            this.ifSignUp = false;
            this.showSocial = true;
            this.currScreen = 'ifUnverified';
            this.loginForm.get('firstName').disable();
            this.loginForm.get('password').disable();
            this.loginForm.get('phoneNumber').disable();
        } else if (this.showVerifyEmail) {
            this.showVerifyEmail = false;
            this.ifUnverified = true;
            this.showSocial = true;
            this.ifSignUp = false;
            this.loginForm.get('firstName').disable();
            this.loginForm.get('password').disable();
            this.loginForm.get('phoneNumber').disable();
            this.currScreen = 'ifUnverified';
        }

    }

    postSignInCredentials = () => {
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

        return this.http.post(this.apiService.API_SERVER + 'user/loginwithtownscript',
            loginObj, { params: params, headers: headers }).pipe(map(data => (data)));
    }

    resetPasswordCredentials = () => {
        const forgotPassword = {
            emailId: this.loginForm.value.email
        };

        return this.http.post(this.apiService.API_SERVER + 'verify/sendforgotpwdemail',
            forgotPassword, { headers: headers }).pipe(map(data => (data)));
    }

    redirectToListings = () => {
        window.open('/', '_self');
    }

    resetPassword = () => {
        this.resetPasswordCredentials().subscribe(
            (resp: any) => {
                // console.log(resp);
            },
            (error: any) => {
                // console.log(error);
            }
        );
    }

    postSignupCredentials = () => {
        if (!this.loginForm.valid) {
            return;
        }
        const input = document.querySelector('#phoneNumber');
        const iti = (<any>window).intlTelInputGlobals.getInstance(input);
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
        formData.append('rdurl', this.rdurl);
        return this.http.post(this.apiService.API_SERVER + 'user/registerwithtownscriptwithcaptcha',
            formData, { headers: headers, responseType: 'text' });
    }

    randomString = (len, an) => {
        an = an && an.toLowerCase();
        let str = '', i = 0;
        const min = an === 'a' ? 10 : 0;
        const max = an === 'n' ? 10 : 62;
        for (; i++ < len;) {
            let r = Math.random() * (max - min) + min << 0;
            str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
        }
        return str;
    }

    resendVerifyEmail = () => {
        this.resendVerifyEmailCredential().subscribe(
            (retData: any) => {
                alert('verification email has been sent');
            },
            (error: any) => {
                // console.log('error');
            }
        );
    }
    resendVerifyEmailCredential = () => {
        const formData = new FormData();
        formData.append('rdurl', this.rdurl);
        formData.append('emailid', this.loginForm.value.email);
        return this.http.post(this.apiService.API_SERVER + 'user/resendverificationcode',
        formData, { headers: headers }).pipe(map(data => (data)));
    }

}
