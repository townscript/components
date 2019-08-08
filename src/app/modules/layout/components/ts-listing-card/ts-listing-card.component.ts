import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ts-listing-card',
  templateUrl: './ts-listing-card.component.html',
  styleUrls: ['./ts-listing-card.component.scss']
})
export class TsListingCardComponent implements OnInit {
  @Input() eventData;
  urgencyMessage = false;
  goingCounter = false;
  keywords = [
    {keyCode: 'marathon'},
    {keyCode: 'run4life'},
    {keyCode: 'behindYou'}
  ];
  constructor() { }

  ngOnInit() {
    // this.eventData = {
    //   "id":1,"eventId":87429,
    //   "name":"first event",
    //   "shortName":"test-once-more-123442",
    //   "startTime":"2019-07-25T10:30:00.000+0000","endTime":"2019-07-25T11:30:00.000+0000",
    //   "displayName":null,"shortDescription":null,"eventTimeZone":"Asia/Calcutta",
    //   "timeZoneDisplayName":null,"venueLocation":null,"city":"Pune",
    //   "latitude":18.513217600000000,"longitude":73.928873200000000,
    //   "coverImageUrl":"https://s3.ap-south-1.amazonaws.com/townscript-common-resources/city-banners/large/pune.jpg",
    //   "cardImageUrl":"https://s3.ap-south-1.amazonaws.com/townscript-common-resources/city-banners/mobile/pune.jpg",
    //   "publicEvent":true,"live":true,"categoryId":null,"eventTypeId":17,
    //   "minimumTicketPrice":3456,"minimumTicketPriceCurrency":"INR",
    //   "organizerIsTrusted":true,"soldOutFlag":false,"reportFlag":false,
    //   "paid":false,"onlineEvent":false,"organizerId":3080,"pageViews":null,
    //   "organizerScore":null,"ticketsSold":0,"roTicketsSold":null,"ticketsRemaining":0,
    //   "farDuration":null,"townscriptIR":null,"score":null,"recurrent":false
    // };
  }

}
