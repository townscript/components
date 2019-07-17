import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TsHeaderComponent,
  TsFooterComponent
} from './components/index';
import { TsFormsModule } from '@townscript/elements';

@NgModule({
  imports: [
    CommonModule,
    TsFormsModule
  ],
  declarations: [
    TsHeaderComponent,
    TsFooterComponent
  ],
  exports: [
    TsHeaderComponent,
    TsFooterComponent
  ]
})
export class LayoutModule { }
