import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
import { HeaderService } from '../ts-header.service';
import { Router } from "@angular/router";
let CitySearchPopupComponent = class CitySearchPopupComponent {
    constructor(headerService, timeService, datepipe) {
        this.headerService = headerService;
        this.timeService = timeService;
        this.datepipe = datepipe;
        this.showArrow = true;
        this.citySearchActive = false;
        this.cityPopupActive = false;
        this.activeCity = "Pune";
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
            setTimeout(() => { (this.cityInput.nativeElement).focus(); }, 500);
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
        console.log("init");
        setTimeout(() => { (this.cityInput.nativeElement).focus(); }, 500);
    }
    ngOnInit() {
        console.log("init");
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Router)
], CitySearchPopupComponent.prototype, "router", void 0);
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
        template: "<div class=\"city-suggestions enter-slide-bottom\" [class.arrow]=\"showArrow\">\n    <div class=\"suggestions-container\">\n        <ul>\n            <li [class.active]=\"citySearchActive\" class=\"p-2 cursor-pointer flex items-center truncate\">\n                <i class=\"mdi mdi-magnify mr-2\"></i>\n                <input #cityInput id=\"cityInput\" type=\"text\" placeholder=\"Type here to search...\"\n                    [(ngModel)]=\"cityQuery\" (ngModelChange)=\"searchCity($event)\" (focus)=\"citySearchActive=true\"\n                    class=\"w-full bg-transparent text-sm\" />\n            </li>\n            <li (click)=\"placeChanged(place);\" class=\"p-2 cursor-pointer flex items-center truncate\"\n                *ngFor=\"let place of placeSearchResults\">\n                <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                <span class=\"text-sm flex items-end truncate\">\n                    <span class=\"mr-1 whitespace-no-wrap\">{{place.name}} </span>\n                    <small class=\"text-2xs text-gray-600\"\n                        *ngIf=\"place.city && place?.city.length>0 && place?.type!='city'\">\n                        {{place.city}},\n                    </small>\n                    <small class=\"text-2xs text-gray-600\"\n                        *ngIf=\"place.country && place?.country.length>0 && place?.type!='country'\">{{place.country}}\n                    </small>\n                    <small class=\"text-2xs truncate text-gray-600\">{{place.secondaryText}}</small>\n                </span>\n            </li>\n            <ng-container *ngIf=\"!placeSearchResults || placeSearchResults.length==0\">\n                <li class=\"p-2 cursor-pointer\" *ngFor=\"let city of popularPlaces\">\n                    <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                    <span class=\"text-sm\">{{city}}</span>\n                </li>\n            </ng-container>\n        </ul>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.city-suggestions{width:100%;background:#fafafa;position:absolute;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.city-suggestions li.active,.city-suggestions li:hover{background:#ededed}.city-suggestions.arrow{border-top:3px solid #3782c4}.city-suggestions.arrow:before{content:\" \";width:10px;position:absolute;top:-7px;left:88%;height:10px;-webkit-filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));background:#ededed;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-top:3px solid #3782c4;border-left:3px solid #3782c4}"]
    }),
    tslib_1.__metadata("design:paramtypes", [HeaderService, TimeService, DatePipe])
], CitySearchPopupComponent);
export { CitySearchPopupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcG9uZW50cy90cy1oZWFkZXIvY2l0eS1zZWFyY2gtcG9wdXAvY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRekMsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFpQmpDLFlBQW9CLGFBQTRCLEVBQVUsV0FBd0IsRUFBUyxRQUFrQjtRQUF6RixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWJwRyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRW5DLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxlQUFVLEdBQVcsTUFBTSxDQUFDO1FBRTVCLHFCQUFnQixHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBSTFELGtCQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdB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QztRQUNQLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsNDlEQUFpRDs7S0FFcEQsQ0FBQzs2Q0FrQnFDLGFBQWEsRUFBdUIsV0FBVyxFQUFtQixRQUFRO0dBakJwRyx3QkFBd0IsQ0E2RHBDO1NBN0RZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGFsZ29saWFTZWFyY2hJbXBvcnRlZCBmcm9tIFwiYWxnb2xpYXNlYXJjaFwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGltZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvdGltZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3RzLWhlYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jaXR5LXNlYXJjaC1wb3B1cCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NpdHktc2VhcmNoLXBvcHVwLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jaXR5LXNlYXJjaC1wb3B1cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENpdHlTZWFyY2hQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSByb3V0ZXI6IFJvdXRlcjtcbiAgICBAVmlld0NoaWxkKCdjaXR5SW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjaXR5SW5wdXQ6IEVsZW1lbnRSZWY7XG4gICAgQElucHV0KCkgc2hvd0Fycm93OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNpdHlTZWFyY2hBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjaXR5UG9wdXBBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwbGFjZVNlYXJjaFJlc3VsdHM6IGFueTtcbiAgICBhY3RpdmVDaXR5OiBzdHJpbmcgPSBcIlB1bmVcIjtcbiAgICBjaXR5UXVlcnk6IHN0cmluZztcbiAgICBjaXR5UXVlcnlDaGFuZ2VkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgY2xpZW50OiBhbnk7XG4gICAgaW5kZXg6IGFueTtcblxuICAgIHBvcHVsYXJQbGFjZXMgPSBbJ1B1bmUnLCAnTXVtYmFpJywgJ0JhbmdhbG9yZScsICdOZXcgRGVsaGknLCAnTHVja25vdycsICdLYW5wdXInXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZSwgcHJpdmF0ZSB0aW1lU2VydmljZTogVGltZVNlcnZpY2UsIHB1YmxpYyBkYXRlcGlwZTogRGF0ZVBpcGUpIHtcbiAgICAgICAgdGhpcy5jaXR5UXVlcnlDaGFuZ2VkLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpLnN1YnNjcmliZSh0ZXh0ID0+IHRoaXMuY2FsbFNlYXJjaENpdHkodGV4dCkpO1xuXG4gICAgfVxuICAgIGNhbGxTZWFyY2hDaXR5ID0gKHF1ZXJ5KSA9PiB7XG4gICAgICAgIHRoaXMuaGVhZGVyU2VydmljZS5nZXRwbGFjZVNlYXJjaFJlc3VsdHMocXVlcnkpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNlYXJjaFJlc3VsdHMgPSByZXNbJ2RhdGEnXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGxhY2VDaGFuZ2VkID0gKHBsYWNlKSA9PiB7XG4gICAgICAgIGlmIChwbGFjZS50eXBlID09IFwiY291bnRyeVwiKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCIgKyBwbGFjZS50d29EaWdpdENvZGVdKVxuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZS50eXBlID09IFwiY2l0eVwiKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCIgKyBwbGFjZS5jb3VudHJ5Q29kZSArIFwiL1wiICsgcGxhY2UuY2l0eUNvZGVdKVxuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZS50eXBlID09IFwibG9jYWxpdHlcIikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiICsgcGxhY2UuY291bnRyeUNvZGUgKyBcIi9cIiArIHBsYWNlLmNpdHlDb2RlICsgXCIvXCIgKyBwbGFjZS5sb2NhbGl0eUNvZGVdKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvcGVuQ2l0eVBvcHVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNpdHlQb3B1cEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAodGhpcy5jaXR5SW5wdXQubmF0aXZlRWxlbWVudCkuZm9jdXMoKSB9LCA1MDApO1xuICAgIH1cblxuICAgIHNlYXJjaENpdHkgPSAodGV4dCkgPT4ge1xuICAgICAgICBpZiAoIXRleHQgfHwgdGV4dC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNlYXJjaFJlc3VsdHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dCAhPSB1bmRlZmluZWQgJiYgdGV4dC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5jaXR5UXVlcnlDaGFuZ2VkLm5leHQodGV4dCk7XG4gICAgfVxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbml0XCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgKHRoaXMuY2l0eUlucHV0Lm5hdGl2ZUVsZW1lbnQpLmZvY3VzKCkgfSwgNTAwKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdFwiKTtcblxuICAgIH1cblxufVxuIl19