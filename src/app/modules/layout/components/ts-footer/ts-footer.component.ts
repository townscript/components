import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginModalComponent } from '../../../loginSignup/ts-login-signup/login-modal/login-modal.component';
import { UserService } from '../../../../shared/services/user-service';
import { FooterService } from './ts-footer.service';

@Component({
  selector: 'ts-footer',
  templateUrl: './ts-footer.component.html',
  styleUrls: ['./ts-footer.component.scss']
})
export class TsFooterComponent implements OnInit {

  @Input() source = 'landingPages';
  @Input() recentBlogs: any = [];
  @Input() popularReads = [
    {
      title: 'How to Organize a Tedx Event?',
      url: 'http://blog.townscript.com/how-to-organize-a-tedx-event/'
    },
    {
      title: 'Sell event tickets in 27+ countries with Townscript',
      url: 'http://blog.townscript.com/now-sell-event-ticket-internationally-in-27-countries-with-townscript/'
    },
    {
      title: 'How to Sell Event Tickets Online',
      url: 'http://blog.townscript.com/how-to-sell-event-tickets-online/'
    },
    {
      title: 'How to Sell Out Your Event Tickets within Minutes?',
      url: 'http://blog.townscript.com/how-to-sell-out-your-event-tickets-wthin-minutes/'
    },
    {
      title: '5 Reasons You Need more than a Payment Gateway',
      url: 'http://blog.townscript.com/5-reasons-you-need-more-than-a-payment-gateway-for-your-event/'
    }
  ];
  @Input() popularCities: any;
  trending: any;
  popularEventsData: any;
  countryCityMap: any;
  city: any;
  placeId: string;
  copyrightYear:number;
  myBookingsURL = '/dashboard/mybookings';
  subObject: any;

  constructor(private dialog: MatDialog,
    private userService: UserService,
    private footerService: FooterService) {
      this.copyrightYear = new Date().getFullYear();
  }

  openContactUs = () => {
    window.open('/contact-us');
  }

  openMyBooking = () => {
    if (this.userService.user.source['value'] != undefined) {
      this.redirectToMyBookings();
    } else {
      this.openLogin();
    }
  }

  redirectToMyBookings = (): void => {
    window.open(this.myBookingsURL);
  }

  openLogin = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass = 'mat-dialog-bkg-container';
    dialogConfig.data = { rdUrl: this.myBookingsURL };
    this.dialog.open(LoginModalComponent, dialogConfig);
  }

  getPopularCities = async (): Promise<any> => {
    const data = await this.footerService.getAllPopularCities();
    this.popularCities = data['data'];
  }

  ngOnInit() {
    this.setTrending();
    this.getPopularCities();
  }
  setTrending = () => {
    this.trending = [{
      'name': 'New Year Parties in Bengaluru',
      'url': 'https://www.townscript.com/bangalore/new-year-party'
    },
    {
      'name': 'New Year Parties in Pune',
      'url': 'https://www.townscript.com/pune/new-year-party'
    },
    {
      'name': 'New Year Parties in Mumbai',
      'url': 'https://www.townscript.com/mumbai/new-year-party'
    },
    {
      'name': 'New Year Parties in Coimbatore',
      'url': 'https://www.townscript.com/coimbatore/new-year-party'
    },
    {
      'name': 'New Year Parties in Thane',
      'url': 'https://www.townscript.com/in/thane/new-year-party'
    },
    {
      'name': 'New Year Parties in Dehradun',
      'url': 'https://www.townscript.com/dehradun/new-year-party'
    }, {
      'name': 'New Year Parties in Indore',
      'url': 'https://www.townscript.com/indore/new-year-party'
    },
    {
      'name': 'New Year Parties in Chennai',
      'url': 'https://www.townscript.com/chennai/new-year-party'
    },
    {
      'name': 'New Year Parties in Delhi',
      'url': 'https://www.townscript.com/delhi/new-year-party'
    },
    {
      'name': 'New Year Parties in India',
      'url': 'https://www.townscript.com/india/new-year-party'
    }]
  }
}
