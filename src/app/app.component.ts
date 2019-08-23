import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { LoginModalComponent } from './modules/layout/components/ts-login-signup/login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'components';


  constructor(private dialog: MatDialog) {}
  eventData = '';
  topicData = '';

  openDialog(type) {
      let data;
      if (type === 'login') {
          data = type;
      } else {
          data = 'signup';
      }
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.backdropClass = 'mat-dialog-bkg-container';
      this.dialog.open(LoginModalComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
