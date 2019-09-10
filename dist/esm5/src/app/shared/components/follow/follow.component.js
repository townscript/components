import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { LoginModalComponent } from '../../../modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { FollowService } from '../../services/follow.service';
import { UserService } from '../../services/user-service';
var FollowComponent = /** @class */ (function () {
    function FollowComponent(userService, followService, dialog) {
        var _this = this;
        this.userService = userService;
        this.followService = followService;
        this.dialog = dialog;
        this.text = 'Follow';
        this.loggedIn = false;
        this.followedText = 'Following';
        this.type = 'button';
        this.color = '#553c9a';
        this.followed = false;
        this.checkFollowStatus = function () {
            if (!_this.followTypeId || !_this.followType) {
                return;
            }
            _this.followService.followData.subscribe(function (res) {
                if (res) {
                    _this.allFollowData = res;
                    _this.followed = _this.allFollowData.map(function (ele) { return ele.typeId; }).indexOf(_this.followTypeId) > -1;
                    var currentFollowed = _this.allFollowData.filter(function (ele) { return ele.typeId === _this.followTypeId && ele.type === _this.followType; });
                    if (currentFollowed && currentFollowed.length > 0) {
                        _this.currentId = currentFollowed[0].id;
                    }
                    if (_this.followed) {
                        _this.text = _this.followedText;
                    }
                }
            });
        };
        this.openLogin = function () {
            var dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.backdropClass = 'mat-dialog-bkg-container';
            _this.dialog.open(LoginModalComponent, dialogConfig);
        };
        this.followedFn = function () {
            if (!_this.loggedIn) {
                _this.openLogin();
                return;
            }
            if (!_this.followed) {
                _this.text = 'Following';
                _this.followService.createFollowData(_this.followType, _this.followTypeId, _this.user.userId).subscribe(function (res) {
                    _this.followed = true;
                    _this.text = _this.followedText;
                    _this.followService.getFollowData(_this.user.userId);
                });
            }
            else {
                _this.text = 'Unfollowed';
                _this.followService.unfollow(_this.currentId).subscribe(function (res) {
                    _this.followed = false;
                    _this.text = _this.textCopy;
                    _this.followService.getFollowData(_this.user.userId);
                });
            }
        };
    }
    FollowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.textCopy = this.text;
        this.userService.user.subscribe(function (data) {
            _this.user = data;
            if (_this.user && _this.user.userId) {
                _this.loggedIn = true;
                _this.checkFollowStatus();
            }
            else {
                _this.loggedIn = false;
            }
        });
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
    return FollowComponent;
}());
export { FollowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sbG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZvbGxvdy9mb2xsb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUNySCxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFRMUQ7SUFrQkkseUJBQW9CLFdBQXdCLEVBQVUsYUFBNEIsRUFBVSxNQUFpQjtRQUE3RyxpQkFBa0g7UUFBOUYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFoQnBHLFNBQUksR0FBRyxRQUFRLENBQUM7UUFLekIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNSLGlCQUFZLEdBQUcsV0FBVyxDQUFDO1FBRTNCLFNBQUksR0FBRyxRQUFRLENBQUM7UUFDaEIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUUzQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBbUJqQixzQkFBaUIsR0FBRztZQUNoQixJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3hDLE9BQU87YUFDVjtZQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7Z0JBQ3ZDLElBQUksR0FBRyxFQUFFO29CQUNMLEtBQUksQ0FBQyxhQUFh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QUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0gsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDekI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE3QlE7UUFBUixLQUFLLEVBQUU7O2lEQUFpQjtJQU1oQjtRQUFSLEtBQUssRUFBRTs7eURBQTRCO0lBRTNCO1FBQVIsS0FBSyxFQUFFOztpREFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7O2tEQUFtQjtJQUlsQjtRQUFSLEtBQUssRUFBRTs7eURBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7dURBQVk7SUFoQlgsZUFBZTtRQUwzQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0Qiw0K0JBQXNDOztTQUV6QyxDQUFDO2lEQW1CbUMsV0FBVyxFQUF5QixhQUFhLEVBQWtCLFNBQVM7T0FsQnBHLGVBQWUsQ0ErRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQS9FRCxJQStFQztTQS9FWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9sb2dpblNpZ251cC90cy1sb2dpbi1zaWdudXAvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdERpYWxvZ0NvbmZpZywgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRm9sbG93U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZvbGxvdy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1mb2xsb3cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb2xsb3cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2ZvbGxvdy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvbGxvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSB0ZXh0ID0gJ0ZvbGxvdyc7XG4gICAgdGV4dENvcHk6IGFueTtcbiAgICB1c2VyOiBhbnk7XG4gICAgYWxsRm9sbG93RGF0YTogYW55O1xuICAgIGN1cnJlbnRJZDogYW55O1xuICAgIGxvZ2dlZEluID0gZmFsc2U7XG4gICAgQElucHV0KCkgZm9sbG93ZWRUZXh0ID0gJ0ZvbGxvd2luZyc7XG4gICAgaG92ZXI6IGFueTtcbiAgICBASW5wdXQoKSB0eXBlID0gJ2J1dHRvbic7XG4gICAgQElucHV0KCkgY29sb3IgPSAnIzU1M2M5YSc7XG5cbiAgICBmb2xsb3dlZCA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgZm9sbG93VHlwZUlkO1xuICAgIEBJbnB1dCgpIGZvbGxvd1R5cGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBmb2xsb3dTZXJ2aWNlOiBGb2xsb3dTZXJ2aWNlLCBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRleHRDb3B5ID0gdGhpcy50ZXh0O1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVzZXIuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyID0gZGF0YTtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXIgJiYgdGhpcy51c2VyLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGb2xsb3dTdGF0dXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hlY2tGb2xsb3dTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5mb2xsb3dUeXBlSWQgfHwgIXRoaXMuZm9sbG93VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9sbG93U2VydmljZS5mb2xsb3dEYXRhLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsRm9sbG93RGF0YSA9IHJlcztcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd2VkID0gdGhpcy5hbGxGb2xsb3dEYXRhLm1hcChlbGUgPT4gZWxlLnR5cGVJZCkuaW5kZXhPZih0aGlzLmZvbGxvd1R5cGVJZCkgPiAtMTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Rm9sbG93ZWQgPSB0aGlzLmFsbEZvbGxvd0RhdGEuZmlsdGVyKGVsZSA9PiBlbGUudHlwZUlkID09PSB0aGlzLmZvbGxvd1R5cGVJZCAmJiBlbGUudHlwZSA9PT0gdGhpcy5mb2xsb3dUeXBlKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEZvbGxvd2VkICYmIGN1cnJlbnRGb2xsb3dlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudElkID0gY3VycmVudEZvbGxvd2VkWzBdLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb2xsb3dlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmZvbGxvd2VkVGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvcGVuTG9naW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcbiAgICAgICAgZGlhbG9nQ29uZmlnLmRpc2FibGVDbG9zZSA9IGZhbHNlO1xuICAgICAgICBkaWFsb2dDb25maWcuYXV0b0ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgZGlhbG9nQ29uZmlnLmJhY2tkcm9wQ2xhc3MgPSAnbWF0LWRpYWxvZy1ia2ctY29udGFpbmVyJztcbiAgICAgICAgdGhpcy5kaWFsb2cub3BlbihMb2dpbk1vZGFsQ29tcG9uZW50LCBkaWFsb2dDb25maWcpO1xuICAgIH1cbiAgICBmb2xsb3dlZEZuID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubG9nZ2VkSW4pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkxvZ2luKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmZvbGxvd2VkKSB7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSAnRm9sbG93aW5nJztcbiAgICAgICAgICAgIHRoaXMuZm9sbG93U2VydmljZS5jcmVhdGVGb2xsb3dEYXRhKHRoaXMuZm9sbG93VHlwZSwgdGhpcy5mb2xsb3dUeXBlSWQsIHRoaXMudXNlci51c2VySWQpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9IHRoaXMuZm9sbG93ZWRUZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sbG93U2VydmljZS5nZXRGb2xsb3dEYXRhKHRoaXMudXNlci51c2VySWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSAnVW5mb2xsb3dlZCc7XG4gICAgICAgICAgICB0aGlzLmZvbGxvd1NlcnZpY2UudW5mb2xsb3codGhpcy5jdXJyZW50SWQpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sbG93ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLnRleHRDb3B5O1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sbG93U2VydmljZS5nZXRGb2xsb3dEYXRhKHRoaXMudXNlci51c2VySWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==