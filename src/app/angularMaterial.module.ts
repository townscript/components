import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatDialogModule,
    MatButtonModule,
    MatRippleModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatRippleModule
    ],
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatRippleModule
    ]
})
export class AngularMaterialModule { }
