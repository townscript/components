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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsFormsModule,
    ReactiveFormsModule,
    RecaptchaModule
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
  providers: [TimeService, DatePipe, ApiService]

})
export class LayoutModule { }
