import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TsLoginSignupComponent } from '../ts-login-signup.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginModalComponent implements OnInit {

  header: any = 'Let\'s get started';
  subHeader: any = 'Your one stop tool for organizing events';
  rdurl:any;
  showSocial:any;

  constructor(public dialogRef: MatDialogRef<TsLoginSignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit() {
    if(this.data != undefined && this.data.header != undefined){
      this.header = this.data.header;
    }
    if(this.data != undefined && this.data.subHeader != undefined){
      this.subHeader = this.data.subHeader;
    }
    if(this.data != undefined && this.data.rdurl != undefined){
      this.rdurl = this.data.rdUrl;
    }
    if(this.data != undefined && this.data.showSocial != undefined){
      this.showSocial = this.data.showSocial;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
