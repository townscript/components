import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginModalComponent } from '../../../../modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { UserService } from '../../../../shared/services/user-service';
import { config } from '../../.././../core/app-config';
import { PlaceService } from './place.service';
import { HeaderService } from './ts-header.service';

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
  urlArray;
  userMenu: any;
  host: string = config.baseUrl;
  activePlace: string;
  activeCity: string;
  activeCountryCode: string;
  homePageUrl: string;
  s3BucketUrl = config.s3BaseUrl + config.s3Bucket;
  cityPopupActive = false;
  popularPlaces: any;

  constructor(private headerService: HeaderService, private placeService: PlaceService, private dialog: MatDialog, private userService: UserService) {
    if (this.router.url) {
      this.urlArray = this.router.url.replace('/', '').split('/');
    } else {
      this.urlArray = ['in'];
    }
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

  openLogin = (callback?): void => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass = 'mat-dialog-bkg-container';
    const loginDialog = this.dialog.open(LoginModalComponent, dialogConfig);
    if (callback) {
      loginDialog.afterClosed().subscribe(result => {
        callback();
      });
    }
  }

  navigateToDashboard = () => {
    window.location.href = this.host + 'dashboard/create-event';
  }
  createEventClick = () => {
    if (this.userService.user.source['value'] != undefined) {
      this.navigateToDashboard();
    } else {
      this.openLogin(this.navigateToDashboard);
    }
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

  getPopularPlaces = async () => {
    this.placeService.place.subscribe(async (res) => {
      if (res) {
        const country = JSON.parse(<any>res)['country'];
        const data = await this.headerService.getPopularCities(country || this.urlArray[0]);
        this.popularPlaces = data['data'].slice(0, 6).map(ele => {
          ele.type = 'city';
          ele.cityCode = ele.code;
          return ele;
        });
        console.log(this.popularPlaces);
      }
    });
  }
  ngOnInit() {
    this.userService.user.subscribe(data => {
      this.user = data;
    });
    this.getPopularPlaces();
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
