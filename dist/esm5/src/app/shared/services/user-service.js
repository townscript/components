import * as tslib_1 from "tslib";
import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../../core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
var UserService = /** @class */ (function () {
    function UserService(cookieService, document, platformId) {
        this.cookieService = cookieService;
        this.document = document;
        this.platformId = platformId;
        this.user$ = new BehaviorSubject(null);
        this.user = this.user$.asObservable();
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
        if (this.documentIsAccessible) {
            var user = this.cookieService.getCookie("townscript-user");
            console.log("got user from cookie" + user);
            if (user != null && user.length > 0) {
                this.updateUser(JSON.parse(user));
            }
        }
    }
    UserService.prototype.updateUser = function (data) {
        this.user$.next(data);
    };
    UserService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(1, Inject(DOCUMENT)),
        tslib_1.__param(2, Inject(PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [CookieService, Object, InjectionToken])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlcnZpY2VzL3VzZXItc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSzlEO0lBTUkscUJBQW9CLGFBQTRCLEVBQTRCLFFBQWEsRUFDeEQsVUFBa0M7UUFEL0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBNEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUN4RCxlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUwzRCxVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBRTNFLFNBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBSTdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDckM7U0FDSjtJQUNMLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFwQlEsV0FBVztRQUR2QixVQUFVLEVBQUU7UUFPMEMsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzlELG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtpREFEVyxhQUFhLFVBQ0gsY0FBYztPQVBsRCxXQUFXLENBcUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FyQlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB1c2VyJDogQmVoYXZpb3JTdWJqZWN0PE9iamVjdD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE9iamVjdD4obnVsbCk7XG4gICAgZG9jdW1lbnRJc0FjY2Vzc2libGU6IGJvb2xlYW47XG4gICAgdXNlciA9IHRoaXMudXNlciQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBJbmplY3Rpb25Ub2tlbjxPYmplY3Q+KSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUgPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpO1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudElzQWNjZXNzaWJsZSkge1xuICAgICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0Q29va2llKFwidG93bnNjcmlwdC11c2VyXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgdXNlciBmcm9tIGNvb2tpZVwiICsgdXNlcik7XG4gICAgICAgICAgICBpZiAodXNlciAhPSBudWxsICYmIHVzZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlcihKU09OLnBhcnNlKHVzZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVVzZXIoZGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVzZXIkLm5leHQoZGF0YSk7XG4gICAgfVxufVxuIl19