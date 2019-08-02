import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeDatePipe } from '../layout/components/ts-listing-card/ts-date-range.pipe';
import {
  TsHeaderComponent,
  TsFooterComponent,
  TsListingCardComponent
} from './components/index';
import { TsFormsModule } from '@townscript/elements';

@NgModule({
  imports: [
    CommonModule,
    TsFormsModule
  ],
  declarations: [
    TsHeaderComponent,
    TsFooterComponent,
    TsListingCardComponent,
    RangeDatePipe
  ],
  exports: [
    TsHeaderComponent,
    TsFooterComponent,
    TsListingCardComponent
  ]
})
export class LayoutModule { }
