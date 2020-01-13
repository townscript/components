import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TsFormsModule } from '@townscript/elements';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BrowserService } from '../../core/browser.service';
import { TimeService } from '../../shared/services/time.service';
import { TsLoginSignupModule } from '../../modules/loginSignup/login-signup.module';
import { UserService } from '../../shared/services/user-service';
import { TsHeaderComponent } from './components/ts-header/ts-header.component';
import { TsFooterComponent } from './components/ts-footer/ts-footer.component';
import { SearchComponent } from './components/ts-header/search/search.component';
import { UserMenuComponent } from './components/ts-header/user-menu/user-menu.component';
import { HeaderService } from './components/ts-header/ts-header.service';
import { FooterService } from './components/ts-footer/ts-footer.service';
import { SharedModule } from '../../shared/shared.module';
import { DataCollectorService } from '../../shared/services/analytics/data-collector.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HamburgerMenuComponent } from './components/ts-header/hamburger-menu/hamburger-menu.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatRippleModule,
    MatSnackBarModule,
    TsLoginSignupModule,
    TsFormsModule,
    LazyLoadImageModule
  ],
  declarations: [
    TsHeaderComponent,
    TsFooterComponent,
    SearchComponent,
    UserMenuComponent,
    HamburgerMenuComponent
  ],
  exports: [
    TsHeaderComponent,
    TsFooterComponent,
    SearchComponent,
    UserMenuComponent,
    HamburgerMenuComponent
  ],
  providers: [
    TimeService,
    DatePipe,
    HeaderService,
    BrowserService,
    UserService,
    FooterService,
    DataCollectorService
  ]
})
export class LayoutModule { }
