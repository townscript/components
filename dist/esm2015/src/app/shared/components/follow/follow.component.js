import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { LoginModalComponent } from '../../../modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { FollowService } from '../../services/follow.service';
import { UserService } from '../../services/user-service';
let FollowComponent = class FollowComponent {
    constructor(userService, followService, dialog) {
        this.userService = userService;
        this.followService = followService;
        this.dialog = dialog;
        this.text = 'Follow';
        this.loggedIn = false;
        this.followedText = 'Following';
        this.type = 'button';
        this.color = '#553c9a';
        this.followed = false;
        this.checkFollowStatus = () => {
            if (!this.followTypeId || !this.followType) {
                return;
            }
            this.followService.followData.subscribe(res => {
                if (res) {
                    this.allFollowData = res;
                    this.followed = this.allFollowData.map(ele => ele.typeId).indexOf(this.followTypeId) > -1;
                    const currentFollowed = this.allFollowData.filter(ele => ele.typeId === this.followTypeId && ele.type === this.followType);
                    if (currentFollowed && currentFollowed.length > 0) {
                        this.currentId = currentFollowed[0].id;
                    }
                    if (this.followed) {
                        this.text = this.followedText;
                    }
                }
            });
        };
        this.openLogin = () => {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.backdropClass = 'mat-dialog-bkg-container';
            this.dialog.open(LoginModalComponent, dialogConfig);
        };
        this.followedFn = () => {
            if (!this.loggedIn) {
                this.openLogin();
                return;
            }
            if (!this.followed) {
                this.text = 'Following';
                this.followService.createFollowData(this.followType, this.followTypeId, this.user.userId).subscribe(res => {
                    this.followed = true;
                    this.text = this.followedText;
                    this.followService.getFollowData(this.user.userId);
                });
            }
            else {
                this.text = 'Unfollowed';
                this.followService.unfollow(this.currentId).subscribe(res => {
                    this.followed = false;
                    this.text = this.textCopy;
                    this.followService.getFollowData(this.user.userId);
                });
            }
        };
    }
    ngOnInit() {
        this.textCopy = this.text;
        this.userService.user.subscribe(data => {
            this.user = data;
            if (this.user && this.user.userId) {
                this.loggedIn = true;
                this.checkFollowStatus();
            }
            else {
                this.loggedIn = false;
            }
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FollowComponent.prototype, "text", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FollowComponent.prototype, "followedText", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FollowComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FollowComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FollowComponent.prototype, "followTypeId", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FollowComponent.prototype, "followType", void 0);
FollowComponent = tslib_1.__decorate([
    Component({
        selector: 'app-follow',
        template: "<div class=\"follow-container rounded-full cursor-pointer\" [class.flex]=\"type=='icon'\" (click)=\"followedFn()\"\n    (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\" [class.followed]=\"followed\">\n    <div [style.background-color]=\"hover && type=='button' ? color : 'transparent'\"\n        [style.border-color]=\"type=='button' ? color : 'transparent'\" [class.rounded-full]=\"type=='button'\"\n        class=\"text-sm flex items-center justify-around antialiased font-bold border-purple-800\"\n        [style.color]=\"hover && type=='button'?'white':color\" [ngClass]=\"{'py-2 px-4 border-2':type=='button'}\">\n        <span class=\"text-sm mr-1\" *ngIf=\"type=='button'\">{{text}}</span>\n        <i class=\"mdi mdi-heart-outline text-base antialiased\" [class.text-2xl]=\"type=='icon'\" *ngIf=\"!followed\"></i>\n        <i class=\"mdi mdi-heart text-base antialiased followed-heart\" [class.text-2xl]=\"type=='icon'\"\n            *ngIf=\"followed\"></i>\n    </div>\n</div>",
        styles: [".follow-container{max-width:10rem;text-align:center}.follow-container div{-webkit-transition:.1s;transition:.1s}.follow-container div:active{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes dhadkan{0%{-webkit-transform:scale(.7);transform:scale(.7)}50%{-webkit-transform:scale(1.3);transform:scale(1.3)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes dhadkan{0%{-webkit-transform:scale(.7);transform:scale(.7)}50%{-webkit-transform:scale(1.3);transform:scale(1.3)}100%{-webkit-transform:scale(1);transform:scale(1)}}.follow-container.followed{-webkit-animation-name:dhadkan;animation-name:dhadkan;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.2s;animation-duration:.2s}.follow-container .followed-heart{color:#eb4b4b}.follow-container div:hover{color:#c2b5b5}"]
    }),
    tslib_1.__metadata("design:paramtypes", [UserService, FollowService, MatDialog])
], FollowComponent);
export { FollowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sbG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUNySCxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFRMUQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQWtCeEIsWUFBb0IsV0FBd0IsRUFBVSxhQUE0QixFQUFVLE1BQWlCO1FBQXpGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBaEJwRyxTQUFJLEdBQUcsUUFBUSxDQUFDO1FBS3pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDUixpQkFBWSxHQUFHLFdBQVcsQ0FBQztRQUUzQixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFFM0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQW1CakIsc0JBQWlCLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDeEMsT0FBTzthQUNWO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLEdB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SSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDekI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FnREosQ0FBQTtBQTdFWTtJQUFSLEtBQUssRUFBRTs7NkNBQWlCO0FBTWhCO0lBQVIsS0FBSyxFQUFFOztxREFBNEI7QUFFM0I7SUFBUixLQUFLLEVBQUU7OzZDQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTs7OENBQW1CO0FBSWxCO0lBQVIsS0FBSyxFQUFFOztxREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFOzttREFBWTtBQWhCWCxlQUFlO0lBTDNCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLDQrQkFBc0M7O0tBRXpDLENBQUM7NkNBbUJtQyxXQUFXLEVBQXlCLGFBQWEsRUFBa0IsU0FBUztHQWxCcEcsZUFBZSxDQStFM0I7U0EvRVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9naW5Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvbG9naW5TaWdudXAvdHMtbG9naW4tc2lnbnVwL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXREaWFsb2dDb25maWcsIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvbGxvd1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb2xsb3cuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZm9sbG93JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZm9sbG93LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9mb2xsb3cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb2xsb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgdGV4dCA9ICdGb2xsb3cnO1xuICAgIHRleHRDb3B5OiBhbnk7XG4gICAgdXNlcjogYW55O1xuICAgIGFsbEZvbGxvd0RhdGE6IGFueTtcbiAgICBjdXJyZW50SWQ6IGFueTtcbiAgICBsb2dnZWRJbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGZvbGxvd2VkVGV4dCA9ICdGb2xsb3dpbmcnO1xuICAgIGhvdmVyOiBhbnk7XG4gICAgQElucHV0KCkgdHlwZSA9ICdidXR0b24nO1xuICAgIEBJbnB1dCgpIGNvbG9yID0gJyM1NTNjOWEnO1xuXG4gICAgZm9sbG93ZWQgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGZvbGxvd1R5cGVJZDtcbiAgICBASW5wdXQoKSBmb2xsb3dUeXBlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgZm9sbG93U2VydmljZTogRm9sbG93U2VydmljZSwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50ZXh0Q29weSA9IHRoaXMudGV4dDtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS51c2VyLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IGRhdGE7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyICYmIHRoaXMudXNlci51c2VySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9sbG93U3RhdHVzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoZWNrRm9sbG93U3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZm9sbG93VHlwZUlkIHx8ICF0aGlzLmZvbGxvd1R5cGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvbGxvd1NlcnZpY2UuZm9sbG93RGF0YS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEZvbGxvd0RhdGEgPSByZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2xsb3dlZCA9IHRoaXMuYWxsRm9sbG93RGF0YS5tYXAoZWxlID0+IGVsZS50eXBlSWQpLmluZGV4T2YodGhpcy5mb2xsb3dUeXBlSWQpID4gLTE7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEZvbGxvd2VkID0gdGhpcy5hbGxGb2xsb3dEYXRhLmZpbHRlcihlbGUgPT4gZWxlLnR5cGVJZCA9PT0gdGhpcy5mb2xsb3dUeXBlSWQgJiYgZWxlLnR5cGUgPT09IHRoaXMuZm9sbG93VHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRGb2xsb3dlZCAmJiBjdXJyZW50Rm9sbG93ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IGN1cnJlbnRGb2xsb3dlZFswXS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9sbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5mb2xsb3dlZFRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3BlbkxvZ2luID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG4gICAgICAgIGRpYWxvZ0NvbmZpZy5kaXNhYmxlQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgZGlhbG9nQ29uZmlnLmF1dG9Gb2N1cyA9IHRydWU7XG4gICAgICAgIGRpYWxvZ0NvbmZpZy5iYWNrZHJvcENsYXNzID0gJ21hdC1kaWFsb2ctYmtnLWNvbnRhaW5lcic7XG4gICAgICAgIHRoaXMuZGlhbG9nLm9wZW4oTG9naW5Nb2RhbENvbXBvbmVudCwgZGlhbG9nQ29uZmlnKTtcbiAgICB9XG4gICAgZm9sbG93ZWRGbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmxvZ2dlZEluKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Mb2dpbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5mb2xsb3dlZCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gJ0ZvbGxvd2luZyc7XG4gICAgICAgICAgICB0aGlzLmZvbGxvd1NlcnZpY2UuY3JlYXRlRm9sbG93RGF0YSh0aGlzLmZvbGxvd1R5cGUsIHRoaXMuZm9sbG93VHlwZUlkLCB0aGlzLnVzZXIudXNlcklkKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmZvbGxvd2VkVGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd1NlcnZpY2UuZ2V0Rm9sbG93RGF0YSh0aGlzLnVzZXIudXNlcklkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gJ1VuZm9sbG93ZWQnO1xuICAgICAgICAgICAgdGhpcy5mb2xsb3dTZXJ2aWNlLnVuZm9sbG93KHRoaXMuY3VycmVudElkKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy50ZXh0Q29weTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd1NlcnZpY2UuZ2V0Rm9sbG93RGF0YSh0aGlzLnVzZXIudXNlcklkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=