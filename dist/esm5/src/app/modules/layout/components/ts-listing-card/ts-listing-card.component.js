import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShareEventModalComponent } from './share-event-modal/share-event-modal.component';
import { BrowserService } from '../../../../core/browser.service';
import { config } from '../../../../core';
var TsListingCardComponent = /** @class */ (function () {
    function TsListingCardComponent(dialog, browser) {
        var _this = this;
        this.dialog = dialog;
        this.browser = browser;
        this.urgencyMessage = false;
        this.goingCounter = false;
        this.moreIcons = false;
        this.shareEvent = function () {
            console.log(_this.browser.isMobile(), window.navigator, window.navigator['share']);
            if (_this.browser.isMobile() && window.navigator && window.navigator['share']) {
                window.navigator['share']({
                    title: _this.eventData.name,
                    text: _this.eventData.name,
                    url: config.baseUrl + 'e/' + _this.eventData.shortName,
                });
            }
            else {
                var dialogRef = _this.dialog.open(ShareEventModalComponent, {
                    width: '450px',
                    data: { event: _this.eventData }
                });
            }
        };
    }
    TsListingCardComponent.prototype.ngOnInit = function () {
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
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TsListingCardComponent.prototype, "eventData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TsListingCardComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TsListingCardComponent.prototype, "topicData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TsListingCardComponent.prototype, "gridType", void 0);
    TsListingCardComponent = tslib_1.__decorate([
        Component({
            selector: 'ts-listing-card',
            template: "<div *ngIf=\"!topicCard\" [ngClass]=\"showRegularCard ? \n        gridType=='list' ? 'listing-container cursor-pointer rounded  my-4 mx-auto  lg:flex' :\n                    'bg-white cursor-pointer lg:flex lg:flex-col md:w-1/4 listing-container mx-auto my-1 rounded sm:w-1/2'\n        : 'listing-container bg-white cursor-pointer rounded  my-4 mx-auto lg:flex lg:flex-row-reverse' \n\">\n    <div [ngClass]=\"showRegularCard\n                    ? gridType=='list' ? 'h-48 lg:h-auto sm:w-full md:w-full lg:w-2/5 flex-none bg-cover text-center overflow-hidden' : 'bg-cover flex-none h-48 lg:h-auto lg:w-3/5 lg:w-full md:w-full overflow-hidden p-24 sm:w-full text-center'\n                    : 'h-48 lg:h-auto sm:w-full md:w-full lg:w-3/5 flex-none bg-cover text-center overflow-hidden'\"\n        [style.background-image]=\"'url(' + eventData.cardImageUrl + ')'\">\n    </div>\n    <div [ngClass]=\"showRegularCard ?\n                     'listing-container--content flex flex-col justify-between leading-normal w-full'\n                     : 'listing-container--featured-content flex flex-col justify-between leading-normal w-full'\n                     \">\n        <div class=\"pl-4 pt-3 pb-1\">\n            <div class=\"flex flex-row justify-between align-items-center\">\n                <span *ngIf=\"urgencyMessage || featuredCard\"\n                    class=\"text-md bg-orange-500 rounded text-md px-2 mr-2\">Featured</span>\n                <span *ngIf=\"urgencyMessage\" class=\"text-xs text-red-400\">Booked 20 times in the last 24 hrs</span>\n                <span *ngIf=\"urgencyMessage\" class=\"bg-white rounded-l-full px-2\">\n                    <i class=\"material-icons align-bottom pr-1 hidden\">remove_red_eye</i>\n                    <strong class=\"text-xs\">12 Viewing right now</strong>\n                </span>\n            </div>\n            <div class=\"font-303030 capitalize text-xl mb-1\">{{eventData.name | titlecase}}</div>\n            <div class=\"flex text-xs \">\n                <div class=\"mr-2 flex items-center\">\n                    <i class=\"mdi mdi-calendar-today text-xl pr-1  align-bottom\"></i>\n                    <span class=\"\">{{[eventData.startTime, eventData.endTime] | dateRange}}</span>\n                </div>\n                <div class=\"mr-2 flex items-center\">\n                    <i class=\"mdi mdi-map-marker pr-1 text-xl  align-bottom\"></i>\n                    <span class=\"font-323E48 font-bold\">{{eventData.city}}</span>\n                </div>\n                <div *ngIf=\"goingCounter\" class=\"mr-2\">\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <span class=\"font-323E48 font-bold\">700</span>\n                </div>\n            </div>\n            <div *ngIf=\"featuredCard\" class=\"text-sm\">Heres goes some 2 line data which describes about the event.</div>\n            <div [ngClass]=\"showRegularCard ? 'py-2 pr-2 flex justify-between  mt-8' \n                    : 'py-2 pr-2 flex flex-col-reverse'\">\n                <div *ngIf=\"moreIcons\" id=\"set-of-icons\" class=\"flex\">\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                </div>\n                <div [ngClass]=\"showRegularCard ? '' : ''\">\n                    <span class=\"pr-2 font-323E48 font-semibold text-sm sm:text-xs hover:text-gray-900 hover:underline\"\n                        *ngFor=\"let key of eventData.keywords\">#{{key.topicKeywordName}}</span>\n                </div>\n            </div>\n        </div>\n        <div\n            class=\"h-10 bottom-purple-bar border-t border-gray-300 flex items-center justify-between py-2 px-4 sm:rounded-b-lg lg:rounded-none\">\n            <div class=\"text-sm flex items-center\">\n                <!-- <i class=\"mdi mdi-heart-outline text-2xl mr-2\"></i> -->\n                <div class=\"px-2 rounded-full\" matRipple>\n                    <i class=\"mdi mdi-share-variant text-2xl\" (click)=\"shareEvent();$event.stopPropagation()\"></i>\n                </div>\n            </div>\n            <div class=\"flex items-center\">\n                <span class=\"align-text-bottom price-container font-323E48 text-base font-semibold\"\n                    *ngIf=\"eventData.minimumTicketPrice\">\n                    Starting from\n                    {{eventData.minimumTicketPrice | currency:eventData.minimumTicketPriceCurrency}}</span>\n                <span *ngIf=\"!eventData.minimumTicketPrice \">Free</span>\n                <i class=\"mdi mdi-arrow-right text-2xl ml-2\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"topicCard\" class=\"topic-container my-4 mx-auto  lg:flex \">\n    <div class=\"hidden w-full md:block md:3/5 bg-cover text-center overflow-hidden\"\n        [style.background-image]=\"'url(' + topicData.cardImageUrl + ')'\">\n    </div>\n    <div class=\"flex flex-col bg-white w-3/5 px-4\">\n        <span class=\"m-2 text-2xl font-bold\">\n            {{topicData.name}}\n        </span>\n        <span class=\"m-2 subTitle text-lg opacity-50\">\n            {{topicData.subTitle}}\n        </span>\n        <span class=\"m-2 text-base\">\n            {{topicData.topicDescription}}\n        </span>\n        <div class=\"keywords m-2 flex\">\n            <span class=\"font-bold cursor-pointer text-xs rounded-full px-2 mr-2 capitalize\"\n                *ngFor=\"let key of topicData?.keywords\">{{key.keyCode}}\n                <i class=\"align-middle mdi mdi-heart-outline text-2xl\"></i>\n            </span>\n        </div>\n    </div>\n</div>",
            styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.listing-container{border:1px solid rgba(0,0,0,.13);border-radius:5px;font-family:Lato}.listing-container:hover{box-shadow:0 2px 8px 0 rgba(0,0,0,.2)}.listing-container:hover .bottom-purple-bar{box-shadow:0 2px 8px 0 rgba(0,0,0,.2);background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);border-radius:0 0 4px;-webkit-transition:1.3s;transition:1.3s}.listing-container:hover .bottom-purple-bar i,.listing-container:hover .bottom-purple-bar span{color:#fff!important}.listing-container .font-323E48{color:#323e48}.listing-container .font-303030{color:#303030}.listing-container .listing-container--content{background-color:#eee}.listing-container .listing-container--content .bottom-purple-bar{-webkit-transition:background 1s ease-out;transition:background 1s ease-out}.listing-container .listing-container--content .price-container{font-size:15px}.listing-container .listing-container--featured-content{background-color:#fff}.listing-container .listing-container--featured-content .bottom-purple-bar{-webkit-transition:1s ease-in;transition:1s ease-in}.listing-container .listing-container--featured-content .price-container{font-size:15px}.listing-container i{color:#683592}.topic-container{font-family:Lato;min-height:460px}.topic-container .subTitle{color:#263240}.topic-container .keywords,.topic-container i{color:#683592}.topic-container .keywords span{border:1.57px solid #683592}"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog, BrowserService])
    ], TsListingCardComponent);
    return TsListingCardComponent;
}());
export { TsListingCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbGlzdGluZy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtbGlzdGluZy1jYXJkL3RzLWxpc3RpbmctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTzFDO0lBWUUsZ0NBQW1CLE1BQWlCLEVBQVUsT0FBdUI7UUFBckUsaUJBQTBFO1FBQXZELFdBQU0sR0FBTixNQUFNLENBQVc7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVByRSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT2xCLGVBQVUsR0FBRztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUNqRixJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM1RSxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN4QixLQUFLLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJO29CQUMxQixJQUFJLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJO29CQUN6QixHQUFHLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO2lCQUN0RCxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtvQkFDM0QsS0FBSyxFQUFFLE9BQU87b0JBQ2QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUU7aUJBQ2hDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFBO0lBaEJ3RSxDQUFDO0lBa0IxRSx5Q0FBUSxHQUFSO1FBQ0ksUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDNUIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixNQUFNO1NBQ1Q7UUFDSCxxQkFBcUI7UUFDckIsK0JBQStCO1FBQy9CLDJCQUEyQjtRQUMzQiwwQ0FBMEM7UUFDMUMsNEZBQTRGO1FBQzVGLHFGQUFxRjtRQUNyRix3RUFBd0U7UUFDeEUscUVBQXFFO1FBQ3JFLG9IQUFvSDtRQUNwSCxvSEFBb0g7UUFDcEgsOEVBQThFO1FBQzlFLHFFQUFxRTtRQUNyRSwyRUFBMkU7UUFDM0UsaUZBQWlGO1FBQ2pGLDRGQUE0RjtRQUM1RixpRkFBaUY7UUFDakYsS0FBSztRQUVMLHFCQUFxQjtRQUNyQixvSEFBb0g7UUFDcEgsK0JBQStCO1FBQy9CLHlGQUF5RjtRQUN6Riw4aUJBQThpQjtRQUM5aUIsS0FBSztJQUNQLENBQUM7SUFqRVE7UUFBUixLQUFLLEVBQUU7OzZEQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7O3dEQUFNO0lBQ0w7UUFBUixLQUFLLEVBQUU7OzZEQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7OzREQUFVO0lBSlAsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsZzRMQUErQzs7U0FFaEQsQ0FBQztpREFhMkIsU0FBUyxFQUFtQixjQUFjO09BWjFELHNCQUFzQixDQW9FbEM7SUFBRCw2QkFBQztDQUFBLEFBcEVELElBb0VDO1NBcEVZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZS1ldmVudC1tb2RhbC9zaGFyZS1ldmVudC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3NlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2Jyb3dzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHMtbGlzdGluZy1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RzLWxpc3RpbmctY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RzLWxpc3RpbmctY2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRzTGlzdGluZ0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBldmVudERhdGE7XG4gIEBJbnB1dCgpIHR5cGU7XG4gIEBJbnB1dCgpIHRvcGljRGF0YTtcbiAgQElucHV0KCkgZ3JpZFR5cGU7XG4gIHVyZ2VuY3lNZXNzYWdlID0gZmFsc2U7XG4gIGdvaW5nQ291bnRlciA9IGZhbHNlO1xuICBtb3JlSWNvbnMgPSBmYWxzZTtcbiAgc2hvd1JlZ3VsYXJDYXJkOiBib29sZWFuO1xuICBmZWF0dXJlZENhcmQ6IGJvb2xlYW47XG4gIHRvcGljQ2FyZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csIHByaXZhdGUgYnJvd3NlcjogQnJvd3NlclNlcnZpY2UpIHsgfVxuXG4gIHNoYXJlRXZlbnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5icm93c2VyLmlzTW9iaWxlKCksIHdpbmRvdy5uYXZpZ2F0b3IsIHdpbmRvdy5uYXZpZ2F0b3JbJ3NoYXJlJ10pXG4gICAgaWYgKHRoaXMuYnJvd3Nlci5pc01vYmlsZSgpICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvclsnc2hhcmUnXSkge1xuICAgICAgd2luZG93Lm5hdmlnYXRvclsnc2hhcmUnXSh7XG4gICAgICAgIHRpdGxlOiB0aGlzLmV2ZW50RGF0YS5uYW1lLFxuICAgICAgICB0ZXh0OiB0aGlzLmV2ZW50RGF0YS5uYW1lLFxuICAgICAgICB1cmw6IGNvbmZpZy5iYXNlVXJsICsgJ2UvJyArIHRoaXMuZXZlbnREYXRhLnNob3J0TmFtZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFNoYXJlRXZlbnRNb2RhbENvbXBvbmVudCwge1xuICAgICAgICB3aWR0aDogJzQ1MHB4JyxcbiAgICAgICAgZGF0YTogeyBldmVudDogdGhpcy5ldmVudERhdGEgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICBjYXNlICdmZWF0dXJlZCc6XG4gICAgICAgICAgdGhpcy5zaG93UmVndWxhckNhcmQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0b3BpYyc6XG4gICAgICAgICAgdGhpcy50b3BpY0NhcmQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuc2hvd1JlZ3VsYXJDYXJkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAvLyB0aGlzLmV2ZW50RGF0YSA9IHtcbiAgICAvLyAgIFwiaWRcIjogMSwgXCJldmVudElkXCI6IDg3NDI5LFxuICAgIC8vICAgXCJuYW1lXCI6IFwiZmlyc3QgZXZlbnRcIixcbiAgICAvLyAgIFwic2hvcnROYW1lXCI6IFwidGVzdC1vbmNlLW1vcmUtMTIzNDQyXCIsXG4gICAgLy8gICBcInN0YXJ0VGltZVwiOiBcIjIwMTktMDctMjVUMTA6MzA6MDAuMDAwKzAwMDBcIiwgXCJlbmRUaW1lXCI6IFwiMjAxOS0wNy0yNVQxMTozMDowMC4wMDArMDAwMFwiLFxuICAgIC8vICAgXCJkaXNwbGF5TmFtZVwiOiBudWxsLCBcInNob3J0RGVzY3JpcHRpb25cIjogbnVsbCwgXCJldmVudFRpbWVab25lXCI6IFwiQXNpYS9DYWxjdXR0YVwiLFxuICAgIC8vICAgXCJ0aW1lWm9uZURpc3BsYXlOYW1lXCI6IG51bGwsIFwidmVudWVMb2NhdGlvblwiOiBudWxsLCBcImNpdHlcIjogXCJQdW5lXCIsXG4gICAgLy8gICBcImxhdGl0dWRlXCI6IDE4LjUxMzIxNzYwMDAwMDAwMCwgXCJsb25naXR1ZGVcIjogNzMuOTI4ODczMjAwMDAwMDAwLFxuICAgIC8vICAgXCJjb3ZlckltYWdlVXJsXCI6IFwiaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vdG93bnNjcmlwdC1jb21tb24tcmVzb3VyY2VzL2NpdHktYmFubmVycy9sYXJnZS9wdW5lLmpwZ1wiLFxuICAgIC8vICAgXCJjYXJkSW1hZ2VVcmxcIjogXCJodHRwczovL3MzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS90b3duc2NyaXB0LWNvbW1vbi1yZXNvdXJjZXMvY2l0eS1iYW5uZXJzL21vYmlsZS9wdW5lLmpwZ1wiLFxuICAgIC8vICAgXCJwdWJsaWNFdmVudFwiOiB0cnVlLCBcImxpdmVcIjogdHJ1ZSwgXCJjYXRlZ29yeUlkXCI6IG51bGwsIFwiZXZlbnRUeXBlSWRcIjogMTcsXG4gICAgLy8gICBcIm1pbmltdW1UaWNrZXRQcmljZVwiOiAzNDU2LCBcIm1pbmltdW1UaWNrZXRQcmljZUN1cnJlbmN5XCI6IFwiSU5SXCIsXG4gICAgLy8gICBcIm9yZ2FuaXplcklzVHJ1c3RlZFwiOiB0cnVlLCBcInNvbGRPdXRGbGFnXCI6IGZhbHNlLCBcInJlcG9ydEZsYWdcIjogZmFsc2UsXG4gICAgLy8gICBcInBhaWRcIjogZmFsc2UsIFwib25saW5lRXZlbnRcIjogZmFsc2UsIFwib3JnYW5pemVySWRcIjogMzA4MCwgXCJwYWdlVmlld3NcIjogbnVsbCxcbiAgICAvLyAgIFwib3JnYW5pemVyU2NvcmVcIjogbnVsbCwgXCJ0aWNrZXRzU29sZFwiOiAwLCBcInJvVGlja2V0c1NvbGRcIjogbnVsbCwgXCJ0aWNrZXRzUmVtYWluaW5nXCI6IDAsXG4gICAgLy8gICBcImZhckR1cmF0aW9uXCI6IG51bGwsIFwidG93bnNjcmlwdElSXCI6IG51bGwsIFwic2NvcmVcIjogbnVsbCwgXCJyZWN1cnJlbnRcIjogZmFsc2VcbiAgICAvLyB9O1xuXG4gICAgLy8gdGhpcy50b3BpY0RhdGEgPSB7XG4gICAgLy8gICBjYXJkSW1hZ2VVcmw6ICdodHRwczovL3MzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS90b3duc2NyaXB0LWNvbW1vbi1yZXNvdXJjZXMvY2F0ZWdvcnkvNzQ4eDIyMC9tYXJhdGhvbjEuanBnJyxcbiAgICAvLyAgIG5hbWU6ICdNYXJhdGhvbnMgaW4gUHVuZScsXG4gICAgLy8gICBzdWJUaXRsZTogJ1VwY29taW5nIFJ1bm5pbmcgRXZlbnRzIEluIFB1bmUgLSA1SywgMTBLLCBIYWxmICYgRnVsbCBNYXJhdGhvbiBJbiBQdW5lJyxcbiAgICAvLyAgIHRvcGljRGVzY3JpcHRpb246ICdCZWluZyBmaXQgaXMgdGhlIG5ldyB0cmVuZC4gVGhlIGZpdG5lc3MgY29tbXVuaXR5IGdyb3duIGluIG51bWJlciB3aXRoIGluY3JlYXNlZCBwYXJ0aWNpcGF0aW9uIGluIHJ1bm5pbmcgYW5kIG1hcmF0aG9ucyBpbiBQdW5lLiBVcGNvbWluZyBSdW5uaW5nIEV2ZW50cyBJbiBQdW5lIGludm9sdmVzIGFsbCB0eXBlcyBvZiBydW4sIGxpa2UgdGhlIGNpdHkgcnVuLCB0cmFpbCBydW4sIGZ1biBydW4sIHNvY2lhbCBjYXVzZSBydW4gYW5kIG1hbnkgbW9yZS4gTmVhcmx5IGV2ZXJ5IHdlZWsgdGhlcmUgYXJlIGFjdGl2aXRpZXMgcGxhbm5lZCBieSBydW5uaW5nIGdyb3VwcyBpbiBQdW5lLiBTb21lIG9mIHRoZSBtb3N0IGFudGljaXBhdGVkIHJ1bnMgYXJlIGZ1bGwgbWFyYXRob24gaW4gUHVuZSwgaGFsZiBtYXJhdGhvbiwgMTBLIGFuZCA1SyBtYXJhdGhvbiBpbiBQdW5lLiBQdW5lIG1hcmF0aG9uIGV2ZW50cyBiZXN0IHN1aXRlZCBmb3IgZXZlcnlvbmUsIGJlIGl0IGtpZHMsIGVsZGVycywgc2Vhc29uYWwgcnVubmVycyBvciBuZXdiaWVzLidcbiAgICAvLyB9O1xuICB9XG5cbn1cbiJdfQ==