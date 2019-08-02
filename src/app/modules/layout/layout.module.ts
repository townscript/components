import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RangeDatePipe } from '../layout/components/ts-listing-card/ts-date-range.pipe';
import {
  TsHeaderComponent,
  TsFooterComponent,
  TsListingCardComponent,
  SearchComponent
} from './components/index';
import { TsFormsModule } from '@townscript/elements';
import { TimeService } from '../../shared/index';
import { FormsModule } from '@angular/forms';
import { HeaderService } from './components/ts-header/ts-header.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsFormsModule,
    HttpClientModule
  ],
  declarations: [
    TsHeaderComponent,
    TsFooterComponent,
    TsListingCardComponent,
    RangeDatePipe,
    SearchComponent
  ],
  exports: [
    TsHeaderComponent,
    TsFooterComponent,
    TsListingCardComponent
  ],
  providers: [TimeService, DatePipe, HeaderService]
})
export class LayoutModule { }
