import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeService } from './services/time.service';
import { ApiService } from './services/api-service';
import { UserService } from './services/user-service';
import { RangeDatePipe } from './pipes/ts-date-range.pipe';
import { FollowComponent } from './components/follow/follow.component';
import { FollowService } from './services/follow.service';
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            RangeDatePipe,
            FollowComponent,
        ],
        imports: [
            CommonModule
        ],
        exports: [
            FollowComponent,
            RangeDatePipe
        ],
        providers: [TimeService, ApiService, UserService, FollowService]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQWdCMUQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQUFJLENBQUE7QUFBaEIsWUFBWTtJQWR4QixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixhQUFhO1lBQ2IsZUFBZTtTQUNsQjtRQUNELE9BQU8sRUFBRTtZQUNMLFlBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLGVBQWU7WUFDZixhQUFhO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDO0tBQ25FLENBQUM7R0FDVyxZQUFZLENBQUk7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGltZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RpbWUuc2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci1zZXJ2aWNlJztcbmltcG9ydCB7IFJhbmdlRGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RzLWRhdGUtcmFuZ2UucGlwZSc7XG5pbXBvcnQgeyBGb2xsb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9sbG93L2ZvbGxvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9sbG93U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZm9sbG93LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBSYW5nZURhdGVQaXBlLFxuICAgICAgICBGb2xsb3dDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBGb2xsb3dDb21wb25lbnQsXG4gICAgICAgIFJhbmdlRGF0ZVBpcGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1RpbWVTZXJ2aWNlLCBBcGlTZXJ2aWNlLCBVc2VyU2VydmljZSwgRm9sbG93U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIl19