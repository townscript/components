import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from '@base/core/cookie.service';
import { UserService } from '@base/shared/services/user-service';
import { NotificationService } from '@base/shared/services/notification.service';
import { config } from '@base/core/app-config';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

    @Input() panelOpen1 = false;
    @Input() panelOpen2 = false;
    @Input() user: any;
    @Output() close = new EventEmitter();

    host = config.baseUrl;
    s3BucketUrl = config.s3BaseUrl + config.s3Bucket;

    constructor(private notificationService: NotificationService, private userService: UserService, private cookieService: CookieService) {

    }
    logout = () => {
        this.close.emit();
        this.cookieService.deleteCookie('townscript-user');
        this.userService.updateUser(null);
        this.notificationService.success('You are logged out successfully!', 2000, 'Dismiss');
    }
    ngOnInit() { }

}
