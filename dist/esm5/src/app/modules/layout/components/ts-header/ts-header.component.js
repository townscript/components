import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoginModalComponent } from '../../../loginSignup/ts-login-signup/login-modal/login-modal.component';
import { UserService } from '../../../../shared/services/user-service';
import { config } from '../../../../core/app-config';
import { PlaceService } from './place.service';
var TsHeaderComponent = /** @class */ (function () {
    function TsHeaderComponent(placeService, dialog, userService) {
        var _this = this;
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
        this.openMyProfileComponent = function () {
            _this.router.navigate(["/profile"]);
        };
    }
    TsHeaderComponent.prototype.clickout = function (event) {
        if (!this.citySuggestions.nativeElement.contains(event.target)) {
            this.cityPopupActive = false;
        }
        if (!this.userMenuEle.nativeElement.contains(event.target)) {
            this.userMenu = false;
        }
    };
    TsHeaderComponent.prototype.openLogin = function () {
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.backdropClass = 'mat-dialog-bkg-container';
        this.dialog.open(LoginModalComponent, dialogConfig);
    };
    TsHeaderComponent.prototype.navigateToMobileSearch = function () {
        this.router.navigate(["/mobile/search"]);
    };
    TsHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (data) {
            _this.user = data;
        });
        this.placeService.place.subscribe(function (res) {
            if (res) {
                _this.activeCity = res;
            }
        });
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
    return TsHeaderComponent;
}());
export { TsHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3RzLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDN0csT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0M7SUFlRSwyQkFBb0IsWUFBMEIsRUFBVSxNQUFpQixFQUFVLFdBQXdCO1FBQTNHLGlCQUNDO1FBRG1CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBYmxHLGVBQVUsR0FBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9DLFdBQU0sR0FBVyxhQUFhLENBQUM7UUFDL0IscUJBQWdCLEdBQVcsV0FBVyxDQUFDO1FBQ3ZDLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFJaEMsV0FBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFdkIsZUFBVSxHQUFRLE1BQU0sQ0FBQztRQUN6QixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUVqRCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQXlCeEIsMkJBQXNCLEdBQUc7WUFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLENBQUMsQ0FBQTtJQXpCRCxDQUFDO0lBR0Qsb0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDRSxJQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQzNDLFlBQVksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFlBQVksQ0FBQyxhQUFhLEdBQUcsMEJBQTBCLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGtEQUFzQixHQUF0QjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFJRCxvQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2xDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNuQyxJQUFJLEdBQUcsRUFBRTtnQkFDUCxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpEUTtRQUFSLEtBQUssRUFBRTswQ0FBYSxLQUFLO3lEQUE4QjtJQUMvQztRQUFSLEtBQUssRUFBRTs7cURBQWdDO0lBQy9CO1FBQVIsS0FBSyxFQUFFOzsrREFBd0M7SUFDdkM7UUFBUixLQUFLLEVBQUU7O3FEQUF3QjtJQUNpQjtRQUFoRCxTQUFTLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7MENBQWtCLFVBQVU7OERBQUM7SUFDaEM7UUFBNUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FBYyxVQUFVOzBEQUFDO0lBWXJFO1FBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7cURBUTFDO0lBMUJVLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixnOEpBQXlDOztTQUUxQyxDQUFDO2lEQWdCa0MsWUFBWSxFQUFrQixTQUFTLEVBQXVCLFdBQVc7T0FmaEcsaUJBQWlCLENBcUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FyRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IExvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9sb2dpblNpZ251cC90cy1sb2dpbi1zaWdudXAvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXItc2VydmljZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcC1jb25maWcnO1xuaW1wb3J0IHsgUGxhY2VTZXJ2aWNlIH0gZnJvbSAnLi9wbGFjZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHMtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RzLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RzLWhlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRzSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBDb21wb25lbnRzOiBBcnJheTxTdHJpbmc+ID0gW1wiY3JlYXRlRXZlbnRCdG5cIl07XG4gIEBJbnB1dCgpIHNvdXJjZTogc3RyaW5nID0gXCJtYXJrZXRwbGFjZVwiO1xuICBASW5wdXQoKSBhbGdvbGlhSW5kZXhOYW1lOiBzdHJpbmcgPSBcInRzVGVzdGluZ1wiO1xuICBASW5wdXQoKSBzaGFkb3c6IGJvb2xlYW4gPSB0cnVlO1xuICBAVmlld0NoaWxkKCdjaXR5U3VnZ2VzdGlvbnMnLCB7IHN0YXRpYzogZmFsc2UgfSkgY2l0eVN1Z2dlc3Rpb25zOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd1c2VyTWVudUVsZScsIHsgc3RhdGljOiBmYWxzZSB9KSB1c2VyTWVudUVsZTogRWxlbWVudFJlZjtcbiAgdXNlcjogYW55O1xuICByb3V0ZXIgPSBjb25maWcucm91dGVyO1xuICB1c2VyTWVudTogYW55O1xuICBhY3RpdmVDaXR5OiBhbnkgPSBcIlB1bmVcIjtcbiAgczNCdWNrZXRVcmwgPSBjb25maWcuczNCYXNlVXJsICsgY29uZmlnLnMzQnVja2V0O1xuXG4gIGNpdHlQb3B1cEFjdGl2ZSA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYWNlU2VydmljZTogUGxhY2VTZXJ2aWNlLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja291dChldmVudCkge1xuICAgIGlmICghdGhpcy5jaXR5U3VnZ2VzdGlvbnMubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNpdHlQb3B1cEFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudXNlck1lbnVFbGUubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnVzZXJNZW51ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb3BlbkxvZ2luKCkge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcbiAgICBkaWFsb2dDb25maWcuZGlzYWJsZUNsb3NlID0gZmFsc2U7XG4gICAgZGlhbG9nQ29uZmlnLmF1dG9Gb2N1cyA9IHRydWU7XG4gICAgZGlhbG9nQ29uZmlnLmJhY2tkcm9wQ2xhc3MgPSAnbWF0LWRpYWxvZy1ia2ctY29udGFpbmVyJztcbiAgICB0aGlzLmRpYWxvZy5vcGVuKExvZ2luTW9kYWxDb21wb25lbnQsIGRpYWxvZ0NvbmZpZyk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvTW9iaWxlU2VhcmNoKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tb2JpbGUvc2VhcmNoXCJdKVxuICB9XG4gIG9wZW5NeVByb2ZpbGVDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Byb2ZpbGVcIl0pXG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS51c2VyLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMudXNlciA9IGRhdGE7XG4gICAgfSk7XG4gICAgdGhpcy5wbGFjZVNlcnZpY2UucGxhY2Uuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAocmVzKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQ2l0eSA9IHJlcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=