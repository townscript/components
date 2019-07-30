import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { TsLoginSignupComponent } from './modules/layout/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'components';


  constructor(private dialog: MatDialog) {}

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
      dialogConfig.minWidth = '900px';
      dialogConfig.minHeight = '530px';
      dialogConfig.height = 'auto';
      dialogConfig.data = data;
      dialogConfig.backdropClass = 'mat-dialog-bkg-container';
      this.dialog.open(TsLoginSignupComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
