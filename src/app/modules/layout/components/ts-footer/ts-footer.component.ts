import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginModalComponent } from '../../../loginSignup/ts-login-signup/login-modal/login-modal.component';
import { UserService } from './../../../../shared/services/user-service';

@Component({
  selector: 'ts-footer',
  templateUrl: './ts-footer.component.html',
  styleUrls: ['./ts-footer.component.scss']
})
export class TsFooterComponent implements OnInit {

  city: any;
  placeId: any;

  @Input("source") source: any = "landingPages";

  @Input("popularEvents") popularEvents: any = [];

  @Input("recentBlogs") recentBlogs: any = [];

  @Input("popularReads") popularReads: any = [];

  popularEventsData: any;
  countryCityMap: any;

  myBookingsURL: string = "/dashboard/mybookings";

  constructor(private dialog: MatDialog,
    private userService: UserService) {
  }

  openContactUs = () => {
    window.open('/contact-us');
  };

  openMyBooking = () => {
    if(this.userService.user.source['value'] != undefined){
      this.redirectToMyBookings();
    } else {
      this.openLogin();
    }
  };

  redirectToMyBookings = (): void => {
    window.open(this.myBookingsURL);
  }

  openLogin = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass = 'mat-dialog-bkg-container';
    dialogConfig.data = { rdUrl:  this.myBookingsURL};
    this.dialog.open(LoginModalComponent, dialogConfig);
  }

  ngOnInit() {
    if (this.source == "landingPages") {

    }
  }

}
