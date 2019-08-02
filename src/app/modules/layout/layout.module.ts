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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsFormsModule
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
  providers: [TimeService, DatePipe]
})
export class LayoutModule { }
