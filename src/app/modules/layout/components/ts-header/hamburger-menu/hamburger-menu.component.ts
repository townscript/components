import { Component, OnInit, Input } from '@angular/core';

import { DatePipe } from '@angular/common';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../../../../../modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { UserService } from '../../../../../shared/services/user-service';
import { CitySelectionModalComponent } from '../../../../../shared/components/city-selection/city-selection.component';
import { Router } from '@angular/router';


@Component({
    selector: 'app-hamburger-menu',
    templateUrl: './hamburger-menu.component.html',
    styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

    @Input() user: any;
    @Input() activePlace: String;
    @Input() countryCode: String = 'IN';
    urlArray: string[] = [];
    active: boolean;
    constructor(private dialog: MatDialog,
        public datepipe: DatePipe, private readonly router: Router) {
        this.buildUrlArray();
    }

    buildUrlArray = (): void => {
        if (this.router.url) {
            this.urlArray = this.router.url.split("?")[0].replace('/', '').split('/');
        } else {
            this.urlArray = ['in'];
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
    reloadOnLogout = (event): void => {
        if (event && event['logout']) {
            window.location.reload();
        }
    }
    openCityPopup = () => {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.backdropClass = 'mat-dialog-bkg-container';
        dialogConfig.data = { 'countryCode': this.countryCode };
        this.dialog.open(CitySelectionModalComponent, dialogConfig);
    }
    ngAfterViewInit() {

    }
    ngOnInit() {
    }

}
