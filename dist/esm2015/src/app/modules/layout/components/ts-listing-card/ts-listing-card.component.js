import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShareEventModalComponent } from './share-event-modal/share-event-modal.component';
import { BrowserService } from '../../../../core/browser.service';
import { config } from '../../../../core';
let TsListingCardComponent = class TsListingCardComponent {
    constructor(dialog, browser) {
        this.dialog = dialog;
        this.browser = browser;
        this.urgencyMessage = false;
        this.goingCounter = false;
        this.moreIcons = false;
        this.keywords = [
            { keyCode: 'marathon' },
            { keyCode: 'run4life' },
            { keyCode: 'behindYou' }
        ];
        this.shareEvent = () => {
            console.log(this.browser.isMobile(), window.navigator, window.navigator['share']);
            if (this.browser.isMobile() && window.navigator && window.navigator['share']) {
                window.navigator['share']({
                    title: this.eventData.name,
                    text: this.eventData.name,
                    url: config.baseUrl + 'e/' + this.eventData.shortName,
                });
            }
            else {
                const dialogRef = this.dialog.open(ShareEventModalComponent, {
                    width: '450px',
                    data: { event: this.eventData }
                });
            }
        };
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
        //   topicDescription: 'Being fit is the new trend. The fitness community grown in number with increased participation in running and marathons in Pune. Upcoming Running Events In Pune involves all types of run, like the city run, trail run, fun run, social cause run and many more. Nearly every week there are activities planned by running groups in Pune. Some of the most anticipated runs are full marathon in Pune, half marathon, 10K and 5K marathon in Pune. Pune marathon events best suited for everyone, be it kids, elders, seasonal runners or newbies.',
        //   keywords : this.keywords
        // };
    }
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
        template: "<div *ngIf=\"!topicCard\" [ngClass]=\"showRegularCard ? \n        gridType=='list' ? 'listing-container cursor-pointer rounded  my-4 mx-auto  lg:flex' :\n                    'bg-white cursor-pointer lg:flex lg:flex-col md:w-1/4 listing-container mx-auto my-1 rounded sm:w-1/2'\n        : 'listing-container bg-white cursor-pointer rounded  my-4 mx-auto lg:flex lg:flex-row-reverse' \n\">\n    <div [ngClass]=\"showRegularCard\n                    ? gridType=='list' ? 'h-48 lg:h-auto sm:w-full md:w-full lg:w-2/5 flex-none bg-cover text-center overflow-hidden' : 'bg-cover flex-none h-48 lg:h-auto lg:w-3/5 lg:w-full md:w-full overflow-hidden p-24 sm:w-full text-center'\n                    : 'h-48 lg:h-auto sm:w-full md:w-full lg:w-3/5 flex-none bg-cover text-center overflow-hidden'\"\n        [style.background-image]=\"'url(' + eventData.cardImageUrl + ')'\">\n    </div>\n    <div [ngClass]=\"showRegularCard ?\n                     'listing-container--content flex flex-col justify-between leading-normal w-full'\n                     : 'listing-container--featured-content flex flex-col justify-between leading-normal w-full'\n                     \">\n        <div class=\"pl-4 pt-3 pb-1\">\n            <div class=\"flex flex-row justify-between align-items-center\">\n                <span *ngIf=\"urgencyMessage || featuredCard\"\n                    class=\"text-md bg-orange-500 rounded text-md px-2 mr-2\">Featured</span>\n                <span *ngIf=\"urgencyMessage\" class=\"text-xs text-red-400\">Booked 20 times in the last 24 hrs</span>\n                <span *ngIf=\"urgencyMessage\" class=\"bg-white rounded-l-full px-2\">\n                    <i class=\"material-icons align-bottom pr-1 hidden\">remove_red_eye</i>\n                    <strong class=\"text-xs\">12 Viewing right now</strong>\n                </span>\n            </div>\n            <div class=\"font-303030 capitalize text-xl mb-1\">{{eventData.name | titlecase}}</div>\n            <div class=\"flex text-xs \">\n                <div class=\"mr-2 flex items-center\">\n                    <i class=\"mdi mdi-calendar-today text-xl pr-1  align-bottom\"></i>\n                    <span class=\"\">{{[eventData.startTime, eventData.endTime] | dateRange}}</span>\n                </div>\n                <div class=\"mr-2 flex items-center\">\n                    <i class=\"mdi mdi-map-marker pr-1 text-xl  align-bottom\"></i>\n                    <span class=\"font-323E48 font-bold\">{{eventData.city}}</span>\n                </div>\n                <div *ngIf=\"goingCounter\" class=\"mr-2\">\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <span class=\"font-323E48 font-bold\">700</span>\n                </div>\n            </div>\n            <div *ngIf=\"featuredCard\" class=\"text-sm\">Heres goes some 2 line data which describes about the event.</div>\n            <div [ngClass]=\"showRegularCard ? 'py-2 pr-2 flex justify-between  mt-8' \n                    : 'py-2 pr-2 flex flex-col-reverse'\">\n                <div *ngIf=\"moreIcons\" id=\"set-of-icons\" class=\"flex\">\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                </div>\n                <div [ngClass]=\"showRegularCard ? '' : ''\">\n                    <span class=\"pr-2 font-323E48 font-semibold text-sm sm:text-xs hover:text-gray-900 hover:underline\"\n                        *ngFor=\"let key of keywords\">#{{key.keyCode}}</span>\n                </div>\n            </div>\n        </div>\n        <div\n            class=\"h-10 bottom-purple-bar border-t border-gray-300 flex items-center justify-between py-2 px-4 sm:rounded-b-lg lg:rounded-none\">\n            <div class=\"text-sm flex items-center\">\n                <!-- <i class=\"mdi mdi-heart-outline text-2xl mr-2\"></i> -->\n                <div class=\"px-2 rounded-full\" matRipple>\n                    <i class=\"mdi mdi-share-variant text-2xl\" (click)=\"shareEvent();$event.stopPropagation()\"></i>\n                </div>\n            </div>\n            <div class=\"flex items-center\">\n                <span class=\"align-text-bottom price-container font-323E48 text-base font-semibold\"\n                    *ngIf=\"eventData.minimumTicketPrice\">\n                    Starting from\n                    {{eventData.minimumTicketPrice | currency:eventData.minimumTicketPriceCurrency}}</span>\n                <span *ngIf=\"!eventData.minimumTicketPrice \">Free</span>\n                <i class=\"mdi mdi-arrow-right text-2xl ml-2\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"topicCard\" class=\"topic-container my-4 mx-auto  lg:flex \">\n    <div class=\"hidden w-full md:block md:3/5 bg-cover text-center overflow-hidden\"\n        [style.background-image]=\"'url(' + topicData.cardImageUrl + ')'\">\n    </div>\n    <div class=\"flex flex-col bg-white w-3/5 px-4\">\n        <span class=\"m-2 text-2xl font-bold\">\n            {{topicData.name}}\n        </span>\n        <span class=\"m-2 subTitle text-lg opacity-50\">\n            {{topicData.subTitle}}\n        </span>\n        <span class=\"m-2 text-base\">\n            {{topicData.topicDescription}}\n        </span>\n        <div class= \"keywords m-2 flex\">\n            <span class=\"font-bold cursor-pointer text-xs rounded-full px-2 mr-2 capitalize\"\n                *ngFor=\"let key of keywords\">{{key.keyCode}}\n            <i class=\"align-middle mdi mdi-heart-outline text-2xl\"></i>\n            </span>\n        </div>\n    </div>\n</div>\n",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.listing-container{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);-webkit-transition:.3s;transition:.3s;border:1px solid rgba(0,0,0,.13);border-radius:5px;font-family:Lato}.listing-container:hover{box-shadow:0 2px 15px 0 rgba(0,0,0,.13);box-shadow:0 12px 17px -3px rgba(0,0,0,.1),0 7px 8px -2px rgba(0,0,0,.1)}.listing-container:hover .bottom-purple-bar{background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0;border-radius:0 0 4px}.listing-container:hover .bottom-purple-bar i,.listing-container:hover .bottom-purple-bar span{color:#fff!important}.listing-container .font-323E48{color:#323e48}.listing-container .font-303030{color:#303030}.listing-container .listing-container--content{background-color:#eee}.listing-container .listing-container--content .bottom-purple-bar{-webkit-transition:1s;transition:1s}.listing-container .listing-container--content .price-container{font-size:15px}.listing-container .listing-container--featured-content{background-color:#fff}.listing-container .listing-container--featured-content .bottom-purple-bar{-webkit-transition:1s;transition:1s}.listing-container .listing-container--featured-content .price-container{font-size:15px}.listing-container i{color:#683592}.topic-container{font-family:Lato;min-height:460px}.topic-container .subTitle{color:#263240}.topic-container .keywords,.topic-container i{color:#683592}.topic-container .keywords span{border:1.57px solid #683592}"]
    }),
    tslib_1.__metadata("design:paramtypes", [MatDialog, BrowserService])
], TsListingCardComponent);
export { TsListingCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbGlzdGluZy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtbGlzdGluZy1jYXJkL3RzLWxpc3RpbmctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTzFDLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBaUJqQyxZQUFtQixNQUFpQixFQUFVLE9BQXVCO1FBQWxELFdBQU0sR0FBTixNQUFNLENBQVc7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVpyRSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRztZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtZQUN2QixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7WUFDdkIsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1NBQ3pCLENBQUM7UUFPRixlQUFVLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUNqRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM1RSxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJO29CQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJO29CQUN6QixHQUFHLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO2lCQUN0RCxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtvQkFDM0QsS0FBSyxFQUFFLE9BQU87b0JBQ2QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7aUJBQ2hDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFBO0lBaEJ3RSxDQUFDO0lBa0IxRSxRQUFRO1FBQ0osUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDNUIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixNQUFNO1NBQ1Q7UUFDSCxxQkFBcUI7UUFDckIsK0JBQStCO1FBQy9CLDJCQUEyQjtRQUMzQiwwQ0FBMEM7UUFDMUMsNEZBQTRGO1FBQzVGLHFGQUFxRjtRQUNyRix3RUFBd0U7UUFDeEUscUVBQXFFO1FBQ3JFLG9IQUFvSDtRQUNwSCxvSEFBb0g7UUFDcEgsOEVBQThFO1FBQzlFLHFFQUFxRTtRQUNyRSwyRUFBMkU7UUFDM0UsaUZBQWlGO1FBQ2pGLDRGQUE0RjtRQUM1RixpRkFBaUY7UUFDakYsS0FBSztRQUVMLHFCQUFxQjtRQUNyQixvSEFBb0g7UUFDcEgsK0JBQStCO1FBQy9CLHlGQUF5RjtRQUN6RiwraUJBQStpQjtRQUMvaUIsNkJBQTZCO1FBQzdCLEtBQUs7SUFDUCxDQUFDO0NBRUYsQ0FBQTtBQXpFVTtJQUFSLEtBQUssRUFBRTs7eURBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTs7b0RBQU07QUFDTDtJQUFSLEtBQUssRUFBRTs7eURBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTs7d0RBQVU7QUFKUCxzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixpMkxBQStDOztLQUVoRCxDQUFDOzZDQWtCMkIsU0FBUyxFQUFtQixjQUFjO0dBakIxRCxzQkFBc0IsQ0EwRWxDO1NBMUVZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZS1ldmVudC1tb2RhbC9zaGFyZS1ldmVudC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3NlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2Jyb3dzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHMtbGlzdGluZy1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RzLWxpc3RpbmctY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RzLWxpc3RpbmctY2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRzTGlzdGluZ0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBldmVudERhdGE7XG4gIEBJbnB1dCgpIHR5cGU7XG4gIEBJbnB1dCgpIHRvcGljRGF0YTtcbiAgQElucHV0KCkgZ3JpZFR5cGU7XG4gIHVyZ2VuY3lNZXNzYWdlID0gZmFsc2U7XG4gIGdvaW5nQ291bnRlciA9IGZhbHNlO1xuICBtb3JlSWNvbnMgPSBmYWxzZTtcbiAga2V5d29yZHMgPSBbXG4gICAgeyBrZXlDb2RlOiAnbWFyYXRob24nIH0sXG4gICAgeyBrZXlDb2RlOiAncnVuNGxpZmUnIH0sXG4gICAgeyBrZXlDb2RlOiAnYmVoaW5kWW91JyB9XG4gIF07XG4gIHNob3dSZWd1bGFyQ2FyZDogYm9vbGVhbjtcbiAgZmVhdHVyZWRDYXJkOiBib29sZWFuO1xuICB0b3BpY0NhcmQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nLCBwcml2YXRlIGJyb3dzZXI6IEJyb3dzZXJTZXJ2aWNlKSB7IH1cblxuICBzaGFyZUV2ZW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYnJvd3Nlci5pc01vYmlsZSgpLCB3aW5kb3cubmF2aWdhdG9yLCB3aW5kb3cubmF2aWdhdG9yWydzaGFyZSddKVxuICAgIGlmICh0aGlzLmJyb3dzZXIuaXNNb2JpbGUoKSAmJiB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3JbJ3NoYXJlJ10pIHtcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3JbJ3NoYXJlJ10oe1xuICAgICAgICB0aXRsZTogdGhpcy5ldmVudERhdGEubmFtZSxcbiAgICAgICAgdGV4dDogdGhpcy5ldmVudERhdGEubmFtZSxcbiAgICAgICAgdXJsOiBjb25maWcuYmFzZVVybCArICdlLycgKyB0aGlzLmV2ZW50RGF0YS5zaG9ydE5hbWUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihTaGFyZUV2ZW50TW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgd2lkdGg6ICc0NTBweCcsXG4gICAgICAgIGRhdGE6IHsgZXZlbnQ6IHRoaXMuZXZlbnREYXRhIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnZmVhdHVyZWQnOlxuICAgICAgICAgIHRoaXMuc2hvd1JlZ3VsYXJDYXJkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG9waWMnOlxuICAgICAgICAgIHRoaXMudG9waWNDYXJkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLnNob3dSZWd1bGFyQ2FyZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgLy8gdGhpcy5ldmVudERhdGEgPSB7XG4gICAgLy8gICBcImlkXCI6IDEsIFwiZXZlbnRJZFwiOiA4NzQyOSxcbiAgICAvLyAgIFwibmFtZVwiOiBcImZpcnN0IGV2ZW50XCIsXG4gICAgLy8gICBcInNob3J0TmFtZVwiOiBcInRlc3Qtb25jZS1tb3JlLTEyMzQ0MlwiLFxuICAgIC8vICAgXCJzdGFydFRpbWVcIjogXCIyMDE5LTA3LTI1VDEwOjMwOjAwLjAwMCswMDAwXCIsIFwiZW5kVGltZVwiOiBcIjIwMTktMDctMjVUMTE6MzA6MDAuMDAwKzAwMDBcIixcbiAgICAvLyAgIFwiZGlzcGxheU5hbWVcIjogbnVsbCwgXCJzaG9ydERlc2NyaXB0aW9uXCI6IG51bGwsIFwiZXZlbnRUaW1lWm9uZVwiOiBcIkFzaWEvQ2FsY3V0dGFcIixcbiAgICAvLyAgIFwidGltZVpvbmVEaXNwbGF5TmFtZVwiOiBudWxsLCBcInZlbnVlTG9jYXRpb25cIjogbnVsbCwgXCJjaXR5XCI6IFwiUHVuZVwiLFxuICAgIC8vICAgXCJsYXRpdHVkZVwiOiAxOC41MTMyMTc2MDAwMDAwMDAsIFwibG9uZ2l0dWRlXCI6IDczLjkyODg3MzIwMDAwMDAwMCxcbiAgICAvLyAgIFwiY292ZXJJbWFnZVVybFwiOiBcImh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3Rvd25zY3JpcHQtY29tbW9uLXJlc291cmNlcy9jaXR5LWJhbm5lcnMvbGFyZ2UvcHVuZS5qcGdcIixcbiAgICAvLyAgIFwiY2FyZEltYWdlVXJsXCI6IFwiaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vdG93bnNjcmlwdC1jb21tb24tcmVzb3VyY2VzL2NpdHktYmFubmVycy9tb2JpbGUvcHVuZS5qcGdcIixcbiAgICAvLyAgIFwicHVibGljRXZlbnRcIjogdHJ1ZSwgXCJsaXZlXCI6IHRydWUsIFwiY2F0ZWdvcnlJZFwiOiBudWxsLCBcImV2ZW50VHlwZUlkXCI6IDE3LFxuICAgIC8vICAgXCJtaW5pbXVtVGlja2V0UHJpY2VcIjogMzQ1NiwgXCJtaW5pbXVtVGlja2V0UHJpY2VDdXJyZW5jeVwiOiBcIklOUlwiLFxuICAgIC8vICAgXCJvcmdhbml6ZXJJc1RydXN0ZWRcIjogdHJ1ZSwgXCJzb2xkT3V0RmxhZ1wiOiBmYWxzZSwgXCJyZXBvcnRGbGFnXCI6IGZhbHNlLFxuICAgIC8vICAgXCJwYWlkXCI6IGZhbHNlLCBcIm9ubGluZUV2ZW50XCI6IGZhbHNlLCBcIm9yZ2FuaXplcklkXCI6IDMwODAsIFwicGFnZVZpZXdzXCI6IG51bGwsXG4gICAgLy8gICBcIm9yZ2FuaXplclNjb3JlXCI6IG51bGwsIFwidGlja2V0c1NvbGRcIjogMCwgXCJyb1RpY2tldHNTb2xkXCI6IG51bGwsIFwidGlja2V0c1JlbWFpbmluZ1wiOiAwLFxuICAgIC8vICAgXCJmYXJEdXJhdGlvblwiOiBudWxsLCBcInRvd25zY3JpcHRJUlwiOiBudWxsLCBcInNjb3JlXCI6IG51bGwsIFwicmVjdXJyZW50XCI6IGZhbHNlXG4gICAgLy8gfTtcblxuICAgIC8vIHRoaXMudG9waWNEYXRhID0ge1xuICAgIC8vICAgY2FyZEltYWdlVXJsOiAnaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vdG93bnNjcmlwdC1jb21tb24tcmVzb3VyY2VzL2NhdGVnb3J5Lzc0OHgyMjAvbWFyYXRob24xLmpwZycsXG4gICAgLy8gICBuYW1lOiAnTWFyYXRob25zIGluIFB1bmUnLFxuICAgIC8vICAgc3ViVGl0bGU6ICdVcGNvbWluZyBSdW5uaW5nIEV2ZW50cyBJbiBQdW5lIC0gNUssIDEwSywgSGFsZiAmIEZ1bGwgTWFyYXRob24gSW4gUHVuZScsXG4gICAgLy8gICB0b3BpY0Rlc2NyaXB0aW9uOiAnQmVpbmcgZml0IGlzIHRoZSBuZXcgdHJlbmQuIFRoZSBmaXRuZXNzIGNvbW11bml0eSBncm93biBpbiBudW1iZXIgd2l0aCBpbmNyZWFzZWQgcGFydGljaXBhdGlvbiBpbiBydW5uaW5nIGFuZCBtYXJhdGhvbnMgaW4gUHVuZS4gVXBjb21pbmcgUnVubmluZyBFdmVudHMgSW4gUHVuZSBpbnZvbHZlcyBhbGwgdHlwZXMgb2YgcnVuLCBsaWtlIHRoZSBjaXR5IHJ1biwgdHJhaWwgcnVuLCBmdW4gcnVuLCBzb2NpYWwgY2F1c2UgcnVuIGFuZCBtYW55IG1vcmUuIE5lYXJseSBldmVyeSB3ZWVrIHRoZXJlIGFyZSBhY3Rpdml0aWVzIHBsYW5uZWQgYnkgcnVubmluZyBncm91cHMgaW4gUHVuZS4gU29tZSBvZiB0aGUgbW9zdCBhbnRpY2lwYXRlZCBydW5zIGFyZSBmdWxsIG1hcmF0aG9uIGluIFB1bmUsIGhhbGYgbWFyYXRob24sIDEwSyBhbmQgNUsgbWFyYXRob24gaW4gUHVuZS4gUHVuZSBtYXJhdGhvbiBldmVudHMgYmVzdCBzdWl0ZWQgZm9yIGV2ZXJ5b25lLCBiZSBpdCBraWRzLCBlbGRlcnMsIHNlYXNvbmFsIHJ1bm5lcnMgb3IgbmV3Ymllcy4nLFxuICAgIC8vICAga2V5d29yZHMgOiB0aGlzLmtleXdvcmRzXG4gICAgLy8gfTtcbiAgfVxuXG59XG4iXX0=