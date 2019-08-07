import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatDialogModule,
    MatButtonModule,
    MatRippleModule,
    MatSnackBarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatRippleModule,
        MatSnackBarModule
    ],
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatRippleModule
    ]
})
export class AngularMaterialModule { }
