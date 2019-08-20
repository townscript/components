import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from '../../ts-login-signup/cookie.service';
import { UserService } from '../../../../../shared/services/user-service';
import { NotificationService } from '../../../../../shared/services/notification.service';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

    @Input("panelOpen1") panelOpen1: boolean = false;
    @Input("panelOpen2") panelOpen2: boolean = false;
    @Input("user") user: any;
    @Output("close") close = new EventEmitter();

    constructor(private notificationService: NotificationService, private userService: UserService, private cookieService: CookieService) {

    }
    logout() {
        this.close.emit();
        this.cookieService.deleteCookie("townscript-user");
        this.userService.updateUser(null);
        this.notificationService.success("You are logged out successfully!", 2000, "Dismiss");
    }
    ngAfterViewInit() {
    }
    ngOnInit() { }

}