import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TsLoginSignupComponent } from '../../components/ts-login-signup/ts-login-signup.component';
import { UserService } from '../../../../shared/services/user-service';
import { config } from '../../../../core/app-config';
let TsHeaderComponent = class TsHeaderComponent {
    constructor(dialog, userService) {
        this.dialog = dialog;
        this.userService = userService;
        this.Components = ["createEventBtn"];
        this.source = "marketplace";
        this.algoliaIndexName = "tsTesting";
        this.shadow = true;
        this.router = config.router;
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
        dialogConfig.minWidth = '900px';
        dialogConfig.minHeight = '530px';
        dialogConfig.height = 'auto';
        // dialogConfig.backdropClass = 'mat-dialog-bkg-container';
        this.dialog.open(TsLoginSignupComponent, dialogConfig);
    }
    ngOnInit() {
        this.userService.user.subscribe(data => {
            console.log(data);
            this.user = data;
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
        template: "<nav class=\"ts-header flex align-items-center\" *ngIf=\"source!='marketplace'\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <!-- <ts-button text=\"Create Event\"></ts-button> -->\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<nav class=\"ts-header-new w-screen fixed flex items-center\" [class.shadow]=\"shadow\" *ngIf=\"source=='marketplace'\">\n    <div class=\"ts-container flex items-center w-full\">\n        <div class=\"hidden md:block lg:w-1/6\">\n            <img class=\"ts-logo\" src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n        </div>\n        <div class=\"sm:w-1/4 flex md:hidden lg:hidden items-center\">\n            <!-- <i class=\"mdi mdi-menu mr-3 text-3xl color-blue\"></i> -->\n            <!-- <app-hamburger-menu class=\"mr-3\"></app-hamburger-menu> -->\n            <img class=\"ts-logo mr-3\" src=\"assets/images/ts-icon.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n            <div #citySuggestions class=\"city-selection text-lg cursor-pointer\" (click)=\"cityPopupActive=true\">\n                <div class=\"flex items-center\" matRipple>\n                    <span class=\"mr-1 text-gray-700\">Pune</span>\n                    <i class=\"mdi mdi-menu-down color-blue\"></i>\n                </div>\n                <app-city-search-popup [showArrow]=\"false\" class=\"popup\" *ngIf=\"cityPopupActive\">\n                </app-city-search-popup>\n            </div>\n        </div>\n        <div class=\"lg:w-5/12 ml-3 hidden sm:hidden md:hidden lg:flex\">\n            <app-search class=\"w-full\" [algoliaIndexName]=\"algoliaIndexName\"></app-search>\n        </div>\n        <div class=\"invisible sm:w-1/4 lg:w-1/12 flex items-center ml-6 view-type text-xl color-blue\">\n            <!-- <i class=\"active text-xl mdi mdi-book-open mr-4\"></i>\n            <i class=\"mdi mdi-map-legend mr-4\"></i>\n            <i class=\"mdi mdi-calendar-today mr-4\"></i> -->\n        </div>\n        <div class=\"lg:w-1/6 hidden sm:hidden md:hidden h-full lg:flex items-center pr-8\">\n            <div class=\"create-btn cursor-pointer flex h-full justify-center items-center\">\n                <span class=\"text-base mr-2\">CREATE EVENT</span>\n                <i class=\"mdi mdi-ticket text-2xl\"></i>\n            </div>\n        </div>\n        <div #userMenuEle\n            class=\"position-relative sm:w-1/1 lg:w-1/6 justify-end hidden sm:hidden md:hidden lg:flex items-center\">\n            <div class=\"flex items-center cursor-pointer px-2\" (click)=\"openLogin()\" *ngIf=\"!user\" matRipple>\n                <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n                <span>Login | Signup</span>\n            </div>\n            <div class=\"flex items-center cursor-pointer\" (click)=\"userMenu=!userMenu\" *ngIf=\"user\" matRipple>\n                <img class=\"rounded-full mr-2\" width=\"36\"\n                    [src]=\"'https://s3.ap-south-1.amazonaws.com/townscript-testing/images/'+user?.s3imagename\" />\n                <!-- <span>{{user.user}}</span> -->\n            </div>\n            <div class=\"user-menu position-absolute shadow-md px-2 enter-slide-bottom\" *ngIf=\"userMenu\">\n                <app-user-menu [user]=\"user\" (close)=\"userMenu=!userMenu\"></app-user-menu>\n            </div>\n            <!-- <ts-button text=\"Login | Signup\" class=\"text-base\"></ts-button> -->\n        </div>\n\n        <!-- Mobile Menu -->\n        <div class=\"sm:w-1/1 ml-auto mr-2 flex  sm:flex md:flex lg:hidden items-center\">\n            <div class=\"rounded-full\" matRipple>\n                <i class=\"mdi mdi-magnify text-3xl ml-2 mr-4 color-blue\"></i>\n            </div>\n            <div class=\"rounded-full\" matRipple>\n                <i class=\"mdi mdi-account text-3xl mr-2 ml-2 color-blue\" matRipple\n                    (click)=\"openMyProfileComponent()\"></i>\n            </div>\n        </div>\n    </div>\n</nav>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:-webkit-box;display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}.ts-header-new{min-height:75px;background-color:#f7f7f7;top:0;z-index:1000}.ts-header-new .shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.11)}.ts-header-new .ts-logo{height:38px}.ts-header-new .popup{position:absolute;top:90%;width:100%;left:0}@media (min-width:991px){.ts-container{padding:0 80px!important}.ts-header-new .ts-logo{height:35px}.ts-header-new .view-type i{opacity:.8;padding:3px 9px}.ts-header-new .view-type i.active{opacity:1;background:#3782c4;border-radius:50%;color:#fff;box-shadow:0 0 5px 0 #8ec0ec}.ts-header-new .create-btn{width:100%;min-width:200px;border-radius:20.5px;color:#fff;white-space:nowrap;background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0;-webkit-transition:.1s;transition:.1s}.ts-header-new .create-btn:hover{box-shadow:0 4px 6px 0 #d4b1f0;-webkit-transform:translateY(-2px);transform:translateY(-2px)}.ts-header-new .user-menu{position:absolute;top:145%;width:300px;left:-42%;background:#fff}.ts-header-new .user-menu:before{content:\" \";width:0;height:0;position:absolute;top:-11px;left:84%;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #fff;-webkit-filter:drop-shadow(0 -2px 1px rgba(0, 0, 0, .09));filter:drop-shadow(0 -2px 1px rgba(0, 0, 0, .09))}}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
    }),
    tslib_1.__metadata("design:paramtypes", [MatDialog, UserService])
], TsHeaderComponent);
export { TsHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3RzLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDcEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU9yRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWE1QixZQUFvQixNQUFpQixFQUFVLFdBQXdCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVg5RCxlQUFVLEdBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQyxXQUFNLEdBQVcsYUFBYSxDQUFDO1FBQy9CLHFCQUFnQixHQUFXLFdBQVcsQ0FBQztRQUN2QyxXQUFNLEdBQVksSUFBSSxDQUFDO1FBSWhDLFdBQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBR3ZCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBeUJ4QiwyQkFBc0IsR0FBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLENBQUMsQ0FBQTtJQXpCRCxDQUFDO0lBR0QsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQzNDLFlBQVksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzlCLFlBQVksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLFlBQVksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzdCLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUVGLENBQUE7QUE3Q1U7SUFBUixLQUFLLEVBQUU7c0NBQWEsS0FBSztxREFBOEI7QUFDL0M7SUFBUixLQUFLLEVBQUU7O2lEQUFnQztBQUMvQjtJQUFSLEtBQUssRUFBRTs7MkRBQXdDO0FBQ3ZDO0lBQVIsS0FBSyxFQUFFOztpREFBd0I7QUFDaUI7SUFBaEQsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO3NDQUFrQixVQUFVOzBEQUFDO0FBQ2hDO0lBQTVDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7c0NBQWMsVUFBVTtzREFBQztBQVVyRTtJQURDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O2lEQVExQztBQXhCVSxpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsOHBKQUF5Qzs7S0FFMUMsQ0FBQzs2Q0FjNEIsU0FBUyxFQUF1QixXQUFXO0dBYjVELGlCQUFpQixDQStDN0I7U0EvQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFRzTG9naW5TaWdudXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RzLWxvZ2luLXNpZ251cC90cy1sb2dpbi1zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXItc2VydmljZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwcC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cy1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdHMtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdHMtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHNIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIENvbXBvbmVudHM6IEFycmF5PFN0cmluZz4gPSBbXCJjcmVhdGVFdmVudEJ0blwiXTtcbiAgQElucHV0KCkgc291cmNlOiBzdHJpbmcgPSBcIm1hcmtldHBsYWNlXCI7XG4gIEBJbnB1dCgpIGFsZ29saWFJbmRleE5hbWU6IHN0cmluZyA9IFwidHNUZXN0aW5nXCI7XG4gIEBJbnB1dCgpIHNoYWRvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoJ2NpdHlTdWdnZXN0aW9ucycsIHsgc3RhdGljOiBmYWxzZSB9KSBjaXR5U3VnZ2VzdGlvbnM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3VzZXJNZW51RWxlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHVzZXJNZW51RWxlOiBFbGVtZW50UmVmO1xuICB1c2VyOiBhbnk7XG4gIHJvdXRlciA9IGNvbmZpZy5yb3V0ZXI7XG4gIHVzZXJNZW51OiBhbnk7XG5cbiAgY2l0eVBvcHVwQWN0aXZlID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrb3V0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNpdHlTdWdnZXN0aW9ucy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2l0eVBvcHVwQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghdGhpcy51c2VyTWVudUVsZS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMudXNlck1lbnUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvcGVuTG9naW4oKSB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnID0gbmV3IE1hdERpYWxvZ0NvbmZpZygpO1xuICAgIGRpYWxvZ0NvbmZpZy5kaXNhYmxlQ2xvc2UgPSBmYWxzZTtcbiAgICBkaWFsb2dDb25maWcuYXV0b0ZvY3VzID0gdHJ1ZTtcbiAgICBkaWFsb2dDb25maWcubWluV2lkdGggPSAnOTAwcHgnO1xuICAgIGRpYWxvZ0NvbmZpZy5taW5IZWlnaHQgPSAnNTMwcHgnO1xuICAgIGRpYWxvZ0NvbmZpZy5oZWlnaHQgPSAnYXV0byc7XG4gICAgLy8gZGlhbG9nQ29uZmlnLmJhY2tkcm9wQ2xhc3MgPSAnbWF0LWRpYWxvZy1ia2ctY29udGFpbmVyJztcbiAgICB0aGlzLmRpYWxvZy5vcGVuKFRzTG9naW5TaWdudXBDb21wb25lbnQsIGRpYWxvZ0NvbmZpZyk7XG4gIH1cblxuICBvcGVuTXlQcm9maWxlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9wcm9maWxlXCJdKVxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UudXNlci5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHRoaXMudXNlciA9IGRhdGE7XG4gICAgfSlcbiAgfVxuXG59XG4iXX0=