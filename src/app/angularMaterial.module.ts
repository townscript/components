import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
