import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ts-footer',
  templateUrl: './ts-footer.component.html',
  styleUrls: ['./ts-footer.component.scss']
})
export class TsFooterComponent implements OnInit {

  placeId: any;
  //countryCode = localStorage.getItem("countryCode");
  city: any;
  popularEventsData: any;
  countryCityMap: any;

  constructor() {

  }
  setFromTownscript = (value) => {

  }
  onChangeCity = (city) => {

  }
  openContactUs = () => {
    window.open('/contact-us');
  };

  openMyBooking = () => {
    window.open('/signin?rdurl=/dashboard/mybookings', '_self');
  };




  ngOnInit() {
  }

}
