import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TsFormsModule } from '@townscript/elements';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule, MatSnackBarModule } from '@angular/material';
import { TsLoginSignupComponent, LoginTopContentComponent, AppPasswordDirective, LoginModalComponent } from './index';
import { ApiService, UserService } from '../../shared';
import { CookieService } from '../../core/cookie.service';
import { NotificationService } from '../../shared/services/notification.service';
var TsLoginSignupModule = /** @class */ (function () {
    function TsLoginSignupModule() {
    }
    TsLoginSignupModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                TsFormsModule,
                ReactiveFormsModule,
                RecaptchaModule,
                HttpClientModule,
                MatRippleModule,
                MatSnackBarModule
            ],
            declarations: [
                TsLoginSignupComponent,
                LoginTopContentComponent,
                AppPasswordDirective,
                LoginModalComponent
            ],
            exports: [
                TsLoginSignupComponent,
                LoginTopContentComponent,
                LoginModalComponent
            ],
            providers: [
                ApiService,
                CookieService,
                UserService,
                NotificationService
            ]
        })
    ], TsLoginSignupModule);
    return TsLoginSignupModule;
}());
export { TsLoginSignupModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tc2lnbnVwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbG9naW5TaWdudXAvbG9naW4tc2lnbnVwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBK0JqRjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBN0IvQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixpQkFBaUI7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osc0JBQXNCO2dCQUN0Qix3QkFBd0I7Z0JBQ3hCLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHNCQUFzQjtnQkFDdEIsd0JBQXdCO2dCQUN4QixtQkFBbUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsVUFBVTtnQkFDVixhQUFhO2dCQUNiLFdBQVc7Z0JBQ1gsbUJBQW1CO2FBQ3BCO1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQUFJO0lBQUQsMEJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHNGb3Jtc01vZHVsZSB9IGZyb20gJ0B0b3duc2NyaXB0L2VsZW1lbnRzJztcbmltcG9ydCB7IFJlY2FwdGNoYU1vZHVsZSB9IGZyb20gJ25nLXJlY2FwdGNoYSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlLCBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFRzTG9naW5TaWdudXBDb21wb25lbnQsIExvZ2luVG9wQ29udGVudENvbXBvbmVudCwgQXBwUGFzc3dvcmREaXJlY3RpdmUsIExvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEFwaVNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2Nvb2tpZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRzRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSZWNhcHRjaGFNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHNMb2dpblNpZ251cENvbXBvbmVudCxcbiAgICBMb2dpblRvcENvbnRlbnRDb21wb25lbnQsXG4gICAgQXBwUGFzc3dvcmREaXJlY3RpdmUsXG4gICAgTG9naW5Nb2RhbENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVHNMb2dpblNpZ251cENvbXBvbmVudCxcbiAgICBMb2dpblRvcENvbnRlbnRDb21wb25lbnQsXG4gICAgTG9naW5Nb2RhbENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBcGlTZXJ2aWNlLFxuICAgIENvb2tpZVNlcnZpY2UsXG4gICAgVXNlclNlcnZpY2UsXG4gICAgTm90aWZpY2F0aW9uU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRzTG9naW5TaWdudXBNb2R1bGUgeyB9XG4iXX0=