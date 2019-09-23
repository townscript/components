import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TsFormsModule } from '@townscript/elements';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule, MatSnackBarModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { TsLoginSignupComponent } from './ts-login-signup/ts-login-signup.component';
import { ApiService } from '../../shared/services/api-service';
import { UserService } from '../../shared/services/user-service';
import { CookieService } from '../../core/cookie.service';
import { NotificationService } from '../../shared/services/notification.service';
import { LoginModalComponent } from './ts-login-signup/login-modal/login-modal.component';
import { EmailSentSVGComponent } from './ts-login-signup/email-sent-svg/email-sent-svg.component';
import { TsLoginSignupService } from './ts-login-signup/ts-login-signup.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsFormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    HttpClientModule,
    MatRippleModule,
    MatSnackBarModule,
    MatInputModule,
    MatTooltipModule,
  ],
  declarations: [
    TsLoginSignupComponent,
    LoginModalComponent,
    EmailSentSVGComponent
  ],
  exports: [
    TsLoginSignupComponent,
    LoginModalComponent,
    EmailSentSVGComponent
  ],
  providers: [
    ApiService,
    CookieService,
    UserService,
    NotificationService,
    TsLoginSignupService
  ]
})
export class TsLoginSignupModule { }
