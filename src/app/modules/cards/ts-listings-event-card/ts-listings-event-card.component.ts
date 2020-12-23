import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrowserService } from '../../../core/browser.service';
import { PlaceService } from '../../layout/components/ts-header/place.service';
import { UtilityService } from '../../../shared/services/utilities.service';
import { config } from '../../../core/app-config';
import { Router } from '@angular/router';
import { ShareEventModalComponent } from './share-event-modal/share-event-modal.component';
import { DateTime } from 'luxon';
import { TimeService } from '../../../shared/services/time.service';

@Component({
  selector: 'ts-listings-event-card',
  templateUrl: './ts-listings-event-card.component.html',
  styleUrls: ['./ts-listings-event-card.component.scss']
})
export class TsListingEventCardComponent implements OnInit, OnDestroy {


  @Input() eventData: any;
  @Input() type: any;
  @Input() gridType: any = 'grid';
  @Input() hideFollowShare = false;
  @Input() theme = 'townscript';
  @Input() hideTime: boolean = true;
  @Input() cfData?: any;
  router: Router = config.router;

  // following date is to show countdown
  eventStartDate: Date;
  startingSoon: boolean;
  nowLive = 0;

  homeUrl: any;
  subObject: any;
  urlArray: string[];
  defaultCardImageUrl = config.s3BaseUrl + 'townscript-common-resources/ListingsStatic/default-card.jpg';

  constructor(
    public utilityService: UtilityService,
    public dialog: MatDialog,
    private browser: BrowserService,
    private placeService: PlaceService,
    private readonly timeService: TimeService) {
  }

  ngOnInit() {
    this.buildUrlArray();
    if (this.eventData.cardImageUrl && this.eventData.cardImageUrl.indexOf(config.s3Bucket) > -1) {
      this.eventData.cardImageUrl = config.imgixUrl +
        this.eventData.cardImageUrl.split(config.s3Bucket)[1];
    }
    this.subObject = this.placeService.place.subscribe(res => {
      if (this.utilityService.IsJsonString(res)) {
        const data = JSON.parse(<any>res);
        if (data && data['country'] && data['city']) {
          this.homeUrl = ('/' + data['country'] + '/' + data['city']).toLowerCase();
        }
      }
    });
    if (this.eventData.onlineEvent) {
      this.eventStartDate = DateTime.fromISO(this.eventData.startTime).toJSDate();
      if (this.eventData.recurrent) {
        this.eventStartDate = this.timeService.nextOccurenceFromRRule(this.eventStartDate,
          DateTime.fromISO(this.eventData.endTime).toJSDate(),
          this.eventData.recurrenceRule, this.eventData.recurrenceStartTime);
      }
      this.startingSoon = this.timeService.dateTimeWithinHours(this.eventStartDate, 10);
    }
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

  getLocation = () => {
    if (this.eventData != undefined) {
      if (this.eventData.onlineEvent) {
        return 'Online';
      }
      if (this.eventData.locality != undefined) {
        return this.eventData.locality + ', ' + this.eventData.city;
      } else {
        return this.eventData.city;
      }
    } else {
      return '';
    }
  }

  ngOnDestroy() {
    if (this.subObject)
      this.subObject.unsubscribe();
  }

}
