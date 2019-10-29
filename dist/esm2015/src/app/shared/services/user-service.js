import * as tslib_1 from "tslib";
import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../../core/cookie.service';
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
            const user = this.cookieService.getCookie('townscript-user');
            console.log('got user from cookie' + user);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlcnZpY2VzL3VzZXItc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLOUQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQU1wQixZQUFvQixhQUE0QixFQUE0QixRQUFhLEVBQ3hELFVBQWtDO1FBRC9DLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDeEQsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUFMM0QsVUFBSyxHQUE0QixJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUUzRSxTQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUk3QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9ELElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzNCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0osQ0FBQTtBQXJCWSxXQUFXO0lBRHZCLFVBQVUsRUFBRTtJQU8wQyxtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDOUQsbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzZDQURXLGFBQWEsVUFDSCxjQUFjO0dBUGxELFdBQVcsQ0FxQnZCO1NBckJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFBMQVRGT1JNX0lELCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgdXNlciQ6IEJlaGF2aW9yU3ViamVjdDxPYmplY3Q+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxPYmplY3Q+KG51bGwpO1xuICAgIGRvY3VtZW50SXNBY2Nlc3NpYmxlOiBib29sZWFuO1xuICAgIHVzZXIgPSB0aGlzLnVzZXIkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogSW5qZWN0aW9uVG9rZW48T2JqZWN0Pikge1xuICAgICAgICB0aGlzLmRvY3VtZW50SXNBY2Nlc3NpYmxlID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0Q29va2llKCd0b3duc2NyaXB0LXVzZXInKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnb3QgdXNlciBmcm9tIGNvb2tpZScgKyB1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2VyICE9IG51bGwgJiYgdXNlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyKEpTT04ucGFyc2UodXNlcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlcihkYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlciQubmV4dChkYXRhKTtcbiAgICB9XG59XG4iXX0=