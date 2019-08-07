import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let UserService = class UserService {
    constructor() {
        this.user$ = new BehaviorSubject({});
        this.user = this.user$.asObservable();
    }
    updateUser(data) {
        this.user$.next(data);
    }
};
UserService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], UserService);
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlcnZpY2VzL3VzZXItc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBS3ZDLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFJcEI7UUFGUSxVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLFNBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRWpDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBSTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDSixDQUFBO0FBVlksV0FBVztJQUR2QixVQUFVLEVBQUU7O0dBQ0EsV0FBVyxDQVV2QjtTQVZZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHVzZXIkOiBCZWhhdmlvclN1YmplY3Q8T2JqZWN0PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8T2JqZWN0Pih7fSk7XG4gICAgdXNlciA9IHRoaXMudXNlciQuYXNPYnNlcnZhYmxlKCk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlcihkYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXNlciQubmV4dChkYXRhKTtcbiAgICB9XG59XG4iXX0=