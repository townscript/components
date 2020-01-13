import { Component, OnInit, Input } from '@angular/core';

import { DatePipe } from '@angular/common';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../../../../../modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { UserService } from '../../../../../shared/services/user-service';
import { CitySelectionModalComponent } from '../../../../../shared/components/city-selection/city-selection.component';


@Component({
    selector: 'app-hamburger-menu',
    templateUrl: './hamburger-menu.component.html',
    styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

    @Input() user: any;
    @Input() activePlace: String;
    active: boolean;
    constructor(private dialog: MatDialog,
        public datepipe: DatePipe) {

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
        this.dialog.open(CitySelectionModalComponent, dialogConfig);
    }
    ngAfterViewInit() {

    }
    ngOnInit() {
    }

}
