import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    LoginModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LoginModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login-modal',
            template: "<app-ts-login-signup [mode]=\"'dialog'\" (closeDialog)='close()'></app-ts-login-signup>",
            encapsulation: ViewEncapsulation.None,
            styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.mat-dialog-bkg-container{background:#414243;opacity:.7!important}@media (max-width:700px){.cdk-overlay-pane{height:100vh!important;width:100vw!important;max-width:100vw!important}}@media (min-width:700px){.cdk-overlay-pane{min-width:500px!important}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef])
    ], LoginModalComponent);
    return LoginModalComponent;
}());
export { LoginModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpblNpZ251cC90cy1sb2dpbi1zaWdudXAvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVF4RDtJQUVFLDZCQUFtQixTQUErQztRQUEvQyxjQUFTLEdBQVQsU0FBUyxDQUFzQztJQUM1RCxDQUFDO0lBRVAsc0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxtQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBVlUsbUJBQW1CO1FBTi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsbUdBQTJDO1lBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO2lEQUc4QixZQUFZO09BRi9CLG1CQUFtQixDQVcvQjtJQUFELDBCQUFDO0NBQUEsQUFYRCxJQVdDO1NBWFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgVHNMb2dpblNpZ251cENvbXBvbmVudCB9IGZyb20gJy4uL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4tbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VHNMb2dpblNpZ251cENvbXBvbmVudD5cbiAgICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuIl19