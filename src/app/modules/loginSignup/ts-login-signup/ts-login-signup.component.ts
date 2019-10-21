import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../shared/services/api-service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DateTime } from 'luxon';
import { RecaptchaComponent } from 'ng-recaptcha';
import { CookieService } from '../../../core/cookie.service';
import { UserService } from '../../../shared/services/user-service';
import { NotificationService } from '../../../shared/services/notification.service';
import { TsLoginSignupService } from './ts-login-signup.service';
import { PlaceService } from '../../layout/components/ts-header/place.service';

const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

@Component({
    selector: 'app-ts-login-signup',
    templateUrl: './ts-login-signup.component.html',
    styleUrls: ['./ts-login-signup.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class TsLoginSignupComponent implements OnInit {
    @Input() mode: any;
    @Input() defaultHeader: any = 'Let\'s get started';
    @Input() defaultSubHeader: any = 'Your one stop tool for organizing events';
    @Input() rdurl: any;
    @Input() showSocial: any = true;
    @Output() closeDialog = new EventEmitter();

    @ViewChild('recaptchaRef', { read: true, static: true })
    recaptchaRef: RecaptchaComponent;

    captchaToken: any = this.tsLoginSignupService.CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY;
    show: any = false;
    showPassword: any = false;
    isDefaultView: any = true;
    isSignInView: any = false;
    isSignUpView: any = false;
    isVerifyEmailView: any = false;
    showResetPassword: any = false;

    userTimezone: any = DateTime.local().zoneName;
    loginForm: any;
    captchaResponse: any;
    correctPhoneNumber: any = null;
    phoneError: any = false;
    socialLoginMsg: any = false;
    initializeTelInput: any;
    signInErrMessage: any = "";
    resetPwdLinkSent: boolean = false;
    signUpErrMessage: any = "";

    fbLoginURL: any = this.apiService.API_SERVER
        + 'user/signinwithfacebook' + (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl);
    googleLoginURL: any = this.apiService.API_SERVER
        + 'user/signinwithgoogle' + (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl);
    intlInput: any;
    showLoader = false;
    loaderText: any;
    countryCode: any = "IN";
    subObject: any;

    constructor(public apiService: ApiService,
        private cookieService: CookieService,
        private userService: UserService,
        private notificationService: NotificationService,
        private tsLoginSignupService: TsLoginSignupService,
        private placeService: PlaceService
    ) { }

    ngOnInit() {
        this.initForm();
        this.subObject = this.placeService.place.subscribe((res:any) => {
          let placeData = JSON.parse(res);
          this.countryCode = placeData['country'];
        });
    }

    ngOnDestroy() {
        if(this.subObject != undefined){
          this.subObject.unsubscribe();
        }
    }

    initForm = ():void => {
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

    close = ():void => {
        this.closeDialog.emit(true);
    }

    clearErrors = ():void => {
        this.socialLoginMsg = '';
    }

    resolve = (captchaResponse: string): void => {
        this.captchaResponse = captchaResponse;
    }

    password = ():void => {
        this.show = !this.show;
    }

    verifyEmail = async ():Promise<any> => {
        if (!this.loginForm.controls.email.valid) {
            return;
        }
        
        let result = await this.tsLoginSignupService.getUserSignUpDetails(this.loginForm.value.email);
        let newData = result;
        try{
          newData = JSON.parse(result.data);

        } catch(e){

        }
        if (newData && newData.isExistingUser && newData.isManualSignup) {
            this.loginForm.get('password').enable();
            this.isSignInView = true;
            this.isSignUpView = false;
            this.showSocial = false;
            this.socialLoginMsg = false;
            this.isDefaultView = false;

        } else if (newData && newData.isExistingUser && !newData.isManualSignup) {
            this.socialLoginMsg = true;
        } else {
            this.isSignUpView = true;
            this.isSignInView = false;
            this.showSocial = false;
            this.isDefaultView = false;
            this.socialLoginMsg = false;
            this.loginForm.get('fullName').enable();
            this.loginForm.get('password').enable();
            this.loginForm.get('phoneNumber').enable();

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
            utilScripts: '../../../../../../node_modules/intl-tel-input/build/js/utils.js'
        });

    }

    validatePhoneNumber = ():void => {
        if (!this.intlInput.isValidNumber()) {
            this.phoneError = true;
            this.loginForm.controls.phoneNumber.setErrors({ 'valid': false });
            console.log(this.loginForm.controls.phoneNumber);
        } else {
            this.loginForm.controls.phoneNumber.setErrors();
            this.phoneError = false;
        }
    }

    signIn = async ():Promise<any> => {
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
        const tokenData = {
            token: (retData.data)
        };

        const userData = { ...retData.userDetails, ...tokenData };
        this.userService.updateUser(userData);
        this.cookieService.setCookie('townscript-user', JSON.stringify(userData), 90);
        this.notificationService.success('Congrats! You are signed in', 2000, 'Dismiss');
        if (this.mode === 'dialog') {
            this.close();
        }
        if(this.rdurl != undefined){
           window.open(this.rdurl, '_self');
        }
    }

    signUp = async (): Promise<any>  => {
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
        let data = await this.tsLoginSignupService.registerWithTownscriptWithCaptcha(formData);
        try{
          data = JSON.parse(data);
        } catch(e){

        }
        if(data['result'] == "Error"){
          self.showLoader = false;
          self.signUpErrMessage = data['data'];
          var _this = self;
          setTimeout(function(){
            _this.initializeIntlTelInput();
          },200);
          return;
        }
        self.showLoader = false;
        self.isVerifyEmailView = true;
        self.showSocial = false;
        self.isSignUpView = false;
    }

    forgotPassword = ():void => {
        this.loginForm.get('password').disable();
        this.showResetPassword = true;
        this.showSocial = false;
        this.isSignInView = false;
    }

    goBack = ():void => {
        if (this.showResetPassword) {
            this.showResetPassword = false;
            this.isSignUpView = false;
            this.isSignInView = true;
            this.loginForm.get('password').enable();
        } else if (this.isSignInView) {
            this.isSignUpView = false;
            this.showResetPassword = false;
            this.isSignInView = false;
            this.showSocial = true;
            this.isDefaultView = true;
        } else if (this.isSignUpView) {
            this.isSignUpView = false;
            this.showSocial = true;
            this.isDefaultView = true;
            this.loginForm.get('fullName').disable();
            this.loginForm.get('password').disable();
            this.loginForm.get('phoneNumber').disable();
        } else if (this.isVerifyEmailView) {
            this.isVerifyEmailView = false;
            this.showSocial = true;
            this.isSignUpView = false;
            this.isDefaultView = true;
            this.loginForm.get('fullName').disable();
            this.loginForm.get('password').disable();
            this.loginForm.get('phoneNumber').disable();
        } else {
            this.close();
        }

    }

    resetPassword = async (): Promise<any> => {
        this.showLoader = true;
        this.loginForm.get('email').setValue(this.loginForm.get('email').value.trim());
        this.loaderText = 'Sending Reset Password Link to ' + this.loginForm.value.email;
        let resp = await this.tsLoginSignupService.sendForgotPwdEmail(this.loginForm.value.email);
        this.showLoader = false;
        if (this.resetPwdLinkSent) {
            this.notificationService.success('Reset Password Link has been sent', 2000, 'Dismiss');
        }
        this.resetPwdLinkSent = true;
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
        let retData = this.tsLoginSignupService.resendVerificationCode(this.rdurl, this.loginForm.value.email);
        this.showLoader = false;
        this.notificationService.success('Verification email has been sent', 2000, 'Dismiss');
    }

    togglePasswordDisplay = () => {
        this.showPassword = !this.showPassword;
        const pwdInput = <HTMLInputElement>document.getElementById('user-pwd');
        pwdInput.type = this.showPassword ? 'text' : 'password';
    }

}
