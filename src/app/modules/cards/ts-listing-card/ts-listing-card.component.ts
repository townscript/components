import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { BrowserService } from '../../../core/browser.service';
import { config } from '../../../core/app-config';
import { PlaceService } from '../../layout/components/ts-header/place.service';
import { UtilityService } from '../../../shared/services/utilities.service';
import { ShareEventModalComponent } from '../ts-listings-event-card/share-event-modal/share-event-modal.component';

// @Component({
//   selector: 'ts-listing-card',
//   templateUrl: './ts-listing-card.component.html',
//   styleUrls: ['./ts-listing-card.component.scss']
// })
export class TsListingCardComponent implements OnInit {

  @Input() eventData;
  @Input() type;
  @Input() topicData;
  @Input() gridType;
  router = config.router;

  urgencyMessage = false;
  homeUrl: string;
  goingCounter = false;
  moreIcons = false;
  defaultCardImageUrl = config.s3BaseUrl + 'townscript-common-resources/ListingsStatic/default-card.jpg';
  urlArray;

  constructor(public utilityService: UtilityService,
    public dialog: MatDialog,
    private browser: BrowserService,
    private placeService: PlaceService) {
    this.buildUrlArray();
  }

  buildUrlArray = (): void => {
    if (this.router.url) {
      this.urlArray = this.router.url.split("?")[0].replace('/', '').split('/');
    } else {
      this.urlArray = ['in'];
    }
  }

  shareEvent = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (this.browser.isMobile() && window.navigator && window.navigator['share']) {
      window.navigator['share']({
        title: this.eventData.name,
        text: this.eventData.name,
        url: config.baseUrl + 'e/' + this.eventData.shortName,
      });
    } else {
      this.dialog.open(ShareEventModalComponent, {
        // width: '500px',
        data: { event: this.eventData }
      });
    }
  }

  ngOnInit() {
    this.placeService.place.pipe(take(1)).subscribe(res => {
      if (this.utilityService.IsJsonString(res)) {
        const data = JSON.parse(<any>res);
        if (data && data['country'] && data['city']) {
          this.homeUrl = ('/' + data['country'] + '/' + data['city']).toLowerCase();
        }
      }
    });


  }

}
