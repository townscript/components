import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShareEventModalComponent } from './share-event-modal/share-event-modal.component';
import { BrowserService } from '../../../core/browser.service';
import { config } from '../../../core/app-config';

@Component({
  selector: 'ts-listing-card',
  templateUrl: './ts-listing-card.component.html',
  styleUrls: ['./ts-listing-card.component.scss']
})
export class TsListingCardComponent implements OnInit {
  @Input() eventData;
  @Input() type;
  @Input() topicData;
  @Input() gridType;
  urgencyMessage = false;
  goingCounter = false;
  moreIcons = false;
  showRegularCard: boolean;
  featuredCard: boolean;
  topicCard: boolean;

  constructor(public dialog: MatDialog, private browser: BrowserService) { }

  shareEvent = () => {
    console.log(this.browser.isMobile(), window.navigator, window.navigator['share'])
    if (this.browser.isMobile() && window.navigator && window.navigator['share']) {
      window.navigator['share']({
        title: this.eventData.name,
        text: this.eventData.name,
        url: config.baseUrl + 'e/' + this.eventData.shortName,
      });
    } else {
      const dialogRef = this.dialog.open(ShareEventModalComponent, {
        width: '450px',
        data: { event: this.eventData }
      });
    }
  }

  ngOnInit() {
    switch (this.type) {
      case 'featured':
        this.showRegularCard = true;
        break;
      case 'topic':
        this.topicCard = true;
        break;
      default:
        this.showRegularCard = true;
        break;
    }
    // this.eventData = {
    //   "id": 1, "eventId": 87429,
    //   "name": "first event",
    //   "shortName": "test-once-more-123442",
    //   "startTime": "2019-07-25T10:30:00.000+0000", "endTime": "2019-07-25T11:30:00.000+0000",
    //   "displayName": null, "shortDescription": null, "eventTimeZone": "Asia/Calcutta",
    //   "timeZoneDisplayName": null, "venueLocation": null, "city": "Pune",
    //   "latitude": 18.513217600000000, "longitude": 73.928873200000000,
    //   "coverImageUrl": "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/city-banners/large/pune.jpg",
    //   "cardImageUrl": "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/city-banners/mobile/pune.jpg",
    //   "publicEvent": true, "live": true, "categoryId": null, "eventTypeId": 17,
    //   "minimumTicketPrice": 3456, "minimumTicketPriceCurrency": "INR",
    //   "organizerIsTrusted": true, "soldOutFlag": false, "reportFlag": false,
    //   "paid": false, "onlineEvent": false, "organizerId": 3080, "pageViews": null,
    //   "organizerScore": null, "ticketsSold": 0, "roTicketsSold": null, "ticketsRemaining": 0,
    //   "farDuration": null, "townscriptIR": null, "score": null, "recurrent": false
    // };

    // this.topicData = {
    //   cardImageUrl: 'https://s3.ap-south-1.amazonaws.com/townscript-common-resources/category/748x220/marathon1.jpg',
    //   name: 'Marathons in Pune',
    //   subTitle: 'Upcoming Running Events In Pune - 5K, 10K, Half & Full Marathon In Pune',
    //   topicDescription: 'Being fit is the new trend. The fitness community grown in number with increased participation in running and marathons in Pune. Upcoming Running Events In Pune involves all types of run, like the city run, trail run, fun run, social cause run and many more. Nearly every week there are activities planned by running groups in Pune. Some of the most anticipated runs are full marathon in Pune, half marathon, 10K and 5K marathon in Pune. Pune marathon events best suited for everyone, be it kids, elders, seasonal runners or newbies.'
    // };
  }

}