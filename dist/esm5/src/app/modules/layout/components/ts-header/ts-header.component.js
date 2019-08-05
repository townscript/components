import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
var TsHeaderComponent = /** @class */ (function () {
    function TsHeaderComponent(datepipe) {
        this.datepipe = datepipe;
        this.Components = ["createEventBtn"];
        this.source = "marketplace";
        this.algoliaIndexName = "tsTesting";
        this.cityPopupActive = false;
    }
    TsHeaderComponent.prototype.clickout = function (event) {
        console.log("clickout called");
        if (!this.citySuggestions.nativeElement.contains(event.target)) {
            this.cityPopupActive = false;
        }
    };
    TsHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TsHeaderComponent.prototype, "Components", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TsHeaderComponent.prototype, "source", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TsHeaderComponent.prototype, "algoliaIndexName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Router)
    ], TsHeaderComponent.prototype, "router", void 0);
    tslib_1.__decorate([
        ViewChild('citySuggestions', { static: false }),
        tslib_1.__metadata("design:type", ElementRef)
    ], TsHeaderComponent.prototype, "citySuggestions", void 0);
    tslib_1.__decorate([
        HostListener('document:click', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TsHeaderComponent.prototype, "clickout", null);
    TsHeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'ts-header',
            template: "<nav class=\"ts-header flex align-items-center\" *ngIf=\"source!='marketplace'\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <!-- <ts-button text=\"Create Event\"></ts-button> -->\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<nav class=\"ts-header-new w-full fixed flex items-center\" *ngIf=\"source=='marketplace'\">\n    <div class=\"ts-container flex items-center w-full\">\n        <div class=\"hidden md:block lg:w-1/6\">\n            <img class=\"ts-logo\" src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n        </div>\n        <div class=\"sm:w-1/4 flex md:hidden lg:hidden items-center\">\n            <i class=\"mdi mdi-menu mr-3 text-3xl color-blue\"></i>\n            <img class=\"ts-logo mr-3\" src=\"assets/images/ts-icon.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n            <div #citySuggestions class=\"city-selection text-lg cursor-pointer\" (click)=\"cityPopupActive=true\">\n                <span class=\"mr-1 text-gray-700\">Pune</span>\n                <i class=\"mdi mdi-menu-down color-blue\"></i>\n                <app-city-search-popup [showArrow]=\"false\" class=\"popup\" *ngIf=\"cityPopupActive\">\n                </app-city-search-popup>\n            </div>\n        </div>\n        <div class=\"lg:w-5/12 ml-3 hidden sm:hidden md:hidden lg:flex\">\n            <app-search [router]=\"router\" class=\"w-full\" [algoliaIndexName]=\"algoliaIndexName\"></app-search>\n        </div>\n        <div class=\"invisible sm:w-1/4 lg:w-1/12 flex items-center ml-6 view-type text-xl color-blue\">\n            <!-- <i class=\"active text-xl mdi mdi-book-open mr-4\"></i>\n            <i class=\"mdi mdi-map-legend mr-4\"></i>\n            <i class=\"mdi mdi-calendar-today mr-4\"></i> -->\n        </div>\n        <div class=\"lg:w-1/6 hidden sm:hidden md:hidden lg:flex items-center pr-8\">\n            <div class=\"create-btn cursor-pointer flex justify-center items-center\">\n                <span class=\"text-sm mr-2\">CREATE EVENT</span>\n                <i class=\"mdi mdi-ticket text-2xl\"></i>\n            </div>\n        </div>\n        <div class=\"sm:w-1/1 lg:w-1/6 justify-end hidden sm:hidden md:hidden lg:flex items-center\">\n            <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n            <span class=\"text-base\">Login | Signup</span>\n        </div>\n        <div class=\"sm:w-1/1 ml-auto mr-2  sm:flex md:flex lg:hidden items-center\">\n            <i class=\"mdi mdi-magnify text-2xl ml-2 color-blue\"></i>\n        </div>\n    </div>\n</nav>",
            styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:-webkit-box;display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}.ts-header-new{min-height:75px;background-color:#f7f7f7;top:0;z-index:1000}.ts-header-new .ts-logo{height:35px}.ts-header-new .popup{position:absolute;top:90%;width:100%;left:0}@media (min-width:991px){.ts-container{padding:0 80px!important}.ts-header-new .view-type i{opacity:.8;padding:3px 9px}.ts-header-new .view-type i.active{opacity:1;background:#3782c4;border-radius:50%;color:#fff;box-shadow:0 0 5px 0 #8ec0ec}.ts-header-new .create-btn{width:100%;min-width:200px;border-radius:20.5px;color:#fff;white-space:nowrap;background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0;-webkit-transition:.1s;transition:.1s}.ts-header-new .create-btn:hover{box-shadow:0 4px 6px 0 #d4b1f0;-webkit-transform:translateY(-2px);transform:translateY(-2px)}}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
        }),
        tslib_1.__metadata("design:paramtypes", [DatePipe])
    ], TsHeaderComponent);
    return TsHeaderComponent;
}());
export { TsHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3RzLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRekM7SUFTRSwyQkFBbUIsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVA1QixlQUFVLEdBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQyxXQUFNLEdBQVcsYUFBYSxDQUFDO1FBQy9CLHFCQUFnQixHQUFXLFdBQVcsQ0FBQztRQUloRCxvQkFBZSxHQUFZLEtBQUssQ0FBQztJQUVqQyxDQUFDO0lBR0Qsb0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFuQlE7UUFBUixLQUFLLEVBQUU7MENBQWEsS0FBSzt5REFBOEI7SUFDL0M7UUFBUixLQUFLLEVBQUU7O3FEQUFnQztJQUMvQjtRQUFSLEtBQUssRUFBRTs7K0RBQXdDO0lBQ3ZDO1FBQVIsS0FBSyxFQUFFOzBDQUFTLE1BQU07cURBQUM7SUFDeUI7UUFBaEQsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzBDQUFrQixVQUFVOzhEQUFDO0lBTzdFO1FBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7cURBTTFDO0lBbEJVLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixzeUdBQXlDOztTQUUxQyxDQUFDO2lEQVU2QixRQUFRO09BVDFCLGlCQUFpQixDQXVCN0I7SUFBRCx3QkFBQztDQUFBLEFBdkJELElBdUJDO1NBdkJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3RpbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHMtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RzLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RzLWhlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRzSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBDb21wb25lbnRzOiBBcnJheTxTdHJpbmc+ID0gW1wiY3JlYXRlRXZlbnRCdG5cIl07XG4gIEBJbnB1dCgpIHNvdXJjZTogc3RyaW5nID0gXCJtYXJrZXRwbGFjZVwiO1xuICBASW5wdXQoKSBhbGdvbGlhSW5kZXhOYW1lOiBzdHJpbmcgPSBcInRzVGVzdGluZ1wiO1xuICBASW5wdXQoKSByb3V0ZXI6IFJvdXRlcjtcbiAgQFZpZXdDaGlsZCgnY2l0eVN1Z2dlc3Rpb25zJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNpdHlTdWdnZXN0aW9uczogRWxlbWVudFJlZjtcblxuICBjaXR5UG9wdXBBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGVwaXBlOiBEYXRlUGlwZSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja291dChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tvdXQgY2FsbGVkXCIpO1xuICAgIGlmICghdGhpcy5jaXR5U3VnZ2VzdGlvbnMubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNpdHlQb3B1cEFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==