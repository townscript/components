import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TsFormsModule } from '@townscript/elements';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule, MatSnackBarModule } from '@angular/material';
import { TsLoginSignupComponent } from './ts-login-signup/ts-login-signup.component';
import { ApiService } from '../../shared/services/api-service';
import { UserService } from '../../shared/services/user-service';
import { CookieService } from '../../core/cookie.service';
import { NotificationService } from '../../shared/services/notification.service';
import { LoginTopContentComponent } from './ts-login-signup/login-top-content/login-top-content.component';
import { AppPasswordDirective } from './ts-login-signup/ts-show-hide-directive';
import { LoginModalComponent } from './ts-login-signup/login-modal/login-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsFormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    HttpClientModule,
    MatRippleModule,
    MatSnackBarModule
  ],
  declarations: [
    TsLoginSignupComponent,
    LoginTopContentComponent,
    AppPasswordDirective,
    LoginModalComponent
  ],
  exports: [
    TsLoginSignupComponent,
    LoginTopContentComponent,
    LoginModalComponent
  ],
  providers: [
    ApiService,
    CookieService,
    UserService,
    NotificationService
  ]
})
export class TsLoginSignupModule { }
