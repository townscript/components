import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as algoliaSearchImported from "algoliasearch";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
import { config } from '../../../../../core/app-config';
import { PlaceService } from '../place.service';
const algoliasearch = algoliaSearchImported;
let SearchComponent = class SearchComponent {
    constructor(placeService, timeService, datepipe) {
        this.placeService = placeService;
        this.timeService = timeService;
        this.datepipe = datepipe;
        this.algoliaIndexName = "tsTesting";
        this.searchTextChanged = new Subject();
        this.searchActive = false;
        this.citySearchActive = false;
        this.cityPopupActive = false;
        this.activeCity = "Pune";
        this.cityQueryChanged = new Subject();
        this.router = config.router;
        this.popularPlaces = ['Pune', 'Mumbai', 'Bangalore', 'New Delhi', 'Lucknow', 'Kanpur'];
        this.callAlgolia = (text) => {
            this.index.search({
                query: text,
                hitsPerPage: 6
            }).then((data) => {
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
        this.navigateToListing = (interest) => {
            this.router.navigate(["../" + interest], { relativeTo: config.activatedRoute.parent });
            this.searchActive = false;
        };
        this.navigateToEventPage = (eventCode) => {
            this.router.navigate(["/e/" + eventCode]);
            this.searchActive = false;
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
        if (this.searchResultsEle && !this.searchResultsEle.nativeElement.contains(event.target)) {
            this.searchActive = false;
        }
    }
    ngOnInit() {
        this.placeService.place.subscribe(res => {
            if (res) {
                this.activeCity = res;
            }
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SearchComponent.prototype, "algoliaIndexName", void 0);
tslib_1.__decorate([
    ViewChild('cityInput', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], SearchComponent.prototype, "cityInput", void 0);
tslib_1.__decorate([
    ViewChild('citySuggestions', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], SearchComponent.prototype, "citySuggestions", void 0);
tslib_1.__decorate([
    ViewChild('searchResultsEle', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], SearchComponent.prototype, "searchResultsEle", void 0);
tslib_1.__decorate([
    HostListener('document:click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SearchComponent.prototype, "clickout", null);
SearchComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search',
        template: "<div class=\"w-full lg:flex search-container relative\" [class.active]=\"searchActive\">\n    <div #searchResultsEle class=\"w-2/3 p-2 flex items-center relative left-section\">\n        <i class=\"mdi mdi-magnify text-2xl color-blue p-2\"></i>\n        <input [(ngModel)]=\"searchText\" (ngModelChange)=\"search($event)\"\n            (focus)=\"searchActive = true;citySearchActive=false\" class=\"text-sm w-full h-full bg-transparent  p-2\"\n            type=\"text\" placeholder=\"Search for an Event, Interest or Organizer\" />\n        <div class=\"suggestions enter-slide-bottom w-full p-2 absolute\" *ngIf=\"searchResults && searchActive\">\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.interests.length>0\">\n                <li class=\"list-head\">\n                    INTERESTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" (click)=\"navigateToListing(interest.name)\"\n                    *ngFor=\"let interest of searchResults.interests\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ interest.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{interest.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"interest.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{interest.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.events.length>0\">\n                <li class=\"list-head\">\n                    EVENTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let event of searchResults.events\"\n                    (click)=\"navigateToEventPage(event.urlCode)\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ event.imageUrl +')'\"></div>\n                        <div>\n                            <span class=\"mb-1 block\">{{event.name | titlecase}} </span>\n                            <div class=\"flex items-center\">\n                                <div class=\"flex items-center\" *ngIf=\"event.location\">\n                                    <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                    <small>{{event.location}}</small>\n                                </div>\n                                <div class=\"flex items-center ml-2\" *ngIf=\"event?.secondaryTextProperties?.startTime\">\n                                    <i class=\"mdi mdi-calendar-today color-blue mr-1\"></i>\n                                    <small>{{event.secondaryTextProperties.startTime}}</small>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.organizers.length>0\">\n                <li class=\"list-head\">\n                    ORGANIZERS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let organizer of searchResults.organizers\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ organizer.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{organizer.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"organizer.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{organizer.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div #citySuggestions class=\"w-auto flex items-center py-2  px-4 cursor-pointer relative city-search-container\"\n        [class.active]=\"cityPopupActive\" (click)=\"cityPopupActive = true\">\n        <div class=\"flex items-center w-10/12 mr-2 \" [title]=\" activeCity\">\n            <i class=\"mdi mdi-map-marker text-2xl color-blue\"></i>\n            <span class=\"truncate\">{{activeCity}}</span>\n        </div>\n        <i class=\"mdi mdi-chevron-down text-2xl\"></i>\n        <app-city-search-popup class=\"popup\" [(cityPopupActive)]=\"cityPopupActive\" [(activeCity)]=\"activeCity\"\n            *ngIf=\"cityPopupActive\">\n        </app-city-search-popup>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}@media (min-width:991px){.search-container{height:42px;border-radius:2px;-webkit-transition:.3s;transition:.3s}.search-container .left-section{background-color:#ededed;border-radius:4px}.search-container .left-section input{-webkit-transition:.3s;transition:.3s}.search-container .left-section input:focus{background:#fafafa}.search-container .left-section .suggestions{top:100%;left:0;background:#fafafa;border-top:1px solid rgba(151,151,151,.4)}.search-container .left-section .suggestions ul{margin:2% 0}.search-container .left-section .suggestions ul li{color:#636363;-webkit-transition:.15s;transition:.15s;border-bottom:1px solid rgba(151,151,151,.25)}.search-container .left-section .suggestions ul li.list-head{font-size:10px;color:#636363;border:none;font-weight:400}.search-container .left-section .suggestions ul li.list-head:hover{background:#fafafa}.search-container .left-section .suggestions ul li .avatar{border-radius:50%;height:41px;width:41px}.search-container .left-section .suggestions ul li:hover{background:#ededed}.search-container .city-search-container{-webkit-transition:.3s;transition:.3s;max-width:33.33%}.search-container .city-search-container.active{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container .city-search-container .popup{position:absolute;top:135%;width:135%;left:-34%}.search-container.active .left-section{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container.active .suggestions{box-shadow:0 11px 15px 0 rgba(0,0,0,.15)}}"]
    }),
    tslib_1.__metadata("design:paramtypes", [PlaceService, TimeService, DatePipe])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEtBQUsscUJBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFFMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxNQUFNLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztBQU81QyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBdUJ4QixZQUFvQixZQUEwQixFQUFVLFdBQXdCLEVBQVMsUUFBa0I7UUFBdkYsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7UUFyQmxHLHFCQUFnQixHQUFXLFdBQVcsQ0FBQztRQUtoRCxzQkFBaUIsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUMzRCxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFHakMsZUFBVSxHQUFRLE1BQU0sQ0FBQztRQUV6QixxQkFBZ0IsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUkxRCxXQUFNLEdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUUvQixrQkFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQVFsRixnQkFBVyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2QsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsV0FBVyxFQUFFLENBQUM7YUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNiLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQTtRQUNELDhCQUF5QixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLElBQUksU0FBUztvQkFDM0IsR0FBRyxDQUFDLE9BQU8sSUFBSSxXQUFXO29CQUMxQixHQUFHLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQTtZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDO1lBQ25FLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1lBRTNELFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7Z0JBQzFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1lBRUgsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7b0JBQ3JCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsNEZBQTRGLENBQUM7aUJBQ3JIO2dCQUNELElBQUksU0FBUyxDQUFDLHVCQUF1QixJQUFJLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUU7b0JBQ2hGLFNBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztpQkFDbEU7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEtBQUssQ0FBQyxRQUFRLEdBQUcsd0ZBQXdGLENBQUM7aUJBQzdHO2dCQUNELElBQUksS0FBSyxDQUFDLHVCQUF1QixJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUU7b0JBQ3JFLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQztpQkFDdkQ7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsdUJBQXVCLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsRUFBRTtvQkFDMUUsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztvQkFDNUQsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDbkgsS0FBSyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztpQkFDNUc7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFBO1FBQy9GLENBQUMsQ0FBQTtRQVdELHNCQUFpQixHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUMsQ0FBQTtRQUNELHdCQUFtQixHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUE7UUFDRCxXQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNkLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFBO1FBMUVHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQ3ZCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFtREQsUUFBUSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RGLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQWFELFFBQVE7UUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7YUFDekI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FFSixDQUFBO0FBekdZO0lBQVIsS0FBSyxFQUFFOzt5REFBd0M7QUFDTDtJQUExQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUFZLFVBQVU7a0RBQUM7QUFDaEI7SUFBaEQsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUFrQixVQUFVO3dEQUFDO0FBQzNCO0lBQWpELFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FBbUIsVUFBVTt5REFBQztBQTBFL0U7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzsrQ0FRMUM7QUF0RlEsZUFBZTtJQUwzQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0Qiw2MkpBQXNDOztLQUV6QyxDQUFDOzZDQXdCb0MsWUFBWSxFQUF1QixXQUFXLEVBQW1CLFFBQVE7R0F2QmxHLGVBQWUsQ0EyRzNCO1NBM0dZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBhbGdvbGlhU2VhcmNoSW1wb3J0ZWQgZnJvbSBcImFsZ29saWFzZWFyY2hcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3RpbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi90cy1oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC1jb25maWcnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQbGFjZVNlcnZpY2UgfSBmcm9tICcuLi9wbGFjZS5zZXJ2aWNlJztcblxuY29uc3QgYWxnb2xpYXNlYXJjaCA9IGFsZ29saWFTZWFyY2hJbXBvcnRlZDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgYWxnb2xpYUluZGV4TmFtZTogc3RyaW5nID0gXCJ0c1Rlc3RpbmdcIjtcbiAgICBAVmlld0NoaWxkKCdjaXR5SW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgY2l0eUlucHV0OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2NpdHlTdWdnZXN0aW9ucycsIHsgc3RhdGljOiBmYWxzZSB9KSBjaXR5U3VnZ2VzdGlvbnM6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnc2VhcmNoUmVzdWx0c0VsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBzZWFyY2hSZXN1bHRzRWxlOiBFbGVtZW50UmVmO1xuICAgIHNlYXJjaFRleHQ6IHN0cmluZztcbiAgICBzZWFyY2hUZXh0Q2hhbmdlZDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIHNlYXJjaEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNpdHlTZWFyY2hBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjaXR5UG9wdXBBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwbGFjZVNlYXJjaFJlc3VsdHM6IGFueTtcbiAgICBzZWFyY2hSZXN1bHRzOiBhbnk7XG4gICAgYWN0aXZlQ2l0eTogYW55ID0gXCJQdW5lXCI7XG4gICAgY2l0eVF1ZXJ5OiBzdHJpbmc7XG4gICAgY2l0eVF1ZXJ5Q2hhbmdlZDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIGFjdGl2ZUNpdHlCYWNrdXA6IHN0cmluZztcbiAgICBjbGllbnQ6IGFueTtcbiAgICBpbmRleDogYW55O1xuICAgIHJvdXRlcjogUm91dGVyID0gY29uZmlnLnJvdXRlcjtcblxuICAgIHBvcHVsYXJQbGFjZXMgPSBbJ1B1bmUnLCAnTXVtYmFpJywgJ0JhbmdhbG9yZScsICdOZXcgRGVsaGknLCAnTHVja25vdycsICdLYW5wdXInXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhY2VTZXJ2aWNlOiBQbGFjZVNlcnZpY2UsIHByaXZhdGUgdGltZVNlcnZpY2U6IFRpbWVTZXJ2aWNlLCBwdWJsaWMgZGF0ZXBpcGU6IERhdGVQaXBlKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoVGV4dENoYW5nZWQucGlwZShcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUodGV4dCA9PiB0aGlzLmNhbGxBbGdvbGlhKHRleHQpKTtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBhbGdvbGlhc2VhcmNoKFwiQVQ1VUI4Rk1TUlwiLCBcImM3ZTk0NmY1Yjc0MGVmMDM1YmQ4MjRmNjlkY2MxNjEyXCIpO1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5jbGllbnQuaW5pdEluZGV4KHRoaXMuYWxnb2xpYUluZGV4TmFtZSk7XG4gICAgfVxuICAgIGNhbGxBbGdvbGlhID0gKHRleHQpID0+IHtcbiAgICAgICAgdGhpcy5pbmRleC5zZWFyY2goe1xuICAgICAgICAgICAgcXVlcnk6IHRleHQsXG4gICAgICAgICAgICBoaXRzUGVyUGFnZTogNlxuICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlckRhdGFGb3JTZWFyY2hSZXN1bHQoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZpbHRlckRhdGFGb3JTZWFyY2hSZXN1bHQgPSAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0cyA9IGRhdGEuaGl0cztcbiAgICAgICAgbGV0IGludGVyZXN0cyA9IHJlc3VsdHMuZmlsdGVyKGVsZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWxlLm9ialR5cGUgPT0gXCJrZXl3b3JkXCIgfHxcbiAgICAgICAgICAgICAgICBlbGUub2JqVHlwZSA9PSBcImV2ZW50dHlwZVwiIHx8XG4gICAgICAgICAgICAgICAgZWxlLm9ialR5cGUgPT0gXCJjYXRlZ29yeVwiXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgb3JnYW5pemVycyA9IHJlc3VsdHMuZmlsdGVyKGVsZSA9PiBlbGUub2JqVHlwZSA9PSBcIm9yZ2FuaXplclwiKTtcbiAgICAgICAgbGV0IGV2ZW50cyA9IHJlc3VsdHMuZmlsdGVyKGVsZSA9PiBlbGUub2JqVHlwZSA9PSBcImV2ZW50XCIpO1xuXG4gICAgICAgIGludGVyZXN0cy5tYXAoaW50ZXJlc3QgPT4ge1xuICAgICAgICAgICAgaW50ZXJlc3QubmFtZSA9IGludGVyZXN0Lm5hbWUgKyAnIEV2ZW50cyc7XG4gICAgICAgICAgICBpbnRlcmVzdC5sb2NhdGlvbiA9IFwiUFVORVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBvcmdhbml6ZXJzLm1hcChvcmdhbml6ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcmdhbml6ZXIuaW1hZ2VVcmwpIHtcbiAgICAgICAgICAgICAgICBvcmdhbml6ZXIuaW1hZ2VVcmwgPSBcImh0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3Rvd25zY3JpcHQtY29tbW9uLXJlc291cmNlcy9zZWFyY2gtZW1wdHktb3JnYW5pemVyLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9yZ2FuaXplci5zZWNvbmRhcnlUZXh0UHJvcGVydGllcyAmJiBvcmdhbml6ZXIuc2Vjb25kYXJ5VGV4dFByb3BlcnRpZXMuY291bnRyeSkge1xuICAgICAgICAgICAgICAgIG9yZ2FuaXplci5sb2NhdGlvbiA9IG9yZ2FuaXplci5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5jb3VudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICghZXZlbnQuaW1hZ2VVcmwpIHtcbiAgICAgICAgICAgICAgICBldmVudC5pbWFnZVVybCA9IFwiaHR0cHM6Ly9zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vdG93bnNjcmlwdC1jb21tb24tcmVzb3VyY2VzL3NlYXJjaC1lbXB0eS1ldmVudC5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcyAmJiBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5jaXR5KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQubG9jYXRpb24gPSBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5jaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LnNlY29uZGFyeVRleHRQcm9wZXJ0aWVzICYmIGV2ZW50LnNlY29uZGFyeVRleHRQcm9wZXJ0aWVzLnN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFydERhdGVUaW1lID0gZXZlbnQuc2Vjb25kYXJ5VGV4dFByb3BlcnRpZXMuc3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZVRpbWUgPSB0aGlzLnRpbWVTZXJ2aWNlLmNvbnZlcnREYXRlVG9UaW1lem9uZShzdGFydERhdGVUaW1lLCBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5ldmVudFRpbWVab25lKTtcbiAgICAgICAgICAgICAgICBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5zdGFydFRpbWUgPSB0aGlzLmRhdGVwaXBlLnRyYW5zZm9ybShzdGFydERhdGVUaW1lLCBcImQgTU1NIHl5eXksICcgJ2g6bW1hXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB7IFwiaW50ZXJlc3RzXCI6IGludGVyZXN0cywgXCJvcmdhbml6ZXJzXCI6IG9yZ2FuaXplcnMsIFwiZXZlbnRzXCI6IGV2ZW50cyB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICAgIGNsaWNrb3V0KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5jaXR5U3VnZ2VzdGlvbnMubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmNpdHlQb3B1cEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdHNFbGUgJiYgIXRoaXMuc2VhcmNoUmVzdWx0c0VsZS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmF2aWdhdGVUb0xpc3RpbmcgPSAoaW50ZXJlc3QpID0+IHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiLi4vXCIgKyBpbnRlcmVzdF0sIHsgcmVsYXRpdmVUbzogY29uZmlnLmFjdGl2YXRlZFJvdXRlLnBhcmVudCB9KTtcbiAgICAgICAgdGhpcy5zZWFyY2hBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgbmF2aWdhdGVUb0V2ZW50UGFnZSA9IChldmVudENvZGUpID0+IHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2UvXCIgKyBldmVudENvZGVdKTtcbiAgICAgICAgdGhpcy5zZWFyY2hBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgc2VhcmNoID0gKHRleHQpID0+IHtcbiAgICAgICAgaWYgKHRleHQgIT0gdW5kZWZpbmVkICYmIHRleHQubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dENoYW5nZWQubmV4dCh0ZXh0KTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGxhY2VTZXJ2aWNlLnBsYWNlLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2l0eSA9IHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=