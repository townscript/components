import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsFormsModule } from '@townscript/elements';
import {
  TsHeaderComponent
} from './components/index';

@NgModule({
  imports: [
    CommonModule,
    TsFormsModule
  ],
  declarations: [
    TsHeaderComponent
  ],
  exports: [
    TsHeaderComponent
  ]
})
export class LayoutModule { }
