import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TsFormsModule } from '@townscript/elements';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BrowserService } from '../../core/browser.service';
import { TimeService } from '../../shared/services/time.service';
import { TsLoginSignupModule } from '../../modules/loginSignup/login-signup.module';
import { UserService } from '../../shared/services/user-service';

import {
  TsHeaderComponent,
  TsFooterComponent,
  SearchComponent,
  CitySearchPopupComponent,
  FooterService,
  HeaderService,
  UserMenuComponent
} from './components/index';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatRippleModule,
    MatSnackBarModule,
    TsLoginSignupModule,
    TsFormsModule
  ],
  declarations: [
    TsHeaderComponent,
    TsFooterComponent,
    SearchComponent,
    CitySearchPopupComponent,
    UserMenuComponent
  ],
  exports: [
    TsHeaderComponent,
    TsFooterComponent,
    SearchComponent,
    CitySearchPopupComponent,
    UserMenuComponent
  ],
  providers: [
    TimeService,
    DatePipe,
    HeaderService,
    BrowserService,
    UserService,
    FooterService
  ]
})
export class LayoutModule { }
