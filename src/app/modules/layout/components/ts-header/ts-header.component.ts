import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { TimeService } from '../../../../shared/services/time.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { Router } from '@angular/router';
import { TsLoginSignupComponent} from '../../components/ts-login-signup/ts-login-signup.component';

@Component({
  selector: 'ts-header',
  templateUrl: './ts-header.component.html',
  styleUrls: ['./ts-header.component.scss']
})
export class TsHeaderComponent implements OnInit {

  @Input() Components: Array<String> = ['createEventBtn'];
  @Input() source = 'marketplace';
  @Input() algoliaIndexName = 'tsTesting';
  @Input() router: Router;
  @ViewChild('citySuggestions', { static: false }) citySuggestions: ElementRef;

  cityPopupActive = false;
  constructor(private dialog: MatDialog) {
  }

  @HostListener('document:click', ['$event'])

  clickout(event) {
    console.log('clickout called');
    if (!this.citySuggestions.nativeElement.contains(event.target)) {
      this.cityPopupActive = false;
    }
  }

  openLogin(type) {
    const dialogConfig = new MatDialogConfig();
    console.log('in Login');
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '900px';
    dialogConfig.minHeight = '530px';
    dialogConfig.height = 'auto';
    dialogConfig.backdropClass = 'mat-dialog-bkg-container';
    this.dialog.open(TsLoginSignupComponent, dialogConfig);
}

  ngOnInit() {
  }

}
