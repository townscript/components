import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
import { HeaderService } from '../ts-header.service';
import { Router } from "@angular/router";
var CitySearchPopupComponent = /** @class */ (function () {
    function CitySearchPopupComponent(headerService, timeService, datepipe) {
        var _this = this;
        this.headerService = headerService;
        this.timeService = timeService;
        this.datepipe = datepipe;
        this.showArrow = true;
        this.citySearchActive = false;
        this.cityPopupActive = false;
        this.activeCity = "Pune";
        this.cityQueryChanged = new Subject();
        this.popularPlaces = ['Pune', 'Mumbai', 'Bangalore', 'New Delhi', 'Lucknow', 'Kanpur'];
        this.callSearchCity = function (query) {
            _this.headerService.getplaceSearchResults(query).subscribe(function (res) {
                _this.placeSearchResults = res['data'];
            });
        };
        this.placeChanged = function (place) {
            if (place.type == "country") {
                _this.router.navigate(["/" + place.twoDigitCode]);
            }
            if (place.type == "city") {
                _this.router.navigate(["/" + place.countryCode + "/" + place.cityCode]);
            }
            if (place.type == "locality") {
                _this.router.navigate(["/" + place.countryCode + "/" + place.cityCode + "/" + place.localityCode]);
            }
        };
        this.openCityPopup = function () {
            _this.cityPopupActive = true;
            setTimeout(function () { (_this.cityInput.nativeElement).focus(); }, 500);
        };
        this.searchCity = function (text) {
            if (!text || text.length == 0) {
                _this.placeSearchResults = [];
            }
            if (text != undefined && text.length > 0)
                _this.cityQueryChanged.next(text);
        };
        this.cityQueryChanged.pipe(debounceTime(300)).subscribe(function (text) { return _this.callSearchCity(text); });
    }
    CitySearchPopupComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log("init");
        setTimeout(function () { (_this.cityInput.nativeElement).focus(); }, 500);
    };
    CitySearchPopupComponent.prototype.ngOnInit = function () {
        console.log("init");
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
    return CitySearchPopupComponent;
}());
export { CitySearchPopupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcG9uZW50cy90cy1oZWFkZXIvY2l0eS1zZWFyY2gtcG9wdXAvY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRekM7SUFpQkksa0NBQW9CLGFBQTRCLEVBQVUsV0FBd0IsRUFBUyxRQUFrQjtRQUE3RyxpQkFHQztRQUhtQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWJwRyxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRW5DLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxlQUFVLEdBQVcsTUFBTSxDQUFDO1FBRTVCLHFCQUFnQixHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBSTFELGtCQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUs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QWEsRUFBdUIsV0FBVyxFQUFtQixRQUFRO09BakJwRyx3QkFBd0IsQ0E2RHBDO0lBQUQsK0JBQUM7Q0FBQSxBQTdERCxJQTZEQztTQTdEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBhbGdvbGlhU2VhcmNoSW1wb3J0ZWQgZnJvbSBcImFsZ29saWFzZWFyY2hcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3RpbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuLi90cy1oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY2l0eS1zZWFyY2gtcG9wdXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaXR5LXNlYXJjaC1wb3B1cC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgcm91dGVyOiBSb3V0ZXI7XG4gICAgQFZpZXdDaGlsZCgnY2l0eUlucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgY2l0eUlucHV0OiBFbGVtZW50UmVmO1xuICAgIEBJbnB1dCgpIHNob3dBcnJvdzogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjaXR5U2VhcmNoQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgY2l0eVBvcHVwQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcGxhY2VTZWFyY2hSZXN1bHRzOiBhbnk7XG4gICAgYWN0aXZlQ2l0eTogc3RyaW5nID0gXCJQdW5lXCI7XG4gICAgY2l0eVF1ZXJ5OiBzdHJpbmc7XG4gICAgY2l0eVF1ZXJ5Q2hhbmdlZDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIGNsaWVudDogYW55O1xuICAgIGluZGV4OiBhbnk7XG5cbiAgICBwb3B1bGFyUGxhY2VzID0gWydQdW5lJywgJ011bWJhaScsICdCYW5nYWxvcmUnLCAnTmV3IERlbGhpJywgJ0x1Y2tub3cnLCAnS2FucHVyJ107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2UsIHByaXZhdGUgdGltZVNlcnZpY2U6IFRpbWVTZXJ2aWNlLCBwdWJsaWMgZGF0ZXBpcGU6IERhdGVQaXBlKSB7XG4gICAgICAgIHRoaXMuY2l0eVF1ZXJ5Q2hhbmdlZC5waXBlKGRlYm91bmNlVGltZSgzMDApKS5zdWJzY3JpYmUodGV4dCA9PiB0aGlzLmNhbGxTZWFyY2hDaXR5KHRleHQpKTtcblxuICAgIH1cbiAgICBjYWxsU2VhcmNoQ2l0eSA9IChxdWVyeSkgPT4ge1xuICAgICAgICB0aGlzLmhlYWRlclNlcnZpY2UuZ2V0cGxhY2VTZWFyY2hSZXN1bHRzKHF1ZXJ5KS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTZWFyY2hSZXN1bHRzID0gcmVzWydkYXRhJ107XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBsYWNlQ2hhbmdlZCA9IChwbGFjZSkgPT4ge1xuICAgICAgICBpZiAocGxhY2UudHlwZSA9PSBcImNvdW50cnlcIikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiICsgcGxhY2UudHdvRGlnaXRDb2RlXSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2UudHlwZSA9PSBcImNpdHlcIikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiICsgcGxhY2UuY291bnRyeUNvZGUgKyBcIi9cIiArIHBsYWNlLmNpdHlDb2RlXSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2UudHlwZSA9PSBcImxvY2FsaXR5XCIpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIiArIHBsYWNlLmNvdW50cnlDb2RlICsgXCIvXCIgKyBwbGFjZS5jaXR5Q29kZSArIFwiL1wiICsgcGxhY2UubG9jYWxpdHlDb2RlXSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb3BlbkNpdHlQb3B1cCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jaXR5UG9wdXBBY3RpdmUgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgKHRoaXMuY2l0eUlucHV0Lm5hdGl2ZUVsZW1lbnQpLmZvY3VzKCkgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBzZWFyY2hDaXR5ID0gKHRleHQpID0+IHtcbiAgICAgICAgaWYgKCF0ZXh0IHx8IHRleHQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTZWFyY2hSZXN1bHRzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHQgIT0gdW5kZWZpbmVkICYmIHRleHQubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuY2l0eVF1ZXJ5Q2hhbmdlZC5uZXh0KHRleHQpO1xuICAgIH1cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdFwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ICh0aGlzLmNpdHlJbnB1dC5uYXRpdmVFbGVtZW50KS5mb2N1cygpIH0sIDUwMCk7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluaXRcIik7XG5cbiAgICB9XG5cbn1cbiJdfQ==