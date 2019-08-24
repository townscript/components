import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
var AppPasswordDirective = /** @class */ (function () {
    function AppPasswordDirective(el) {
        this.el = el;
        this._shown = false;
        this.setup();
    }
    AppPasswordDirective.prototype.toggle = function (span) {
        this._shown = !this._shown;
        if (this._shown) {
            console.log(this.el.nativeElement);
            this.el.nativeElement.setAttribute('type', 'text');
            span.innerHTML = 'Hide password';
        }
        else {
            this.el.nativeElement.setAttribute('type', 'password');
            span.innerHTML = 'Show password';
        }
    };
    AppPasswordDirective.prototype.setup = function () {
        var _this = this;
        var parent = this.el.nativeElement.parentNode;
        var span = document.createElement('span');
        span.innerHTML = "Show password";
        span.addEventListener('click', function (event) {
            _this.toggle(span);
        });
        parent.appendChild(span);
    };
    AppPasswordDirective = tslib_1.__decorate([
        Directive({
            selector: '[appPassword]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], AppPasswordDirective);
    return AppPasswordDirective;
}());
export { AppPasswordDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtc2hvdy1oaWRlLWRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL3RzLXNob3ctaGlkZS1kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXREO0lBRUUsOEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRDFCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELHFDQUFNLEdBQU4sVUFBTyxJQUFpQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztTQUNsQztJQUNILENBQUM7SUFDRCxvQ0FBSyxHQUFMO1FBQUEsaUJBUUM7UUFQQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDaEQsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSztZQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBeEJVLG9CQUFvQjtRQUhoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtTQUMxQixDQUFDO2lEQUd3QixVQUFVO09BRnZCLG9CQUFvQixDQXlCaEM7SUFBRCwyQkFBQztDQUFBLEFBekJELElBeUJDO1NBekJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBQYXNzd29yZF0nXG59KVxuZXhwb3J0IGNsYXNzIEFwcFBhc3N3b3JkRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBfc2hvd24gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgfVxuICB0b2dnbGUoc3BhbjogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9zaG93biA9ICF0aGlzLl9zaG93bjtcbiAgICBpZiAodGhpcy5fc2hvd24pIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgIHNwYW4uaW5uZXJIVE1MID0gJ0hpZGUgcGFzc3dvcmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XG4gICAgICBzcGFuLmlubmVySFRNTCA9ICdTaG93IHBhc3N3b3JkJztcbiAgICB9XG4gIH1cbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IGBTaG93IHBhc3N3b3JkYDtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZShzcGFuKTtcbiAgICB9KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH1cbn0iXX0=