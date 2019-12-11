import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from '../../../../../core/cookie.service';
import { UserService } from '../../../../../shared/services/user-service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { config } from '../../../../../core/app-config';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

    @Input() panelOpen1 = true;
    @Input() panelOpen2 = true;
    @Input() user: any;
    @Output() close = new EventEmitter();

    host = config.baseUrl;
    s3BucketUrl = config.s3BaseUrl + config.s3Bucket;

    constructor(private notificationService: NotificationService, private userService: UserService, private cookieService: CookieService) {

    }
    logout = () => {
        this.close.emit({logout: true});
        this.cookieService.deleteCookie('townscript-user');
        this.userService.updateUser(null);        
    }
    ngOnInit() { }

}
