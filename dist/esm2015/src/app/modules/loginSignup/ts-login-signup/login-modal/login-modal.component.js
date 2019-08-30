import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
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
        encapsulation: ViewEncapsulation.None,
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.mat-dialog-bkg-container{background:#414243;opacity:.7!important}@media (max-width:480px){.cdk-overlay-pane{height:100vh!important;max-width:100vw!important}}"]
    }),
    tslib_1.__metadata("design:paramtypes", [MatDialogRef])
], LoginModalComponent);
export { LoginModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpblNpZ251cC90cy1sb2dpbi1zaWdudXAvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVF4RCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUU5QixZQUFtQixTQUErQztRQUEvQyxjQUFTLEdBQVQsU0FBUyxDQUFzQztJQUM1RCxDQUFDO0lBRVAsUUFBUTtJQUNSLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0YsQ0FBQTtBQVhZLG1CQUFtQjtJQU4vQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLG1HQUEyQztRQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQzs2Q0FHOEIsWUFBWTtHQUYvQixtQkFBbUIsQ0FXL0I7U0FYWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBUc0xvZ2luU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi4vdHMtbG9naW4tc2lnbnVwLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4tbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi1tb2RhbC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUc0xvZ2luU2lnbnVwQ29tcG9uZW50PlxuICAgICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=