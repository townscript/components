import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { TsHeaderComponent, TsFooterComponent, SearchComponent, TsLoginSignupComponent, TsListingCardComponent, CitySearchPopupComponent, HamburgerMenuComponent } from './components/index';
import { TsCardSkeletonComponent } from "./components/ts-card-skeleton/ts-card-skeleton.component";
import { BrowserService } from '../../core/browser.service';
import { ShareEventModalComponent } from './components/ts-listing-card/share-event-modal/share-event-modal.component';
import { TsFormsModule } from '@townscript/elements';
import { TimeService, ApiService, UserService } from '../../shared/index';
import { LoginTopContentComponent } from './components/ts-login-signup/login-top-content/login-top-content.component';
import { CookieService } from './components/ts-login-signup/cookie.service';
import { RangeDatePipe } from '../layout/components/ts-listing-card/ts-date-range.pipe';
import { HeaderService } from './components/ts-header/ts-header.service';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { UserMenuComponent } from './components/ts-header/user-menu/user-menu.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationService } from '../../shared/services/notification.service';
import { AppPasswordDirective } from './components/ts-login-signup/ts-show-hide-directive';
import { LoginModalComponent } from './components/ts-login-signup/login-modal/login-modal.component';
let LayoutModule = class LayoutModule {
};
LayoutModule = tslib_1.__decorate([
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
            TsHeaderComponent,
            TsFooterComponent,
            SearchComponent,
            TsLoginSignupComponent,
            LoginTopContentComponent,
            TsListingCardComponent,
            RangeDatePipe,
            SearchComponent,
            CitySearchPopupComponent,
            HamburgerMenuComponent,
            UserMenuComponent,
            AppPasswordDirective,
            LoginModalComponent,
            ShareEventModalComponent,
            TsCardSkeletonComponent
        ],
        exports: [
            TsHeaderComponent,
            TsFooterComponent,
            SearchComponent,
            TsLoginSignupComponent,
            LoginTopContentComponent,
            TsListingCardComponent,
            RangeDatePipe,
            SearchComponent,
            CitySearchPopupComponent,
            HamburgerMenuComponent,
            UserMenuComponent,
            AppPasswordDirective,
            LoginModalComponent,
            ShareEventModalComponent,
            TsCardSkeletonComponent
        ],
        providers: [TimeService,
            UserService,
            NotificationService,
            DatePipe,
            ApiService,
            CookieService,
            HeaderService,
            BrowserService
        ]
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2Ysc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3ZCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUE7QUFDbEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUF5RHJHLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7Q0FBSSxDQUFBO0FBQWhCLFlBQVk7SUF2RHhCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixpQkFBaUI7U0FDbEI7UUFDRCxZQUFZLEVBQUU7WUFDWixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QixhQUFhO1lBQ2IsZUFBZTtZQUNmLHdCQUF3QjtZQUN4QixzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtTQUN4QjtRQUNELE9BQU8sRUFBRTtZQUNQLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLGFBQWE7WUFDYixlQUFlO1lBQ2Ysd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QixpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQix3QkFBd0I7WUFDeEIsdUJBQXVCO1NBQ3hCO1FBQ0QsU0FBUyxFQUFFLENBQUMsV0FBVztZQUNyQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFFBQVE7WUFDUixVQUFVO1lBQ1YsYUFBYTtZQUNiLGFBQWE7WUFDYixjQUFjO1NBQ2Y7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUFJO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWNhcHRjaGFNb2R1bGUgfSBmcm9tICduZy1yZWNhcHRjaGEnO1xuXG5pbXBvcnQge1xuICBUc0hlYWRlckNvbXBvbmVudCxcbiAgVHNGb290ZXJDb21wb25lbnQsXG4gIFNlYXJjaENvbXBvbmVudCxcbiAgVHNMb2dpblNpZ251cENvbXBvbmVudCxcbiAgVHNMaXN0aW5nQ2FyZENvbXBvbmVudCxcbiAgQ2l0eVNlYXJjaFBvcHVwQ29tcG9uZW50LFxuICBIYW1idXJnZXJNZW51Q29tcG9uZW50XG59IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBUc0NhcmRTa2VsZXRvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdHMtY2FyZC1za2VsZXRvbi90cy1jYXJkLXNrZWxldG9uLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBCcm93c2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvYnJvd3Nlci5zZXJ2aWNlJztcbmltcG9ydCB7IFNoYXJlRXZlbnRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1saXN0aW5nLWNhcmQvc2hhcmUtZXZlbnQtbW9kYWwvc2hhcmUtZXZlbnQtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRzRm9ybXNNb2R1bGUgfSBmcm9tICdAdG93bnNjcmlwdC9lbGVtZW50cyc7XG5pbXBvcnQgeyBUaW1lU2VydmljZSwgQXBpU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgTG9naW5Ub3BDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxvZ2luLXNpZ251cC9sb2dpbi10b3AtY29udGVudC9sb2dpbi10b3AtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cy1sb2dpbi1zaWdudXAvY29va2llLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmFuZ2VEYXRlUGlwZSB9IGZyb20gJy4uL2xheW91dC9jb21wb25lbnRzL3RzLWxpc3RpbmctY2FyZC90cy1kYXRlLXJhbmdlLnBpcGUnO1xuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvdHMtaGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgVXNlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtaGVhZGVyL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFNuYWNrQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwUGFzc3dvcmREaXJlY3RpdmUgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL3RzLXNob3ctaGlkZS1kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTG9naW5Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1sb2dpbi1zaWdudXAvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUc0Zvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUmVjYXB0Y2hhTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRzSGVhZGVyQ29tcG9uZW50LFxuICAgIFRzRm9vdGVyQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBUc0xvZ2luU2lnbnVwQ29tcG9uZW50LFxuICAgIExvZ2luVG9wQ29udGVudENvbXBvbmVudCxcbiAgICBUc0xpc3RpbmdDYXJkQ29tcG9uZW50LFxuICAgIFJhbmdlRGF0ZVBpcGUsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIENpdHlTZWFyY2hQb3B1cENvbXBvbmVudCxcbiAgICBIYW1idXJnZXJNZW51Q29tcG9uZW50LFxuICAgIFVzZXJNZW51Q29tcG9uZW50LFxuICAgIEFwcFBhc3N3b3JkRGlyZWN0aXZlLFxuICAgIExvZ2luTW9kYWxDb21wb25lbnQsXG4gICAgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50LFxuICAgIFRzQ2FyZFNrZWxldG9uQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUc0hlYWRlckNvbXBvbmVudCxcbiAgICBUc0Zvb3RlckNvbXBvbmVudCxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgVHNMb2dpblNpZ251cENvbXBvbmVudCxcbiAgICBMb2dpblRvcENvbnRlbnRDb21wb25lbnQsXG4gICAgVHNMaXN0aW5nQ2FyZENvbXBvbmVudCxcbiAgICBSYW5nZURhdGVQaXBlLFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQsXG4gICAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgICBVc2VyTWVudUNvbXBvbmVudCxcbiAgICBBcHBQYXNzd29yZERpcmVjdGl2ZSxcbiAgICBMb2dpbk1vZGFsQ29tcG9uZW50LFxuICAgIFNoYXJlRXZlbnRNb2RhbENvbXBvbmVudCxcbiAgICBUc0NhcmRTa2VsZXRvbkNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtUaW1lU2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIERhdGVQaXBlLFxuICAgIEFwaVNlcnZpY2UsXG4gICAgQ29va2llU2VydmljZSxcbiAgICBIZWFkZXJTZXJ2aWNlLFxuICAgIEJyb3dzZXJTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHsgfVxuIl19