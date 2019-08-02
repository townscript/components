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
  constructor() { }

  ngOnInit() {
    console.log('render card');
  }

}
