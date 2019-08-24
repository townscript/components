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
let TsLoginSignupModule = class TsLoginSignupModule {
};
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
export { TsLoginSignupModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tc2lnbnVwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbG9naW5TaWdudXAvbG9naW4tc2lnbnVwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBK0JqRixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtDQUFJLENBQUE7QUFBdkIsbUJBQW1CO0lBN0IvQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsaUJBQWlCO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixvQkFBb0I7WUFDcEIsbUJBQW1CO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixtQkFBbUI7U0FDcEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxVQUFVO1lBQ1YsYUFBYTtZQUNiLFdBQVc7WUFDWCxtQkFBbUI7U0FDcEI7S0FDRixDQUFDO0dBQ1csbUJBQW1CLENBQUk7U0FBdkIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRzRm9ybXNNb2R1bGUgfSBmcm9tICdAdG93bnNjcmlwdC9lbGVtZW50cyc7XG5pbXBvcnQgeyBSZWNhcHRjaGFNb2R1bGUgfSBmcm9tICduZy1yZWNhcHRjaGEnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSwgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBUc0xvZ2luU2lnbnVwQ29tcG9uZW50LCBMb2dpblRvcENvbnRlbnRDb21wb25lbnQsIEFwcFBhc3N3b3JkRGlyZWN0aXZlLCBMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUc0Zvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUmVjYXB0Y2hhTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRzTG9naW5TaWdudXBDb21wb25lbnQsXG4gICAgTG9naW5Ub3BDb250ZW50Q29tcG9uZW50LFxuICAgIEFwcFBhc3N3b3JkRGlyZWN0aXZlLFxuICAgIExvZ2luTW9kYWxDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRzTG9naW5TaWdudXBDb21wb25lbnQsXG4gICAgTG9naW5Ub3BDb250ZW50Q29tcG9uZW50LFxuICAgIExvZ2luTW9kYWxDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQXBpU2VydmljZSxcbiAgICBDb29raWVTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIE5vdGlmaWNhdGlvblNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUc0xvZ2luU2lnbnVwTW9kdWxlIHsgfVxuIl19