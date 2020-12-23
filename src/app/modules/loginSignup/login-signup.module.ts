import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TsFormsModule } from '@townscript/elements';
import { RecaptchaModule } from 'ng-recaptcha';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TsLoginSignupComponent } from './ts-login-signup/ts-login-signup.component';
import { UserService } from '../../shared/services/user-service';
import { CookieService } from '../../core/cookie.service';
import { NotificationService } from '../../shared/services/notification.service';
import { LoginModalComponent } from './ts-login-signup/login-modal/login-modal.component';
import { EmailSentSVGComponent } from './ts-login-signup/email-sent-svg/email-sent-svg.component';
import { TsLoginSignupService } from './ts-login-signup/ts-login-signup.service';
import { ConfirmationSVGComponent } from './ts-login-signup/confirmation-svg/confirmation-svg.component';
import { SharedModule } from '../../shared/shared.module';
import { DataCollectorService } from '../../shared/services/analytics/data-collector.service';

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
    MatProgressSpinnerModule,
    SharedModule
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
    TsLoginSignupService,
    DataCollectorService
  ]
})
export class TsLoginSignupModule {
}
