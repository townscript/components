import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
import { HeaderService } from '../ts-header.service';
import { config } from '../../../../../core';
let CitySearchPopupComponent = class CitySearchPopupComponent {
    constructor(headerService, timeService, datepipe) {
        this.headerService = headerService;
        this.timeService = timeService;
        this.datepipe = datepipe;
        this.showArrow = true;
        this.citySearchActive = false;
        this.cityPopupActive = false;
        this.activeCity = "Pune";
        this.router = config.router;
        this.cityQueryChanged = new Subject();
        this.popularPlaces = ['Pune', 'Mumbai', 'Bangalore', 'New Delhi', 'Lucknow', 'Kanpur'];
        this.callSearchCity = (query) => {
            this.headerService.getplaceSearchResults(query).subscribe(res => {
                this.placeSearchResults = res['data'];
            });
        };
        this.placeChanged = (place) => {
            if (place.type == "country") {
                this.router.navigate(["/" + place.twoDigitCode]);
            }
            if (place.type == "city") {
                this.router.navigate(["/" + place.countryCode + "/" + place.cityCode]);
            }
            if (place.type == "locality") {
                this.router.navigate(["/" + place.countryCode + "/" + place.cityCode + "/" + place.localityCode]);
            }
        };
        this.openCityPopup = () => {
            this.cityPopupActive = true;
            this.cityInput.nativeElement.focus();
        };
        this.searchCity = (text) => {
            if (!text || text.length == 0) {
                this.placeSearchResults = [];
            }
            if (text != undefined && text.length > 0)
                this.cityQueryChanged.next(text);
        };
        this.cityQueryChanged.pipe(debounceTime(300)).subscribe(text => this.callSearchCity(text));
    }
    ngAfterViewInit() {
        this.cityInput.nativeElement.focus();
    }
    ngOnInit() { }
};
tslib_1.__decorate([
    ViewChild('cityInput', { static: true }),
    tslib_1.__metadata("design:type", ElementRef)
], CitySearchPopupComponent.prototype, "cityInput", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CitySearchPopupComponent.prototype, "showArrow", void 0);
CitySearchPopupComponent = tslib_1.__decorate([
    Component({
        selector: 'app-city-search-popup',
        template: "<div class=\"city-suggestions enter-slide-bottom\" [class.arrow]=\"showArrow\">\n    <div class=\"suggestions-container\">\n        <ul>\n            <li [class.active]=\"citySearchActive\" class=\"p-2 cursor-pointer flex items-center truncate\">\n                <i class=\"mdi mdi-magnify mr-2\"></i>\n                <input #cityInput id=\"cityInput\" type=\"text\" placeholder=\"Type here to search...\"\n                    [(ngModel)]=\"cityQuery\" (ngModelChange)=\"searchCity($event)\" (focus)=\"citySearchActive=true\"\n                    class=\"w-full bg-transparent text-sm\" />\n            </li>\n            <li matRipple (click)=\"placeChanged(place);\" class=\"p-2 cursor-pointer flex items-center truncate\"\n                *ngFor=\"let place of placeSearchResults\">\n                <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                <span class=\"text-sm flex items-end truncate\">\n                    <span class=\"mr-1 whitespace-no-wrap\">{{place.name}} </span>\n                    <small class=\"text-2xs text-gray-600\"\n                        *ngIf=\"place.city && place?.city.length>0 && place?.type!='city'\">\n                        {{place.city}},\n                    </small>\n                    <small class=\"text-2xs text-gray-600\"\n                        *ngIf=\"place.country && place?.country.length>0 && place?.type!='country'\">{{place.country}}\n                    </small>\n                    <small class=\"text-2xs truncate text-gray-600\">{{place.secondaryText}}</small>\n                </span>\n            </li>\n            <ng-container matRipple *ngIf=\"!placeSearchResults || placeSearchResults.length==0\">\n                <li class=\"p-2 cursor-pointer\" *ngFor=\"let city of popularPlaces\">\n                    <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                    <span class=\"text-sm\">{{city}}</span>\n                </li>\n            </ng-container>\n        </ul>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.city-suggestions{width:100%;background:#fafafa;position:absolute;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.city-suggestions li.active,.city-suggestions li:hover{background:#ededed}.city-suggestions.arrow{border-top:3px solid #3782c4}.city-suggestions.arrow:before{content:\" \";width:10px;position:absolute;top:-7px;left:88%;height:10px;-webkit-filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));background:#ededed;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-top:3px solid #3782c4;border-left:3px solid #3782c4}"]
    }),
    tslib_1.__metadata("design:paramtypes", [HeaderService, TimeService, DatePipe])
], CitySearchPopupComponent);
export { CitySearchPopupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcG9uZW50cy90cy1oZWFkZXIvY2l0eS1zZWFyY2gtcG9wdXAvY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRN0MsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFpQmpDLFlBQW9CLGFBQTRCLEVBQVUsV0FBd0IsRUFBUyxRQUFrQjtRQUF6RixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWRwRyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRW5DLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxlQUFVLEdBQVcsTUFBTSxDQUFDO1FBQzVCLFdBQU0sR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRS9CLHFCQUFnQixHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBSTFELGtCQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBTWxGLG1CQUFjLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQTtRQUNELGlCQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNyQixJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTthQUNuRDtZQUNELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO2FBQ3pFO1lBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFVBQVUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7YUFDcEc7UUFDTCxDQUFDLENBQUE7UUFDRCxrQkFBYSxHQUFHLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN4QyxDQUFDLENBQUE7UUFFRCxlQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO2FBQ2hDO1lBQ0QsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUE7UUE5QkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFL0YsQ0FBQztJQTZCRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDeEMsQ0FBQztJQUNELFFBQVEsS0FBSyxDQUFDO0NBQ2pCLENBQUE7QUFuRDZDO0lBQXpDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7c0NBQVksVUFBVTsyREFBQztBQUN2RDtJQUFSLEtBQUssRUFBRTs7MkRBQTJCO0FBSDFCLHdCQUF3QjtJQUxwQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLGcvREFBaUQ7O0tBRXBELENBQUM7NkNBa0JxQyxhQUFhLEVBQXVCLFdBQVcsRUFBbUIsUUFBUTtHQWpCcEcsd0JBQXdCLENBcURwQztTQXJEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaW1lU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy90aW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdHMtaGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWNpdHktc2VhcmNoLXBvcHVwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NpdHktc2VhcmNoLXBvcHVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2l0eVNlYXJjaFBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2NpdHlJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIGNpdHlJbnB1dDogRWxlbWVudFJlZjtcbiAgICBASW5wdXQoKSBzaG93QXJyb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY2l0eVNlYXJjaEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNpdHlQb3B1cEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHBsYWNlU2VhcmNoUmVzdWx0czogYW55O1xuICAgIGFjdGl2ZUNpdHk6IHN0cmluZyA9IFwiUHVuZVwiO1xuICAgIHJvdXRlcjogUm91dGVyID0gY29uZmlnLnJvdXRlcjtcbiAgICBjaXR5UXVlcnk6IHN0cmluZztcbiAgICBjaXR5UXVlcnlDaGFuZ2VkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgY2xpZW50OiBhbnk7XG4gICAgaW5kZXg6IGFueTtcblxuICAgIHBvcHVsYXJQbGFjZXMgPSBbJ1B1bmUnLCAnTXVtYmFpJywgJ0JhbmdhbG9yZScsICdOZXcgRGVsaGknLCAnTHVja25vdycsICdLYW5wdXInXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSwgcHJpdmF0ZSB0aW1lU2VydmljZTogVGltZVNlcnZpY2UsIHB1YmxpYyBkYXRlcGlwZTogRGF0ZVBpcGUpIHtcbiAgICAgICAgdGhpcy5jaXR5UXVlcnlDaGFuZ2VkLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSh0ZXh0ID0+IHRoaXMuY2FsbFNlYXJjaENpdHkodGV4dCkpO1xuXG4gICAgfVxuICAgIGNhbGxTZWFyY2hDaXR5ID0gKHF1ZXJ5KSA9PiB7XG4gICAgICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRwbGFjZVNlYXJjaFJlc3VsdHMocXVlcnkpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNlYXJjaFJlc3VsdHMgPSByZXNbJ2RhdGEnXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBsYWNlQ2hhbmdlZCA9IChwbGFjZSkgPT4ge1xuICAgICAgICBpZiAocGxhY2UudHlwZSA9PSBcImNvdW50cnlcIikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiICsgcGxhY2UudHdvRGlnaXRDb2RlXSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2UudHlwZSA9PSBcImNpdHlcIikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiICsgcGxhY2UuY291bnRyeUNvZGUgKyBcIi9cIiArIHBsYWNlLmNpdHlDb2RlXSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2UudHlwZSA9PSBcImxvY2FsaXR5XCIpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIiArIHBsYWNlLmNvdW50cnlDb2RlICsgXCIvXCIgKyBwbGFjZS5jaXR5Q29kZSArIFwiL1wiICsgcGxhY2UubG9jYWxpdHlDb2RlXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBvcGVuQ2l0eVBvcHVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNpdHlQb3B1cEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2l0eUlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKVxuICAgIH1cblxuICAgIHNlYXJjaENpdHkgPSAodGV4dCkgPT4ge1xuICAgICAgICBpZiAoIXRleHQgfHwgdGV4dC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNlYXJjaFJlc3VsdHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dCAhPSB1bmRlZmluZWQgJiYgdGV4dC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5jaXR5UXVlcnlDaGFuZ2VkLm5leHQodGV4dCk7XG4gICAgfVxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaXR5SW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpXG4gICAgfVxuICAgIG5nT25Jbml0KCkgeyB9XG59XG5cblxuIl19