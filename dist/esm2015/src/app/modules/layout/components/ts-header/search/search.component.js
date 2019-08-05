import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as algoliaSearchImported from "algoliasearch";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
import { HeaderService } from '../ts-header.service';
import { Router } from "@angular/router";
const algoliasearch = algoliaSearchImported;
let SearchComponent = class SearchComponent {
    constructor(headerService, timeService, datepipe) {
        this.headerService = headerService;
        this.timeService = timeService;
        this.datepipe = datepipe;
        this.algoliaIndexName = "tsTesting";
        this.searchTextChanged = new Subject();
        this.searchActive = false;
        this.citySearchActive = false;
        this.cityPopupActive = false;
        this.activeCity = "Pune";
        this.cityQueryChanged = new Subject();
        this.popularPlaces = ['Pune', 'Mumbai', 'Bangalore', 'New Delhi', 'Lucknow', 'Kanpur'];
        this.callAlgolia = (text) => {
            this.index.search({
                query: text,
                hitsPerPage: 6
            }).then((data) => {
                console.log(data);
                this.filterDataForSearchResult(data);
            });
        };
        this.filterDataForSearchResult = (data) => {
            let results = data.hits;
            let interests = results.filter(ele => {
                return ele.objType == "keyword" ||
                    ele.objType == "eventtype" ||
                    ele.objType == "category";
            });
            let organizers = results.filter(ele => ele.objType == "organizer");
            let events = results.filter(ele => ele.objType == "event");
            interests.map(interest => {
                interest.name = interest.name + ' Events';
                interest.location = "PUNE";
            });
            organizers.map(organizer => {
                if (!organizer.imageUrl) {
                    organizer.imageUrl = "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-organizer.png";
                }
                if (organizer.secondaryTextProperties && organizer.secondaryTextProperties.country) {
                    organizer.location = organizer.secondaryTextProperties.country;
                }
            });
            events.map(event => {
                if (!event.imageUrl) {
                    event.imageUrl = "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-event.png";
                }
                if (event.secondaryTextProperties && event.secondaryTextProperties.city) {
                    event.location = event.secondaryTextProperties.city;
                }
                if (event.secondaryTextProperties && event.secondaryTextProperties.startTime) {
                    let startDateTime = event.secondaryTextProperties.startTime;
                    startDateTime = this.timeService.convertDateToTimezone(startDateTime, event.secondaryTextProperties.eventTimeZone);
                    event.secondaryTextProperties.startTime = this.datepipe.transform(startDateTime, "d MMM yyyy, ' 'h:mma");
                }
            });
            this.searchResults = { "interests": interests, "organizers": organizers, "events": events };
        };
        this.search = (text) => {
            if (text != undefined && text.length > 0)
                this.searchTextChanged.next(text);
        };
        this.searchTextChanged.pipe(debounceTime(300)).subscribe(text => this.callAlgolia(text));
        this.client = algoliasearch("AT5UB8FMSR", "c7e946f5b740ef035bd824f69dcc1612");
        this.index = this.client.initIndex(this.algoliaIndexName);
    }
    clickout(event) {
        if (!this.citySuggestions.nativeElement.contains(event.target)) {
            this.cityPopupActive = false;
        }
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SearchComponent.prototype, "algoliaIndexName", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Router)
], SearchComponent.prototype, "router", void 0);
tslib_1.__decorate([
    ViewChild('cityInput', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], SearchComponent.prototype, "cityInput", void 0);
tslib_1.__decorate([
    ViewChild('citySuggestions', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], SearchComponent.prototype, "citySuggestions", void 0);
tslib_1.__decorate([
    HostListener('document:click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SearchComponent.prototype, "clickout", null);
SearchComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search',
        template: "<div class=\"w-full lg:flex search-container relative\" [class.active]=\"searchActive\">\n    <div class=\"w-2/3 m-2 flex items-center left-section\">\n        <i class=\"mdi mdi-magnify text-2xl color-blue p-2\"></i>\n        <input [(ngModel)]=\"searchText\" (ngModelChange)=\"search($event)\"\n            (focus)=\"searchActive = true;citySearchActive=false\" (blur)=\"searchActive = false\"\n            class=\"text-sm w-full h-full bg-transparent  p-2\" type=\"text\" placeholder=\"Search for an Event\" />\n        <div class=\"suggestions enter-slide-bottom w-full p-4 absolute\" *ngIf=\"searchResults && searchActive\">\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.interests.length>0\">\n                <li class=\"list-head\">\n                    INTERESTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let interest of searchResults.interests\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ interest.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{interest.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"interest.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{interest.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.events.length>0\">\n                <li class=\"list-head\">\n                    EVENTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let event of searchResults.events\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ event.imageUrl +')'\"></div>\n                        <div>\n                            <span class=\"mb-1 block\">{{event.name | titlecase}} </span>\n                            <div class=\"flex items-center\">\n                                <div class=\"flex items-center\" *ngIf=\"event.location\">\n                                    <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                    <small>{{event.location}}</small>\n                                </div>\n                                <div class=\"flex items-center ml-2\" *ngIf=\"event?.secondaryTextProperties?.startTime\">\n                                    <i class=\"mdi mdi-calendar-today color-blue mr-1\"></i>\n                                    <small>{{event.secondaryTextProperties.startTime}}</small>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.organizers.length>0\">\n                <li class=\"list-head\">\n                    ORGANIZERS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let organizer of searchResults.organizers\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ organizer.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{organizer.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"organizer.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{organizer.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div #citySuggestions\n        class=\"w-1/3 flex items-center justify-between p-2 cursor-pointer relative city-search-container\"\n        [class.active]=\"cityPopupActive\" (click)=\"cityPopupActive = true\">\n        <div class=\"flex items-center\">\n            <i class=\"mdi mdi-map-marker text-2xl color-blue\"></i>\n            {{activeCity}}\n        </div>\n        <i class=\"mdi mdi-chevron-down text-2xl\"></i>\n        <app-city-search-popup class=\"popup\" *ngIf=\"cityPopupActive\"></app-city-search-popup>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}@media (min-width:991px){.search-container{height:44px;border-radius:2px;background-color:#ededed;-webkit-transition:.3s;transition:.3s}.search-container .left-section{border-right:1px solid rgba(151,151,151,.3)}.search-container .left-section input{-webkit-transition:.3s;transition:.3s}.search-container .left-section input:focus{background:#fafafa}.search-container .left-section .suggestions{top:100%;left:0;background:#fafafa;border-top:1px solid rgba(151,151,151,.4)}.search-container .left-section .suggestions ul{margin:2% 0}.search-container .left-section .suggestions ul li{color:#636363;-webkit-transition:.15s;transition:.15s;border-bottom:1px solid rgba(151,151,151,.25)}.search-container .left-section .suggestions ul li.list-head{font-size:10px;color:#636363;border:none;font-weight:400}.search-container .left-section .suggestions ul li.list-head:hover{background:#fafafa}.search-container .left-section .suggestions ul li .avatar{border-radius:50%;height:41px;width:41px}.search-container .left-section .suggestions ul li:hover{background:#ededed}.search-container .city-search-container{-webkit-transition:.3s;transition:.3s}.search-container .city-search-container.active{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container .city-search-container .popup{position:absolute;top:135%;width:135%;left:-34%}.search-container.active{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container.active .suggestions{box-shadow:0 11px 15px 0 rgba(0,0,0,.15)}}"]
    }),
    tslib_1.__metadata("design:paramtypes", [HeaderService, TimeService, DatePipe])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEtBQUsscUJBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxNQUFNLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztBQU81QyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBc0J4QixZQUFvQixhQUE0QixFQUFVLFdBQXdCLEVBQVMsUUFBa0I7UUFBekYsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7UUFwQnBHLHFCQUFnQixHQUFXLFdBQVcsQ0FBQztRQUtoRCxzQkFBaUIsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUMzRCxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsb0JBQWUsR0FBWSxLQUFLLENB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S0FBSyxFQUFFO3NDQUFTLE1BQU07K0NBQUM7QUFDbUI7SUFBMUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FBWSxVQUFVO2tEQUFDO0FBQ2hCO0lBQWhELFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FBa0IsVUFBVTt3REFBQztBQTBFN0U7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzsrQ0FLMUM7QUFuRlEsZUFBZTtJQUwzQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0Qixta0pBQXNDOztLQUV6QyxDQUFDOzZDQXVCcUMsYUFBYSxFQUF1QixXQUFXLEVBQW1CLFFBQVE7R0F0QnBHLGVBQWUsQ0EyRjNCO1NBM0ZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBhbGdvbGlhU2VhcmNoSW1wb3J0ZWQgZnJvbSBcImFsZ29saWFzZWFyY2hcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3RpbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi90cy1oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IGFsZ29saWFzZWFyY2ggPSBhbGdvbGlhU2VhcmNoSW1wb3J0ZWQ7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXNlYXJjaCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGFsZ29saWFJbmRleE5hbWU6IHN0cmluZyA9IFwidHNUZXN0aW5nXCI7XG4gICAgQElucHV0KCkgcm91dGVyOiBSb3V0ZXI7XG4gICAgQFZpZXdDaGlsZCgnY2l0eUlucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGNpdHlJbnB1dDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdjaXR5U3VnZ2VzdGlvbnMnLCB7IHN0YXRpYzogZmFsc2UgfSkgY2l0eVN1Z2dlc3Rpb25zOiBFbGVtZW50UmVmO1xuICAgIHNlYXJjaFRleHQ6IHN0cmluZztcbiAgICBzZWFyY2hUZXh0Q2hhbmdlZDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIHNlYXJjaEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNpdHlTZWFyY2hBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjaXR5UG9wdXBBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwbGFjZVNlYXJjaFJlc3VsdHM6IGFueTtcbiAgICBzZWFyY2hSZXN1bHRzOiBhbnk7XG4gICAgYWN0aXZlQ2l0eTogc3RyaW5nID0gXCJQdW5lXCI7XG4gICAgY2l0eVF1ZXJ5OiBzdHJpbmc7XG4gICAgY2l0eVF1ZXJ5Q2hhbmdlZDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIGFjdGl2ZUNpdHlCYWNrdXA6IHN0cmluZztcbiAgICBjbGllbnQ6IGFueTtcbiAgICBpbmRleDogYW55O1xuXG4gICAgcG9wdWxhclBsYWNlcyA9IFsnUHVuZScsICdNdW1iYWknLCAnQmFuZ2Fsb3JlJywgJ05ldyBEZWxoaScsICdMdWNrbm93JywgJ0thbnB1ciddO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlLCBwcml2YXRlIHRpbWVTZXJ2aWNlOiBUaW1lU2VydmljZSwgcHVibGljIGRhdGVwaXBlOiBEYXRlUGlwZSkge1xuICAgICAgICB0aGlzLnNlYXJjaFRleHRDaGFuZ2VkLnBpcGUoXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKHRleHQgPT4gdGhpcy5jYWxsQWxnb2xpYSh0ZXh0KSk7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gYWxnb2xpYXNlYXJjaChcIkFUNVVCOEZNU1JcIiwgXCJjN2U5NDZmNWI3NDBlZjAzNWJkODI0ZjY5ZGNjMTYxMlwiKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuY2xpZW50LmluaXRJbmRleCh0aGlzLmFsZ29saWFJbmRleE5hbWUpO1xuICAgIH1cbiAgICBjYWxsQWxnb2xpYSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIHRoaXMuaW5kZXguc2VhcmNoKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0ZXh0LFxuICAgICAgICAgICAgaGl0c1BlclBhZ2U6IDZcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlckRhdGFGb3JTZWFyY2hSZXN1bHQoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZpbHRlckRhdGFGb3JTZWFyY2hSZXN1bHQgPSAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IGRhdGEuaGl0cztcbiAgICAgICAgbGV0IGludGVyZXN0cyA9IHJlc3VsdHMuZmlsdGVyKGVsZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWxlLm9ialR5cGUgPT0gXCJrZXl3b3JkXCIgfHxcbiAgICAgICAgICAgICAgICBlbGUub2JqVHlwZSA9PSBcImV2ZW50dHlwZVwiIHx8XG4gICAgICAgICAgICAgICAgZWxlLm9ialR5cGUgPT0gXCJjYXRlZ29yeVwiXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgb3JnYW5pemVycyA9IHJlc3VsdHMuZmlsdGVyKGVsZSA9PiBlbGUub2JqVHlwZSA9PSBcIm9yZ2FuaXplclwiKTtcbiAgICAgICAgbGV0IGV2ZW50cyA9IHJlc3VsdHMuZmlsdGVyKGVsZSA9PiBlbGUub2JqVHlwZSA9PSBcImV2ZW50XCIpO1xuXG4gICAgICAgIGludGVyZXN0cy5tYXAoaW50ZXJlc3QgPT4ge1xuICAgICAgICAgICAgaW50ZXJlc3QubmFtZSA9IGludGVyZXN0Lm5hbWUgKyAnIEV2ZW50cyc7XG4gICAgICAgICAgICBpbnRlcmVzdC5sb2NhdGlvbiA9IFwiUFVORVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBvcmdhbml6ZXJzLm1hcChvcmdhbml6ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcmdhbml6ZXIuaW1hZ2VVcmwpIHtcbiAgICAgICAgICAgICAgICBvcmdhbml6ZXIuaW1hZ2VVcmwgPSBcImh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3Rvd25zY3JpcHQtY29tbW9uLXJlc291cmNlcy9zZWFyY2gtZW1wdHktb3JnYW5pemVyLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9yZ2FuaXplci5zZWNvbmRhcnlUZXh0UHJvcGVydGllcyAmJiBvcmdhbml6ZXIuc2Vjb25kYXJ5VGV4dFByb3BlcnRpZXMuY291bnRyeSkge1xuICAgICAgICAgICAgICAgIG9yZ2FuaXplci5sb2NhdGlvbiA9IG9yZ2FuaXplci5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5jb3VudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghZXZlbnQuaW1hZ2VVcmwpIHtcbiAgICAgICAgICAgICAgICBldmVudC5pbWFnZVVybCA9IFwiaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vdG93bnNjcmlwdC1jb21tb24tcmVzb3VyY2VzL3NlYXJjaC1lbXB0eS1ldmVudC5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcyAmJiBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5jaXR5KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQubG9jYXRpb24gPSBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5jaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LnNlY29uZGFyeVRleHRQcm9wZXJ0aWVzICYmIGV2ZW50LnNlY29uZGFyeVRleHRQcm9wZXJ0aWVzLnN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFydERhdGVUaW1lID0gZXZlbnQuc2Vjb25kYXJ5VGV4dFByb3BlcnRpZXMuc3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZVRpbWUgPSB0aGlzLnRpbWVTZXJ2aWNlLmNvbnZlcnREYXRlVG9UaW1lem9uZShzdGFydERhdGVUaW1lLCBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5ldmVudFRpbWVab25lKTtcbiAgICAgICAgICAgICAgICBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5zdGFydFRpbWUgPSB0aGlzLmRhdGVwaXBlLnRyYW5zZm9ybShzdGFydERhdGVUaW1lLCBcImQgTU1NIHl5eXksICcgJ2g6bW1hXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB7IFwiaW50ZXJlc3RzXCI6IGludGVyZXN0cywgXCJvcmdhbml6ZXJzXCI6IG9yZ2FuaXplcnMsIFwiZXZlbnRzXCI6IGV2ZW50cyB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICAgIGNsaWNrb3V0KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5jaXR5U3VnZ2VzdGlvbnMubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmNpdHlQb3B1cEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlYXJjaCA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGlmICh0ZXh0ICE9IHVuZGVmaW5lZCAmJiB0ZXh0Lmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFRleHRDaGFuZ2VkLm5leHQodGV4dCk7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxufVxuIl19