import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var LoginTopContentComponent = /** @class */ (function () {
    function LoginTopContentComponent() {
    }
    LoginTopContentComponent.prototype.ngOnInit = function () {
        console.log('whats the condition', this.condition);
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
    return LoginTopContentComponent;
}());
export { LoginTopContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tdG9wLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpblNpZ251cC90cy1sb2dpbi1zaWdudXAvbG9naW4tdG9wLWNvbnRlbnQvbG9naW4tdG9wLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RDtJQUdFO0lBQWdCLENBQUM7SUFFakIsMkNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFMUTtRQUFSLEtBQUssRUFBRTs7K0RBQW1CO0lBRmhCLHdCQUF3QjtRQUxwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLHFnQ0FBaUQ7O1NBRWxELENBQUM7O09BQ1csd0JBQXdCLENBU3BDO0lBQUQsK0JBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luLXRvcC1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLXRvcC1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4tdG9wLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblRvcENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbmRpdGlvbjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCd3aGF0cyB0aGUgY29uZGl0aW9uJywgdGhpcy5jb25kaXRpb24pO1xuICB9XG5cbn1cbiJdfQ==