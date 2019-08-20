import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HamburgerMenuComponent = class HamburgerMenuComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
};
HamburgerMenuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-hamburger-menu',
        template: "<nav role=\"navigation\">\n    <div class=\"ham-container position-relative cursor-pointer\">\n        <div class=\"hamburger position-relative\">\n            <!-- <input type=\"checkbox\" /> -->\n            <div class=\"spans\" (click)=\"active=!active\">\n                <span class=\"block background-blue\" [class.active]=\"active\"></span>\n                <span class=\"block background-blue\" [class.active]=\"active\"></span>\n                <span class=\"block background-blue\" [class.active]=\"active\"></span>\n            </div>\n            <div class=\"overlay fixed bg-black w-full h-full\" *ngIf=\"active\"></div>\n            <ul class=\"menu fixed h-full px-4\" [class.active]=\"active\">\n                <img class=\"mb-10\" src=\"assets/images/ts-logo.svg\" class=\"logo\" />\n                <ts-panel [disable]=\"false\">\n                    <ts-panel-header (click)=\"panelOpen=!panelOpen\">\n                        <div>Organizing Events</div>\n                    </ts-panel-header>\n                    <ts-panel-body [open]=\"panelOpen\">\n                        <div>\n                            <div>Manage Event</div>\n                            <div>Billings</div>\n                            <div>Reports</div>\n                            <div>Promotions</div>\n                        </div>\n                    </ts-panel-body>\n                </ts-panel>\n                <ts-panel [disable]=\"false\">\n                    <ts-panel-header (click)=\"panelOpen2=!panelOpen2\">\n                        <div>Attending Events</div>\n                    </ts-panel-header>\n                    <ts-panel-body [open]=\"panelOpen2\">\n                        <div>\n                            <div>My Bookings</div>\n                            <div>Following</div>\n                        </div>\n                    </ts-panel-body>\n                </ts-panel>\n                <a href=\"#\">\n                    <li>My Profile</li>\n                </a>\n                <a href=\"#\">\n                    <li>Logout</li>\n                </a>\n            </ul>\n        </div>\n    </div>\n</nav>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ham-container{z-index:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ham-container .hamburger span{width:28px;height:3.2px;margin-bottom:5px;position:relative;border-radius:3px;z-index:1;-webkit-transform-origin:4px 0;transform-origin:4px 0;-webkit-transition:background .5s cubic-bezier(.77,.2,.05,1),margin .5s cubic-bezier(.77,.2,.05,1),opacity .55s,-webkit-transform .5s cubic-bezier(.77,.2,.05,1);transition:transform .5s cubic-bezier(.77,.2,.05,1),background .5s cubic-bezier(.77,.2,.05,1),margin .5s cubic-bezier(.77,.2,.05,1),opacity .55s,-webkit-transform .5s cubic-bezier(.77,.2,.05,1)}.ham-container .hamburger span:first-child{-webkit-transform-origin:0 0;transform-origin:0 0}.ham-container .hamburger span:last-child{margin-bottom:0}.ham-container .hamburger span:nth-last-child(2){-webkit-transform-origin:0 100%;transform-origin:0 100%}.ham-container .hamburger span.active{opacity:1;margin-left:240px;-webkit-transform:rotate(45deg) translate(-14px,-16px);transform:rotate(45deg) translate(-14px,-16px);background:#8c8c8c}.ham-container .hamburger span.active:nth-last-child(3){opacity:0;-webkit-transform:rotate(0) scale(.2,.2);transform:rotate(0) scale(.2,.2)}.ham-container .hamburger span.active:nth-last-child(2){-webkit-transform:rotate(-45deg) translate(0,4px);transform:rotate(-45deg) translate(0,4px)}.ham-container .hamburger span.active~ul{-webkit-transform:none;transform:none}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:.5}}@keyframes fadeIn{0%{opacity:0}100%{opacity:.5}}.ham-container .overlay{top:0;left:0;opacity:.5;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.ham-container .menu{top:0;left:0;width:300px;padding-top:15px;background:#fafafa;box-shadow:0 2px 4px 0 rgba(0,0,0,.11);list-style-type:none;-webkit-font-smoothing:antialiased;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:translate(-100%,0);transform:translate(-100%,0);-webkit-transition:-webkit-transform .5s cubic-bezier(.77,.2,.05,1);transition:transform .5s cubic-bezier(.77,.2,.05,1);transition:transform .5s cubic-bezier(.77,.2,.05,1),-webkit-transform .5s cubic-bezier(.77,.2,.05,1)}.ham-container .menu .logo{height:40px}.ham-container .menu.active{-webkit-transform:none;transform:none}.ham-container .menu li{padding:10px 0}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], HamburgerMenuComponent);
export { HamburgerMenuComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvY29tcG9uZW50cy90cy1oZWFkZXIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFzRCxNQUFNLGVBQWUsQ0FBQztBQVE5RixJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUsvQjtJQUVBLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztJQUNELFFBQVE7SUFDUixDQUFDO0NBRUosQ0FBQTtBQWZZLHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLG1uRUFBOEM7O0tBRWpELENBQUM7O0dBQ1csc0JBQXNCLENBZWxDO1NBZlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWhhbWJ1cmdlci1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaGFtYnVyZ2VyLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2hhbWJ1cmdlci1tZW51LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwYW5lbE9wZW46IGFueTtcbiAgICBwYW5lbE9wZW4yOiBhbnk7XG4gICAgYWN0aXZlOiBhbnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iXX0=