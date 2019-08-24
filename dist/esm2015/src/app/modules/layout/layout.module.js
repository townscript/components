import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { TsFormsModule } from '@townscript/elements';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserService } from '../../core/browser.service';
import { ShareEventModalComponent } from './components/ts-listing-card/share-event-modal/share-event-modal.component';
// import { TimeService, ApiService, UserService } from '../../shared/index';
import { LoginTopContentComponent } from './components/ts-login-signup/login-top-content/login-top-content.component';
import { CookieService } from './components/ts-login-signup/cookie.service';
import { RangeDatePipe } from '../layout/components/ts-listing-card/ts-date-range.pipe';
import { HeaderService } from './components/ts-header/ts-header.service';
import { UserMenuComponent } from './components/ts-header/user-menu/user-menu.component';
import { NotificationService } from '../../shared/services/notification.service';
import { AppPasswordDirective } from './components/ts-login-signup/ts-show-hide-directive';
import { LoginModalComponent } from './components/ts-login-signup/login-modal/login-modal.component';
import { TsHeaderComponent } from './components/ts-header/ts-header.component';
import { TsFooterComponent } from './components/ts-footer/ts-footer.component';
import { SearchComponent } from './components/ts-header/search/search.component';
import { TsLoginSignupComponent } from './components/ts-login-signup/ts-login-signup.component';
import { TsListingCardComponent } from './components/ts-listing-card/ts-listing-card.component';
import { CitySearchPopupComponent } from './components/ts-header/city-search-popup/city-search-popup.component';
import { HamburgerMenuComponent } from './components/ts-header/hamburger-menu/hamburger-menu.component';
import { TsCardSkeletonComponent } from './components/ts-card-skeleton/ts-card-skeleton.component';
import { TimeService } from '../../shared/services/time.service';
import { UserService } from '../../shared/services/user-service';
import { ApiService } from '../../shared/services/api-service';
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
            TsListingCardComponent,
            LoginTopContentComponent,
            RangeDatePipe,
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
            TsListingCardComponent,
            LoginTopContentComponent,
            RangeDatePipe,
            CitySearchPopupComponent,
            HamburgerMenuComponent,
            UserMenuComponent,
            AppPasswordDirective,
            LoginModalComponent,
            ShareEventModalComponent,
            TsCardSkeletonComponent
        ],
        providers: [
            TimeService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUN0SCw2RUFBNkU7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDdEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDckcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBd0QvRCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUksQ0FBQTtBQUFoQixZQUFZO0lBdER4QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsaUJBQWlCO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2Ysc0JBQXNCO1lBQ3RCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsYUFBYTtZQUNiLHdCQUF3QjtZQUN4QixzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtTQUN4QjtRQUNELE9BQU8sRUFBRTtZQUNQLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLHNCQUFzQjtZQUN0QixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLGFBQWE7WUFDYix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4Qix1QkFBdUI7U0FDeEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxXQUFXO1lBQ1gsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixRQUFRO1lBQ1IsVUFBVTtZQUNWLGFBQWE7WUFDYixhQUFhO1lBQ2IsY0FBYztTQUNmO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FBSTtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVjYXB0Y2hhTW9kdWxlIH0gZnJvbSAnbmctcmVjYXB0Y2hhJztcbmltcG9ydCB7IFRzRm9ybXNNb2R1bGUgfSBmcm9tICdAdG93bnNjcmlwdC9lbGVtZW50cyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbmltcG9ydCB7IEJyb3dzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9icm93c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxpc3RpbmctY2FyZC9zaGFyZS1ldmVudC1tb2RhbC9zaGFyZS1ldmVudC1tb2RhbC5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgVGltZVNlcnZpY2UsIEFwaVNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IExvZ2luVG9wQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1sb2dpbi1zaWdudXAvbG9naW4tdG9wLWNvbnRlbnQvbG9naW4tdG9wLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL2Nvb2tpZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJhbmdlRGF0ZVBpcGUgfSBmcm9tICcuLi9sYXlvdXQvY29tcG9uZW50cy90cy1saXN0aW5nLWNhcmQvdHMtZGF0ZS1yYW5nZS5waXBlJztcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtaGVhZGVyL3RzLWhlYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWhlYWRlci91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcFBhc3N3b3JkRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxvZ2luLXNpZ251cC90cy1zaG93LWhpZGUtZGlyZWN0aXZlJztcbmltcG9ydCB7IExvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUc0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvdHMtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUc0Zvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1mb290ZXIvdHMtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtaGVhZGVyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IFRzTG9naW5TaWdudXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL3RzLWxvZ2luLXNpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHNMaXN0aW5nQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1saXN0aW5nLWNhcmQvdHMtbGlzdGluZy1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtaGVhZGVyL2NpdHktc2VhcmNoLXBvcHVwL2NpdHktc2VhcmNoLXBvcHVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWhlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHNDYXJkU2tlbGV0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtY2FyZC1za2VsZXRvbi90cy1jYXJkLXNrZWxldG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy90aW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci1zZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLXNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRzRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSZWNhcHRjaGFNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHNIZWFkZXJDb21wb25lbnQsXG4gICAgVHNGb290ZXJDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFRzTG9naW5TaWdudXBDb21wb25lbnQsXG4gICAgVHNMaXN0aW5nQ2FyZENvbXBvbmVudCxcbiAgICBMb2dpblRvcENvbnRlbnRDb21wb25lbnQsXG4gICAgUmFuZ2VEYXRlUGlwZSxcbiAgICBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQsXG4gICAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgICBVc2VyTWVudUNvbXBvbmVudCxcbiAgICBBcHBQYXNzd29yZERpcmVjdGl2ZSxcbiAgICBMb2dpbk1vZGFsQ29tcG9uZW50LFxuICAgIFNoYXJlRXZlbnRNb2RhbENvbXBvbmVudCxcbiAgICBUc0NhcmRTa2VsZXRvbkNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVHNIZWFkZXJDb21wb25lbnQsXG4gICAgVHNGb290ZXJDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFRzTG9naW5TaWdudXBDb21wb25lbnQsXG4gICAgVHNMaXN0aW5nQ2FyZENvbXBvbmVudCxcbiAgICBMb2dpblRvcENvbnRlbnRDb21wb25lbnQsXG4gICAgUmFuZ2VEYXRlUGlwZSxcbiAgICBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQsXG4gICAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgICBVc2VyTWVudUNvbXBvbmVudCxcbiAgICBBcHBQYXNzd29yZERpcmVjdGl2ZSxcbiAgICBMb2dpbk1vZGFsQ29tcG9uZW50LFxuICAgIFNoYXJlRXZlbnRNb2RhbENvbXBvbmVudCxcbiAgICBUc0NhcmRTa2VsZXRvbkNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBUaW1lU2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIERhdGVQaXBlLFxuICAgIEFwaVNlcnZpY2UsXG4gICAgQ29va2llU2VydmljZSxcbiAgICBIZWFkZXJTZXJ2aWNlLFxuICAgIEJyb3dzZXJTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHsgfVxuIl19