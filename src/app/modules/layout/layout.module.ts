import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RangeDatePipe } from '../layout/components/ts-listing-card/ts-date-range.pipe';
import {
  TsHeaderComponent,
  TsFooterComponent,
  TsListingCardComponent,
  SearchComponent,
  CitySearchPopupComponent,
  HamburgerMenuComponent
} from './components/index';
import { TsFormsModule } from '@townscript/elements';
import { TimeService } from '../../shared/index';
import { FormsModule } from '@angular/forms';
import { HeaderService } from './components/ts-header/ts-header.service';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsFormsModule,
    HttpClientModule,
    MatRippleModule
  ],
  declarations: [
    TsHeaderComponent,
    TsFooterComponent,
    TsListingCardComponent,
    RangeDatePipe,
    SearchComponent,
    CitySearchPopupComponent,
    HamburgerMenuComponent,
  ],
  exports: [
    TsHeaderComponent,
    TsFooterComponent,
    TsListingCardComponent
  ],
  providers: [TimeService, DatePipe, HeaderService]
})
export class LayoutModule { }
