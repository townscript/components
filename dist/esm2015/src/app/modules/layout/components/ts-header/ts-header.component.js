import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginModalComponent } from '../../../loginSignup/ts-login-signup/login-modal/login-modal.component';
import { UserService } from '../../../../shared/services/user-service';
import { config } from '../../../../core/app-config';
import { PlaceService } from './place.service';
let TsHeaderComponent = class TsHeaderComponent {
    constructor(placeService, dialog, userService) {
        this.placeService = placeService;
        this.dialog = dialog;
        this.userService = userService;
        this.Components = ["createEventBtn"];
        this.source = "marketplace";
        this.algoliaIndexName = "tsTesting";
        this.shadow = true;
        this.router = config.router;
        this.activeCity = "Pune";
        this.s3BucketUrl = config.s3BaseUrl + config.s3Bucket;
        this.cityPopupActive = false;
        this.openMyProfileComponent = () => {
            this.router.navigate(["/profile"]);
        };
    }
    clickout(event) {
        if (!this.citySuggestions.nativeElement.contains(event.target)) {
            this.cityPopupActive = false;
        }
        if (!this.userMenuEle.nativeElement.contains(event.target)) {
            this.userMenu = false;
        }
    }
    openLogin() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.backdropClass = 'mat-dialog-bkg-container';
        this.dialog.open(LoginModalComponent, dialogConfig);
    }
    navigateToMobileSearch() {
        this.router.navigate(["/mobile/search"]);
    }
    ngOnInit() {
        this.userService.user.subscribe(data => {
            this.user = data;
        });
        this.placeService.place.subscribe(res => {
            if (res) {
                this.activeCity = res;
            }
        });
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
    tslib_1.__metadata("design:type", Boolean)
], TsHeaderComponent.prototype, "shadow", void 0);
tslib_1.__decorate([
    ViewChild('citySuggestions', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], TsHeaderComponent.prototype, "citySuggestions", void 0);
tslib_1.__decorate([
    ViewChild('userMenuEle', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], TsHeaderComponent.prototype, "userMenuEle", void 0);
tslib_1.__decorate([
    HostListener('document:click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TsHeaderComponent.prototype, "clickout", null);
TsHeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'ts-header',
        template: "<nav class=\"ts-header flex align-items-center\" *ngIf=\"source!='marketplace'\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <!-- <ts-button text=\"Create Event\"></ts-button> -->\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<nav class=\"ts-header-new w-screen fixed flex items-center\" [class.shadow]=\"shadow\" *ngIf=\"source=='marketplace'\">\n    <div class=\"ts-container flex items-center w-full\">\n        <div class=\"hidden md:block lg:w-1/6\">\n            <img class=\"ts-logo\" src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n        </div>\n        <div class=\"sm:w-1/4 max-50 flex md:hidden lg:hidden items-center\">\n            <!-- <i class=\"mdi mdi-menu mr-3 text-3xl color-blue\"></i> -->\n            <!-- <app-hamburger-menu class=\"mr-3\"></app-hamburger-menu> -->\n            <!-- <img class=\"ts-logo mr-3\" src=\"assets/images/ts-icon.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" /> -->\n            <i class=\"mdi mdi-map-marker color-blue text-2xl mr-2\"></i>\n            <div #citySuggestions class=\"city-selection text-lg cursor-pointer w-full\" (click)=\"cityPopupActive=true\">\n                <div class=\"flex items-center w-full\" matRipple>\n                    <span class=\"mr-1 text-gray-700 truncate\">{{activeCity}}</span>\n                    <i class=\"mdi mdi-menu-down color-blue\"></i>\n                </div>\n                <app-city-search-popup [(cityPopupActive)]=\"cityPopupActive\" [(activeCity)]=\"activeCity\"\n                    [showArrow]=\"false\" class=\"popup\" *ngIf=\"cityPopupActive\">\n                </app-city-search-popup>\n            </div>\n        </div>\n        <div class=\"lg:w-5/12 ml-3 hidden sm:hidden md:hidden lg:flex\">\n            <app-search class=\"w-full\" [algoliaIndexName]=\"algoliaIndexName\"></app-search>\n        </div>\n        <div class=\"invisible sm:w-1/4 lg:w-1/12 flex items-center ml-6 view-type text-xl color-blue\">\n            <!-- <i class=\"active text-xl mdi mdi-book-open mr-4\"></i>\n            <i class=\"mdi mdi-map-legend mr-4\"></i>\n            <i class=\"mdi mdi-calendar-today mr-4\"></i> -->\n        </div>\n        <div class=\"lg:w-1/6 hidden sm:hidden md:hidden h-full lg:flex items-center pr-8\">\n            <div class=\"create-btn cursor-pointer flex h-full justify-center items-center\">\n                <span class=\"text-base mr-2\">CREATE EVENT</span>\n                <i class=\"mdi mdi-ticket text-2xl\"></i>\n            </div>\n        </div>\n        <div #userMenuEle\n            class=\"position-relative sm:w-1/1 lg:w-1/6 justify-end hidden sm:hidden md:hidden lg:flex items-center\">\n            <div class=\"flex items-center cursor-pointer px-2\" (click)=\"openLogin()\" *ngIf=\"!user\" matRipple>\n                <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n                <span>Login | Signup</span>\n            </div>\n            <div class=\"flex items-center cursor-pointer\" (click)=\"userMenu=!userMenu\" *ngIf=\"user\" matRipple>\n                <img class=\"rounded-full mr-2\" width=\"36\" [src]=\"s3BucketUrl+'/images/'+user?.s3imagename\" />\n                <!-- <span>{{user.user}}</span> -->\n            </div>\n            <div class=\"user-menu position-absolute shadow-md px-2 enter-slide-bottom\" *ngIf=\"userMenu\">\n                <app-user-menu [user]=\"user\" (close)=\"userMenu=!userMenu\"></app-user-menu>\n            </div>\n            <!-- <ts-button text=\"Login | Signup\" class=\"text-base\"></ts-button> -->\n        </div>\n\n        <!-- Mobile Menu -->\n        <div class=\"sm:w-1/1 ml-auto mr-2 flex  sm:flex md:flex lg:hidden items-center\">\n            <div class=\"rounded-full\" matRipple (click)=\"navigateToMobileSearch()\">\n                <i class=\"mdi mdi-magnify text-2xl ml-2 mr-2 color-blue\"></i>\n            </div>\n            <div class=\"rounded-full\" matRipple>\n                <i class=\"mdi mdi-account text-2xl  ml-2 color-blue\" matRipple (click)=\"openMyProfileComponent()\"></i>\n            </div>\n        </div>\n    </div>\n</nav>\n<nav class=\"ts-header-new w-screen flex items-center\" [class.shadow]=\"shadow\" *ngIf=\"source=='marketplace'\">\n\n</nav>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:-webkit-box;display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}.ts-header-new{min-height:50px;background-color:#f7f7f7;top:0;z-index:1000}.ts-header-new .shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.11)}.ts-header-new .ts-logo{height:28px}.ts-header-new .popup{position:absolute;top:90%;width:100%;left:0}.ts-header-new .max-50{max-width:50%}@media (min-width:991px){.ts-container{padding:0 80px!important}.ts-header-new{min-height:68px}.ts-header-new .ts-logo{height:35px}.ts-header-new .view-type i{opacity:.8;padding:3px 9px}.ts-header-new .view-type i.active{opacity:1;background:#3782c4;border-radius:50%;color:#fff;box-shadow:0 0 5px 0 #8ec0ec}.ts-header-new .create-btn{width:100%;min-width:200px;border-radius:20.5px;color:#fff;white-space:nowrap;background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0;-webkit-transition:.1s;transition:.1s}.ts-header-new .create-btn:hover{box-shadow:0 4px 6px 0 #d4b1f0;-webkit-transform:translateY(-2px);transform:translateY(-2px)}.ts-header-new .user-menu{position:absolute;top:145%;width:300px;left:-42%;background:#fff}.ts-header-new .user-menu:before{content:\" \";width:0;height:0;position:absolute;top:-11px;left:84%;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #fff;-webkit-filter:drop-shadow(0 -2px 1px rgba(0, 0, 0, .09));filter:drop-shadow(0 -2px 1px rgba(0, 0, 0, .09))}}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
    }),
    tslib_1.__metadata("design:paramtypes", [PlaceService, MatDialog, UserService])
], TsHeaderComponent);
export { TsHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3RzLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDN0csT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0MsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFlNUIsWUFBb0IsWUFBMEIsRUFBVSxNQUFpQixFQUFVLFdBQXdCO1FBQXZGLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBYmxHLGVBQVUsR0FBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9DLFdBQU0sR0FBVyxhQUFhLENBQUM7UUFDL0IscUJBQWdCLEdBQVcsV0FBVyxDQUFDO1FBQ3ZDLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFJaEMsV0FBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFdkIsZUFBVSxHQUFRLE1BQU0sQ0FBQztRQUN6QixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUVqRCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQXlCeEIsMkJBQXNCLEdBQUcsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUNwQyxDQUFDLENBQUE7SUF6QkQsQ0FBQztJQUdELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxZQUFZLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUMzQyxZQUFZLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNsQyxZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM5QixZQUFZLENBQUMsYUFBYSxHQUFHLDBCQUEwQixDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRixDQUFBO0FBbkRVO0lBQVIsS0FBSyxFQUFFO3NDQUFhLEtBQUs7cURBQThCO0FBQy9DO0lBQVIsS0FBSyxFQUFFOztpREFBZ0M7QUFDL0I7SUFBUixLQUFLLEVBQUU7OzJEQUF3QztBQUN2QztJQUFSLEtBQUssRUFBRTs7aURBQXdCO0FBQ2lCO0lBQWhELFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztzQ0FBa0IsVUFBVTswREFBQztBQUNoQztJQUE1QyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUFjLFVBQVU7c0RBQUM7QUFZckU7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztpREFRMUM7QUExQlUsaUJBQWlCO0lBTDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLGc4SkFBeUM7O0tBRTFDLENBQUM7NkNBZ0JrQyxZQUFZLEVBQWtCLFNBQVMsRUFBdUIsV0FBVztHQWZoRyxpQkFBaUIsQ0FxRDdCO1NBckRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbG9naW5TaWdudXAvdHMtbG9naW4tc2lnbnVwL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLXNlcnZpY2UnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHAtY29uZmlnJztcbmltcG9ydCB7IFBsYWNlU2VydmljZSB9IGZyb20gJy4vcGxhY2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RzLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90cy1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cy1oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUc0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgQ29tcG9uZW50czogQXJyYXk8U3RyaW5nPiA9IFtcImNyZWF0ZUV2ZW50QnRuXCJdO1xuICBASW5wdXQoKSBzb3VyY2U6IHN0cmluZyA9IFwibWFya2V0cGxhY2VcIjtcbiAgQElucHV0KCkgYWxnb2xpYUluZGV4TmFtZTogc3RyaW5nID0gXCJ0c1Rlc3RpbmdcIjtcbiAgQElucHV0KCkgc2hhZG93OiBib29sZWFuID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZCgnY2l0eVN1Z2dlc3Rpb25zJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNpdHlTdWdnZXN0aW9uczogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndXNlck1lbnVFbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgdXNlck1lbnVFbGU6IEVsZW1lbnRSZWY7XG4gIHVzZXI6IGFueTtcbiAgcm91dGVyID0gY29uZmlnLnJvdXRlcjtcbiAgdXNlck1lbnU6IGFueTtcbiAgYWN0aXZlQ2l0eTogYW55ID0gXCJQdW5lXCI7XG4gIHMzQnVja2V0VXJsID0gY29uZmlnLnMzQmFzZVVybCArIGNvbmZpZy5zM0J1Y2tldDtcblxuICBjaXR5UG9wdXBBY3RpdmUgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGFjZVNlcnZpY2U6IFBsYWNlU2VydmljZSwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZywgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tvdXQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY2l0eVN1Z2dlc3Rpb25zLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jaXR5UG9wdXBBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnVzZXJNZW51RWxlLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy51c2VyTWVudSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5Mb2dpbigpIHtcbiAgICBjb25zdCBkaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG4gICAgZGlhbG9nQ29uZmlnLmRpc2FibGVDbG9zZSA9IGZhbHNlO1xuICAgIGRpYWxvZ0NvbmZpZy5hdXRvRm9jdXMgPSB0cnVlO1xuICAgIGRpYWxvZ0NvbmZpZy5iYWNrZHJvcENsYXNzID0gJ21hdC1kaWFsb2ctYmtnLWNvbnRhaW5lcic7XG4gICAgdGhpcy5kaWFsb2cub3BlbihMb2dpbk1vZGFsQ29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuICB9XG5cbiAgbmF2aWdhdGVUb01vYmlsZVNlYXJjaCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbW9iaWxlL3NlYXJjaFwiXSlcbiAgfVxuICBvcGVuTXlQcm9maWxlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdKVxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UudXNlci5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLnVzZXIgPSBkYXRhO1xuICAgIH0pO1xuICAgIHRoaXMucGxhY2VTZXJ2aWNlLnBsYWNlLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICB0aGlzLmFjdGl2ZUNpdHkgPSByZXM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19