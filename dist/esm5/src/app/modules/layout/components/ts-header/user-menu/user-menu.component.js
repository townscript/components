import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from '../../../../../core';
import { UserService } from '../../../../../shared/services/user-service';
import { NotificationService } from '../../../../../shared/services/notification.service';
var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(notificationService, userService, cookieService) {
        this.notificationService = notificationService;
        this.userService = userService;
        this.cookieService = cookieService;
        this.panelOpen1 = false;
        this.panelOpen2 = false;
        this.close = new EventEmitter();
    }
    UserMenuComponent.prototype.logout = function () {
        this.close.emit();
        this.cookieService.deleteCookie("townscript-user");
        this.userService.updateUser(null);
        this.notificationService.success("You are logged out successfully!", 2000, "Dismiss");
    };
    UserMenuComponent.prototype.ngAfterViewInit = function () {
    };
    UserMenuComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input("panelOpen1"),
        tslib_1.__metadata("design:type", Boolean)
    ], UserMenuComponent.prototype, "panelOpen1", void 0);
    tslib_1.__decorate([
        Input("panelOpen2"),
        tslib_1.__metadata("design:type", Boolean)
    ], UserMenuComponent.prototype, "panelOpen2", void 0);
    tslib_1.__decorate([
        Input("user"),
        tslib_1.__metadata("design:type", Object)
    ], UserMenuComponent.prototype, "user", void 0);
    tslib_1.__decorate([
        Output("close"),
        tslib_1.__metadata("design:type", Object)
    ], UserMenuComponent.prototype, "close", void 0);
    UserMenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-menu',
            template: "<div class=\"user-menu  px-2 cursor-pointer\">\n    <div class=\"flex items-center border-b py-2 border-gray-300\">\n        <div class=\"mr-1 leading-none\">\n            <img class=\"rounded-full mr-2\" width=\"45\"\n                [src]=\"'https://s3.ap-south-1.amazonaws.com/townscript-testing/images/'+user?.s3imagename\" />\n        </div>\n        <div class=\"leading-tight\">\n            <span class=\"block text-lg text-gray-800\">{{user?.user}}</span>\n            <span class=\"text-xs text-gray-600 whitespace-nowrap\">View and edit profile</span>\n        </div>\n    </div>\n    <div class=\"menu mt-2 px-1\">\n        <ts-panel [disable]=\"false\">\n            <ts-panel-header (click)=\"panelOpen1=!panelOpen1\">\n                <div class=\"px-1 py-2 flex items-center border-b  border-gray-300 justify-between\"\n                    [class.border-dashed]=\"panelOpen1\" matRipple>\n                    <span class=\"text-gray-700\">\n                        Organizing Events\n                    </span>\n                    <i class=\"mdi mdi-chevron-down text-2xl color-blue\" [class.rotate-180]=\"panelOpen1\"></i>\n                </div>\n            </ts-panel-header>\n            <ts-panel-body [open]=\"panelOpen1\">\n                <div class=\"text-sm text-gray-800\">\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-calendar-today mr-2 color-blue text-xl\"></i>\n                        Manage Event\n                    </div>\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-cash mr-2 color-blue text-xl\"></i>\n                        Billings\n                    </div>\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-chart-line mr-2 color-blue text-xl\"></i>\n                        Reports\n                    </div>\n                    <div matRipple class=\"px-1 py-1 pb-2 flex items-center border-b border-gray-300\">\n                        <i class=\"mdi mdi-bullhorn mr-2 color-blue text-xl\"></i>\n                        Promotions\n                    </div>\n                </div>\n            </ts-panel-body>\n        </ts-panel>\n        <ts-panel [disable]=\"false\">\n            <ts-panel-header (click)=\"panelOpen2=!panelOpen2\">\n                <div class=\"px-1 py-2 flex items-center border-b  border-gray-300 justify-between\"\n                    [class.border-dashed]=\"panelOpen2\" matRipple>\n                    <span class=\"text-gray-700\">\n                        Attending Events\n                    </span>\n                    <i class=\"mdi mdi-chevron-down text-2xl color-blue\" [class.rotate-180]=\"panelOpen2\"></i>\n                </div>\n            </ts-panel-header>\n            <ts-panel-body [open]=\"panelOpen2\">\n                <div class=\"text-sm text-gray-800\">\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-ticket-account mr-2 color-blue text-xl\"></i>\n                        My Bookings\n                    </div>\n                    <div matRipple class=\"px-1 py-1 pb-2 flex items-center border-b border-gray-300\">\n                        <i class=\"mdi mdi-heart mr-2 color-blue text-xl \"></i>\n                        Following\n                    </div>\n                </div>\n            </ts-panel-body>\n        </ts-panel>\n        <div class=\"px-1 py-2 flex items-center justify-between\" (click)=\"logout()\" matRipple>\n            <span class=\"text-gray-700\">\n                Logout\n            </span>\n            <i class=\"mdi mdi-logout-variant text-2xl color-blue\"></i>\n        </div>\n    </div>\n</div>",
            styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}"]
        }),
        tslib_1.__metadata("design:paramtypes", [NotificationService, UserService, CookieService])
    ], UserMenuComponent);
    return UserMenuComponent;
}());
export { UserMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFPMUY7SUFPSSwyQkFBb0IsbUJBQXdDLEVBQVUsV0FBd0IsRUFBVSxhQUE0QjtRQUFoSCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUwvRyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFaEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJNUMsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUNELDJDQUFlLEdBQWY7SUFDQSxDQUFDO0lBQ0Qsb0NBQVEsR0FBUixjQUFhLENBQUM7SUFoQk87UUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQzs7eURBQTZCO0lBQzVCO1FBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7O3lEQUE2QjtJQUNsQztRQUFkLEtBQUssQ0FBQyxNQUFNLENBQUM7O21EQUFXO0lBQ1I7UUFBaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7b0RBQTRCO0lBTG5DLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6Qixtd0hBQXlDOztTQUU1QyxDQUFDO2lEQVEyQyxtQkFBbUIsRUFBdUIsV0FBVyxFQUF5QixhQUFhO09BUDNILGlCQUFpQixDQW9CN0I7SUFBRCx3QkFBQztDQUFBLEFBcEJELElBb0JDO1NBcEJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXItc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtdXNlci1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi91c2VyLW1lbnUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoXCJwYW5lbE9wZW4xXCIpIHBhbmVsT3BlbjE6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoXCJwYW5lbE9wZW4yXCIpIHBhbmVsT3BlbjI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoXCJ1c2VyXCIpIHVzZXI6IGFueTtcbiAgICBAT3V0cHV0KFwiY2xvc2VcIikgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHtcblxuICAgIH1cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UuZGVsZXRlQ29va2llKFwidG93bnNjcmlwdC11c2VyXCIpO1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIobnVsbCk7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zdWNjZXNzKFwiWW91IGFyZSBsb2dnZWQgb3V0IHN1Y2Nlc3NmdWxseSFcIiwgMjAwMCwgXCJEaXNtaXNzXCIpO1xuICAgIH1cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgfVxuICAgIG5nT25Jbml0KCkgeyB9XG5cbn1cbiJdfQ==