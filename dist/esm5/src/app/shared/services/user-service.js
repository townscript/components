import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var UserService = /** @class */ (function () {
    function UserService() {
        this.user$ = new BehaviorSubject({});
        this.user = this.user$.asObservable();
    }
    UserService.prototype.updateUser = function (data) {
        this.user$.next(data);
    };
    UserService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlcnZpY2VzL3VzZXItc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBS3ZDO0lBSUk7UUFGUSxVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLFNBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRWpDLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFUUSxXQUFXO1FBRHZCLFVBQVUsRUFBRTs7T0FDQSxXQUFXLENBVXZCO0lBQUQsa0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB1c2VyJDogQmVoYXZpb3JTdWJqZWN0PE9iamVjdD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE9iamVjdD4oe30pO1xuICAgIHVzZXIgPSB0aGlzLnVzZXIkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHVwZGF0ZVVzZXIoZGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVzZXIkLm5leHQoZGF0YSk7XG4gICAgfVxufVxuIl19