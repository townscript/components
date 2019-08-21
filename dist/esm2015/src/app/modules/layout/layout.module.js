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
            TsCardSkeletonComponent
        ],
        providers: [TimeService, UserService, NotificationService, DatePipe, ApiService, CookieService, HeaderService, BrowserService]
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2Ysc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN4QixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEVBQTRFLENBQUM7QUFDdEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBMENqRixJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUksQ0FBQTtBQUFoQixZQUFZO0lBeEN4QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsaUJBQWlCO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2Ysc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4QixzQkFBc0I7WUFDdEIsYUFBYTtZQUNiLGVBQWU7WUFDZix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLGlCQUFpQjtZQUNqQix3QkFBd0I7WUFDeEIsdUJBQXVCO1NBQ3hCO1FBQ0QsZUFBZSxFQUFFO1lBQ2Ysd0JBQXdCO1NBQ3pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLGlCQUFpQjtZQUNqQix1QkFBdUI7U0FDeEI7UUFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7S0FFL0gsQ0FBQztHQUNXLFlBQVksQ0FBSTtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVjYXB0Y2hhTW9kdWxlIH0gZnJvbSAnbmctcmVjYXB0Y2hhJztcblxuaW1wb3J0IHtcbiAgVHNIZWFkZXJDb21wb25lbnQsXG4gIFRzRm9vdGVyQ29tcG9uZW50LFxuICBTZWFyY2hDb21wb25lbnQsXG4gIFRzTG9naW5TaWdudXBDb21wb25lbnQsXG4gIFRzTGlzdGluZ0NhcmRDb21wb25lbnQsXG4gIENpdHlTZWFyY2hQb3B1cENvbXBvbmVudCxcbiAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgVHNDYXJkU2tlbGV0b25Db21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IEJyb3dzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9icm93c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxpc3RpbmctY2FyZC9zaGFyZS1ldmVudC1tb2RhbC9zaGFyZS1ldmVudC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHNGb3Jtc01vZHVsZSB9IGZyb20gJ0B0b3duc2NyaXB0L2VsZW1lbnRzJztcbmltcG9ydCB7IFRpbWVTZXJ2aWNlLCBBcGlTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBMb2dpblRvcENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtbG9naW4tc2lnbnVwL2xvZ2luLXRvcC1jb250ZW50L2xvZ2luLXRvcC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWxvZ2luLXNpZ251cC9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBSYW5nZURhdGVQaXBlIH0gZnJvbSAnLi4vbGF5b3V0L2NvbXBvbmVudHMvdHMtbGlzdGluZy1jYXJkL3RzLWRhdGUtcmFuZ2UucGlwZSc7XG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWhlYWRlci90cy1oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBVc2VyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHNGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJlY2FwdGNoYU1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUc0hlYWRlckNvbXBvbmVudCxcbiAgICBUc0Zvb3RlckNvbXBvbmVudCxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgVHNMb2dpblNpZ251cENvbXBvbmVudCxcbiAgICBMb2dpblRvcENvbnRlbnRDb21wb25lbnQsXG4gICAgVHNMaXN0aW5nQ2FyZENvbXBvbmVudCxcbiAgICBSYW5nZURhdGVQaXBlLFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQsXG4gICAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgICBVc2VyTWVudUNvbXBvbmVudCxcbiAgICBTaGFyZUV2ZW50TW9kYWxDb21wb25lbnQsXG4gICAgVHNDYXJkU2tlbGV0b25Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUc0hlYWRlckNvbXBvbmVudCxcbiAgICBUc0Zvb3RlckNvbXBvbmVudCxcbiAgICBUc0xvZ2luU2lnbnVwQ29tcG9uZW50LFxuICAgIFRzTGlzdGluZ0NhcmRDb21wb25lbnQsXG4gICAgVXNlck1lbnVDb21wb25lbnQsXG4gICAgVHNDYXJkU2tlbGV0b25Db21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVGltZVNlcnZpY2UsIFVzZXJTZXJ2aWNlLCBOb3RpZmljYXRpb25TZXJ2aWNlLCBEYXRlUGlwZSwgQXBpU2VydmljZSwgQ29va2llU2VydmljZSwgSGVhZGVyU2VydmljZSwgQnJvd3NlclNlcnZpY2VdXG5cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHsgfVxuIl19