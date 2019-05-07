import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsFormsModule } from '@townscript/elements';
import {
  TsHeaderComponent,
  TsFooterComponent
} from './components/index';

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
