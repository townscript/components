import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
let TsHeaderComponent = class TsHeaderComponent {
    constructor(datepipe) {
        this.datepipe = datepipe;
        this.Components = ["createEventBtn"];
        this.source = "marketplace";
        this.algoliaIndexName = "tsTesting";
    }
    ngOnInit() {
    }
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
TsHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'ts-header',
        template: "<nav class=\"ts-header flex align-items-center\" *ngIf=\"source!='marketplace'\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.png\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <!-- <ts-button text=\"Create Event\"></ts-button> -->\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<nav class=\"ts-header-new w-full fixed flex items-center\" *ngIf=\"source=='marketplace'\">\n    <div class=\"ts-container flex items-center w-full\">\n        <div class=\"sm:w-1/4 lg:w-1/6\">\n            <img class=\"ts-logo\" src=\"assets/images/ts-logo.png\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n        </div>\n        <div class=\"lg:w-5/12 ml-3 hidden sm:hidden md:hidden lg:flex\">\n            <app-search [router]=\"router\" class=\"w-full\" [algoliaIndexName]=\"algoliaIndexName\"></app-search>\n        </div>\n        <div class=\"invisible sm:w-1/4 lg:w-1/12 flex items-center ml-6 view-type text-xl color-blue\">\n            <!-- <i class=\"active text-xl mdi mdi-book-open mr-4\"></i>\n            <i class=\"mdi mdi-map-legend mr-4\"></i>\n            <i class=\"mdi mdi-calendar-today mr-4\"></i> -->\n        </div>\n        <div class=\"lg:w-1/6 hidden sm:hidden md:hidden lg:flex items-center pr-8\">\n            <div class=\"create-btn cursor-pointer flex justify-center items-center\">\n                <span class=\"text-sm mr-2\">CREATE EVENT</span>\n                <i class=\"mdi mdi-ticket text-2xl\"></i>\n            </div>\n        </div>\n        <div class=\"sm:w-1/1 lg:w-1/6 justify-end hidden sm:hidden md:hidden lg:flex items-center\">\n            <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n            <span class=\"text-base\">Login | Signup</span>\n        </div>\n        <div class=\"sm:w-1/1 ml-auto mr-2  sm:flex md:flex lg:hidden items-center\">\n            <i class=\"mdi mdi-magnify text-2xl ml-2 color-blue\"></i>\n        </div>\n    </div>\n</nav>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:-webkit-box;display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}.ts-header-new{min-height:75px;background-color:#f7f7f7;top:0;z-index:1000}.ts-header-new .ts-logo{width:146px;min-width:146px;min-height:31px}@media (min-width:991px){.ts-container{padding:0 80px!important}.ts-header-new .view-type i{opacity:.8;padding:3px 9px}.ts-header-new .view-type i.active{opacity:1;background:#3782c4;border-radius:50%;color:#fff;box-shadow:0 0 5px 0 #8ec0ec}.ts-header-new .create-btn{width:100%;min-width:200px;border-radius:20.5px;color:#fff;white-space:nowrap;background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0;-webkit-transition:.1s;transition:.1s}.ts-header-new .create-btn:hover{box-shadow:0 4px 6px 0 #d4b1f0;-webkit-transform:translateY(-2px);transform:translateY(-2px)}}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
    }),
    tslib_1.__metadata("design:paramtypes", [DatePipe])
], TsHeaderComponent);
export { TsHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3RzLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRekMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFNNUIsWUFBbUIsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUo1QixlQUFVLEdBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQyxXQUFNLEdBQVcsYUFBYSxDQUFDO1FBQy9CLHFCQUFnQixHQUFXLFdBQVcsQ0FBQztJQUdoRCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7Q0FFRixDQUFBO0FBVlU7SUFBUixLQUFLLEVBQUU7c0NBQWEsS0FBSztxREFBOEI7QUFDL0M7SUFBUixLQUFLLEVBQUU7O2lEQUFnQztBQUMvQjtJQUFSLEtBQUssRUFBRTs7MkRBQXdDO0FBQ3ZDO0lBQVIsS0FBSyxFQUFFO3NDQUFTLE1BQU07aURBQUM7QUFMYixpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIscWpGQUF5Qzs7S0FFMUMsQ0FBQzs2Q0FPNkIsUUFBUTtHQU4xQixpQkFBaUIsQ0FZN0I7U0FaWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3RpbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHMtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RzLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RzLWhlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRzSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBDb21wb25lbnRzOiBBcnJheTxTdHJpbmc+ID0gW1wiY3JlYXRlRXZlbnRCdG5cIl07XG4gIEBJbnB1dCgpIHNvdXJjZTogc3RyaW5nID0gXCJtYXJrZXRwbGFjZVwiO1xuICBASW5wdXQoKSBhbGdvbGlhSW5kZXhOYW1lOiBzdHJpbmcgPSBcInRzVGVzdGluZ1wiO1xuICBASW5wdXQoKSByb3V0ZXI6IFJvdXRlcjtcbiAgY29uc3RydWN0b3IocHVibGljIGRhdGVwaXBlOiBEYXRlUGlwZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19