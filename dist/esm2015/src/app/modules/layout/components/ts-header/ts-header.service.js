import * as tslib_1 from "tslib";
import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../../core';
import { Router } from '@angular/router';
let HeaderService = class HeaderService {
    constructor(http) {
        this.http = http;
        this.baseUrl = config.baseUrl;
        this.apiServerUrl = this.baseUrl + "api/";
        this.getplaceSearchResults = (query) => {
            return this.http.get(this.baseUrl + "listings/place/autocomplete?query=" + query);
        };
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Router)
], HeaderService.prototype, "router", void 0);
HeaderService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], HeaderService);
export { HeaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtaGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdG93bnNjcmlwdC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL3RzLWhlYWRlci90cy1oZWFkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUt0QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSHBDLFlBQU8sR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2pDLGlCQUFZLEdBQVcsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFJN0MsMEJBQXFCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsb0NBQW9DLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFBO0lBSEQsQ0FBQztDQUlKLENBQUE7QUFOWTtJQUFSLEtBQUssRUFBRTtzQ0FBUyxNQUFNOzZDQUFDO0FBSmYsYUFBYTtJQUR6QixVQUFVLEVBQUU7NkNBTWlCLFVBQVU7R0FMM0IsYUFBYSxDQVV6QjtTQVZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlYWRlclNlcnZpY2Uge1xuXG4gICAgYmFzZVVybDogc3RyaW5nID0gY29uZmlnLmJhc2VVcmw7XG4gICAgYXBpU2VydmVyVXJsOiBzdHJpbmcgPSB0aGlzLmJhc2VVcmwgKyBcImFwaS9cIjtcbiAgICBASW5wdXQoKSByb3V0ZXI6IFJvdXRlcjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB9XG4gICAgZ2V0cGxhY2VTZWFyY2hSZXN1bHRzID0gKHF1ZXJ5KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArIFwibGlzdGluZ3MvcGxhY2UvYXV0b2NvbXBsZXRlP3F1ZXJ5PVwiICsgcXVlcnkpO1xuICAgIH1cbn1cbiJdfQ==