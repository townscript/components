import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ApiService = /** @class */ (function () {
    function ApiService() {
        this.FB_APP_ID = '303059286557418';
        this.hostName = 'www.tsdugout.in';
        this.S3_BUCKET_NAME = 'townscript-testing';
        this.GA_TRACKER_CODE = 'UA-68181318-1';
        this.SERVER_URL = 'https://www.tsdugout.in';
        this.API_SERVER = 'https://www.tsdugout.in/api/';
        this.algoliaIndexName = 'tsTesting';
        this.IPINFO_ACCESS_TOKEN = 'a27cfbcc77e854'; // change afterwards
        this.RECORD_FOR_KINESIS = true; // temporary
        this.PAYMENT_PAGE_URL = 'https://www.tsdugout.in/payment/';
    }
    ApiService = tslib_1.__decorate([
        Injectable()
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdG93bnNjcmlwdC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9zaGFyZWQvc2VydmljZXMvYXBpLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0M7SUFGQTtRQUlZLGNBQVMsR0FBRyxpQkFBaUIsQ0FBQztRQUM5QixhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDN0IsbUJBQWMsR0FBRyxvQkFBb0IsQ0FBQztRQUN0QyxvQkFBZSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxlQUFVLEdBQUcseUJBQXlCLENBQUM7UUFDdkMsZUFBVSxHQUFHLDhCQUE4QixDQUFDO1FBQzVDLHFCQUFnQixHQUFHLFdBQVcsQ0FBQztRQUMvQix3QkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLG9CQUFvQjtRQUM1RCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxZQUFZO1FBQ3ZDLHFCQUFnQixHQUFHLGtDQUFrQyxDQUFDO0lBQ2xFLENBQUM7SUFaWSxVQUFVO1FBRnRCLFVBQVUsRUFBRTtPQUVBLFVBQVUsQ0FZdEI7SUFBRCxpQkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdztcbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gICAgICAgICAgICBGQl9BUFBfSUQgPSAnMzAzMDU5Mjg2NTU3NDE4JztcbiAgICAgICAgICAgIGhvc3ROYW1lID0gJ3d3dy50c2R1Z291dC5pbic7XG4gICAgICAgICAgICBTM19CVUNLRVRfTkFNRSA9ICd0b3duc2NyaXB0LXRlc3RpbmcnO1xuICAgICAgICAgICAgR0FfVFJBQ0tFUl9DT0RFID0gJ1VBLTY4MTgxMzE4LTEnO1xuICAgICAgICAgICAgU0VSVkVSX1VSTCA9ICdodHRwczovL3d3dy50c2R1Z291dC5pbic7XG4gICAgICAgICAgICBBUElfU0VSVkVSID0gJ2h0dHBzOi8vd3d3LnRzZHVnb3V0LmluL2FwaS8nO1xuICAgICAgICAgICAgYWxnb2xpYUluZGV4TmFtZSA9ICd0c1Rlc3RpbmcnO1xuICAgICAgICAgICAgSVBJTkZPX0FDQ0VTU19UT0tFTiA9ICdhMjdjZmJjYzc3ZTg1NCc7XHQvLyBjaGFuZ2UgYWZ0ZXJ3YXJkc1xuICAgICAgICAgICAgUkVDT1JEX0ZPUl9LSU5FU0lTID0gdHJ1ZTsgLy8gdGVtcG9yYXJ5XG4gICAgICAgICAgICBQQVlNRU5UX1BBR0VfVVJMID0gJ2h0dHBzOi8vd3d3LnRzZHVnb3V0LmluL3BheW1lbnQvJztcbn0iXX0=