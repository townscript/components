import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {
  }

  openContactUs = () => {
    window.open('/contact-us');
  };

  openMyBooking = () => {
    window.open('/signin?rdurl=/dashboard/mybookings', '_self');
  };

  ngOnInit() {
    if (this.source == "landingPages") {

    }
  }

}
