import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TsLoginSignupComponent } from '../ts-login-signup.component';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TsLoginSignupComponent>
    ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
