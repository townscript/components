import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from '../../ts-login-signup/cookie.service';
import { UserService } from '../../../../../shared/services/user-service';
import { NotificationService } from '../../../../../shared/services/notification.service';
let UserMenuComponent = class UserMenuComponent {
    constructor(notificationService, userService, cookieService) {
        this.notificationService = notificationService;
        this.userService = userService;
        this.cookieService = cookieService;
        this.panelOpen1 = false;
        this.panelOpen2 = false;
        this.close = new EventEmitter();
    }
    logout() {
        this.close.emit();
        this.cookieService.deleteCookie("townscript-user");
        this.userService.updateUser(null);
        this.notificationService.success("You are logged out successfully!", 2000, "Dismiss");
    }
    ngAfterViewInit() {
    }
    ngOnInit() { }
};
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
export { UserMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtaGVhZGVyL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFPMUYsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFPMUIsWUFBb0IsbUJBQXdDLEVBQVUsV0FBd0IsRUFBVSxhQUE0QjtRQUFoSCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUwvRyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFaEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJNUMsQ0FBQztJQUNELE1BQU07UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUNELGVBQWU7SUFDZixDQUFDO0lBQ0QsUUFBUSxLQUFLLENBQUM7Q0FFakIsQ0FBQTtBQWxCd0I7SUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQzs7cURBQTZCO0FBQzVCO0lBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7O3FEQUE2QjtBQUNsQztJQUFkLEtBQUssQ0FBQyxNQUFNLENBQUM7OytDQUFXO0FBQ1I7SUFBaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7Z0RBQTRCO0FBTG5DLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6Qixtd0hBQXlDOztLQUU1QyxDQUFDOzZDQVEyQyxtQkFBbUIsRUFBdUIsV0FBVyxFQUF5QixhQUFhO0dBUDNILGlCQUFpQixDQW9CN0I7U0FwQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4uLy4uL3RzLWxvZ2luLXNpZ251cC9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy91c2VyLXNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXVzZXItbWVudScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXItbWVudS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdXNlci1tZW51LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXNlck1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KFwicGFuZWxPcGVuMVwiKSBwYW5lbE9wZW4xOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KFwicGFuZWxPcGVuMlwiKSBwYW5lbE9wZW4yOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KFwidXNlclwiKSB1c2VyOiBhbnk7XG4gICAgQE91dHB1dChcImNsb3NlXCIpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlKSB7XG5cbiAgICB9XG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5jb29raWVTZXJ2aWNlLmRlbGV0ZUNvb2tpZShcInRvd25zY3JpcHQtdXNlclwiKTtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVVc2VyKG51bGwpO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2VzcyhcIllvdSBhcmUgbG9nZ2VkIG91dCBzdWNjZXNzZnVsbHkhXCIsIDIwMDAsIFwiRGlzbWlzc1wiKTtcbiAgICB9XG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG59XG4iXX0=