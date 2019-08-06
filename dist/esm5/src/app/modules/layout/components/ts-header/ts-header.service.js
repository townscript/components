import * as tslib_1 from "tslib";
import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../../core';
import { Router } from '@angular/router';
var HeaderService = /** @class */ (function () {
    function HeaderService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = config.baseUrl;
        this.apiServerUrl = this.baseUrl + "api/";
        this.getplaceSearchResults = function (query) {
            return _this.http.get(_this.baseUrl + "listings/place/autocomplete?query=" + query);
        };
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Router)
    ], HeaderService.prototype, "router", void 0);
    HeaderService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HeaderService);
    return HeaderService;
}());
export { HeaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtaGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdG93bnNjcmlwdC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL3RzLWhlYWRlci90cy1oZWFkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekM7SUFLSSx1QkFBb0IsSUFBZ0I7UUFBcEMsaUJBQ0M7UUFEbUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxZQUFPLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxpQkFBWSxHQUFXLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBSTdDLDBCQUFxQixHQUFHLFVBQUMsS0FBSztZQUMxQixPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsb0NBQW9DLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFBO0lBSEQsQ0FBQztJQUZRO1FBQVIsS0FBSyxFQUFFOzBDQUFTLE1BQU07aURBQUM7SUFKZixhQUFhO1FBRHpCLFVBQVUsRUFBRTtpREFNaUIsVUFBVTtPQUwzQixhQUFhLENBVXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWFkZXJTZXJ2aWNlIHtcblxuICAgIGJhc2VVcmw6IHN0cmluZyA9IGNvbmZpZy5iYXNlVXJsO1xuICAgIGFwaVNlcnZlclVybDogc3RyaW5nID0gdGhpcy5iYXNlVXJsICsgXCJhcGkvXCI7XG4gICAgQElucHV0KCkgcm91dGVyOiBSb3V0ZXI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgfVxuICAgIGdldHBsYWNlU2VhcmNoUmVzdWx0cyA9IChxdWVyeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyBcImxpc3RpbmdzL3BsYWNlL2F1dG9jb21wbGV0ZT9xdWVyeT1cIiArIHF1ZXJ5KTtcbiAgICB9XG59XG4iXX0=