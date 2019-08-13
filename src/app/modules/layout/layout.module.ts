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
  CitySearchPopupComponent,
  HamburgerMenuComponent
} from './components/index';
import { TsFormsModule } from '@townscript/elements';
import { TimeService, ApiService, UserService } from '../../shared/index';
import { LoginTopContentComponent } from './components/ts-login-signup/login-top-content/login-top-content.component';
import { CookieService } from './components/ts-login-signup/cookie.service';
import { RangeDatePipe } from '../layout/components/ts-listing-card/ts-date-range.pipe';
import { HeaderService } from './components/ts-header/ts-header.service';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { UserMenuComponent } from './components/ts-header/user-menu/user-menu.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationService } from '../../shared/services/notification.service';
import { AppPasswordDirective } from  './components/ts-login-signup/ts-show-hide-directive';
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
    TsHeaderComponent,
    TsFooterComponent,
    SearchComponent,
    TsLoginSignupComponent,
    LoginTopContentComponent,
    TsListingCardComponent,
    RangeDatePipe,
    SearchComponent,
    CitySearchPopupComponent,
    HamburgerMenuComponent,
    UserMenuComponent,
    AppPasswordDirective
  ],
  exports: [
    TsHeaderComponent,
    TsFooterComponent,
    TsLoginSignupComponent,
    TsListingCardComponent,
    UserMenuComponent
  ],
  providers: [TimeService, UserService, NotificationService, DatePipe, ApiService, CookieService, HeaderService]

})
export class LayoutModule { }
