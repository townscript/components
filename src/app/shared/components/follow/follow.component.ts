import { Component, OnInit, Input } from '@angular/core';
import { LoginModalComponent } from '../../../modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { FollowService } from '../../services/follow.service';
import { UserService } from '../../services/user-service';


@Component({
    selector: 'app-follow',
    templateUrl: './follow.component.html',
    styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {

    @Input() text = 'Follow';
    textCopy: any;
    user: any;
    allFollowData: any;
    currentId: any;
    loggedIn = false;
    @Input() followedText = 'Following';
    hover: any;
    @Input() type = 'button';
    @Input() color = '#683592';

    followed = false;

    @Input() followTypeId;
    @Input() followType;

    constructor(private userService: UserService, private followService: FollowService, private dialog: MatDialog) { }

    ngOnInit() {
        this.textCopy = JSON.parse(JSON.stringify(this.text));
        this.userService.user.subscribe(data => {
            this.user = data;
            if (this.user && this.user.userId) {
                this.loggedIn = true;
                this.checkFollowStatus();
            } else {
                this.loggedIn = false;
            }
        });
    }
    checkFollowStatus = () => {
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
    }
    openLogin = () => {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.backdropClass = 'mat-dialog-bkg-container';
        this.dialog.open(LoginModalComponent, dialogConfig);
    }
    followedFn = () => {
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
        } else {
            this.text = 'Unfollowed';
            this.followService.unfollow(this.currentId).subscribe(res => {
                this.followed = false;
                this.text = this.textCopy;
                this.followService.getFollowData(this.user.userId);
            });
        }
    }

}
