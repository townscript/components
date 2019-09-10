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
import { UserService } from '../../shared/services/user-service';
import { PlaceService } from './components/ts-header/place.service';
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
                BrowserService,
                UserService,
                PlaceService
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNoSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN4RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFzQ3BFO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBcEN4QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLG1CQUFtQjtnQkFDbkIsYUFBYTthQUNkO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQixlQUFlO2dCQUNmLHdCQUF3QjtnQkFDeEIsc0JBQXNCO2dCQUN0QixpQkFBaUI7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsaUJBQWlCO2dCQUNqQixpQkFBaUI7Z0JBQ2pCLGVBQWU7Z0JBQ2Ysd0JBQXdCO2dCQUN4QixzQkFBc0I7Z0JBQ3RCLGlCQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxXQUFXO2dCQUNYLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxZQUFZO2FBQ2I7U0FDRixDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUc0Zvcm1zTW9kdWxlIH0gZnJvbSAnQHRvd25zY3JpcHQvZWxlbWVudHMnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG5pbXBvcnQgeyBCcm93c2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvYnJvd3Nlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvdHMtaGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtaGVhZGVyL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVHNIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtaGVhZGVyL3RzLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHNGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtZm9vdGVyL3RzLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWhlYWRlci9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtaGVhZGVyL2NpdHktc2VhcmNoLXBvcHVwL2NpdHktc2VhcmNoLXBvcHVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RzLWhlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdGltZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgVHNMb2dpblNpZ251cE1vZHVsZSB9IGZyb20gJy4uL2xvZ2luU2lnbnVwL2xvZ2luLXNpZ251cC5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdXNlci1zZXJ2aWNlJztcbmltcG9ydCB7IFBsYWNlU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvcGxhY2Uuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgVHNMb2dpblNpZ251cE1vZHVsZSxcbiAgICBUc0Zvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRzSGVhZGVyQ29tcG9uZW50LFxuICAgIFRzRm9vdGVyQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQsXG4gICAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgICBVc2VyTWVudUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVHNIZWFkZXJDb21wb25lbnQsXG4gICAgVHNGb290ZXJDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIENpdHlTZWFyY2hQb3B1cENvbXBvbmVudCxcbiAgICBIYW1idXJnZXJNZW51Q29tcG9uZW50LFxuICAgIFVzZXJNZW51Q29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFRpbWVTZXJ2aWNlLFxuICAgIERhdGVQaXBlLFxuICAgIEFwaVNlcnZpY2UsXG4gICAgSGVhZGVyU2VydmljZSxcbiAgICBCcm93c2VyU2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBQbGFjZVNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XG4iXX0=