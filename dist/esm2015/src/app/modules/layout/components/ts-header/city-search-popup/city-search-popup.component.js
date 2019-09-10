import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
import { HeaderService } from '../ts-header.service';
import { config } from '../../../../../core/app-config';
import { PlaceService } from '../place.service';
let CitySearchPopupComponent = class CitySearchPopupComponent {
    constructor(placeService, headerService, timeService, datepipe) {
        this.placeService = placeService;
        this.headerService = headerService;
        this.timeService = timeService;
        this.datepipe = datepipe;
        this.showArrow = true;
        this.activeCityChange = new EventEmitter();
        this.cityPopupActiveChange = new EventEmitter();
        this.citySearchActive = true;
        this.router = config.router;
        this.cityQueryChanged = new Subject();
        this.cityLoading = false;
        this.callSearchCity = (query) => {
            this.cityLoading = true;
            this.headerService.getplaceSearchResults(query).subscribe(res => {
                this.placeSearchResults = res['data'];
                this.cityLoading = false;
            });
        };
        this.placeChanged = (place) => {
            if (place.type === 'country') {
                this.router.navigate(['/' + place.twoDigitCode.toLowerCase()], { state: { place: place } });
            }
            if (place.type === 'city') {
                this.router.navigate(['/' + place.countryCode.toLowerCase() + '/' + place.cityCode], { state: { place: place } });
            }
            if (place.type === 'locality') {
                this.router.navigate(['/' + place.countryCode.toLowerCase() + '/' + place.cityCode + '/' + place.localityCode], { state: { place: place } });
            }
            if (place.type === 'unstructured') {
                const name = place.name.replace(/,/g, '').replace(/ /g, '-');
                const secondaryText = place.secondaryText.replace(/,/g, '').replace(/ /g, '-');
                this.router.navigate(['/s/' + name + '--' + secondaryText], { state: { place: place } });
            }
            this.placeService.updatePlace(place.name);
            this.activeCity = place.name;
            this.activeCityChange.emit(place.name);
            this.cityPopupActive = false;
            this.cityPopupActiveChange.emit(false);
        };
        this.openCityPopup = () => {
            this.cityPopupActive = true;
            this.cityInput.nativeElement.focus();
        };
        this.searchCity = (text) => {
            if (!text || text.length == 0) {
                this.placeSearchResults = [];
            }
            if (text != undefined && text.length > 0) {
                this.cityQueryChanged.next(text);
            }
        };
        this.getPopularPlaces = () => {
            this.headerService.getPopularCities(this.urlArray[0]).subscribe(res => {
                this.popularPlaces = res['data'].slice(0, 6).map(ele => {
                    ele.type = 'city';
                    ele.cityCode = ele.code;
                    return ele;
                });
            });
        };
        this.cityQueryChanged.pipe(debounceTime(300)).subscribe(text => this.callSearchCity(text));
        if (this.router.url) {
            this.urlArray = this.router.url.replace('/', '').split('/');
        }
        else {
            this.urlArray = ['in'];
        }
    }
    ngAfterViewInit() {
        this.citySearchActive = true;
        this.cityInput.nativeElement.focus();
        this.getPopularPlaces();
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChild('cityInput', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], CitySearchPopupComponent.prototype, "cityInput", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CitySearchPopupComponent.prototype, "showArrow", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CitySearchPopupComponent.prototype, "activeCity", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], CitySearchPopupComponent.prototype, "activeCityChange", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CitySearchPopupComponent.prototype, "cityPopupActive", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], CitySearchPopupComponent.prototype, "cityPopupActiveChange", void 0);
CitySearchPopupComponent = tslib_1.__decorate([
    Component({
        selector: 'app-city-search-popup',
        template: "<div class=\"city-suggestions enter-slide-bottom\" [class.arrow]=\"showArrow\">\n    <div class=\"suggestions-container\">\n        <ul>\n            <li [class.active]=\"citySearchActive\" class=\"p-2 capitalize cursor-pointer flex items-center truncate\">\n                <i class=\"mdi mdi-magnify mr-2\"></i>\n                <input #cityInput autocomplete=\"off\" id=\"cityInput\" type=\"text\" placeholder=\"Type here to search...\"\n                    [(ngModel)]=\"cityQuery\" (ngModelChange)=\"searchCity($event)\" (focus)=\"citySearchActive=true\"\n                    class=\"w-full bg-transparent text-sm\" />\n                <i *ngIf=\"cityLoading\" class=\"mdi mdi-loading mdi-spin\"></i>\n            </li>\n            <li matRipple (click)=\"placeChanged(place);\"\n                class=\"p-2 capitalize cursor-pointer flex items-center truncate\"\n                *ngFor=\"let place of placeSearchResults\">\n                <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                <span class=\"text-sm flex items-end truncate\">\n                    <span class=\"mr-1 whitespace-no-wrap\">{{place.name}} </span>\n                    <small class=\"text-2xs text-gray-600\"\n                        *ngIf=\"place.city && place?.city.length>0 && place?.type!='city'\">\n                        {{place.city}},\n                    </small>\n                    <small class=\"text-2xs text-gray-600\"\n                        *ngIf=\"place.country && place?.country.length>0 && place?.type!='country'\">{{place.country}}\n                    </small>\n                    <small class=\"text-2xs truncate text-gray-600\">{{place.secondaryText}}</small>\n                </span>\n            </li>\n            <ng-container matRipple *ngIf=\"!placeSearchResults || placeSearchResults.length==0\">\n                <li (click)=\"placeChanged(city);\" class=\"p-2 px-4 cursor-pointer capitalize\"\n                    *ngFor=\"let city of popularPlaces\">\n                    <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                    <span class=\"text-base\">{{city.name}}</span>\n                </li>\n            </ng-container>\n        </ul>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.city-suggestions{width:100%;background:#fafafa;position:absolute;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.city-suggestions .mdi-spin::before{-webkit-animation-duration:.5s;animation-duration:.5s}.city-suggestions li.active,.city-suggestions li:hover{background:#ededed}.city-suggestions.arrow{border-top:3px solid #3782c4}.city-suggestions.arrow:before{content:\" \";width:10px;position:absolute;top:-7px;left:88%;height:10px;-webkit-filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));background:#ededed;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-top:3px solid #3782c4;border-left:3px solid #3782c4}@media (min-width:991px){.city-suggestions{width:140%;left:-40%}}"]
    }),
    tslib_1.__metadata("design:paramtypes", [PlaceService, HeaderService, TimeService, DatePipe])
], CitySearchPopupComponent);
export { CitySearchPopupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcG9uZW50cy90cy1oZWFkZXIvY2l0eS1zZWFyY2gtcG9wdXAvY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFnQixZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFRaEQsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUF1QmpDLFlBQW9CLFlBQTBCLEVBQVUsYUFBNEIsRUFBVSxXQUF3QixFQUFTLFFBQWtCO1FBQTdILGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7UUFwQnhJLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFaEIscUJBQWdCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUQsMEJBQXFCLEdBQTBCLElBQUks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bnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGltZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdGltZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi90cy1oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAtY29uZmlnJztcbmltcG9ydCB7IFBsYWNlU2VydmljZSB9IGZyb20gJy4uL3BsYWNlLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWNpdHktc2VhcmNoLXBvcHVwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NpdHktc2VhcmNoLXBvcHVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2l0eVNlYXJjaFBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2NpdHlJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIGNpdHlJbnB1dDogRWxlbWVudFJlZjtcbiAgICBASW5wdXQoKSBzaG93QXJyb3cgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGFjdGl2ZUNpdHk6IHN0cmluZztcbiAgICBAT3V0cHV0KCkgYWN0aXZlQ2l0eUNoYW5nZTogRXZlbnRFbWl0dGVyPFN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQElucHV0KCkgY2l0eVBvcHVwQWN0aXZlOiBib29sZWFuO1xuICAgIEBPdXRwdXQoKSBjaXR5UG9wdXBBY3RpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gICAgY2l0eVNlYXJjaEFjdGl2ZSA9IHRydWU7XG4gICAgcGxhY2VTZWFyY2hSZXN1bHRzOiBhbnk7XG5cbiAgICByb3V0ZXI6IFJvdXRlciA9IGNvbmZpZy5yb3V0ZXI7XG4gICAgdXJsQXJyYXk6IGFueTtcbiAgICBjaXR5UXVlcnk6IHN0cmluZztcbiAgICBjaXR5UXVlcnlDaGFuZ2VkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgY2xpZW50OiBhbnk7XG4gICAgY2l0eUxvYWRpbmcgPSBmYWxzZTtcbiAgICBpbmRleDogYW55O1xuXG4gICAgcG9wdWxhclBsYWNlczogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGFjZVNlcnZpY2U6IFBsYWNlU2VydmljZSwgcHJpdmF0ZSBoZWFkZXJTZXJ2aWNlOiBIZWFkZXJTZXJ2aWNlLCBwcml2YXRlIHRpbWVTZXJ2aWNlOiBUaW1lU2VydmljZSwgcHVibGljIGRhdGVwaXBlOiBEYXRlUGlwZSkge1xuICAgICAgICB0aGlzLmNpdHlRdWVyeUNoYW5nZWQucGlwZShkZWJvdW5jZVRpbWUoMzAwKSkuc3Vic2NyaWJlKHRleHQgPT4gdGhpcy5jYWxsU2VhcmNoQ2l0eSh0ZXh0KSk7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlci51cmwpIHtcbiAgICAgICAgICAgIHRoaXMudXJsQXJyYXkgPSB0aGlzLnJvdXRlci51cmwucmVwbGFjZSgnLycsICcnKS5zcGxpdCgnLycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVybEFycmF5ID0gWydpbiddXG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FsbFNlYXJjaENpdHkgPSAocXVlcnkpID0+IHtcbiAgICAgICAgdGhpcy5jaXR5TG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRwbGFjZVNlYXJjaFJlc3VsdHMocXVlcnkpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNlYXJjaFJlc3VsdHMgPSByZXNbJ2RhdGEnXTtcbiAgICAgICAgICAgIHRoaXMuY2l0eUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBsYWNlQ2hhbmdlZCA9IChwbGFjZSkgPT4ge1xuICAgICAgICBpZiAocGxhY2UudHlwZSA9PT0gJ2NvdW50cnknKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgcGxhY2UudHdvRGlnaXRDb2RlLnRvTG93ZXJDYXNlKCldLCB7IHN0YXRlOiB7IHBsYWNlOiBwbGFjZSB9IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZS50eXBlID09PSAnY2l0eScpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLycgKyBwbGFjZS5jb3VudHJ5Q29kZS50b0xvd2VyQ2FzZSgpICsgJy8nICsgcGxhY2UuY2l0eUNvZGVdLCB7IHN0YXRlOiB7IHBsYWNlOiBwbGFjZSB9IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZS50eXBlID09PSAnbG9jYWxpdHknKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgcGxhY2UuY291bnRyeUNvZGUudG9Mb3dlckNhc2UoKSArICcvJyArIHBsYWNlLmNpdHlDb2RlICsgJy8nICsgcGxhY2UubG9jYWxpdHlDb2RlXSxcbiAgICAgICAgICAgICAgICB7IHN0YXRlOiB7IHBsYWNlOiBwbGFjZSB9IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZS50eXBlID09PSAndW5zdHJ1Y3R1cmVkJykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBsYWNlLm5hbWUucmVwbGFjZSgvLC9nLCAnJykucmVwbGFjZSgvIC9nLCAnLScpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kYXJ5VGV4dCA9IHBsYWNlLnNlY29uZGFyeVRleHQucmVwbGFjZSgvLC9nLCAnJykucmVwbGFjZSgvIC9nLCAnLScpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcy8nICsgbmFtZSArICctLScgKyBzZWNvbmRhcnlUZXh0XSwgeyBzdGF0ZTogeyBwbGFjZTogcGxhY2UgfSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYWNlU2VydmljZS51cGRhdGVQbGFjZShwbGFjZS5uYW1lKTtcbiAgICAgICAgdGhpcy5hY3RpdmVDaXR5ID0gcGxhY2UubmFtZTtcbiAgICAgICAgdGhpcy5hY3RpdmVDaXR5Q2hhbmdlLmVtaXQocGxhY2UubmFtZSk7XG4gICAgICAgIHRoaXMuY2l0eVBvcHVwQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2l0eVBvcHVwQWN0aXZlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgICBvcGVuQ2l0eVBvcHVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNpdHlQb3B1cEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2l0eUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBzZWFyY2hDaXR5ID0gKHRleHQpID0+IHtcbiAgICAgICAgaWYgKCF0ZXh0IHx8IHRleHQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTZWFyY2hSZXN1bHRzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHQgIT0gdW5kZWZpbmVkICYmIHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jaXR5UXVlcnlDaGFuZ2VkLm5leHQodGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UG9wdWxhclBsYWNlcyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5oZWFkZXJTZXJ2aWNlLmdldFBvcHVsYXJDaXRpZXModGhpcy51cmxBcnJheVswXSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXJQbGFjZXMgPSByZXNbJ2RhdGEnXS5zbGljZSgwLCA2KS5tYXAoZWxlID0+IHtcbiAgICAgICAgICAgICAgICBlbGUudHlwZSA9ICdjaXR5JztcbiAgICAgICAgICAgICAgICBlbGUuY2l0eUNvZGUgPSBlbGUuY29kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuY2l0eVNlYXJjaEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2l0eUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5nZXRQb3B1bGFyUGxhY2VzKCk7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxufVxuXG5cbiJdfQ==