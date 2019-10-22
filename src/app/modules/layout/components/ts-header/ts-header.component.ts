import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginModalComponent } from '../../../../modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { UserService } from '../../../../shared/services/user-service';
import { config } from '../../.././../core/app-config';
import { PlaceService } from './place.service';

@Component({
  selector: 'ts-header',
  templateUrl: './ts-header.component.html',
  styleUrls: ['./ts-header.component.scss']
})
export class TsHeaderComponent implements OnInit {

  @Input() Components: Array<String> = ['icon', 'createEventBtn', 'eventSearch',
    'userMenu', 'mobileSearch', 'mobileProfile', 'mobileCitySearch', 'mobileBack'];

  @Input() backState = false;
  @Input() source = 'marketplace';
  @Input() shadow = true;
  @ViewChild('citySuggestions', { static: false }) citySuggestions: ElementRef;
  @ViewChild('userMenuEle', { static: false }) userMenuEle: ElementRef;

  user: any;
  router = config.router;
  userMenu: any;
  host: string = config.baseUrl;
  activePlace: string;
  activeCity: string;
  activeCountryCode: string;
  homePageUrl: string;
  s3BucketUrl = config.s3BaseUrl + config.s3Bucket;
  cityPopupActive = false;

  constructor(private placeService: PlaceService, private dialog: MatDialog, private userService: UserService) {
  }

  @HostListener('document:click', ['$event'])
  clickout = (event) => {
    if (!this.citySuggestions.nativeElement.contains(event.target)) {
      this.cityPopupActive = false;
    }
    if (!this.userMenuEle.nativeElement.contains(event.target)) {
      this.userMenu = false;
    }
  }

  openLogin = (): void => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass = 'mat-dialog-bkg-container';
    this.dialog.open(LoginModalComponent, dialogConfig);
  }

  navigateToMobileSearch = (): void => {
    this.router.navigate(['/mobile/search']);
  }
  openMyProfileComponent = (): void => {
    if (this.userService.user.source['value'] != undefined) {
      this.router.navigate(['/profile']);
    } else {
      this.openLogin();
    }
  }
  goBack = (): void => {
    this.router.navigate(['../']);
  }
  goToHomePage = (): void => {
    this.router.navigate([this.homePageUrl]);
  }

  ngOnInit() {
    this.userService.user.subscribe(data => {
      this.user = data;
    });
    this.placeService.place.subscribe(res => {
      if (res) {
        this.activePlace = JSON.parse(<any>res)['currentPlace'];
        this.activeCity = JSON.parse(<any>res)['city'];
        this.activeCountryCode = JSON.parse(<any>res)['country'];
        this.homePageUrl = '/' + this.activeCountryCode.toLowerCase() + '/' + this.activeCity.toLowerCase();
      }
    });
  }

}
