import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../../core';
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
    HeaderService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HeaderService);
    return HeaderService;
}());
export { HeaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtaGVhZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdG93bnNjcmlwdC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9tb2R1bGVzL2xheW91dC9jb21wb25lbnRzL3RzLWhlYWRlci90cy1oZWFkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzFDO0lBSUksdUJBQW9CLElBQWdCO1FBQXBDLGlCQUNDO1FBRG1CLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsWUFBTyxHQUFXLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakMsaUJBQVksR0FBVyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUc3QywwQkFBcUIsR0FBRyxVQUFDLEtBQUs7WUFDMUIsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLG9DQUFvQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3RGLENBQUMsQ0FBQTtJQUhELENBQUM7SUFMUSxhQUFhO1FBRHpCLFVBQVUsRUFBRTtpREFLaUIsVUFBVTtPQUozQixhQUFhLENBU3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVhZGVyU2VydmljZSB7XG5cbiAgICBiYXNlVXJsOiBzdHJpbmcgPSBjb25maWcuYmFzZVVybDtcbiAgICBhcGlTZXJ2ZXJVcmw6IHN0cmluZyA9IHRoaXMuYmFzZVVybCArIFwiYXBpL1wiO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIH1cbiAgICBnZXRwbGFjZVNlYXJjaFJlc3VsdHMgPSAocXVlcnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgXCJsaXN0aW5ncy9wbGFjZS9hdXRvY29tcGxldGU/cXVlcnk9XCIgKyBxdWVyeSk7XG4gICAgfVxufVxuIl19