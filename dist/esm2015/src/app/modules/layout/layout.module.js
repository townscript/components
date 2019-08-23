import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { TsHeaderComponent, TsFooterComponent, SearchComponent, TsLoginSignupComponent, TsListingCardComponent, CitySearchPopupComponent, HamburgerMenuComponent, TsCardSkeletonComponent } from './components/index';
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
        entryComponents: [
            ShareEventModalComponent
        ],
        exports: [
            TsHeaderComponent,
            TsFooterComponent,
            TsLoginSignupComponent,
            TsListingCardComponent,
            UserMenuComponent,
            TsCardSkeletonComponent,
            RangeDatePipe
        ],
        providers: [TimeService, UserService, NotificationService, DatePipe, ApiService, CookieService, HeaderService, BrowserService]
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2Ysc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN4QixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDdEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBNkNyRyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUksQ0FBQTtBQUFoQixZQUFZO0lBM0N4QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsaUJBQWlCO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2Ysc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixzQkFBc0I7WUFDdEIsYUFBYTtZQUNiLGVBQWU7WUFDZix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4Qix1QkFBdUI7U0FDeEI7UUFDRCxlQUFlLEVBQUU7WUFDZix3QkFBd0I7U0FDekI7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLHNCQUFzQjtZQUN0QixzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLHVCQUF1QjtZQUN2QixhQUFhO1NBQ2Q7UUFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7S0FFL0gsQ0FBQztHQUNXLFlBQVksQ0FBSTtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVjYXB0Y2hhTW9kdWxlIH0gZnJvbSAnbmctcmVjYXB0Y2hhJztcblxuaW1wb3J0IHtcbiAgVHNIZWFkZXJDb21wb25lbnQsXG4gIFRzRm9vdGVyQ29tcG9uZW50LFxuICBTZWFyY2hDb21wb25lbnQsXG4gIFRzTG9naW5TaWdudXBDb21wb25lbnQsXG4gIFRzTGlzdGluZ0NhcmRDb21wb25lbnQsXG4gIENpdHlTZWFyY2hQb3B1cENvbXBvbmVudCxcbiAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgVHNDYXJkU2tlbGV0b25Db21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IEJyb3dzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9icm93c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxpc3RpbmctY2FyZC9zaGFyZS1ldmVudC1tb2RhbC9zaGFyZS1ldmVudC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHNGb3Jtc01vZHVsZSB9IGZyb20gJ0B0b3duc2NyaXB0L2VsZW1lbnRzJztcbmltcG9ydCB7IFRpbWVTZXJ2aWNlLCBBcGlTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBMb2dpblRvcENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL2xvZ2luLXRvcC1jb250ZW50L2xvZ2luLXRvcC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxvZ2luLXNpZ251cC9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBSYW5nZURhdGVQaXBlIH0gZnJvbSAnLi4vbGF5b3V0L2NvbXBvbmVudHMvdHMtbGlzdGluZy1jYXJkL3RzLWRhdGUtcmFuZ2UucGlwZSc7XG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWhlYWRlci90cy1oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBVc2VyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBcHBQYXNzd29yZERpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy90cy1sb2dpbi1zaWdudXAvdHMtc2hvdy1oaWRlLWRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxvZ2luLXNpZ251cC9sb2dpbi1tb2RhbC9sb2dpbi1tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRzRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSZWNhcHRjaGFNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHNIZWFkZXJDb21wb25lbnQsXG4gICAgVHNGb290ZXJDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFRzTG9naW5TaWdudXBDb21wb25lbnQsXG4gICAgTG9naW5Ub3BDb250ZW50Q29tcG9uZW50LFxuICAgIFRzTGlzdGluZ0NhcmRDb21wb25lbnQsXG4gICAgUmFuZ2VEYXRlUGlwZSxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgQ2l0eVNlYXJjaFBvcHVwQ29tcG9uZW50LFxuICAgIEhhbWJ1cmdlck1lbnVDb21wb25lbnQsXG4gICAgVXNlck1lbnVDb21wb25lbnQsXG4gICAgQXBwUGFzc3dvcmREaXJlY3RpdmUsXG4gICAgTG9naW5Nb2RhbENvbXBvbmVudCxcbiAgICBTaGFyZUV2ZW50TW9kYWxDb21wb25lbnQsXG4gICAgVHNDYXJkU2tlbGV0b25Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUc0hlYWRlckNvbXBvbmVudCxcbiAgICBUc0Zvb3RlckNvbXBvbmVudCxcbiAgICBUc0xvZ2luU2lnbnVwQ29tcG9uZW50LFxuICAgIFRzTGlzdGluZ0NhcmRDb21wb25lbnQsXG4gICAgVXNlck1lbnVDb21wb25lbnQsXG4gICAgVHNDYXJkU2tlbGV0b25Db21wb25lbnQsXG4gICAgUmFuZ2VEYXRlUGlwZVxuICBdLFxuICBwcm92aWRlcnM6IFtUaW1lU2VydmljZSwgVXNlclNlcnZpY2UsIE5vdGlmaWNhdGlvblNlcnZpY2UsIERhdGVQaXBlLCBBcGlTZXJ2aWNlLCBDb29raWVTZXJ2aWNlLCBIZWFkZXJTZXJ2aWNlLCBCcm93c2VyU2VydmljZV1cblxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XG4iXX0=