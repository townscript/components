import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { TsLoginSignupComponent } from '../../components/ts-login-signup/ts-login-signup.component';
import { UserService } from '../../../../shared/services/user-service';
import { config } from '../../../../core/app-config';

@Component({
  selector: 'ts-header',
  templateUrl: './ts-header.component.html',
  styleUrls: ['./ts-header.component.scss']
})
export class TsHeaderComponent implements OnInit {

  @Input() Components: Array<String> = ["createEventBtn"];
  @Input() source: string = "marketplace";
  @Input() algoliaIndexName: string = "tsTesting";
  @Input() shadow: boolean = true;
  @ViewChild('citySuggestions', { static: false }) citySuggestions: ElementRef;
  @ViewChild('userMenuEle', { static: false }) userMenuEle: ElementRef;
  user: any;
  router = config.router;
  userMenu: any;

  cityPopupActive = false;
  constructor(private dialog: MatDialog, private userService: UserService) {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.citySuggestions.nativeElement.contains(event.target)) {
      this.cityPopupActive = false;
    }
    if (!this.userMenuEle.nativeElement.contains(event.target)) {
      this.userMenu = false;
    }
  }

  openLogin() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '900px';
    dialogConfig.minHeight = '530px';
    dialogConfig.height = 'auto';
    // dialogConfig.backdropClass = 'mat-dialog-bkg-container';
    this.dialog.open(TsLoginSignupComponent, dialogConfig);
  }

  openMyProfileComponent = () => {
    this.router.navigate(["/profile"])
  }
  ngOnInit() {
    this.userService.user.subscribe(data => {
      console.log(data);
      this.user = data;
    })
  }

}
