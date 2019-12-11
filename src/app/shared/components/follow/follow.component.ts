import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { LoginModalComponent } from '../../../modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { FollowService } from '../../services/follow.service';
import { UserService } from '../../services/user-service';


@Component({
    selector: 'app-follow',
    templateUrl: './follow.component.html',
    styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit, OnChanges {

    @Input() text = 'Follow';
    @Input() followedText = 'Following';
    @Input() type = 'button';
    @Input() color = '#683592';
    @Input() followTypeId;
    @Input() followType;
    @Output() status: any = new EventEmitter<any>();

    textCopy: string;
    hovered: boolean;
    user: any;
    allFollowData: any;
    currentId: any;
    loggedIn = false;
    followed = false;


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

    emitFollowStatus = (): void => {
        this.status.emit(this.followed);
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
                this.emitFollowStatus();
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
    followedFn = ($event: any) => {
        $event.stopPropagation();
        $event.preventDefault();
        if (!this.loggedIn) {
            this.openLogin();
            return;
        }
        if (!this.followed) {
            this.followService.createFollowData(this.followType, this.followTypeId, this.user.userId).subscribe(res => {
                this.followed = true;
                this.text = this.followedText;
                this.followService.getFollowData(this.user.userId);
            });
        } else {
            this.followService.unfollow(this.currentId).subscribe(res => {
                this.followed = false;
                this.text = this.textCopy;
                this.followService.getFollowData(this.user.userId);
            });
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['followTypeId'] || changes['followType']) {
        this.checkFollowStatus();
      }
    }

}
