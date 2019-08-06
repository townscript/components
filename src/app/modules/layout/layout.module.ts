import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

import {
  TsHeaderComponent,
  TsFooterComponent,
  SearchComponent,
  TsLoginSignupComponent,
  TsListingCardComponent,
  CitySearchPopupComponent
} from './components/index';
import { TsFormsModule } from '@townscript/elements';
import { TimeService, ApiService } from '../../shared/index';
import { LoginTopContentComponent } from './components/ts-login-signup/login-top-content/login-top-content.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { CookieService } from './components/ts-login-signup/cookie.service';
import { RangeDatePipe } from '../layout/components/ts-listing-card/ts-date-range.pipe';
import { HeaderService } from './components/ts-header/ts-header.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsFormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    Ng2TelInputModule,
    HttpClientModule
  ],
  declarations: [
    TsHeaderComponent,
    TsFooterComponent,
    SearchComponent,
    TsLoginSignupComponent,
    LoginTopContentComponent,
    TsListingCardComponent,
    RangeDatePipe,
    SearchComponent,
    CitySearchPopupComponent
  ],
  exports: [
    TsHeaderComponent,
    TsFooterComponent,
    TsLoginSignupComponent,
    TsListingCardComponent
  ],
  providers: [TimeService, DatePipe, ApiService, CookieService, HeaderService]

})
export class LayoutModule { }
