import { OnInit, EventEmitter } from '@angular/core';
import { CookieService } from '../../ts-login-signup/cookie.service';
import { UserService } from '../../../../../shared/services/user-service';
import { NotificationService } from '../../../../../shared/services/notification.service';
export declare class UserMenuComponent implements OnInit {
    private notificationService;
    private userService;
    private cookieService;
    panelOpen1: boolean;
    panelOpen2: boolean;
    user: any;
    close: EventEmitter<{}>;
    constructor(notificationService: NotificationService, userService: UserService, cookieService: CookieService);
    logout(): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
}