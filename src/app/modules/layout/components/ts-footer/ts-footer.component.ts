import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginModalComponent } from '../../../loginSignup/ts-login-signup/login-modal/login-modal.component';
import { UserService } from './../../../../shared/services/user-service';
import { FooterService } from './ts-footer.service';
import { PlaceService } from '../ts-header/place.service';

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

  @Input("popularReads") popularReads: any = [
    { title:'How to Organize a Tedx Event?' , url: 'http://blog.townscript.com/how-to-organize-a-tedx-event/'},
    { title:'Sell event tickets in 27+ countries with Townscript' , url: 'http://blog.townscript.com/now-sell-event-ticket-internationally-in-27-countries-with-townscript/'},
    { title:'How to Sell Event Tickets Online' , url: 'http://blog.townscript.com/how-to-sell-event-tickets-online/'},
    { title:'How to Sell Out Your Event Tickets within Minutes?' , url: 'http://blog.townscript.com/how-to-sell-out-your-event-tickets-wthin-minutes/'},
    { title:'5 Reasons You Need more than a Payment Gateway' , url: 'http://blog.townscript.com/5-reasons-you-need-more-than-a-payment-gateway-for-your-event/'}
  ];

  popularEventsData: any;
  countryCityMap: any;

  myBookingsURL: string = "/dashboard/mybookings";

  constructor(private dialog: MatDialog,
    private userService: UserService,
    private footerService: FooterService,
    private placeService: PlaceService) {
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
    if(this.popularEvents == undefined || this.popularEvents.length == 0){
      this.placeService.place.subscribe((res:any) => {
        let data = JSON.parse(res);
        if (data['city']) {
          this.getCityFromCityCode(data['city']);
        }
      });
    }

  }

  async getCityFromCityCode(code) {
    let res = await this.footerService.getCityFromCityCode(code);
    this.city = res['data'];
    this.getPopularEvents();
  }

  async getPopularEvents() {
    let res = await this.footerService.getPopularEvents(this.city.latitude, this.city.longitude);
    this.popularEvents = res.data.data;
    console.log(this.popularEvents);
  }

}
