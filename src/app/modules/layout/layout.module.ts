import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TsHeaderComponent,
  TsFooterComponent
} from './components/index';

@NgModule({
  imports: [
    CommonModule
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
