import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { TimeService } from './services/time.service';
import { ApiService } from './services/api-service';
import { UserService } from './services/user-service';
import { RangeDatePipe } from './pipes/ts-date-range.pipe';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                RangeDatePipe
            ],
            imports: [],
            exports: [RangeDatePipe],
            providers: [TimeService, ApiService, UserService]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVczRDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQVR4QixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsYUFBYTthQUNoQjtZQUNELE9BQU8sRUFBRSxFQUNSO1lBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO1NBQ3BELENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RpbWUuc2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci1zZXJ2aWNlJztcbmltcG9ydCB7IFJhbmdlRGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RzLWRhdGUtcmFuZ2UucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFJhbmdlRGF0ZVBpcGVcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtSYW5nZURhdGVQaXBlXSxcbiAgICBwcm92aWRlcnM6IFtUaW1lU2VydmljZSwgQXBpU2VydmljZSwgVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cbiJdfQ==