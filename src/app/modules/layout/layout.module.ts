import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  TsHeaderComponent,
  TsFooterComponent,
  SearchComponent
} from './components/index';
// TODO do not need to write /index here and in shared/index
import { TsFormsModule } from '@townscript/elements';
import { TimeService } from '../../shared/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TsFormsModule
  ],
  declarations: [
    TsHeaderComponent,
    TsFooterComponent,
    SearchComponent
  ],
  exports: [
    TsHeaderComponent,
    TsFooterComponent
  ],
  providers: [TimeService, DatePipe]
})
export class LayoutModule { }
