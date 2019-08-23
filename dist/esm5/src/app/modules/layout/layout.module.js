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
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
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
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2Ysc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3ZCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUE7QUFDbEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUF5RHJHO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBdkR4QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixpQkFBaUI7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osaUJBQWlCO2dCQUNqQixpQkFBaUI7Z0JBQ2pCLGVBQWU7Z0JBQ2Ysc0JBQXNCO2dCQUN0Qix3QkFBd0I7Z0JBQ3hCLHNCQUFzQjtnQkFDdEIsYUFBYTtnQkFDYixlQUFlO2dCQUNmLHdCQUF3QjtnQkFDeEIsc0JBQXNCO2dCQUN0QixpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2dCQUNuQix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZixzQkFBc0I7Z0JBQ3RCLHdCQUF3QjtnQkFDeEIsc0JBQXNCO2dCQUN0QixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2Ysd0JBQXdCO2dCQUN4QixzQkFBc0I7Z0JBQ3RCLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQixtQkFBbUI7Z0JBQ25CLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFLENBQUMsV0FBVztnQkFDckIsV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixhQUFhO2dCQUNiLGFBQWE7Z0JBQ2IsY0FBYzthQUNmO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJlY2FwdGNoYU1vZHVsZSB9IGZyb20gJ25nLXJlY2FwdGNoYSc7XG5cbmltcG9ydCB7XG4gIFRzSGVhZGVyQ29tcG9uZW50LFxuICBUc0Zvb3RlckNvbXBvbmVudCxcbiAgU2VhcmNoQ29tcG9uZW50LFxuICBUc0xvZ2luU2lnbnVwQ29tcG9uZW50LFxuICBUc0xpc3RpbmdDYXJkQ29tcG9uZW50LFxuICBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQsXG4gIEhhbWJ1cmdlck1lbnVDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IFRzQ2FyZFNrZWxldG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90cy1jYXJkLXNrZWxldG9uL3RzLWNhcmQtc2tlbGV0b24uY29tcG9uZW50XCJcbmltcG9ydCB7IEJyb3dzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9icm93c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxpc3RpbmctY2FyZC9zaGFyZS1ldmVudC1tb2RhbC9zaGFyZS1ldmVudC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHNGb3Jtc01vZHVsZSB9IGZyb20gJ0B0b3duc2NyaXB0L2VsZW1lbnRzJztcbmltcG9ydCB7IFRpbWVTZXJ2aWNlLCBBcGlTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBMb2dpblRvcENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL2xvZ2luLXRvcC1jb250ZW50L2xvZ2luLXRvcC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxvZ2luLXNpZ251cC9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBSYW5nZURhdGVQaXBlIH0gZnJvbSAnLi4vbGF5b3V0L2NvbXBvbmVudHMvdHMtbGlzdGluZy1jYXJkL3RzLWRhdGUtcmFuZ2UucGlwZSc7XG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWhlYWRlci90cy1oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBVc2VyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBcHBQYXNzd29yZERpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy90cy1sb2dpbi1zaWdudXAvdHMtc2hvdy1oaWRlLWRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxvZ2luLXNpZ251cC9sb2dpbi1tb2RhbC9sb2dpbi1tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRzRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSZWNhcHRjaGFNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHNIZWFkZXJDb21wb25lbnQsXG4gICAgVHNGb290ZXJDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFRzTG9naW5TaWdudXBDb21wb25lbnQsXG4gICAgTG9naW5Ub3BDb250ZW50Q29tcG9uZW50LFxuICAgIFRzTGlzdGluZ0NhcmRDb21wb25lbnQsXG4gICAgUmFuZ2VEYXRlUGlwZSxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgQ2l0eVNlYXJjaFBvcHVwQ29tcG9uZW50LFxuICAgIEhhbWJ1cmdlck1lbnVDb21wb25lbnQsXG4gICAgVXNlck1lbnVDb21wb25lbnQsXG4gICAgQXBwUGFzc3dvcmREaXJlY3RpdmUsXG4gICAgTG9naW5Nb2RhbENvbXBvbmVudCxcbiAgICBTaGFyZUV2ZW50TW9kYWxDb21wb25lbnQsXG4gICAgVHNDYXJkU2tlbGV0b25Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRzSGVhZGVyQ29tcG9uZW50LFxuICAgIFRzRm9vdGVyQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBUc0xvZ2luU2lnbnVwQ29tcG9uZW50LFxuICAgIExvZ2luVG9wQ29udGVudENvbXBvbmVudCxcbiAgICBUc0xpc3RpbmdDYXJkQ29tcG9uZW50LFxuICAgIFJhbmdlRGF0ZVBpcGUsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIENpdHlTZWFyY2hQb3B1cENvbXBvbmVudCxcbiAgICBIYW1idXJnZXJNZW51Q29tcG9uZW50LFxuICAgIFVzZXJNZW51Q29tcG9uZW50LFxuICAgIEFwcFBhc3N3b3JkRGlyZWN0aXZlLFxuICAgIExvZ2luTW9kYWxDb21wb25lbnQsXG4gICAgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50LFxuICAgIFRzQ2FyZFNrZWxldG9uQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1RpbWVTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgRGF0ZVBpcGUsXG4gICAgQXBpU2VydmljZSxcbiAgICBDb29raWVTZXJ2aWNlLFxuICAgIEhlYWRlclNlcnZpY2UsXG4gICAgQnJvd3NlclNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XG4iXX0=