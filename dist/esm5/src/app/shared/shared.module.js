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
            declarations: [RangeDatePipe
            ],
            imports: [],
            exports: [RangeDatePipe],
            providers: [TimeService, ApiService, UserService]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVUzRDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQVJ4QixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxhQUFhO2FBQzNCO1lBQ0QsT0FBTyxFQUFFLEVBQ1I7WUFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDeEIsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUM7U0FDcEQsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaW1lU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGltZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UnO1xuaW1wb3J0IHsgUmFuZ2VEYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvdHMtZGF0ZS1yYW5nZS5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtSYW5nZURhdGVQaXBlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgXSxcbiAgICBleHBvcnRzOiBbUmFuZ2VEYXRlUGlwZV0sXG4gICAgcHJvdmlkZXJzOiBbVGltZVNlcnZpY2UsIEFwaVNlcnZpY2UsIFVzZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUgeyB9XG4iXX0=