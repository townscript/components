import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
let LoginModalComponent = class LoginModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
};
LoginModalComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login-modal',
        template: "<app-ts-login-signup [mode]=\"'dialog'\" (closeDialog)='close()'></app-ts-login-signup>",
        styles: ["::ng-deep .mat-dialog-bkg-container{background:#414243;opacity:.7!important}"]
    }),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef])
], LoginModalComponent);
export { LoginModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpblNpZ251cC90cy1sb2dpbi1zaWdudXAvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU94RCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUU5QixZQUFtQixTQUErQztRQUEvQyxjQUFTLEdBQVQsU0FBUyxDQUFzQztJQUM1RCxDQUFDO0lBRVAsUUFBUTtJQUNSLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0YsQ0FBQTtBQVhZLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLG1HQUEyQzs7S0FFNUMsQ0FBQzs2Q0FHOEIsWUFBWTtHQUYvQixtQkFBbUIsQ0FXL0I7U0FYWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IFRzTG9naW5TaWdudXBDb21wb25lbnQgfSBmcm9tICcuLi90cy1sb2dpbi1zaWdudXAuY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2dpbi1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRzTG9naW5TaWdudXBDb21wb25lbnQ+XG4gICAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==