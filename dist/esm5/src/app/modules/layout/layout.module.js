import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TsFormsModule } from '@townscript/elements';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserService } from '../../core/browser.service';
import { HeaderService } from './components/ts-header/ts-header.service';
import { UserMenuComponent } from './components/ts-header/user-menu/user-menu.component';
import { TsHeaderComponent } from './components/ts-header/ts-header.component';
import { TsFooterComponent } from './components/ts-footer/ts-footer.component';
import { SearchComponent } from './components/ts-header/search/search.component';
import { CitySearchPopupComponent } from './components/ts-header/city-search-popup/city-search-popup.component';
import { HamburgerMenuComponent } from './components/ts-header/hamburger-menu/hamburger-menu.component';
import { TimeService } from '../../shared/services/time.service';
import { ApiService } from '../../shared/services/api-service';
import { TsLoginSignupModule } from '../loginSignup/login-signup.module';
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                HttpClientModule,
                MatRippleModule,
                MatSnackBarModule,
                TsLoginSignupModule,
                TsFormsModule
            ],
            declarations: [
                TsHeaderComponent,
                TsFooterComponent,
                SearchComponent,
                CitySearchPopupComponent,
                HamburgerMenuComponent,
                UserMenuComponent
            ],
            exports: [
                TsHeaderComponent,
                TsFooterComponent,
                SearchComponent,
                CitySearchPopupComponent,
                HamburgerMenuComponent,
                UserMenuComponent
            ],
            providers: [
                TimeService,
                DatePipe,
                ApiService,
                HeaderService,
                BrowserService
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN4RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBb0N6RTtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQWxDeEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxnQkFBZ0I7Z0JBQ2hCLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixtQkFBbUI7Z0JBQ25CLGFBQWE7YUFDZDtZQUNELFlBQVksRUFBRTtnQkFDWixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZix3QkFBd0I7Z0JBQ3hCLHNCQUFzQjtnQkFDdEIsaUJBQWlCO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQixlQUFlO2dCQUNmLHdCQUF3QjtnQkFDeEIsc0JBQXNCO2dCQUN0QixpQkFBaUI7YUFDbEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWCxRQUFRO2dCQUNSLFVBQVU7Z0JBQ1YsYUFBYTtnQkFDYixjQUFjO2FBQ2Y7U0FDRixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUmVjYXB0Y2hhTW9kdWxlIH0gZnJvbSAnbmctcmVjYXB0Y2hhJztcbmltcG9ydCB7IFRzRm9ybXNNb2R1bGUgfSBmcm9tICdAdG93bnNjcmlwdC9lbGVtZW50cyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbmltcG9ydCB7IEJyb3dzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9icm93c2VyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWhlYWRlci90cy1oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUc0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvdHMtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUc0Zvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1mb290ZXIvdHMtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtaGVhZGVyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IENpdHlTZWFyY2hQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvY2l0eS1zZWFyY2gtcG9wdXAvY2l0eS1zZWFyY2gtcG9wdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtaGVhZGVyL2hhbWJ1cmdlci1tZW51L2hhbWJ1cmdlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy90aW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBUc0xvZ2luU2lnbnVwTW9kdWxlIH0gZnJvbSAnLi4vbG9naW5TaWdudXAvbG9naW4tc2lnbnVwLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgVHNMb2dpblNpZ251cE1vZHVsZSxcbiAgICBUc0Zvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRzSGVhZGVyQ29tcG9uZW50LFxuICAgIFRzRm9vdGVyQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQsXG4gICAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgICBVc2VyTWVudUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVHNIZWFkZXJDb21wb25lbnQsXG4gICAgVHNGb290ZXJDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIENpdHlTZWFyY2hQb3B1cENvbXBvbmVudCxcbiAgICBIYW1idXJnZXJNZW51Q29tcG9uZW50LFxuICAgIFVzZXJNZW51Q29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFRpbWVTZXJ2aWNlLFxuICAgIERhdGVQaXBlLFxuICAgIEFwaVNlcnZpY2UsXG4gICAgSGVhZGVyU2VydmljZSxcbiAgICBCcm93c2VyU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7IH1cbiJdfQ==