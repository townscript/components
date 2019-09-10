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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtc2hvdy1oaWRlLWRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbG9naW5TaWdudXAvdHMtbG9naW4tc2lnbnVwL3RzLXNob3ctaGlkZS1kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXREO0lBRUUsOEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRDFCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELHFDQUFNLEdBQU4sVUFBTyxJQUFpQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUNELG9DQUFLLEdBQUw7UUFBQSxpQkFRQztRQVBDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLO1lBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUF2QlUsb0JBQW9CO1FBSGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1NBQzFCLENBQUM7aURBR3dCLFVBQVU7T0FGdkIsb0JBQW9CLENBd0JoQztJQUFELDJCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F4Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFBhc3N3b3JkXSdcbn0pXG5leHBvcnQgY2xhc3MgQXBwUGFzc3dvcmREaXJlY3RpdmUge1xuICBwcml2YXRlIF9zaG93biA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5zZXR1cCgpO1xuICB9XG4gIHRvZ2dsZShzcGFuOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3Nob3duID0gIXRoaXMuX3Nob3duO1xuICAgIGlmICh0aGlzLl9zaG93bikge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICBzcGFuLmlubmVySFRNTCA9ICdIaWRlIHBhc3N3b3JkJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xuICAgICAgc3Bhbi5pbm5lckhUTUwgPSAnU2hvdyBwYXNzd29yZCc7XG4gICAgfVxuICB9XG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBgU2hvdyBwYXNzd29yZGA7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGUoc3Bhbik7XG4gICAgfSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9XG59Il19