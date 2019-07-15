/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class TsHeaderComponent {
    constructor() {
        this.Components = ["createEventBtn"];
        this.source = "";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TsHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ts-header',
                template: "<nav class=\"ts-header flex align-items-center\" *ngIf=\"source!='marketplace'\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.png\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <ts-button text=\"Create Event\"></ts-button>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<nav class=\"ts-header-new flex items-center\" *ngIf=\"source=='marketplace'\">\n    <div class=\"ts-container flex items-center w-full\">\n        <div class=\"sm:w-1/4 lg:w-1/6\">\n            <img class=\"ts-logo\" src=\"assets/images/ts-logo.png\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n        </div>\n        <div class=\"lg:w-1/3 ml-3 hidden sm:hidden md:hidden lg:flex search-container p-2\">\n            <div class=\"w-3/4 flex items-center left-section\">\n                <i class=\"mdi mdi-magnify text-2xl color-blue\"></i>\n                <input class=\"ml-2 text-sm w-full bg-transparent\" type=\"text\" placeholder=\"Search for an Event\" />\n            </div>\n            <div class=\"w-1/4 flex items-center ml-2\">\n                <i class=\"mdi mdi-map-marker text-2xl color-blue\"></i>\n                <span class=\"text-sm ml-1 mr-2\">Pune</span>\n                <i class=\"mdi mdi-chevron-down text-2xl\"></i>\n            </div>\n        </div>\n        <div class=\"sm:w-1/4 lg:w-1/6 flex items-center ml-6 view-type text-xl color-blue\">\n            <i class=\"active text-xl mdi mdi-book-open mr-4\"></i>\n            <i class=\"mdi mdi-map-legend mr-4\"></i>\n            <i class=\"mdi mdi-calendar-today mr-4\"></i>\n        </div>\n        <div class=\"lg:w-1/6 hidden sm:hidden md:hidden lg:flex items-center pr-8\">\n            <div class=\"create-btn flex justify-center items-center\">\n                <span class=\"text-sm mr-2\">CREATE EVENT</span>\n                <i class=\"mdi mdi-ticket text-2xl\"></i>\n            </div>\n        </div>\n        <div class=\"sm:w-1/1 lg:w-1/6 justify-end hidden sm:hidden md:hidden lg:flex items-center\">\n            <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n            <span class=\"text-base\">Login | Signup</span>\n        </div>\n        <div class=\"sm:w-1/1 ml-auto mr-2  sm:flex md:flex lg:hidden items-center\">\n            <i class=\"mdi mdi-magnify text-2xl ml-2 color-blue\"></i>\n        </div>\n    </div>\n</nav>",
                styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}.ts-header-new{min-height:75px;background-color:#f7f7f7;width:100%;position:fixed;top:0;z-index:1000}.ts-header-new .search-container{height:44px;border-radius:2px;background-color:#ededed}.ts-header-new .search-container .left-section{border-right:1px solid rgba(151,151,151,.3)}.ts-header-new .ts-logo{width:136px;min-width:136px;min-height:31px}.ts-header-new .view-type i{opacity:.8;padding:3px 9px}.ts-header-new .view-type i.active{opacity:1;background:#3782c4;border-radius:50%;color:#fff;box-shadow:0 0 5px 0 #8ec0ec}.ts-header-new .create-btn{width:100%;border-radius:20.5px;color:#fff;white-space:nowrap;background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0}@media (min-width:991px){.ts-container{padding:0 80px!important}}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
            }] }
];
/** @nocollapse */
TsHeaderComponent.ctorParameters = () => [];
TsHeaderComponent.propDecorators = {
    Components: [{ type: Input }],
    source: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TsHeaderComponent.prototype.Components;
    /** @type {?} */
    TsHeaderComponent.prototype.source;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3RzLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU07SUFJSjswQkFGcUMsQ0FBQyxnQkFBZ0IsQ0FBQztzQkFDN0IsRUFBRTtLQUNYOzs7O0lBQ2pCLFFBQVE7S0FDUDs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwyOEZBQXlDOzthQUUxQzs7Ozs7eUJBR0UsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RzLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90cy1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cy1oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUc0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgQ29tcG9uZW50czogQXJyYXk8U3RyaW5nPiA9IFtcImNyZWF0ZUV2ZW50QnRuXCJdO1xuICBASW5wdXQoKSBzb3VyY2U6IHN0cmluZyA9IFwiXCI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==