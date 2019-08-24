import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TsLoginSignupComponent } from '../ts-login-signup.component';
export declare class LoginModalComponent implements OnInit {
    dialogRef: MatDialogRef<TsLoginSignupComponent>;
    constructor(dialogRef: MatDialogRef<TsLoginSignupComponent>);
    ngOnInit(): void;
    close(): void;
}
