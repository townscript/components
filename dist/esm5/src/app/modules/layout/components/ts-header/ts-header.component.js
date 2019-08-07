import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TsLoginSignupComponent } from '../../components/ts-login-signup/ts-login-signup.component';
import { UserService } from '../../../../shared/services/user-service';
import { config } from '../../../../core/app-config';
var TsHeaderComponent = /** @class */ (function () {
    function TsHeaderComponent(dialog, userService) {
        var _this = this;
        this.dialog = dialog;
        this.userService = userService;
        this.Components = ["createEventBtn"];
        this.source = "marketplace";
        this.algoliaIndexName = "tsTesting";
        this.router = config.router;
        this.cityPopupActive = false;
        this.openMyProfileComponent = function () {
            _this.router.navigate(["/profile"]);
        };
    }
    TsHeaderComponent.prototype.clickout = function (event) {
        console.log('clickout called');
        if (!this.citySuggestions.nativeElement.contains(event.target)) {
            this.cityPopupActive = false;
        }
    };
    TsHeaderComponent.prototype.openLogin = function () {
        var dialogConfig = new MatDialogConfig();
        console.log('in Login');
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = '900px';
        dialogConfig.minHeight = '530px';
        dialogConfig.height = 'auto';
        dialogConfig.backdropClass = 'mat-dialog-bkg-container';
        this.dialog.open(TsLoginSignupComponent, dialogConfig);
    };
    TsHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.user.subscribe(function (data) {
            console.log(data);
            _this.user = data;
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
            template: "<nav class=\"ts-header flex align-items-center\" *ngIf=\"source!='marketplace'\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <!-- <ts-button text=\"Create Event\"></ts-button> -->\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<nav class=\"ts-header-new w-full fixed flex items-center\" *ngIf=\"source=='marketplace'\">\n    <div class=\"ts-container flex items-center w-full\">\n        <div class=\"hidden md:block lg:w-1/6\">\n            <img class=\"ts-logo\" src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n        </div>\n        <div class=\"sm:w-1/4 flex md:hidden lg:hidden items-center\">\n            <!-- <i class=\"mdi mdi-menu mr-3 text-3xl color-blue\"></i> -->\n            <!-- <app-hamburger-menu class=\"mr-3\"></app-hamburger-menu> -->\n            <img class=\"ts-logo mr-3\" src=\"assets/images/ts-icon.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n            <div #citySuggestions class=\"city-selection text-lg cursor-pointer\" (click)=\"cityPopupActive=true\">\n                <div class=\"flex items-center\" matRipple>\n                    <span class=\"mr-1 text-gray-700\">Pune</span>\n                    <i class=\"mdi mdi-menu-down color-blue\"></i>\n                </div>\n                <app-city-search-popup [showArrow]=\"false\" class=\"popup\" *ngIf=\"cityPopupActive\">\n                </app-city-search-popup>\n            </div>\n        </div>\n        <div class=\"lg:w-5/12 ml-3 hidden sm:hidden md:hidden lg:flex\">\n            <app-search class=\"w-full\" [algoliaIndexName]=\"algoliaIndexName\"></app-search>\n        </div>\n        <div class=\"invisible sm:w-1/4 lg:w-1/12 flex items-center ml-6 view-type text-xl color-blue\">\n            <!-- <i class=\"active text-xl mdi mdi-book-open mr-4\"></i>\n            <i class=\"mdi mdi-map-legend mr-4\"></i>\n            <i class=\"mdi mdi-calendar-today mr-4\"></i> -->\n        </div>\n        <div class=\"lg:w-1/6 hidden sm:hidden md:hidden lg:flex items-center pr-8\">\n            <div class=\"create-btn cursor-pointer flex justify-center items-center\">\n                <span class=\"text-sm mr-2\">CREATE EVENT</span>\n                <i class=\"mdi mdi-ticket text-2xl\"></i>\n            </div>\n        </div>\n        <div class=\"position-relative sm:w-1/1 lg:w-1/6 justify-end hidden sm:hidden md:hidden lg:flex items-center\">\n            <div class=\"flex items-center cursor-pointer\" (click)=\"openLogin()\" *ngIf=\"!user.userId\" matRipple>\n                <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n                <span>Login | Signup</span>\n            </div>\n            <div class=\"flex items-center cursor-pointer\" (click)=\"userMenu=!userMenu\" *ngIf=\"user.userId\" matRipple>\n                <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n                <!-- <span>{{user.user}}</span> -->\n            </div>\n            <div class=\"user-menu position-absolute shadow-md px-2 enter-slide-bottom\" *ngIf=\"userMenu\">\n                <app-user-menu></app-user-menu>\n            </div>\n            <!-- <ts-button text=\"Login | Signup\" class=\"text-base\"></ts-button> -->\n        </div>\n        <div class=\"sm:w-1/1 ml-auto mr-2 flex  sm:flex md:flex lg:hidden items-center\">\n            <div class=\"rounded-full\" matRipple>\n                <i class=\"mdi mdi-magnify text-2xl ml-2 mr-2 color-blue\"></i>\n            </div>\n            <div class=\"rounded-full\" matRipple>\n                <i class=\"mdi mdi-account text-2xl mr-2 ml-2 color-blue\" matRipple\n                    (click)=\"openMyProfileComponent()\"></i>\n            </div>\n        </div>\n    </div>\n</nav>",
            styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:-webkit-box;display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}.ts-header-new{min-height:58px;background-color:#f7f7f7;top:0;z-index:1000;box-shadow:0 2px 4px 0 rgba(0,0,0,.11)}.ts-header-new .ts-logo{height:28px}.ts-header-new .popup{position:absolute;top:90%;width:100%;left:0}@media (min-width:991px){.ts-container{padding:0 80px!important}.ts-header-new{min-height:75px}.ts-header-new .view-type i{opacity:.8;padding:3px 9px}.ts-header-new .view-type i.active{opacity:1;background:#3782c4;border-radius:50%;color:#fff;box-shadow:0 0 5px 0 #8ec0ec}.ts-header-new .create-btn{width:100%;min-width:200px;border-radius:20.5px;color:#fff;white-space:nowrap;background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0;-webkit-transition:.1s;transition:.1s}.ts-header-new .create-btn:hover{box-shadow:0 4px 6px 0 #d4b1f0;-webkit-transform:translateY(-2px);transform:translateY(-2px)}.ts-header-new .user-menu{position:absolute;top:120%;width:300px;left:-42%;background:#fff}.ts-header-new .user-menu:before{content:\" \";width:0;height:0;position:absolute;top:-11px;left:84%;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #fff;-webkit-filter:drop-shadow(0 -2px 1px rgba(0, 0, 0, .09));filter:drop-shadow(0 -2px 1px rgba(0, 0, 0, .09))}}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog, UserService])
    ], TsHeaderComponent);
    return TsHeaderComponent;
}());
export { TsHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3RzLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDcEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU9yRDtJQVdFLDJCQUFvQixNQUFpQixFQUFVLFdBQXdCO1FBQXZFLGlCQUNDO1FBRG1CLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVQ5RCxlQUFVLEdBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvQyxXQUFNLEdBQVcsYUFBYSxDQUFDO1FBQy9CLHFCQUFnQixHQUFXLFdBQVcsQ0FBQztRQUdoRCxXQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUd2QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQXlCeEIsMkJBQXNCLEdBQUc7WUFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLENBQUMsQ0FBQTtJQXpCRCxDQUFDO0lBSUQsb0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNFLElBQU0sWUFBWSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixZQUFZLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNsQyxZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM5QixZQUFZLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNoQyxZQUFZLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNqQyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM3QixZQUFZLENBQUMsYUFBYSxHQUFHLDBCQUEwQixDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFLRCxvQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBekNRO1FBQVIsS0FBSyxFQUFFOzBDQUFhLEtBQUs7eURBQThCO0lBQy9DO1FBQVIsS0FBSyxFQUFFOztxREFBZ0M7SUFDL0I7UUFBUixLQUFLLEVBQUU7OytEQUF3QztJQUNDO1FBQWhELFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FBa0IsVUFBVTs4REFBQztJQVc3RTtRQUZDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3FEQU8xQztJQXJCVSxpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsaTdJQUF5Qzs7U0FFMUMsQ0FBQztpREFZNEIsU0FBUyxFQUF1QixXQUFXO09BWDVELGlCQUFpQixDQTZDN0I7SUFBRCx3QkFBQztDQUFBLEFBN0NELElBNkNDO1NBN0NZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBUc0xvZ2luU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90cy1sb2dpbi1zaWdudXAvdHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLXNlcnZpY2UnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcHAtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHMtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RzLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RzLWhlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRzSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBDb21wb25lbnRzOiBBcnJheTxTdHJpbmc+ID0gW1wiY3JlYXRlRXZlbnRCdG5cIl07XG4gIEBJbnB1dCgpIHNvdXJjZTogc3RyaW5nID0gXCJtYXJrZXRwbGFjZVwiO1xuICBASW5wdXQoKSBhbGdvbGlhSW5kZXhOYW1lOiBzdHJpbmcgPSBcInRzVGVzdGluZ1wiO1xuICBAVmlld0NoaWxkKCdjaXR5U3VnZ2VzdGlvbnMnLCB7IHN0YXRpYzogZmFsc2UgfSkgY2l0eVN1Z2dlc3Rpb25zOiBFbGVtZW50UmVmO1xuICB1c2VyOiBhbnk7XG4gIHJvdXRlciA9IGNvbmZpZy5yb3V0ZXI7XG4gIHVzZXJNZW51OiBhbnk7XG5cbiAgY2l0eVBvcHVwQWN0aXZlID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG5cbiAgY2xpY2tvdXQoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tvdXQgY2FsbGVkJyk7XG4gICAgaWYgKCF0aGlzLmNpdHlTdWdnZXN0aW9ucy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2l0eVBvcHVwQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb3BlbkxvZ2luKCkge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcbiAgICBjb25zb2xlLmxvZygnaW4gTG9naW4nKTtcbiAgICBkaWFsb2dDb25maWcuZGlzYWJsZUNsb3NlID0gZmFsc2U7XG4gICAgZGlhbG9nQ29uZmlnLmF1dG9Gb2N1cyA9IHRydWU7XG4gICAgZGlhbG9nQ29uZmlnLm1pbldpZHRoID0gJzkwMHB4JztcbiAgICBkaWFsb2dDb25maWcubWluSGVpZ2h0ID0gJzUzMHB4JztcbiAgICBkaWFsb2dDb25maWcuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIGRpYWxvZ0NvbmZpZy5iYWNrZHJvcENsYXNzID0gJ21hdC1kaWFsb2ctYmtnLWNvbnRhaW5lcic7XG4gICAgdGhpcy5kaWFsb2cub3BlbihUc0xvZ2luU2lnbnVwQ29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuICB9XG5cbiAgb3Blbk15UHJvZmlsZUNvbXBvbmVudCA9ICgpID0+IHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcHJvZmlsZVwiXSlcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnVzZXIuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB0aGlzLnVzZXIgPSBkYXRhO1xuICAgIH0pXG4gIH1cblxufVxuIl19