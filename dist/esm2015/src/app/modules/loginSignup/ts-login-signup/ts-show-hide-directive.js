import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
let AppPasswordDirective = class AppPasswordDirective {
    constructor(el) {
        this.el = el;
        this._shown = false;
        this.setup();
    }
    toggle(span) {
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
    }
    setup() {
        const parent = this.el.nativeElement.parentNode;
        const span = document.createElement('span');
        span.innerHTML = `Show password`;
        span.addEventListener('click', (event) => {
            this.toggle(span);
        });
        parent.appendChild(span);
    }
};
AppPasswordDirective = tslib_1.__decorate([
    Directive({
        selector: '[appPassword]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], AppPasswordDirective);
export { AppPasswordDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtc2hvdy1oaWRlLWRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbG9naW5TaWdudXAvdHMtbG9naW4tc2lnbnVwL3RzLXNob3ctaGlkZS1kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXRELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBRS9CLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRDFCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFpQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztTQUNsQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztTQUNsQztJQUNILENBQUM7SUFDRCxLQUFLO1FBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ2hELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBO0FBekJZLG9CQUFvQjtJQUhoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtLQUMxQixDQUFDOzZDQUd3QixVQUFVO0dBRnZCLG9CQUFvQixDQXlCaEM7U0F6Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFBhc3N3b3JkXSdcbn0pXG5leHBvcnQgY2xhc3MgQXBwUGFzc3dvcmREaXJlY3RpdmUge1xuICBwcml2YXRlIF9zaG93biA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5zZXR1cCgpO1xuICB9XG4gIHRvZ2dsZShzcGFuOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuX3Nob3duID0gIXRoaXMuX3Nob3duO1xuICAgIGlmICh0aGlzLl9zaG93bikge1xuICAgICAgY29uc29sZS5sb2codGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgc3Bhbi5pbm5lckhUTUwgPSAnSGlkZSBwYXNzd29yZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncGFzc3dvcmQnKTtcbiAgICAgIHNwYW4uaW5uZXJIVE1MID0gJ1Nob3cgcGFzc3dvcmQnO1xuICAgIH1cbiAgfVxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gYFNob3cgcGFzc3dvcmRgO1xuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlKHNwYW4pO1xuICAgIH0pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfVxufSJdfQ==