import * as tslib_1 from "tslib";
import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../../modules/layout/components/ts-login-signup/cookie.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
let UserService = class UserService {
    constructor(cookieService, document, platformId) {
        this.cookieService = cookieService;
        this.document = document;
        this.platformId = platformId;
        this.user$ = new BehaviorSubject(null);
        this.user = this.user$.asObservable();
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
        if (this.documentIsAccessible) {
            let user = this.cookieService.getCookie("townscript-user");
            console.log("got user from cookie" + user);
            if (user != null && user.length > 0) {
                this.updateUser(JSON.parse(user));
            }
        }
    }
    updateUser(data) {
        this.user$.next(data);
    }
};
UserService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(1, Inject(DOCUMENT)),
    tslib_1.__param(2, Inject(PLATFORM_ID)),
    tslib_1.__metadata("design:paramtypes", [CookieService, Object, InjectionToken])
], UserService);
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlcnZpY2VzL3VzZXItc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMvRixPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLOUQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQU1wQixZQUFvQixhQUE0QixFQUE0QixRQUFhLEVBQ3hELFVBQWtDO1FBRC9DLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDeEQsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUFMM0QsVUFBSyxHQUE0QixJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUUzRSxTQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUk3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9ELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0osQ0FBQTtBQXJCWSxXQUFXO0lBRHZCLFVBQVUsRUFBRTtJQU8wQyxtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDOUQsbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzZDQURXLGFBQWEsVUFDSCxjQUFjO0dBUGxELFdBQVcsQ0FxQnZCO1NBckJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFBMQVRGT1JNX0lELCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9sYXlvdXQvY29tcG9uZW50cy90cy1sb2dpbi1zaWdudXAvY29va2llLnNlcnZpY2UnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHVzZXIkOiBCZWhhdmlvclN1YmplY3Q8T2JqZWN0PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8T2JqZWN0PihudWxsKTtcbiAgICBkb2N1bWVudElzQWNjZXNzaWJsZTogYm9vbGVhbjtcbiAgICB1c2VyID0gdGhpcy51c2VyJC5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IEluamVjdGlvblRva2VuPE9iamVjdD4pIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSA9IGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCk7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlKSB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMuY29va2llU2VydmljZS5nZXRDb29raWUoXCJ0b3duc2NyaXB0LXVzZXJcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdvdCB1c2VyIGZyb20gY29va2llXCIgKyB1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2VyICE9IG51bGwgJiYgdXNlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyKEpTT04ucGFyc2UodXNlcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlcihkYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlciQubmV4dChkYXRhKTtcbiAgICB9XG59XG4iXX0=