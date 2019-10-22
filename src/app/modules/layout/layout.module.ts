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
import { TsHeaderComponent } from './components/ts-header/ts-header.component';
import { TsFooterComponent } from './components/ts-footer/ts-footer.component';
import { SearchComponent } from './components/ts-header/search/search.component';
import { CitySearchPopupComponent } from './components/ts-header/city-search-popup/city-search-popup.component';
import { UserMenuComponent } from './components/ts-header/user-menu/user-menu.component';
import { HeaderService } from './components/ts-header/ts-header.service';
import { FooterService } from './components/ts-footer/ts-footer.service';

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
