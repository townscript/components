import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginModalComponent } from './modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { CitySelectionModalComponent } from './shared/components/city-selection/city-selection.component';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'components';


  constructor(private dialog: MatDialog) { }
  goalData: any;
  eventData: any;
  eventData2: any;
  onlineEvent: any;
  recurringEvent: any;
  topicData: any;

  openDialog(type) {
    let data;
    if (type === 'login') {
      data = type;
    } else {
      data = 'signup';
    }
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass = 'mat-dialog-bkg-container';
    this.dialog.open(LoginModalComponent, dialogConfig);
  }

  openCitySelectionPopup = (): void => {
    this.dialog.open(CitySelectionModalComponent, {
      width: 'auto',
      backdropClass: 'mat-dialog-bkg-container',
    });
  }



  ngOnInit() {
    this.goalData = {
      crowdFundedGoalStatus: 'IN_PROGESS',
      goalAmount: 7000.00,
      goalPercentageReached: 41,
      goalAmountReached: 2478,
      ticketCount: 60,
      goalCurrency: 'INR'
    };
    this.eventData = { "id": 16175, "eventId": 157038, "name": "Maruti Suzuki Arena Ahmedabad Comic Con 2020", "shortName": "maruti-suzuki-arena-ahmedabad-comic-con-2020-124433", "startTime": "2020-02-01T05:30:00+0000", "endTime": "2020-02-02T14:30:00+0000", "displayName": "Maruti Suzuki Arena Ahmedabad Comic Con 2020", "shortDescription": null, "eventTimeZone": "Asia/Calcutta", "timeZoneDisplayName": null, "venueLocation": null, "city": "Ahmedabad", "latitude": 23.0436972, "longitude": 72.54031110000005, "coverImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/5d784ee5-beff-4107-bdeb-edd56cb0505a.jpg", "cardImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/mobile-cover-uploaded/8ab09a05-68aa-4c21-99a5-e16f6c842b35.jpg", "publicEvent": true, "live": true, "categoryId": 90, "eventTypeId": 16, "minimumTicketPrice": 599, "minimumTicketPriceCurrency": "INR", "organizerIsTrusted": true, "soldOutFlag": false, "reportFlag": false, "imageMetadata": "{\"card\":{\"color\":\"7bc75f\",\"brightness\":\"dark\"},\"cover\":{\"color\":\"7bc75f\",\"brightness\":\"dark\"}}", "paid": true, "onlineEvent": false, "organizerId": 4489, "pageViews": 14, "organizerScore": 0, "ticketsSold": 234, "roTicketsSold": 13.57, "ticketsRemaining": 9616, "townscriptIR": 0, "score": 2.18, "recurrent": false, "keywords": [{ "id": 141, "topicKeywordName": "party", "topicKeywordCode": "party", "topicId": 150, "weight": 2, "popular": null, "topicKeywordPageTitle": null, "topicKeywordPageDescription": null }, { "id": 177, "topicKeywordName": "culture", "topicKeywordCode": "culture", "topicId": 187, "weight": 1, "popular": null, "topicKeywordPageTitle": null, "topicKeywordPageDescription": null }, { "id": 257, "topicKeywordName": "comic fest", "topicKeywordCode": "comic-fest", "topicId": 187, "weight": 2, "popular": null, "topicKeywordPageTitle": null, "topicKeywordPageDescription": null }], "country": "India", "countryCode": null, "organizerName": "Comic Con India", "recurrenceStartTime": null, "recurrenceEndTime": null, "recurrenceRule": null };

    this.eventData2 = {
      "id": 23658, "eventId": 165431, "name": "Pune Design Festival 2020", "shortName": "pune-design-festival-2020", "startTime": "2020-01-10T03:30:00+0000", "endTime": "2020-01-11T17:30:00+0000", "displayName": "Pune Design Festival 2020", "shortDescription": "discussions, debates, case studies, workshops, networking, music et al.", "eventTimeZone": "Asia/Calcutta", "timeZoneDisplayName": null, "venueLocation": null, "city": "Pune", "latitude": 18.5602638, "longitude": 73.91214259999992,
      "coverImageUrl": "https://s3.ap-south-1.amazonaws.com/townscript-production/images/8f017497-52b6-4ece-b6d9-19cd2d8bc29e.jpg", "cardImageUrl": "https://s3.ap-south-1.amazonaws.com/townscript-production/images/mobile-cover-uploaded/0fdc6d8a-dcef-4554-b78c-11252540fbd5.jpg", "publicEvent": true, "live": true, "categoryId": 90, "eventTypeId": 9, "minimumTicketPrice": 4500, "minimumTicketPriceCurrency": "INR", "organizerIsTrusted": false, "soldOutFlag": false, "reportFlag": false, "imageMetadata": "{\"card\":{\"color\":\"f5fdfdff\",\"brightness\":\"light\"},\"cover\":{\"color\":\"56454bfa\",\"brightness\":\"light\"}}", "paid": true, "onlineEvent": false, "organizerId": 969310, "pageViews": 59, "organizerScore": 0, "ticketsSold": 156, "roTicketsSold": 15.14, "ticketsRemaining": 5904, "townscriptIR": 0, "score": 2.46, "recurrent": false, "keywords": [{ "id": 154, "topicKeywordName": "concert", "topicKeywordCode": "concert", "topicId": 164, "weight": 2, "popular": null, "topicKeywordPageTitle": null, "topicKeywordPageDescription": null }, { "id": 197, "topicKeywordName": "design", "topicKeywordCode": "design", "topicId": 207, "weight": 1, "popular": null, "topicKeywordPageTitle": null, "topicKeywordPageDescription": null }, { "id": 421, "topicKeywordName": "festivals", "topicKeywordCode": "festivals", "topicId": 253, "weight": 1, "popular": null, "topicKeywordPageTitle": null, "topicKeywordPageDescription": null }], "country": "India", "countryCode": null, "organizerName": "Association of Designers of India", "recurrenceStartTime": null, "recurrenceEndTime": null, "recurrenceRule": null
    };

    this.onlineEvent = {
      "id": 58690, "eventId": 213720, "name": "Run Cycle Run - Virtual Duathlon", "shortName": "run-cycle-run", "startTime": "2020-07-12T00:30:00+0000", "endTime": "2020-07-12T15:30:00+0000", "displayName": "Run Cycle Run - Virtual Duathlon", "shortDescription": "RCR- Run Cycle Run \"Virtual Duathlon\"", "eventTimeZone": "Asia/Calcutta", "timeZoneDisplayName": null, "venueLocation": null, "city": "NA", "latitude": null, "longitude": null, "coverImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/73e2c7de-7c00-4d68-aa20-70c2d29a87e4.jpg", "cardImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/mobile-cover-uploaded/be9bf25f-8c39-48b3-aba9-aa3c6b6c2e73.jpg", "publicEvent": true, "live": true, "categoryId": 95, "eventTypeId": 15, "minimumTicketPrice": 149.0, "minimumTicketPriceCurrency": "INR", "organizerIsTrusted": true, "soldOutFlag": false, "reportFlag": false, "imageMetadata": "{\"card\":{\"color\":\"250c44\",\"brightness\":\"dark\"},\"cover\":{\"color\":\"250c44\",\"brightness\":\"dark\"}}", "paid": true, "onlineEvent": true, "organizerId": 1988875, "pageViews": 819, "organizerScore": 0.0, "ticketsSold": 99, "roTicketsSold": 12.86, "ticketsRemaining": 21898, "townscriptIR": 0, "score": 2.53, "recurrent": false, "keywords": [{ "id": 148, "topicKeywordName": "cycling", "topicKeywordCode": "cycling", "topicId": 158, "weight": 2, "popular": null, "topicKeywordPageTitle": null, "topicKeywordPageDescription": null },
      { "id": 215, "topicKeywordName": "running", "topicKeywordCode": "running", "topicId": 154, "weight": 1, "popular": null, "topicKeywordPageTitle": null, "topicKeywordPageDescription": null }, { "id": 521, "topicKeywordName": "virtual runs", "topicKeywordCode": "virtual-runs", "topicId": 279, "weight": 1, "popular": null, "topicKeywordPageTitle": null, "topicKeywordPageDescription": null }], "country": null, "countryCode": null, "organizerName": "Townscript Originals", "recurrenceStartTime": null, "recurrenceEndTime": null, "recurrenceRule": null, "locality": null, "vendorId": null, "virtualEvent": false, "organizerCountryCode": "IN"
    };

    this.recurringEvent = {
      "id": 1614,
      "eventId": 89244,
      "name": "Turf 6.0",
      "shortName": "turf-60-420204",
      "startTime": "2020-07-08T12:30:00+0000",
      "endTime": "2020-07-31T13:30:00+0000",
      "displayName": "turf 6.0",
      "shortDescription": null,
      "eventTimeZone": "Asia/Calcutta",
      "timeZoneDisplayName": null,
      "venueLocation": null,
      "city": "NA",
      "latitude": null,
      "longitude": null,
      "coverImageUrl": "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/city-banners/large/default-city.jpg",
      "cardImageUrl": "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/city-banners/mobile/default-city.jpg",
      "publicEvent": true,
      "live": true,
      "categoryId": null,
      "eventTypeId": 17,
      "minimumTicketPrice": null,
      "minimumTicketPriceCurrency": null,
      "organizerIsTrusted": true,
      "soldOutFlag": false,
      "reportFlag": false,
      "imageMetadata": "{\"card\":{\"color\":\"425832\",\"brightness\":\"dark\"},\"cover\":{\"color\":\"374827\",\"brightness\":\"dark\"}}",
      "paid": false,
      "onlineEvent": true,
      "organizerId": 798,
      "pageViews": 2,
      "organizerScore": 0.0,
      "ticketsSold": 3,
      "roTicketsSold": 0.14,
      "ticketsRemaining": 297,
      "townscriptIR": 0,
      "score": 1.59,
      "recurrent": true,
      "keywords": null,
      "country": null,
      "countryCode": null,
      "organizerName": "Minaz abc",
      "recurrenceStartTime": "05:30 PM",
      "recurrenceEndTime": "08:30 PM",
      "recurrenceRule": "RRULE:FREQ=DAILY;INTERVAL=1",
      "locality": null,
      "vendorId": 1,
      "virtualEvent": false,
      "organizerCountryCode": "IN"
    };
    const now = new Date();
    now.setTime(now.getTime() + (15 * 1000));
    this.onlineEvent.startTime = now.toISOString();

    this.topicData = {
      cardImageUrl: 'https://s3.ap-south-1.amazonaws.com/townscript-common-resources/category/748x220/marathon1.jpg',
      name: 'Marathons in Pune',
      subTitle: 'Upcoming Running Events In Pune - 5K, 10K, Half & Full Marathon In Pune',
      topicDescription: 'Being fit is the new trend. The fitness community grown in number with increased participation in running and marathons in Pune. Upcoming Running Events In Pune involves all types of run, like the city run, trail run, fun run, social cause run and many more. Nearly every week there are activities planned by running groups in Pune. Some of the most anticipated runs are full marathon in Pune, half marathon, 10K and 5K marathon in Pune. Pune marathon events best suited for everyone, be it kids, elders, seasonal runners or newbies.'
    };
  }

}
