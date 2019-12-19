import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { config } from '../../../core/app-config';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DateTime } from 'luxon';
import { RecaptchaComponent } from 'ng-recaptcha';
import { CookieService } from '../../../core/cookie.service';
import { UserService } from '../../../shared/services/user-service';
import { NotificationService } from '../../../shared/services/notification.service';
import { TsLoginSignupService } from './ts-login-signup.service';
import { PlaceService } from '../../layout/components/ts-header/place.service';
import { UtilityService } from '../../../shared/services/utilities.service';
import { ActivatedRoute } from '@angular/router';

const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

@Component({
    selector: 'app-ts-login-signup',
    templateUrl: './ts-login-signup.component.html',
    styleUrls: ['./ts-login-signup.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class TsLoginSignupComponent implements OnInit, OnDestroy {

    @Input() mode: any;
    @Input() defaultHeader: any = 'Let\'s get started';
    @Input() defaultSubHeader: any = 'Your one stop tool for organizing events';
    @Input() rdurl: any;
    @Input() showSocial: any = true;
    @Output() closeDialog = new EventEmitter();


    @ViewChild('recaptchaRef', { read: true, static: true })
    recaptchaRef: RecaptchaComponent;

    captchaToken: any = this.tsLoginSignupService.CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY;

    show = false;
    showPassword = false;
    isDefaultView = true;
    isSignInView = false;
    isSignUpView = false;
    isVerifyEmailView = false;
    showResetPassword = false;

    userTimezone: any = DateTime.local().zoneName;
    loginForm: any;
    captchaResponse: any;
    correctPhoneNumber: any = null;
    phoneError = false;
    socialLoginMsg: any = false;
    initializeTelInput: any;
    signInErrMessage = '';
    resetPwdLinkSent = false;
    signUpErrMessage = '';

    fbLoginURL = config.baseUrl + 'api/'
        + 'user/signinwithfacebook' + (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl);
    googleLoginURL = config.baseUrl + 'api/'
        + 'user/signinwithgoogle' + (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl);
    intlInput: any;
    showLoader = false;
    loaderText: any;
    countryCode: any = 'IN';
    subObject: any;
    showConfirmation: boolean = false;
    baseUrl: any = this.tsLoginSignupService.baseUrl;
    userName: any;

    constructor(
        private utilityService: UtilityService,
        private cookieService: CookieService,
        private userService: UserService,
        private notificationService: NotificationService,
        private tsLoginSignupService: TsLoginSignupService,
        private placeService: PlaceService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.initForm();
        this.subObject = this.placeService.place.subscribe((res: any) => {
            if (this.utilityService.IsJsonString(res)) {
                const placeData = JSON.parse(res);
                this.countryCode = placeData['country'];
            }
        });
        this.activatedRoute.queryParams.subscribe(params => {
          if(params['rdurl'])
            this.rdurl = params['rdurl'];
        });
    }

    ngOnDestroy() {
        if (this.subObject !== undefined) {
            this.subObject.unsubscribe();
        }
    }

    initForm = (): void => {
        this.loginForm = new FormGroup({
            'fullName': new FormControl('', { validators: Validators.required }),
            'email': new FormControl('', { validators: [Validators.required, Validators.pattern(emailRegex)] }),
            'password': new FormControl('', { validators: Validators.required }),
            'phoneNumber': new FormControl('', { validators: Validators.required })
        });
        this.loginForm.get('fullName').disable();
        this.loginForm.get('password').disable();
        this.loginForm.get('phoneNumber').disable();
    }

    close = (signedIn): void => {
        this.closeDialog.emit(signedIn);
    }

    clearErrors = (): void => {
        this.socialLoginMsg = '';
    }

    resolve = (captchaResponse: string): void => {
        this.captchaResponse = captchaResponse;
    }

    password = (): void => {
        this.show = !this.show;
    }

    verifyEmail = async (): Promise<any> => {
        this.showLoader = true;
        if (!this.loginForm.controls.email.valid) {
            this.showLoader = false;
            return;
        }
        const result = await this.tsLoginSignupService.getUserSignUpDetails(this.loginForm.value.email);
        let newData = result;
        try {
            this.showLoader = false;
            newData = JSON.parse(result.data);
        } catch (e) {
            console.log("Exception while parsing api response : " + result);
        }
        if (newData && newData.isExistingUser && newData.isManualSignup) {
            this.openSignInView();
        } else if (newData && newData.isExistingUser && !newData.isManualSignup) {
            this.socialLoginMsg = true;
        } else {
            this.openSignUpView();
            this.initializeTelInput = setTimeout(() => {
                this.initializeIntlTelInput();
            }, 200);
        }
    }

    initializeIntlTelInput = (): void => {
        // initialize intl tel
        const input = document.querySelector('#phoneNumber');
        this.intlInput = (<any>window).intlTelInput(input, {
            initialCountry: this.countryCode,
            preferredCountries: ["in", "id", "sg", "my"],
            utilScripts: '../../../../../../node_modules/intl-tel-input/build/js/utils.js'
        });

    }

    validatePhoneNumber = (): void => {
        if (!this.intlInput.isValidNumber()) {
            this.phoneError = true;
            this.loginForm.controls.phoneNumber.setErrors({ 'valid': false });
        } else {
            this.loginForm.controls.phoneNumber.setErrors();
            this.phoneError = false;
        }
    }

    signIn = async (): Promise<any> => {
        if (!this.loginForm.valid) {
            return;
        }
        this.showLoader = true;
        const retData = await this.tsLoginSignupService.loginWithTownscript(this.loginForm.value.email, this.loginForm.value.password);
        this.showLoader = false;
        if (retData.result != 'Success') {
            this.signInErrMessage = retData.data;
            return;
        }
        this.showConfirmation = true;
        const tokenData = {
            token: (retData.data)
        };

        const userData = { ...retData.userDetails, ...tokenData };
        this.userName = userData.user;
        console.log(this.userName);
        this.userService.updateUser(userData);
        // this.cookieService.setCookie('townscript-user', JSON.stringify(userData), 90);

        setTimeout(() => {
            if (this.mode === 'dialog') {
                this.close(true);
            }
        }, 1400);

        if (this.rdurl != undefined) {
            window.open(this.rdurl, '_self');
        }
    }

    signUp = async (): Promise<any> => {
        const self = this;
        this.loginForm.get('email').setValue(this.loginForm.get('email').value.trim());
        this.loginForm.get('fullName').setValue(this.loginForm.get('fullName').value.trim());
        if (!this.loginForm.valid || this.captchaResponse == undefined) {
            return;
        }
        const input = document.querySelector('#phoneNumber');
        const iti = (<any>window).intlTelInputGlobals.getInstance(input);
        this.correctPhoneNumber = iti.getNumber();

        if (this.correctPhoneNumber === '') {
            this.phoneError = true;
            return;
        }
        this.showLoader = true;
        this.loaderText = 'Please wait while we are creating your account.';

        let data = await this.tsLoginSignupService.registerWithTownscriptWithCaptcha(this.getFormDataForRegister());
        try {
            data = JSON.parse(data);
        } catch (e) {
            console.log("Exception while parsing api response : " + data);
        }

        if (data['result'] == 'Error') {
            self.showLoader = false;
            self.signUpErrMessage = data['data'];
            let _this = self;
            setTimeout(function () {
                _this.initializeIntlTelInput();
            }, 200);
            return;
        }
        self.openVerifyEmailView();
    }

    getFormDataForRegister = (): FormData => {
        const formData = new FormData();
        formData.append('name', this.loginForm.value.fullName);
        formData.append('emailid', this.loginForm.value.email);
        formData.append('password', this.loginForm.value.password);
        formData.append('phone', this.correctPhoneNumber);
        formData.append('usertimezone', this.userTimezone);
        formData.append('reCaptcha', this.captchaResponse);
        formData.append('username', this.randomString(10, ''));
        if (this.rdurl) {
            formData.append('rdurl', this.rdurl);
        }
        return formData;
    }

    forgotPassword = (): void => {
        this.loginForm.get('password').disable();
        this.showResetPassword = true;
        this.showSocial = false;
        this.isSignInView = false;
    }

    goBack = (): void => {
        if (this.showResetPassword) {
            this.openSignInView();
        } else if (this.isSignInView || this.isSignUpView || this.isVerifyEmailView) {
            this.openDefaultView();
        } else {
            this.close(false);
        }
    }

    openSignInView = (): void => {
        this.showResetPassword = false;
        this.isSignUpView = false;
        this.isSignInView = true;
        this.loginForm.get('password').enable();
        this.showSocial = false;
        this.socialLoginMsg = false;
        this.isDefaultView = false;
    }

    openSignUpView = (): void => {
        this.isSignUpView = true;
        this.isSignInView = false;
        this.showSocial = false;
        this.isDefaultView = false;
        this.socialLoginMsg = false;
        this.loginForm.get('fullName').enable();
        this.loginForm.get('password').enable();
        this.loginForm.get('phoneNumber').enable();
    }

    openDefaultView = (): void => {
        this.isVerifyEmailView = false;
        this.isSignUpView = false;
        this.showResetPassword = false;
        this.isSignInView = false;
        this.showSocial = true;
        this.isDefaultView = true;
        this.loginForm.get('fullName').disable();
        this.loginForm.get('password').disable();
        this.loginForm.get('phoneNumber').disable();
    }

    openVerifyEmailView = (): void => {
        this.isVerifyEmailView = true;
        this.showLoader = false;
        this.showSocial = false;
        this.isSignUpView = false;
    }

    resetPassword = async (): Promise<any> => {
        this.showLoader = true;
        this.loginForm.get('email').setValue(this.loginForm.get('email').value.trim());
        this.loaderText = 'Sending Reset Password Link to ' + this.loginForm.value.email;
        const resp = await this.tsLoginSignupService.sendForgotPwdEmail(this.loginForm.value.email);
        this.showLoader = false;
        if (this.resetPwdLinkSent) {
            this.notificationService.success('Reset Password Link has been sent', 2000, 'Dismiss');
        }
        this.resetPwdLinkSent = true;


        if (localStorage.getItem('email')) {
            localStorage.removeItem('email');
        }

        localStorage.setItem('email', this.loginForm.get('email').value.trim());
    }

    randomString = (len: number, an: string): string => {
        an = an && an.toLowerCase();
        let str = '', i = 0;
        const min = an === 'a' ? 10 : 0;
        const max = an === 'n' ? 10 : 62;
        while (i < len) {
            let r = Math.random() * (max - min) + min << 0;
            str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
            i++;
        }
        return str;
    }

    resendVerifyEmail = async (): Promise<any> => {
        this.showLoader = true;
        this.loginForm.get('email').setValue(this.loginForm.get('email').value.trim());
        this.loaderText = 'Sending Verification email to ' + this.loginForm.value.email;
        const retData = this.tsLoginSignupService.resendVerificationCode(this.rdurl, this.loginForm.value.email);
        this.showLoader = false;
        this.notificationService.success('Verification email has been sent', 2000, 'Dismiss');
    }

    togglePasswordDisplay = (): void => {
        this.showPassword = !this.showPassword;
        const pwdInput = <HTMLInputElement>document.getElementById('user-pwd');
        pwdInput.type = this.showPassword ? 'text' : 'password';
    }

}
