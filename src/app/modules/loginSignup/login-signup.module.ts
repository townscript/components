import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TsFormsModule } from '@townscript/elements';
import { RecaptchaModule } from 'ng-recaptcha';
import { MatRippleModule, MatSnackBarModule, MatInputModule, MatTooltipModule, MatProgressSpinnerModule } from '@angular/material';
import { TsLoginSignupComponent } from './ts-login-signup/ts-login-signup.component';
import { UserService } from '../../shared/services/user-service';
import { CookieService } from '../../core/cookie.service';
import { NotificationService } from '../../shared/services/notification.service';
import { LoginModalComponent } from './ts-login-signup/login-modal/login-modal.component';
import { EmailSentSVGComponent } from './ts-login-signup/email-sent-svg/email-sent-svg.component';
import { TsLoginSignupService } from './ts-login-signup/ts-login-signup.service';
import { ConfirmationSVGComponent } from './ts-login-signup/confirmation-svg/confirmation-svg.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsFormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    MatRippleModule,
    MatSnackBarModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    TsLoginSignupComponent,
    LoginModalComponent,
    EmailSentSVGComponent,
    ConfirmationSVGComponent
  ],
  exports: [
    TsLoginSignupComponent,
    LoginModalComponent,
    EmailSentSVGComponent,
    ConfirmationSVGComponent
  ],
  providers: [
    CookieService,
    UserService,
    NotificationService,
    TsLoginSignupService
  ]
})
export class TsLoginSignupModule { }
