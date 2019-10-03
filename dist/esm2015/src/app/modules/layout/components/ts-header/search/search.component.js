import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as algoliaSearchImported from 'algoliasearch';
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
        this.algoliaIndexName = 'tsTesting';
        this.searchTextChanged = new Subject();
        this.searchActive = false;
        this.citySearchActive = false;
        this.cityPopupActive = false;
        this.activePlace = 'Pune';
        this.cityQueryChanged = new Subject();
        this.router = config.router;
        this.host = config.baseUrl;
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
            const results = data.hits;
            const interests = results.filter(ele => {
                return ele.objType == 'keyword' ||
                    ele.objType == 'eventtype' ||
                    ele.objType == 'category';
            });
            const organizers = results.filter(ele => ele.objType == 'organizer');
            const events = results.filter(ele => ele.objType == 'event');
            interests.map(interest => {
                interest.name = interest.name + ' Events';
                interest.location = 'PUNE';
            });
            organizers.map(organizer => {
                if (!organizer.imageUrl) {
                    organizer.imageUrl = 'https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-organizer.png';
                }
                if (organizer.secondaryTextProperties && organizer.secondaryTextProperties.country) {
                    organizer.location = organizer.secondaryTextProperties.country;
                }
            });
            events.map(event => {
                if (!event.imageUrl) {
                    event.imageUrl = 'https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-event.png';
                }
                if (event.secondaryTextProperties && event.secondaryTextProperties.city) {
                    event.location = event.secondaryTextProperties.city;
                }
                if (event.secondaryTextProperties && event.secondaryTextProperties.startTime) {
                    let startDateTime = event.secondaryTextProperties.startTime;
                    startDateTime = this.timeService.convertDateToTimezone(startDateTime, event.secondaryTextProperties.eventTimeZone);
                    event.secondaryTextProperties.startTime = this.datepipe.transform(startDateTime, 'd MMM yyyy, \' \'h:mma');
                }
            });
            this.searchResults = { 'interests': interests, 'organizers': organizers, 'events': events };
        };
        this.navigateToListing = (interest) => {
            console.log(this.homeUrl + '/' + interest);
            this.router.navigate([this.homeUrl + '/' + interest]);
            this.searchActive = false;
        };
        this.navigateToEventPage = (eventCode) => {
            this.router.navigate(['/e/' + eventCode]);
            this.searchActive = false;
        };
        this.search = (text) => {
            if (text !== undefined && text.length > 0) {
                this.searchTextChanged.next(text);
            }
        };
        this.searchTextChanged.pipe(debounceTime(300)).subscribe(text => this.callAlgolia(text));
        this.client = algoliasearch('AT5UB8FMSR', 'c7e946f5b740ef035bd824f69dcc1612');
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
                const data = JSON.parse(res);
                this.activePlace = data['currentPlace'];
                this.homeUrl = ('/' + data['country'] + '/' + data['city']).toLowerCase();
            }
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
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
        template: "<div class=\"w-full lg:flex search-container relative\" [class.active]=\"searchActive\">\n    <div #searchResultsEle class=\"w-2/3 p-2 flex items-center relative left-section\">\n        <i class=\"mdi mdi-magnify text-2xl color-blue p-2\"></i>\n        <input [(ngModel)]=\"searchText\" (ngModelChange)=\"search($event)\"\n            (focus)=\"searchActive = true;citySearchActive=false\" class=\"text-sm w-full h-full bg-transparent  p-2\"\n            type=\"text\" placeholder=\"Search for an Event, Interest or Organizer\" />\n        <div class=\"suggestions enter-slide-bottom w-full p-2 absolute\" *ngIf=\"searchResults && searchActive\">\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.interests.length>0\">\n                <li class=\"list-head\">\n                    INTERESTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" (click)=\"navigateToListing(interest.urlCode)\"\n                    *ngFor=\"let interest of searchResults.interests\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ interest.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{interest.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"interest.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{interest.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.events.length>0\">\n                <li class=\"list-head\">\n                    EVENTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let event of searchResults.events\"\n                    (click)=\"navigateToEventPage(event.urlCode)\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ event.imageUrl +')'\"></div>\n                        <div>\n                            <span class=\"mb-1 block\">{{event.name | titlecase}} </span>\n                            <div class=\"flex items-center\">\n                                <div class=\"flex items-center\" *ngIf=\"event.location\">\n                                    <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                    <small>{{event.location}}</small>\n                                </div>\n                                <div class=\"flex items-center ml-2\" *ngIf=\"event?.secondaryTextProperties?.startTime\">\n                                    <i class=\"mdi mdi-calendar-today color-blue mr-1\"></i>\n                                    <small>{{event.secondaryTextProperties.startTime}}</small>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.organizers.length>0\">\n                <li class=\"list-head\">\n                    ORGANIZERS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let organizer of searchResults.organizers\">\n                    <a [href]=\"host+'o/'+organizer.urlCode\">\n                        <div class=\"flex items-center\">\n                            <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ organizer.imageUrl +')'\">\n                            </div>\n                            <div>\n                                <span class=\"mb-1 block\">{{organizer.name | titlecase}} </span>\n                                <div class=\"flex items-center\" *ngIf=\"organizer.location\">\n                                    <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                    <small>{{organizer.location}}</small>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div #citySuggestions class=\"w-auto flex items-center py-2  px-4 cursor-pointer relative city-search-container\"\n        [class.active]=\"cityPopupActive\" (click)=\"cityPopupActive = true\">\n        <div class=\"flex items-center w-10/12 mr-2 \" [title]=\" activePlace\">\n            <i class=\"mdi mdi-map-marker text-2xl color-blue\"></i>\n            <span class=\"truncate\">{{activePlace}}</span>\n        </div>\n        <i class=\"mdi mdi-chevron-down text-2xl\"></i>\n        <app-city-search-popup class=\"popup\" [(cityPopupActive)]=\"cityPopupActive\" [(activePlace)]=\"activePlace\"\n            *ngIf=\"cityPopupActive\">\n        </app-city-search-popup>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}@media (min-width:991px){.search-container{height:42px;border-radius:2px;-webkit-transition:.3s;transition:.3s}.search-container .left-section{background-color:#ededed;border-radius:4px}.search-container .left-section input{-webkit-transition:.3s;transition:.3s}.search-container .left-section input:focus{background:#fafafa}.search-container .left-section .suggestions{top:100%;left:0;background:#fafafa;border-top:1px solid rgba(151,151,151,.4)}.search-container .left-section .suggestions ul{margin:2% 0}.search-container .left-section .suggestions ul li{color:#636363;-webkit-transition:.15s;transition:.15s;border-bottom:1px solid rgba(151,151,151,.25)}.search-container .left-section .suggestions ul li.list-head{font-size:10px;color:#636363;border:none;font-weight:400}.search-container .left-section .suggestions ul li.list-head:hover{background:#fafafa}.search-container .left-section .suggestions ul li .avatar{border-radius:50%;height:41px;width:41px}.search-container .left-section .suggestions ul li:hover{background:#ededed}.search-container .city-search-container{-webkit-transition:.3s;transition:.3s;max-width:33.33%}.search-container .city-search-container.active{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container .city-search-container .popup{position:absolute;top:135%;width:135%;left:-34%}.search-container.active .left-section{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container.active .suggestions{box-shadow:0 11px 15px 0 rgba(0,0,0,.15)}}"]
    }),
    tslib_1.__metadata("design:paramtypes", [PlaceService, TimeService, DatePipe])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEtBQUsscUJBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxNQUFNLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQztBQU81QyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBd0J4QixZQUFvQixZQUEwQixFQUFVLFdBQXdCLEVBQVMsUUFBa0I7UUFBdkYsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7UUF0QmxHLHFCQUFnQixHQUFHLFdBQVcsQ0FBQztRQUt4QyxzQkFBaUIsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUMzRCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsb0JBQWUsR0FBRyxLQUFLLENB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O0lBQVIsS0FBSyxFQUFFOzt5REFBZ0M7QUFDRztJQUExQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUFZLFVBQVU7a0RBQUM7QUFDaEI7SUFBaEQsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUFrQixVQUFVO3dEQUFDO0FBQzNCO0lBQWpELFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FBbUIsVUFBVTt5REFBQztBQTJFL0U7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzsrQ0FRMUM7QUF2RlEsZUFBZTtJQUwzQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QiwwL0pBQXNDOztLQUV6QyxDQUFDOzZDQXlCb0MsWUFBWSxFQUF1QixXQUFXLEVBQW1CLFFBQVE7R0F4QmxHLGVBQWUsQ0FnSDNCO1NBaEhZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBhbGdvbGlhU2VhcmNoSW1wb3J0ZWQgZnJvbSAnYWxnb2xpYXNlYXJjaCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaW1lU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy90aW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAtY29uZmlnJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQbGFjZVNlcnZpY2UgfSBmcm9tICcuLi9wbGFjZS5zZXJ2aWNlJztcblxuY29uc3QgYWxnb2xpYXNlYXJjaCA9IGFsZ29saWFTZWFyY2hJbXBvcnRlZDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgYWxnb2xpYUluZGV4TmFtZSA9ICd0c1Rlc3RpbmcnO1xuICAgIEBWaWV3Q2hpbGQoJ2NpdHlJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBjaXR5SW5wdXQ6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnY2l0eVN1Z2dlc3Rpb25zJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNpdHlTdWdnZXN0aW9uczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdzZWFyY2hSZXN1bHRzRWxlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHNlYXJjaFJlc3VsdHNFbGU6IEVsZW1lbnRSZWY7XG4gICAgc2VhcmNoVGV4dDogc3RyaW5nO1xuICAgIHNlYXJjaFRleHRDaGFuZ2VkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgc2VhcmNoQWN0aXZlID0gZmFsc2U7XG4gICAgY2l0eVNlYXJjaEFjdGl2ZSA9IGZhbHNlO1xuICAgIGNpdHlQb3B1cEFjdGl2ZSA9IGZhbHNlO1xuICAgIHBsYWNlU2VhcmNoUmVzdWx0czogYW55O1xuICAgIHNlYXJjaFJlc3VsdHM6IGFueTtcbiAgICBhY3RpdmVQbGFjZTogYW55ID0gJ1B1bmUnO1xuICAgIGNpdHlRdWVyeTogc3RyaW5nO1xuICAgIGNpdHlRdWVyeUNoYW5nZWQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgICBhY3RpdmVQbGFjZUJhY2t1cDogc3RyaW5nO1xuICAgIGNsaWVudDogYW55O1xuICAgIGluZGV4OiBhbnk7XG4gICAgaG9tZVVybDogYW55O1xuICAgIHJvdXRlcjogUm91dGVyID0gY29uZmlnLnJvdXRlcjtcbiAgICBob3N0ID0gY29uZmlnLmJhc2VVcmw7XG4gICAgcG9wdWxhclBsYWNlcyA9IFsnUHVuZScsICdNdW1iYWknLCAnQmFuZ2Fsb3JlJywgJ05ldyBEZWxoaScsICdMdWNrbm93JywgJ0thbnB1ciddO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGFjZVNlcnZpY2U6IFBsYWNlU2VydmljZSwgcHJpdmF0ZSB0aW1lU2VydmljZTogVGltZVNlcnZpY2UsIHB1YmxpYyBkYXRlcGlwZTogRGF0ZVBpcGUpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0Q2hhbmdlZC5waXBlKFxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSh0ZXh0ID0+IHRoaXMuY2FsbEFsZ29saWEodGV4dCkpO1xuICAgICAgICB0aGlzLmNsaWVudCA9IGFsZ29saWFzZWFyY2goJ0FUNVVCOEZNU1InLCAnYzdlOTQ2ZjViNzQwZWYwMzViZDgyNGY2OWRjYzE2MTInKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuY2xpZW50LmluaXRJbmRleCh0aGlzLmFsZ29saWFJbmRleE5hbWUpO1xuICAgIH1cbiAgICBjYWxsQWxnb2xpYSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIHRoaXMuaW5kZXguc2VhcmNoKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB0ZXh0LFxuICAgICAgICAgICAgaGl0c1BlclBhZ2U6IDZcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJEYXRhRm9yU2VhcmNoUmVzdWx0KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmlsdGVyRGF0YUZvclNlYXJjaFJlc3VsdCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLmhpdHM7XG4gICAgICAgIGNvbnN0IGludGVyZXN0cyA9IHJlc3VsdHMuZmlsdGVyKGVsZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWxlLm9ialR5cGUgPT0gJ2tleXdvcmQnIHx8XG4gICAgICAgICAgICAgICAgZWxlLm9ialR5cGUgPT0gJ2V2ZW50dHlwZScgfHxcbiAgICAgICAgICAgICAgICBlbGUub2JqVHlwZSA9PSAnY2F0ZWdvcnknXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvcmdhbml6ZXJzID0gcmVzdWx0cy5maWx0ZXIoZWxlID0+IGVsZS5vYmpUeXBlID09ICdvcmdhbml6ZXInKTtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gcmVzdWx0cy5maWx0ZXIoZWxlID0+IGVsZS5vYmpUeXBlID09ICdldmVudCcpO1xuXG4gICAgICAgIGludGVyZXN0cy5tYXAoaW50ZXJlc3QgPT4ge1xuICAgICAgICAgICAgaW50ZXJlc3QubmFtZSA9IGludGVyZXN0Lm5hbWUgKyAnIEV2ZW50cyc7XG4gICAgICAgICAgICBpbnRlcmVzdC5sb2NhdGlvbiA9ICdQVU5FJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3JnYW5pemVycy5tYXAob3JnYW5pemVyID0+IHtcbiAgICAgICAgICAgIGlmICghb3JnYW5pemVyLmltYWdlVXJsKSB7XG4gICAgICAgICAgICAgICAgb3JnYW5pemVyLmltYWdlVXJsID0gJ2h0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3Rvd25zY3JpcHQtY29tbW9uLXJlc291cmNlcy9zZWFyY2gtZW1wdHktb3JnYW5pemVyLnBuZyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3JnYW5pemVyLnNlY29uZGFyeVRleHRQcm9wZXJ0aWVzICYmIG9yZ2FuaXplci5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5jb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgb3JnYW5pemVyLmxvY2F0aW9uID0gb3JnYW5pemVyLnNlY29uZGFyeVRleHRQcm9wZXJ0aWVzLmNvdW50cnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCFldmVudC5pbWFnZVVybCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LmltYWdlVXJsID0gJ2h0dHBzOi8vczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL3Rvd25zY3JpcHQtY29tbW9uLXJlc291cmNlcy9zZWFyY2gtZW1wdHktZXZlbnQucG5nJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcyAmJiBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5jaXR5KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQubG9jYXRpb24gPSBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5jaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LnNlY29uZGFyeVRleHRQcm9wZXJ0aWVzICYmIGV2ZW50LnNlY29uZGFyeVRleHRQcm9wZXJ0aWVzLnN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgIGxldCBzdGFydERhdGVUaW1lID0gZXZlbnQuc2Vjb25kYXJ5VGV4dFByb3BlcnRpZXMuc3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZVRpbWUgPSB0aGlzLnRpbWVTZXJ2aWNlLmNvbnZlcnREYXRlVG9UaW1lem9uZShzdGFydERhdGVUaW1lLCBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5ldmVudFRpbWVab25lKTtcbiAgICAgICAgICAgICAgICBldmVudC5zZWNvbmRhcnlUZXh0UHJvcGVydGllcy5zdGFydFRpbWUgPSB0aGlzLmRhdGVwaXBlLnRyYW5zZm9ybShzdGFydERhdGVUaW1lLCAnZCBNTU0geXl5eSwgXFwnIFxcJ2g6bW1hJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHsgJ2ludGVyZXN0cyc6IGludGVyZXN0cywgJ29yZ2FuaXplcnMnOiBvcmdhbml6ZXJzLCAnZXZlbnRzJzogZXZlbnRzIH07XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICAgIGNsaWNrb3V0KGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5jaXR5U3VnZ2VzdGlvbnMubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmNpdHlQb3B1cEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdHNFbGUgJiYgIXRoaXMuc2VhcmNoUmVzdWx0c0VsZS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmF2aWdhdGVUb0xpc3RpbmcgPSAoaW50ZXJlc3QpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ob21lVXJsICsgJy8nICsgaW50ZXJlc3QpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5ob21lVXJsICsgJy8nICsgaW50ZXJlc3RdKTtcbiAgICAgICAgdGhpcy5zZWFyY2hBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgbmF2aWdhdGVUb0V2ZW50UGFnZSA9IChldmVudENvZGUpID0+IHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZS8nICsgZXZlbnRDb2RlXSk7XG4gICAgICAgIHRoaXMuc2VhcmNoQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHNlYXJjaCA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGlmICh0ZXh0ICE9PSB1bmRlZmluZWQgJiYgdGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFRleHRDaGFuZ2VkLm5leHQodGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGxhY2VTZXJ2aWNlLnBsYWNlLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKDxhbnk+cmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYWNlID0gZGF0YVsnY3VycmVudFBsYWNlJ107XG4gICAgICAgICAgICAgICAgdGhpcy5ob21lVXJsID0gKCcvJyArIGRhdGFbJ2NvdW50cnknXSArICcvJyArIGRhdGFbJ2NpdHknXSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=