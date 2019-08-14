import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var TsListingCardComponent = /** @class */ (function () {
    function TsListingCardComponent() {
        this.urgencyMessage = false;
        this.goingCounter = false;
        this.moreIcons = false;
        this.keywords = [
            { keyCode: 'marathon' },
            { keyCode: 'run4life' },
            { keyCode: 'behindYou' }
        ];
    }
    TsListingCardComponent.prototype.ngOnInit = function () {
        if (this.type === 'regular') {
            this.showRegularCard = true;
        }
        else {
            this.featuredCard = true;
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
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TsListingCardComponent.prototype, "eventData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TsListingCardComponent.prototype, "type", void 0);
    TsListingCardComponent = tslib_1.__decorate([
        Component({
            selector: 'ts-listing-card',
            template: "<div [ngClass]=\"showRegularCard ? 'listing-container cursor-pointer rounded  my-4 mx-auto  lg:flex' \n        : 'listing-container bg-white cursor-pointer rounded  my-4 mx-auto lg:flex lg:flex-row-reverse' \n\">\n    <div [ngClass]=\"showRegularCard \n                    ? 'h-48 lg:h-auto sm:w-full md:w-full lg:w-2/5 flex-none bg-cover text-center overflow-hidden'\n                    : 'h-48 lg:h-auto sm:w-full md:w-full lg:w-3/5 flex-none bg-cover text-center overflow-hidden'\"\n        [style.background-image]=\"'url(' + eventData.cardImageUrl + ')'\">\n    </div>\n    <div [ngClass]=\"showRegularCard ?\n                     'listing-container--content flex flex-col justify-between leading-normal w-full'\n                     : 'listing-container--featured-content flex flex-col justify-between leading-normal w-full'\n                     \">\n        <div class=\"pl-4 pt-3 pb-1\">\n            <div class=\"flex flex-row justify-between align-items-center\">\n                <span *ngIf=\"urgencyMessage || featuredCard\"\n                    class=\"text-md bg-orange-500 rounded text-md px-2 mr-2\">Featured</span>\n                <span *ngIf=\"urgencyMessage\" class=\"text-xs text-red-400\">Booked 20 times in the last 24 hrs</span>\n                <span *ngIf=\"urgencyMessage\" class=\"bg-white rounded-l-full px-2\">\n                    <i class=\"material-icons align-bottom pr-1 hidden\">remove_red_eye</i>\n                    <strong class=\"text-xs\">12 Viewing right now</strong>\n                </span>\n            </div>\n            <div class=\"font-303030 capitalize text-xl mb-1\">{{eventData.name | titlecase}}</div>\n            <div class=\"flex text-xs \">\n                <div class=\"mr-2 flex items-center\">\n                    <i class=\"mdi mdi-calendar-today text-xl pr-1  align-bottom\"></i>\n                    <span class=\"\">{{[eventData.startTime, eventData.endTime] | dateRange}}</span>\n                </div>\n                <div class=\"mr-2 flex items-center\">\n                    <i class=\"mdi mdi-map-marker pr-1 text-xl  align-bottom\"></i>\n                    <span class=\"font-323E48 font-bold\">{{eventData.city}}</span>\n                </div>\n                <div *ngIf=\"goingCounter\" class=\"mr-2\">\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <span class=\"font-323E48 font-bold\">700</span>\n                </div>\n            </div>\n            <div *ngIf=\"featuredCard\" class=\"text-sm\">Heres goes some 2 line data which describes about the event.</div>\n            <div [ngClass]=\"showRegularCard ? 'py-2 pr-2 flex justify-between  mt-8' \n                    : 'py-2 pr-2 flex flex-col-reverse'\">\n                <div *ngIf=\"moreIcons\" id=\"set-of-icons\" class=\"flex\">\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                </div>\n                <div [ngClass]=\"showRegularCard ? '' : ''\">\n                    <span class=\"pr-2 font-323E48 font-semibold text-sm sm:text-xs hover:text-gray-900 hover:underline\"\n                        *ngFor=\"let key of keywords\">#{{key.keyCode}}</span>\n                </div>\n            </div>\n        </div>\n        <div\n            class=\"h-10 bottom-purple-bar border-t border-gray-300 flex items-center justify-between py-2 px-4 sm:rounded-b-lg lg:rounded-none\">\n            <div class=\"text-sm flex items-center \">\n                <!-- <i class=\"mdi mdi-heart-outline text-2xl mr-2\"></i> -->\n                <i class=\"mdi mdi-share-variant text-2xl\"></i>\n            </div>\n            <div class=\"flex items-center\">\n                <span class=\"align-text-bottom price-container font-323E48 text-base font-semibold\"\n                    *ngIf=\"eventData.minimumTicketPrice\">\n                    Starting from\n                    {{eventData.minimumTicketPrice | currency:eventData.minimumTicketPriceCurrency}}</span>\n                <span *ngIf=\"!eventData.minimumTicketPrice \">Free</span>\n                <i class=\"mdi mdi-arrow-right text-2xl ml-2\"></i>\n            </div>\n        </div>\n    </div>\n</div>",
            styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.listing-container{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);-webkit-transition:.3s;transition:.3s;border:1px solid rgba(0,0,0,.13);border-radius:5px;font-family:Lato}.listing-container:hover{box-shadow:0 2px 15px 0 rgba(0,0,0,.13);box-shadow:0 12px 17px -3px rgba(0,0,0,.1),0 7px 8px -2px rgba(0,0,0,.1)}.listing-container:hover .bottom-purple-bar{background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0;border-radius:0 0 4px}.listing-container:hover .bottom-purple-bar i,.listing-container:hover .bottom-purple-bar span{color:#fff!important}.listing-container .font-323E48{color:#323e48}.listing-container .font-303030{color:#303030}.listing-container .listing-container--content{background-color:#eee}.listing-container .listing-container--content .bottom-purple-bar{-webkit-transition:1s;transition:1s}.listing-container .listing-container--content .price-container{font-size:15px}.listing-container .listing-container--featured-content{background-color:#fff}.listing-container .listing-container--featured-content .bottom-purple-bar{-webkit-transition:1s;transition:1s}.listing-container .listing-container--featured-content .price-container{font-size:15px}.listing-container i{color:#683592}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TsListingCardComponent);
    return TsListingCardComponent;
}());
export { TsListingCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtbGlzdGluZy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtbGlzdGluZy1jYXJkL3RzLWxpc3RpbmctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pEO0lBYUU7UUFWQSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRztZQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtZQUN2QixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7WUFDdkIsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1NBQ3pCLENBQUM7SUFHYyxDQUFDO0lBRWYseUNBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDL0I7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBQ0wscUJBQXFCO1FBQ3JCLCtCQUErQjtRQUMvQiwyQkFBMkI7UUFDM0IsMENBQTBDO1FBQzFDLDRGQUE0RjtRQUM1RixxRkFBcUY7UUFDckYsd0VBQXdFO1FBQ3hFLHFFQUFxRTtRQUNyRSxvSEFBb0g7UUFDcEgsb0hBQW9IO1FBQ3BILDhFQUE4RTtRQUM5RSxxRUFBcUU7UUFDckUsMkVBQTJFO1FBQzNFLGlGQUFpRjtRQUNqRiw0RkFBNEY7UUFDNUYsaUZBQWlGO1FBQ2pGLEtBQUs7SUFDUCxDQUFDO0lBckNRO1FBQVIsS0FBSyxFQUFFOzs2REFBVztJQUNWO1FBQVIsS0FBSyxFQUFFOzt3REFBTTtJQUZILHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLDIrSUFBK0M7O1NBRWhELENBQUM7O09BQ1csc0JBQXNCLENBd0NsQztJQUFELDZCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0F4Q1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RzLWxpc3RpbmctY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90cy1saXN0aW5nLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cy1saXN0aW5nLWNhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUc0xpc3RpbmdDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZXZlbnREYXRhO1xuICBASW5wdXQoKSB0eXBlO1xuICB1cmdlbmN5TWVzc2FnZSA9IGZhbHNlO1xuICBnb2luZ0NvdW50ZXIgPSBmYWxzZTtcbiAgbW9yZUljb25zID0gZmFsc2U7XG4gIGtleXdvcmRzID0gW1xuICAgIHsga2V5Q29kZTogJ21hcmF0aG9uJyB9LFxuICAgIHsga2V5Q29kZTogJ3J1bjRsaWZlJyB9LFxuICAgIHsga2V5Q29kZTogJ2JlaGluZFlvdScgfVxuICBdO1xuICBzaG93UmVndWxhckNhcmQ6IGJvb2xlYW47XG4gIGZlYXR1cmVkQ2FyZDogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAncmVndWxhcicpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1JlZ3VsYXJDYXJkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZWRDYXJkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIC8vIHRoaXMuZXZlbnREYXRhID0ge1xuICAgIC8vICAgXCJpZFwiOiAxLCBcImV2ZW50SWRcIjogODc0MjksXG4gICAgLy8gICBcIm5hbWVcIjogXCJmaXJzdCBldmVudFwiLFxuICAgIC8vICAgXCJzaG9ydE5hbWVcIjogXCJ0ZXN0LW9uY2UtbW9yZS0xMjM0NDJcIixcbiAgICAvLyAgIFwic3RhcnRUaW1lXCI6IFwiMjAxOS0wNy0yNVQxMDozMDowMC4wMDArMDAwMFwiLCBcImVuZFRpbWVcIjogXCIyMDE5LTA3LTI1VDExOjMwOjAwLjAwMCswMDAwXCIsXG4gICAgLy8gICBcImRpc3BsYXlOYW1lXCI6IG51bGwsIFwic2hvcnREZXNjcmlwdGlvblwiOiBudWxsLCBcImV2ZW50VGltZVpvbmVcIjogXCJBc2lhL0NhbGN1dHRhXCIsXG4gICAgLy8gICBcInRpbWVab25lRGlzcGxheU5hbWVcIjogbnVsbCwgXCJ2ZW51ZUxvY2F0aW9uXCI6IG51bGwsIFwiY2l0eVwiOiBcIlB1bmVcIixcbiAgICAvLyAgIFwibGF0aXR1ZGVcIjogMTguNTEzMjE3NjAwMDAwMDAwLCBcImxvbmdpdHVkZVwiOiA3My45Mjg4NzMyMDAwMDAwMDAsXG4gICAgLy8gICBcImNvdmVySW1hZ2VVcmxcIjogXCJodHRwczovL3MzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS90b3duc2NyaXB0LWNvbW1vbi1yZXNvdXJjZXMvY2l0eS1iYW5uZXJzL2xhcmdlL3B1bmUuanBnXCIsXG4gICAgLy8gICBcImNhcmRJbWFnZVVybFwiOiBcImh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3Rvd25zY3JpcHQtY29tbW9uLXJlc291cmNlcy9jaXR5LWJhbm5lcnMvbW9iaWxlL3B1bmUuanBnXCIsXG4gICAgLy8gICBcInB1YmxpY0V2ZW50XCI6IHRydWUsIFwibGl2ZVwiOiB0cnVlLCBcImNhdGVnb3J5SWRcIjogbnVsbCwgXCJldmVudFR5cGVJZFwiOiAxNyxcbiAgICAvLyAgIFwibWluaW11bVRpY2tldFByaWNlXCI6IDM0NTYsIFwibWluaW11bVRpY2tldFByaWNlQ3VycmVuY3lcIjogXCJJTlJcIixcbiAgICAvLyAgIFwib3JnYW5pemVySXNUcnVzdGVkXCI6IHRydWUsIFwic29sZE91dEZsYWdcIjogZmFsc2UsIFwicmVwb3J0RmxhZ1wiOiBmYWxzZSxcbiAgICAvLyAgIFwicGFpZFwiOiBmYWxzZSwgXCJvbmxpbmVFdmVudFwiOiBmYWxzZSwgXCJvcmdhbml6ZXJJZFwiOiAzMDgwLCBcInBhZ2VWaWV3c1wiOiBudWxsLFxuICAgIC8vICAgXCJvcmdhbml6ZXJTY29yZVwiOiBudWxsLCBcInRpY2tldHNTb2xkXCI6IDAsIFwicm9UaWNrZXRzU29sZFwiOiBudWxsLCBcInRpY2tldHNSZW1haW5pbmdcIjogMCxcbiAgICAvLyAgIFwiZmFyRHVyYXRpb25cIjogbnVsbCwgXCJ0b3duc2NyaXB0SVJcIjogbnVsbCwgXCJzY29yZVwiOiBudWxsLCBcInJlY3VycmVudFwiOiBmYWxzZVxuICAgIC8vIH07XG4gIH1cblxufVxuIl19