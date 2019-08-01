import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

import {
  TsHeaderComponent,
  TsFooterComponent,
  SearchComponent,
  TsLoginSignupComponent
} from './components/index';
import { TsFormsModule } from '@townscript/elements';
import { TimeService, ApiService } from '../../shared/index';
import { LoginTopContentComponent } from './components/ts-login-signup/login-top-content/login-top-content.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { CookieService } from './components/ts-login-signup/cookie.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsFormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    Ng2TelInputModule
  ],
  declarations: [
    TsHeaderComponent,
    TsFooterComponent,
    SearchComponent,
    TsLoginSignupComponent,
    LoginTopContentComponent
  ],
  exports: [
    TsHeaderComponent,
    TsFooterComponent,
    TsLoginSignupComponent
  ],
  providers: [TimeService, DatePipe, ApiService, CookieService]

})
export class LayoutModule { }
