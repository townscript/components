import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginModalComponent } from '../../../loginSignup/ts-login-signup/login-modal/login-modal.component';
import { UserService } from '../../../../shared/services/user-service';
import { config } from '../../../../core/app-config';
import { PlaceService } from './place.service';

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
  activeCity: any = "Pune";
  s3BucketUrl = config.s3BaseUrl + config.s3Bucket;

  cityPopupActive = false;
  constructor(private placeService: PlaceService, private dialog: MatDialog, private userService: UserService) {
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
    dialogConfig.backdropClass = 'mat-dialog-bkg-container';
    this.dialog.open(LoginModalComponent, dialogConfig);
  }

  navigateToMobileSearch() {
    this.router.navigate(["/mobile/search"])
  }
  openMyProfileComponent = () => {
    this.router.navigate(["/profile"])
  }
  ngOnInit() {
    this.userService.user.subscribe(data => {
      this.user = data;
    });
    this.placeService.place.subscribe(res => {
      if (res) {
        this.activeCity = res;
      }
    });
  }

}
