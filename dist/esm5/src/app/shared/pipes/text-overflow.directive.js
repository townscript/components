import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import * as clampLibImported from 'text-overflow-clamp';
var clampLib = clampLibImported;
var TextOverflowClampDirective = /** @class */ (function () {
    function TextOverflowClampDirective(el) {
        this.el = el;
    }
    TextOverflowClampDirective.prototype.ngAfterViewInit = function () {
        clampLib(this.el.nativeElement, this.lines);
    };
    tslib_1.__decorate([
        Input('clamp'),
        tslib_1.__metadata("design:type", Number)
    ], TextOverflowClampDirective.prototype, "lines", void 0);
    TextOverflowClampDirective = tslib_1.__decorate([
        Directive({ selector: '[clamp]' }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], TextOverflowClampDirective);
    return TextOverflowClampDirective;
}());
export { TextOverflowClampDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1vdmVyZmxvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdG93bnNjcmlwdC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9zaGFyZWQvcGlwZXMvdGV4dC1vdmVyZmxvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFUixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEtBQUssZ0JBQWdCLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsSUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7QUFHbEM7SUFHSSxvQ0FBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDbEMsQ0FBQztJQUVELG9EQUFlLEdBQWY7UUFDSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFQZTtRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7OzZEQUFlO0lBRHJCLDBCQUEwQjtRQUR0QyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7aURBSVAsVUFBVTtPQUh6QiwwQkFBMEIsQ0FTdEM7SUFBRCxpQ0FBQztDQUFBLEFBVEQsSUFTQztTQVRZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgY2xhbXBMaWJJbXBvcnRlZCBmcm9tICd0ZXh0LW92ZXJmbG93LWNsYW1wJztcblxuY29uc3QgY2xhbXBMaWIgPSBjbGFtcExpYkltcG9ydGVkO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xhbXBdJyB9KVxuZXhwb3J0IGNsYXNzIFRleHRPdmVyZmxvd0NsYW1wRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCdjbGFtcCcpIGxpbmVzOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBjbGFtcExpYih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMubGluZXMpO1xuICAgIH1cbn0iXX0=