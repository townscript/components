import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let LoginTopContentComponent = class LoginTopContentComponent {
    constructor() { }
    ngOnInit() {
        console.log('whats the condition', this.condition);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], LoginTopContentComponent.prototype, "condition", void 0);
LoginTopContentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login-top-content',
        template: "<div *ngIf=\"condition == 'ifUnverified' \" class=\"pb-2\">\n        <p class=\"text-2xl text-gray-900\"><strong>Let's get started</strong></p>\n        <p class=\"text-base text-gray-500\">Your one stop tool for organizing events</p>\n</div>\n<div *ngIf=\"condition == 'ifSignUp'\" class=\"pb-2\">\n        <p class=\"text-2xl\"><strong>Sign up</strong></p>\n        <p class=\"text-base text-gray-500\">Welcome to Townscript</p>\n</div>\n<div *ngIf=\"condition == 'showVerifyEmail'\" class=\"pb-2\">\n        <p class=\"text-2xl\"><strong>You're almost done</strong></p>\n        <p class=\"text-base text-gray-500\">We just need to verify your e-mail</p>\n</div>\n<div *ngIf=\"condition == 'ifSignIn'\" class=\"pb-3\">\n        <p class=\"text-2xl\"><strong>Sign in</strong></p>\n</div>\n<div *ngIf=\"condition == 'showResetPassword'\" class=\"pb-3\">\n        <p class=\"text-2xl\"><strong>Forgot password</strong></p>\n        <p class=\"text-base text-gray-500\">Don't worry, we'll help you reset it</p>\n</div>",
        styles: [""]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LoginTopContentComponent);
export { LoginTopContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tdG9wLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpblNpZ251cC90cy1sb2dpbi1zaWdudXAvbG9naW4tdG9wLWNvbnRlbnQvbG9naW4tdG9wLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQUduQyxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUVGLENBQUE7QUFQVTtJQUFSLEtBQUssRUFBRTs7MkRBQW1CO0FBRmhCLHdCQUF3QjtJQUxwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLHFnQ0FBaUQ7O0tBRWxELENBQUM7O0dBQ1csd0JBQXdCLENBU3BDO1NBVFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2dpbi10b3AtY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi10b3AtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLXRvcC1jb250ZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Ub3BDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBjb25kaXRpb246IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnd2hhdHMgdGhlIGNvbmRpdGlvbicsIHRoaXMuY29uZGl0aW9uKTtcbiAgfVxuXG59XG4iXX0=